import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo/girasoles_logo.jpg"
                  alt="Los Girasoles Logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-400">Los Girasoles</h3>
                <p className="text-xs text-gray-400">Salón de Eventos</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Innovando para sorprenderte en cada celebración. Tu quinceañera merece lo mejor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#paquetes" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                  Paquetes
                </Link>
              </li>
              <li>
                <Link href="#sobre-nosotros" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Calle Lircay N° 200 – 1 Urb. San Martín de Socabaya Coscollo
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:941415631" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                    941 415 631
                  </a>
                  <a href="tel:933435588" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                    933 435 588
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href="mailto:info@losgirasoles.com" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                  info@losgirasoles.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Horario de Atención</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-gray-300 font-medium">Lunes - Domingo</p>
                  <p className="text-gray-400">9:00 AM - 9:00 PM</p>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Síguenos en redes sociales</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/moises.huahuasoncco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@losgirasoles.xv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-200"
                  aria-label="Tiktok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.94,1.61V15.78a2.83,2.83,0,0,1-2.83,2.83h0a2.83,2.83,0,0,1-2.83-2.83h0a2.84,2.84,0,0,1,2.83-2.84h0V9.17h0A6.61,6.61,0,0,0,3.5,15.78h0a6.61,6.61,0,0,0,6.61,6.61h0a6.61,6.61,0,0,0,6.61-6.61V9.17l.2.1a8.08,8.08,0,0,0,3.58.84h0V6.33l-.11,0a4.84,4.84,0,0,1-3.67-4.7H12.94Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
            <h5 className="text-sm font-semibold text-yellow-400 mb-2">Términos y Condiciones</h5>
            <p className="text-xs text-gray-400 leading-relaxed">
              Cualquier cambio de fecha luego de la fecha indicada en el contrato debe hacerse con 2 meses de
              anticipación de acuerdo a las fechas disponibles en el salón. La devolución de algún adelanto
              luego del contrato será solo del 50%.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Los Girasoles - Salón de Eventos. Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-500">
              Desarrollado por{' '}
              <a
                href="https://www.miempresa360.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 font-medium"
              >
                Mi Empresa 360
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
