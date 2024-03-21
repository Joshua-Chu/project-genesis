import { siteConfig } from "@/site-config";

const dateFormat = new Intl.DateTimeFormat(
  siteConfig.date.locale,
  siteConfig.date.options as Intl.DateTimeFormatOptions,
);

export function getFormattedDate(date: string | number | Date) {
  return dateFormat.format(new Date(date));
}
