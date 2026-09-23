/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/capabilities",
        permanent: true,
      },
      {
        source: "/services/:slug*",
        destination: "/capabilities/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
