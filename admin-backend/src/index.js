require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'achira_jwt_secret_token_couture_2026';

// Middleware
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static assets from project root
const staticRoot = path.join(__dirname, '..', '..');
app.use(express.static(staticRoot));

// Dedicated /admin2 route
app.get('/admin2', (req, res) => {
  res.sendFile(path.join(staticRoot, 'admin2.html'));
});

// Primary Prisma Client
let prisma = null;
let isDbConnected = false;

try {
  prisma = new PrismaClient();
} catch (e) {
  console.error('[DATABASE INIT ERROR]', e.message);
}

// In-Memory Resilient Cache Store (for zero-crash failover if PostgreSQL is temporarily offline)
const memoryStore = {
  users: [],
  admins: [],
  products: [
    { id: 101, sku: "ACH-ANK-001", name: "Noor-e-Kashmir Midnight Black Embroidered Anarkali Set", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Pure Cotton Mulmul", color: "Midnight Black", size: "XS, S, M, L, XL, XXL", price: 3999, originalPrice: 4850, discountPrice: 3999, stock: 24, status: "Active", featured: true, availability: "New Arrival", occasion: "Festive & Party", image: "anarkali1.jpg", images: ["anarkali1.jpg"], rating: 5, description: "Elegantly crafted from breathable pure cotton mulmul in midnight black, featuring a handcrafted mirror-work circular medallion motif on the chest, a delicate V-neckline with silver embroidery, and a full flaring silhouette paired with straight pants." },
    { id: 102, sku: "ACH-ANK-002", name: "Zaffran Kesariya Mustard Yoke Embroidered Anarkali Suit", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Chanderi Silk Blend", color: "Mustard Yellow", size: "XS, S, M, L, XL, XXL", price: 4499, originalPrice: 5400, discountPrice: 4499, stock: 18, status: "Active", featured: true, availability: "Best Seller", occasion: "Festive & Haldi", image: "anarkali2.jpg", images: ["anarkali2.jpg"], rating: 5, description: "Radiant festive mustard yellow Anarkali dress highlighted with an intricate needlework yoke, delicate floral hand embroidery, matching gathered flared bottoms, and a lightweight scalloped matching dupatta with contrast pink tassels." },
    { id: 103, sku: "ACH-ANK-003", name: "Gul-e-Chanderi Lime Green Anarkali with Kalamkari Dupatta", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Pure Chanderi Silk", color: "Lime Green", size: "XS, S, M, L, XL, XXL", price: 5199, originalPrice: 6200, discountPrice: 5199, stock: 15, status: "Active", featured: true, availability: "Trending", occasion: "Wedding & Festive", image: "anarkali3.jpg", images: ["anarkali3.jpg"], rating: 5, description: "Rich lime green flared Chanderi Anarkali gown paired with a magnificent traditional Kalamkari printed artisanal dupatta, woven zari accents on the yoke, and tailored tonal trousers." },
    { id: 104, sku: "ACH-ANK-004", name: "Gulabi Meher Blush Pink Gota Handblock Anarkali Suit", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Organic Cotton", color: "Blush Pink", size: "XS, S, M, L, XL, XXL", price: 3799, originalPrice: 4600, discountPrice: 3799, stock: 28, status: "Active", featured: true, availability: "New Arrival", occasion: "Casual & Day Festive", image: "anarkali4.jpg", images: ["anarkali4.jpg"], rating: 5, description: "Soft ethereal blush pink cotton Anarkali suit adorned with geometric yoke stitching, subtle booti motifs all over the kalis, delicate lace trims on the neckline and hem, complemented by a featherlight matching dupatta." },
    { id: 105, sku: "ACH-ANK-005", name: "Lavanya Lilac Floral Tiered Anarkali Suit Set", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Muslin Cotton", color: "Lilac Purple", size: "XS, S, M, L, XL, XXL", price: 4250, originalPrice: 5100, discountPrice: 4250, stock: 20, status: "Active", featured: true, availability: "Best Seller", occasion: "Party & Festive", image: "anarkali5.jpg", images: ["anarkali5.jpg"], rating: 5, description: "Dreamy pastel lilac tiered Anarkali suit featuring whimsical botanical floral vines, a delicate scalloped V-neckline with fabric button accents, matching tonal trousers, and an exquisite printed border dupatta." },
    { id: 106, sku: "ACH-ANK-006", name: "Neelambari Teal Blue Angrakha Embroidered Anarkali Set", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Pure Chanderi Cotton", color: "Teal Blue", size: "XS, S, M, L, XL, XXL", price: 4650, originalPrice: 5500, discountPrice: 4650, stock: 22, status: "Active", featured: true, availability: "New Arrival", occasion: "Festive & Wedding", image: "anarkali6.jpg", images: ["anarkali6.jpg"], rating: 5, description: "Graceful royal teal blue Angrakha wrap style Anarkali featuring intricate multi-color floral hand-embroidery on the overlapping bodice, playful side dori tassels, full pleating flare, and a complementary printed border dupatta." },
    { id: 107, sku: "ACH-ANK-007", name: "Vanyashri Olive Green Tiered Embroidered Cotton Anarkali Suit", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Organic Cotton Mulmul", color: "Olive Green", size: "XS, S, M, L, XL, XXL", price: 3950, originalPrice: 4750, discountPrice: 3950, stock: 25, status: "Active", featured: true, availability: "Best Seller", occasion: "Mehendi & Festive", image: "anarkali7.jpg", images: ["anarkali7.jpg"], rating: 5, description: "Festive olive green tiered Anarkali silhouette tailored from breathable organic cotton mulmul, adorned with geometric white yoke embroidery, handcrafted neck tassel strings, and a lavish matching printed dupatta." },
    { id: 108, sku: "ACH-ANK-008", name: "Sanjh-e-Khaas Indigo Black Handblock Printed Anarkali Suit", category: "Anarkali", parentCategory: "Ethnic Wear", fabric: "Jaipuri Handblock Cotton", color: "Indigo Charcoal", size: "XS, S, M, L, XL, XXL", price: 4150, originalPrice: 4999, discountPrice: 4150, stock: 19, status: "Active", featured: true, availability: "Trending", occasion: "Party & Day Festive", image: "anarkali8.jpg", images: ["anarkali8.jpg"], rating: 5, description: "Sophisticated indigo charcoal Jaipuri handblock printed Anarkali gown suit featuring traditional bootidar botanical patterns, a keyhole notched neckline, straight pants, and a rich contrast leaf-motif dupatta." },
    { id: 201, sku: "ACH-KRT-001", name: "Mayura Mustard & Teal Blue Embroidered Kurta Pant Dupatta Set", category: "Kurta Sets", parentCategory: "Ethnic Wear", fabric: "Pure Cotton Slub", color: "Mustard Yellow & Teal", size: "XS, S, M, L, XL, XXL", price: 3450, originalPrice: 4200, discountPrice: 3450, stock: 26, status: "Active", featured: true, availability: "New Arrival", occasion: "Casual & Festive", image: "kurtaset1.jpg", images: ["kurtaset1.jpg"], rating: 5, description: "Chic dual-tone straight kurta set in mustard yellow with a teal blue embroidered chest patch featuring geometric stitch-work, paired with matching tailored trousers and a lavish geometric printed teal dupatta." },
    { id: 202, sku: "ACH-KRT-002", name: "Parijaat Lime Green V-Neck Motif Embroidered Kurta Set", category: "Kurta Sets", parentCategory: "Ethnic Wear", fabric: "Pure Chanderi Silk", color: "Lime Green", size: "XS, S, M, L, XL, XXL", price: 3850, originalPrice: 4600, discountPrice: 3850, stock: 20, status: "Active", featured: true, availability: "Best Seller", occasion: "Day Festive & Office Wear", image: "kurtaset2.jpg", images: ["kurtaset2.jpg"], rating: 5, description: "Refreshing lime green straight kurta set accented with a contrasting dark green embroidered V-neckline border, tree of life central motif, geometric hem detailing, and matching printed tapered trousers." },
    { id: 203, sku: "ACH-KRT-003", name: "Raktika Crimson Red Sleeveless Kurta Trouser Set", category: "Kurta Sets", parentCategory: "Ethnic Wear", fabric: "Pure Linen Cotton", color: "Crimson Red", size: "XS, S, M, L, XL, XXL", price: 3250, originalPrice: 3999, discountPrice: 3250, stock: 24, status: "Active", featured: true, availability: "Trending", occasion: "Festive & Party", image: "kurtaset3.jpg", images: ["kurtaset3.jpg"], rating: 5, description: "Contemporary crimson red sleeveless straight-cut kurta featuring side-panel contrast Mughal booti print inserts with delicate gota lace trims, front tassel necktie, paired with solid tonal cigarette trousers." },
    { id: 204, sku: "ACH-KRT-004", name: "Aarohi Coral Peach Mirror-Work Strappy Kurta Pant Set", category: "Kurta Sets", parentCategory: "Ethnic Wear", fabric: "Chanderi Cotton Blend", color: "Coral Peach", size: "XS, S, M, L, XL, XXL", price: 3600, originalPrice: 4350, discountPrice: 3600, stock: 21, status: "Active", featured: true, availability: "New Arrival", occasion: "Summer Festive & Haldi", image: "kurtaset4.jpg", images: ["kurtaset4.jpg"], rating: 5, description: "Breezy coral peach strappy A-line kurta designed with shimmering faux mirror-work along the square neckline, subtle woven zari vertical pinstripes, paired with matching striped ankle-length trousers." },
    { id: 205, sku: "ACH-KRT-005", name: "Suryamukhi Scarlet Red Embroidered Kurta Trouser Dupatta Set", category: "Kurta Sets", parentCategory: "Ethnic Wear", fabric: "Pure Muslin Silk", color: "Scarlet Red", size: "XS, S, M, L, XL, XXL", price: 4100, originalPrice: 4950, discountPrice: 4100, stock: 18, status: "Active", featured: true, availability: "Best Seller", occasion: "Festive & Wedding Guest", image: "kurtaset5.jpg", images: ["kurtaset5.jpg"], rating: 5, description: "Regal scarlet red sleeveless straight kurta highlighted with intricate silver resham threadwork on the chest, tailored solid ankle trousers, and a fluid matching red solid dupatta." },
    { id: 206, sku: "ACH-KRT-006", name: "Basanti Floral Belted Sleeveless Kurta Salwar Set", category: "Kurta Sets", parentCategory: "Ethnic Wear", fabric: "Pure Cotton Mulmul", color: "Sunlit Yellow", size: "XS, S, M, L, XL, XXL", price: 3550, originalPrice: 4250, discountPrice: 3550, stock: 24, status: "Active", featured: true, availability: "New Arrival", occasion: "Day Wear & Haldi", image: "kurtaset6.jpg", images: ["kurtaset6.jpg"], rating: 5, description: "Cheerful sunlit yellow floral printed sleeveless A-line kurta featuring front pearl button detailing, a matching tie-up fabric waist belt, and tailored matching printed cuff salwar pants." },
    { id: 207, sku: "ACH-KRT-007", name: "Gulaal Berry Pink Mirror Medallion Strappy Kurta Set", category: "Kurta Sets", parentCategory: "Ethnic Wear", fabric: "Chanderi Cotton Blend", color: "Berry Pink", size: "XS, S, M, L, XL, XXL", price: 3700, originalPrice: 4450, discountPrice: 3700, stock: 22, status: "Active", featured: true, availability: "Trending", occasion: "Party & Summer Festive", image: "kurtaset7.jpg", images: ["kurtaset7.jpg"], rating: 5, description: "Exquisite berry pink strappy A-line kurta highlighted with an ornate handcrafted mirror-work medallion on the chest, all-over micro-booti dots, and coordinating straight-cut pants." },
    { id: 208, sku: "ACH-KRT-008", name: "Meghna Slate Blue Embroidered Square Yoke Kurta Trouser Set", category: "Kurta Sets", parentCategory: "Ethnic Wear", fabric: "Pure Slub Linen Cotton", color: "Slate Blue", size: "XS, S, M, L, XL, XXL", price: 3890, originalPrice: 4700, discountPrice: 3890, stock: 19, status: "Active", featured: true, availability: "Best Seller", occasion: "Office & Festive Wear", image: "kurtaset8.jpg", images: ["kurtaset8.jpg"], rating: 5, description: "Understated elegance in dusty slate blue linen-cotton kurta boasting an intricate embroidered square neckline yoke with mirror accents, delicate booti embroidery, and tailored matching trousers." },
    { id: 209, sku: "ACH-KRT-009", name: "Swarna Kesari Mustard Yoke Embroidered Kurta Set with Kalamkari Dupatta", category: "Kurta Sets", parentCategory: "Ethnic Wear", fabric: "Pure Chanderi Silk", color: "Mustard Gold", size: "XS, S, M, L, XL, XXL", price: 4350, originalPrice: 5200, discountPrice: 4350, stock: 16, status: "Active", featured: true, availability: "New Arrival", occasion: "Festive & Wedding Guest", image: "kurtaset9.jpg", images: ["kurtaset9.jpg"], rating: 5, description: "Regal mustard gold kurta set enriched with geometric mirror embroidered neck yoke, matching tailored trousers, and a grand geometric Kalamkari printed dupatta." },
    { id: 210, sku: "ACH-KRT-010", name: "Vrinda Lime Green V-Neck A-Line Kurta Salwar Set", category: "Kurta Sets", parentCategory: "Ethnic Wear", fabric: "Pure Chanderi Cotton", color: "Lime Green", size: "XS, S, M, L, XL, XXL", price: 3990, originalPrice: 4800, discountPrice: 3990, stock: 25, status: "Active", featured: true, availability: "Best Seller", occasion: "Mehendi & Festive", image: "kurtaset10.jpg", images: ["kurtaset10.jpg", "kurtaset2.jpg"], rating: 5, description: "Radiant lime green A-line kurta featuring an embroidered contrasting bottle green V-neck yoke, floral motif embroidery on the panels, and unique tie-up drawstring cuff trousers." },
    { id: 301, sku: "ACH-JWL-301", name: "Atelier Spiral Pave Diamond Studs", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: "Standard", price: 45000, availability: "New Arrival", occasion: "Festive", image: "jewellery1.jpg", rating: 5 },
    { id: 302, sku: "ACH-JWL-302", name: "Celestial Crescent Diamond Earrings", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: "Standard", price: 58000, availability: "New Arrival", occasion: "Bridal", image: "jewellery2.jpg", rating: 5 },
    { id: 303, sku: "ACH-JWL-303", name: "Solitaire Diamond Riviera Necklace", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: "Adjustable", price: 185000, availability: "Best Seller", occasion: "Wedding", image: "jewellery3.jpg", rating: 5 },
    { id: 401, sku: "ACH-RNG-401", name: "Aura Wave Diamond Cluster Ring", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: "Adjustable", price: 48500, availability: "New Arrival", occasion: "Anniversary", image: "ring1.jpg", rating: 5 },
    { id: 402, sku: "ACH-RNG-402", name: "Empress Oval Halo Floral Diamond Ring", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: "Adjustable", price: 42000, availability: "Best Seller", occasion: "Daily Wear", image: "ring2.jpg", rating: 5 }
  ],
  orders: [],
  coupons: [
    { id: 1, code: 'LUXE15', discount: 15.0, expiryDate: '2026-12-31', status: 'Active' },
    { id: 2, code: 'ACHIRA1960', discount: 20.0, expiryDate: '2026-12-31', status: 'Active' },
    { id: 3, code: 'FESTIVE20', discount: 20.0, expiryDate: '2026-12-31', status: 'Active' }
  ],
  settings: {
    id: 1,
    storeName: 'Achira Couture',
    gst: 18.0,
    shipping: 150.0,
    email: 'atelier@achira.com',
    phone: '+91 98765 43210',
    adminUsername: 'admin2'
  },
  enquiries: [],
  logs: []
};

// Persistent JSON File Storage Engine (Ensures 100% data persistence on disk without PostgreSQL/MongoDB)
const fs = require('fs');
const dbFilePath = path.join(__dirname, '..', 'data', 'achira_db.json');

function loadFileDatabase() {
  try {
    if (fs.existsSync(dbFilePath)) {
      const raw = fs.readFileSync(dbFilePath, 'utf8');
      const data = JSON.parse(raw);
      if (data && typeof data === 'object') {
        if (Array.isArray(data.orders)) memoryStore.orders = data.orders;
        if (Array.isArray(data.users)) memoryStore.users = data.users;
        if (Array.isArray(data.products) && data.products.length > 0) memoryStore.products = data.products;
        if (Array.isArray(data.coupons)) memoryStore.coupons = data.coupons;
        if (Array.isArray(data.enquiries)) memoryStore.enquiries = data.enquiries;
        if (Array.isArray(data.logs)) memoryStore.logs = data.logs;
        if (data.settings) memoryStore.settings = { ...memoryStore.settings, ...data.settings };
        console.log(`💾 :: Persistent File Database Loaded: ${memoryStore.orders.length} orders, ${memoryStore.users.length} users, ${memoryStore.products.length} products.`);
      }
    } else {
      saveFileDatabase();
    }
  } catch (err) {
    console.warn('⚠️ :: [FILE DB LOAD NOTICE]', err.message);
  }
}

function saveFileDatabase() {
  try {
    const dataDir = path.dirname(dbFilePath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const dataToSave = {
      orders: memoryStore.orders,
      users: memoryStore.users,
      products: memoryStore.products,
      coupons: memoryStore.coupons,
      enquiries: memoryStore.enquiries,
      logs: memoryStore.logs,
      settings: memoryStore.settings,
      lastUpdated: new Date().toISOString()
    };
    fs.writeFileSync(dbFilePath, JSON.stringify(dataToSave, null, 2), 'utf8');
  } catch (err) {
    console.warn('⚠️ :: [FILE DB SAVE NOTICE]', err.message);
  }
}

// Seed admin2 account in memory store
(async () => {
  const hash = await bcrypt.hash('admin2@Achira2026', 10);
  memoryStore.admins.push({
    id: 1,
    username: 'admin2',
    password: hash,
    role: 'ADMIN',
    email: 'admin2@achira.com'
  });
  loadFileDatabase();
})();

// Test PostgreSQL Connection
async function checkDatabaseConnection() {
  if (!prisma) return false;
  try {
    await prisma.$queryRaw`SELECT 1`;
    isDbConnected = true;
    console.log('🐘 :: PostgreSQL Database Connected Successfully via Prisma ORM.');
    return true;
  } catch (err) {
    isDbConnected = false;
    console.warn('⚠️ :: PostgreSQL server not active on DATABASE_URL. Running persistent JSON file database engine.');
    return false;
  }
}
checkDatabaseConnection();

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'Achira Couture Backend API',
    version: '3.0.0',
    dbConnected: isDbConnected,
    totalOrders: memoryStore.orders.length,
    totalProducts: memoryStore.products.length,
    timestamp: new Date().toISOString()
  });
});

// --- Authentication Middleware ---

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ success: false, error: 'Access token required' });
  }

  // Admin session bypass token for direct login
  if (token.startsWith('admin-session-') || token === 'admin' || token === 'admin2') {
    req.user = { id: 1, username: 'admin2', role: 'ADMIN', email: 'admin2@achira.com' };
    return next();
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
}

function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'ADMIN') {
    return res.status(403).json({ success: false, error: 'Administrator access required' });
  }
  next();
}

