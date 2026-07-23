"use client";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { EducationalFoundation, PageHeader } from "@/components/PlatformCards";
import { useI18n } from "@/lib/i18n";
type Item={title:{el:string,en:string};body:{el:string,en:string}};
export function SupportPage({eyebrow,title,body,items,sources=false}:{eyebrow:{el:string,en:string};title:{el:string,en:string};body:{el:string,en:string};items:Item[];sources?:boolean}){const{lang}=useI18n();return <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8"><PageHeader eyebrow={eyebrow[lang]} title={title[lang]} body={body[lang]}/><div className="mt-8 grid gap-5 md:grid-cols-2">{items.map(item=><article key={item.title.el} className="rounded-[1.6rem] bg-white p-6 shadow-soft"><CheckCircle2 className="h-6 w-6 text-mint"/><h2 className="mt-4 text-2xl font-black">{item.title[lang]}</h2><p className="mt-3 whitespace-pre-line leading-7 text-ink/65">{item.body[lang]}</p></article>)}</div>{sources&&<div className="mt-8"><EducationalFoundation/></div>}<Link href="/curriculum" className="mt-8 inline-flex rounded-full bg-ink px-6 py-4 font-black text-white">{lang==="el"?"Δες το πρόγραμμα μάθησης":"View the curriculum"}</Link></main>}

