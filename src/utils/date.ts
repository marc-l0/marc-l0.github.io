type Publication = { pubDate: Date; publishedAt?: string };

function dateFormatter(timeZone: string) {
  return new Intl.DateTimeFormat("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone,
  });
}

export function formatDate(date: Date): string {
  return dateFormatter("UTC").format(date);
}

/** Preserve timestamps for sorting without displaying hours or a location. */
export function publicationDate(post: Publication): Date {
  return post.publishedAt ? new Date(post.publishedAt) : post.pubDate;
}

export function formatPublication(post: Publication): string {
  return dateFormatter(post.publishedAt ? "America/Lima" : "UTC").format(
    publicationDate(post),
  );
}

/** The time element uses the same calendar day as its visible label. */
export function publicationDay(post: Publication): string {
  const parts = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: post.publishedAt ? "America/Lima" : "UTC",
  }).formatToParts(publicationDate(post));
  const value = (type: string) =>
    parts.find((part) => part.type === type)!.value;
  return `${value("year")}-${value("month")}-${value("day")}`;
}
