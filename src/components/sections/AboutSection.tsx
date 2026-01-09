'use client';

import {motion} from 'framer-motion';
import {Award, Heart, Sparkles, Users} from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Experiencia Premium',
    description: 'Más de 10 años creando momentos inolvidables para quinceañeras',
  },
  {
    icon: Heart,
    title: 'Atención Personalizada',
    description: 'Cada detalle es pensado especialmente para tu celebración',
  },
  {
    icon: Sparkles,
    title: 'Instalaciones Modernas',
    description: 'Equipos de última tecnología y salones elegantemente decorados',
  },
  {
    icon: Users,
    title: 'Personal Profesional',
    description: 'Equipo capacitado y comprometido con hacer tu sueño realidad',
  },
];

export default function AboutSection() {
  return (
    <section id="sobre-nosotros" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En Los Girasoles transformamos momentos importantes en recuerdos inolvidables.
            Con más de 10 años creando celebraciones únicas en Arequipa, ofrecemos tres ambientes diseñados para
            adaptarse a cada historia: quinceañeros, matrimonios, promociones y eventos que merecen brillar. Nuestro
            compromiso es la excelencia, el detalle y una atención que supera expectativas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: index * 0.1}}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 group hover:-translate-y-2"
            >
              <div
                className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.4}}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            {number: '500+', label: 'Eventos Realizados'},
            {number: '10+', label: 'Años de Experiencia'},
            {number: '98%', label: 'Clientes Satisfechos'},
            {number: '170', label: 'Capacidad Máxima'},
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
