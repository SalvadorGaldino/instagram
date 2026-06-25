const fs = require('fs');
const path = require('path');
const cwd = process.cwd();
const files = fs.readdirSync(cwd).filter((f) => f.endsWith('.html'));
const replacements = [
  { from: '>Seguiring<', to: '>Seguindo<' },
  { from: '>Seguirers<', to: '>Seguidores<' }
];
for (const file of files) {
  const filePath = path.join(cwd, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = content;
  replacements.forEach((r) => {
    updated = updated.split(r.from).join(r.to);
  });
  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`updated ${file}`);
  }
}
