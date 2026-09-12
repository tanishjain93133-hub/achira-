export default async function sitemap() {
  const baseUrl = 'https://achira-tau.vercel.app';
  const lastModified = new Date();

  const coreRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/collections`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/jewellery`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const categories = [
    'Straight Fit',
    'Anarkali',
    'Kurta Sets',
    'Lehenga',
    'Saree',
    'Sharara',
    'Gharara',
    'Co-ord Sets',
    'Jewellery',
  ].map((cat) => ({
    url: `${baseUrl}/collections?cat=${encodeURIComponent(cat)}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const jewelleryCategories = ['Rings', 'Earrings', 'Necklaces', 'Bangles'].map(
    (cat) => ({
      url: `${baseUrl}/jewellery?cat=${encodeURIComponent(cat)}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  );

  return [...coreRoutes, ...categories, ...jewelleryCategories];
}
