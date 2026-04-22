'use client';

import {motion} from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import HeroCarousel from '@/components/sections/HeroCarousel';
import AboutSection from '@/components/sections/AboutSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import GallerySection from '@/components/sections/GallerySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactForm from '@/components/common/ContactForm';
import PackageCard from '@/components/packages/PackageCard';
import {packageService} from '@/modules/web/application/services/PackageService';

export default function Home() {
  const packages = packageService.getAllPackages();

  return (
    <div className="min-h-screen">
      <Navbar/>
      <WhatsAppButton/>

      {/* Hero Section */}
      <HeroCarousel/>

      {/* About Section */}
      <AboutSection/>

      {/* Packages Section */}
      <section id="paquetes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros Paquetes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Encuentra el paquete perfecto para tu quinceañera. Desde opciones básicas hasta
              experiencias de lujo completas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard key={pkg.id} package={pkg} index={index}/>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs/>

      {/* Gallery Section */}
      <GallerySection/>

      {/* Testimonials Section */}
      <TestimonialsSection/>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm/>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Encuéntranos
            </h2>
            <p className="text-xl text-gray-600">
              Calle Lircay N° 200 – 1 Urb. San Martín de Socabaya Coscollo
            </p>
          </motion.div>

          <motion.div
            initial={{opacity: 0, scale: 0.95}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="bg-gray-200 aspect-video flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1608.9021677728392!2d-71.52993871117617!3d-16.443312519056818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424ad43a71975d%3A0x9960f2a7dabe3a7e!2sLos%20Girasoles%20salon%20de%20eventos!5e0!3m2!1ses!2spe!4v1767953783837!5m2!1ses!2spe"
                width="100%"
                height="100%"
                style={{border: 0, display: 'block'}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
