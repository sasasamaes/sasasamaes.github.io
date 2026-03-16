import nextConfig from "eslint-config-next";
import prettierConfig from "eslint-config-prettier";

const config = [
  ...nextConfig,
  prettierConfig,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "warn",
      "@next/next/no-page-custom-font": "off",
      "import/no-anonymous-default-export": "off",
    },
  },
  {
    ignores: [".next/", "out/", "node_modules/", "public/"],
  },
];

export default config;
