import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Temporarily gate the site to the /move-and-mind page only.
  // Any other route lands the visitor on /move-and-mind.
  async redirects() {
    return [
      {
        source: "/",
        destination: "/move-and-mind",
        permanent: false,
      },
      {
        // Everything except /move-and-mind, Next internals, and static
        // files (anything containing a dot) redirects to /move-and-mind.
        source: "/:path((?!move-and-mind$|move-and-mind/|_next/|.*\\..*).*)",
        destination: "/move-and-mind",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
