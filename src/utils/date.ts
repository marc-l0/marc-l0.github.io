export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

/** Preserve calendar dates in legacy posts; show exact timestamps in Lima. */
export function publicationDate(post: {
  pubDate: Date;
  publishedAt?: string;
}): Date {
  return post.publishedAt ? new Date(post.publishedAt) : post.pubDate;
}

export function formatPublication(post: {
  pubDate: Date;
  publishedAt?: string;
}): string {
  if (!post.publishedAt) return formatDate(post.pubDate);
  return (
    new Intl.DateTimeFormat("es-PE", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "America/Lima",
    }).format(new Date(post.publishedAt)) + " (Lima)"
  );
}
