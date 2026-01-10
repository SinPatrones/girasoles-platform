import { Venue } from '../../domain/models/Venue';
import { InMemoryVenueRepository } from '../../infrastructure/repositories/InMemoryVenueRepository';
import { GetAllVenues } from '../usecases/GetAllVenues';
import { GetVenueBySlug } from '../usecases/GetVenueBySlug';

class VenueService {
  private venueRepository = new InMemoryVenueRepository();
  private getAllVenuesUseCase = new GetAllVenues(this.venueRepository);
  private getVenueBySlugUseCase = new GetVenueBySlug(this.venueRepository);

  getAllVenues(): Venue[] {
    return this.getAllVenuesUseCase.execute();
  }

  getVenueBySlug(slug: string): Venue | undefined {
    return this.getVenueBySlugUseCase.execute(slug);
  }
}

export const venueService = new VenueService();
