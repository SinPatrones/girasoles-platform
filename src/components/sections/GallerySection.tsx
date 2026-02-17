'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  {
    src: '/images/galeria/galeria_01.jpg',
    title: 'Quinceañera Elegante',
    category: 'Fiesta Juvenil',
  },
  {
    src: '/images/galeria/galeria_02.jpg',
    title: 'Decorativo',
    category: 'Evento Formal',
  },
  {
    src: '/images/galeria/galeria_03.jpg',
    title: 'Recuerdos',
    category: 'Fiesta Juvenil',
  },
  {
    src: '/images/galeria/galeria_04.jpg',
    title: 'Mesa Elegante',
    category: 'Evento Formal',
  },
  {
    src: '/images/galeria/galeria_05.jpg',
    title: 'Recuerdos',
    category: 'Fiesta Juvenil',
  },
  {
    src: '/images/galeria/galeria_06.jpg',
    title: 'Recuerdos',
    category: 'Fiesta Juvenil',
  },
  {
    src: '/images/galeria/galeria_07.jpg',
    title: 'Recuerdos',
    category: 'Fiesta Juvenil',
  },
  {
    src: '/images/galeria/galeria_08.jpg',
    title: 'Recuerdos',
    category: 'Fiesta Juvenil',
  },
];

export default function GallerySection() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, goToPrevious, goToNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLightboxOpen]);

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Galería de Eventos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Momentos inolvidables capturados en Los Girasoles
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => openLightbox(index)}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay with title and category */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent text-sm font-medium mb-1">
                  {image.category}
                </span>
                <p className="text-white text-lg font-semibold">
                  {image.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 text-white hover:text-primary transition-colors p-2"
              aria-label="Cerrar"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 z-50 text-white hover:text-primary transition-colors p-2 bg-black/50 rounded-full hover:bg-black/70"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-50 text-white hover:text-primary transition-colors p-2 bg-black/50 rounded-full hover:bg-black/70"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image Container */}
            <div
              className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full max-w-6xl max-h-[90vh]"
              >
                <Image
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </div>

            {/* Image Info */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-50">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-black/70 backdrop-blur-sm px-6 py-3 rounded-lg"
              >
                <span className="text-accent text-sm font-medium block mb-1">
                  {galleryImages[currentIndex].category}
                </span>
                <p className="text-white text-lg font-semibold">
                  {galleryImages[currentIndex].title}
                </p>
                <p className="text-white/70 text-sm mt-1">
                  {currentIndex + 1} / {galleryImages.length}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
