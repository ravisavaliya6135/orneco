import { useEffect, useState, type ReactNode } from "react";

/* ---------- Brand mark ---------- */
const LOGO_SYMBOL_PATH =
  "M 65.0 2.25 L 51.25 8.0 L 41.5 15.0 L 31.0 28.0 L 24.75 43.75 L 12.0 51.0 L 5.5 57.5 L 0.0 66.75 L 5.25 68.25 L 10.75 59.5 L 18.25 53.0 L 34.5 46.75 L 49.25 46.75 L 58.5 48.75 L 101.5 65.25 L 99.75 75.0 L 92.0 91.75 L 84.25 98.5 L 76.0 99.75 L 70.25 97.0 L 64.5 91.25 L 60.0 83.25 L 56.5 71.75 L 54.5 53.0 L 33.75 52.0 L 24.0 56.0 L 24.75 68.0 L 28.5 78.75 L 34.75 89.25 L 44.25 99.0 L 66.25 109.75 L 90.75 109.75 L 106.5 103.0 L 116.25 95.5 L 127.5 80.75 L 132.25 66.25 L 148.0 57.5 L 153.75 51.25 L 156.75 45.0 L 152.0 43.5 L 144.5 53.5 L 135.5 59.25 L 124.0 62.0 L 115.5 62.0 L 94.75 57.5 L 71.0 47.25 L 57.25 43.5 L 57.25 36.25 L 63.75 21.25 L 72.75 13.25 L 82.0 12.25 L 90.0 17.5 L 97.0 28.5 L 100.5 39.75 L 102.0 54.25 L 116.0 57.25 L 123.5 57.25 L 133.0 54.5 L 132.25 44.25 L 128.5 32.75 L 120.0 19.75 L 111.75 12.0 L 99.75 5.0 L 87.0 1.25 Z";

