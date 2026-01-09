import { Package } from '../models/Package';

export interface PackageRepository {
  getAllPackages(): Package[];
  getPackageBySlug(slug: string): Package | undefined;
}
