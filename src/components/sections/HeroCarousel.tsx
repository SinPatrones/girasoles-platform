'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: 'Los Girasoles',
    subtitle: 'Innovando para sorprenderte',
    description: 'El salón de eventos perfecto para tu quinceañera',
    cta: 'Ver Paquetes',
    gradient: 'from-yellow-600/90 to-orange-600/90',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80',
  },
  {
    title: 'Tu Día Especial',
    subtitle: 'Momentos Inolvidables',
    description: 'Creamos experiencias mágicas que duran para siempre',
    cta: 'Explorar',
    gradient: 'from-purple-600/90 to-pink-600/90',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80',
  },
  {
    title: 'Paquetes Premium',
    subtitle: 'Desde S/. 6,999',
    description: 'Opciones para todos los gustos y presupuestos',
    cta: 'Conocer Más',
    gradient: 'from-blue-600/90 to-indigo-600/90',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80',
  },
];

export default function HeroCarousel() {
  const scrollToPackages = () => {
    const packagesSection = document.getElementById('paquetes');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active bg-primary',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full flex items-center justify-center">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={90}
                />
              </div>

              {/* Subtle dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border border-white/20"
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">Salón de Eventos</span>
                  </motion.div>

                  <h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
                    style={{
                      textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
                    }}
                  >
                    {slide.title}
                  </h1>

                  <p
                    className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3"
                    style={{
                      textShadow: '0 3px 8px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)'
                    }}
                  >
                    {slide.subtitle}
                  </p>

                  <p
                    className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto"
                    style={{
                      textShadow: '0 2px 6px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)'
                    }}
                  >
                    {slide.description}
                  </p>

                  <motion.button
                    onClick={scrollToPackages}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-200 hover:bg-primary-50 border-2 border-white"
                  >
                    <span>{slide.cta}</span>
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 6px;
          opacity: 1;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
}
