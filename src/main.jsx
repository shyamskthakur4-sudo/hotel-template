import React,{useRef,useState} from "react";
import {createRoot} from "react-dom/client";
import {motion,useScroll,useTransform} from "motion/react";
import {ArrowDownRight,ArrowUpRight,MapPin,Phone,Mail,Menu,X,Clock3,Compass,Utensils,Leaf,Star} from "lucide-react";
import "./index.css";

const media={
  hero:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=88",
  room:"https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1800&q=88",
  dining:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=88",
  lounge:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=88",
  pool:"https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1800&q=88",
  heritage:"https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1800&q=88"
};

const ease=[0.22,1,0.36,1];
const reveal={
  hidden:{opacity:0,y:42},
  visible:{opacity:1,y:0,transition:{duration:.8,ease}}
};

function DepthFrame({src,alt,className="",overlay=true}){
  const ref=useRef(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
  const y=useTransform(scrollYProgress,[0,1],["-9%","9%"]);
  const scale=useTransform(scrollYProgress,[0,1],[1.08,1.18]);
  return <div ref={ref} className={"relative overflow-hidden "+className}>
    <motion.img src={src} alt={alt} style={{y,scale}} className="absolute inset-0 h-full w-full object-cover will-change-transform"/>
    {overlay&&<div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5"/>}
  </div>;
}

function ExperienceScene(){
  const ref=useRef(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
  const rotateX=useTransform(scrollYProgress,[0,.48,1],[12,0,-8]);
  const rotateY=useTransform(scrollYProgress,[0,.5,1],[-8,0,8]);
  const y=useTransform(scrollYProgress,[0,1],[80,-80]);
  const scale=useTransform(scrollYProgress,[0,.48,1],[.88,1,.92]);
  const imageY=useTransform(scrollYProgress,[0,1],["8%","-8%"]);
  return <section ref={ref} id="experience" className="relative overflow-hidden bg-[#171512] py-32 text-white md:py-44">
    <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(196,163,102,.18),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,.06),transparent_28%)]"/>
    <div className="relative mx-auto max-w-7xl px-6 md:px-10">
      <div className="grid gap-16 lg:grid-cols-[.65fr_1.35fr] lg:items-center">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}} className="max-w-xl">
          <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[.3em] text-[#d6bc83]"><span className="h-px w-8 bg-[#d6bc83]"/>A slower kind of luxury</div>
          <h2 className="serif text-5xl leading-[.94] md:text-7xl">The art of <em className="font-normal text-[#d6bc83]">staying.</em></h2>
          <p className="mt-8 max-w-md text-sm leading-7 text-white/55 md:text-base">A good hotel disappears behind the experience. The light, the room, the table, the quiet — they simply make the day feel better.</p>
          <div className="mt-10 flex gap-8 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[.22em] text-white/45"><span>01 / Rest</span><span>02 / Gather</span><span>03 / Explore</span></div>
        </motion.div>
        <div className="relative [perspective:1400px]">
          <motion.div style={{rotateX,rotateY,y,scale,transformStyle:"preserve-3d"}} className="relative mx-auto aspect-[1.22/1] max-w-3xl will-change-transform">
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] border border-[#d6bc83]/20 bg-[#c5a56b]/5 [transform:translateZ(-55px)] md:translate-x-8 md:translate-y-8"/>
            <div className="absolute -inset-4 rounded-[2.25rem] border border-white/10 [transform:translateZ(-25px)]"/>
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-[0_45px_120px_rgba(0,0,0,.5)] [transform:translateZ(30px)]">
              <motion.img src={media.lounge} alt="Raj Villas lounge" style={{y:imageY,scale:1.12}} className="absolute inset-0 h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/5"/>
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between"><div><div className="text-[9px] uppercase tracking-[.28em] text-white/55">Raj Villas / Shivpuri</div><div className="serif mt-2 text-2xl">Quiet corners, warm light.</div></div><div className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur"><ArrowUpRight size={17}/></div></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>;
}

