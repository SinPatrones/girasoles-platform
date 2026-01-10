import { Venue } from '../../domain/models/Venue';
import { VenueRepository } from '../../domain/repositories/VenueRepository';

const venues: Venue[] = [
  {
    id: '1',
    name: 'Salón Principal - Recepción y Adultos',
    slug: 'salon-principal',
    description: 'Nuestro salón principal es el corazón de Los Girasoles, diseñado específicamente para crear momentos inolvidables. Con capacidad amplia y elegante decoración, es el espacio perfecto para la recepción de invitados y las celebraciones de adultos.',
    capacity: 80,
    area: '150m²',
    features: [
      'Decoración elegante con temática vintage',
      'Iluminación profesional ajustable',
      'Sistema de sonido de alta calidad',
      'Área de pista de baile amplia',
      'Bar exclusivo para adultos',
      'Mesas y sillas luxury (medallón y crossback)',
      'Zona de fotografía con backdrops elegantes',
      'Aire acondicionado central',
      'Entrada con alfombra roja',
      'Recepción para registro de invitados',
    ],
    mainImage: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
    ],
    highlights: [
      {
        title: 'Elegancia y Sofisticación',
        description: 'Ambiente refinado con acabados de primera calidad',
      },
      {
        title: 'Versatilidad',
        description: 'Adaptable a diferentes temáticas y estilos de evento',
      },
      {
        title: 'Comodidad Garantizada',
        description: 'Climatización perfecta durante todo el evento',
      },
    ],
  },
  {
    id: '2',
    name: 'Salón Juvenil - Zona de Diversión',
    slug: 'salon-juvenil',
    description: 'Espacio vibrante y moderno diseñado especialmente para que los jóvenes disfruten al máximo. Equipado con tecnología de iluminación LED, efectos especiales y zonas interactivas para crear la fiesta perfecta.',
    capacity: 100,
    area: '180m²',
    features: [
      'Piso LED interactivo',
      'Cabina 360° para videos virales',
      'Zona de efectos especiales (humo, láser, nieve)',
      'DJ booth profesional con iluminación',
      'Barra libre de bebidas sin alcohol',
      'Cabinas de fotos temáticas (espejada, portada de revista)',
      'Sillones Dubai y área lounge',
      'Sistema de sonido premium Electrovoice ZLX',
      'Pantallas LED para visuales',
      'Área de juegos y actividades',
    ],
    mainImage: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80',
      'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    ],
    highlights: [
      {
        title: 'Tecnología de Punta',
        description: 'Equipamiento de última generación para una experiencia única',
      },
      {
        title: 'Diversión Ilimitada',
        description: 'Múltiples zonas de entretenimiento para todos los gustos',
      },
      {
        title: 'Ambiente Seguro',
        description: 'Espacio vigilado y controlado para la tranquilidad de los padres',
      },
    ],
  },
  {
    id: '3',
    name: 'Salón Íntimo - Camerino y Eventos Especiales',
    slug: 'salon-intimo',
    description: 'Un espacio exclusivo y acogedor pensado para momentos especiales como el camerino de la quinceañera, ceremonias privadas o celebraciones íntimas. Diseñado con atención al detalle para crear una atmósfera mágica.',
    capacity: 50,
    area: '100m²',
    features: [
      'Camerino premium con espejo Hollywood',
      'Área de maquillaje y peinado',
      'Vestidor privado amplio',
      'Zona de snacks y bebidas exclusiva',
      'Decoración personalizable',
      'Iluminación cálida y ajustable',
      'Sofás y sillones confortables',
      'Sistema de audio ambiente',
      'Baño privado exclusivo',
      'Área para fotografías pre-evento',
    ],
    mainImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80',
    ],
    highlights: [
      {
        title: 'Privacidad Total',
        description: 'Espacio exclusivo para preparativos y momentos íntimos',
      },
      {
        title: 'Confort Premium',
        description: 'Todas las comodidades para que te sientas como una reina',
      },
      {
        title: 'Personalización',
        description: 'Adapta el espacio a tu estilo y preferencias',
      },
    ],
  },
];

export class InMemoryVenueRepository implements VenueRepository {
  getAllVenues(): Venue[] {
    return venues;
  }

  getVenueBySlug(slug: string): Venue | undefined {
    return venues.find((venue) => venue.slug === slug);
  }
}
