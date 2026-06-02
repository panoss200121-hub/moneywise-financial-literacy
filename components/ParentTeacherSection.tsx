import type { LucideIcon } from "lucide-react";

export function ParentTeacherSection({ icon: Icon, title, body }: { icon: LucideIcon; title: string; body: string }) {
  return (
    <section className="rounded-[1.75rem] border border-white/80 bg-gradient-to-br from-white to-cloud/70 p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-premium">
      <Icon className="h-8 w-8 text-mint" />
      <h2 className="mt-5 text-2xl font-black text-ink">{title}</h2>
      <p className="mt-3 leading-7 text-ink/65">{body}</p>
    </section>
  );
}
