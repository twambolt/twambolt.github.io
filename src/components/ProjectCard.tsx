import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  to?: string;
  href?: string;
  image: string;
  title: string;
  children: ReactNode;
  actionLabel: string;
};

export default function ProjectCard({ to, href, image, title, children, actionLabel }: Props) {
  const body = (
    <>
      <div className="overflow-hidden rounded-lg border border-line">
        <img src={image} alt="" className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
      </div>
      <h3 className="mt-4 font-serif text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{children}</p>
      <span className="mt-3 inline-block text-sm font-medium text-accent group-hover:underline">{actionLabel} &rarr;</span>
    </>
  );

  const className = "group block rounded-xl p-5 -mx-5 transition-colors hover:bg-code-bg/60";

  if (to) {
    return (
      <Link to={to} className={className}>
        {body}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  );
}