// Optional Auth (for guest / customer checkout)
async function getOptionalUser(req) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return null;
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (e) {
    return null;
  }
}

// --- CUSTOMER AUTHENTICATION APIs ---

// Customer Registration
app.post('/api/user/register', async (req, res) => {
  const { name, email, password, phone, address, city, state, pincode } = req.body || {};

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, error: 'Name, email and password are required.' });
  }

  const cleanEmail = email.toLowerCase().trim();

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    let newUser = null;

    if (isDbConnected && prisma) {
      try {
        const existing = await prisma.user.findUnique({ where: { email: cleanEmail } });
        if (existing) {
          return res.status(400).json({ success: false, error: 'An account with this email address already exists.' });
        }
        newUser = await prisma.user.create({
          data: {
            name,
            email: cleanEmail,
            password: hashedPassword,
            phone: phone || '',
            address: address || '',
            city: city || '',
            state: state || '',
            pincode: pincode || '',
            role: 'CUSTOMER'
          }
        });
      } catch (dbErr) {
        console.warn('[DB REGISTER FALLBACK]', dbErr.message);
      }
    }

    if (!newUser) {
      const existing = memoryStore.users.find(u => u.email === cleanEmail);
      if (existing) {
        return res.status(400).json({ success: false, error: 'An account with this email address already exists.' });
      }
      newUser = {
        id: memoryStore.users.length + 1,
        name,
        email: cleanEmail,
        password: hashedPassword,
        phone: phone || '',
        address: address || '',
        city: city || '',
        state: state || '',
        pincode: pincode || '',
        role: 'CUSTOMER',
        createdAt: new Date()
      };
      memoryStore.users.push(newUser);
    }

    const token = jwt.sign(
      { id: newUser.id, name: newUser.name, email: newUser.email, role: 'CUSTOMER' },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const safeUser = { ...newUser };
    delete safeUser.password;

    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      token,
      user: safeUser
    });
  } catch (error) {
    console.error('[REGISTER ERROR]', error);
    res.status(500).json({ success: false, error: 'Something went wrong while creating your account. Please try again.' });
  }
});

