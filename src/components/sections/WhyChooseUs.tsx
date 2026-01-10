'use client';

import { motion } from 'framer-motion';
import { Sparkles, Volume2, UtensilsCrossed, Palette, Video, CreditCard } from 'lucide-react';

const reasons = [
  {
    title: 'Paquetes Personalizables',
    description: 'Adaptamos cada paquete a tus necesidades y presupuesto',
    icon: Sparkles,
    color: 'from-amber-600 to-yellow-600',
    iconColor: 'text-amber-600',
    bgGradient: 'from-white to-amber-50/30',
    iconBg: 'bg-gradient-to-br from-amber-50 to-yellow-50',
  },
  {
    title: 'Equipos de Alta Gama',
    description: 'Sonido, iluminación y efectos profesionales Electrovoice ZLX',
    icon: Volume2,
    color: 'from-slate-600 to-gray-700',
    iconColor: 'text-slate-600',
    bgGradient: 'from-white to-slate-50/30',
    iconBg: 'bg-gradient-to-br from-slate-50 to-gray-50',
  },
  {
    title: 'Catering Gourmet',
    description: 'Chef profesional y menú personalizado de alta calidad',
    icon: UtensilsCrossed,
    color: 'from-rose-600 to-pink-600',
    iconColor: 'text-rose-600',
    bgGradient: 'from-white to-rose-50/30',
    iconBg: 'bg-gradient-to-br from-rose-50 to-pink-50',
  },
  {
    title: 'Decoración Temática',
    description: 'Desde vintage hasta temáticas completamente personalizadas',
    icon: Palette,
    color: 'from-violet-600 to-purple-600',
    iconColor: 'text-violet-600',
    bgGradient: 'from-white to-violet-50/30',
    iconBg: 'bg-gradient-to-br from-violet-50 to-purple-50',
  },
  {
    title: 'Fotografía y Video 4K',
    description: 'Filmación profesional con drones y sesiones pre-evento',
    icon: Video,
    color: 'from-emerald-600 to-teal-600',
    iconColor: 'text-emerald-600',
    bgGradient: 'from-white to-emerald-50/30',
    iconBg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
  },
  {
    title: 'Facilidades de Pago',
    description: 'Planes de pago flexibles para que no te preocupes',
    icon: CreditCard,
    color: 'from-blue-600 to-indigo-600',
    iconColor: 'text-blue-600',
    bgGradient: 'from-white to-blue-50/30',
    iconBg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.15),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(148,163,184,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_80%,rgba(251,207,232,0.15),transparent_50%)]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200/50 text-amber-800 text-sm font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 mr-2 text-amber-600" />
              Lo Mejor de Los Girasoles
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovando para sorprenderte en cada detalle de tu celebración
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative h-full">
                  {/* Subtle glow on hover */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${reason.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500`} />

                  {/* Card content */}
                  <div className={`relative h-full bg-gradient-to-br ${reason.bgGradient} rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/80 backdrop-blur-sm`}>

                    {/* Icon Container */}
                    <div className="mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 ${reason.iconBg} rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100/50`}>
                        <Icon className={`w-8 h-8 ${reason.iconColor}`} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {reason.description}
                      </p>
                    </div>

                    {/* Decorative line accent */}
                    <div className={`absolute top-0 left-8 w-12 h-1 bg-gradient-to-r ${reason.color} rounded-full opacity-60`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Agenda tu Visita Hoy</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
