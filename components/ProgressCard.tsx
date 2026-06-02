type ProgressCardProps = {
  label: string;
  value: string;
  progress: number;
  helper: string;
};

export function ProgressCard({ label, value, progress, helper }: ProgressCardProps) {
  return (
    <section className="rounded-[1.75rem] bg-ink p-7 text-white shadow-premium">
      <p className="text-sm font-black text-white/55">{label}</p>
      <div className="mt-3 text-5xl font-black">{value}</div>
      <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/15">
        <div className="h-full rounded-full bg-gradient-to-r from-mint to-sun" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-4 leading-7 text-white/70">{helper}</p>
    </section>
  );
}
