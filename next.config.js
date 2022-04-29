/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    API_URL: process.env.API_URL,
  },
  srcDir: "src/",
};

module.exports = nextConfig;
