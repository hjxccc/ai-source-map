import { sources } from "./sources.mjs";

const queue = [...sources];
const results = [];
const concurrency = 12;

async function check(source) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);
  try {
    let response = await fetch(source.url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
      headers: { "User-Agent": "Mozilla/5.0 AI-Source-Map-Link-Check" },
    });
    if ([403, 405, 429].includes(response.status)) {
      response = await fetch(source.url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: { "User-Agent": "Mozilla/5.0 AI-Source-Map-Link-Check" },
      });
    }
    return { ...source, status: response.status, finalUrl: response.url };
  } catch (error) {
    return { ...source, status: 0, error: error instanceof Error ? error.message : String(error) };
  } finally {
    clearTimeout(timeout);
  }
}

async function worker() {
  while (queue.length) {
    const source = queue.shift();
    if (!source) return;
    results.push(await check(source));
  }
}

await Promise.all(Array.from({ length: concurrency }, worker));
const failures = results.filter(({ status }) => status === 404 || status === 410);
const protectedOrUnknown = results.filter(({ status }) => status === 0 || status === 401 || status === 403 || status === 429);
console.log(JSON.stringify({
  total: results.length,
  definitely_broken: failures.length,
  protected_or_unknown: protectedOrUnknown.length,
  failures,
}, null, 2));
process.exitCode = failures.length ? 1 : 0;
