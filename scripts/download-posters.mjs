import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';

const films = [
  ['Avengers: Endgame', 'Avengers:_Endgame'],
  ['Spider-Man 3', 'Spider-Man_3'],
  ['The Dark Knight', 'The_Dark_Knight'],
  ['Inception', 'Inception'],
  ['The Matrix', 'The_Matrix'],
  ['About Time', 'About_Time_(2013_film)'],
  ['La La Land', 'La_La_Land'],
  ['Pride & Prejudice', 'Pride_%26_Prejudice_(2005_film)'],
  ['10 Things I Hate About You', '10_Things_I_Hate_About_You'],
  ['Crazy Rich Asians', 'Crazy_Rich_Asians_(film)'],
  ['Your Name', 'Your_Name'],
  ['Spirited Away', 'Spirited_Away'],
  ['WALL-E', 'WALL-E'],
  ['Interstellar', 'Interstellar_(film)'],
  ['Knives Out', 'Knives_Out'],
  ['The Grand Budapest Hotel', 'The_Grand_Budapest_Hotel'],
  ['Everything Everywhere All at Once', 'Everything_Everywhere_All_at_Once'],
];
mkdirSync('public/posters', { recursive: true });
const posters = {};
const sources = [];
for (const [title, page] of films) {
  const source = `https://en.wikipedia.org/wiki/${page}`;
  const html = execFileSync('curl.exe', ['-L', '--fail', '--silent', '--show-error', '--max-time', '30', source], { maxBuffer: 8 * 1024 * 1024 }).toString();
  const image = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1]?.split('?')[0];
  if (!image?.startsWith('https://upload.wikimedia.org/')) throw new Error(`No poster for ${title}`);
  const extension = new URL(image).pathname.split('.').pop().toLowerCase();
  const filename = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}.${extension}`;
  const bytes = execFileSync('curl.exe', ['-L', '--fail', '--silent', '--show-error', '--retry', '2', '--max-time', '30', image], { maxBuffer: 12 * 1024 * 1024 });
  if (bytes.length < 1000) throw new Error(`Invalid poster for ${title}`);
  writeFileSync(`public/posters/${filename}`, bytes);
  posters[title] = filename;
  sources.push(`| ${title} | [Source](${source}) | [Image](${image}) |`);
  console.log(`${title}: ${bytes.length} bytes`);
}
writeFileSync('src/posters.ts', `// Bundled promotional posters; see public/posters/SOURCES.md.\nexport const posters: Record<string, string> = ${JSON.stringify(posters, null, 2)};\n\nexport const posterUrl = (title: string) => new URL(\`./posters/\${posters[title]}\`, document.baseURI).href;\n`);
writeFileSync('public/posters/SOURCES.md', `# Movie poster sources\n\nPromotional film posters retrieved from Wikipedia. Copyright belongs to the respective rights holders; these are not original project artwork. Review each source page for image usage information.\n\n| Movie | Source page | Image |\n| --- | --- | --- |\n${sources.join('\n')}\n`);
