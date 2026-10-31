import type { ReactNode } from "react";

export default function Page({ title, intro, children }: { title: string; intro?: string; children: ReactNode }) {
  return (
    <article>
      <header className="mb-10 border-b border-line pb-8">
        <h1 className="font-serif text-4xl font-bold tracking-tight">{title}</h1>
        {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
      </header>
      <div className="space-y-10">{children}</div>
    </article>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-2xl font-semibold tracking-tight text-accent-ink dark:text-accent">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-ink/90">{children}</div>
    </section>
  );
}
