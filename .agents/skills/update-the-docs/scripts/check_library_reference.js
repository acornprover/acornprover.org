#!/usr/bin/env node

const { chromium } = require("playwright");

const url =
  process.argv[2] ||
  "http://127.0.0.1:3010/docs/category/library-reference/";

const markerPattern = /entity-[a-z]|entity-addgroup|\{#entity|<!-- #entity/;

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });

  await page.goto(url, { waitUntil: "networkidle" });

  const summary = await page.evaluate((patternSource) => {
    const markerPattern = new RegExp(patternSource);
    const text = document.body.innerText;
    const cards = Array.from(document.querySelectorAll("article a.card"))
      .slice(0, 8)
      .map((card) => ({
        title: card.querySelector("h2")?.innerText ?? "",
        description: card.querySelector("p")?.innerText ?? "",
      }));

    return {
      title: document.title,
      h1: document.querySelector("h1")?.innerText ?? "",
      hasMarkerText: markerPattern.test(text),
      cards,
    };
  }, markerPattern.source);

  await page.screenshot({
    path: "/tmp/acorn-library-reference-playwright.png",
    fullPage: false,
  });

  console.log(JSON.stringify(summary, null, 2));

  if (summary.title !== "Library Reference | The Acorn Theorem Prover") {
    throw new Error(`unexpected page title: ${summary.title}`);
  }
  if (summary.h1 !== "Library Reference") {
    throw new Error(`unexpected h1: ${summary.h1}`);
  }
  if (summary.hasMarkerText) {
    throw new Error("library reference page contains generated anchor marker text");
  }

  await browser.close();
}

main().catch((error) => {
  console.error(error && error.stack ? error.stack : error);
  process.exit(1);
});
