'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Clock, CheckCircle2, Phone, Star } from 'lucide-react';
import { Package } from '@/modules/web/domain/models/Package';

interface PackageDetailProps {
  package: Package;
}

export default function PackageDetail({ package: pkg }: PackageDetailProps) {
  const getBadgeColor = (badge?: string) => {
    switch (badge) {
      case 'Most Popular':
        return 'from-purple-500 to-pink-500';
      case 'Premium':
        return 'from-yellow-500 to-orange-500';
      case 'Ultimate':
        return 'from-blue-500 to-indigo-500';
      case 'Seasonal':
        return 'from-green-500 to-teal-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-yellow-500 via-yellow-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#paquetes"
            className="inline-flex items-center space-x-2 text-white hover:text-yellow-100 transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Paquetes</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {pkg.badge && (
                <div className="mb-4">
                  <div
                    className={`inline-flex items-center space-x-2 bg-gradient-to-r ${getBadgeColor(pkg.badge)} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}
                  >
                    <Star className="w-4 h-4 fill-current" />
                    <span>{pkg.badge}</span>
                  </div>
                </div>
              )}
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Paquete {pkg.name}
              </h1>
              <p className="text-xl text-yellow-50 mb-6">{pkg.description}</p>
              <div className="flex items-baseline space-x-3">
                <span className="text-2xl text-white">Desde</span>
                <span className="text-6xl font-bold text-white">S/. {pkg.price.toLocaleString()}</span>
              </div>
              {pkg.isSpecial && (
                <div className="mt-4 inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                  <span className="font-semibold">Paquete de Temporada - Precio Especial</span>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Detalles del Evento</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Capacidad Total</p>
                    <p className="text-yellow-100">{pkg.capacity.total} personas</p>
                    <p className="text-sm text-yellow-100">
                      {pkg.capacity.adults} adultos / {pkg.capacity.youth} jóvenes
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Duración</p>
                    <p className="text-yellow-100">{pkg.duration}</p>
                  </div>
                </div>
              </div>
              <a
                href="tel:941415631"
                className="mt-8 w-full bg-white text-yellow-600 px-6 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Reservar Ahora</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Qué Incluye?</h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas para tu quinceañera perfecta
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pkg.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span>{feature.category}</span>
                </h3>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Condiciones de Contratación</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Separación de Fecha</p>
                  <p className="text-gray-600">{pkg.conditions.separation}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Al Firmar Contrato</p>
                  <p className="text-gray-600">{pkg.conditions.contract}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Antes del Evento</p>
                  <p className="text-gray-600">{pkg.conditions.beforeEvent}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Día del Evento</p>
                  <p className="text-gray-600">{pkg.conditions.eventDay}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Nota:</span> {pkg.conditions.notes}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
