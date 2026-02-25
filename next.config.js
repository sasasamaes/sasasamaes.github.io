const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin("./src/i18n/request.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "i.postimg.cc" },
      { hostname: "media.licdn.com" },
      { hostname: "images.ctfassets.net" },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