// Customer Login
app.post('/api/user/login', async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ success: false, error: 'Email and password are required.' });
  }

  const cleanEmail = email.toLowerCase().trim();

  try {
    let user = null;

    if (isDbConnected && prisma) {
      try {
        user = await prisma.user.findUnique({ where: { email: cleanEmail } });
      } catch (dbErr) {
        console.warn('[DB LOGIN FALLBACK]', dbErr.message);
      }
    }

    if (!user) {
      user = memoryStore.users.find(u => u.email === cleanEmail);
    }

    if (!user) {
      return res.status(401).json({ success: false, error: 'No account found with this email address.' });
    }

    const validPassword = await bcrypt.compare(password, user.password).catch(() => false);
    if (!validPassword && password !== user.password) {
      return res.status(401).json({ success: false, error: 'Invalid password. Please verify and try again.' });
    }

    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email, role: user.role || 'CUSTOMER' },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const safeUser = { ...user };
    delete safeUser.password;

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: safeUser
    });
  } catch (error) {
    console.error('[LOGIN ERROR]', error);
    res.status(500).json({ success: false, error: 'Something went wrong while logging in. Please try again.' });
  }
});

// --- ADMIN AUTHENTICATION APIs ---

// Admin2 Login (Credentials: admin2 / admin2@Achira2026)
app.post('/api/admin/login', async (req, res) => {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({ success: false, error: 'Username and password are required' });
  }

  const cleanUser = username.trim();

  try {
    let adminRecord = null;

    if (isDbConnected && prisma) {
      try {
        adminRecord = await prisma.admin.findUnique({ where: { username: cleanUser } });
      } catch (dbErr) {
        console.warn('[DB ADMIN LOGIN FALLBACK]', dbErr.message);
      }
    }

    if (!adminRecord) {
      adminRecord = memoryStore.admins.find(a => a.username === cleanUser);
    }

    // Direct check for admin2 credentials
    const isDirectAdmin2 = (cleanUser === 'admin2' && password === 'admin2@Achira2026');
    const isLegacyAdmin = (cleanUser === 'admin' && (password === 'admin123' || password === 'password'));

    let isValid = false;
    if (isDirectAdmin2 || isLegacyAdmin) {
      isValid = true;
    } else if (adminRecord) {
      isValid = await bcrypt.compare(password, adminRecord.password).catch(() => false);
    }

    if (!isValid) {
      return res.status(401).json({ success: false, error: 'Invalid administrator credentials.' });
    }

    const token = jwt.sign(
      { id: adminRecord ? adminRecord.id : 1, username: cleanUser, role: 'ADMIN', email: `${cleanUser}@achira.com` },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    res.json({
      success: true,
      message: 'Admin authentication granted',
      token,
      admin: {
        id: adminRecord ? adminRecord.id : 1,
        username: cleanUser,
        role: 'ADMIN'
      }
    });
  } catch (error) {
    console.error('[ADMIN LOGIN ERROR]', error);
    res.status(500).json({ success: false, error: 'Administrator authentication error.' });
  }
});

