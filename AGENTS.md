## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Notas del camino

For every significant portfolio change, add a concise Spanish entry in
`src/content/blog/` explaining what changed and why. Use the actual date and time
in `America/Lima` (UTC-05:00), never an invented or backdated time. Include
`publishedAt` as an ISO 8601 timestamp with offset, `pubDate` as the local date,
and the next unique `number`. Update the notes before completing the task.
Only describe completed changes; identify any pending work explicitly.
Preserve existing posts. The home page links to the blog; keep notes in the dedicated blog pages.
