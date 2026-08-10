import { existsSync, mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const slidesFile = resolve(projectRoot, 'slides', 'Markdown入门教程-幻灯.md');
const distDir = resolve(projectRoot, 'dist');

mkdirSync(distDir, { recursive: true });

const marpEntry = resolve(projectRoot, 'node_modules', '@marp-team', 'marp-cli', 'marp-cli.js');

if (!existsSync(marpEntry)) {
  console.error('[build] 未找到 Marp CLI，请先运行 "pnpm install"。');
  process.exit(1);
}

const outputs = [
  { format: 'html', args: ['--html'] },
  { format: 'pdf', args: ['--pdf'] },
  { format: 'pptx', args: ['--pptx'] }
];

const commonArgs = [slidesFile, '--allow-local-files'];

for (const { format, args } of outputs) {
  const outputFile = resolve(distDir, `Markdown入门教程-幻灯.${format}`);
  console.log(`\n[build] Generating ${format.toUpperCase()} -> ${outputFile}`);

  const result = spawnSync(
    process.execPath,
    [marpEntry, ...commonArgs, ...args, '--output', outputFile],
    {
      stdio: 'inherit',
      cwd: projectRoot
    }
  );

  if (result.status !== 0) {
    if (result.error) {
      console.error(`\n[build] ${result.error.message}`);
    }
    console.error(`\n[build] Failed to generate ${format.toUpperCase()}.`);
    process.exit(result.status ?? 1);
  }
}

console.log('\n[build] All slide artifacts generated successfully in dist/.');
