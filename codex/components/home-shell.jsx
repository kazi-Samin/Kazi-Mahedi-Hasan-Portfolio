"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Mail, UserPlus } from "lucide-react";
import { friends as seededFriends, getSummaryCards } from "@/lib/friends";
import { StatusPill } from "@/components/status-pill";

export function HomeShell() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFriends() {
      setLoading(true);
      const response = await fetch("/api/friends", { cache: "no-store" });
      const data = await response.json();
      setFriends(data);
      setLoading(false);
    }

    loadFriends();
  }, []);

  const summaryCards = getSummaryCards(friends.length ? friends : seededFriends);

  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Friendship manager</p>
          <h1>Keep the people you care about from slipping into “I should text them soon.”</h1>
          <p className="hero-text">
            Track who needs a call, who is almost due for a message, and where your most important friendships are getting attention.
          </p>
          <Link href="/friends/1" className="primary-button">
            <UserPlus size={18} />
            <span>Add a Friend</span>
          </Link>
        </div>

        <div className="summary-grid">
          {summaryCards.map((card) => (
            <article key={card.label} className="summary-card">
              <span>{card.label}</span>
              <strong>{card.value}</strong>
              <p>{card.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-head">
        <div>
          <p className="eyebrow">Your friends</p>
          <h2>Relationship health at a glance</h2>
        </div>
      </section>

      {loading ? (
        <section className="loader-card" aria-live="polite">
          <div className="spinner" />
          <p>Loading your friend circle...</p>
        </section>
      ) : (
        <section className="friends-grid">
          {friends.map((friend) => (
            <Link key={friend.id} href={`/friends/${friend.id}`} className="friend-card">
              <div className="friend-card-top">
                <div className="avatar-wrap">
                  <Image src={friend.picture} alt={friend.name} fill sizes="80px" />
                </div>
                <StatusPill status={friend.status} />
              </div>

              <div className="friend-main">
                <h3>{friend.name}</h3>
                <div className="metric-row">
                  <span>
                    <CalendarDays size={15} />
                    {friend.days_since_contact} days since contact
                  </span>
                  <span>
                    <Mail size={15} />
                    {friend.email}
                  </span>
                </div>
              </div>

              <div className="tag-row">
                {friend.tags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="friend-card-footer">
                <span>Open details</span>
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </section>
      )}
    </div>
  );
}
