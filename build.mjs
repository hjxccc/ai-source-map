import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { sources } from "./sources.mjs";

const root = path.resolve(import.meta.dirname, "..");
const outputDir = path.join(root, "link-hub", "dist");

const groups = [
  { key: "discover", title: "第一类：聚合入口", subtitle: "集中发现最新动态" },
  { key: "official", title: "第二类：官方博客", subtitle: "确认产品发布口径" },
  { key: "papers", title: "第三类：论文原站", subtitle: "追踪研究进展" },
  { key: "benchmarks", title: "第四类：第三方评测", subtitle: "提供横向数据" },
  { key: "voices", title: "第五类：独立作者与社区", subtitle: "补充解释和观点" },
];

const links = [];
const seen = new Set();
for (const source of sources) {
  const normalized = source.url.replace(/\/+$/, "").toLowerCase();
  if (seen.has(normalized)) continue;
  seen.add(normalized);
  links.push({
    label: source.name,
    url: source.url,
    group: source.category,
    type: source.type,
    description: source.description,
  });
}

const grouped = groups.map((group) => ({
  ...group,
  links: links.filter((link) => link.group === group.key),
}));

const data = JSON.stringify(grouped).replaceAll("<", "\\u003c");
const updatedAt = "2026-07-30";
const categoryMarkdown = grouped.map((group) => {
  const rows = group.links
    .map((link) => `| [${link.label}](${link.url}) | ${link.type} | ${link.description} | \`${link.url}\` |`)
    .join("\n");
  return `## ${group.title}｜${group.subtitle}\n\n| 信源 | 类型 | 适合看什么 | 原始网址 |\n|---|---|---|---|\n${rows}`;
}).join("\n\n");
const catalogMarkdown = `# AI 一手信源完整目录\n\n当前收录 **${links.length} 个实际去重入口**，核对日期：${updatedAt}。所有链接均指向对应官网、仓库、论文平台或作者账号，不使用本站二次跳转。\n\n${categoryMarkdown}\n`;
const readmeIntro = await readFile(path.join(root, "link-hub", "README-intro.md"), "utf8");
const readmeMarkdown = readmeIntro.replace(
  "<!-- FULL_CATALOG -->",
  `## 全部 ${links.length} 个信源\n\n> 所有名称均可直接点击；最后一列同时保留完整原始网址。\n\n${categoryMarkdown}`,
);
const xLinks = links.filter((link) => link.type.includes("X"));
const xMarkdown = `# X 上值得关注的 AI 账号\n\n当前收录 **${xLinks.length} 个账号**，核对日期：${updatedAt}。\n\n| 账号 | 类型 | 主要内容 | 原始网址 |\n|---|---|---|---|\n${xLinks.map((link) => `| [${link.label}](${link.url}) | ${link.type} | ${link.description} | \`${link.url}\` |`).join("\n")}\n`;

const html = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="翻斗花园二蛋整理的 AI 一手信源目录，按聚合入口、官方博客、论文原站、第三方评测、独立作者与社区五类收录。">
  <title>AI 一手信源目录｜翻斗花园二蛋</title>
  <style>
    :root {
      --paper: #f4eddf;
      --paper-deep: #e8dcc8;
      --ink: #133866;
      --muted: #665f55;
      --coral: #ef7659;
      --mint: #63b7a4;
      --line: rgba(19, 56, 102, .18);
      --card: rgba(255, 252, 245, .82);
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      color: var(--ink);
      font-family: "Noto Serif SC", "Songti SC", "STSong", serif;
      background:
        radial-gradient(circle at 12% 8%, rgba(239,118,89,.14), transparent 27rem),
        radial-gradient(circle at 90% 18%, rgba(99,183,164,.15), transparent 25rem),
        linear-gradient(135deg, rgba(19,56,102,.025) 25%, transparent 25%) 0 0 / 24px 24px,
        var(--paper);
    }
    a { color: inherit; }
    .shell { width: min(1120px, calc(100% - 32px)); margin: 0 auto; }
    header { padding: 72px 0 34px; }
    .eyebrow {
      display: inline-flex; align-items: center; gap: 10px;
      font-family: "Microsoft YaHei", sans-serif; font-weight: 700; letter-spacing: .08em;
      color: var(--coral);
    }
    .eyebrow::before { content: ""; width: 34px; height: 4px; background: var(--coral); transform: rotate(-3deg); }
    h1 { max-width: 820px; margin: 18px 0 16px; font-size: clamp(42px, 7vw, 82px); line-height: .98; letter-spacing: -.045em; }
    .lead { max-width: 760px; margin: 0; color: var(--muted); font-size: 18px; line-height: 1.8; }
    .meta { margin-top: 24px; font: 14px/1.6 "Microsoft YaHei", sans-serif; color: var(--muted); }
    .toolbar {
      position: sticky; top: 0; z-index: 10; padding: 14px 0;
      background: linear-gradient(to bottom, rgba(244,237,223,.96), rgba(244,237,223,.86));
      backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--line);
    }
    .toolbar-inner { display: grid; grid-template-columns: minmax(220px, 1fr) auto; gap: 14px; align-items: center; }
    .search {
      width: 100%; border: 2px solid var(--ink); border-radius: 14px; padding: 13px 16px;
      color: var(--ink); background: rgba(255,255,255,.58); font: 16px "Microsoft YaHei", sans-serif;
      outline: none; box-shadow: 4px 4px 0 rgba(19,56,102,.12);
    }
    .search:focus { box-shadow: 4px 4px 0 rgba(239,118,89,.35); border-color: var(--coral); }
    .count { white-space: nowrap; font: 700 14px "Microsoft YaHei", sans-serif; color: var(--muted); }
    main { padding: 30px 0 90px; }
    .group { margin-top: 32px; scroll-margin-top: 90px; }
    .group-head {
      display: grid; grid-template-columns: auto 1fr auto; gap: 14px; align-items: center;
      margin-bottom: 16px;
    }
    .number {
      display: grid; place-items: center; width: 44px; height: 44px; border-radius: 50%;
      color: white; background: var(--coral); font: 800 20px "Microsoft YaHei", sans-serif;
      transform: rotate(-3deg); box-shadow: 3px 3px 0 rgba(19,56,102,.18);
    }
    h2 { margin: 0; font-size: clamp(22px, 3vw, 31px); line-height: 1.2; }
    h2 small { display: block; margin-top: 5px; color: var(--muted); font: 15px "Microsoft YaHei", sans-serif; }
    .group-count { font: 700 13px "Microsoft YaHei", sans-serif; color: var(--mint); }
    .grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 12px; }
    .card {
      display: grid; gap: 9px; min-height: 112px; padding: 17px;
      text-decoration: none; background: var(--card); border: 1px solid var(--line); border-radius: 16px;
      box-shadow: 0 8px 22px rgba(40,35,28,.06); transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
    }
    .card:hover, .card:focus-visible {
      transform: translateY(-4px) rotate(-.25deg); border-color: var(--coral);
      box-shadow: 0 14px 28px rgba(40,35,28,.12); outline: none;
    }
    .kind {
      width: max-content; padding: 3px 8px; border-radius: 999px;
      color: var(--coral); background: rgba(239,118,89,.09);
      font: 700 11px/1.5 "Microsoft YaHei", sans-serif;
    }
    .name { font-size: 18px; font-weight: 800; line-height: 1.35; }
    .description { color: var(--muted); font: 14px/1.65 "Microsoft YaHei", sans-serif; }
    .domain { align-self: end; color: var(--muted); font: 13px/1.45 "Microsoft YaHei", sans-serif; overflow-wrap: anywhere; }
    .domain::after { content: " ↗"; color: var(--coral); font-weight: 900; }
    .empty { display: none; padding: 72px 0; text-align: center; color: var(--muted); font: 16px "Microsoft YaHei", sans-serif; }
    footer { padding: 28px 0 44px; border-top: 1px solid var(--line); color: var(--muted); font: 14px/1.8 "Microsoft YaHei", sans-serif; }
    @media (max-width: 760px) {
      header { padding-top: 46px; }
      .toolbar-inner { grid-template-columns: 1fr; }
      .count { padding-left: 2px; }
      .grid { grid-template-columns: 1fr; }
      .group-head { grid-template-columns: auto 1fr; }
      .group-count { grid-column: 2; }
      .card { min-height: 96px; }
    }
    @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } .card { transition: none; } }
  </style>
</head>
<body>
  <header class="shell">
    <div class="eyebrow">翻斗花园二蛋 · AI SOURCE MAP</div>
    <h1>AI 一手信源<br>可点击目录</h1>
    <p class="lead">这是公众号文章《可能是全网最全的 AI 一手信源指南》的配套目录。网站、社区、官方博客、论文入口和作者账号，都按正文五类整理在这里。</p>
    <div class="meta">核对时间：${updatedAt} · 链接状态可能随网站调整而变化</div>
  </header>

  <div class="toolbar">
    <div class="shell toolbar-inner">
      <input id="search" class="search" type="search" placeholder="搜索 OpenAI、Claude、论文、评测、Newsletter 或作者…" aria-label="搜索信源">
      <div id="count" class="count"></div>
    </div>
  </div>

  <main class="shell">
    <div id="groups"></div>
    <div id="empty" class="empty">没有找到匹配的信源，换个关键词试试。</div>
  </main>

  <footer>
    <div class="shell">本页只提供公开入口，点击后将前往对应网站。欢迎在公众号评论区补充值得长期关注的 AI 信源。</div>
  </footer>

  <script>
    const groups = ${data};
    const groupsEl = document.querySelector("#groups");
    const searchEl = document.querySelector("#search");
    const countEl = document.querySelector("#count");
    const emptyEl = document.querySelector("#empty");

    function domainOf(url) {
      try { return new URL(url).hostname.replace(/^www\\./, ""); }
      catch { return url; }
    }

    function render(query = "") {
      const needle = query.trim().toLowerCase();
      let visible = 0;
      groupsEl.innerHTML = groups.map((group, index) => {
        const matches = group.links.filter(link =>
          !needle || (link.label + " " + link.url + " " + link.type + " " + link.description).toLowerCase().includes(needle)
        );
        if (!matches.length) return "";
        visible += matches.length;
        return \`<section class="group">
          <div class="group-head">
            <div class="number">\${index + 1}</div>
            <h2>\${group.title}<small>\${group.subtitle}</small></h2>
            <div class="group-count">\${matches.length} 个入口</div>
          </div>
          <div class="grid">
            \${matches.map(link => \`<a class="card" href="\${link.url}" target="_blank" rel="noopener noreferrer">
              <span class="kind">\${link.type}</span>
              <span class="name">\${link.label}</span>
              <span class="description">\${link.description}</span>
              <span class="domain">\${domainOf(link.url)}</span>
            </a>\`).join("")}
          </div>
        </section>\`;
      }).join("");
      countEl.textContent = \`当前展示 \${visible} / \${groups.reduce((n, g) => n + g.links.length, 0)} 个入口\`;
      emptyEl.style.display = visible ? "none" : "block";
    }

    searchEl.addEventListener("input", event => render(event.target.value));
    render();
  </script>
</body>
</html>`;

await mkdir(outputDir, { recursive: true });
await writeFile(path.join(outputDir, "index.html"), html, "utf8");
await writeFile(path.join(outputDir, "sources.json"), JSON.stringify(links, null, 2), "utf8");
await writeFile(path.join(outputDir, "catalog.md"), catalogMarkdown, "utf8");
await writeFile(path.join(outputDir, "x-accounts.md"), xMarkdown, "utf8");
await writeFile(path.join(outputDir, "README.md"), readmeMarkdown, "utf8");
console.log(JSON.stringify({
  output: path.join(outputDir, "index.html"),
  groups: grouped.map(({ title, links }) => ({ title, count: links.length })),
  total: links.length,
}, null, 2));
