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
  /** Optional supporting detail lines shown beneath each meta card value. */
  roleDetail?: string;
  timelineDetail?: string;
  platformDetail?: string;
  toolsDetail?: string;
  scopeDetail?: string;
};

/** An ordered content block, used to interleave text, images, cards, and lists. */
export type CaseStudyContentBlock =
  | { kind: "text"; text: string; emphasis?: boolean }
  | { kind: "images"; images: CaseStudyImage[]; layout?: "stack" | "grid" }
  | { kind: "cards"; cards: { title: string; body: string }[] }
  | { kind: "list"; items: string[] };

export type CaseStudySection = {
  title: string;
  /**
   * Ordered content blocks. When set, text/images/cards render in this exact
   * order (instead of all-text-then-all-images), matching the source design.
   */
  content?: CaseStudyContentBlock[];
  /** Bordered rows with an inline number, e.g. a "Next Steps" list. */
  numberedCards?: string[];
  paragraphs?: string[];
  numberedList?: { intro: string; items: string[] };
  closingParagraphs?: string[];
  items?: {
    title: string;
    body: string | string[];
    images?: CaseStudyImage[];
    imageLayout?: "stack" | "grid";
    /** Shows a centered "Before  →  After" caption beneath this item's images. */
    beforeAfter?: boolean;
  }[];
  steps?: string[];
  /** Rows of a connected flow diagram (e.g. a customer journey), rendered
   *  with directional arrows between steps and a drop to the next row. */
  flow?: string[][];
  principles?: { title: string; body: string }[];
  cards?: { title: string; body: string }[];
  /**
   * "grid" (default) puts cards in two columns with the title on its own line.
   * "stack" puts them full width, one per row, with the title running inline
   * with the body — used where the design reads as a list of insights.
   */
  cardLayout?: "grid" | "stack";
  images?: CaseStudyImage[];
  imageLayout?: "stack" | "grid";
  /** Side-by-side text and image layout (e.g. wireframes). */
  layout?: "split";
  metrics?: CaseStudyMetric[];
  /** Closing line rendered *after* the metrics grid, not before it. */
  metricsFootnote?: string;
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
  /** Optional italic tagline shown beneath the subtitle. */
  tagline?: string;
  intro: string[];
  externalUrl?: string;
  /** Optional heading above role/timeline meta (e.g. Project Overview). */
  overviewTitle?: string;
  meta: CaseStudyMeta;
  heroImage?: CaseStudyImage;
  sections: CaseStudySection[];
  metrics?: CaseStudyMetric[];
};
