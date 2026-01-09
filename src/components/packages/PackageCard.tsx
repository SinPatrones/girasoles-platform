import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Clock, ArrowRight, Star } from 'lucide-react';
import { Package } from '@/modules/web/domain/models/Package';

interface PackageCardProps {
  package: Package;
  index: number;
}

export default function PackageCard({ package: pkg, index }: PackageCardProps) {
  const getBadgeColor = (badge?: string) => {
    switch (badge) {
      case 'Most Popular':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'Premium':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'Ultimate':
        return 'bg-gradient-to-r from-blue-500 to-indigo-500';
      case 'Seasonal':
        return 'bg-gradient-to-r from-green-500 to-teal-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  // Get package background image based on package name
  const getPackageImage = () => {
    const images = [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80', // Elegant table setting
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80', // Event decoration
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80', // Party celebration
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80', // Elegant party
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80', // Golden decoration
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80', // Celebration
    ];
    return images[index % images.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Badge */}
        {pkg.badge && (
          <div className="absolute top-2 right-2 z-20">
            <div
              className={`${getBadgeColor(pkg.badge)} text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center space-x-1`}
            >
              <Star className="w-4 h-4 fill-current" />
              <span>{pkg.badge}</span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="relative overflow-hidden h-52">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={getPackageImage()}
              alt={`Paquete ${pkg.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 backdrop-blur-sm bg-black/30" />

          {/* Content */}
          <div className={`relative z-10 p-8 flex flex-col justify-center h-full ${pkg.badge ? 'pr-24' : ''}`}>
            <h3
              className="text-3xl font-bold mb-2 text-white"
              style={{
                textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
              }}
            >
              Paquete {pkg.name}
            </h3>
            <p
              className="text-white/95 text-sm mb-4"
              style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)'
              }}
            >
              {pkg.description}
            </p>
            <div
              className="flex items-baseline space-x-2 text-white"
              style={{
                textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
              }}
            >
              <span className="text-sm">Desde</span>
              <span className="text-4xl font-bold">S/. {pkg.price.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 flex-grow">
          {/* Capacity and Duration */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 text-gray-600 mb-1">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Capacidad</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{pkg.capacity.total}</p>
              <p className="text-xs text-gray-500">
                {pkg.capacity.adults} adultos / {pkg.capacity.youth} jóvenes
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 text-gray-600 mb-1">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Duración</span>
              </div>
              <p className="text-lg font-bold text-gray-900">{pkg.duration}</p>
            </div>
          </div>

          {/* Featured Highlights */}
          <div className="space-y-3 mb-6">
            <h4 className="font-semibold text-gray-900 text-sm">Lo más destacado:</h4>
            <ul className="space-y-2">
              {pkg.features.slice(0, 4).map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  <span>
                    <span className="font-medium">{feature.category}:</span>{' '}
                    {feature.items[0]}
                    {feature.items.length > 1 && '...'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="p-6 pt-0">
          <Link href={`/paquete/${pkg.slug}`}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 group-hover:shadow-xl"
            >
              <span>Ver Detalles Completos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
