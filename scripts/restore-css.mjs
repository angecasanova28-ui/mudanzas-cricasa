/**
 * Restaura app/globals.css desde el backup creado por build-css.mjs
 * Uso: node scripts/restore-css.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const cssPath = path.join(root, 'app', 'globals.css');
const backupPath = cssPath + '.dev-backup';

if (!fs.existsSync(backupPath)) {
  console.log('No hay backup que restaurar.');
  process.exit(0);
}

fs.copyFileSync(backupPath, cssPath);
fs.unlinkSync(backupPath);
console.log('✅ app/globals.css restaurado desde backup.');
