import { getTranslations, setRequestLocale } from "next-intl/server";
import TermsClient from "./TermsClient";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return {
    title: `${t("terms.pageTitle")} | ${t("meta.title")}`,
    description: t("terms.metaDescription"),
    alternates: {
      languages: { en: "/en/terms", es: "/es/terms" },
    },
  };
}

export default async function TermsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TermsClient />;
}
