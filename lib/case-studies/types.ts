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
  items?: { title: string; body: string | string[] }[];
  steps?: string[];
  principles?: { title: string; body: string }[];
  cards?: { title: string; body: string }[];
  images?: CaseStudyImage[];
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
  meta: CaseStudyMeta;
  heroImage?: CaseStudyImage;
  sections: CaseStudySection[];
  metrics?: CaseStudyMetric[];
};
