"use client";
import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";
import { EducationalSources } from "@/components/EducationalSources";
import { LessonEngine } from "@/components/LessonEngine";
import { getLessonById } from "@/data/curriculum";
import { useI18n } from "@/lib/i18n";
export default function Page({params}:{params:{lessonId:string}}){const{lang}=useI18n();const lesson=getLessonById(params.lessonId);const el=lang==="el";return <main className="min-h-screen bg-[#f5f8f7] px-4 py-5 sm:px-6 sm:py-8"><div className="mx-auto max-w-4xl"><header className="mb-5"><div className="flex items-center justify-between gap-4"><Link href="/dashboard" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 text-sm font-extrabold shadow-soft"><ArrowLeft className="h-4 w-4"/>{el?"Έξοδος από το μάθημα":"Exit lesson"}</Link><span className="inline-flex items-center gap-2 text-sm font-bold text-ink/55"><Clock3 className="h-4 w-4"/>{lesson.estimatedMinutes} min</span></div><div className="mt-6"><p className="text-sm font-extrabold text-mint">{el?"Μάθημα Moneywise":"Moneywise lesson"}</p><h1 className="mt-2 text-3xl font-black tracking-[-.02em] sm:text-5xl">{lesson.title[lang]}</h1><p className="mt-3 max-w-2xl leading-7 text-ink/60">{lesson.objective[lang]}</p></div></header><LessonEngine lesson={lesson}/><div className="mt-5"><EducationalSources compact/></div></div></main>}
