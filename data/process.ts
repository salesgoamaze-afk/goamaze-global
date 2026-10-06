import { ProcessStep } from '@/types';

export const exportProcessSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Inquiry',
    summary: 'Share your product requirement with us.',
    details: 'Submit your requirement specifying turmeric product type, estimated volumes, target destination port, and delivery schedule via our quotation form or direct email.',
    iconName: 'FileText',
  },
  {
    step: '02',
    title: 'Requirement Review',
    summary: 'We understand specifications, quantity, destination and packaging requirements.',
    details: 'Our export desk assesses your target market standards, physical/chemical parameters, packaging preferences, and commercial terms (FOB/CIF/CFR).',
    iconName: 'ClipboardCheck',
  },
  {
    step: '03',
    title: 'Sourcing',
    summary: 'We coordinate sourcing from suitable Indian suppliers.',
    details: 'We engage directly with verified agricultural suppliers and processors in premier Indian turmeric farming regions to secure the exact quality required.',
    iconName: 'Search',
  },
  {
    step: '04',
    title: 'Quality & Sample',
    summary: 'Product specifications and samples can be discussed where applicable.',
    details: 'We coordinate product specification sheets and courier representative samples where required by the buyer prior to final production batch dispatch.',
    iconName: 'ShieldCheck',
  },
  {
    step: '05',
    title: 'Documentation & Shipment',
    summary: 'We coordinate export documentation and shipment requirements.',
    details: 'We manage pre-shipment inspection coordination, export packing, fumigation, customs documentation, bill of lading, and freight booking.',
    iconName: 'PackageCheck',
  },
  {
    step: '06',
    title: 'Delivery',
    summary: 'Shipment is dispatched according to agreed commercial terms.',
    details: 'Consignment departs Indian port with full container tracking, prompt dispatch of shipping documents, and seamless communication until destination arrival.',
    iconName: 'Ship',
  },
];