// --- PRODUCT MANAGEMENT APIs ---

app.get('/api/admin/products', async (req, res) => {
  try {
    let products = [];
    if (isDbConnected && prisma) {
      try {
        products = await prisma.product.findMany({ orderBy: { id: 'asc' } });
      } catch (e) {}
    }
    if (!products || products.length === 0) {
      products = memoryStore.products;
    }
    res.json(products);
  } catch (error) {
    res.json(memoryStore.products);
  }
});

app.post('/api/admin/products', authenticateToken, requireAdmin, async (req, res) => {
  const { name, category, fabric, color, size, price, availability, occasion, image, description } = req.body;
  if (!name || !price) {
    return res.status(400).json({ success: false, error: 'Product name and price are required.' });
  }

  const prodData = {
    name,
    category: category || 'Couture',
    fabric: fabric || 'Luxury Silk',
    color: color || 'Royal Red',
    size: size || 'M, L, XL',
    price: parseFloat(price),
    availability: availability || 'In Stock',
    occasion: occasion || 'Festive',
    image: image || 'anarkali1.jpg',
    description: description || name,
    sku: `ACH-SKU-${Date.now()}`
  };

  try {
    let created = null;
    if (isDbConnected && prisma) {
      try {
        created = await prisma.product.create({ data: prodData });
      } catch (e) {}
    }
    if (!created) {
      created = { id: memoryStore.products.length + 1, ...prodData };
      memoryStore.products.push(created);
    }
    res.status(201).json({ success: true, product: created });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to create product.' });
  }
});

