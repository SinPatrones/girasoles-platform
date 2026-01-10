'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Maximize, ChevronRight } from 'lucide-react';
import { Venue } from '@/modules/web/domain/models/Venue';

interface VenueCardProps {
  venue: Venue;
  index: number;
}

export default function VenueCard({ venue, index }: VenueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden group">
        <Image
          src={venue.mainImage}
          alt={venue.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-2">{venue.name}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-6 line-clamp-3">{venue.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2 text-gray-700">
            <Users className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-gray-500">Capacidad</p>
              <p className="font-semibold">{venue.capacity} pers.</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <Maximize className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-gray-500">Área</p>
              <p className="font-semibold">{venue.area}</p>
            </div>
          </div>
        </div>

        <a
          href={`#${venue.slug}`}
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center space-x-2 group"
        >
          <span>Ver Detalles</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
