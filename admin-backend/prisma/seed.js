const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('[SEED] Starting database seeding...');

  // 1. Seed Admin2 Account (Credentials: admin2 / admin2@Achira2026)
  const hashedAdminPassword = await bcrypt.hash('admin2@Achira2026', 10);
  const admin2 = await prisma.admin.upsert({
    where: { username: 'admin2' },
    update: {
      password: hashedAdminPassword,
      role: 'ADMIN',
      email: 'admin2@achira.com'
    },
    create: {
      username: 'admin2',
      password: hashedAdminPassword,
      role: 'ADMIN',
      email: 'admin2@achira.com'
    }
  }).catch(err => {
    console.warn('[SEED] Admin upsert skipped:', err.message);
  });
  console.log('[SEED] Admin2 account ready:', admin2 ? admin2.username : 'admin2');

  // 2. Seed Settings
  await prisma.settings.upsert({
    where: { id: 1 },
    update: {
      storeName: 'Achira Couture',
      gst: 18.0,
      shipping: 150.0,
      email: 'atelier@achira.com',
      phone: '+91 98765 43210',
      adminUsername: 'admin2',
      adminPassword: hashedAdminPassword
    },
    create: {
      id: 1,
      storeName: 'Achira Couture',
      gst: 18.0,
      shipping: 150.0,
      email: 'atelier@achira.com',
      phone: '+91 98765 43210',
      adminUsername: 'admin2',
      adminPassword: hashedAdminPassword
    }
  }).catch(err => {
    console.warn('[SEED] Settings upsert skipped:', err.message);
  });

  // 3. Seed Coupons
  const coupons = [
    { code: 'LUXE15', discount: 15.0, expiryDate: '2026-12-31', status: 'Active' },
    { code: 'ACHIRA1960', discount: 20.0, expiryDate: '2026-12-31', status: 'Active' },
    { code: 'FESTIVE20', discount: 20.0, expiryDate: '2026-12-31', status: 'Active' }
  ];

  for (const c of coupons) {
    await prisma.coupon.upsert({
      where: { code: c.code },
      update: c,
      create: c
    }).catch(() => {});
  }

  // 4. Seed Products
  const products = [
    { id: 101, sku: "ACH-ANK-001", name: "Noor-e-Kashmir Midnight Black Embroidered Anarkali Set", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Pure Cotton Mulmul", color: "Midnight Black", size: "XS, S, M, L, XL, XXL", price: 3999, originalPrice: 4850, discountPrice: 3999, stock: 24, status: "Active", featured: true, availability: "New Arrival", occasion: "Festive & Party", image: "anarkali1.jpg", images: ["anarkali1.jpg"], rating: 5, description: "Elegantly crafted from breathable pure cotton mulmul in midnight black." },
    { id: 102, sku: "ACH-ANK-002", name: "Zaffran Kesariya Mustard Yoke Embroidered Anarkali Suit", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Chanderi Silk Blend", color: "Mustard Yellow", size: "XS, S, M, L, XL, XXL", price: 4499, originalPrice: 5400, discountPrice: 4499, stock: 18, status: "Active", featured: true, availability: "Best Seller", occasion: "Festive & Haldi", image: "anarkali2.jpg", images: ["anarkali2.jpg"], rating: 5, description: "Radiant festive mustard yellow Anarkali dress highlighted with intricate needlework." },
    { id: 109, sku: "ACH-ANK-009", name: "Zariyah Champagne Beige Silk Kurti Palazzo Set with Zari Dupatta", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Pure Chanderi Silk", color: "Champagne Beige & Gold", size: "M, L, XL, XXL, XXXL, XXXXL, XXXXXL", price: 4699, originalPrice: 5600, discountPrice: 4699, stock: 22, status: "Active", featured: true, availability: "New Arrival", occasion: "Festive & Wedding Reception", image: "anarkali9.jpg", images: ["anarkali9.jpg"], rating: 5, description: "Lustrous champagne beige Chanderi silk tunic kurta set adorned with intricate resham and zardozi floral yoke needlework, ornate paisley hemline motifs, wide-leg flowy palazzo trousers, and a radiant striped zari organza dupatta." },
    { id: 110, sku: "ACH-ANK-010", name: "Aira Pastel Sage Green Flared Short Anarkali Sharara Suit Set", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Pure Chanderi Cotton Silk", color: "Pastel Sage Green", size: "M, L, XL, XXL, XXXL, XXXXL, XXXXXL", price: 4899, originalPrice: 5800, discountPrice: 4899, stock: 20, status: "Active", featured: true, availability: "Trending", occasion: "Mehendi, Sangeet & Festive Soirees", image: "anarkali10.jpg", images: ["anarkali10.jpg"], rating: 5, description: "Ethereal pastel sage green flared short Anarkali kurti highlighted with delicate floral thread embroidery on the V-neck yoke and flared hem, paired with tiered flared sharara pants and an intricately embroidered matching dupatta." },
    { id: 111, sku: "ACH-ANK-011", name: "Sitara Metallic Taupe Bronze Embroidered Flared Anarkali Kurta Set", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Pure Raw Silk Blend", color: "Metallic Bronze Taupe", size: "M, L, XL, XXL, XXXL, XXXXL, XXXXXL", price: 5299, originalPrice: 6400, discountPrice: 5299, stock: 18, status: "Active", featured: true, availability: "Best Seller", occasion: "Royal Weddings, Reception & Grand Festivals", image: "anarkali11.jpg", images: ["anarkali11.jpg"], rating: 5, description: "Regal metallic bronze-taupe flared pleated Anarkali silhouette featuring opulent gold floral resham embroidery on the bodice and cuffs, flowy tiered flared trousers, and a lightweight matching dupatta with scalloped embroidered lace borders." },
    { id: 112, sku: "ACH-ANK-012", name: "Meher Blush Peach Pink Pearl Fringe Embroidered Anarkali Palazzo Set", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Pure Organza Silk & Chanderi", color: "Blush Peach Pink", size: "M, L, XL, XXL, XXXL, XXXXL, XXXXXL", price: 4999, originalPrice: 5999, discountPrice: 4999, stock: 24, status: "Active", featured: true, availability: "New Arrival", occasion: "Day Wedding, Sangeet & Haldi Festive", image: "anarkali12.jpg", images: ["anarkali12.jpg"], rating: 5, description: "Romantic blush peach pink pleated short Anarkali kurta featuring an ornate embroidered yoke bib with delicate pearl drop fringe hem, matched with striped flared palazzo pants and a scalloped embroidered organza dupatta with tassel accents." },
    { id: 113, sku: "ACH-ANK-013", name: "Nafisa Royal Peacock Teal Flared Kurti Palazzo Set with Embellished Placket", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Pure Silk Cotton Slub", color: "Royal Peacock Teal", size: "M, L, XL, XXL, XXXL, XXXXL, XXXXXL", price: 4599, originalPrice: 5500, discountPrice: 4599, stock: 25, status: "Active", featured: true, availability: "Trending", occasion: "Festive Soirees, Sangeet & Celebrations", image: "anarkali13.jpg", images: ["anarkali13.jpg"], rating: 5, description: "Vibrant royal peacock teal blue short Anarkali flared kurti featuring a rich multi-colored floral embroidered yoke placket with coin/bead hangings, embroidered sleeve cuffs, wide flowy palazzo pants, and an ornate floral embroidered border dupatta." },
    { id: 114, sku: "ACH-ANK-014", name: "Rudra Terracotta Rust Embroidered Flared Anarkali Palazzo Set", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Pure Chanderi Silk", color: "Rust Terracotta", size: "M, L, XL, XXL, XXXL, XXXXL, XXXXXL", price: 4799, originalPrice: 5750, discountPrice: 4799, stock: 22, status: "Active", featured: true, availability: "New Arrival", occasion: "Festive, Haldi & Day Soirees", image: "anarkali14.jpg", images: ["anarkali14.jpg"], rating: 5, description: "Vibrant terracotta rust flared short Anarkali kurti featuring an ornate arched resham and mirror-embroidered neck medallion, flowy pleated silhouette, wide-leg matching palazzo trousers, and an ethereal embroidered border dupatta." },
    { id: 115, sku: "ACH-ANK-015", name: "Rani Roopam Magenta Fuchsia Embroidered Anarkali Sharara Set", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Pure Silk Cotton Slub", color: "Magenta Fuchsia Pink", size: "M, L, XL, XXL, XXXL, XXXXL, XXXXXL", price: 5199, originalPrice: 6300, discountPrice: 5199, stock: 18, status: "Active", featured: true, availability: "Best Seller", occasion: "Weddings, Sangeet & Festive Galas", image: "anarkali15.jpg", images: ["anarkali15.jpg"], rating: 5, description: "Regal fuchsia magenta flared Anarkali silhouette tailored with a triangular heritage gold resham and gota embroidered yoke panel, shimmering sleeve borders, flared sharara pants, and a rich matching embroidered border dupatta." },
    { id: 116, sku: "ACH-ANK-016", name: "Gul-e-Gulabi Dusty Rose Pastel Embroidered Flared Kurti Palazzo Set", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Pure Organza Silk & Chanderi", color: "Dusty Rose Pink", size: "M, L, XL, XXL, XXXL, XXXXL, XXXXXL", price: 4950, originalPrice: 5900, discountPrice: 4950, stock: 24, status: "Active", featured: true, availability: "New Arrival", occasion: "Day Weddings, Sangeet & Festive Soirees", image: "anarkali16.jpg", images: ["anarkali16.jpg"], rating: 5, description: "Delicate dusty rose pink flared pleated kurta featuring a pastel multi-colored floral resham embroidered bodice yoke, tonal flared palazzo trousers with hem embroidery, and an organza scalloped floral embroidered dupatta." },
    { id: 117, sku: "ACH-ANK-017", name: "Neelambari Royal Iris Violet Embroidered Anarkali Palazzo Set", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Pure Chanderi Silk", color: "Royal Iris Violet", size: "M, L, XL, XXL, XXXL, XXXXL, XXXXXL", price: 5350, originalPrice: 6500, discountPrice: 5350, stock: 20, status: "Active", featured: true, availability: "Trending", occasion: "Royal Weddings, Receptions & Sangeet", image: "anarkali17.jpg", images: ["anarkali17.jpg"], rating: 5, description: "Regal royal iris violet flared Anarkali kurti adorned with ornate Mughal umbrella and floral resham embroidered yoke, matching embroidered sleeve cuffs and hem, paired with flared trousers and a matching embroidered border dupatta." },
    { id: 118, sku: "ACH-ANK-018", name: "Nazakat Rani Pink Flared Anarkali Sharara Set with Kalamkari Dupatta", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Pure Silk Chanderi", color: "Rani Pink & Multicolored", size: "M, L, XL, XXL, XXXL, XXXXL, XXXXXL", price: 5499, originalPrice: 6600, discountPrice: 5499, stock: 19, status: "Active", featured: true, availability: "Best Seller", occasion: "Grand Weddings, Mehendi & Celebrations", image: "anarkali18.jpg", images: ["anarkali18.jpg"], rating: 5, description: "Magnificent rani pink flared short Anarkali kurta featuring an embellished V-neckline, jewel-toned ethnic printed hem border, matching gathered sharara pants, and an opulent artisanal multicolored Kalamkari printed dupatta." },
    { id: 201, sku: "ACH-KRT-001", name: "Mayura Mustard & Teal Blue Embroidered Kurta Pant Dupatta Set", category: "Kurta Sets", parentCategory: "Ethnic Wear", fabric: "Pure Cotton Slub", color: "Mustard Yellow & Teal", size: "XS, S, M, L, XL, XXL", price: 3450, originalPrice: 4200, discountPrice: 3450, stock: 26, status: "Active", featured: true, availability: "New Arrival", occasion: "Casual & Festive", image: "kurtaset1.jpg", images: ["kurtaset1.jpg"], rating: 5, description: "Chic dual-tone straight kurta set in mustard yellow with teal blue embroidered chest patch." },
    { id: 202, sku: "ACH-KRT-002", name: "Parijaat Lime Green V-Neck Motif Embroidered Kurta Set", category: "Kurta Sets", parentCategory: "Ethnic Wear", fabric: "Pure Chanderi Silk", color: "Lime Green", size: "XS, S, M, L, XL, XXL", price: 3850, originalPrice: 4600, discountPrice: 3850, stock: 20, status: "Active", featured: true, availability: "Best Seller", occasion: "Day Festive & Office Wear", image: "kurtaset2.jpg", images: ["kurtaset2.jpg"], rating: 5, description: "Refreshing lime green straight kurta set accented with contrasting embroidered V-neckline border." },
    { id: 301, sku: "ACH-JWL-301", name: "Concentric Circular Halo Diamond Studs", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: "Standard", price: 45000, availability: "New Arrival", occasion: "Festive", image: "jewellery1.jpg", rating: 5, description: "Handcrafted fine gold ear studs featuring concentric rings of micro-pave natural brilliant diamonds surrounding a central solitaire cluster." },
    { id: 302, sku: "ACH-JWL-302", name: "Celestial Crescent Diamond Earrings", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: "Standard", price: 58000, availability: "New Arrival", occasion: "Bridal", image: "jewellery2.jpg", rating: 5, description: "Architectural crescent moon drop earrings featuring tiered rows of G-H VVS diamonds." },
    { id: 303, sku: "ACH-JWL-303", name: "Solitaire Diamond Riviera Necklace", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: "Adjustable", price: 185000, availability: "Best Seller", occasion: "Wedding", image: "jewellery3.jpg", rating: 5, description: "A seamless continuous tennis strand of matched claw-set brilliant solitaire diamonds." },
    { id: 401, sku: "ACH-RNG-401", name: "Aura Wave Diamond Cluster Ring", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: "Adjustable", price: 48500, availability: "New Arrival", occasion: "Anniversary", image: "ring1.jpg", rating: 5, description: "Sinuous dual-contoured wave ring featuring a central 6-petal floral diamond solitaire cluster." },
    { id: 402, sku: "ACH-RNG-402", name: "Empress Oval Halo Floral Diamond Ring", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: "Adjustable", price: 42000, availability: "Best Seller", occasion: "Daily Wear", image: "ring2.jpg", rating: 5, description: "Slender solid 18K gold band adorned with a central multi-diamond floral medallion." }
  ];

  for (const p of products) {
    await prisma.product.upsert({
      where: { id: p.id },
      update: p,
      create: p
    }).catch(() => {});
  }

  console.log('[SEED] Database seeding completed successfully.');
}

main()
  .catch(err => {
    console.error('[SEED ERROR]', err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
