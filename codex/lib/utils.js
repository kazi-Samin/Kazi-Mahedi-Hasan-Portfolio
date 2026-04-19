export const statusTheme = {
  overdue: "status-overdue",
  "almost due": "status-almost-due",
  "on-track": "status-on-track",
};

export const interactionMeta = {
  call: { label: "Call", className: "interaction-call" },
  text: { label: "Text", className: "interaction-text" },
  video: { label: "Video", className: "interaction-video" },
};

export function formatFriendlyDate(value) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export function formatDetailDate(value) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}
