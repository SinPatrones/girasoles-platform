'use client';

import {useEffect, useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Home} from 'lucide-react';
import gsap from 'gsap';

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const petalsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({defaults: {ease: 'power3.out'}});

      // Logo floats in from above with bounce
      tl.from(logoRef.current, {
        y: -80,
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: 'back.out(1.7)',
      });

      // 404 number scales up with elastic effect
      tl.from(numberRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)',
      }, '-=0.4');

      // Text fades up
      tl.from(textRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
      }, '-=0.3');

      // Button slides up
      tl.from(buttonRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.5,
      }, '-=0.2');

      // Floating petals animation
      if (petalsRef.current) {
        const petals = petalsRef.current.querySelectorAll('.petal');
        petals.forEach((petal, i) => {
          gsap.set(petal, {
            x: gsap.utils.random(-200, 200),
            y: gsap.utils.random(-200, 200),
            opacity: 0,
          });

          gsap.to(petal, {
            opacity: gsap.utils.random(0.15, 0.4),
            duration: 1,
            delay: i * 0.15,
          });

          // Continuous floating
          gsap.to(petal, {
            y: `+=${gsap.utils.random(30, 80)}`,
            x: `+=${gsap.utils.random(-40, 40)}`,
            rotation: gsap.utils.random(-180, 180),
            duration: gsap.utils.random(4, 7),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.2,
          });
        });
      }

      // Continuous logo float
      gsap.to(logoRef.current, {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50"
    >
      {/* Decorative background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent-100/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-primary-50/30 blur-3xl" />
      </div>

      {/* Floating petals */}
      <div ref={petalsRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({length: 12}).map((_, i) => (
          <div
            key={i}
            className="petal absolute top-1/2 left-1/2"
          >
            <svg
              width={gsap ? 20 + (i % 4) * 8 : 28}
              height={gsap ? 20 + (i % 4) * 8 : 28}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2C12 2 14 8 18 10C22 12 22 12 22 12C22 12 22 12 18 14C14 16 12 22 12 22C12 22 10 16 6 14C2 12 2 12 2 12C2 12 2 12 6 10C10 8 12 2 12 2Z"
                fill={i % 3 === 0 ? '#c0217c' : i % 3 === 1 ? '#eab308' : '#f472b6'}
                opacity="0.6"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-lg mx-auto">
        {/* Logo */}
        <div ref={logoRef} className="mb-6 md:mb-8">
          <div className="relative w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden shadow-xl ring-4 ring-white/80">
            <Image
              src="/images/logo/girasoles_logo.png"
              alt="Los Girasoles"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* 404 number */}
        <h1
          ref={numberRef}
          className="text-8xl sm:text-9xl md:text-[10rem] font-black leading-none tracking-tighter bg-gradient-to-br from-primary-500 via-primary-400 to-accent-500 bg-clip-text text-transparent select-none"
        >
          404
        </h1>

        {/* Text content */}
        <div ref={textRef} className="mt-4 md:mt-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Página no encontrada
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
            Lo sentimos, la página que buscas no existe o ha sido movida. Pero no te preocupes, tu evento perfecto te espera.
          </p>
        </div>

        {/* Button */}
        <div ref={buttonRef} className="mt-8 md:mt-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-base md:text-lg shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Home className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Volver al Inicio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
