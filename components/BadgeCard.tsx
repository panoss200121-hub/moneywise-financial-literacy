import type { LucideIcon } from "lucide-react";

export function BadgeCard({ icon: Icon, title, caption }: { icon: LucideIcon; title: string; caption: string }) {
  return (
    <article className="rounded-[1.5rem] border border-white/80 bg-gradient-to-br from-white to-cloud/70 p-5 shadow-soft">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sun/40 to-white text-ink shadow-soft">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 font-black text-ink">{title}</h3>
      <p className="mt-1 text-sm font-semibold text-ink/55">{caption}</p>
    </article>
  );
}
