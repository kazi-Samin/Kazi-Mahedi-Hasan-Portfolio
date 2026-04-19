import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p>KinKeeper</p>
        <span>
          A calm relationship tracker that helps you stay intentional about the people you never want to lose touch with.
        </span>
      </div>

      <div className="footer-links">
        <Link href="/">Home</Link>
        <Link href="/timeline">Timeline</Link>
        <Link href="/stats">Stats</Link>
      </div>
    </footer>
  );
}
