'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination, Navigation} from 'swiper/modules';
import {motion, AnimatePresence} from 'framer-motion';
import Image from 'next/image';
import {Quote, Star, Images, X, ChevronLeft, ChevronRight} from 'lucide-react';
import {useState} from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Testimonial {
  id: number;
  name: string;
  event: string;
  rating: number;
  testimonial: string;
  image: string;
  date: string;
  eventPhotos: string[];
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
    eventPhotos: [
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&q=80',
    ],
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    event: 'Aniversario de Bodas',
    rating: 5,
    testimonial: 'Celebramos nuestro 25 aniversario en Los Girasoles y fue una experiencia inolvidable. La atención al detalle y el servicio excepcional superaron nuestras expectativas. El salón es hermoso y el personal muy amable.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    date: 'Noviembre 2023',
    eventPhotos: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80',
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200&q=80',
      'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1200&q=80',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80',
    ],
  },
  {
    id: 3,
    name: 'Andrea Flores',
    event: 'Quinceañera',
    rating: 5,
    testimonial: 'Mi quinceañera fue mágica gracias a Los Girasoles. Desde el primer momento me sentí como una princesa. La decoración con temática de jardín quedó preciosa y todos mis invitados quedaron encantados. ¡Gracias por todo!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    date: 'Octubre 2023',
    eventPhotos: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80',
      'https://images.unsplash.com/photo-1481115087311-9a4e3f0d4137?w=1200&q=80',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&q=80',
    ],
  },
  {
    id: 4,
    name: 'Roberto Castillo',
    event: 'Evento Corporativo',
    rating: 5,
    testimonial: 'Organizamos nuestro evento de fin de año en Los Girasoles y fue todo un éxito. Las instalaciones son de primera, el servicio impecable y la comida deliciosa. Sin duda volveremos a elegirlos.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    date: 'Diciembre 2023',
    eventPhotos: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80',
      'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200&q=80',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80',
    ],
  },
  {
    id: 5,
    name: 'Lucía Ramírez',
    event: 'Quinceañera de mi sobrina',
    rating: 5,
    testimonial: 'Excelente servicio y atención. El paquete que elegimos incluyó todo lo que necesitábamos. La quinceañera de mi sobrina fue perfecta, todos los detalles cuidados al máximo. ¡Muy satisfechos con Los Girasoles!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    date: 'Septiembre 2023',
    eventPhotos: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80',
    ],
  },
  {
    id: 6,
    name: 'Jorge Pinto',
    event: 'Recepción de Boda',
    rating: 5,
    testimonial: 'Nuestra recepción en Los Girasoles fue perfecta. El lugar es hermoso, la comida exquisita y el servicio impecable. Nuestros invitados no paran de elogiar la celebración. ¡Gracias por hacer nuestro día tan especial!',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    date: 'Noviembre 2023',
    eventPhotos: [
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80',
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200&q=80',
    ],
  },
];

export default function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

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
                      <div className="pt-4 border-t border-gray-200/50">
                        <div className="flex items-center space-x-4 mb-3">
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

                        {/* View Photos Button */}
                        <button
                          onClick={() => setSelectedTestimonial(testimonial)}
                          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                        >
                          <Images className="w-4 h-4" />
                          <span className="text-sm font-medium">Ver Fotos del Evento</span>
                        </button>
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

      {/* Event Photos Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              initial={{scale: 0.9, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              exit={{scale: 0.9, opacity: 0}}
              transition={{duration: 0.3}}
              className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative bg-gradient-to-r from-primary to-primary-600 text-white px-6 py-4 sm:px-8 sm:py-6">
                <button
                  onClick={() => setSelectedTestimonial(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <h3 className="text-xl sm:text-2xl font-bold pr-12">
                  Fotos del Evento
                </h3>
                <p className="text-sm sm:text-base text-white/90 mt-1">
                  {selectedTestimonial.event} - {selectedTestimonial.name}
                </p>
              </div>

              {/* Modal Content - Photos Carousel */}
              <div className="relative bg-gray-900 p-4 sm:p-8">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation={{
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom',
                  }}
                  pagination={{
                    clickable: true,
                    bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
                  }}
                  className="!pb-12"
                >
                  {selectedTestimonial.eventPhotos.map((photo, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative w-full aspect-video sm:aspect-[16/10] rounded-lg overflow-hidden bg-gray-800">
                        <Image
                          src={photo}
                          alt={`Foto ${index + 1} del evento ${selectedTestimonial.event}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <button
                  className="swiper-button-prev-custom absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                </button>
                <button
                  className="swiper-button-next-custom absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Foto siguiente"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                </button>
              </div>

              {/* Modal Footer */}
              <div className="bg-gray-50 px-6 py-4 sm:px-8 sm:py-5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Images className="w-4 h-4" />
                  <span>{selectedTestimonial.eventPhotos.length} fotos</span>
                </div>
                <button
                  onClick={() => setSelectedTestimonial(null)}
                  className="px-4 py-2 sm:px-6 sm:py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors duration-200"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
