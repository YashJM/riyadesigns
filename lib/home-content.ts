/** Home page copy and featured project data (synced with Figma home design). */

export const HOME_HERO = {
  eyebrow: "Product Designer • SaaS • Onboarding • UX Strategy",
  headline: "I design products that simplify complex workflows.",
  subtitle:
    "I blend research, product thinking, and craft to turn complex problems into simple, intuitive experiences people actually enjoy using.",
} as const;

export const SELECTED_IMPACT = [
  { value: "30%", label: "Higher User Engagement" },
  { value: "25%", label: "Improved Lead Conversion" },
  { value: "35%", label: "Faster Transaction Completion" },
  { value: "6+", label: "Years of Product Designer Experience" },
] as const;

export type HomeFeaturedProject = {
  slug: string;
  title: string;
  subtitle: string;
  metrics: string[];
  tags: string[];
  image: string;
  fallback: string;
};

export const HOME_FEATURED = {
  title: "Featured Product Work",
  description:
    "Selected projects where I used research, UX strategy, and thoughtful design to simplify workflows and improve product outcomes.",
  projects: [
    {
      slug: "therapix",
      title: "Therapix",
      subtitle: "Designing a AI-powered clinical documentation experience",
      metrics: [
        "30% Faster Documentation",
        "35% Less Manual Documentation",
        "25% Improved Workflow Efficiency",
      ],
      tags: ["AI", "Healthcare", "Clinical SaaS", "UX", "Product Thinking", "Web Application"],
      image: "/figma/card-therapix-hero.png",
      fallback: "linear-gradient(135deg,#0f2847,#1e3a5f)",
    },
    {
      slug: "akshar-packs",
      title: "Akshar Packs",
      subtitle: "Simplifying B2B Product Discovery",
      metrics: [
        "38% Faster transaction completion",
        "27% Increase in engagement",
        "Reduced Cognitive load across core workflows",
        "Improved Task completion efficiency",
      ],
      tags: ["B2B", "Product Design", "UX Design", "Visual Design"],
      image: "/figma/card-akshar-hero.png",
      fallback: "linear-gradient(135deg,#f2d6c8,#eadfd7)",
    },
    {
      slug: "zapp-wallet",
      title: "Zapp Wallet",
      subtitle: "Designing a Faster and More Trustworthy Mobile Wallet Experience",
      metrics: [
        "35% Faster transactions",
        "20% Increased engagement",
        "Higher user confidence",
        "Better financial awareness",
      ],
      tags: ["Fintech", "Mobile UX", "Product Design"],
      image: "/figma/zapp-hero.png",
      fallback: "linear-gradient(135deg,#d9b2f3,#c794ec)",
    },
  ] satisfies HomeFeaturedProject[],
} as const;

export const HOME_CASE_STUDIES = {
  title: "Case Studies",
  description:
    "In-depth, research-driven explorations of established products — reimagining how they could work better for their users.",
  projects: [
    {
      slug: "apple-tv-plus",
      title: "Apple TV+",
      subtitle:
        "Re-imagining Content Discovery Through Inclusive & Accessible Design",
      metrics: [
        "38% Faster Content Discovery",
        "65% Faster Accessibility Discovery",
        "45% Higher Recommendation Confidence",
        "30% Improved Task Completion",
      ],
      tags: ["Streaming", "Accessibility", "UX Research"],
      image: "/figma/card-apple-tv-hero.png",
      fallback: "linear-gradient(135deg,#1a1a2e,#2d2d4a)",
    },
    {
      slug: "google-pay-ai",
      title: "Google Pay — AI Spending Intelligence",
      subtitle:
        "Helping users make smarter financial decisions through proactive, personalized insights.",
      metrics: [
        "46% Improved Budget Awareness",
        "54% Higher Financial Confidence",
        "Faster Financial Decisions",
      ],
      tags: ["AI", "Fintech", "Product Thinking", "UX"],
      image: "/figma/card-google-pay-hero.png",
      fallback: "linear-gradient(135deg,#4285f4,#34a853)",
    },
    {
      slug: "shopify-analytics",
      title: "Shopify Merchant Analytics Dashboard",
      subtitle: "Designing a Smarter Analytics Experience for Shopify Merchants",
      metrics: ["40% Faster performance review", "35% Reduced analysis effort"],
      tags: ["SaaS", "Analytics", "Dashboard", "AI"],
      image: "/figma/card-shopify-hero.png",
      fallback: "linear-gradient(135deg,#95bf47,#5e8e3e)",
    },
  ] satisfies HomeFeaturedProject[],
} as const;

export const HOME_FOOTER = {
  headline: "Let's make complex workflows feel simple.",
  body: "Open to Product Designer opportunities focused on SaaS, onboarding, and workflow optimization.",
  copyright: "Designed & crafted by Riya Patel © 2026",
} as const;
