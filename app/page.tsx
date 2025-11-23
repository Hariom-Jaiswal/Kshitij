'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SubscribeForm from './components/SubscribeForm';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import Background from './components/Background';

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
      className="flex min-h-screen flex-col items-center justify-center p-6 relative overflow-hidden bg-black selection:bg-purple-500/30"
    >
      {/* Background Elements */}
      <Background />

      <div className="z-10 flex flex-col items-center text-center space-y-8 max-w-4xl">
        {/* Main Title */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 pr-4">
          <div ref={logoRef} className="relative w-24 h-24 md:w-44 md:h-44">
            <Image
              src="/kshitij.webp"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1
            ref={titleRef}
            className="text-6xl md:text-9xl tracking-wide bg-gradient-to-b from-white to-white/75 bg-clip-text text-transparent py-4 leading-[1.2] pr-7 pl-9"
            style={{ fontFamily: 'var(--font-fairy-dust)' }}
          >
            kshitij'25
          </h1>
        </div>

        {/* Status */}
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl font-light text-purple-200/80 tracking-widest uppercase"
        >
          Under Construction
        </p>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-lg md:text-3xl text-gray-400 font-light leading-relaxed max-w-2xl"
        >
          "Something <span className="text-white font-medium">Spectacular</span> is on the Horizon"
        </p>

        {/* Subscribe Form */}
        <SubscribeForm />
      </div>

    </main>
  );
}
