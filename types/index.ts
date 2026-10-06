export interface ProductSpecification {
  label: string;
  value: string;
  note?: string;
}

export interface ProductGrade {
  name: string;
  description: string;
  typicalUses: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  botanicalName?: string;
  shortDescription: string;
  fullDescription: string;
  origin: string;
  image: string;
  badge?: string;
  highlights: string[];
  applications: string[];
  grades: ProductGrade[];
  packagingOptions: string[];
  specifications: ProductSpecification[];
  qualityAssurance: string[];
  category: 'spices' | 'agricultural' | 'food-ingredients';
}

export interface ProcessStep {
  step: string;
  title: string;
  summary: string;
  details: string;
  iconName: string;
}

export interface NavItem {
  label: string;
  href: string;
  isCTA?: boolean;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  country: string;
  phoneWhatsapp: string;
  productRequirement: string;
  requiredQuantity: string;
  preferredPackaging: string;
  destinationPort: string;
  targetDeliveryDate: string;
  additionalRequirements: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  subject: string;
  message: string;
}
