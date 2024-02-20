/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.noanzo.pl",
      },
    ],
  },
};

export default nextConfig;
