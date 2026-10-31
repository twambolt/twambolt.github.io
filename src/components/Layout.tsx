import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  // { to: "/elements", label: "Elements" },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-5">
          <Link to="/" className="font-serif text-lg font-semibold tracking-tight hover:text-accent transition-colors">
            Terry Wambolt
          </Link>
          <nav className="flex items-center gap-1 sm:gap-4">
            {nav.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `rounded-md px-2 py-1 text-sm transition-colors ${
                    isActive ? "text-accent" : "text-muted hover:text-ink"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="https://github.com/twambolt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="p-2 text-muted transition-colors hover:text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.12v3.15c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-5 py-12">{children}</main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-4xl flex-col gap-1 px-5 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; Terry Wambolt. All rights reserved.</p>
          <p>
            Built with{" "}
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-2 hover:text-ink">
              React
            </a>
            ,{" "}
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-2 hover:text-ink">
              Vite
            </a>
            , and{" "}
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-2 hover:text-ink">
              Tailwind CSS
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