const LOGO_WORDMARK_PATH =
  "M 193.25 21.5 L 193.25 26.25 L 193.75 26.75 L 218.0 26.75 L 218.5 26.5 L 218.5 21.0 L 218.0 20.5 L 194.0 20.5 L 193.5 20.75 L 193.5 21.25 Z M 286.0 10.5 L 285.0 12.75 L 284.25 13.5 L 284.0 15.0 L 283.25 16.0 L 283.25 18.0 L 282.25 20.5 L 282.25 26.75 L 283.25 29.25 L 283.25 31.25 L 284.25 32.75 L 284.25 33.5 L 285.0 34.5 L 285.25 35.5 L 288.0 39.25 L 289.75 41.0 L 291.5 42.0 L 293.0 43.5 L 294.0 43.75 L 295.5 44.75 L 296.25 44.75 L 297.25 45.5 L 299.25 45.5 L 301.25 46.5 L 317.75 46.5 L 319.5 45.5 L 321.75 45.5 L 322.75 44.75 L 325.5 43.75 L 326.25 43.0 L 328.25 42.0 L 332.0 38.25 L 334.5 34.25 L 335.5 32.0 L 335.5 30.75 L 336.0 29.5 L 336.75 29.0 L 336.75 18.25 L 335.75 17.0 L 335.5 15.0 L 334.75 14.0 L 333.75 11.5 L 332.75 10.5 L 331.75 8.75 L 329.25 6.25 L 328.75 6.25 L 326.75 4.75 L 322.5 2.75 L 320.5 2.75 L 319.0 1.75 L 300.25 1.75 L 298.5 2.75 L 296.0 3.0 L 295.5 3.5 L 294.25 3.75 L 291.75 5.0 L 288.75 7.5 Z M 292.5 15.25 L 295.5 12.0 L 296.5 11.75 L 297.75 10.75 L 298.75 10.5 L 299.75 9.75 L 303.0 9.5 L 316.5 9.5 L 319.25 9.75 L 320.75 10.75 L 321.75 11.0 L 323.0 11.75 L 325.5 14.25 L 327.25 16.5 L 328.25 19.0 L 328.25 20.0 L 329.0 21.5 L 329.0 26.5 L 328.0 28.75 L 328.0 29.75 L 326.25 33.0 L 323.0 36.25 L 322.5 36.25 L 321.0 37.25 L 320.25 37.25 L 319.0 38.25 L 300.5 38.25 L 299.5 38.0 L 298.5 37.25 L 297.25 37.0 L 296.25 36.0 L 294.75 35.25 L 293.5 34.0 L 291.75 31.25 L 291.5 30.0 L 290.75 29.0 L 290.5 28.25 L 290.25 25.0 L 290.5 20.0 L 290.75 19.0 L 291.5 18.0 L 291.5 17.25 L 292.25 16.25 Z M 233.0 9.25 L 232.0 11.25 L 231.0 12.25 L 231.0 13.25 L 230.0 14.5 L 230.0 15.5 L 229.0 17.5 L 229.0 20.75 L 228.5 22.5 L 229.0 29.75 L 230.0 31.5 L 230.0 32.5 L 232.5 37.25 L 237.5 42.5 L 238.5 42.75 L 241.0 44.5 L 242.5 44.75 L 243.25 45.5 L 245.25 45.5 L 247.25 46.5 L 274.25 46.25 L 274.5 38.75 L 274.0 38.25 L 246.5 38.25 L 242.25 36.25 L 238.5 32.5 L 237.25 30.25 L 237.0 28.25 L 236.25 27.25 L 236.25 20.5 L 237.0 19.5 L 237.25 17.75 L 239.75 14.0 L 243.5 10.75 L 244.5 10.75 L 245.5 9.75 L 249.0 9.5 L 273.5 9.5 L 274.5 8.75 L 274.25 2.0 L 246.25 1.75 L 244.5 2.75 L 242.5 2.75 L 241.25 3.75 L 240.25 3.75 L 236.0 6.25 Z M 180.5 2.0 L 180.25 46.0 L 180.75 46.5 L 219.75 46.25 L 220.25 45.25 L 220.25 39.5 L 219.5 38.25 L 188.25 38.25 L 187.75 37.75 L 187.5 10.75 L 188.25 9.5 L 219.0 9.5 L 219.5 9.25 L 220.0 7.75 L 220.0 2.5 L 219.0 1.75 Z M 64.25 2.0 L 64.25 46.25 L 71.0 46.5 L 71.5 46.0 L 71.5 10.5 L 72.25 9.5 L 99.5 9.75 L 101.25 10.75 L 103.25 12.75 L 104.5 15.25 L 104.5 21.0 L 103.5 23.5 L 101.5 25.75 L 100.25 26.0 L 99.25 27.0 L 77.25 27.25 L 77.25 33.25 L 77.75 33.75 L 93.5 33.75 L 96.75 36.5 L 105.5 46.25 L 116.0 46.25 L 103.75 33.5 L 103.75 32.75 L 109.75 27.5 L 111.75 23.25 L 111.75 12.75 L 109.75 8.5 L 107.25 5.5 L 102.75 2.75 L 101.25 2.75 L 99.25 1.75 Z M 6.0 7.75 L 3.25 11.5 L 1.5 15.25 L 1.5 16.25 L 0.5 18.75 L 0.5 28.25 L 1.5 30.75 L 1.5 32.0 L 4.5 37.75 L 9.25 42.5 L 10.25 42.75 L 11.0 43.5 L 12.0 43.75 L 15.0 45.5 L 17.25 45.5 L 19.25 46.5 L 35.75 46.5 L 36.75 45.75 L 39.5 45.5 L 40.5 44.75 L 42.25 44.5 L 43.0 43.75 L 44.0 43.5 L 48.5 39.75 L 51.5 35.75 L 51.75 34.75 L 52.75 33.25 L 52.75 32.5 L 53.75 31.0 L 53.75 29.0 L 54.75 26.5 L 54.75 20.75 L 53.75 18.25 L 53.75 16.25 L 53.0 15.25 L 52.75 13.75 L 52.0 13.0 L 51.0 10.75 L 45.5 5.25 L 42.75 3.75 L 41.5 3.5 L 40.25 2.75 L 38.25 2.75 L 37.5 2.0 L 36.75 1.75 L 18.25 1.75 L 16.25 2.75 L 14.25 2.75 L 11.25 4.5 L 10.5 4.5 Z M 9.75 16.25 L 10.5 15.25 L 14.25 11.5 L 17.75 9.75 L 20.25 9.5 L 33.75 9.5 L 37.25 9.75 L 38.25 10.75 L 39.25 10.75 L 40.25 11.75 L 41.25 12.0 L 42.5 13.0 L 44.25 15.0 L 45.5 17.25 L 45.5 18.0 L 46.5 20.0 L 46.5 22.5 L 46.75 22.75 L 46.5 28.0 L 45.5 30.0 L 45.25 31.25 L 43.5 33.75 L 42.0 35.25 L 41.0 36.0 L 40.25 36.25 L 39.75 37.0 L 39.25 37.25 L 38.25 37.25 L 37.25 38.0 L 36.5 38.25 L 18.25 38.25 L 17.0 37.75 L 16.5 37.25 L 14.0 36.25 L 10.5 32.75 L 9.75 31.5 L 9.5 30.5 L 8.75 29.5 L 8.75 28.0 L 8.0 27.0 L 7.75 26.0 L 7.75 21.5 L 8.5 20.5 L 8.75 19.75 L 8.75 18.25 L 9.5 17.25 Z M 125.0 2.0 L 123.0 5.5 L 123.0 45.25 L 123.5 46.5 L 130.0 46.5 L 130.5 46.0 L 130.5 14.75 L 131.5 14.25 L 162.75 45.75 L 164.0 46.5 L 167.5 46.5 L 168.75 45.25 L 169.5 43.5 L 169.25 2.0 L 163.25 1.75 L 162.25 2.5 L 162.25 32.5 L 161.25 33.0 L 129.75 2.0 L 128.0 1.25 Z";

