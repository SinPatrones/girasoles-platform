import { Package } from '../../domain/models/Package';
import { PackageRepository } from '../../domain/repositories/PackageRepository';

export class GetAllPackages {
  constructor(private packageRepository: PackageRepository) {}

  execute(): Package[] {
    return this.packageRepository.getAllPackages();
  }
}