function App(){
  const[menu,setMenu]=useState(false),[reserve,setReserve]=useState(false);
  const nav=[["Stay","#stay"],["Experience","#experience"],["Dining","#dining"],["Shivpuri","#discover"],["Contact","#contact"]];
  const heroRef=useRef(null);
  const {scrollYProgress}=useScroll({target:heroRef,offset:["start start","end start"]});
  const heroScale=useTransform(scrollYProgress,[0,1],[1,1.16]);
  const heroY=useTransform(scrollYProgress,[0,1],["0%","22%"]);
  const heroTextY=useTransform(scrollYProgress,[0,1],[0,-120]);
  const heroOpacity=useTransform(scrollYProgress,[0,.72],[1,0]);

  return <div className="min-h-screen overflow-x-hidden bg-[#f4efe6] text-[#25221d]">
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-[1400px] items-center justify-between px-4 md:px-8">
        <div className="flex w-full items-center justify-between rounded-full border border-white/15 bg-[#141310]/76 px-5 py-3 text-white shadow-[0_18px_50px_rgba(0,0,0,.24)] backdrop-blur-xl md:px-7">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[#d4bc83]/50 text-[#d4bc83]"><span className="serif text-lg">R</span></span>
            <span><span className="serif block text-[16px] leading-none">Raj Villas</span><span className="mt-1 block text-[8px] uppercase tracking-[.34em] text-white/45">Shivpuri</span></span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">{nav.map(([label,href])=><a key={href} href={href} className="text-[10px] uppercase tracking-[.22em] text-white/65 transition-colors hover:text-[#d9c18a]">{label}</a>)}</nav>
          <div className="hidden items-center gap-2 md:flex"><a href="tel:9999999990" className="rounded-full px-4 py-2 text-[11px] uppercase tracking-[.12em] text-white/65 hover:text-white">Call</a><button onClick={()=>setReserve(true)} className="rounded-full bg-[#c5a56b] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[.12em] text-[#15130f] transition-transform hover:scale-[1.03]">Reserve</button></div>
          <button className="md:hidden" aria-label="Open menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
        </div>
      </div>
      {menu&&<div className="mx-4 mt-2 rounded-3xl border border-white/10 bg-[#141310]/96 p-6 text-white backdrop-blur-xl md:hidden"><div className="grid gap-5">{nav.map(([label,href])=><a key={href} href={href} onClick={()=>setMenu(false)} className="text-sm uppercase tracking-[.2em] text-white/70">{label}</a>)}</div><button onClick={()=>{setMenu(false);setReserve(true)}} className="mt-7 w-full rounded-full bg-[#c5a56b] py-3 text-sm font-semibold text-[#15130f]">Reserve your stay</button></div>}
    </header>

    <main id="top">
      <section ref={heroRef} className="relative min-h-[100dvh] overflow-hidden bg-[#15130f]">
        <motion.img src={media.hero} alt="Luxury hotel interior" style={{scale:heroScale,y:heroY}} className="absolute inset-0 h-full w-full object-cover will-change-transform"/>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,13,10,.9)_0%,rgba(15,13,10,.48)_45%,rgba(15,13,10,.1)_100%)]"/>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,13,10,.9),transparent_45%,rgba(15,13,10,.28))]"/>
        <motion.div style={{y:heroTextY,opacity:heroOpacity}} className="relative flex min-h-[100dvh] items-end pb-16 pt-36 md:pb-24">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
            <div className="max-w-4xl">
              <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:.8,ease}} className="flex items-center gap-3 text-[10px] uppercase tracking-[.32em] text-[#d8bd83]"><span className="h-px w-10 bg-[#d8bd83]"/>Boutique hospitality / Madhya Pradesh</motion.div>
              <motion.h1 initial={{opacity:0,y:32}} animate={{opacity:1,y:0}} transition={{duration:1,delay:.08,ease}} className="serif mt-6 max-w-4xl text-[15vw] leading-[.79] tracking-[-.045em] text-white sm:text-8xl md:text-[9rem]">Raj<br/><span className="ml-[7vw] text-[#d8bd83]">Villas.</span></motion.h1>
              <div className="mt-9 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
                <p className="max-w-md text-sm leading-7 text-white/62 md:text-base">A relaxed hotel stay in Shivpuri, shaped by warm hospitality, generous light and the unhurried rhythm of central India.</p>
                <a href="#stay" className="group inline-flex w-fit items-center gap-3 text-[10px] uppercase tracking-[.24em] text-white/75">Enter the hotel <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition group-hover:border-[#d8bd83] group-hover:bg-[#d8bd83] group-hover:text-[#15130f]"><ArrowDownRight size={16}/></span></a>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="absolute bottom-7 left-6 hidden items-center gap-3 text-[9px] uppercase tracking-[.25em] text-white/35 md:flex md:left-10"><span>26° north / Shivpuri</span><span className="h-px w-16 bg-white/15"/></div>
      </section>

      <section id="stay" className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}} className="grid gap-12 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <div><div className="text-[9px] uppercase tracking-[.32em] text-[#9a7942]">01 / The stay</div><h2 className="serif mt-5 text-5xl leading-[.9] sm:text-6xl md:text-8xl">A place to<br/><span className="text-[#9c7943]">settle in.</span></h2></div>
          <div className="max-w-xl md:pb-2"><p className="text-base leading-8 text-[#615a4f] md:text-lg">Not a lobby you rush through. Not a room you only sleep in. Raj Villas is designed around the small rituals that make a trip feel like a stay.</p><div className="mt-10 grid grid-cols-3 border-t border-[#d5cab9] pt-6"><div><div className="serif text-2xl">01</div><div className="mt-2 text-[9px] uppercase tracking-[.2em] text-[#877d6e]">Rest</div></div><div><div className="serif text-2xl">02</div><div className="mt-2 text-[9px] uppercase tracking-[.2em] text-[#877d6e]">Gather</div></div><div><div className="serif text-2xl">03</div><div className="mt-2 text-[9px] uppercase tracking-[.2em] text-[#877d6e]">Return</div></div></div></div>
        </motion.div>

        <div className="mt-20 grid gap-7 md:grid-cols-[1.2fr_.8fr]">
          <motion.figure variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}} className="group relative min-h-[620px] overflow-hidden rounded-[2.4rem] bg-[#1b1915] md:min-h-[760px]"><DepthFrame src={media.room} alt="Raj Villas guest room" className="absolute inset-0 h-full w-full"/><figcaption className="absolute bottom-0 left-0 right-0 p-7 md:p-9"><div className="text-[9px] uppercase tracking-[.28em] text-white/50">Rooms / Rest</div><div className="serif mt-2 text-3xl text-white md:text-4xl">Comfort with character.</div></figcaption></motion.figure>
          <div className="grid gap-7 md:pt-24"><motion.figure variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}} className="group relative min-h-[350px] overflow-hidden rounded-[2.4rem] bg-[#1b1915]"><DepthFrame src={media.lounge} alt="Raj Villas lounge" className="absolute inset-0 h-full w-full"/><figcaption className="absolute bottom-0 left-0 right-0 p-6"><div className="text-[9px] uppercase tracking-[.28em] text-white/50">Lounge / Gather</div><div className="serif mt-2 text-2xl text-white">Unhurried evenings.</div></figcaption></motion.figure><motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}} className="rounded-[2.4rem] bg-[#e7dece] p-7 md:p-8"><div className="text-[9px] uppercase tracking-[.28em] text-[#9a7942]">The essentials</div><div className="mt-7 grid gap-6"><div className="flex gap-4"><Clock3 className="mt-1 text-[#9b7946]" size={19}/><div><div className="serif text-xl">Easy arrivals</div><p className="mt-1 text-sm leading-6 text-[#706759]">A simple, direct check-in experience for a smoother first hour.</p></div></div><div className="flex gap-4"><MapPin className="mt-1 text-[#9b7946]" size={19}/><div><div className="serif text-xl">Close to Shivpuri</div><p className="mt-1 text-sm leading-6 text-[#706759]">A comfortable base for the town, heritage and surrounding nature.</p></div></div></div></motion.div></div>
        </div>
      </section>

      <ExperienceScene/>

      <section id="dining" className="relative overflow-hidden bg-[#e7dece] py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}} className="max-w-xl">
              <div className="flex items-center gap-3 text-[9px] uppercase tracking-[.3em] text-[#9a7942]"><span className="h-px w-8 bg-[#9a7942]"/>02 / Dining</div>
              <h2 className="serif mt-5 text-5xl leading-[.9] md:text-8xl">Come for the<br/><span className="text-[#9c7943]">table.</span></h2>
              <p className="mt-8 max-w-md text-base leading-8 text-[#655d51]">A warm room, familiar flavours and the kind of meal that makes you forget the time.</p>
              <button onClick={()=>setReserve(true)} className="mt-9 inline-flex items-center gap-3 text-[10px] uppercase tracking-[.23em] text-[#4e4435]">Ask about dining <ArrowUpRight size={16}/></button>
            </motion.div>
            <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}} className="relative [perspective:1300px]"><motion.div whileHover={{rotateY:-2,rotateX:1,scale:1.01}} transition={{type:"spring",stiffness:220,damping:25}} className="relative aspect-[1.08/1] overflow-hidden rounded-[2.5rem] bg-black shadow-[0_35px_90px_rgba(52,40,20,.16)] [transform-style:preserve-3d]"><DepthFrame src={media.dining} alt="Raj Villas dining room" className="h-full w-full"/><div className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[9px] uppercase tracking-[.25em] text-white backdrop-blur">Shivpuri / Dining</div></motion.div></motion.div>
          </div>
        </div>
      </section>

      <section id="discover" className="bg-[#15130f] py-28 text-white md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}} className="grid gap-10 md:grid-cols-[.65fr_1.35fr] md:items-end"><div><div className="text-[9px] uppercase tracking-[.3em] text-[#d6bc83]">03 / Shivpuri</div><h2 className="serif mt-5 text-5xl leading-[.9] md:text-8xl">Go beyond<br/><span className="text-[#d6bc83]">the room.</span></h2></div><p className="max-w-lg pb-2 text-sm leading-7 text-white/50 md:text-base">Forest mornings, old architecture and open skies make Shivpuri a place worth lingering in. Build a day around the places that feel distinctly local.</p></motion.div>
          <div className="mt-16 grid gap-7 lg:grid-cols-[1.25fr_.75fr]">
            <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}} className="group relative min-h-[620px] overflow-hidden rounded-[2.5rem] lg:min-h-[680px]"><DepthFrame src={media.heritage} alt="Heritage architecture in India" className="absolute inset-0 h-full w-full"/><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10"/><div className="absolute bottom-8 left-8 right-8 flex items-end justify-between"><div><div className="text-[9px] uppercase tracking-[.27em] text-white/45">Nature / Heritage</div><div className="serif mt-2 text-3xl md:text-4xl">Madhav National Park</div></div><div className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur"><Compass size={18}/></div></div></motion.div>
            <div className="grid gap-7"><motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}} className="rounded-[2.5rem] bg-[#222019] p-8 md:p-10"><Leaf className="text-[#d6bc83]" size={22}/><div className="serif mt-12 text-3xl">Scindia Chhatris</div><p className="mt-4 text-sm leading-7 text-white/48">A distinctive Shivpuri landmark for an architecture-led detour.</p><a href="#contact" className="mt-7 inline-flex items-center gap-2 text-[9px] uppercase tracking-[.24em] text-[#d6bc83]">Plan the day <ArrowUpRight size={14}/></a></motion.div><motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}} className="relative min-h-[300px] overflow-hidden rounded-[2.5rem]"><DepthFrame src={media.pool} alt="Poolside hotel atmosphere" className="absolute inset-0 h-full w-full"/><div className="absolute bottom-6 left-6 text-white"><div className="text-[9px] uppercase tracking-[.27em] text-white/45">Return / Unwind</div><div className="serif mt-2 text-2xl">End the day slowly.</div></div></motion.div></div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#e7dece] py-28 md:py-40">
        <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[#c6a76e]/10 blur-3xl"/>
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}} className="grid gap-12 lg:grid-cols-[1fr_.65fr] lg:items-end"><div><div className="text-[9px] uppercase tracking-[.3em] text-[#9a7942]">04 / Reservations</div><h2 className="serif mt-5 max-w-4xl text-5xl leading-[.9] md:text-8xl">Make the next<br/><span className="text-[#9c7943]">stay easy.</span></h2></div><div className="lg:pb-2"><p className="max-w-md text-base leading-8 text-[#655d51]">For room enquiries, dining or help planning your visit, speak directly with the Raj Villas team.</p><button onClick={()=>setReserve(true)} className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#171512] px-7 py-4 text-[10px] font-semibold uppercase tracking-[.2em] text-white transition-transform hover:scale-[1.02]">Reserve your stay <ArrowUpRight size={16}/></button></div></motion.div>
          <div className="mt-16 grid gap-4 border-t border-[#cfc3b1] pt-8 md:grid-cols-3"><a href="tel:9999999990" className="group rounded-2xl border border-[#d0c4b1] bg-white/30 p-6"><Phone size={19} className="text-[#9a7942]"/><div className="mt-10 text-[9px] uppercase tracking-[.22em] text-[#827867]">Call</div><div className="mt-1 text-sm font-medium group-hover:text-[#9a7942]">9999999990</div></a><a href="mailto:jwhvebjefb@gmail.com" className="group rounded-2xl border border-[#d0c4b1] bg-white/30 p-6"><Mail size={19} className="text-[#9a7942]"/><div className="mt-10 text-[9px] uppercase tracking-[.22em] text-[#827867]">Email</div><div className="mt-1 text-sm font-medium group-hover:text-[#9a7942]">jwhvebjefb@gmail.com</div></a><div className="rounded-2xl border border-[#d0c4b1] bg-white/30 p-6"><MapPin size={19} className="text-[#9a7942]"/><div className="mt-10 text-[9px] uppercase tracking-[.22em] text-[#827867]">Location</div><div className="mt-1 text-sm font-medium">Shivpuri, Madhya Pradesh</div></div></div>
        </div>
      </section>
    </main>

    <footer className="bg-[#15130f] px-6 py-8 text-white/45 md:px-10"><div className="mx-auto flex max-w-[1400px] flex-col gap-4 text-[11px] sm:flex-row sm:items-center sm:justify-between"><div className="serif text-lg text-white">Raj Villas Hotel</div><div>Shivpuri, Madhya Pradesh</div><a href="mailto:jwhvebjefb@gmail.com" className="hover:text-white">jwhvebjefb@gmail.com</a></div></footer>

    {reserve&&<div className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4 backdrop-blur-md" onClick={()=>setReserve(false)}><motion.div initial={{opacity:0,y:24,scale:.96}} animate={{opacity:1,y:0,scale:1}} transition={{duration:.45,ease}} className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-[#f4efe6] p-7 shadow-[0_40px_120px_rgba(0,0,0,.45)] md:p-9" onClick={e=>e.stopPropagation()}><div className="flex items-start justify-between"><div><div className="text-[9px] uppercase tracking-[.3em] text-[#9a7942]">Raj Villas / Reservations</div><h3 className="serif mt-3 text-4xl">Plan your stay.</h3></div><button onClick={()=>setReserve(false)} aria-label="Close reservation dialog"><X/></button></div><p className="mt-5 max-w-md text-sm leading-7 text-[#665f53]">Call or email the hotel directly for availability, room details and stay planning.</p><div className="mt-8 grid gap-3"><a href="tel:9999999990" className="flex items-center justify-between rounded-2xl bg-[#171512] px-5 py-4 text-sm font-semibold text-white">Call 9999999990 <Phone size={18}/></a><a href="mailto:jwhvebjefb@gmail.com" className="flex items-center justify-between rounded-2xl border border-[#d0c4b1] px-5 py-4 text-sm font-semibold">Email the hotel <Mail size={18}/></a></div><div className="mt-7 flex items-center gap-2 text-xs text-[#7e7567]"><Star size={13} className="fill-[#9a7942] text-[#9a7942]"/> Direct contact · Shivpuri, Madhya Pradesh</div></motion.div></div>}
  </div>
}

createRoot(document.getElementById("root")).render(<App/>);
