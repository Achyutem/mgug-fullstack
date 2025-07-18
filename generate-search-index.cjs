console.log("--- RUNNING FRESH START SCRIPT (JSON Generator) ---");

const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

const BASE_URL = "http://localhost:5000";

/**
 * Uses a headless browser to load a page fully and extract its text content.
 * @param {import('puppeteer').Browser} browser - The Puppeteer browser instance.
 * @param {string} pagePath - The path of the page to scrape (e.g., '/about').
 * @returns {Promise<string>} A promise that resolves to the extracted text.
 */
async function scrapePageText(browser, pagePath) {
  let page = null;
  try {
    page = await browser.newPage();
    const url = `${BASE_URL}${pagePath}`;
    console.log(`- Visiting: ${url}`);

    await page.goto(url, { waitUntil: "networkidle0", timeout: 15000 });

    const text = await page.evaluate(() => {
      const body = document.querySelector("body");
      if (!body) return "";

      // Remove common non-content elements to get cleaner search results
      body.querySelector("nav")?.remove();
      body.querySelector("header")?.remove();
      body.querySelector("footer")?.remove();

      return body.innerText; // innerText is better for user-visible text
    });

    return text.replace(/\s\s+/g, " ").trim();
  } catch (error) {
    console.error(
      `\n[ERROR] Failed to scrape "${pagePath}". Is the dev server running?`
    );
    if (error.name === "TimeoutError") {
      console.error("  - The page took too long to load and timed out.");
    }
    return ""; // Return empty string on failure
  } finally {
    await page?.close();
  }
}

/**
 * Main function to generate the search index.
 */
async function main() {
  // IMPORTANT: Your routeMeta file must be a .ts or .tsx file now
  // We will require it directly to get the routes.
  const routeMetaPath = path.join(__dirname, "src", "utils", "routeMeta.tsx");
  if (!fs.existsSync(routeMetaPath)) {
    console.error(
      `[FATAL] Could not find route meta file at: ${routeMetaPath}`
    );
    return;
  }

  // A simple regex to extract the necessary info without executing the TSX file.
  const routeMetaContent = fs.readFileSync(routeMetaPath, "utf8");
  const objectRegex =
    /\{\s*title:\s*["']([^"']+)["'],\s*path:\s*["']([^"']+)["'][\s\S]*?\}/g;

  const routes = [];
  let match;
  while ((match = objectRegex.exec(routeMetaContent)) !== null) {
    routes.push({ title: match[1], path: match[2] });
  }

  if (routes.length === 0) {
    console.error("[FATAL] Could not find any routes in your routeMeta file.");
    return;
  }

  console.log(`Found ${routes.length} routes to index. Launching browser...`);
  const browser = await puppeteer.launch({ headless: "new" });

  const searchIndex = [];

  for (const route of routes) {
    const content = await scrapePageText(browser, route.path);
    if (content) {
      // Only add pages that have content
      searchIndex.push({
        title: route.title,
        path: route.path,
        content: content,
      });
    } else {
      console.log(`  - SKIPPING ${route.path} (no content found)`);
    }
  }

  await browser.close();
  console.log("Browser closed.");

  // Ensure the 'public' directory exists
  if (!fs.existsSync(path.join(__dirname, "public"))) {
    fs.mkdirSync(path.join(__dirname, "public"));
  }

  const outputPath = path.join(__dirname, "public", "search-data.json");
  fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2));

  console.log(`\n✅ Search index generated successfully!`);
  console.log(`File created at: ${outputPath}`);
}

main();
