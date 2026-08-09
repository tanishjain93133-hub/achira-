const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  await prisma.product.deleteMany({}).catch(() => {});
  await prisma.coupon.deleteMany({}).catch(() => {});
  await prisma.settings.deleteMany({}).catch(() => {});

  // 1. Seed Admin
  const adminPassword = await bcrypt.hash('achira@8061@7741', 10);
  const admin = await prisma.admin.upsert({
    where: { username: 'Achira@123' },
    update: {},
    create: {
      username: 'Achira@123',
      password: adminPassword,
      email: 'admin@achira.com',
      phone: '+91 98765 43210',
      role: 'Admin'
    }
  });
  console.log('Seeded Admin:', admin.username);

  // 2. Seed Settings
  const settings = await prisma.settings.createMany({
    data: [
      {
        gst: 18,
        shipping: 150,
        email: 'atelier@achira.com',
        phone: '+91 98765 43210',
        storeName: 'ACHIRA Atelier',
        paymentGateway: 'Razorpay',
        logo: '',
        favicon: '',
        socialLinks: 'instagram:https://instagram.com/achira,facebook:https://facebook.com/achira'
      }
    ]
  });
  console.log('Seeded Settings');

  // 3. Seed Coupons
  const coupons = await prisma.coupon.createMany({
    data: [
      { code: 'LUXE15', discount: 15, expiry: '2026-12-31' },
      { code: 'ACHIRA1960', discount: 20, expiry: '2026-12-31' }
    ]
  });
  console.log('Seeded Coupons');

  // 4. Seed Products
  const productsData = [
    { name: "Maharani Zardozi Anarkali Kurta", category: "Cotton Kurtas", fabric: "Cotton", color: "Red", size: "M,L,XL", price: 4500, availability: "New Arrival", occasion: "Wedding", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80", rating: 5, stock: 12, sku: "ACH-ANAR-001", description: "Intricately hand-embroidered Anarkali suit featuring traditional royal zardozi work." },
    { name: "Kashmiri Arayan Embroidered Kurti", category: "Lucknowi Collection", fabric: "Chanderi", color: "Black", size: "S,M,L", price: 3200, availability: "Best Seller", occasion: "Festive", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", rating: 4, stock: 8, sku: "ACH-KASH-002", description: "Elegant Kashmiri style embroidery on pure Chanderi fabric." },
    { name: "Gulbahar Handblock Cotton Kurta", category: "Cotton Kurtas", fabric: "Cotton", color: "Pink", size: "XS,S,M,L,XL", price: 1800, availability: "Best Seller", occasion: "Casual", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80", rating: 5, stock: 15, sku: "ACH-GULB-003", description: "Soft cotton handblock printed kurta for everyday luxury." },
    { name: "Atelier Lucknowi Chikankari Tunic", category: "Lucknowi Collection", fabric: "Muslin", color: "White", size: "S,M,L", price: 2900, availability: "New Arrival", occasion: "Office Wear", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80", rating: 4, stock: 5, sku: "ACH-LUCK-004", description: "Pure Lucknowi hand-chikankari embroidery on breezy muslin cotton." },
    { name: "Noor Indigo Straight Kurta", category: "Chanderi Collection", fabric: "Linen", color: "Blue", size: "M,L,XL", price: 2200, availability: "New Arrival", occasion: "Casual", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80", rating: 4, stock: 10, sku: "ACH-NOOR-005", description: "Indigo block print straight cut linen kurta." },
    { name: "Avanti A-Line Banarasi Tunic", category: "Designer Sarees", fabric: "Silk", color: "Green", size: "S,M,L", price: 4900, availability: "Best Seller", occasion: "Festive", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", rating: 5, stock: 7, sku: "ACH-AVAN-006", description: "Traditional Banarasi silk woven tunic with elegant motifs." },
    { name: "Zoya Indo-Western Palazzo Set", category: "Chanderi Collection", fabric: "Rayon", color: "Yellow", size: "M,L,XL", price: 3800, availability: "Trending", occasion: "Party Wear", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80", rating: 4, stock: 9, sku: "ACH-ZOYA-007", description: "Indo-Western styling featuring comfort rayon palazzo set." },
    { name: "Avani Banarasi Silk Saree", category: "Designer Sarees", fabric: "Silk", color: "Red", size: "Free Size", price: 8500, availability: "New Arrival", occasion: "Wedding", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", rating: 5, stock: 4, sku: "ACH-SAR-008", description: "Rich royal Banarasi silk saree woven with golden zari threads." },
    { name: "Atelier Spiral Pave Diamond Studs", category: "Diamond Jewellery", fabric: "Diamonds", color: "Gold", size: "Adjustable", price: 45000, availability: "New Arrival", occasion: "Festive", image: "jewellery1.jpg", rating: 5, stock: 6, sku: "ACH-JWL-013", description: "Handcrafted 18K white gold spiral studs studded with high-brilliance micro-pave natural diamonds in a fluid swirling motif." },
    { name: "Celestial Crescent Diamond Earrings", category: "Diamond Jewellery", fabric: "Diamonds", color: "Gold", size: "Adjustable", price: 58000, availability: "New Arrival", occasion: "Bridal", image: "jewellery2.jpg", rating: 5, stock: 4, sku: "ACH-JWL-014", description: "Architectural crescent moon drop earrings featuring tiered rows of G-H VVS diamonds for luminous brilliance." },
    { name: "Solitaire Diamond Riviera Necklace", category: "Diamond Jewellery", fabric: "Diamonds", color: "Gold", size: "Adjustable", price: 185000, availability: "Best Seller", occasion: "Wedding", image: "jewellery3.jpg", rating: 5, stock: 3, sku: "ACH-JWL-015", description: "Single-line solitaire diamond riviera necklace featuring GIA certified stones." },
    { name: "Aura Four-Stone Linear Drop Earrings", category: "Diamond Jewellery", fabric: "Diamonds", color: "Gold", size: "Adjustable", price: 74000, availability: "Best Seller", occasion: "Bridal", image: "jewellery4.jpg", rating: 5, stock: 3, sku: "ACH-JWL-016", description: "Four-stone linear drop earrings adorned with brilliant solitaires." },
    { name: "Double Layer Riviera Diamond Necklace", category: "Diamond Jewellery", fabric: "Diamonds", color: "Gold", size: "Adjustable", price: 245000, availability: "Limited Edition", occasion: "Anniversary", image: "jewellery5.jpg", rating: 5, stock: 2, sku: "ACH-JWL-017", description: "Grand double-layered diamond riviera necklace for royal occasions." },
    { name: "Empress Choker Solitaire Necklace", category: "Diamond Jewellery", fabric: "Diamonds", color: "Gold", size: "Adjustable", price: 195000, availability: "New Arrival", occasion: "Wedding", image: "jewellery6.jpg", rating: 5, stock: 4, sku: "ACH-JWL-018", description: "High-jewellery solitaire collar choker designed to rest elegantly against the collarbone with maximum light refraction." },
    { name: "Art Deco Lattice Fan Drop Earrings", category: "Diamond Jewellery", fabric: "Diamonds", color: "Gold", size: "Adjustable", price: 64000, availability: "Trending", occasion: "Festive", image: "jewellery7.jpg", rating: 5, stock: 5, sku: "ACH-JWL-019", description: "Art-Deco inspired cage drop earrings with fine lattice filigree and dangling diamond accents." },
    { name: "Royal Marquise Diamond Eternity Ring", category: "Diamond Jewellery", fabric: "Diamonds", color: "Gold", size: "Adjustable", price: 52000, availability: "Best Seller", occasion: "Anniversary", image: "jewellery8.jpg", rating: 5, stock: 3, sku: "ACH-JWL-020", description: "Luxury multi-row band set with marquise cut and brilliant round solitaire diamonds in fine rose-gold setting." },
    { name: "Royal Zambian Emerald Choker Necklace", category: "Diamond Jewellery", fabric: "Diamonds", color: "Gold", size: "Adjustable", price: 290000, availability: "Limited Edition", occasion: "Bridal", image: "jewellery9.jpg", rating: 5, stock: 2, sku: "ACH-JWL-021", description: "Heritage chandelier necklace adorned with vivid teardrop Zambian emeralds suspended from diamond-encrusted arches." },
    { name: "Concentric Double Halo Circle Studs", category: "Diamond Jewellery", fabric: "Diamonds", color: "Gold", size: "Adjustable", price: 48000, availability: "In Stock", occasion: "Daily Wear", image: "jewellery10.jpg", rating: 5, stock: 6, sku: "ACH-JWL-022", description: "Timeless concentric double halo ear studs with a sparkling central solitaire cluster." },
    { name: "Tri-Band Triple Row Solitaire Diamond Ring", category: "Diamond Jewellery", fabric: "Diamonds", color: "Gold", size: "Adjustable", price: 56000, availability: "Best Seller", occasion: "Anniversary", image: "jewellery11.jpg", rating: 5, stock: 4, sku: "ACH-JWL-023", description: "Multi-row band ring featuring three parallel tracks of channel and claw-set round brilliant solitaire diamonds." },
    { name: "Aura Concentric Triple Halo Ear Studs", category: "Diamond Jewellery", fabric: "Diamonds", color: "Gold", size: "Adjustable", price: 49000, availability: "New Arrival", occasion: "Festive", image: "jewellery12.jpg", rating: 5, stock: 5, sku: "ACH-JWL-024", description: "Harmonious triple concentric circular halo ear studs encrusted with natural micro-pave diamonds around a central cluster." },
    { name: "Interlocking Double Halo Solitaire Studs", category: "Diamond Jewellery", fabric: "Diamonds", color: "Gold", size: "Adjustable", price: 54000, availability: "Limited Edition", occasion: "Bridal", image: "jewellery13.jpg", rating: 5, stock: 3, sku: "ACH-JWL-025", description: "Avante-garde ear studs featuring an offset interlocking double halo around a prominent floating claw-set solitaire." }
  ];

  await prisma.product.createMany({
    data: productsData
  });
  console.log('Seeded Products');

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
