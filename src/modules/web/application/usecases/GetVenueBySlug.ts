import { Venue } from '../../domain/models/Venue';
import { VenueRepository } from '../../domain/repositories/VenueRepository';

export class GetVenueBySlug {
  constructor(private venueRepository: VenueRepository) {}

  execute(slug: string): Venue | undefined {
    return this.venueRepository.getVenueBySlug(slug);
  }
}
