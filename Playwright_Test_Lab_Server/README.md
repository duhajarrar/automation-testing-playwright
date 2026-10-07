# Playwright Test Lab Server

This package serves `lab.html` on a real local HTTP server so Playwright can test it normally.

## Option 1 — Start it manually

Requirements: Node.js installed.

```bash
npm start
```

Then open:

- http://127.0.0.1:3000/
- http://127.0.0.1:3000/lab.html

Health check:

- http://127.0.0.1:3000/health

Your Playwright config can use:

```ts
use: {
  baseURL: 'http://127.0.0.1:3000'
}
```

Then tests can simply do:

```ts
await page.goto('/');
```

## Option 2 — Let Playwright start the server automatically

Copy `playwright.config.example.ts` into your Playwright project as `playwright.config.ts` (or merge the `webServer` section into your existing config).

The important part is:

```ts
webServer: {
  command: 'npm start',
  url: 'http://127.0.0.1:3000/health',
  reuseExistingServer: !process.env.CI,
}
```

Then just run:

```bash
npx playwright test
```

Playwright will start the lab server before the tests and stop it when appropriate.

## Important challenge behavior

`/api/profile` intentionally returns 404. This is part of your exam. Your Playwright test should mock it using `page.route()`.

Example target URL:

```ts
await page.route('**/api/profile', async route => {
  // Your mock implementation here.
});
```
