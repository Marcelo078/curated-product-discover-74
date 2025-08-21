export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  category: string;
  benefits: string[];
  features: string[];
  howToUse?: string;
  testimonials?: Testimonial[];
  faqs: FAQ[];
  affiliateLink: string;
  keywords: string[];
  slug: string;
  metaTitle: string;
  metaDescription: string;
  longContent: string;
}

export interface Testimonial {
  name: string;
  content: string;
  rating?: number;
}

export interface FAQ {
  question: string;
  answer: string;
}