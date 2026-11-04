import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";
import React from "react";
import { renderToString } from "react-dom/server";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  console.log("⚡ Building SSR bundle for prerendering...");
  execSync("npx vite build --ssr src/App.tsx --outDir dist-ssr", {
    stdio: "inherit",
    cwd: __dirname,
  });

  console.log("⚡ Rendering App to static HTML string...");
  const ssrPath = path.resolve(__dirname, "dist-ssr/App.js");
  const AppMod = await import(`file://${ssrPath.replace(/\\/g, "/")}?t=${Date.now()}`);
  const App = AppMod.default;

  const appHtml = renderToString(React.createElement(App));

  const indexPath = path.resolve(__dirname, "dist/index.html");
  if (!fs.existsSync(indexPath)) {
    throw new Error("dist/index.html not found! Run vite build first.");
  }

  let indexHtml = fs.readFileSync(indexPath, "utf-8");

  // Inject prerendered markup into #root
  indexHtml = indexHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  fs.writeFileSync(indexPath, indexHtml, "utf-8");
  console.log(`✅ Injected ${appHtml.length} bytes of prerendered HTML into dist/index.html`);

  // Clean up dist-ssr
  fs.rmSync(path.resolve(__dirname, "dist-ssr"), {
    recursive: true,
    force: true,
  });
}

prerender().catch((err) => {
  console.error("Prerender error:", err);
  process.exit(1);
});

