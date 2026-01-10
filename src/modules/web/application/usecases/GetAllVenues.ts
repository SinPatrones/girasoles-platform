import { Venue } from '../../domain/models/Venue';
import { VenueRepository } from '../../domain/repositories/VenueRepository';

export class GetAllVenues {
  constructor(private venueRepository: VenueRepository) {}

  execute(): Venue[] {
    return this.venueRepository.getAllVenues();
  }
}
