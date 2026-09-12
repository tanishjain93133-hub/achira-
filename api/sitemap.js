const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const sitemapPath = path.join(process.cwd(), 'sitemap.xml');
    const xml = fs.readFileSync(sitemapPath, 'utf8');
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400');
    return res.status(200).send(xml);
  } catch (e) {
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    return res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://achira-tau.vercel.app/</loc><priority>1.0</priority></url>
  <url><loc>https://achira-tau.vercel.app/collections</loc><priority>0.9</priority></url>
  <url><loc>https://achira-tau.vercel.app/jewellery</loc><priority>0.9</priority></url>
  <url><loc>https://achira-tau.vercel.app/about</loc><priority>0.8</priority></url>
</urlset>`);
  }
};
