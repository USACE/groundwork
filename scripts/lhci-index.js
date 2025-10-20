// Creates an index page of only the final LHCI "*.report.html/json" files in .lighthouseci

import fs from "fs";
import path from "path";
import os from "os";
import { exec } from "child_process";

const dir = path.resolve(".lighthouseci");
if (!fs.existsSync(dir)) {
  console.error("No .lighthouseci directory found.");
  process.exit(0);
}

// Only consider the final LHCI artifacts: *.report.html / *.report.json
const REPORT_HTML_RE = /\.report\.html$/i;
const REPORT_JSON_RE = /\.report\.json$/i;

// Map basename => { json, html }  (basename = filename without ".report.html/json")
const entries = new Map();
for (const file of fs.readdirSync(dir)) {
  const full = path.join(dir, file);
  const stat = fs.statSync(full);
  if (!stat.isFile()) continue;

  let base = null;
  if (REPORT_HTML_RE.test(file)) base = file.replace(REPORT_HTML_RE, "");
  else if (REPORT_JSON_RE.test(file)) base = file.replace(REPORT_JSON_RE, "");
  else continue; // ignore lhr-* and any non *.report.* files

  if (!entries.has(base)) entries.set(base, {});
  const rec = entries.get(base);
  if (REPORT_HTML_RE.test(file)) rec.html = full;
  if (REPORT_JSON_RE.test(file)) rec.json = full;
}

// Build rows by reading ONLY the *.report.json files that have a matching *.report.html
const rows = [];
for (const [base, rec] of entries) {
  if (!rec.json || !rec.html) continue;
  try {
    const data = JSON.parse(fs.readFileSync(rec.json, "utf-8"));
    const url = String(data.finalUrl || data.requestedUrl || "(unknown)")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const categories = data.categories || {};
    const pct = (category) =>
      category && typeof category.score === "number"
        ? Math.round(category.score * 100)
        : "-";
    rows.push({
      url,
      a11y: pct(categories.accessibility),
      perf: pct(categories.performance),
      bp: pct(categories["best-practices"]),
      seo: pct(categories.seo),
      pwa: pct(categories.pwa),
      htmlRel: path.basename(rec.html),
    });
  } catch {
    // ignore parse errors
  }
}

rows.sort((a, b) => a.url.localeCompare(b.url));

// Generate HTML table
const html = `<!doctype html>
<meta charset="utf-8">
<title>Lighthouse Summary</title>
<style>
  body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;margin:24px}
  table{border-collapse:collapse;width:100%}
  th,td{padding:8px 10px;border-bottom:1px solid #e5e7eb;text-align:left}
  th{background:#f8fafc;font-weight:600}
  tr:hover td{background:#f9fafb}
  .badge{display:inline-block;min-width:34px;padding:2px 6px;border-radius:6px;text-align:center}
  .g{background:#e6ffe6} .y{background:#fff8db} .r{background:#ffe6e6}
</style>
<h2 style="margin:0 0 12px"><div style="height:24px;width:24px;display:inline-block;"><svg class="lh-topbar__logo" role="img" title="Lighthouse logo" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="m14 7 10-7 10 7v10h5v7h-5l5 24H9l5-24H9v-7h5V7Z" fill="#F63"></path><path d="M31.561 24H14l-1.689 8.105L31.561 24ZM18.983 48H9l1.022-4.907L35.723 32.27l1.663 7.98L18.983 48Z" fill="#FFA385"></path><path fill="#FF3" d="M20.5 10h7v7h-7z"></path></svg></div> Lighthouse Summary</h2>
<p style="margin:0 0 18px">Showing only final reports (<code>*.report.html/json</code>) from <code>.lighthouseci</code>. Click “Report” to view details.</p>
<table>
<thead><tr>
  <th>URL</th><th>A11y</th><th>Perf</th><th>BP</th><th>SEO</th><th>PWA</th><th>Report</th>
</tr></thead>
<tbody>
${rows
  .map((r) => {
    const cls = (v) => (v === "-" ? "" : v >= 90 ? "g" : v >= 50 ? "y" : "r");
    return `<tr>
    <td>${r.url}</td>
    <td><span class="badge ${cls(r.a11y)}">${r.a11y}</span></td>
    <td><span class="badge ${cls(r.perf)}">${r.perf}</span></td>
    <td><span class="badge ${cls(r.bp)}">${r.bp}</span></td>
    <td><span class="badge ${cls(r.seo)}">${r.seo}</span></td>
    <td><span class="badge ${cls(r.pwa)}">${r.pwa}</span></td>
    <td><a href="./${encodeURIComponent(r.htmlRel)}">${r.htmlRel}</a></td>
  </tr>`;
  })
  .join("\n")}
</tbody>
</table>`;

const out = path.join(dir, "index.html");
fs.writeFileSync(out, html, "utf-8");
console.log(`\nWrote ${out}\n`);

// Open the index in the default browser
const open = (p) => {
  const q = `"${p}"`;
  console.log("Opening report index in default browser...");
  if (os.platform() === "win32") exec(`start "" ${q}`);
  else if (os.platform() === "darwin") exec(`open ${q}`);
  else exec(`xdg-open ${q}`);
};
open(out);
