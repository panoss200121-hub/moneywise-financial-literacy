import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Logo({ tagline }: { tagline: string }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Moneywise home">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#4361ee] to-[#7b61ff] text-white shadow-soft">
        <GraduationCap className="h-6 w-6" />
      </span>
      <span>
        <span className="block text-xl font-black leading-none text-ink">Moneywise</span>
        <span className="mt-1 block text-xs font-bold text-ink/45">{tagline}</span>
      </span>
    </Link>
  );
}
