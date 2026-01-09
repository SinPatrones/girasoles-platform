import { InMemoryPackageRepository } from '../../infrastructure/repositories/InMemoryPackageRepository';
import { GetAllPackages } from '../usecases/GetAllPackages';
import { GetPackageBySlug } from '../usecases/GetPackageBySlug';

const packageRepository = new InMemoryPackageRepository();

export const packageService = {
  getAllPackages: () => new GetAllPackages(packageRepository).execute(),
  getPackageBySlug: (slug: string) => new GetPackageBySlug(packageRepository).execute(slug),
};
