"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { friends } from "@/lib/friends";
import { timelineSeed } from "@/lib/timeline-seed";

const STORAGE_KEY = "kinkeeper-timeline";

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [timelineEntries, setTimelineEntries] = useState(timelineSeed);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const savedEntries = window.localStorage.getItem(STORAGE_KEY);

    if (savedEntries) {
      try {
        setTimelineEntries(JSON.parse(savedEntries));
      } catch {
        setTimelineEntries(timelineSeed);
      }
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(timelineEntries));
  }, [hydrated, timelineEntries]);

  const addTimelineEntry = (friend, type) => {
    const entry = {
      id: `${type}-${friend.id}-${Date.now()}`,
      friendId: friend.id,
      type,
      date: new Date().toISOString(),
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} with ${friend.name}`,
    };

    setTimelineEntries((currentEntries) => [entry, ...currentEntries]);
    toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} logged for ${friend.name}`);
  };

  const analytics = useMemo(() => {
    const base = { call: 0, text: 0, video: 0 };

    timelineEntries.forEach((entry) => {
      base[entry.type] += 1;
    });

    return [
      { name: "Call", value: base.call, color: "#1f5747" },
      { name: "Text", value: base.text, color: "#f1b24c" },
      { name: "Video", value: base.video, color: "#5fb3c8" },
    ];
  }, [timelineEntries]);

  const value = useMemo(
    () => ({
      analytics,
      friends,
      hydrated,
      timelineEntries,
      addTimelineEntry,
    }),
    [analytics, hydrated, timelineEntries]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const value = useContext(AppStateContext);

  if (!value) {
    throw new Error("useAppState must be used inside AppStateProvider");
  }

  return value;
}
