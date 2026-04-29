import { client } from '@/sanity/lib/client';

export interface TestimonialDetails {
  conditionTag?: string;
  caseType?: string;
  severity?: string;
  location?: string;
}

export interface SanityTestimonial {
  _id: string;
  title: string;
  slug: string;
  featured: boolean;
  priority: number;
  category: string;
  quote?: string;
  summary?: string;
  details?: TestimonialDetails;
  before?: string[];
  treatment?: string[];
  outcome?: string[];
  patientWords?: any;
  relatedConditions?: string[];
  imageUrl?: string;
}

// Fetch specifically featured testimonials from the main collection
export async function getFeaturedTestimonials(limit: number = 6): Promise<SanityTestimonial[]> {
  const query = `*[_type == "testimonial"] | order(featured desc, priority asc) [0...${limit}] {
    _id,
    title,
    "slug": slug.current,
    featured,
    priority,
    category,
    quote,
    summary,
    details,
    before,
    treatment,
    outcome,
    patientWords,
    relatedConditions,
    "imageUrl": image.asset->url
  }`;

  return client.fetch(query);
}

// Fetch the 300+ static testimonials from the new dedicated collection
export async function getStaticTestimonials(): Promise<SanityTestimonial[]> {
  const query = `*[_type == "staticTestimonial"] | order(priority asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    patientWords,
    outcome,
    "imageUrl": image.asset->url
  }`;

  return client.fetch(query);
}

export async function getTestimonialBySlug(slug: string): Promise<SanityTestimonial | null> {
  const query = `*[_type in ["testimonial", "staticTestimonial"] && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    featured,
    priority,
    category,
    quote,
    summary,
    details,
    before,
    treatment,
    outcome,
    patientWords,
    relatedConditions,
    "imageUrl": image.asset->url
  }`;

  return client.fetch(query, { slug });
}

export interface TestimonialImageOverride {
  testimonialId: string;
  imageUrl: string;
}

export async function getTestimonialImageOverrides(): Promise<TestimonialImageOverride[]> {
  const query = `*[_type == "testimonialImageOverride"] {
    testimonialId,
    "imageUrl": image.asset->url
  }`;

  return client.fetch(query);
}
