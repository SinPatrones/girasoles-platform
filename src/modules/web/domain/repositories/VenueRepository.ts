import { Venue } from '../models/Venue';

export interface VenueRepository {
  getAllVenues(): Venue[];
  getVenueBySlug(slug: string): Venue | undefined;
}
