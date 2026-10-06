// LLM-Wiki의 wiki/ 마크다운에서 그래프용 JSON(제목·링크·짧은 요약)만 추출한다.
// raw/ (논문 PDF 원문)는 읽지 않으며, 본문 전체도 내보내지 않는다.
//
// 사용법: node scripts/build-wiki-graph.mjs [wiki 디렉터리]
//   기본값: ../LLM-Wiki/wiki  (환경변수 WIKI_DIR로도 지정 가능)
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, relative, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const wikiDir = resolve(process.argv[2] ?? process.env.WIKI_DIR ?? join(here, '..', '..', 'LLM-Wiki', 'wiki'));
const outFile = join(here, '..', 'src', 'data', 'wiki-graph.json');

const SKIP = new Set(['index', 'log']);
const SUMMARY_MAX = 200;

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw };
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (kv) meta[kv[1]] = kv[2].trim();
  }
  return { meta, body: m[2] };
}

const unquote = (s = '') => s.replace(/^["']|["']$/g, '');
const parseList = (s = '') =>
  s.replace(/^\[|\]$/g, '').split(',').map((x) => unquote(x.trim())).filter(Boolean);

function linkTargets(text) {
  const ids = [];
  for (const m of text.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/g)) ids.push(m[1].trim());
  return ids;
}

const files = await walk(wikiDir);
const nodes = new Map();
const rawLinks = [];

for (const f of files) {
  const id = relative(wikiDir, f).replace(/\\/g, '/').replace(/\.md$/, '');
  if (SKIP.has(id)) continue;
  const { meta, body } = parseFrontmatter(await readFile(f, 'utf8'));
  const title = unquote(meta.title) || id.split('/').pop();
  nodes.set(id, {
    id,
    type: unquote(meta.type) || id.split('/')[0],
    title,
    tags: parseList(meta.tags),
    status: unquote(meta.status) || 'draft',
    body,
    related: linkTargets(meta.related ?? ''),
  });
  for (const t of [...linkTargets(body), ...linkTargets(meta.related ?? ''), ...linkTargets(meta.sources ?? '')]) {
    rawLinks.push([id, t]);
  }
}

function summarize(node) {
  const paras = node.body
    .split(/\r?\n\s*\r?\n/)
    .map((p) => p.trim())
    .filter((p) => p.length >= 60 && !p.includes('raw/') &&!/^(#|[-*>|`]|\d+\.)/.test(p));
  let s = (paras[0] ?? '').replace(/\s+/g, ' ');
  s = s
    .replace(/\[\[([^\]|#]+)(?:#[^\]|]*)?\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]|#]+)(?:#[^\]|]*)?\]\]/g, (_, id) => nodes.get(id.trim())?.title ?? id.split('/').pop())
    .replace(/[*_`]/g, '');
  if (s.length > SUMMARY_MAX) {
    const cut = s.slice(0, SUMMARY_MAX);
    s = cut.slice(0, Math.max(cut.lastIndexOf(' '), 120)).trimEnd() + '…';
  }
  return s;
}

const seen = new Set();
const links = [];
const degree = new Map();
for (const [s, t] of rawLinks) {
  if (s === t || !nodes.has(t)) continue;
  const key = `${s}→${t}`;
  if (seen.has(key)) continue;
  seen.add(key);
  links.push({ s, t });
  degree.set(s, (degree.get(s) ?? 0) + 1);
  degree.set(t, (degree.get(t) ?? 0) + 1);
}

const out = {
  generated: new Date().toISOString().slice(0, 10),
  nodes: [...nodes.values()].map((n) => ({
    id: n.id,
    type: n.type,
    title: n.title,
    tags: n.tags,
    status: n.status,
    summary: summarize(n),
    deg: degree.get(n.id) ?? 0,
  })),
  links,
};

await mkdir(dirname(outFile), { recursive: true });
await writeFile(outFile, JSON.stringify(out));
const byType = {};
for (const n of out.nodes) byType[n.type] = (byType[n.type] ?? 0) + 1;
const orphans = out.nodes.filter((n) => n.deg === 0).length;
console.log(`nodes=${out.nodes.length} links=${out.links.length} orphans=${orphans}`, byType);
