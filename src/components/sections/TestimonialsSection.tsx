'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {Quote, Star} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  name: string;
  event: string;
  rating: number;
  testimonial: string;
  image: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María González',
    event: 'Quinceañera de mi hija',
    rating: 5,
    testimonial: 'Los Girasoles hizo realidad el sueño de mi hija. Todo fue perfecto, desde la decoración hasta el servicio. El equipo fue muy profesional y atento a cada detalle. ¡Totalmente recomendado!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    date: 'Diciembre 2023',
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    event: 'Aniversario de Bodas',
    rating: 5,
    testimonial: 'Celebramos nuestro 25 aniversario en Los Girasoles y fue una experiencia inolvidable. La atención al detalle y el servicio excepcional superaron nuestras expectativas. El salón es hermoso y el personal muy amable.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    date: 'Noviembre 2023',
  },
  {
    id: 3,
    name: 'Andrea Flores',
    event: 'Quinceañera',
    rating: 5,
    testimonial: 'Mi quinceañera fue mágica gracias a Los Girasoles. Desde el primer momento me sentí como una princesa. La decoración con temática de jardín quedó preciosa y todos mis invitados quedaron encantados. ¡Gracias por todo!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    date: 'Octubre 2023',
  },
  {
    id: 4,
    name: 'Roberto Castillo',
    event: 'Evento Corporativo',
    rating: 5,
    testimonial: 'Organizamos nuestro evento de fin de año en Los Girasoles y fue todo un éxito. Las instalaciones son de primera, el servicio impecable y la comida deliciosa. Sin duda volveremos a elegirlos.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    date: 'Diciembre 2023',
  },
  {
    id: 5,
    name: 'Lucía Ramírez',
    event: 'Quinceañera de mi sobrina',
    rating: 5,
    testimonial: 'Excelente servicio y atención. El paquete que elegimos incluyó todo lo que necesitábamos. La quinceañera de mi sobrina fue perfecta, todos los detalles cuidados al máximo. ¡Muy satisfechos con Los Girasoles!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    date: 'Septiembre 2023',
  },
  {
    id: 6,
    name: 'Jorge Pinto',
    event: 'Recepción de Boda',
    rating: 5,
    testimonial: 'Nuestra recepción en Los Girasoles fue perfecta. El lugar es hermoso, la comida exquisita y el servicio impecable. Nuestros invitados no paran de elogiar la celebración. ¡Gracias por hacer nuestro día tan especial!',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    date: 'Noviembre 2023',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios"
             className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"/>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-16"
        >
          <motion.div
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.2}}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
          >
            <Quote className="w-8 h-8 text-primary"/>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="!pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{opacity: 0, y: 50}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.5, delay: index * 0.1}}
                  className="h-full pt-6 pl-6"
                >
                  {/* Testimonial Card with Glassmorphism */}
                  <div className="relative group h-full">
                    {/* Glassmorphism Card */}
                    <div
                      className="backdrop-blur-md bg-white/70 border border-white/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                      {/* Quote Icon */}
                      <div
                        className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                        <Quote className="w-6 h-6 text-white"/>
                      </div>

                      {/* Rating Stars */}
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-accent text-accent"
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
                        "{testimonial.testimonial}"
                      </p>

                      {/* Client Info */}
                      <div className="flex items-center space-x-4 pt-4 border-t border-gray-200/50">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-primary font-medium">
                            {testimonial.event}
                          </p>
                          <p className="text-xs text-gray-500">
                            {testimonial.date}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Gradient Border on Hover */}
                    <div
                      className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"/>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.3}}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600 text-sm">Eventos Realizados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-gray-600 text-sm">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600 text-sm">Clientes Satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9</div>
            <div className="text-gray-600 text-sm">Calificación Promedio</div>
          </div>
        </motion.div>
      </div>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 6px;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
