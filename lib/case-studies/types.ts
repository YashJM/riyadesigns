export type CaseStudyImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type CaseStudyMeta = {
  role?: string;
  timeline?: string;
  platform?: string;
  tools?: string;
  responsibilities?: string;
  focusAreas?: string;
  scope?: string;
};

export type CaseStudySection = {
  title: string;
  paragraphs?: string[];
  numberedList?: { intro: string; items: string[] };
  closingParagraphs?: string[];
  items?: {
    title: string;
    body: string | string[];
    images?: CaseStudyImage[];
    imageLayout?: "stack" | "grid";
  }[];
  steps?: string[];
  principles?: { title: string; body: string }[];
  cards?: { title: string; body: string }[];
  images?: CaseStudyImage[];
  imageLayout?: "stack" | "grid";
  /** Side-by-side text and image layout (e.g. wireframes). */
  layout?: "split";
  metrics?: CaseStudyMetric[];
};

export type CaseStudyMetric = {
  value: string;
  label: string;
  description?: string;
};

export type CaseStudyData = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string[];
  externalUrl?: string;
  /** Optional heading above role/timeline meta (e.g. Project Overview). */
  overviewTitle?: string;
  meta: CaseStudyMeta;
  heroImage?: CaseStudyImage;
  sections: CaseStudySection[];
  metrics?: CaseStudyMetric[];
};
