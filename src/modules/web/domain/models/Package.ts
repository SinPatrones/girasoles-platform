// Domain model for event packages
export interface PackageFeature {
  category: string;
  items: string[];
}

export interface PackageConditions {
  separation: string;
  contract: string;
  beforeEvent: string;
  eventDay: string;
  notes: string;
}

export interface Package {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  capacity: {
    total: number;
    adults: number;
    youth: number;
  };
  duration: string;
  features: PackageFeature[];
  conditions: PackageConditions;
  badge?: string;
  isSpecial?: boolean;
}
