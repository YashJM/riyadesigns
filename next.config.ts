import type { NextConfig } from "next";

/** Static export for Netlify / Cloudflare Pages — no Workers or OpenNext. */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
