// Rewrites the "In production" board in README.md: every live site is fetched and timed from
// GitHub Actions (.github/workflows/status.yml). Any HTTP answer counts as up; a 403 from bot
// protection is still the site answering. Run locally with: node scripts/status.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const SITES = [
  ['desitotes.com', 'https://desitotes.com', 'Client, commerce. Razorpay, INR and USD'],
  ['amgprojectsllp.com', 'https://amgprojectsllp.com', 'Client, construction. The site and the APIs behind it'],
  ['NeuraCraft', 'https://ai-compiler-eta.vercel.app', 'Browser editor that suggests ML code as you type'],
  ['AI Terminal', 'https://ai-chat-bot-gcar.vercel.app', 'A terminal front end for a language model'],
  ['Portfolio Quest', 'https://gamifyport.vercel.app', 'My portfolio as a pixel-art game'],
];

async function check(url) {
  const started = Date.now();
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      signal: AbortSignal.timeout(10000),
      headers: { 'user-agent': 'sahil454521-readme-status (+https://github.com/sahil454521)' },
    });
    const ms = Date.now() - started;
    await res.body?.cancel();
    return { up: res.status > 0, ms };
  } catch {
    return { up: false, ms: null };
  }
}

const rows = await Promise.all(SITES.map(async ([name, url, what]) => ({ name, url, what, ...(await check(url)) })));
const stamp = `${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC`;
const upCount = rows.filter((r) => r.up).length;

const board = [
  '| | Live site | What it is | Last answer |',
  '|:-:|---|---|--:|',
  ...rows.map((r) => `| <img src="assets/${r.up ? 'up' : 'down'}.svg" width="14" alt="${r.up ? 'up' : 'down'}"> | [${r.name}](${r.url}) | ${r.what} | ${r.up ? `${r.ms} ms` : 'no answer'} |`),
  '',
  `<sub>${upCount} of ${rows.length} answering. Fetched and timed from GitHub Actions every 6 hours; last run ${stamp}.</sub>`,
].join('\n');

const readme = readFileSync('README.md', 'utf8');
const marker = /<!-- status:start -->[\s\S]*?<!-- status:end -->/;
if (!marker.test(readme)) throw new Error('README.md has no status markers');
writeFileSync('README.md', readme.replace(marker, `<!-- status:start -->\n${board}\n<!-- status:end -->`));
console.log(`${upCount}/${rows.length} up`);
