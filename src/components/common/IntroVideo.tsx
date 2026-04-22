'use client';

import {useRef, useState, useCallback, useSyncExternalStore, useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import Image from 'next/image';

const COOKIE_NAME = 'intro_watched';
const COOKIE_MAX_AGE = 300;

function hasIntroCookie(): boolean {
  if (typeof document === 'undefined') return false;
  return document.cookie.split('; ').some((c) => c.startsWith(`${COOKIE_NAME}=`));
}

function setIntroCookie() {
  document.cookie = `${COOKIE_NAME}=true; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
}

type Phase = 'loading' | 'playing' | 'done';

export default function IntroVideo() {
  const skipIntro = useSyncExternalStore(
    () => () => {},
    hasIntroCookie,
    () => false,
  );
  const [phase, setPhase] = useState<Phase>('loading');
  const videoRef = useRef<HTMLVideoElement>(null);

  const INTRO_START = 2;
  const INTRO_DURATION = 2;

  // Lock body scroll while overlay is visible
  useEffect(() => {
    if (skipIntro || phase === 'done') return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [skipIntro, phase]);

  const handleCanPlayThrough = useCallback(() => {
    if (phase !== 'loading') return;
    if (videoRef.current) {
      videoRef.current.currentTime = INTRO_START;
    }
    setPhase('playing');
    videoRef.current?.play().catch(() => {
      setIntroCookie();
      setPhase('done');
    });
  }, [phase]);

  const handleTimeUpdate = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.currentTime >= INTRO_START + INTRO_DURATION) {
      setIntroCookie();
      setPhase('done');
    }
  }, []);

  const handleVideoEnded = useCallback(() => {
    setIntroCookie();
    setPhase('done');
  }, []);

  if (skipIntro || phase === 'done') return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-overlay"
        initial={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.6, ease: 'easeInOut'}}
        className="fixed inset-0 z-[9999] bg-neutral-100 flex items-center justify-center"
      >
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

        <video
          ref={videoRef}
          src="/videos/logo_girasoles.mp4"
          muted
          playsInline
          preload="none"
          onCanPlayThrough={handleCanPlayThrough}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
          className={`w-full h-full object-contain md:object-cover absolute inset-0 transition-opacity duration-300 ${
            phase === 'playing' ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </motion.div>
    </AnimatePresence>
  );
}
