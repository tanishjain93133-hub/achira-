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
    { id: 1, name: "Maharani Zardozi Anarkali Dress", category: "Cotton Kurtas", fabric: "Cotton", color: "Red", size: "M, L, XL, XXL", price: 4500, availability: "New Arrival", occasion: "Wedding", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80", rating: 5, sku: "ACH-SKU-001" },
    { id: 2, name: "Kashmiri Arayan Embroidered Dress", category: "Lucknowi Collection", fabric: "Chanderi", color: "Black", size: "S, M, L, XXL, XXXXL", price: 3200, availability: "Best Seller", occasion: "Festive", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", rating: 4, sku: "ACH-SKU-002" },
    { id: 3, name: "Gulbahar Handblock Cotton Dress", category: "Cotton Kurtas", fabric: "Cotton", color: "Pink", size: "XS, S, M, L, XL, XXL, XXXXL, XXXXXL", price: 1800, availability: "Best Seller", occasion: "Casual", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80", rating: 5, sku: "ACH-SKU-003" },
    { id: 4, name: "Atelier Lucknowi Chikankari Tunic", category: "Lucknowi Collection", fabric: "Muslin", color: "White", size: "S, M, L, XL", price: 2900, availability: "New Arrival", occasion: "Office Wear", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80", rating: 4, sku: "ACH-SKU-004" },
    { id: 5, name: "Noor Indigo Straight Dress", category: "Chanderi Collection", fabric: "Linen", color: "Blue", size: "M, L, XL, XXL, XXXXXL", price: 2200, availability: "New Arrival", occasion: "Casual", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80", rating: 4, sku: "ACH-SKU-005" },
    { id: 6, name: "Avanti A-Line Banarasi Tunic", category: "Designer Sarees", fabric: "Silk", color: "Green", size: "S, M, L", price: 4900, availability: "Best Seller", occasion: "Festive", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", rating: 5, sku: "ACH-SKU-006" },
    { id: 7, name: "Zoya Indo-Western Palazzo Set", category: "Chanderi Collection", fabric: "Rayon", color: "Yellow", size: "M, L, XL, XXL", price: 3800, availability: "Trending", occasion: "Party Wear", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80", rating: 4, sku: "ACH-SKU-007" },
    { id: 8, name: "Avani Banarasi Silk Saree", category: "Designer Sarees", fabric: "Silk", color: "Red", size: "Free Size", price: 8500, availability: "New Arrival", occasion: "Wedding", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", rating: 5, sku: "ACH-SKU-008" },
    { id: 9, name: "Atelier Spiral Pave Diamond Studs", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: "Adjustable", price: 45000, availability: "New Arrival", occasion: "Festive", image: "jewellery1.jpg", rating: 5, sku: "ACH-SKU-009", description: "Handcrafted 18K white gold spiral studs studded with micro-pave natural diamonds." },
    { id: 10, name: "Celestial Crescent Diamond Earrings", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: "Adjustable", price: 58000, availability: "New Arrival", occasion: "Bridal", image: "jewellery2.jpg", rating: 5, sku: "ACH-SKU-010", description: "Architectural crescent moon drop earrings featuring tiered rows of G-H VVS diamonds." },
    { id: 11, name: "Vasant Floral Organza Saree", category: "Organza Sarees", fabric: "Organza", color: "Pink", size: "Free Size", price: 6800, availability: "Trending", occasion: "Festive", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=85", rating: 5, sku: "ACH-SKU-011" },
    { id: 12, name: "Royal Banarasi Silk Lehenga", category: "Bridal Lehengas", fabric: "Silk", color: "Red", size: "M, L, XL, XXL", price: 14500, availability: "Best Seller", occasion: "Wedding", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80", rating: 5, sku: "ACH-SKU-012" },
    { id: 13, name: "Royal Heritage Velvet Gown", category: "Gown", fabric: "Velvet", color: "Maroon", size: "S, M, L, XL, XXL, XXXXL, XXXXXL", price: 8900, availability: "New Arrival", occasion: "Party Wear", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80", rating: 5, sku: "ACH-SKU-013" }
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
