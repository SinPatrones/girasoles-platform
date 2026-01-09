'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: 'Paquetes Personalizables',
    description: 'Adaptamos cada paquete a tus necesidades y presupuesto',
  },
  {
    title: 'Equipos de Alta Gama',
    description: 'Sonido, iluminación y efectos profesionales Electrovoice ZLX',
  },
  {
    title: 'Catering Gourmet',
    description: 'Chef profesional y menú personalizado de alta calidad',
  },
  {
    title: 'Decoración Temática',
    description: 'Desde vintage hasta temáticas completamente personalizadas',
  },
  {
    title: 'Fotografía y Video 4K',
    description: 'Filmación profesional con drones y sesiones pre-evento',
  },
  {
    title: 'Facilidades de Pago',
    description: 'Planes de pago flexibles para que no te preocupes',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovando para sorprenderte en cada detalle de tu celebración
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex items-start space-x-4 group hover:scale-105"
            >
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-yellow-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#contacto"
            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Agenda tu Visita Hoy
          </a>
        </motion.div>
      </div>
    </section>
  );
}
