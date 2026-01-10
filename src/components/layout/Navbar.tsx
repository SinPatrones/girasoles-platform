'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Paquetes', href: '/#paquetes' },
  { name: 'Sobre Nosotros', href: '/#sobre-nosotros' },
  { name: 'Galería', href: '/#galeria' },
  { name: 'Testimonios', href: '/#testimonios' },
  { name: 'Contacto', href: '/#contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/images/logo/girasoles_logo.jpg"
                alt="Los Girasoles Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-primary">
                Los Girasoles
              </span>
              <span className="text-xs text-gray-600 hidden sm:block">
                Innovando para sorprenderte
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:941415631"
              className="flex items-center space-x-2 bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-600 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Llamar Ahora</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-20 bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full space-y-8 px-4"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={toggleMenu}
                    className="text-3xl font-semibold text-gray-800 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-8"
              >
                <a
                  href="tel:941415631"
                  className="flex items-center space-x-3 bg-primary text-white px-10 py-4 rounded-full hover:bg-primary-600 transition-all duration-200 shadow-xl text-lg font-medium"
                >
                  <Phone className="w-5 h-5" />
                  <span>941 415 631</span>
                </a>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <a
                  href="tel:933435588"
                  className="flex items-center space-x-3 bg-white text-primary px-10 py-4 rounded-full hover:bg-gray-50 transition-all duration-200 shadow-xl text-lg font-medium border-2 border-primary"
                >
                  <Phone className="w-5 h-5" />
                  <span>933 435 588</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
