'use client';

import {useRef, useState, useEffect, useCallback} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import Image from 'next/image';

const COOKIE_NAME = 'intro_watched';
const COOKIE_MAX_AGE = 300; // 1 hour in seconds

function hasIntroCookie(): boolean {
  if (typeof document === 'undefined') return false;
  return document.cookie.split('; ').some((c) => c.startsWith(`${COOKIE_NAME}=`));
}

function setIntroCookie() {
  document.cookie = `${COOKIE_NAME}=true; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
}

type Phase = 'loading' | 'playing' | 'done';

export default function IntroVideo({children}: {children: React.ReactNode}) {
  const [skipIntro, setSkipIntro] = useState<boolean | null>(null);
  const [phase, setPhase] = useState<Phase>('loading');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Check cookie on mount (client only)
  useEffect(() => {
    setSkipIntro(hasIntroCookie());
  }, []);

  const handleCanPlayThrough = useCallback(() => {
    if (phase !== 'loading') return;
    setPhase('playing');
    videoRef.current?.play().catch(() => {
      // Autoplay blocked — skip to content
      setIntroCookie();
      setPhase('done');
    });
  }, [phase]);

  const handleVideoEnded = useCallback(() => {
    setIntroCookie();
    setPhase('done');
  }, []);

  // Still resolving cookie check
  if (skipIntro === null) return null;

  // Cookie exists — go straight to content
  if (skipIntro) return <>{children}</>;

  return (
    <>
      <AnimatePresence>
        {phase !== 'done' && (
          <motion.div
            key="intro-overlay"
            initial={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.6, ease: 'easeInOut'}}
            className="fixed inset-0 z-[9999] bg-neutral-100 flex items-center justify-center"
          >
            {/* Loading screen */}
            {phase === 'loading' && (
              <div className="flex flex-col items-center gap-6">
                <Image
                  src="/images/logo/girasoles_logo.png"
                  alt="Los Girasoles"
                  width={160}
                  height={160}
                  className="animate-pulse"
                  priority
                />
                <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full animate-loading-bar" />
                </div>
              </div>
            )}

            {/* Video */}
            <video
              ref={videoRef}
              src="/videos/logo_girasoles.mp4"
              muted
              playsInline
              preload="auto"
              onCanPlayThrough={handleCanPlayThrough}
              onEnded={handleVideoEnded}
              className={`w-full h-full object-contain md:object-cover absolute inset-0 transition-opacity duration-300 ${
                phase === 'playing' ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Always render children so the page loads in background */}
      <div
        className={phase !== 'done' ? 'invisible' : undefined}
        aria-hidden={phase !== 'done'}
      >
        {children}
      </div>
    </>
  );
}
