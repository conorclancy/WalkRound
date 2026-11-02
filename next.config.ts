import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  // cacheComponents / partialPrefetching are left off: Cache Components hangs
  // on the Cloudflare Workers runtime (its setTimeout behaves differently).

  // Next's image optimiser doesn't run on Cloudflare Workers. Photos are
  // served via Supabase signed URLs instead.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

// Lets `next dev` use Cloudflare bindings (getCloudflareContext) like production.
initOpenNextCloudflareForDev();
