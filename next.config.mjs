/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "https://brandme-2.onrender.com/api",
    NEXTAUTH_SECRET: "zTxlgWpmNVnkpkaKFKrpGCdEGAmVof/C/agCX4MTVc4=",
  },
  images: {
    domains: [""], // Add your S3 bucket domain here
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};

export default nextConfig;
