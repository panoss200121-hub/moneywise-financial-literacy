import type { LucideIcon } from "lucide-react";

export function DashboardStat({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <article className="rounded-[1.5rem] border border-white/80 bg-gradient-to-br from-white to-cloud/70 p-5 shadow-soft">
      <Icon className="h-6 w-6 text-grape" />
      <p className="mt-5 text-3xl font-black text-ink">{value}</p>
      <p className="mt-1 text-sm font-bold text-ink/55">{label}</p>
    </article>
  );
}
