/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "https://brandme-2.onrender.com/api",
    NEXTAUTH_SECRET: "zTxlgWpmNVnkpkaKFKrpGCdEGAmVof/C/agCX4MTVc4=",
  },
  images: {
    domains: ['brandme2.s3.amazonaws.com'],
    unoptimized: true,
  },
  // output: "export",
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};

export default nextConfig;
