import { getTranslations, setRequestLocale } from "next-intl/server";
import PrivacyClient from "./PrivacyClient";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return {
    title: `${t("privacy.pageTitle")} | ${t("meta.title")}`,
    description: t("privacy.metaDescription"),
    alternates: {
      languages: { en: "/en/privacy", es: "/es/privacy" },
    },
  };
}

export default async function PrivacyPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PrivacyClient />;
}
