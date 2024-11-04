// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true, // true for 301 redirect, false for 302
      },
    ];
  },
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 0
    }
  },
  env: {
    API_URL: process.env.API_URL,
    ROOT_DIR: process.env.ROOT_DIR,
    KINDE_SITE_URL: process.env.KINDE_SITE_URL
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