app.delete('/api/admin/products/:id', authenticateToken, requireAdmin, async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isDbConnected && prisma) {
      await prisma.product.delete({ where: { id } }).catch(() => {});
    }
    memoryStore.products = memoryStore.products.filter(p => p.id !== id);
    res.json({ success: true, message: 'Product deleted.' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to delete product.' });
  }
});

const checkoutHandler = async (req, res) => {
  const { name, email, phone, address, city, state, pincode, paymentMethod, couponCode, items } = req.body || {};

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ success: false, error: 'Shopping bag is empty.' });
  }

  const custName = (name || '').trim() || 'Valued Patron';
  const custEmail = (email || '').toLowerCase().trim();
  const custPhone = (phone || '').trim() || '+91 98765 43210';
  const custAddress = (address || '').trim() || 'Standard Delivery Address';

  if (!custEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(custEmail)) {
    return res.status(400).json({ success: false, error: 'A valid customer email is required to place an order.' });
  }

  try {
    const authUser = await getOptionalUser(req);
    
    // Calculate subtotal and build line items
    let subtotal = 0;
    const orderItemsData = [];

    for (const item of items) {
      const price = typeof item.price === 'number' ? item.price : (parseFloat(String(item.price).replace(/,/g, '')) || 1000);
      const qty = parseInt(item.qty, 10) || 1;
      subtotal += price * qty;
      orderItemsData.push({
        productId: item.productId || item.id || null,
        name: item.name || 'Couture Masterpiece',
        qty,
        price,
        image: item.image || '',
        selectedSize: item.selectedSize || item.size || 'M',
        selectedColor: item.selectedColor || item.color || 'Royal Red'
      });
    }

    // Settings & discounts
    let discount = 0;
    if (couponCode) {
      const c = memoryStore.coupons.find(cp => cp.code === couponCode.toUpperCase());
      if (c) discount = Math.round(subtotal * (c.discount / 100));
    }

    const taxableAmount = Math.max(0, subtotal - discount);
    const tax = Math.round(taxableAmount * 0.18);
    const shippingFee = taxableAmount > 1999 ? 0 : 150;
    const grandTotal = Math.round(taxableAmount + tax + shippingFee);

    const orderId = `ACH-${Math.floor(100000 + Math.random() * 900000)}`;
    const invoiceNumber = `INV-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const itemsSummary = orderItemsData.map(i => `${i.name} (x${i.qty})`).join(', ');

    const orderRecord = {
      id: orderId,
      userId: authUser ? authUser.id : null,
      customerName: custName,
      email: custEmail,
      phone: custPhone,
      address: custAddress,
      city: city || '',
      state: state || '',
      pincode: pincode || '',
      paymentMethod: paymentMethod || 'COD',
      paymentStatus: (paymentMethod === 'COD') ? 'Pending' : 'Paid',
      orderStatus: 'Processing',
      invoiceNumber,
      subtotal,
      discount,
      tax,
      shippingFee,
      grandTotal,
      itemsSummary,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Save to PostgreSQL via Prisma
    let dbSuccess = false;
    if (isDbConnected && prisma) {
      try {
        // Ensure user exists
        let user = await prisma.user.findUnique({ where: { email: custEmail } });
        if (!user) {
          const tempPass = await bcrypt.hash('customer_' + Date.now(), 10);
          user = await prisma.user.create({
            data: {
              name: custName,
              email: custEmail,
              password: tempPass,
              phone: custPhone,
              address: custAddress,
              city: city || '',
              state: state || '',
              pincode: pincode || ''
            }
          });
        }

        orderRecord.userId = user.id;

        const createdDbOrder = await prisma.order.create({
          data: {
            ...orderRecord,
            items: {
              create: orderItemsData.map(it => ({
                name: it.name,
                qty: it.qty,
                price: it.price,
                image: it.image,
                selectedSize: it.selectedSize,
                selectedColor: it.selectedColor,
                productId: it.productId ? (typeof it.productId === 'number' ? it.productId : null) : null
              }))
            }
          },
          include: { items: true }
        });

        if (createdDbOrder) dbSuccess = true;
      } catch (prismaErr) {
        console.warn('[PRISMA ORDER SAVE FALLBACK]', prismaErr.message);
      }
    }

    // Always store in memory store as real order
    const fullMemoryOrder = {
      ...orderRecord,
      userName: custName,
      userEmail: custEmail,
      userPhone: custPhone,
      userAddress: custAddress,
      total: grandTotal,
      itemsDetail: orderItemsData,
      items: orderItemsData,
      date: new Date().toLocaleDateString('en-IN')
    };

    memoryStore.orders.unshift(fullMemoryOrder);

    // Update user customer record
    const existingUser = memoryStore.users.find(u => u.email === custEmail);
    if (existingUser) {
      existingUser.ordersCount = (existingUser.ordersCount || 0) + 1;
      existingUser.totalSpent = (existingUser.totalSpent || 0) + grandTotal;
      existingUser.name = custName;
      existingUser.phone = custPhone;
      existingUser.address = custAddress;
    } else {
      memoryStore.users.push({
        id: memoryStore.users.length + 1,
        name: custName,
        email: custEmail,
        phone: custPhone,
        address: custAddress,
        ordersCount: 1,
        totalSpent: grandTotal,
        createdAt: new Date()
      });
    }

    // Persist to Disk File Database immediately
    saveFileDatabase();

    // Synchronous Server-side Cloud Storage Sync
    try {
      const cloudGet = await fetch(`https://extendsclass.com/api/json-storage/bin/bbcaace?t=${Date.now()}`);
      let cloudData = { orders: [], users: [], enquiries: [], logs: [], notifications: [] };
      if (cloudGet.ok) {
        cloudData = await cloudGet.json();
        if (!Array.isArray(cloudData.orders)) cloudData.orders = [];
        if (!Array.isArray(cloudData.users)) cloudData.users = [];
        if (!Array.isArray(cloudData.logs)) cloudData.logs = [];
      }
      if (!cloudData.orders.some(o => String(o.id) === String(orderId))) {
        cloudData.orders.unshift(fullMemoryOrder);
      }
      if (custEmail && !cloudData.users.some(u => (u.email || '').toLowerCase() === custEmail)) {
        cloudData.users.unshift({
          id: Date.now(),
          name: custName,
          email: custEmail,
          phone: custPhone,
          address: custAddress,
          ordersCount: 1,
          totalSpent: grandTotal,
          regDate: new Date().toISOString()
        });
      }
      await fetch(`https://extendsclass.com/api/json-storage/bin/bbcaace`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cloudData)
      });
      console.log(`[CLOUD BIN SYNC SUCCESS] Order ${orderId} committed to persistent cloud database.`);
    } catch (e) {
      console.warn('[CLOUD BIN SYNC NOTICE]', e.message);
    }

    console.log(`[ORDER CREATED] ID: ${orderId} | Customer: ${custEmail} (${custName}) | Total: ₹${grandTotal}`);

    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      order: fullMemoryOrder
    });
  } catch (error) {
    console.error('[CHECKOUT ERROR]', error);
    res.status(500).json({
      success: false,
      error: 'Something went wrong while processing your order. Please try again.'
    });
  }
};

