import { Banknote, BookOpen, BriefcaseBusiness, GraduationCap, HeartHandshake, PiggyBank, ShieldCheck, ShoppingBasket, Smartphone, Target, UsersRound, WalletCards } from "lucide-react";

export function LifeStagesVisual() {
  return (
    <div className="relative min-h-[330px] overflow-hidden rounded-[1.5rem] bg-[#eaf6f7] p-4 sm:min-h-[450px] sm:rounded-[2rem] sm:p-8" role="img" aria-label="Μαθησιακή διαδρομή από τις πρώτες έννοιες του χρήματος έως τον σχεδιασμό του μέλλοντος">
      <div className="absolute inset-x-8 top-1/2 h-2 -translate-y-1/2 rounded-full bg-white shadow-soft" />
      <div className="absolute left-[8%] right-[8%] top-1/2 flex -translate-y-1/2 justify-between sm:left-[12%] sm:right-[12%]">
        {[PiggyBank, Smartphone, BriefcaseBusiness, UsersRound].map((Icon, index) => (
          <div key={index} className="relative">
            <span className={`grid h-12 w-12 place-items-center rounded-xl border-[3px] border-white shadow-premium sm:h-20 sm:w-20 sm:rounded-[1.35rem] sm:border-4 ${index === 0 ? "bg-[#ffd875] text-[#755000]" : index === 1 ? "bg-[#a9dfe7] text-[#14526a]" : index === 2 ? "bg-[#ffb7a6] text-[#782d27]" : "bg-[#9dd9ca] text-[#164f45]"}`}>
              <Icon className="h-6 w-6 sm:h-10 sm:w-10" />
            </span>
            <span className="absolute left-1/2 top-[calc(100%+12px)] -translate-x-1/2 whitespace-nowrap text-xs font-extrabold text-ink/65 sm:text-sm">
              {["6–12", "13–17", "18–54", "55+"][index]}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute left-4 top-4 rounded-xl bg-white px-3 py-2.5 shadow-soft sm:left-9 sm:top-9 sm:rounded-2xl sm:px-4 sm:py-3">
        <p className="text-xs font-extrabold text-ink/50">MONEYWISE</p>
        <p className="mt-1 font-black text-ink">Μαθαίνω για τη ζωή</p>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl bg-ink p-3 text-white shadow-premium sm:bottom-9 sm:right-9 sm:gap-3 sm:rounded-2xl sm:p-4">
        <Target className="h-7 w-7 text-sun" />
        <div><p className="text-xs font-bold text-white/60">ΕΠΟΜΕΝΟ ΒΗΜΑ</p><p className="font-black">Ο δικός σου στόχος</p></div>
      </div>
      <span className="absolute right-8 top-8 hidden h-12 w-12 place-items-center rounded-full bg-white text-mint shadow-soft sm:grid"><BookOpen /></span>
    </div>
  );
}

export function ClusterVisual({ type }: { type: "everyday" | "planning" | "protection" | "future" }) {
  const map = {
    everyday: [ShoppingBasket, WalletCards, "bg-[#fff0cf] text-[#7a5200]"],
    planning: [Banknote, PiggyBank, "bg-[#def2f5] text-[#14526a]"],
    protection: [ShieldCheck, Smartphone, "bg-[#e8eee9] text-[#285447]"],
    future: [GraduationCap, HeartHandshake, "bg-[#eee8f8] text-[#4f3d75]"]
  } as const;
  const [Primary, Secondary, tone] = map[type];
  return <div className={`relative h-28 overflow-hidden rounded-[1.4rem] ${tone}`} aria-hidden="true"><Primary className="absolute bottom-4 left-5 h-14 w-14" /><Secondary className="absolute right-4 top-4 h-10 w-10 opacity-45" /><span className="absolute bottom-5 right-5 h-3 w-16 rounded-full bg-current opacity-15" /></div>;
}

export function ToolPreviewVisual({ type }: { type: "budget" | "shopping" | "scam" }) {
  if (type === "budget") return <div className="space-y-3 rounded-[1.4rem] bg-[#edf7f8] p-5" aria-hidden="true"><div className="flex justify-between text-sm font-black"><span>Έσοδα</span><span>1.250 €</span></div><div className="h-3 overflow-hidden rounded-full bg-white"><div className="h-full w-3/4 rounded-full bg-mint"/></div><div className="grid grid-cols-3 gap-2">{[45,30,25].map((x,i)=><div key={i} className="rounded-xl bg-white p-3 text-center text-xs font-black">{x}%</div>)}</div></div>;
  if (type === "shopping") return <div className="grid grid-cols-2 gap-3 rounded-[1.4rem] bg-[#fff6df] p-5" aria-hidden="true">{[["Α","4,80 €"],["Β","4,25 €"]].map((x,i)=><div key={x[0]} className={`rounded-xl border-2 bg-white p-4 ${i===1?"border-mint":"border-transparent"}`}><ShoppingBasket className="h-6 w-6"/><p className="mt-4 text-xs font-bold">Επιλογή {x[0]}</p><p className="font-black">{x[1]}</p></div>)}</div>;
  return <div className="rounded-[1.4rem] bg-[#f2f5f8] p-5" aria-hidden="true"><div className="rounded-xl bg-white p-4 shadow-soft"><div className="flex items-center gap-2"><Smartphone className="h-5 w-5"/><span className="text-xs font-black">Άγνωστος αποστολέας</span></div><p className="mt-3 text-sm">«Πάτησε τώρα για επιβεβαίωση…»</p></div><div className="mt-3 flex items-center gap-2 font-black text-[#a53a32]"><ShieldCheck className="h-5 w-5"/>3 ύποπτα σημάδια</div></div>;
}
