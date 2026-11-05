/**
 * Pre-compila Tailwind CSS v4 y reemplaza globals.css con la versión compilada
 * para que next build --webpack funcione sin @tailwindcss/postcss
 * 
 * Proceso:
 * 1. Compila globals.css usando @tailwindcss/node + @tailwindcss/oxide
 * 2. Guarda el resultado en app/globals.css.compiled
 * 3. Reemplaza app/globals.css con el CSS compilado (preserva el original en .bak)
 */

import { compile, optimize, Polyfills } from '@tailwindcss/node';
import { Scanner } from '@tailwindcss/oxide';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const inputCssPath = path.join(root, 'app', 'globals.css');
const inputCssDir = path.dirname(inputCssPath);
const inputCss = fs.readFileSync(inputCssPath, 'utf-8');

// Si ya fue compilado (no tiene @import "tailwindcss"), salir
if (!inputCss.includes('@import "tailwindcss"') && !inputCss.includes("@import 'tailwindcss'")) {
  console.log('⚠️  globals.css ya fue compilado o no tiene @import tailwindcss. Nada que hacer.');
  process.exit(0);
}

console.log('🔨 Compilando Tailwind CSS v4 para producción...');

// Compilar
const fullRebuildPaths = [];
const compiler = await compile(inputCss, {
  from: inputCssPath,
  base: inputCssDir,
  shouldRewriteUrls: true,
  onDependency: (dep) => fullRebuildPaths.push(dep),
  polyfills: Polyfills.All,
});

// Escanear candidatos
const scanner = new Scanner({
  sources: [
    { base: root, pattern: 'app/**/*.{tsx,ts,jsx,js}', negated: false },
    { base: root, pattern: 'components/**/*.{tsx,ts,jsx,js}', negated: false },
    { base: root, pattern: 'pages/**/*.{tsx,ts,jsx,js}', negated: false },
    { base: root, pattern: 'src/**/*.{tsx,ts,jsx,js}', negated: false },
  ],
});

const candidates = new Set(scanner.scan());
console.log(`  Candidatos: ${candidates.size}`);

// Generar CSS
let css = compiler.build([...candidates]);

// Optimizar sin minificar (para que sea legible y no rompa nada)
const optimized = optimize(css, { minify: false });
css = optimized.code;

// Hacer backup del original
const backupPath = inputCssPath + '.dev-backup';
fs.copyFileSync(inputCssPath, backupPath);
console.log(`  Backup guardado: app/globals.css.dev-backup`);

// Reemplazar globals.css con el compilado
// Mantener el @import de Google Fonts al principio
const googleFontsImport = inputCss.match(/@import url\([^)]+\)[^;]*;/g) || [];
const header = googleFontsImport.join('\n') + (googleFontsImport.length ? '\n\n' : '');

fs.writeFileSync(inputCssPath, header + css, 'utf-8');
console.log(`✅ app/globals.css reemplazado con CSS compilado (${(header + css).length} bytes)`);

// Verificaciones
console.log(`  Media queries: ${css.includes('@media') ? '✅' : '❌'}`);
console.log(`  grid-template-columns: ${css.includes('grid-template-columns') ? '✅' : '❌'}`);
