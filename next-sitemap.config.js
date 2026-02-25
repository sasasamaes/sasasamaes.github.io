/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://sasasamaes.github.io",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  alternateRefs: [
    { href: "https://sasasamaes.github.io/en", hreflang: "en" },
    { href: "https://sasasamaes.github.io/es", hreflang: "es" },
  ],
};
