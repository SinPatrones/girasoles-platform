'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Venue } from '@/modules/web/domain/models/Venue';

interface VenueDetailSectionProps {
  venue: Venue;
  index: number;
}

export default function VenueDetailSection({
  venue,
  index,
}: VenueDetailSectionProps) {
  return (
    <section
      id={venue.slug}
      className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={venue.mainImage}
                  alt={venue.name}
                  fill
                  className="object-cover"
                />
              </div>
              {venue.images.slice(0, 2).map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className="relative h-48 rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={img}
                    alt={`${venue.name} - Vista ${imgIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {venue.name}
            </h2>
            <p className="text-lg text-gray-600 mb-8">{venue.description}</p>

            {/* Highlights */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              {venue.highlights.map((highlight, hIndex) => (
                <div
                  key={hIndex}
                  className="flex items-start space-x-4 bg-primary-50 p-4 rounded-lg"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Características Principales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {venue.features.map((feature, fIndex) => (
                  <div
                    key={fIndex}
                    className="flex items-start space-x-2 text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