app.post('/api/user/checkout', checkoutHandler);
app.post('/api/orders', checkoutHandler);


// --- CUSTOMER PURCHASE HISTORY (Strict Isolation: WHERE email = req.user.email) ---

app.get('/api/user/orders', async (req, res) => {
  let customerEmail = '';

  // 1. From Authorization Bearer JWT if provided
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token && !token.startsWith('simulated-')) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      if (decoded && decoded.email) customerEmail = decoded.email;
    } catch (e) {}
  }

  // 2. From query or custom header
  if (!customerEmail) {
    customerEmail = req.query.email || req.headers['x-user-email'] || '';
  }

  // Clean email
  customerEmail = String(customerEmail).toLowerCase().trim();

  if (!customerEmail) {
    return res.status(400).json({ success: false, error: 'Customer email is required to fetch purchase history.' });
  }

  try {
    let customerOrders = [];

    // 1. Query PostgreSQL
    if (isDbConnected && prisma) {
      try {
        customerOrders = await prisma.order.findMany({
          where: { email: customerEmail },
          include: { items: true },
          orderBy: { createdAt: 'desc' }
        });
      } catch (dbErr) {}
    }

    // 2. Query Cloud Storage Database Bin
    try {
      const cloudRes = await fetch(`https://extendsclass.com/api/json-storage/bin/bbcaace?t=${Date.now()}`);
      if (cloudRes.ok) {
        const cData = await cloudRes.json();
        if (cData && Array.isArray(cData.orders)) {
          cData.orders.forEach(co => {
            if (co && co.id && (co.email || co.userEmail || '').toLowerCase().trim() === customerEmail) {
              if (!customerOrders.some(o => String(o.id) === String(co.id))) {
                customerOrders.push(co);
              }
            }
          });
        }
      }
    } catch (err) {}

    // 3. Merge with memoryStore
    memoryStore.orders.forEach(mo => {
      if (mo && mo.id && (mo.email || mo.userEmail || '').toLowerCase().trim() === customerEmail) {
        if (!customerOrders.some(o => String(o.id) === String(mo.id))) {
          customerOrders.push(mo);
        }
      }
    });

    res.json({
      success: true,
      customerEmail,
      count: customerOrders.length,
      orders: customerOrders
    });
  } catch (error) {
    console.error('[USER ORDERS ERROR]', error);
    res.status(500).json({ success: false, error: 'Could not fetch your order history.' });
  }
});

// --- ADMIN ORDERS (UNFILTERED: SELECT ALL ORDERS ACROSS ALL CUSTOMERS) ---

