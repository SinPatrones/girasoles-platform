'use client';

import {useState} from 'react';
import {MapPin} from 'lucide-react';

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1608.9021677728392!2d-71.52993871117617!3d-16.443312519056818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424ad43a71975d%3A0x9960f2a7dabe3a7e!2sLos%20Girasoles%20salon%20de%20eventos!5e0!3m2!1ses!2spe!4v1767953783837!5m2!1ses!2spe';

export default function MapFacade() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="bg-gray-200 aspect-video">
        <iframe
          src={MAP_SRC}
          width="100%"
          height="100%"
          style={{border: 0, display: 'block'}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Los Girasoles Salón de Eventos"
        />
      </div>
    );
  }

  return (
    <div
      className="bg-gray-100 aspect-video flex flex-col items-center justify-center gap-4 cursor-pointer group"
      onClick={() => setLoaded(true)}
      role="button"
      aria-label="Cargar mapa de ubicación"
    >
      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors duration-200">
        <MapPin className="w-8 h-8 text-yellow-600" />
      </div>
      <div className="text-center px-4">
        <p className="text-gray-800 font-semibold text-lg">Los Girasoles — Salón de Eventos</p>
        <p className="text-gray-500 text-sm mt-1">Calle Lircay N° 200, Urb. San Martín de Socabaya, Arequipa</p>
      </div>
      <button
        className="mt-2 px-6 py-2.5 bg-yellow-500 text-white rounded-full text-sm font-medium hover:bg-yellow-600 transition-colors duration-200 shadow-md"
        onClick={() => setLoaded(true)}
      >
        Ver mapa interactivo
      </button>
    </div>
  );
}
