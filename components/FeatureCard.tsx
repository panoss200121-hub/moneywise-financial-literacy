import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone?: string;
};

export function FeatureCard({ title, description, icon: Icon, tone = "bg-mint/15 text-mint" }: FeatureCardProps) {
  return (
    <article className="group rounded-[1.85rem] border border-white/80 bg-gradient-to-br from-white to-cloud/70 p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-premium">
      <span className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl shadow-soft transition group-hover:scale-105 ${tone}`}>
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="text-xl font-black text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-ink/65">{description}</p>
    </article>
  );
}
