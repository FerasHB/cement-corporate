import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useReveal } from "../hooks/useReveal";

type HeroProps = {
  t: {
    badge: string;
    heroTitle: string;
    heroText: string;
    primary: string;
    secondary: string;
  };
  isAr: boolean;
};

export default function Hero({ t, isAr }: HeroProps) {
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const badgeRef = useReveal<HTMLDivElement>();
  const titleRef = useReveal<HTMLHeadingElement>();
  const textRef = useReveal<HTMLParagraphElement>();
  const buttonsRef = useReveal<HTMLDivElement>();
  const imageRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="hero-bg-animate absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.30),transparent_28%),radial-gradient(circle_at_top,rgba(245,158,11,0.10),transparent_20%),linear-gradient(180deg,#020617_0%,#020b2e_45%,#020617_100%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-40">
        <div className="max-w-4xl">
          <div
            ref={badgeRef}
            className="reveal reveal-delay-1 mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300 backdrop-blur-sm"
          >
            {t.badge}
          </div>

          <h1
            ref={titleRef}
            className="reveal reveal-delay-2 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl"
          >
            {t.heroTitle}
          </h1>

          <p
            ref={textRef}
            className="reveal reveal-delay-3 mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
          >
            {t.heroText}
          </p>

          <div
            ref={buttonsRef}
            className="reveal reveal-delay-4 mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/products"
              className="button-premium inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-950"
            >
              {t.primary}
              <ArrowIcon className="button-arrow h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="button-premium inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white hover:bg-white/10"
            >
              {t.secondary}
            </Link>
          </div>
        </div>

        <div
          ref={imageRef}
          className="reveal reveal-delay-3 relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/30"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-slate-950/25 via-transparent to-white/5" />
          <Image
            src="/images/hero-plant.jpg"
            alt="Al Badia Cement plant"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
