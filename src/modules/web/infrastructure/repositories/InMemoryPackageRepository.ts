import { Package } from '../../domain/models/Package';
import { PackageRepository } from '../../domain/repositories/PackageRepository';

const packages: Package[] = [
  {
    id: '1',
    name: 'Regular',
    slug: 'regular',
    price: 6999,
    description: 'Paquete perfecto para comenzar a celebrar tu quinceañera especial con elegancia y estilo',
    heroImage: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920&q=80',
    capacity: {
      total: 70,
      adults: 30,
      youth: 40,
    },
    duration: '6h + 1h retirada',
    features: [
      {
        category: 'Salones',
        items: ['Salones 2 y 3', 'Camerino de la quinceañera', '6h + 1h retirada'],
      },
      {
        category: 'Videos y Fotos',
        items: ['No aplica'],
      },
      {
        category: 'Temática',
        items: ['Vintage'],
      },
      {
        category: 'Ingreso de la Quinceañera',
        items: ['Gradas'],
      },
      {
        category: 'Hora Loca',
        items: ['No aplica'],
      },
      {
        category: 'Sonido y Animación',
        items: ['DJ semiprofesional', '4 parlantes Alta gamma: Electrovoice ZLX'],
      },
      {
        category: 'Iluminación y Efectos',
        items: ['Parleds', 'Neon leds'],
      },
      {
        category: 'Catering y Torta',
        items: ['Torta de 1 piso', 'Mesa de chocolates', '3 tipos (a elección)'],
      },
      {
        category: 'Plato de Fondo',
        items: ['Normal (Chuleta de chancho, pastel de papa y ensalada de legumbres)'],
      },
      {
        category: 'Bebidas',
        items: ['Cocteles 2 tipos a elección'],
      },
      {
        category: 'Mesas',
        items: ['Sillas tiffany', 'Centro de mesa (Flores artificiales normal)', 'Platos loza', 'Cubiertos y cristalería estándar'],
      },
      {
        category: 'Brindis',
        items: ['Champagne'],
      },
      {
        category: 'Personal',
        items: ['2 Mozos', '1 seguridad', 'Coordinador de evento', 'Chef', 'Ayudante de cocina'],
      },
    ],
    conditions: {
      separation: 'Separación de fecha al menos S/. 1000',
      contract: 'Contrato con el 50%',
      beforeEvent: 'Semana antes del evento 80%',
      eventDay: 'Día del evento 20%',
      notes: 'APDAY (incluido) no considera IGV',
    },
  },
  {
    id: '2',
    name: 'Intermedio',
    slug: 'intermedio',
    price: 9999,
    description: 'Experiencia mejorada con video profesional, cabinas de fotos y servicios ampliados',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
    capacity: {
      total: 100,
      adults: 40,
      youth: 60,
    },
    duration: '6h + 1h adicional',
    features: [
      {
        category: 'Salones',
        items: ['Salones 1, 2 y 3', 'Camerino de la quinceañera', '6h + 1h adicional'],
      },
      {
        category: 'Videos y Fotos',
        items: ['Filmación Video en HD', 'Entrega en digital (USB)', 'Cuadro de fotos pequeño'],
      },
      {
        category: 'Zonas de Fotos/Video',
        items: ['Cabina espejada', 'Cabina 360', 'Cabina portada de revista', 'Piso led, sillones Dubái y otros'],
      },
      {
        category: 'Temática',
        items: ['Vintage'],
      },
      {
        category: 'Ingreso de la Quinceañera',
        items: ['Gradas'],
      },
      {
        category: 'Hora Loca',
        items: ['1 personaje del salón', 'Hawaianas'],
      },
      {
        category: 'Sonido y Animación',
        items: ['DJ semiprofesional (4 parlantes Alta gamma: Electrovoice ZLX)', 'Maestro de Ceremonias (solo ceremonia)'],
      },
      {
        category: 'Iluminación y Efectos',
        items: ['Parleds', 'Neon leds', 'Cabezas beam', 'Chisperos', 'Humo normal'],
      },
      {
        category: 'Catering y Torta',
        items: ['Torta de dos pisos pequeña', 'Mesa de chocolates y frutas', 'Bocaditos 5 tipos (a elección)'],
      },
      {
        category: 'Plato de Fondo',
        items: ['Normal (Chuleta de chancho, pastel de papa y ensalada de legumbres)'],
      },
      {
        category: 'Bebidas',
        items: ['Cocteles 4 tipos (2 servicio general y 2 exclusivo en barra)', 'Barra Libre (para jóvenes) bebidas de color sin alcohol', 'Un vino por mesa (Queirolo)'],
      },
      {
        category: 'Mesas',
        items: ['Sillas medallón y Cross back', 'Centro de mesa (Flores artificiales normal)', 'Platos dorados', 'Cubiertos y cristalería estándar'],
      },
      {
        category: 'Brindis',
        items: ['Champagne'],
      },
      {
        category: 'Personal',
        items: ['1 Mozo/maître', '1 Mozo/barman', '1 Mozo', '1 seguridad', 'Coordinador de evento', 'Chef', 'Ayudante de cocina'],
      },
    ],
    conditions: {
      separation: 'Separación de fecha al menos S/. 1000',
      contract: 'Contrato con el 50%',
      beforeEvent: 'Semana antes del evento 80%',
      eventDay: 'Día del evento 20%',
      notes: 'APDAY (incluido) no considera IGV',
    },
  },
  {
    id: '3',
    name: 'Premium',
    slug: 'premium',
    price: 12999,
    description: 'Experiencia completa con event planner, fotografía profesional, coreógrafo y amenidades premium',
    heroImage: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80',
    capacity: {
      total: 130,
      adults: 50,
      youth: 80,
    },
    duration: '7h + 1h adicional',
    badge: 'Más Popular',
    features: [
      {
        category: 'Salones',
        items: ['Event planner', 'Salones 1, 2 y 3', 'Camerino XV', '7h + 1h adicional'],
      },
      {
        category: 'Videos y Fotos',
        items: ['Video filmación en alta calidad', 'Fotos en alta calidad (día del evento)', 'Pre sesión de fotos (días antes)', 'Cuadro de firmas (tamaño normal)', 'Entrega en digital (USB)'],
      },
      {
        category: 'Zonas de Fotos/Videos en Tendencia',
        items: ['Cabina espejada', 'Cabina 360', 'Cabina portada de revista', 'Piso led, sillones Dubái y otros'],
      },
      {
        category: 'Temática',
        items: ['Vintage (Semitemática)', '1 personaje en recepción'],
      },
      {
        category: 'Ingreso de la Quinceañera',
        items: ['Bajada en ascensor y gradas'],
      },
      {
        category: 'Hora Loca',
        items: ['2 personajes (1 personaje a elección y 1 personaje del salón)', 'Accesorios (corbatas, winchas, hawaianas, globos led para la quinceañera)'],
      },
      {
        category: 'Sonido y Animación',
        items: ['1 DJ Profesional', 'Maestro de Ceremonias + Activación showman', '4 parlantes Alta gamma: Electrovoice ZLX'],
      },
      {
        category: 'Iluminación y Efectos',
        items: ['Laser de 10 watts', 'Neon leds', 'Cabezas beam', 'Chisperos', 'Humo normal y verticales', 'Hielo seco', 'Lanzallamas', 'Piso led', 'Nieve', 'Parleds'],
      },
      {
        category: 'Coreógrafo',
        items: ['Vals con el paje (2 sesiones)'],
      },
      {
        category: 'Catering y Torta',
        items: ['Torta de dos pisos grande', 'Cupcakes', 'Mesa de chocolates', 'Mesa de frutas'],
      },
      {
        category: 'Plato de Fondo',
        items: ['Principal, guarnición y ensalada a elección'],
      },
      {
        category: 'Bocaditos',
        items: ['6 tipos de bocaditos a elección (livianos y especiales)'],
      },
      {
        category: 'Bebidas',
        items: ['Cocteles 6 tipos (4 servicio general y 2 exclusivo en barra)', 'Barra Libre (para jóvenes) bebidas de color sin alcohol', 'Gaseosa de marca y agua ilimitado', 'Un vino por mesa (Señorío de Najar) con el nombre grabado'],
      },
      {
        category: 'Mesas',
        items: ['Sillas Medallón y Crossback', 'Centro de mesa (Flores artificiales especiales)', 'Platos dorados tematizado', 'Cubiertos dorados', 'Cristalería catedral'],
      },
      {
        category: 'Brindis',
        items: ['Champagne (Don Castello) + galleta wafer', 'Laguna azul (para jóvenes) + galleta wafer'],
      },
      {
        category: 'Stands',
        items: ['Parrilla sanguchera (perro caliente hamburguesa)', 'Snack bars (golosinas)', 'Glitter bar (2h pedrería y maquillaje)'],
      },
      {
        category: 'Personal',
        items: ['1 Mozo/maître', '1 Mozo/barman', '2 Mozos', '1 seguridad', 'Coordinador de evento', 'Chef', 'Ayudante de cocina'],
      },
    ],
    conditions: {
      separation: 'Separación de fecha al menos S/. 1000',
      contract: 'Contrato con el 50%',
      beforeEvent: 'Semana antes del evento 30%',
      eventDay: 'Día del evento 20%',
      notes: 'APDAY (incluido) no considera IGV',
    },
  },
  {
    id: '4',
    name: 'Top Golden',
    slug: 'top-golden',
    price: 16999,
    description: 'Paquete de lujo con 2 DJs profesionales, coreografía avanzada, catering gourmet y amenidades exclusivas',
    heroImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80',
    capacity: {
      total: 150,
      adults: 60,
      youth: 90,
    },
    duration: '7h + 1h retirada',
    badge: 'Premium',
    features: [
      {
        category: 'Salones',
        items: ['Event planner', 'Salones 1, 2 y 3', 'Camerino + Snacks', 'Paje (traje formal)', '7h + 1h retirada'],
      },
      {
        category: 'Videos y Fotos',
        items: ['Filmación', 'Video en 4K', 'Fotos (día del evento)', 'Sesión de fotos (accesorios, asistente luces)', 'Cuadro de firmas, álbum grande banner mediano', 'Entrega en digital (USB) Box personalizada'],
      },
      {
        category: 'Zonas de Fotos/Video',
        items: ['Cabina espejada', 'Cabina 360', 'Cabina portada de revista', 'Piso led, sillones Dubái y otros'],
      },
      {
        category: 'Temática',
        items: ['Vintage + temática completa', '2 personajes en recepción'],
      },
      {
        category: 'Ingreso de la Quinceañera',
        items: ['Ascensor bajada y subida (tematizada)', 'Espectáculo'],
      },
      {
        category: 'Hora Loca',
        items: ['2 personajes (coreógrafos)', 'Accesorios led (lentes, pulseras, varas, antifaces, anillos, globos led para la quinceañera chaleco y capa led)'],
      },
      {
        category: 'Sonido y Animación',
        items: ['2 DJ Profesional+ (Vestuarios stickman u otros)', '4 parlantes Alta gamma: Electrovoice ZLX', 'Maestro de Ceremonias + showman, animación todo el evento'],
      },
      {
        category: 'Iluminación y Efectos',
        items: ['Parleds', 'Neon leds', 'Cabezas beam', 'Chisperos', 'Humo normal y verticales', 'Hielo seco', 'Lanzallamas', 'Piso led', 'Nieve', 'Laser de 10 watts', 'Técnico de iluminación'],
      },
      {
        category: 'Coreógrafo',
        items: ['Vals con el paje', 'Vals con papá', 'Vals con mamá'],
      },
      {
        category: 'Catering y Torta',
        items: ['Torta de dos pisos grande', 'Mesa de chocolates y frutas (con cupcakes y petipanes)', 'Bocaditos masa elástica', 'Bocaditos 8 tipos (gourmet)'],
      },
      {
        category: 'Plato de Fondo',
        items: ['Principal, guarnición y ensalada a elección (Gourmet, lechón y otros)'],
      },
      {
        category: 'Bebidas',
        items: ['Cocteles 8 tipos (4 servicio general y 4 exclusivo en barra)', 'Barra Libre (para jóvenes) bebidas de color sin alcohol', 'Un vino por mesa (Grand rose) aperlado con el nombre grabado'],
      },
      {
        category: 'Mesas',
        items: ['Sillas Doradas', 'Centro de mesa (Flores naturales o centros temáticos)', 'Platos dorados tematizado', 'Cubiertos dorados', 'Cristalería catedral', 'Servilletas color evento'],
      },
      {
        category: 'Brindis',
        items: ['Champagne (Don Castello) + trufa', 'Laguna azul (para jóvenes) + trufa'],
      },
      {
        category: 'Stands',
        items: ['Parrilla sanguchera (perro caliente hamburguesa)', 'Snack bars (golosinas)', 'Helado', 'Carrito Shot', 'Glitter bar (2h pedrería y maquillaje)'],
      },
      {
        category: 'Personal',
        items: ['1 Mozo/maître', '1 Mozo/barman', '3 Mozos', '1 seguridad', 'Coordinador de evento', 'Chef', 'Ayudante de cocina'],
      },
    ],
    conditions: {
      separation: 'Separación de fecha al menos S/. 1000',
      contract: 'Contrato con el 50%',
      beforeEvent: 'Semana antes del evento 80%',
      eventDay: 'Día del evento 20%',
      notes: 'APDAY (incluido) no considera IGV',
    },
  },
  {
    id: '5',
    name: 'Top Platinum',
    slug: 'top-platinum',
    price: 21999,
    description: 'La experiencia definitiva de quinceañera con todo lo que necesitas en esta fecha tan especial',
    heroImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80',
    capacity: {
      total: 170,
      adults: 70,
      youth: 100,
    },
    duration: '7h + 1h retirada',
    badge: 'Ultimate',
    features: [
      {
        category: 'Salones',
        items: ['Event planner', 'Salones 1, 2 y 3', 'Camerino + Snacks', 'Paje (traje a elección)', '7h + 1h retirada'],
      },
      {
        category: 'Videos y Fotos',
        items: ['Filmación', 'Video en 4K', 'Fotos (día del evento)', 'Sesión de fotos (accesorios, asistente luces)', 'Video con dron', 'Cuadro de firmas, álbum grande banner mediano', 'Entrega en digital (USB) Box personalizada'],
      },
      {
        category: 'Zonas de Fotos/Video',
        items: ['Cabina espejada', 'Cabina 360', 'Cabina portada de revista', 'Piso led, sillones Dubái y otros'],
      },
      {
        category: 'Temática',
        items: ['Vintage + temática completa personalizada', '4 personajes de recepción a elección'],
      },
      {
        category: 'Ingreso de la Quinceañera',
        items: ['Ascensor bajada y subida (tematizada)', 'Espectáculo completo', 'Cadetes (cruce de espadas)'],
      },
      {
        category: 'Hora Loca',
        items: ['4 personajes a elección (coreógrafos)', 'Accesorios led (lentes, pulseras, varas, antifaces, anillos, globos led para la quinceañera chaleco y capa led)'],
      },
      {
        category: 'Sonido y Animación',
        items: ['3 DJ Profesional+ (Vestuarios stickman u otros)', '4 parlantes Alta gamma: Electrovoice ZLX', 'Maestro de Ceremonias + showman, animación todo el evento', 'Orquesta de música urbana'],
      },
      {
        category: 'Iluminación y Efectos',
        items: ['Parleds', 'Neon leds', 'Cabezas beam', 'Chisperos', 'Humo normal y verticales', 'Hielo seco', 'Lanzallamas', 'Piso led', 'Nieve', 'Laser de 10 watts', 'Técnico de iluminación'],
      },
      {
        category: 'Coreógrafo',
        items: ['Vals con el paje', 'Vals con papá', 'Vals con mamá', 'Coreografía', '6 bailarines'],
      },
      {
        category: 'Catering y Torta',
        items: ['Torta de tres pisos grande', 'Mesa de chocolates y frutas (con cupcakes y petipanes)', 'Bocaditos masa elástica temáticos', 'Bocaditos 8 tipos (gourmet)'],
      },
      {
        category: 'Plato de Fondo',
        items: ['Principal, guarnición y ensalada a elección (Gourmet, lechón y otros)'],
      },
      {
        category: 'Bebidas',
        items: ['Cocteles 8 tipos (4 servicio general y 4 exclusivo en barra)', 'Barra Libre (para jóvenes) bebidas de color sin alcohol', 'Un vino por mesa (Grand rose) aperlado con el nombre grabado', 'Whisky (Johnnie Walker Black Label o Whisky Glenfiddich 12 años)'],
      },
      {
        category: 'Mesas',
        items: ['Sillas Doradas', 'Centro de mesa (Flores naturales o centros temáticos)', 'Platos dorados tematizado', 'Cubiertos dorados', 'Cristalería catedral', 'Vasos de whisky', 'Hieleras y pinzas', 'Servilletas color evento'],
      },
      {
        category: 'Brindis',
        items: ['Champagne (Don Castello) + trufa', 'Laguna azul (para jóvenes) + trufa'],
      },
      {
        category: 'Stands',
        items: ['Parrilla sanguchera (perro caliente hamburguesa, chorizo y otros)', 'Snack bars', 'Helado', 'Carrito Shots', 'Parrilla de bocaditos calientes', 'Glitter bar (pedrería, maquillaje, tatoos personalizados ilimitado)'],
      },
      {
        category: 'Personal',
        items: ['1 Mozo/maître', '1 Mozo/barman', '4 Mozos', '2 seguridad', 'Coordinador de evento', 'Chef', 'Ayudante de cocina'],
      },
      {
        category: 'Otros Especiales',
        items: ['Limosina', 'Maquillaje', 'Tarjeta de invitación'],
      },
    ],
    conditions: {
      separation: 'Separación de fecha al menos S/. 1000',
      contract: 'Contrato con el 50%',
      beforeEvent: 'Semana antes del evento 80%',
      eventDay: 'Día del evento 20%',
      notes: 'APDAY (incluido) no considera IGV',
    },
  },
  {
    id: '6',
    name: 'Básico Top XV',
    slug: 'basico-top-xv',
    price: 7500,
    description: 'Paquete especial de temporada con DJ profesional, efectos completos y pre sesión de fotos como regalo',
    heroImage: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920&q=80',
    capacity: {
      total: 100,
      adults: 30,
      youth: 70,
    },
    duration: '7h',
    badge: 'Temporada',
    isSpecial: true,
    features: [
      {
        category: 'Salones',
        items: ['Salones: Recepción, adultos y jóvenes', 'Camerino de la quinceañera', '7h'],
      },
      {
        category: 'Videos',
        items: ['Filmación profesional'],
      },
      {
        category: 'Temática',
        items: ['Vintage'],
      },
      {
        category: 'Ingreso de la Quinceañera',
        items: ['Ascensor y Gradas'],
      },
      {
        category: 'Hora Loca',
        items: ['1 personaje'],
      },
      {
        category: 'Sonido y Animación',
        items: ['DJ Profesional', 'Maestro de ceremonia', '4 parlantes Alta gamma: Electrovoice ZLX'],
      },
      {
        category: 'Iluminación y Efectos',
        items: ['Todos los efectos en tendencia'],
      },
      {
        category: 'Catering y Torta',
        items: ['Torta de 1 piso', 'Mesa de chocolates', '3 tipos de bocaditos (a elección)'],
      },
      {
        category: 'Plato de Fondo',
        items: ['Chuleta de chancho, pastel de papa y ensalada de legumbres'],
      },
      {
        category: 'Bebidas',
        items: ['Cocteles 3 tipos a elección'],
      },
      {
        category: 'Mesas',
        items: ['Mesas y Sillas Luxury', 'Centro de mesa (Flores artificiales normal)', 'Platos dorados', 'Cubiertos y cristalería catedral'],
      },
      {
        category: 'Brindis',
        items: ['Champagne'],
      },
      {
        category: 'Personal',
        items: ['2 mozos', '1 seguridad', 'DJ', 'Maestro de ceremonia', 'Coordinador de evento', 'Chef', 'Ayudante de cocina'],
      },
      {
        category: 'Regalo',
        items: ['Pre sesión de fotos'],
      },
    ],
    conditions: {
      separation: 'Separación de fecha al menos S/. 500',
      contract: 'Contrato con el 50%',
      beforeEvent: 'Semana antes del evento 30%',
      eventDay: 'Día del evento 20%',
      notes: 'APDAY (incluido) no considera IGV',
    },
  },
];

export class InMemoryPackageRepository implements PackageRepository {
  getAllPackages(): Package[] {
    return packages;
  }

  getPackageBySlug(slug: string): Package | undefined {
    return packages.find((pkg) => pkg.slug === slug);
  }
}
