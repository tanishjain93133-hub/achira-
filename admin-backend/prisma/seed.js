const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

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
    { name: "Heritage Polki Diamond Choker", category: "Diamond Jewellery", fabric: "Diamonds", color: "Gold", size: "Adjustable", price: 125000, availability: "Best Seller", occasion: "Wedding", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80", rating: 5, stock: 2, sku: "ACH-JWL-009", description: "BIS-Hallmarked Gold choker featuring certified Polki diamonds." },
    { name: "Royal Gold Kundan Necklace Set", category: "Gold Jewellery", fabric: "Gold", color: "Gold", size: "Adjustable", price: 95000, availability: "New Arrival", occasion: "Wedding", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80", rating: 5, stock: 3, sku: "ACH-JWL-010", description: "Handcrafted Kundan necklace set with matching jhumkas." },
    { name: "Vasant Floral Organza Saree", category: "Organza Sarees", fabric: "Organza", color: "Pink", size: "Free Size", price: 6800, availability: "Trending", occasion: "Festive", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=85", rating: 5, stock: 11, sku: "ACH-SAR-011", description: "Fluid organza saree with delicate handpainted floral motifs." },
    { name: "Royal Banarasi Silk Lehenga", category: "Bridal Lehengas", fabric: "Silk", color: "Red", size: "M,L,XL", price: 14500, availability: "Best Seller", occasion: "Wedding", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80", rating: 5, stock: 3, sku: "ACH-LEH-012", description: "Royal bridal lehenga set crafted in Banarasi silk." },
    { name: "Atelier Spiral Diamond Studs", category: "Diamond Jewellery", fabric: "Diamonds", color: "Gold", size: "Adjustable", price: 45000, availability: "New Arrival", occasion: "Festive", image: "earring1.jpg", rating: 5, stock: 6, sku: "ACH-JWL-013", description: "Premium rose gold spiral studs encrusted with certified diamonds." },
    { name: "Celestial Crescent Diamond Earrings", category: "Diamond Jewellery", fabric: "Diamonds", color: "Gold", size: "Adjustable", price: 58000, availability: "New Arrival", occasion: "Bridal", image: "earring2.jpg", rating: 5, stock: 4, sku: "ACH-JWL-014", description: "Crescent moon drop earrings featuring G-H VVS diamonds." },
    { name: "Infinity Loop Diamond Earrings", category: "Diamond Jewellery", fabric: "Diamonds", color: "Gold", size: "Adjustable", price: 61500, availability: "Best Seller", occasion: "Wedding", image: "earring3.jpg", rating: 5, stock: 5, sku: "ACH-JWL-015", description: "Infinity twist studs featuring IGI certified diamonds." },
    { name: "Royal Halo Gold & Diamond Jhumkas", category: "Gold Jewellery", fabric: "Gold", color: "Gold", size: "Adjustable", price: 74000, availability: "Best Seller", occasion: "Bridal", image: "earring4.jpg", rating: 5, stock: 3, sku: "ACH-JWL-016", description: "Traditional jhumkas adorned with fine gold filigree and diamonds." },
    { name: "Aura Linear Diamond Drops", category: "Diamond Jewellery", fabric: "Diamonds", color: "Gold", size: "Adjustable", price: 68000, availability: "Limited Edition", occasion: "Anniversary", image: "earring5.jpg", rating: 5, stock: 2, sku: "ACH-JWL-017", description: "Delicate linear drops featuring certified solitaire diamonds." }
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
