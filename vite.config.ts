import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const siteUrl = 'https://farukdincoglu.dev';
const seoPages = [
  {
    path: '/',
    title: 'Ömer Faruk Dinçoğlu | Software Developer',
    description: 'Ömer Faruk Dinçoğlu is a Computer Engineer and Software Developer building C#, ASP.NET MVC, MSSQL, ERP integration, and computer vision projects.',
  },
  {
    path: '/about',
    title: 'About | Ömer Faruk Dinçoğlu',
    description: 'Learn about Ömer Faruk Dinçoğlu’s Computer Engineering education, backend development approach, and technical skills across C#, MSSQL, ERP, and computer vision.',
  },
  {
    path: '/experience',
    title: 'Software Development Experience | Ömer Faruk Dinçoğlu',
    description: 'Explore Ömer Faruk Dinçoğlu’s software development experience at PKF Teknoloji, RockTechSoft, Meray Kuruyemiş, and Sistem Yazılım.',
  },
  {
    path: '/projects',
    title: 'Software Projects | Ömer Faruk Dinçoğlu',
    description: 'Selected software projects by Ömer Faruk Dinçoğlu across computer vision, C++, OpenGL, React, Python, Streamlit, and web development.',
  },
  {
    path: '/cv',
    title: 'Interactive CV | Ömer Faruk Dinçoğlu',
    description: 'Interactive CV for Ömer Faruk Dinçoğlu covering education, software experience, production systems, projects, and technical skills.',
  },
];

function renderMetadata(html: string, page: (typeof seoPages)[number]) {
  const canonicalUrl = `${siteUrl}${page.path}`;
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(" \/>)/, `$1${page.description}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(" \/>)/, `$1${canonicalUrl}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(" \/>)/, `$1${page.title}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(" \/>)/, `$1${page.description}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(" \/>)/, `$1${canonicalUrl}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(" \/>)/, `$1${page.title}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(" \/>)/, `$1${page.description}$2`);
}

const staticRouterFallback = {
  name: 'static-router-fallback',
  closeBundle() {
    const indexPath = 'dist/index.html';
    const sourceHtml = readFileSync(indexPath, 'utf8');

    for (const page of seoPages) {
      const outputHtml = renderMetadata(sourceHtml, page);
      if (page.path === '/') {
        writeFileSync(indexPath, outputHtml);
        continue;
      }

      const outputDirectory = `dist${page.path}`;
      mkdirSync(outputDirectory, { recursive: true });
      writeFileSync(`${outputDirectory}/index.html`, outputHtml);
    }

    copyFileSync('dist/index.html', 'dist/404.html');
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), staticRouterFallback],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