function Logo({ className = "w-10 h-10", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 157 110" className={className} fill={color} fillRule="evenodd">
      <path d={LOGO_SYMBOL_PATH} />
    </svg>
  );
}

function Wordmark({ light = false, className = "h-8" }: { light?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${light ? "text-cream" : "text-[#4d3780]"} ${className}`}>
      <svg
        viewBox="0 0 422 48"
        className="h-8 w-auto"
        fill="currentColor"
        fillRule="evenodd"
        aria-label="Orneco"
      >
        <g transform="matrix(0.4364 0 0 0.4364 0 0)">
          <path d={LOGO_SYMBOL_PATH} />
        </g>
        <g transform="translate(84.5, 0)">
          <path d={LOGO_WORDMARK_PATH} />
        </g>
      </svg>
      <span className="text-[9px] font-semibold tracking-wider opacity-70 -ml-0.5">TM</span>
    </span>
  );
}

/* ---------- Scroll reveal ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        el.classList.add("in");
      }
    });

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))
        ),
      { threshold: 0.05, rootMargin: "0px 0px 80px 0px" }
    );
    els.forEach((el) => {
      if (!el.classList.contains("in")) {
        io.observe(el);
      }
    });
    return () => io.disconnect();
  }, []);
}

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------- Icons ---------- */
const Icon = {
  face: (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M24 6c-8 0-13 6-13 14 0 9 5 18 13 18s13-9 13-18c0-8-5-14-13-14z" />
      <path d="M18 22h3M27 22h3M20 30c2 2 6 2 8 0" />
      <path d="M33 30c3 1 6 4 6 10M30 36l4 6" />
    </svg>
  ),
  feather: (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M38 8C22 10 12 22 12 36l-4 6" />
      <path d="M38 8c2 14-6 26-22 28M18 28h10M22 20h10" />
    </svg>
  ),
  skin: (
    <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M30 6c-8 0-14 6-14 14l-4 6 4 2v6c0 3 3 5 6 4l4-1v7" />
      <path d="M30 6c6 0 10 5 10 11 0 8-6 13-6 21" />
      <path d="M8 14c4 0 8 2 10 6" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12l5 5L20 7" />
    </svg>
  ),
};

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const links = [
    ["About", "#about"],
    ["Benefits", "#benefits"],
    ["Why Orneco", "#why"],
    ["Details", "#details"],
    ["FAQ", "#faq"],
    ["Contact", "#contact"],
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-cream/85 backdrop-blur-md shadow-[0_1px_0_#e7e0c9] py-3" : "py-6"}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top"><Wordmark /></a>
        <ul className="hidden md:flex gap-9 text-sm">
          {links.map(([l, h]) => (
            <li key={h}>
              <a href={h} className="relative text-teal-deep/80 hover:text-teal transition after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-teal after:transition-all hover:after:w-full">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex rounded-full bg-teal text-cream text-sm px-5 py-2.5 hover:bg-teal-dark transition">
          Get in Touch
        </a>
        <button className="md:hidden text-teal" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-cream border-t border-sand mt-3 px-6 py-4 flex flex-col gap-4">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="text-teal-deep">{l}</a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20 flex items-center">
      {/* giant brand O */}
      <Logo className="absolute -left-40 -top-20 w-[640px] h-[640px] opacity-[0.07] text-teal" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center w-full">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-white/60 px-4 py-1.5 text-xs tracking-[0.25em] text-teal uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" /> Made in Bharat
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif text-6xl sm:text-7xl xl:text-8xl leading-[0.95] mt-6 text-teal">
              <span className="block text-3xl sm:text-4xl xl:text-5xl font-sans font-light text-teal-deep tracking-wider uppercase mb-2">Orneco</span>
              Facial<br />Tissues
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <div className="flex items-center gap-4 mt-5">
              <span className="h-px w-16 bg-teal/50" />
              <span className="tracking-[0.4em] text-teal font-medium text-sm">PURE &amp; SOFT</span>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-8 text-lg text-teal-deep/70 max-w-md leading-relaxed">
              <em className="font-serif text-2xl text-teal not-italic italic">Premium Tissue, Thoughtfully Made.</em>
              <br />
              Soft, strong and hygienic 2-ply tissues crafted for every face, every moment, every day.
            </p>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#about" className="group rounded-full bg-teal text-cream px-8 py-4 text-sm tracking-wide hover:bg-teal-dark transition shadow-lg shadow-teal/20 flex items-center gap-2">
                Discover Orneco
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a href="#details" className="rounded-full border border-teal/40 text-teal px-8 py-4 text-sm tracking-wide hover:bg-teal/5 transition">
                Product Details
              </a>
            </div>
          </Reveal>
          <Reveal delay={520}>
            <div className="mt-14 grid grid-cols-3 max-w-md divide-x divide-teal/20">
              {[["2", "Ply"], ["100", "Pulls"], ["200", "Sheets"]].map(([n, l]) => (
                <div key={l} className="px-4 first:pl-0">
                  <div className="font-serif text-4xl text-teal">{n}</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-teal-deep/60 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="absolute inset-6 rounded-full bg-teal/15 blur-3xl" />
          <div className="relative aspect-square max-w-xl mx-auto">
            <div className="absolute inset-0 rounded-[40%_60%_55%_45%/50%_45%_55%_50%] bg-gradient-to-br from-sand to-[#e4dcc4] overflow-hidden shadow-2xl shadow-teal/20 animate-float">
              <picture>
                <source srcSet="/images/hero-box.webp" type="image/webp" />
                <img
                  src="/images/hero-box.jpg"
                  alt="Orneco 2-Ply Facial Tissues 100 Pulls Box"
                  width={600}
                  height={600}
                  fetchPriority="high"
                  className="w-full h-full object-cover scale-110"
                />
              </picture>
            </div>
            {/* rotating badge */}
            <div className="absolute -left-2 bottom-10 w-32 h-32 rounded-full bg-cream shadow-xl grid place-items-center">
              <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow text-teal">
                <defs><path id="c" d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1-76 0" /></defs>
                <text fontSize="10" letterSpacing="3" fill="currentColor">
                  <textPath href="#c">MOST TRUSTED BRAND • PREMIUM •</textPath>
                </text>
              </svg>
              <span className="text-teal">{Icon.check}</span>
            </div>
            <div className="absolute -right-2 top-12 bg-white/90 backdrop-blur rounded-2xl px-5 py-4 shadow-xl">
              <div className="text-[10px] tracking-[0.2em] uppercase text-teal-deep/50">Sheet size</div>
              <div className="font-serif text-2xl text-teal">18 × 19 cm</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Marquee ---------- */
function Marquee() {
  const items = ["Superior Softness", "Strong & Reliable", "Hygiene You Can Trust", "Thoughtfully Designed", "Premium Quality", "Made for Everyday Life"];
  return (
    <div className="bg-teal text-cream py-5 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-8 px-8 font-serif text-2xl italic whitespace-nowrap">
            {t} <Logo className="w-6 h-6 opacity-60" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-14 items-center">
        <Reveal className="lg:col-span-5 relative">
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-teal/15">
            <picture>
              <source srcSet="/images/texture.webp" type="image/webp" />
              <img
                src="/images/texture.jpg"
                alt="Soft and absorbent 2-ply tissue paper texture"
                width={480}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition duration-[1.5s]"
              />
            </picture>
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-10 bg-teal text-cream rounded-3xl p-7 max-w-[230px] shadow-xl">
            <Logo className="w-10 h-10 mb-3 opacity-80" />
            <p className="font-serif text-xl leading-snug italic">"For every face, every moment, every day"</p>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pl-10">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-teal mb-4">Our Philosophy</p>
            <h2 className="font-serif text-5xl lg:text-6xl text-teal-deep leading-tight">
              Why <span className="text-teal italic">Orneco</span>
              <span className="text-teal">?</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 text-lg leading-relaxed text-teal-deep/75">
              At Orneco, we believe everyday essentials should feel anything but ordinary. We create premium tissue
              products that combine <strong className="text-teal font-medium">softness, strength, hygiene,</strong> and
              <strong className="text-teal font-medium"> refined design</strong> to deliver a better experience with every use.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-lg leading-relaxed text-teal-deep/75">
              From the quality of the paper to the way it feels in your hands, every detail is thoughtfully considered.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-12 grid sm:grid-cols-3 gap-4">
              {[["Softness", "Gentle on skin"], ["Strength", "Won't tear apart"], ["Hygiene", "Clean & safe"]].map(([t, s], i) => (
                <div key={t} className="rounded-2xl border border-sand bg-white/60 p-5 hover:border-teal/40 hover:-translate-y-1 transition">
                  <div className="font-serif text-3xl text-teal/30">0{i + 1}</div>
                  <div className="font-medium mt-2">{t}</div>
                  <div className="text-sm text-teal-deep/60">{s}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Benefits ---------- */
function Benefits() {
  const items = [
    { icon: Icon.face, title: "Deep Cleaning", text: "Absorbent 2-ply sheets that lift away dirt, oil and makeup leaving your face fresh and clean." },
    { icon: Icon.feather, title: "Ultra Soft", text: "Feather-light texture that feels like a gentle caress — comfortable even with repeated use." },
    { icon: Icon.skin, title: "For All Skin Types", text: "Gentle enough for sensitive skin, kind to kids and adults alike. Everyday care for everyone." },
  ];
  return (
    <section id="benefits" className="relative bg-teal-deep text-cream py-28 lg:py-36 overflow-hidden">
      <Logo className="absolute -right-32 -bottom-32 w-[560px] h-[560px] text-cream opacity-[0.05]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.35em] uppercase text-cream/60 mb-4">Benefits</p>
          <h2 className="font-serif text-5xl lg:text-6xl leading-tight">
            Care you can <span className="italic text-[#a9d3c8]">feel</span>
          </h2>
        </Reveal>
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {items.map((b, i) => (
            <Reveal key={b.title} delay={i * 130}>
              <div className="group relative h-full rounded-[2rem] border border-cream/15 bg-cream/[0.04] p-10 hover:bg-cream hover:text-teal-deep transition-all duration-500">
                <div className="absolute inset-3 rounded-[1.6rem] border border-dashed border-cream/15 group-hover:border-teal/25 pointer-events-none transition" />
                <div className="w-20 h-20 rounded-full bg-cream/10 group-hover:bg-teal group-hover:text-cream grid place-items-center transition">
                  {b.icon}
                </div>
                <h3 className="font-serif text-3xl mt-8">{b.title}</h3>
                <p className="mt-4 text-cream/70 group-hover:text-teal-deep/70 leading-relaxed transition">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- What makes better ---------- */
function Better() {
  const points = [
    ["Superior Softness", "Cloud-like comfort that's gentle with every touch."],
    ["Strong & Reliable", "Two plies that hold together when you need them most."],
    ["Hygiene You Can Trust", "Produced with care for clean, safe everyday use."],
    ["Thoughtfully Designed", "An elegant box that looks beautiful in any space."],
    ["Premium Quality", "Selected premium paper for a refined experience."],
    ["Made for Everyday Life", "Home, office, car or travel — always within reach."],
  ];
  return (
    <section id="why" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <Reveal className="lg:col-span-7">
            <p className="text-xs tracking-[0.35em] uppercase text-teal mb-4">The Difference</p>
            <h2 className="font-serif text-5xl lg:text-6xl text-teal-deep leading-tight">
              What makes <span className="italic text-teal">Orneco</span> better?
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <p className="text-teal-deep/70 text-lg leading-relaxed">
              Six promises we keep in every box — because the little things in life deserve to be done beautifully.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-teal/15 rounded-[2rem] overflow-hidden border border-teal/15">
          {points.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 100} className="bg-cream">
              <div className="group p-10 h-full hover:bg-white transition">
                <div className="flex items-center justify-between">
                  <span className="w-11 h-11 rounded-full bg-teal/10 text-teal grid place-items-center group-hover:bg-teal group-hover:text-cream transition">
                    {Icon.check}
                  </span>
                  <span className="font-serif text-5xl text-teal/10 group-hover:text-teal/25 transition">0{i + 1}</span>
                </div>
                <h3 className="font-medium text-xl mt-6">{t}</h3>
                <p className="text-teal-deep/60 mt-2 leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Lifestyle banner ---------- */
function Lifestyle() {
  return (
    <section className="relative h-[80vh] min-h-[520px] overflow-hidden">
      <picture>
        <source srcSet="/images/lifestyle.webp" type="image/webp" />
        <img
          src="/images/lifestyle.jpg"
          alt="Orneco facial tissue box in a modern home living room"
          width={1920}
          height={800}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/85 via-teal-deep/50 to-transparent" />
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <Reveal className="max-w-xl text-cream">
          <Logo className="w-14 h-14 mb-6 opacity-90" />
          <h2 className="font-serif text-5xl lg:text-7xl leading-[1.05] italic">
            For every face, every moment, every day.
          </h2>
          <p className="mt-6 text-cream/80 text-lg">A touch of nature-inspired elegance for your home, office and car.</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Details / Specs ---------- */
function Details() {
  const specs = [
    ["Net Quantity", "100 N"],
    ["No. of Sheets", "200"],
    ["Sheet Size", "18 × 19 cm"],
    ["Ply", "2 Ply"],
    ["Pulls", "100 Pulls"],
    ["M.R.P.", "₹100/- (incl. of all taxes)"],
  ];
  return (
    <section id="details" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative rounded-[2.5rem] bg-teal p-10 lg:p-14 text-cream overflow-hidden">
            <Logo className="absolute -right-16 -top-16 w-80 h-80 opacity-10" />
            <div className="relative">
              <span className="inline-block border border-dashed border-cream/40 rounded-full px-4 py-1 text-xs tracking-[0.3em] uppercase">Facial Tissues</span>
              <div className="font-serif text-6xl lg:text-7xl mt-8 leading-none">2 Ply</div>
              <div className="font-serif text-6xl lg:text-7xl leading-none italic text-[#a9d3c8]">100 Pulls</div>
              <div className="mt-10 h-px bg-cream/20" />
              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {["Pure", "Soft", "Safe"].map((t) => (
                    <span key={t} className="w-16 h-16 rounded-full bg-cream text-teal grid place-items-center text-xs font-semibold border-4 border-teal">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-cream/75 text-sm">Selected premium tissue,<br />proudly Made in Bharat.</p>
              </div>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-teal mb-4">Product Details</p>
            <h2 className="font-serif text-5xl lg:text-6xl text-teal-deep leading-tight">
              Inside every <span className="italic text-teal">box</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <dl className="mt-10 divide-y divide-teal/15 border-y border-teal/15">
              {specs.map(([k, v]) => (
                <div key={k} className="flex justify-between items-center py-5 group">
                  <dt className="text-teal-deep/60 group-hover:text-teal transition">{k}</dt>
                  <dd className="font-medium text-teal-deep text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    {
      q: "Are Orneco tissues suitable for sensitive or allergy-prone skin?",
      a: "Yes, absolutely. Orneco facial tissues are crafted from 100% selected virgin wood pulp and are completely free from Optical Brightening Agents (OBA), harsh dyes, and chlorine bleach. Their feather-light, ultra-soft texture is hypoallergenic and gentle enough for everyday use on delicate skin, kids, and during cold and allergy seasons.",
    },
    {
      q: "Can these tissues be used for makeup removal and wet face cleansing?",
      a: "Yes. Our tissues feature an engineered 2-ply bonded construction that provides superior wet strength. Unlike ordinary single-ply tissues that dissolve or shred when wet, Orneco holds together effectively for makeup removal, post-wash dabbing, and skincare routines.",
    },
    {
      q: "What are the exact sheet size, ply, and pull specifications?",
      a: "Each Orneco facial tissue box contains 100 pulls (200 sheets total) of 2-ply premium tissue. Each individual sheet measures 18 cm × 19 cm, providing generous surface area for comprehensive daily personal care.",
    },
    {
      q: "Are Orneco facial tissues eco-friendly and biodegradable?",
      a: "Yes. Made from responsibly sourced natural virgin wood pulp fibers, Orneco tissues are 100% biodegradable and recyclable. Our cardboard dispenser boxes are thoughtfully designed to minimize plastic usage.",
    },
    {
      q: "Where are Orneco tissues manufactured, and can I place bulk or distribution orders?",
      a: "Orneco is proudly Made in Bharat by Orneco Health Care Pvt. Ltd. at our specialized personal care facility in Ahmedabad, Gujarat. For distributor inquiries, corporate gifting, salon, or hotel bulk orders, please contact us at care@orneco.in or call +91 72038 55015.",
    },
  ];

  return (
    <section id="faq" className="py-28 lg:py-36 bg-cream/60 border-t border-sand">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-teal mb-4">Got Questions?</p>
          <h2 className="font-serif text-5xl lg:text-6xl text-teal-deep leading-tight">
            Frequently Asked <span className="italic text-teal">Questions</span>
          </h2>
          <p className="mt-5 text-teal-deep/70 text-lg">
            Everything you need to know about Orneco facial tissues, material quality, and everyday care.
          </p>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={faq.q} delay={idx * 80}>
                <div className={`rounded-3xl border transition-all duration-300 overflow-hidden ${isOpen ? "bg-white border-teal/40 shadow-lg shadow-teal/5" : "bg-white/60 border-sand hover:border-teal/25"}`}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full py-6 px-8 flex items-center justify-between text-left gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-xl sm:text-2xl text-teal-deep">
                      {faq.q}
                    </span>
                    <span className={`w-9 h-9 shrink-0 rounded-full grid place-items-center transition-all duration-300 ${isOpen ? "bg-teal text-cream rotate-180" : "bg-teal/10 text-teal"}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-8 pb-7 pt-1 text-teal-deep/75 leading-relaxed text-base border-t border-teal/10">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Policy Content ---------- */
const POLICIES: Record<string, { title: string; content: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    content: [
      "Orneco Health Care Pvt. Ltd. ('Orneco', 'we', 'our') respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines our practices regarding data collection and usage.",
      "1. Information We Collect: When you contact us via telephone or email, we may collect your name, email address, phone number, and enquiry details.",
      "2. Use of Information: We use customer information exclusively to respond to inquiries, process orders, provide customer support, and improve our personal hygiene products.",
      "3. Data Security: We maintain strict operational and administrative safeguards. We never sell, rent, or trade your personal information to third parties.",
      "4. Contact: For privacy-related queries, reach our Data Officer at care@orneco.in.",
    ],
  },
  terms: {
    title: "Terms of Service",
    content: [
      "Welcome to Orneco. By accessing our website or purchasing our products, you agree to these Terms of Service.",
      "1. Product Information: We strive to ensure all descriptions, sheet counts (200 sheets / 100 pulls), dimensions (18 × 19 cm), and pricing (₹100 MRP) are accurate.",
      "2. Intellectual Property: All trademarks, logos (Orneco™), brand designs, and copy on this site are the exclusive property of Orneco Health Care Pvt. Ltd.",
      "3. Governing Law: These terms are governed by and construed under the laws of India, with jurisdiction in Ahmedabad, Gujarat.",
    ],
  },
  shipping: {
    title: "Shipping & Delivery Policy",
    content: [
      "Orneco ships personal care and tissue products across India through reliable courier and logistics partners.",
      "1. Dispatch Time: Standard orders are dispatched within 24 to 48 hours of order confirmation.",
      "2. Delivery Timeline: Estimated delivery is typically 3 to 7 business days depending on delivery location.",
      "3. Tracking: Tracking details are shared via email and SMS once the shipment is dispatched.",
    ],
  },
  refund: {
    title: "Return & Refund Policy",
    content: [
      "Customer satisfaction and hygiene safety are our top priorities at Orneco.",
      "1. Eligibility: Due to the personal hygiene nature of facial tissues, returns are accepted within 7 days of delivery only if the product is damaged in transit or incorrect.",
      "2. Refund Process: Approved refunds are processed to the original payment method within 5–7 business days of inspection.",
      "3. Support: To request a return or report damaged items, contact care@orneco.in or call +91 72038 55015.",
    ],
  },
};

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="pb-28 lg:pb-36">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="relative rounded-[2.5rem] bg-sand/70 overflow-hidden px-8 py-16 lg:p-20 text-center">
            <Logo className="w-16 h-16 mx-auto text-teal" />
            <p className="text-xs tracking-[0.35em] uppercase text-teal mt-6">Mfg &amp; Mktd by</p>
            <h2 className="font-serif text-4xl lg:text-6xl text-teal-deep mt-3">Orneco Health Care Pvt. Ltd.</h2>
            <p className="mt-5 text-teal-deep/65 max-w-xl mx-auto">
              Have a question, feedback, or a business enquiry? Our customer care team is happy to help.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              <a href="tel:+917203855015" className="group bg-cream rounded-3xl p-6 flex items-center gap-4 text-left hover:shadow-xl hover:shadow-teal/10 hover:-translate-y-1 transition">
                <span className="w-12 h-12 shrink-0 rounded-full bg-teal text-cream grid place-items-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" /></svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-[0.2em] uppercase text-teal-deep/50">Customer Care</span>
                  <span className="block font-medium text-base group-hover:text-teal transition">+91 72038 55015</span>
                </span>
              </a>

              <a href="mailto:care@orneco.in" className="group bg-cream rounded-3xl p-6 flex items-center gap-4 text-left hover:shadow-xl hover:shadow-teal/10 hover:-translate-y-1 transition">
                <span className="w-12 h-12 shrink-0 rounded-full bg-teal text-cream grid place-items-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-[0.2em] uppercase text-teal-deep/50">Corporate Email</span>
                  <span className="block font-medium text-base group-hover:text-teal transition truncate">care@orneco.in</span>
                </span>
              </a>

              <a href="mailto:ornecoindia@gmail.com" className="group bg-cream rounded-3xl p-6 flex items-center gap-4 text-left hover:shadow-xl hover:shadow-teal/10 hover:-translate-y-1 transition">
                <span className="w-12 h-12 shrink-0 rounded-full bg-teal text-cream grid place-items-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-[0.2em] uppercase text-teal-deep/50">Direct Mail</span>
                  <span className="block font-medium text-base group-hover:text-teal transition truncate">ornecoindia@gmail.com</span>
                </span>
              </a>

              <div className="bg-cream rounded-3xl p-6 flex items-center gap-4 text-left">
                <span className="w-12 h-12 shrink-0 rounded-full bg-teal text-cream grid place-items-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-[0.2em] uppercase text-teal-deep/50">Location</span>
                  <span className="block font-medium text-xs text-teal-deep leading-snug">Heritage Hub, Ahmedabad, Gujarat 380015, Bharat</span>
                </span>
              </div>
            </div>

            {/* Trust and Safety badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-3 text-xs text-teal-deep/80 font-medium">
              <span className="rounded-full bg-white/70 border border-teal/20 px-4 py-2">✓ 100% Virgin Wood Pulp</span>
              <span className="rounded-full bg-white/70 border border-teal/20 px-4 py-2">✓ Chlorine &amp; OBA Free</span>
              <span className="rounded-full bg-white/70 border border-teal/20 px-4 py-2">✓ Dermatologically Tested</span>
              <span className="rounded-full bg-white/70 border border-teal/20 px-4 py-2">✓ Safe for Sensitive Skin</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer({ onOpenPolicy }: { onOpenPolicy: (key: string) => void }) {
  return (
    <footer className="bg-teal-deep text-cream">
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="text-center md:text-left">
          <Wordmark light />
          <p className="text-cream/60 text-sm mt-3">Premium Tissue, Thoughtfully Made.</p>
          <p className="text-cream/40 text-xs mt-1">Orneco Health Care Pvt. Ltd. • Ahmedabad, Gujarat, Bharat</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-xs">
          {["100% Quality", "Made in Bharat", "Pure & Soft"].map((b) => (
            <span key={b} className="border border-cream/25 rounded-full px-4 py-2 tracking-wider">{b}</span>
          ))}
        </div>
      </div>

      {/* Legal and policy navigation */}
      <div className="border-t border-cream/10 py-6 px-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
        <div>
          © {new Date().getFullYear()} Orneco Health Care Pvt. Ltd. All rights reserved.
        </div>
        <div className="flex flex-wrap gap-5 text-cream/70">
          <button onClick={() => onOpenPolicy("privacy")} className="hover:text-cream transition underline-offset-4 hover:underline">Privacy Policy</button>
          <button onClick={() => onOpenPolicy("terms")} className="hover:text-cream transition underline-offset-4 hover:underline">Terms of Service</button>
          <button onClick={() => onOpenPolicy("shipping")} className="hover:text-cream transition underline-offset-4 hover:underline">Shipping Policy</button>
          <button onClick={() => onOpenPolicy("refund")} className="hover:text-cream transition underline-offset-4 hover:underline">Return &amp; Refund</button>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useReveal();
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivePolicy(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Benefits />
        <Better />
        <Lifestyle />
        <Details />
        <FAQ />
        <Contact />
      </main>
      <Footer onOpenPolicy={(k) => setActivePolicy(k)} />

      {activePolicy && POLICIES[activePolicy] && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm grid place-items-center p-4"
          onClick={() => setActivePolicy(null)}
          role="dialog"
          aria-modal="true"
          aria-label={POLICIES[activePolicy].title}
        >
          <div
            className="bg-cream text-teal-deep rounded-3xl max-w-xl w-full p-8 shadow-2xl relative border border-teal/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6 border-b border-teal/15 pb-4">
              <h3 className="font-serif text-2xl text-teal">{POLICIES[activePolicy].title}</h3>
              <button
                onClick={() => setActivePolicy(null)}
                className="w-9 h-9 rounded-full bg-teal/10 hover:bg-teal hover:text-cream grid place-items-center transition text-sm font-semibold"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 text-sm text-teal-deep/80 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {POLICIES[activePolicy].content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-teal/15 text-right">
              <button
                onClick={() => setActivePolicy(null)}
                className="rounded-full bg-teal text-cream px-6 py-2.5 text-xs font-medium hover:bg-teal-dark transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
