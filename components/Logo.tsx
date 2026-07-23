import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Logo({ tagline }: { tagline: string }) {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="Moneywise home">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#4361ee] to-[#7b61ff] text-white shadow-soft">
        <GraduationCap className="h-6 w-6" />
      </span>
      <span className="min-w-0">
        <span className="block text-lg font-black leading-none text-ink sm:text-xl">Moneywise</span>
        <span className="moneywise-tagline mt-1 block truncate text-[0.7rem] font-bold leading-tight text-ink/60 sm:text-xs">{tagline}</span>
      </span>
    </Link>
  );
}
