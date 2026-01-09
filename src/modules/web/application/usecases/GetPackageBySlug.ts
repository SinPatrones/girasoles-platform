import { Package } from '../../domain/models/Package';
import { PackageRepository } from '../../domain/repositories/PackageRepository';

export class GetPackageBySlug {
  constructor(private packageRepository: PackageRepository) {}

  execute(slug: string): Package | undefined {
    return this.packageRepository.getPackageBySlug(slug);
  }
}
