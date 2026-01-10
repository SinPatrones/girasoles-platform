'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Maximize, CheckCircle, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import { venueService } from '@/modules/web/application/services/VenueService';
import VenueCard from '@/components/venues/VenueCard';
import VenueDetailSection from '@/components/venues/VenueDetailSection';

export default function AmbientesPage() {
  const venues = venueService.getAllVenues();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80"
            alt="Nuestros Ambientes - Salones de Eventos"
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
            Tres espacios únicos diseñados para crear la celebración perfecta
          </motion.p>
        </div>
      </section>

      {/* Venues Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Espacios Versátiles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestros tres salones especialmente diseñados para diferentes momentos de tu evento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {venues.map((venue, index) => (
              <VenueCard key={venue.id} venue={venue} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      {venues.map((venue, index) => (
        <VenueDetailSection key={venue.id} venue={venue} index={index} />
      ))}

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
