import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // One hostname only: www answers with a permanent redirect to the apex domain.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.claude-devs.com" }],
        destination: "https://claude-devs.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
