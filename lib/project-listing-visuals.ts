/**
 * Card / listing imagery used on the home featured section and /work grid.
 * Kept in sync with lib/home-content.ts project entries.
 */
export const PROJECT_LISTING_VISUALS: Record<
  string,
  { thumbnail: string; accent: string }
> = {
  "apple-tv-plus": {
    thumbnail: "/figma/card-apple-tv-hero.png",
    accent: "linear-gradient(135deg,#1a1a2e,#2d2d4a)",
  },
  "akshar-packs": {
    thumbnail: "/figma/card-akshar-hero.png",
    accent: "linear-gradient(135deg,#f2d6c8,#eadfd7)",
  },
  "google-pay-ai": {
    thumbnail: "/figma/card-google-pay-hero.png",
    accent: "linear-gradient(135deg,#4285f4,#34a853)",
  },
  "zapp-wallet": {
    thumbnail: "/figma/zapp-hero.png",
    accent: "linear-gradient(135deg,#d9b2f3,#c794ec)",
  },
  "shopify-analytics": {
    thumbnail: "/figma/card-shopify-hero.png",
    accent: "linear-gradient(135deg,#95bf47,#5e8e3e)",
  },
};

export const PROJECT_LISTING_SUMMARY: Record<string, string> = {
  "apple-tv-plus":
    "Re-imagining Content Discovery Through Inclusive & Accessible Design.",
  "akshar-packs": "Simplifying B2B Product Discovery.",
  "google-pay-ai":
    "Helping users make smarter financial decisions through proactive, personalized insights.",
  "zapp-wallet":
    "Designing a Faster and More Trustworthy Mobile Wallet Experience.",
  "shopify-analytics":
    "Designing a Smarter Analytics Experience for Shopify Merchants.",
};
