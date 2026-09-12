module.exports = (req, res) => {
  const content = `# https://achira-tau.vercel.app/robots.txt
# Search engine crawling rules for ACHIRA storefront

User-agent: *
Allow: /
Allow: /collections
Allow: /jewellery
Allow: /about
Allow: /sitemap.xml

# Disallow private, administrative, and internal API routes
Disallow: /admin
Disallow: /admin/
Disallow: /admin2
Disallow: /admin2/
Disallow: /admin-backend/
Disallow: /admin-frontend/
Disallow: /api/

# XML Sitemap
Sitemap: https://achira-tau.vercel.app/sitemap.xml
`;

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400');
  return res.status(200).send(content);
};
