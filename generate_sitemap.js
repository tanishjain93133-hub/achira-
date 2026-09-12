const fs = require('fs');
const path = require('path');

let code = fs.readFileSync(path.join(__dirname, 'products_data.js'), 'utf8');
code = code.replace('const ACHIRA_PRODUCTS_DATA', 'global.ACHIRA_PRODUCTS_DATA');
eval(code);

const baseUrl = 'https://achira-tau.vercel.app';
const today = new Date().toISOString().split('T')[0];

const corePages = [
  { url: baseUrl + '/', changefreq: 'daily', priority: '1.0' },
  { url: baseUrl + '/collections', changefreq: 'daily', priority: '0.9' },
  { url: baseUrl + '/jewellery', changefreq: 'daily', priority: '0.9' },
  { url: baseUrl + '/about', changefreq: 'monthly', priority: '0.8' }
];

const categoryPages = [
  'Straight Fit',
  'Anarkali',
  'Kurta Sets',
  'Lehenga',
  'Saree',
  'Sharara',
  'Gharara',
  'Co-ord Sets',
  'Jewellery'
].map(cat => ({
  url: `${baseUrl}/collections?cat=${encodeURIComponent(cat)}`,
  changefreq: 'weekly',
  priority: '0.8'
}));

const jewelleryCategories = ['Rings', 'Earrings', 'Necklaces', 'Bangles'].map(cat => ({
  url: `${baseUrl}/jewellery?cat=${encodeURIComponent(cat)}`,
  changefreq: 'weekly',
  priority: '0.8'
}));

const productPages = global.ACHIRA_PRODUCTS_DATA.map(p => ({
  url: `${baseUrl}/collections?product=${encodeURIComponent(p.id)}`,
  changefreq: 'weekly',
  priority: '0.7',
  lastmod: today
}));

const allUrls = [...corePages, ...categoryPages, ...jewelleryCategories, ...productPages];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

for (const item of allUrls) {
  xml += '  <url>\n';
  xml += `    <loc>${item.url}</loc>\n`;
  xml += `    <lastmod>${item.lastmod || today}</lastmod>\n`;
  xml += `    <changefreq>${item.changefreq}</changefreq>\n`;
  xml += `    <priority>${item.priority}</priority>\n`;
  xml += '  </url>\n';
}

xml += '</urlset>\n';

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml, 'utf8');
console.log(`Generated sitemap.xml with ${allUrls.length} URLs.`);