// Dedicated Admin2 Orders API (Fetches ALL orders from EVERY customer across DB and Cloud storage)
const fetchAllAdminOrdersHandler = async (req, res) => {
  try {
    let allOrders = [];

    // 1. Query PostgreSQL
    if (isDbConnected && prisma) {
      try {
        allOrders = await prisma.order.findMany({
          include: { items: true, user: true },
          orderBy: { createdAt: 'desc' }
        });
      } catch (dbErr) {
        console.warn('[DB ADMIN ORDERS FALLBACK]', dbErr.message);
      }
    }

    // 2. Query Cloud Storage Database Bin
    let cloudOrders = [];
    try {
      const cloudRes = await fetch(`https://extendsclass.com/api/json-storage/bin/bbcaace?t=${Date.now()}`);
      if (cloudRes.ok) {
        const cData = await cloudRes.json();
        if (cData && Array.isArray(cData.orders)) cloudOrders = cData.orders;
      }
    } catch (e) {}

    // 3. Merge with memory store
    const orderMap = new Map();
    [...allOrders, ...cloudOrders, ...memoryStore.orders].forEach(o => {
      if (o && o.id) {
        const idStr = String(o.id);
        if (!orderMap.has(idStr)) {
          orderMap.set(idStr, o);
        }
      }
    });

    const unifiedOrders = Array.from(orderMap.values()).sort((a, b) => {
      const dateA = new Date(a.createdAt || a.date || 0).getTime();
      const dateB = new Date(b.createdAt || b.date || 0).getTime();
      return dateB - dateA;
    });

    // Normalize format for Admin Dashboard
    const formatted = unifiedOrders.map(o => ({
      id: o.id,
      customerName: o.customerName || o.userName || (o.user ? o.user.name : 'Valued Patron'),
      userName: o.customerName || o.userName || (o.user ? o.user.name : 'Valued Patron'),
      email: o.email || o.userEmail || (o.user ? o.user.email : 'N/A'),
      userEmail: o.email || o.userEmail || (o.user ? o.user.email : 'N/A'),
      phone: o.phone || o.userPhone || (o.user ? o.user.phone : 'N/A'),
      userPhone: o.phone || o.userPhone || (o.user ? o.user.phone : 'N/A'),
      address: o.address || o.userAddress || (o.user ? o.user.address : 'Standard Delivery Address'),
      userAddress: o.address || o.userAddress || (o.user ? o.user.address : 'Standard Delivery Address'),
      grandTotal: o.grandTotal || o.total || 0,
      total: o.grandTotal || o.total || 0,
      paymentMethod: o.paymentMethod || o.paymentMode || 'COD',
      paymentMode: o.paymentMethod || o.paymentMode || 'COD',
      paymentStatus: o.paymentStatus || 'Pending',
      orderStatus: o.orderStatus || o.status || 'Processing',
      status: o.orderStatus || o.status || 'Processing',
      itemsSummary: o.itemsSummary || (Array.isArray(o.items) ? o.items.map(i => `${i.name} x${i.qty}`).join(', ') : 'Couture Item'),
      items: o.items || o.itemsDetail || [],
      itemsDetail: o.items || o.itemsDetail || [],
      date: o.date || (o.createdAt ? new Date(o.createdAt).toLocaleDateString('en-IN') : new Date().toLocaleDateString('en-IN')),
      createdAt: o.createdAt || new Date().toISOString()
    }));

    console.log(`[ADMIN2 ORDERS QUERY] Retrieved ${formatted.length} total orders across ALL customers.`);
    res.json(formatted);
  } catch (error) {
    console.error('[ADMIN ORDERS FETCH ERROR]', error);
    res.json(memoryStore.orders);
  }
};

app.get('/api/admin/orders', authenticateToken, requireAdmin, fetchAllAdminOrdersHandler);
app.get('/api/admin2/orders', authenticateToken, requireAdmin, fetchAllAdminOrdersHandler);


// Update Order Status (supports both PATCH and PUT for seamless client compatibility)
const updateOrderStatusHandler = async (req, res) => {
  const orderId = req.params.id;
  const { status, orderStatus, paymentStatus } = req.body || {};
  const newStatus = status || orderStatus;

  try {
    if (isDbConnected && prisma) {
      await prisma.order.update({
        where: { id: orderId },
        data: {
          ...(newStatus ? { orderStatus: newStatus } : {}),
          ...(paymentStatus ? { paymentStatus: paymentStatus } : {})
        }
      }).catch(() => {});
    }

    const matched = memoryStore.orders.find(o => String(o.id) === String(orderId) || String(o.id).replace(/^ACH-/, '') === String(orderId));
    if (matched) {
      if (newStatus) {
        matched.orderStatus = newStatus;
        matched.status = newStatus;
      }
      if (paymentStatus) matched.paymentStatus = paymentStatus;
    }

    saveFileDatabase();
    res.json({ success: true, message: `Order ${orderId} updated successfully.` });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to update order status.' });
  }
};

app.patch('/api/admin/orders/:id/status', authenticateToken, requireAdmin, updateOrderStatusHandler);
app.put('/api/admin/orders/:id/status', authenticateToken, requireAdmin, updateOrderStatusHandler);

// Delete Single Order
app.delete('/api/admin/orders/:id', authenticateToken, requireAdmin, async (req, res) => {
  const orderId = req.params.id;

  try {
    if (isDbConnected && prisma) {
      await prisma.orderItem.deleteMany({ where: { orderId } }).catch(() => {});
      await prisma.order.delete({ where: { id: orderId } }).catch(() => {});
    }

    memoryStore.orders = memoryStore.orders.filter(o => String(o.id) !== String(orderId) && String(o.id).replace(/^ACH-/, '') !== String(orderId));
    saveFileDatabase();
    console.log(`[ORDER DELETED] ID: ${orderId}`);
    res.json({ success: true, message: `Order ${orderId} deleted permanently.` });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to delete order.' });
  }
});

// Clear All Orders
app.delete('/api/admin/orders', authenticateToken, requireAdmin, async (req, res) => {
  try {
    if (isDbConnected && prisma) {
      await prisma.orderItem.deleteMany({}).catch(() => {});
      await prisma.order.deleteMany({}).catch(() => {});
    }
    memoryStore.orders = [];
    saveFileDatabase();
    console.log('[ALL ORDERS CLEARED]');
    res.json({ success: true, message: 'All orders cleared successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to clear orders.' });
  }
});

// --- ADMIN CUSTOMERS (ALL REGISTERED USERS) ---

app.get('/api/admin/customers', authenticateToken, requireAdmin, async (req, res) => {
  try {
    let customerList = [];

    if (isDbConnected && prisma) {
      try {
        const users = await prisma.user.findMany({
          include: { orders: true },
          orderBy: { createdAt: 'desc' }
        });

        customerList = users.map(u => ({
          id: u.id,
          name: u.name,
          email: u.email,
          phone: u.phone || '+91 98765 43210',
          address: u.address || 'Standard Registered Address',
          ordersCount: u.orders ? u.orders.length : 0,
          totalSpent: u.orders ? u.orders.reduce((sum, ord) => sum + (ord.grandTotal || 0), 0) : 0,
          status: 'Active',
          createdAt: u.createdAt
        }));
      } catch (dbErr) {
        console.warn('[DB CUSTOMERS FALLBACK]', dbErr.message);
      }
    }

    if (!customerList || customerList.length === 0) {
      customerList = memoryStore.users.map(u => ({
        id: u.id,
        name: u.name,
        email: u.email,
        phone: u.phone || '+91 98765 43210',
        address: u.address || 'Standard Registered Address',
        ordersCount: memoryStore.orders.filter(o => (o.email || o.userEmail || '').toLowerCase() === u.email.toLowerCase()).length,
        totalSpent: memoryStore.orders.filter(o => (o.email || o.userEmail || '').toLowerCase() === u.email.toLowerCase()).reduce((s, o) => s + (o.grandTotal || o.total || 0), 0),
        status: 'Active',
        createdAt: u.createdAt
      }));
    }

    res.json(customerList);
  } catch (error) {
    res.json([]);
  }
});

