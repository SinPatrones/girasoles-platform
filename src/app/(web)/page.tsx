import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import HeroCarousel from '@/components/sections/HeroCarousel';
import AboutSection from '@/components/sections/AboutSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import {GallerySectionDynamic, TestimonialsSectionDynamic} from '@/components/sections/BelowFoldSections';
import ContactForm from '@/components/common/ContactForm';
import PackageCard from '@/components/packages/PackageCard';
import MapFacade from '@/components/common/MapFacade';
import {packageService} from '@/modules/web/application/services/PackageService';

export default function Home() {
  const packages = packageService.getAllPackages();

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <HeroCarousel />

      {/* About Section */}
      <AboutSection />

      {/* Packages Section */}
      <section id="paquetes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros Paquetes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Encuentra el paquete perfecto para tu quinceañera. Desde opciones básicas hasta
              experiencias de lujo completas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard key={pkg.id} package={pkg} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Gallery Section */}
      <GallerySectionDynamic />

      {/* Testimonials Section */}
      <TestimonialsSectionDynamic />

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Encuéntranos
            </h2>
            <p className="text-xl text-gray-600">
              Calle Lircay N° 200 – 1 Urb. San Martín de Socabaya Coscollo
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <MapFacade />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
