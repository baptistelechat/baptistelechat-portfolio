import { I18nProviderClient } from "@/i18n/client";
import { getStaticParams } from "@/i18n/server";
import { ReactNode } from "react";

export function generateStaticParams() {
  return getStaticParams();
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
