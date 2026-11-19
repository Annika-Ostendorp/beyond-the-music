import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/index.html"}], /* Rewrite für Startseite --> / liefert intern /index.html aus --> URL bleibt im Browser unverändert */
    };
  },
};

export default nextConfig;