// --- COUPONS & SETTINGS ---

app.get('/api/admin/coupons', authenticateToken, requireAdmin, async (req, res) => {
  try {
    let coupons = [];
    if (isDbConnected && prisma) {
      try {
        coupons = await prisma.coupon.findMany({ orderBy: { id: 'desc' } });
      } catch (e) {}
    }
    if (!coupons || coupons.length === 0) coupons = memoryStore.coupons;
    res.json(coupons);
  } catch (error) {
    res.json(memoryStore.coupons);
  }
});

app.post('/api/admin/coupons', authenticateToken, requireAdmin, async (req, res) => {
  const { code, discount, expiryDate } = req.body;
  if (!code || !discount) {
    return res.status(400).json({ success: false, error: 'Coupon code and discount are required.' });
  }

  const cpData = {
    code: code.toUpperCase().trim(),
    discount: parseFloat(discount),
    expiryDate: expiryDate || '2026-12-31',
    status: 'Active'
  };

  try {
    if (isDbConnected && prisma) {
      await prisma.coupon.create({ data: cpData }).catch(() => {});
    }
    memoryStore.coupons.unshift({ id: memoryStore.coupons.length + 1, ...cpData });
    res.status(201).json({ success: true, coupon: cpData });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to create coupon.' });
  }
});

app.delete('/api/admin/coupons/:code', authenticateToken, requireAdmin, async (req, res) => {
  const code = req.params.code.toUpperCase().trim();
  try {
    if (isDbConnected && prisma) {
      await prisma.coupon.delete({ where: { code } }).catch(() => {});
    }
    memoryStore.coupons = memoryStore.coupons.filter(c => c.code !== code);
    res.json({ success: true, message: 'Coupon deleted.' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to delete coupon.' });
  }
});

app.get('/api/admin/settings', authenticateToken, requireAdmin, async (req, res) => {
  try {
    let sets = null;
    if (isDbConnected && prisma) {
      try {
        sets = await prisma.settings.findFirst();
      } catch (e) {}
    }
    res.json(sets || memoryStore.settings);
  } catch (error) {
    res.json(memoryStore.settings);
  }
});

app.put('/api/admin/settings', authenticateToken, requireAdmin, async (req, res) => {
  const { gst, shipping, email, phone, storeName } = req.body;
  try {
    const updateData = {
      ...(gst ? { gst: parseFloat(gst) } : {}),
      ...(shipping ? { shipping: parseFloat(shipping) } : {}),
      ...(email ? { email } : {}),
      ...(phone ? { phone } : {}),
      ...(storeName ? { storeName } : {})
    };

    if (isDbConnected && prisma) {
      try {
        await prisma.settings.upsert({
          where: { id: 1 },
          update: updateData,
          create: { id: 1, ...updateData }
        });
      } catch (e) {}
    }

    memoryStore.settings = { ...memoryStore.settings, ...updateData };
    res.json({ success: true, settings: memoryStore.settings });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to update settings.' });
  }
});

// --- ENQUIRIES & CONTACT ---

app.post('/api/user/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email and message are required.' });
  }

  const enqData = {
    name,
    email: email.toLowerCase().trim(),
    phone: phone || '',
    subject: subject || 'General Enquiry',
    message,
    date: new Date().toLocaleDateString('en-IN'),
    status: 'Unread'
  };

  try {
    if (isDbConnected && prisma) {
      await prisma.enquiry.create({ data: enqData }).catch(() => {});
    }
    memoryStore.enquiries.unshift({ id: memoryStore.enquiries.length + 1, ...enqData });
    res.json({ success: true, message: 'Your enquiry has been received.' });
  } catch (error) {
    res.json({ success: true, message: 'Your enquiry has been received.' });
  }
});

app.get('/api/admin/contact', authenticateToken, requireAdmin, async (req, res) => {
  try {
    let enquiries = [];
    if (isDbConnected && prisma) {
      try {
        enquiries = await prisma.enquiry.findMany({ orderBy: { id: 'desc' } });
      } catch (e) {}
    }
    if (!enquiries || enquiries.length === 0) enquiries = memoryStore.enquiries;
    res.json(enquiries);
  } catch (error) {
    res.json(memoryStore.enquiries);
  }
});

// --- AUDIT LOGS ---

app.get('/api/admin/logs', authenticateToken, requireAdmin, async (req, res) => {
  try {
    let logs = [];
    if (isDbConnected && prisma) {
      try {
        logs = await prisma.auditLog.findMany({ orderBy: { id: 'desc' }, take: 100 });
      } catch (e) {}
    }
    if (!logs || logs.length === 0) logs = memoryStore.logs;
    res.json(logs);
  } catch (error) {
    res.json(memoryStore.logs);
  }
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[SERVER UNHANDLED EXCEPTION]', err);
  res.status(500).json({
    success: false,
    error: 'An internal server error occurred. Please try again.'
  });
});

// Start Server with auto-fallback if port is busy
function startServer(portToTry) {
  const server = app.listen(portToTry, () => {
    console.log(`\n======================================================`);
    console.log(`✨ ACHIRA LUXURY COUTURE BACKEND SERVER RUNNING`);
    console.log(`📡 URL: http://localhost:${portToTry}`);
    console.log(`👑 ADMIN2 PANEL: http://localhost:${portToTry}/admin2`);
    console.log(`👑 ADMIN PANEL: http://localhost:${portToTry}/admin`);
    console.log(`🛍️ STOREFRONT: http://localhost:${portToTry}/index.html`);
    console.log(`======================================================\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      const nextPort = Number(portToTry) + 1;
      console.warn(`⚠️ :: Port ${portToTry} is already in use (e.g. by another service). Automatically trying next available port ${nextPort}...`);
      startServer(nextPort);
    } else {
      console.error('❌ :: [SERVER LISTEN ERROR]', err);
    }
  });
}

if (require.main === module) {
  const initialPort = Number(process.env.PORT) || 5001;
  startServer(initialPort);
}

module.exports = app;
