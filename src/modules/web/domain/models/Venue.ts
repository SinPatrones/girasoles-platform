// Domain model for event venues
export interface VenueHighlight {
  title: string;
  description: string;
}

export interface Venue {
  id: string;
  name: string;
  slug: string;
  description: string;
  capacity: number;
  area: string;
  features: string[];
  mainImage: string;
  images: string[];
  highlights: VenueHighlight[];
}
