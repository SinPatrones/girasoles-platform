'use client';

import dynamic from 'next/dynamic';

export const GallerySectionDynamic = dynamic(
  () => import('@/components/sections/GallerySection'),
  {
    ssr: false,
    loading: () => (
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="h-96 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        </div>
      </section>
    ),
  }
);

export const TestimonialsSectionDynamic = dynamic(
  () => import('@/components/sections/TestimonialsSection'),
  {
    ssr: false,
    loading: () => (
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="h-80 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        </div>
      </section>
    ),
  }
);
