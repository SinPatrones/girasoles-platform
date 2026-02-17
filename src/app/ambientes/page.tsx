'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import {
  Users,
  Maximize,
  CheckCircle,
  Music,
  Camera,
  Lightbulb,
  Sparkles,
  ShieldCheck,
  Armchair,
  Wind,
  PartyPopper,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const venueImages = [
  {
    src: '/images/ambientes/salon_01.jpg',
    alt: 'Salón Los Girasoles - Vista principal',
  },
  {
    src: '/images/ambientes/salon_02.jpg',
    alt: 'Salón Los Girasoles - Decoración y ambientación',
  },
  {
    src: '/images/ambientes/salon_03.jpg',
    alt: 'Salón Los Girasoles - Espacio de celebración',
  },
  {
    src: '/images/ambientes/salon_04.jpg',
    alt: 'Salón Los Girasoles - Detalle del ambiente',
  },
];

const highlights = [
  {
    icon: Sparkles,
    title: 'Elegancia y Sofisticación',
    description:
      'Ambiente refinado con acabados de primera calidad, diseñado para que cada celebración sea memorable.',
  },
  {
    icon: Users,
    title: 'Amplia Capacidad',
    description:
      'Espacios versátiles que se adaptan a eventos desde reuniones íntimas hasta grandes celebraciones con más de 100 invitados.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad Garantizada',
    description:
      'Ambiente vigilado y controlado para la tranquilidad de todos nuestros clientes durante todo el evento.',
  },
  {
    icon: Star,
    title: 'Experiencia Única',
    description:
      'Cada detalle está pensado para crear una atmósfera mágica e inolvidable para ti y tus invitados.',
  },
];

const features = [
  { icon: Music, text: 'Sistema de sonido premium Electrovoice ZLX' },
  { icon: Lightbulb, text: 'Iluminación profesional LED ajustable' },
  { icon: Camera, text: 'Cabina 360° y cabinas de fotos temáticas' },
  { icon: Armchair, text: 'Mobiliario luxury: sillones Dubai, sillas medallón y crossback' },
  { icon: Wind, text: 'Aire acondicionado central en todos los ambientes' },
  { icon: PartyPopper, text: 'Efectos especiales: humo, láser y nieve artificial' },
  { icon: Maximize, text: 'Piso LED interactivo y pista de baile amplia' },
  { icon: Sparkles, text: 'Decoración personalizable según la temática de tu evento' },
];

const benefits = [
  'Entrada con alfombra roja y recepción elegante',
  'Zona de fotografía con backdrops profesionales',
  'Bar exclusivo con barra libre disponible',
  'DJ booth profesional con iluminación integrada',
  'Pantallas LED para visuales y momentos especiales',
  'Camerino premium con espejo Hollywood',
  'Área de maquillaje, peinado y vestidor privado',
  'Baños privados exclusivos',
  'Zona de snacks y bebidas',
  'Área de juegos y actividades para jóvenes',
];

export default function AmbientesPage() {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % venueImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + venueImages.length) % venueImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ambientes/salon_01.jpg"
            alt="Nuestros Ambientes - Salón de Eventos Los Girasoles"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Nuestros Ambientes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Espacios versátiles y elegantes diseñados para crear la celebración perfecta
          </motion.p>
        </div>
      </section>

      {/* Interactive Gallery Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Conoce Nuestro Salón
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un espacio único que se transforma para cada tipo de celebración
            </p>
          </motion.div>

          {/* Main Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Featured Image with Navigation */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl mb-4 group">
              {venueImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    activeImage === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {venueImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      activeImage === index
                        ? 'bg-white scale-125'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Ver imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {venueImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative aspect-[4/3] rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 ${
                    activeImage === index
                      ? 'ring-3 ring-primary shadow-lg scale-[1.02]'
                      : 'opacity-60 hover:opacity-100 hover:shadow-md'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todo lo que necesitas para que tu evento sea perfecto, en un solo lugar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Images Combined Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Mosaic */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              <div className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/ambientes/salon_02.jpg"
                  alt="Vista panorámica del salón"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/ambientes/salon_03.jpg"
                  alt="Detalle de decoración"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/ambientes/salon_04.jpg"
                  alt="Ambiente festivo"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Features Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Equipamiento de Primera
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Contamos con tecnología de punta y equipamiento profesional para que tu evento luzca espectacular.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center space-x-4 bg-gray-50 hover:bg-primary-50 p-4 rounded-xl transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm md:text-base">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Todo lo que Incluimos
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nuestros ambientes vienen equipados con todo lo necesario para que solo te preocupes por disfrutar.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    className="flex items-start space-x-2"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/ambientes/salon_01.jpg"
                  alt="Salón Los Girasoles - Ambiente completo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
                      <Users className="w-4 h-4 inline mr-1.5" />
                      Hasta 100+ invitados
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
                      <Maximize className="w-4 h-4 inline mr-1.5" />
                      Espacios amplios
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para Reservar tu Fecha?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nuestros ambientes están esperando para hacer de tu evento algo inolvidable
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#paquetes"
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Ver Paquetes
              </a>
              <a
                href="/#contacto"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
              >
                Contactar Ahora
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
