import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'turmeric-finger',
    slug: 'turmeric-finger',
    title: 'Turmeric Finger',
    botanicalName: 'Curcuma Longa',
    shortDescription: 'Premium-quality whole turmeric fingers sourced from India, suitable for spice processing, grinding, food applications and further value addition.',
    fullDescription: 'Our Indian Turmeric Fingers are carefully selected from prominent turmeric growing regions of India. Prized globally for their natural aroma, rich golden-yellow hue, and essential active properties, our whole dried fingers are ideal for international spice millers, extractors, food manufacturers, and repackagers. We coordinate sorting, grading, and bulk export packaging strictly in alignment with agreed buyer specifications.',
    origin: 'India',
    image: '/images/turmeric-finger.jpg',
    badge: 'Whole Dried Turmeric',
    category: 'spices',
    highlights: [
      'Authentic Indian Origin',
      'Whole dried natural turmeric fingers',
      'Multiple commercial grades available based on buyer requirements',
      'Bulk export-grade packaging options',
      'Custom cleaning, grading & polishing specifications available',
      'Third-party inspection & lab testing coordination available upon request'
    ],
    applications: [
      'Commercial spice grinding and curry powder blends',
      'Botanical extraction and Oleoresin processing',
      'Food manufacturing and seasoning formulations',
      'Herbal, nutraceutical, and cosmetic raw ingredient sourcing',
      'Bulk repackaging for wholesale and retail distribution'
    ],
    grades: [
      {
        name: 'Single Polished / Double Polished / Unpolished',
        description: 'Surface finishing adapted to buyer preferences and processing requirements.',
        typicalUses: 'Industrial grinding, bulk trading, and extraction facilities.'
      },
      {
        name: 'Standard Export Grade & Selection Grade',
        description: 'Sorted for uniform finger length, minimal broken pieces, and consistent color tone.',
        typicalUses: 'Premium food service, spice brands, and export packaging.'
      }
    ],
    packagingOptions: [
      '25 kg / 50 kg PP (Polypropylene) Bags',
      '25 kg / 50 kg Jute / Gunny Bags with inner poly liner',
      'Custom bulk container liner or buyer-specified branding (subject to agreement)'
    ],
    specifications: [
      {
        label: 'Origin',
        value: 'India',
        note: 'Sourced from key agricultural belts'
      },
      {
        label: 'Product Type',
        value: 'Whole Dried Turmeric Finger',
        note: 'Naturally cured and sun-dried'
      },
      {
        label: 'Curcumin Content',
        value: 'Available as per buyer requirements',
        note: 'Tested and verified against agreed purchase order specs'
      },
      {
        label: 'Moisture Content',
        value: 'Within standard export parameters / as agreed',
        note: 'Strictly monitored during packing'
      },
      {
        label: 'Polishing Level',
        value: 'Unpolished, Single Polished, or Double Polished',
        note: 'Specified by buyer'
      },
      {
        label: 'Foreign Matter / Impurities',
        value: 'Minimised through manual / mechanical cleaning as specified',
        note: 'Strict sorting procedures'
      },
      {
        label: 'Minimum Order Quantity (MOQ)',
        value: 'Discussed based on destination port and container load (FCL / LCL)',
        note: 'Flexible commercial options'
      }
    ],
    qualityAssurance: [
      'Visual sorting to eliminate defective fingers, foreign matter, and dust',
      'Moisture control to safeguard quality during oceanic transit',
      'Coordinated batch testing for physical and chemical parameters as required by destination country',
      'Export-compliant fumigation and phytosanitary processing per destination regulations'
    ]
  },
  {
    id: 'turmeric-powder',
    slug: 'turmeric-powder',
    title: 'Turmeric Powder',
    botanicalName: 'Curcuma Longa (Ground)',
    shortDescription: 'Quality Indian turmeric powder suitable for food, spice, ingredient and industrial applications, supplied according to agreed buyer specifications.',
    fullDescription: 'Our Turmeric Powder is milled from premium-grade Indian turmeric fingers under hygienic, temperature-monitored grinding conditions. Delivering consistent golden-yellow coloration, fine granulation, and authentic aroma, it meets the rigorous demands of food manufacturers, seasoning compounders, and global distributors. We tailor the granulation mesh size, moisture criteria, and packaging to match your target market regulations.',
    origin: 'India',
    image: '/images/products/turmeric-powder.png',
    badge: 'Milled Turmeric Powder',
    category: 'spices',
    highlights: [
      'Authentic Indian Origin',
      'Fine milled with uniform particle distribution',
      'Custom mesh sizes available per buyer requirements',
      'Quality specifications aligned with destination regulations',
      'Bulk export food-grade packaging',
      'Coordinated laboratory documentation support'
    ],
    applications: [
      'Culinary spice blends, curry powders, and seasoning mixes',
      'Ready-to-eat packaged foods, snacks, soups, and sauces',
      'Natural food coloring and culinary functional ingredients',
      'Health drinks, botanical formulations, and food supplements',
      'Private label and institutional foodservice packaging'
    ],
    grades: [
      {
        name: 'Custom Mesh Fine / Coarse Grind',
        description: 'Granulation calibrated to buyer application needs (e.g. 40 to 80 mesh or specified requirements).',
        typicalUses: 'Bakery, seasoning blenders, and industrial food lines.'
      },
      {
        name: 'Premium Food Grade Powder',
        description: 'Milled from sound, cleaned turmeric fingers with consistent color and aroma retention.',
        typicalUses: 'Food packaging, retail distribution, and commercial kitchens.'
      }
    ],
    packagingOptions: [
      '20 kg / 25 kg Multi-wall Kraft Paper Bags with Inner PE Liner',
      '25 kg / 50 kg HDPE / PP Woven Bags with Inner Liner',
      'Custom cartons, master bags, or buyer-specified packaging'
    ],
    specifications: [
      {
        label: 'Origin',
        value: 'India',
        note: 'Processed from selected Indian turmeric fingers'
      },
      {
        label: 'Form',
        value: 'Fine Ground Powder',
        note: 'Free-flowing without artificial additives'
      },
      {
        label: 'Mesh Size / Fineness',
        value: 'Available as per buyer requirements',
        note: 'Calibrated to client processing machinery'
      },
      {
        label: 'Curcumin Content',
        value: 'Available as per buyer requirements',
        note: 'Specifications agreed per batch contract'
      },
      {
        label: 'Moisture Content',
        value: 'Maintained within safe export limits',
        note: 'Ensures shelf stability and anti-caking'
      },
      {
        label: 'Total Ash / Acid Insoluble Ash',
        value: 'Conforming to agreed destination market parameters',
        note: 'Verified in pre-shipment testing'
      },
      {
        label: 'Minimum Order Quantity (MOQ)',
        value: 'Discussed based on container load and packaging type',
        note: 'Full Container Load (FCL) or grouped shipments'
      }
    ],
    qualityAssurance: [
      'Raw material cleaning prior to milling to preserve pure spice integrity',
      'Hygienic processing environments preventing contamination',
      'Moisture-barrier multi-ply export packaging preventing moisture absorption',
      'Coordinated destination-specific compliance reports and certificates of analysis (COA)'
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return products;
}
