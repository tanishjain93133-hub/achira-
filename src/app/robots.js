export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/collections', '/jewellery', '/about', '/sitemap.xml'],
      disallow: [
        '/admin',
        '/admin/',
        '/admin2',
        '/admin2/',
        '/admin-backend/',
        '/admin-frontend/',
        '/api/',
      ],
    },
    sitemap: 'https://achira-tau.vercel.app/sitemap.xml',
  };
}
