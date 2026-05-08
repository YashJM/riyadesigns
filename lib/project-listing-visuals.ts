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
