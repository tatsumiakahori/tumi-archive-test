/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "cdn.sanity.io",
          },
        ],
      },
      experimental: {
        taint: true,
      },
    output: 'export'
};

export default nextConfig;
