/**
 * Card / listing imagery used on the home featured section and /work grid.
 * Keep these in sync so both surfaces show the same project previews.
 */
export const PROJECT_LISTING_VISUALS: Record<
  string,
  { thumbnail: string; accent: string }
> = {
  "akshar-packs": {
    thumbnail: "/figma/card-akshar-hero.png",
    accent: "linear-gradient(135deg,#f2d6c8,#eadfd7)",
  },
  "zapp-wallet": {
    thumbnail: "/figma/zapp-hero.png",
    accent: "linear-gradient(135deg,#d9b2f3,#c794ec)",
  },
  "georges-pizza": {
    thumbnail: "/figma/card-georges-hero.png",
    accent: "linear-gradient(135deg,#e7d2bf,#d4b7a1)",
  },
  tripon: {
    thumbnail: "/figma/card-tripon-hero.png",
    accent: "linear-gradient(135deg,#8fd4ff,#47aee8)",
  },
  easygo: {
    thumbnail: "/figma/card-easygo-hero.png",
    accent: "linear-gradient(135deg,#96e6a2,#57ce73)",
  },
};

/** Long-form blurbs (home featured + /work cards). Single source; overrides markdown tagline for listing UIs. */
export const PROJECT_LISTING_SUMMARY: Record<string, string> = {
  "akshar-packs":
    "Akshar Packs is a custom packaging solutions provider across diverse industries. The redesign simplifies the experience, sharpens product clarity, and streamlines inquiries to improve discovery and conversion.",
  "zapp-wallet":
    "Zapp Wallet offers a seamless and secure way to manage everyday payments, bringing speed and simplicity to every transaction. Designed with clarity and ease in mind, it empowers users to move, track, and control their money with confidence.",
  "georges-pizza":
    "George’s Pizza & Steakhouse is known for its rich flavors and loyal customer base, but its old website didn’t reflect the brand. I redesigned it to be clean, modern, and easy to navigate, improving menu exploration and online ordering.",
  tripon:
    "TripOn connects every stage of travel into a fluid, effortless experience from exploring destinations to planning and booking with ease. Thoughtfully designed to feel both intuitive and inspiring, it empowers users to navigate their journeys with confidence and curiosity.",
  easygo:
    "EasyGo simplifies everyday travel with a smooth, intuitive booking experience designed for speed and convenience. From quick rides to reliable journeys, it helps users get where they need to go with ease and confidence.",
};
