import { statusTheme } from "@/lib/utils";

export function StatusPill({ status }) {
  return <span className={`status-pill ${statusTheme[status]}`}>{status}</span>;
}
