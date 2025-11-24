'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SubscribeForm from './components/SubscribeForm';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import StreetBackground from './components/StreetBackground';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    )
      .fromTo(
        logoRef.current,
        { scale: 0, opacity: 0, rotation: -45 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: 'back.out(1.7)' },
        '-=0.5'
      )
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.8'
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        taglineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      );
  }, []);

  return (
    <main
      ref={containerRef}
      className="flex min-h-screen flex-col items-center justify-center p-6 relative overflow-hidden bg-neutral-950 selection:bg-amber-500/30"
    >
      {/* Background Elements */}
      <StreetBackground />

      <div className="z-10 flex flex-col items-center text-center space-y-8 max-w-4xl w-full">
        {/* Main Title */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full">
          <div ref={logoRef} className="relative w-24 h-24 md:w-40 md:h-40 shrink-0">
            <Image
              src="/kshitij.webp"
              alt="Logo"
              fill
              className="object-contain drop-shadow-[0_0_25px_rgba(245,158,11,0.6)]"
              priority
            />
          </div>
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/80 py-4 leading-[1.2] drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            style={{
              fontFamily: 'var(--font-fairy-dust)',
              textShadow: '0 0 20px rgba(219, 39, 119, 0.5), 0 0 40px rgba(245, 158, 11, 0.3)'
            }}
          >
            kshitij'25
          </h1>
        </div>

        {/* Status */}
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl font-light text-amber-300/80 tracking-widest uppercase drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]"
        >
          To be live soon
        </p>

        {/* Divider - Kaali Peeli Style */}
        <div
          className="w-48 h-2 my-8 skew-x-[-20deg]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fbbf24, #fbbf24 10px, #000 10px, #000 20px)'
          }}
        />

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-lg md:text-3xl text-gray-300 font-light leading-relaxed max-w-2xl"
        >
          "Something <span className="text-fuchsia-400 font-medium drop-shadow-[0_0_8px_rgba(232,121,249,0.5)]">Spectacular</span> is on the Horizon"
        </p>

        {/* Subscribe Form */}
        <SubscribeForm />
      </div>

      {/* Footer / Copyright */}
      <div className="absolute bottom-8 text-xs text-gray-500 tracking-widest uppercase text-center">
        Official website of Kshitij'25<br />Mithibai college
      </div>
    </main>
  );
}
