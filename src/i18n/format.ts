// Node's default (small-icu) build only ships full number-formatting data
// for "en", so `toLocaleString("es")` silently drops the thousands
// separator. Formatting it by hand sidesteps that instead of depending on
// the runtime's ICU data.
export function formatNumber(value: number, locale: string): string {
  const separator = locale === "es" ? "." : ",";
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
