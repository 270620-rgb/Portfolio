"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Instagram, Linkedin, Mail, Menu, Play, Sparkles, X } from "lucide-react";

const services = [
  { title: "Social Media", text: "Strategy, content and campaigns that make your brand impossible to ignore.", icon: "01" },
  { title: "Video Editing", text: "High-retention reels, ads and cinematic edits built for modern attention spans.", icon: "02" },
  { title: "Brand Design", text: "Scroll-stopping visuals, identity systems and creatives that feel premium.", icon: "03" },
  { title: "Meta Ads", text: "Creative-led advertising focused on leads, sales and measurable growth.", icon: "04" },
  { title: "Web Design", text: "Fast, modern landing pages that turn attention into real business.", icon: "05" },
  { title: "Content Strategy", text: "A clear content engine so you always know what to post and why.", icon: "06" },
];

const process = [
  ["01", "Discover", "We understand your offer, audience and growth goals."],
  ["02", "Create", "We turn the strategy into sharp visuals, video and campaigns."],
  ["03", "Launch", "Everything goes live with clear messaging and strong CTAs."],
  ["04", "Optimize", "We review what performs and keep improving the system."],
];

export default function SkylineMediaPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none grid-background opacity-40" />
      <div className="fixed -top-40 -left-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="fixed top-[35%] -right-40 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-[140px] pointer-events-none" />

      <header className="relative z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl sticky top-0">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          <a href="#top" className="font-black tracking-[-0.05em] text-2xl">SKYLINE<span className="text-blue-500">.</span></a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/65">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Our Work</a>
            <a href="#process" className="hover:text-white transition">Process</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-blue-500 hover:text-white transition">Let’s Talk <ArrowRight size={15} /></a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2" aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="md:hidden border-t border-white/10 px-5 py-5 grid gap-4 bg-black/90"><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#work" onClick={() => setMenuOpen(false)}>Our Work</a><a href="#process" onClick={() => setMenuOpen(false)}>Process</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div>}
      </header>

      <section id="top" className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-24 md:pt-36 pb-28">
        <div className="max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/60"><Sparkles size={13} className="text-blue-400" /> Creative Growth Studio</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }} className="mt-8 text-6xl sm:text-7xl md:text-8xl font-black tracking-[-0.065em] leading-[.9]">WE MAKE<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-blue-400">BRANDS MOVE.</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }} className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-white/55">Skyline Media helps ambitious businesses win attention with social media, video, design, ads and web experiences built to drive growth.</motion.p>
          <div className="mt-10 flex flex-wrap gap-4"><a href="#contact" className="inline-flex items-center gap-3 rounded-full bg-blue-500 px-7 py-4 font-semibold hover:bg-blue-400 transition">Start a Project <ArrowRight size={18}/></a><a href="#work" className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 font-semibold hover:bg-white/[0.07] transition"><Play size={17}/> See Our Work</a></div>
        </div>
        <div className="mt-24 grid md:grid-cols-3 gap-4">
          {[['10X','More attention with better creative'],['24/7','Content mindset for your brand'],['ONE','Partner from idea to execution']].map(([big, small], i) => <motion.div key={big} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.15+i*.08}} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md"><div className="text-4xl font-black tracking-[-0.05em]">{big}</div><div className="mt-2 text-sm text-white/45">{small}</div></motion.div>)}
        </div>
      </section>

      <section id="services" className="relative z-10 border-y border-white/10 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"><div><p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.2em]">What we do</p><h2 className="mt-3 text-4xl md:text-6xl font-black tracking-[-0.05em]">Creative that works.</h2></div><p className="max-w-md text-white/45 leading-relaxed">No random posting. No generic templates. Just focused creative systems designed around your business.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{services.map((s) => <motion.div key={s.title} whileHover={{y:-6}} className="group rounded-3xl border border-white/10 bg-black/40 p-7 min-h-60 hover:border-blue-500/40 transition backdrop-blur-sm"><div className="flex items-center justify-between"><span className="text-xs font-mono text-white/30">{s.icon}</span><span className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition"><ArrowRight size={15}/></span></div><h3 className="mt-16 text-2xl font-bold tracking-tight">{s.title}</h3><p className="mt-3 text-white/45 leading-relaxed text-sm">{s.text}</p></motion.div>)}</div>
        </div>
      </section>

      <section id="work" className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-24 md:py-32">
        <div className="flex items-center justify-between mb-12"><div><p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.2em]">Selected work</p><h2 className="mt-3 text-4xl md:text-6xl font-black tracking-[-0.05em]">Built to stand out.</h2></div><a href="#contact" className="hidden sm:flex items-center gap-2 text-sm text-white/65 hover:text-white">Work with us <ArrowRight size={15}/></a></div>
        <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-4">
          <div className="group relative overflow-hidden rounded-[2rem] min-h-[520px] border border-white/10 bg-gradient-to-br from-blue-600/40 via-[#0e1220] to-black"><div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle at 25% 30%, rgba(255,255,255,.24) 0 1px, transparent 1px)',backgroundSize:'12px 12px'}}/><div className="absolute inset-x-0 bottom-0 p-8"><span className="text-xs uppercase tracking-[.18em] text-blue-300">Social • Video • Ads</span><h3 className="mt-2 text-4xl font-black tracking-[-0.05em]">Attention is the new currency.</h3><p className="mt-3 text-white/45 max-w-md">Creative campaigns that turn a scroll into a second look.</p></div></div>
          <div className="grid gap-4"><div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 min-h-60"><p className="text-white/35 text-sm">CASE STUDY 01</p><h3 className="mt-12 text-3xl font-bold">From inconsistent posting to a real content system.</h3></div><div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8 min-h-60"><p className="text-white/35 text-sm">CASE STUDY 02</p><h3 className="mt-12 text-3xl font-bold">Premium visual identity for a modern brand.</h3></div></div>
        </div>
      </section>

      <section id="process" className="relative z-10 border-y border-white/10 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 md:py-32"><p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.2em]">How we work</p><h2 className="mt-3 text-4xl md:text-6xl font-black tracking-[-0.05em]">Simple. Sharp. Repeatable.</h2><div className="mt-14 grid md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-[2rem] overflow-hidden">{process.map(([num,title,copy]) => <div key={num} className="bg-[#080808] p-7 md:min-h-60"><div className="text-xs font-mono text-blue-400">{num}</div><h3 className="mt-16 text-2xl font-bold">{title}</h3><p className="mt-3 text-sm text-white/45 leading-relaxed">{copy}</p></div>)}</div></div>
      </section>

      <section id="contact" className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-24 md:py-32"><div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.015] p-8 md:p-16 overflow-hidden relative"><div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]"/><div className="relative max-w-3xl"><p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.2em]">Let’s build something</p><h2 className="mt-4 text-5xl md:text-7xl font-black tracking-[-0.06em] leading-[.92]">READY TO TAKE YOUR BRAND TO THE NEXT LEVEL?</h2><p className="mt-7 text-white/50 text-lg">Tell us what you’re building. We’ll tell you what we’d do next.</p><a href="mailto:hello@skylinemedia.agency" className="mt-9 inline-flex items-center gap-3 rounded-full bg-white text-black px-7 py-4 font-semibold hover:bg-blue-500 hover:text-white transition"><Mail size={18}/> hello@skylinemedia.agency <ArrowRight size={18}/></a></div></div></section>

      <footer className="relative z-10 border-t border-white/10"><div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row gap-5 items-center justify-between"><div><div className="font-black text-xl tracking-[-0.05em]">SKYLINE<span className="text-blue-500">.</span></div><p className="mt-1 text-xs text-white/35">Creative growth studio.</p></div><div className="flex items-center gap-5 text-white/40"><a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={18}/></a><a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18}/></a><span className="text-xs">© 2026 Skyline Media</span></div></div></footer>
    </main>
  );
}
