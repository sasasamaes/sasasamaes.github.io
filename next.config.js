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

module.exports = nextConfig;
