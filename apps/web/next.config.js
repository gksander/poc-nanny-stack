// Due to Next.js constraints, need to transpile our workspace dependencies.
const withTM = require("next-transpile-modules")([
  "@myapp/api",
  "@myapp/react",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withTM(nextConfig);
