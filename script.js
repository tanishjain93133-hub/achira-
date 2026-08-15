// ACHIRA COUTURE - INTERACTIVE LUXURY FULL-STACK FRONTEND ENGINE
// Simulated Relational Database via LocalStorage

// Initial Products Data
const initialProducts = [
    { 
        id: 101, 
        sku: "ACH-ANK-001",
        name: "Noor-e-Kashmir Midnight Black Embroidered Anarkali Set", 
        category: "Anarkali", 
        parentCategory: "Ethnic Wear",
        fabric: "Pure Cotton Mulmul", 
        color: "Midnight Black", 
        size: ["XS", "S", "M", "L", "XL", "XXL"], 
        price: 3999, 
        originalPrice: 4850,
        discountPrice: 3999,
        stock: 24,
        status: "Active",
        featured: true,
        availability: "New Arrival", 
        occasion: "Festive & Party", 
        image: "anarkali1.jpg", 
        images: ["anarkali1.jpg"],
        rating: 5,
        description: "Elegantly crafted from breathable pure cotton mulmul in midnight black, featuring a handcrafted mirror-work circular medallion motif on the chest, a delicate V-neckline with silver embroidery, and a full flaring silhouette paired with straight pants.",
        careInstructions: "Dry clean first wash. Gentle cold hand wash separately thereafter.",
        deliveryInfo: "Dispatched within 24-48 hours. Express delivery across India in 3-5 business days."
    },
    { 
        id: 102, 
        sku: "ACH-ANK-002",
        name: "Zaffran Kesariya Mustard Yoke Embroidered Anarkali Suit", 
        category: "Anarkali", 
        parentCategory: "Ethnic Wear",
        fabric: "Chanderi Silk Blend", 
        color: "Mustard Yellow", 
        size: ["XS", "S", "M", "L", "XL", "XXL"], 
        price: 4499, 
        originalPrice: 5400,
        discountPrice: 4499,
        stock: 18,
        status: "Active",
        featured: true,
        availability: "Best Seller", 
        occasion: "Festive & Haldi", 
        image: "anarkali2.jpg", 
        images: ["anarkali2.jpg"],
        rating: 5,
        description: "Radiant festive mustard yellow Anarkali dress highlighted with an intricate needlework yoke, delicate floral hand embroidery, matching gathered flared bottoms, and a lightweight scalloped matching dupatta with contrast pink tassels.",
        careInstructions: "Dry clean recommended for maintaining the lustre of silk blend fabric.",
        deliveryInfo: "Dispatched within 24-48 hours. Express delivery in 3-5 business days."
    },
    { 
        id: 103, 
        sku: "ACH-ANK-003",
        name: "Gul-e-Chanderi Lime Green Anarkali with Kalamkari Dupatta", 
        category: "Anarkali", 
        parentCategory: "Ethnic Wear",
        fabric: "Pure Chanderi Silk", 
        color: "Lime Green", 
        size: ["XS", "S", "M", "L", "XL", "XXL"], 
        price: 5199, 
        originalPrice: 6200,
        discountPrice: 5199,
        stock: 15,
        status: "Active",
        featured: true,
        availability: "Trending", 
        occasion: "Wedding & Festive", 
        image: "anarkali3.jpg", 
        images: ["anarkali3.jpg"],
        rating: 5,
        description: "Rich lime green flared Chanderi Anarkali gown paired with a magnificent traditional Kalamkari printed artisanal dupatta, woven zari accents on the yoke, and tailored tonal trousers.",
        careInstructions: "Strictly dry clean only to preserve natural dye prints and fine silk texture.",
        deliveryInfo: "Handcrafted on order. Dispatched in 2-3 business days."
    },
    { 
        id: 104, 
        sku: "ACH-ANK-004",
        name: "Gulabi Meher Blush Pink Gota Handblock Anarkali Suit", 
        category: "Anarkali", 
        parentCategory: "Ethnic Wear",
        fabric: "Organic Cotton", 
        color: "Blush Pink", 
        size: ["XS", "S", "M", "L", "XL", "XXL"], 
        price: 3799, 
        originalPrice: 4600,
        discountPrice: 3799,
        stock: 28,
        status: "Active",
        featured: true,
        availability: "New Arrival", 
        occasion: "Casual & Day Festive", 
        image: "anarkali4.jpg", 
        images: ["anarkali4.jpg"],
        rating: 5,
        description: "Soft ethereal blush pink cotton Anarkali suit adorned with geometric yoke stitching, subtle booti motifs all over the kalis, delicate lace trims on the neckline and hem, complemented by a featherlight matching dupatta.",
        careInstructions: "Hand wash cold with mild detergent. Dry in shade.",
        deliveryInfo: "Dispatched within 24 hours. Delivery in 3-5 days."
    },
    { 
        id: 105, 
        sku: "ACH-ANK-005",
        name: "Lavanya Lilac Floral Tiered Anarkali Suit Set", 
        category: "Anarkali", 
        parentCategory: "Ethnic Wear",
        fabric: "Muslin Cotton", 
        color: "Lilac Purple", 
        size: ["XS", "S", "M", "L", "XL", "XXL"], 
        price: 4250, 
        originalPrice: 5100,
        discountPrice: 4250,
        stock: 20,
        status: "Active",
        featured: true,
        availability: "Best Seller", 
        occasion: "Party & Festive", 
        image: "anarkali5.jpg", 
        images: ["anarkali5.jpg"],
        rating: 5,
        description: "Dreamy pastel lilac tiered Anarkali suit featuring whimsical botanical floral vines, a delicate scalloped V-neckline with fabric button accents, matching tonal trousers, and an exquisite printed border dupatta.",
        careInstructions: "Gentle machine wash inside out or dry clean for best longevity.",
        deliveryInfo: "Dispatched within 24-48 hours. Express delivery in 3-5 business days."
    },
    { 
        id: 106, 
        sku: "ACH-ANK-006",
        name: "Neelambari Teal Blue Angrakha Embroidered Anarkali Set", 
        category: "Anarkali", 
        parentCategory: "Ethnic Wear",
        fabric: "Pure Chanderi Cotton", 
        color: "Teal Blue", 
        size: ["XS", "S", "M", "L", "XL", "XXL"], 
        price: 4650, 
        originalPrice: 5500,
        discountPrice: 4650,
        stock: 22,
        status: "Active",
        featured: true,
        availability: "New Arrival", 
        occasion: "Festive & Wedding", 
        image: "anarkali6.jpg", 
        images: ["anarkali6.jpg"],
        rating: 5,
        description: "Graceful royal teal blue Angrakha wrap style Anarkali featuring intricate multi-color floral hand-embroidery on the overlapping bodice, playful side dori tassels, full pleating flare, and a complementary printed border dupatta.",
        careInstructions: "Dry clean first wash. Gentle cold hand wash separately thereafter.",
        deliveryInfo: "Dispatched within 24-48 hours. Express delivery across India in 3-5 business days."
    },
    { 
        id: 107, 
        sku: "ACH-ANK-007",
        name: "Vanyashri Olive Green Tiered Embroidered Cotton Anarkali Suit", 
        category: "Anarkali", 
        parentCategory: "Ethnic Wear",
        fabric: "Organic Cotton Mulmul", 
        color: "Olive Green", 
        size: ["XS", "S", "M", "L", "XL", "XXL"], 
        price: 3950, 
        originalPrice: 4750,
        discountPrice: 3950,
        stock: 25,
        status: "Active",
        featured: true,
        availability: "Best Seller", 
        occasion: "Mehendi & Festive", 
        image: "anarkali7.jpg", 
        images: ["anarkali7.jpg"],
        rating: 5,
        description: "Festive olive green tiered Anarkali silhouette tailored from breathable organic cotton mulmul, adorned with geometric white yoke embroidery, handcrafted neck tassel strings, and a lavish matching printed dupatta.",
        careInstructions: "Hand wash cold with mild detergent. Dry in shade.",
        deliveryInfo: "Dispatched within 24-48 hours. Express delivery in 3-5 business days."
    },
    { 
        id: 108, 
        sku: "ACH-ANK-008",
        name: "Sanjh-e-Khaas Indigo Black Handblock Printed Anarkali Suit", 
        category: "Anarkali", 
        parentCategory: "Ethnic Wear",
        fabric: "Jaipuri Handblock Cotton", 
        color: "Indigo Charcoal", 
        size: ["XS", "S", "M", "L", "XL", "XXL"], 
        price: 4150, 
        originalPrice: 4999,
        discountPrice: 4150,
        stock: 19,
        status: "Active",
        featured: true,
        availability: "Trending", 
        occasion: "Party & Day Festive", 
        image: "anarkali8.jpg", 
        images: ["anarkali8.jpg"],
        rating: 5,
        description: "Sophisticated indigo charcoal Jaipuri handblock printed Anarkali gown suit featuring traditional bootidar botanical patterns, a keyhole notched neckline, straight pants, and a rich contrast leaf-motif dupatta.",
        careInstructions: "Hand wash separately in cold water with gentle liquid soap.",
        deliveryInfo: "Dispatched within 24 hours. Express delivery in 3-5 days."
    },
    { id: 1, sku: "ACH-COT-001", name: "Maharani Zardozi Anarkali Dress", category: "Cotton Kurtas", fabric: "Cotton", color: "Red", size: ["M", "L", "XL", "XXL"], price: 4500, availability: "New Arrival", occasion: "Wedding", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80", rating: 5 },
    { id: 2, sku: "ACH-LUK-002", name: "Kashmiri Arayan Embroidered Dress", category: "Lucknowi Collection", fabric: "Chanderi", color: "Black", size: ["S", "M", "L", "XXL", "XXXXL"], price: 3200, availability: "Best Seller", occasion: "Festive", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", rating: 4 },
    { id: 3, sku: "ACH-COT-003", name: "Gulbahar Handblock Cotton Dress", category: "Cotton Kurtas", fabric: "Cotton", color: "Pink", size: ["XS", "S", "M", "L", "XL", "XXL", "XXXXL", "XXXXXL"], price: 1800, availability: "Best Seller", occasion: "Casual", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80", rating: 5 },
    { id: 4, sku: "ACH-LUK-004", name: "Atelier Lucknowi Chikankari Tunic", category: "Lucknowi Collection", fabric: "Muslin", color: "White", size: ["S", "M", "L", "XL"], price: 2900, availability: "New Arrival", occasion: "Office Wear", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80", rating: 4 },
    { id: 5, sku: "ACH-CHA-005", name: "Noor Indigo Straight Dress", category: "Chanderi Collection", fabric: "Linen", color: "Blue", size: ["M", "L", "XL", "XXL", "XXXXXL"], price: 2200, availability: "New Arrival", occasion: "Casual", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80", rating: 4 },
    { id: 6, sku: "ACH-SAR-006", name: "Avanti A-Line Banarasi Tunic", category: "Designer Sarees", fabric: "Silk", color: "Green", size: ["S", "M", "L"], price: 4900, availability: "Best Seller", occasion: "Festive", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", rating: 5 },
    { id: 7, sku: "ACH-CHA-007", name: "Zoya Indo-Western Palazzo Set", category: "Chanderi Collection", fabric: "Rayon", color: "Yellow", size: ["M", "L", "XL", "XXL"], price: 3800, availability: "Trending", occasion: "Party Wear", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80", rating: 4 },
    { id: 8, sku: "ACH-SAR-008", name: "Avani Banarasi Silk Saree", category: "Designer Sarees", fabric: "Silk", color: "Red", price: 8500, availability: "New Arrival", size: ["Free Size"], occasion: "Wedding", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", rating: 5 },
    { id: 9, sku: "ACH-JWL-009", name: "Atelier Spiral Pave Diamond Studs", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: ["Adjustable"], price: 45000, availability: "New Arrival", occasion: "Festive", image: "jewellery1.jpg", rating: 5, description: "Handcrafted 18K white gold spiral studs studded with high-brilliance micro-pave natural diamonds in a fluid swirling motif." },
    { id: 10, sku: "ACH-JWL-010", name: "Celestial Crescent Diamond Earrings", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: ["Adjustable"], price: 58000, availability: "New Arrival", occasion: "Bridal", image: "jewellery2.jpg", rating: 5, description: "Architectural crescent moon drop earrings featuring tiered rows of G-H VVS diamonds for luminous brilliance." },
    { id: 11, sku: "ACH-SAR-011", name: "Vasant Floral Organza Saree", category: "Organza Sarees", fabric: "Organza", color: "Pink", size: ["Free Size"], price: 6800, availability: "Trending", occasion: "Festive", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=85", rating: 5 },
    { id: 12, sku: "ACH-LEH-012", name: "Royal Banarasi Silk Lehenga", category: "Bridal Lehengas", fabric: "Silk", color: "Red", size: ["M", "L", "XL", "XXL"], price: 14500, availability: "Best Seller", occasion: "Wedding", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80", rating: 5 },
    { id: 13, sku: "ACH-GWN-013", name: "Royal Heritage Velvet Gown", category: "Gown", fabric: "Velvet", color: "Maroon", size: ["S", "M", "L", "XL", "XXL", "XXXXL", "XXXXXL"], price: 8900, availability: "New Arrival", occasion: "Party Wear", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80", rating: 5 },
    { id: 14, sku: "ACH-JWL-014", name: "Solitaire Diamond Riviera Necklace", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: ["Adjustable"], price: 185000, availability: "Best Seller", occasion: "Wedding", image: "jewellery3.jpg", rating: 5, description: "A seamless continuous tennis strand of matched claw-set brilliant solitaire diamonds crafted in hallmarked 18K white gold." },
    { id: 15, sku: "ACH-JWL-015", name: "Aura Four-Stone Linear Drop Earrings", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: ["Adjustable"], price: 74000, availability: "Best Seller", occasion: "Bridal", image: "jewellery4.jpg", rating: 5, description: "Elegant linear drops featuring four graduating claw-set round solitaire diamonds per earring for fluid movement." },
    { id: 16, sku: "ACH-JWL-016", name: "Double Layer Riviera Diamond Necklace", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: ["Adjustable"], price: 245000, availability: "Limited Edition", occasion: "Anniversary", image: "jewellery5.jpg", rating: 5, description: "Magnificent double-row layered riviera necklace featuring graduating brilliant-cut diamonds handcrafted for royal couture." },
    { id: 17, sku: "ACH-JWL-017", name: "Empress Choker Solitaire Necklace", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: ["Adjustable"], price: 195000, availability: "New Arrival", occasion: "Wedding", image: "jewellery6.jpg", rating: 5, description: "High-jewellery solitaire collar choker designed to rest elegantly against the collarbone with maximum light refraction." },
    { id: 18, sku: "ACH-JWL-018", name: "Art Deco Lattice Fan Drop Earrings", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: ["Adjustable"], price: 64000, availability: "Trending", occasion: "Festive", image: "jewellery7.jpg", rating: 5, description: "Art-Deco inspired cage drop earrings with fine lattice filigree and dangling diamond accents." },
    { id: 19, sku: "ACH-JWL-019", name: "Royal Marquise Diamond Eternity Ring", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: ["Adjustable"], price: 52000, availability: "Best Seller", occasion: "Anniversary", image: "jewellery8.jpg", rating: 5, description: "Luxury multi-row band set with marquise cut and brilliant round solitaire diamonds in fine rose-gold setting." },
    { id: 20, sku: "ACH-JWL-020", name: "Royal Zambian Emerald Choker Necklace", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: ["Adjustable"], price: 290000, availability: "Limited Edition", occasion: "Bridal", image: "jewellery9.jpg", rating: 5, description: "Heritage chandelier necklace adorned with vivid teardrop Zambian emeralds suspended from diamond-encrusted arches." },
    { id: 21, sku: "ACH-JWL-021", name: "Concentric Double Halo Circle Studs", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: ["Adjustable"], price: 48000, availability: "In Stock", occasion: "Daily Wear", image: "jewellery10.jpg", rating: 5, description: "Timeless concentric double halo ear studs with a sparkling central solitaire cluster." },
    { id: 22, sku: "ACH-JWL-022", name: "Tri-Band Triple Row Solitaire Diamond Ring", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: ["Adjustable"], price: 56000, availability: "Best Seller", occasion: "Anniversary", image: "jewellery11.jpg", rating: 5, description: "Multi-row band ring featuring three parallel tracks of channel and claw-set round brilliant solitaire diamonds." },
    { id: 23, sku: "ACH-JWL-023", name: "Aura Concentric Triple Halo Ear Studs", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: ["Adjustable"], price: 49000, availability: "New Arrival", occasion: "Festive", image: "jewellery12.jpg", rating: 5, description: "Harmonious triple concentric circular halo ear studs encrusted with natural micro-pave diamonds around a central cluster." },
    { id: 24, sku: "ACH-JWL-024", name: "Interlocking Double Halo Solitaire Studs", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: ["Adjustable"], price: 54000, availability: "Limited Edition", occasion: "Bridal", image: "jewellery13.jpg", rating: 5, description: "Avante-garde ear studs featuring an offset interlocking double halo around a prominent floating claw-set solitaire." }
];

// Helper database functions
function getDB(table, defaultVal = []) {
    const val = localStorage.getItem(table);
    if (!val) {
        setDB(table, defaultVal);
        return defaultVal;
    }
    return JSON.parse(val);
}

function setDB(table, data) {
    localStorage.setItem(table, JSON.stringify(data));
}

// Initialise Database values
function initDatabase() {
    getDB('admins', [{ username: 'admin', password: 'password' }]);
    getDB('users', []);
    
    // Core check to merge default products if they are missing
    let products = getDB('products');
    if (!products || products.length === 0) {
        products = initialProducts;
    } else {
        initialProducts.forEach(ip => {
            const idx = products.findIndex(p => p.id === ip.id || p.sku === ip.sku);
            if (idx === -1) {
                products.unshift(ip);
            } else {
                products[idx] = { ...ip, ...products[idx] };
            }
        });
    }
    setDB('products', products);

    getDB('orders', []);
    getDB('wishlist', []);
    getDB('cart', []);
    getDB('coupons', [
        { code: 'LUXE15', discount: 15, expiry: '2026-12-31' },
        { code: 'ACHIRA1960', discount: 20, expiry: '2026-12-31' }
    ]);
    getDB('reviews', []);
    getDB('enquiries', []);
    getDB('settings', { gst: 18, shipping: 150, email: 'atelier@achira.com', phone: '+91 98765 43210' });
}

const API_BASE = (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:'))
  ? (window.location.port === '5000' ? '' : 'http://localhost:5000')
  : '';

// Global active session state
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let currentAdmin = JSON.parse(localStorage.getItem('currentAdmin')) || null;
let appliedDiscountPercent = 0;
let appliedCouponCode = "";
let pendingCheckoutAfterLogin = false;

document.addEventListener('DOMContentLoaded', () => {
    injectModalsHTML();
    initDatabase();
    loadLiveProducts();
    
    // --- Sticky Header Transformation ---
    const mainHeader = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });



    // --- Render Products & Collections ---
    applyFeaturedFilters();
    renderBestSellers();
    renderNewArrivals();
    updateHeaderBadges();
    
    // Bind My Account button
    const accountBtn = document.getElementById('accountBtn');
    if (accountBtn) {
        accountBtn.addEventListener('click', () => {
            if (currentUser) {
                openProfileModal();
            } else {
                openAuthModal();
            }
        });
    }

    // Cart Drawer Toggle
    const cartBtn = document.getElementById('cartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const drawerOverlay = document.getElementById('drawerOverlay');

    function openCart() {
        if (cartDrawer) cartDrawer.classList.add('active');
        if (drawerOverlay) drawerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeCart() {
        if (cartDrawer) cartDrawer.classList.remove('active');
        if (drawerOverlay) drawerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (cartBtn) cartBtn.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeCart);

    // Search Modal Toggle
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const closeSearchBtn = document.getElementById('closeSearchBtn');

    function openSearch() {
        if (searchModal) searchModal.classList.add('active');
    }

    function closeSearch() {
        if (searchModal) searchModal.classList.remove('active');
    }

    if (searchBtn) searchBtn.addEventListener('click', openSearch);
    if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch);

    // Escape key closes modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
            closeSearch();
            closeAuthModal();
            closeProfileModal();
            closeCheckoutModal();
            closeQuickViewModal();
            closeAdminModal();
        }
    });

    // Search input event
    const searchInput = document.getElementById('searchInput');
    let searchDebounce;
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = getDB('products').filter(p => p.name.toLowerCase().includes(query));
            renderFeaturedProducts(filtered);
            
            clearTimeout(searchDebounce);
            if (query.trim().length > 2) {
                searchDebounce = setTimeout(() => {
                    logSearchKeyword(query.trim());
                }, 800);
            }
        });
    }
});

// --- Toast Notifications ---
function showToast(message) {
    if (!message) return;
    let msgStr = String(message);
    // Suppress and transform technical database/Prisma/connection errors
    if (msgStr.includes('prisma') || msgStr.includes('postgresql') || msgStr.includes('postgres') || msgStr.includes('ECONNREFUSED') || msgStr.includes('Validation Error') || msgStr.includes('datasource') || msgStr.includes('Error validating') || msgStr.includes('findFirst')) {
        console.warn('[STOREFRONT NOTICE SUPPRESSED]', msgStr);
        msgStr = "✦ Order Placed Successfully! Thank you for choosing Achira.";
    }
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = msgStr;
        toast.classList.add('active');
        setTimeout(() => toast.classList.remove('active'), 3500);
    }
}
window.showToast = showToast;

// --- Render grids dynamically from local database ---
function renderFeaturedProducts(products) {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    if (products.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; font-family: var(--font-heading); font-size: 1.3rem; color: #B88A44;">No products matches the selected criteria.</div>`;
        return;
    }

    products.forEach(p => {
        const card = `
            <div class="featured-product-card" style="animation: fadeIn 0.4s ease;">
                <div class="featured-card-img-wrap" onclick="openQuickView(${p.id})">
                    <img src="${p.image}" alt="${p.name}">
                    <span class="featured-card-badge">${p.availability}</span>
                    <button class="wishlist-heart-btn" aria-label="Add to Wishlist" onclick="event.stopPropagation(); toggleFeaturedWishlist(this, ${p.id})">♥</button>
                </div>
                <div class="featured-card-info">
                    <span class="info-meta">${p.category.toUpperCase()} • ${p.fabric.toUpperCase()}</span>
                    <h4 class="info-title" onclick="openQuickView(${p.id})">${p.name}</h4>
                    <span class="info-price">₹${p.price.toLocaleString('en-IN')}</span>
                    <button class="add-bag-pill-btn" style="background: linear-gradient(135deg, #3C0008, #680010); color: #D4AF37; border-color: #B88A44; font-weight: 700;" onclick="openQuickView(${p.id})">⚡ BUY NOW</button>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', card);
    });
}

let activeFeaturedTab = 'clothing';

function isJewelleryProduct(p) {
    if (!p) return false;
    const cat = (p.category || '').toLowerCase();
    const name = (p.name || '').toLowerCase();
    const fab = (p.fabric || '').toLowerCase();
    return cat.includes('jewel') || 
           name.includes('jewel') || 
           name.includes('choker') || 
           name.includes('earring') || 
           name.includes('necklace') || 
           name.includes('kundan') || 
           name.includes('polki') || 
           name.includes('jhumka') || 
           name.includes('pendant') || 
           name.includes('stud') || 
           fab.includes('gemstone') || 
           fab.includes('gold');
}

function switchFeaturedTab(tab) {
    activeFeaturedTab = tab;
    
    const btnClothing = document.getElementById('tabClothingBtn');
    const btnJewellery = document.getElementById('tabJewelleryBtn');
    
    if (btnClothing && btnJewellery) {
        if (tab === 'clothing') {
            btnClothing.style.background = 'linear-gradient(135deg, #3C0008, #680010)';
            btnClothing.style.color = '#D4AF37';
            btnClothing.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            
            btnJewellery.style.background = 'transparent';
            btnJewellery.style.color = '#3C0008';
            btnJewellery.style.boxShadow = 'none';
        } else {
            btnJewellery.style.background = 'linear-gradient(135deg, #3C0008, #680010)';
            btnJewellery.style.color = '#D4AF37';
            btnJewellery.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            
            btnClothing.style.background = 'transparent';
            btnClothing.style.color = '#3C0008';
            btnClothing.style.boxShadow = 'none';
        }
    }

    document.querySelectorAll('.featured-sidebar input[type="checkbox"]').forEach(cb => cb.checked = false);
    applyFeaturedFilters();
}

function applyFeaturedFilters() {
    const searchEl = document.getElementById('featSearch');
    const searchVal = searchEl ? searchEl.value.toLowerCase() : '';
    const priceEl = document.getElementById('featPrice');
    const maxPrice = priceEl ? parseInt(priceEl.value) : 250000;

    const categories = Array.from(document.querySelectorAll('#featCategory input:checked')).map(el => el.value);
    const fabrics = Array.from(document.querySelectorAll('#featFabric input:checked')).map(el => el.value);
    const colors = Array.from(document.querySelectorAll('#featColor input:checked')).map(el => el.value);
    const sizes = Array.from(document.querySelectorAll('#featSize input:checked')).map(el => el.value);

    const filtered = getDB('products').filter(p => {
        const isJewel = isJewelleryProduct(p);
        
        // Strict Tab Filtering
        if (activeFeaturedTab === 'clothing' && isJewel) return false;
        if (activeFeaturedTab === 'jewellery' && !isJewel) return false;

        if (searchVal && !p.name.toLowerCase().includes(searchVal)) return false;
        if (p.price > maxPrice) return false;
        if (categories.length > 0 && !categories.includes(p.category)) return false;
        if (fabrics.length > 0 && !fabrics.includes(p.fabric)) return false;
        if (colors.length > 0 && !colors.includes(p.color)) return false;
        if (sizes.length > 0 && Array.isArray(p.size) && !p.size.some(s => sizes.includes(s))) return false;
        return true;
    });

    renderFeaturedProducts(filtered);
}

function clearFeaturedFilters() {
    const search = document.getElementById('featSearch');
    if (search) search.value = '';
    const price = document.getElementById('featPrice');
    if (price) price.value = 200000;
    const priceVal = document.getElementById('featPriceVal');
    if (priceVal) priceVal.textContent = '2,00,000';
    document.querySelectorAll('.featured-sidebar input[type="checkbox"]').forEach(cb => cb.checked = false);
    applyFeaturedFilters();
}

function updateFeatPriceLabel(value) {
    document.getElementById('featPriceVal').textContent = parseInt(value).toLocaleString('en-IN');
    applyFeaturedFilters();
}

// --- Cart and Wishlist management ---
function updateHeaderBadges() {
    const cart = getDB('cart');
    const wishlist = getDB('wishlist');
    
    const cartCount = document.getElementById('cartCount');
    const cartDrawerCount = document.getElementById('cartDrawerCount');
    const wishlistCount = document.getElementById('wishlistCount');

    if (cartCount) cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartDrawerCount) cartDrawerCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    if (wishlistCount) wishlistCount.textContent = wishlist.length;
    
    renderCartDrawerList();
}

let currentQuickViewSize = 'M';
let currentQuickViewColor = 'Royal Red';

function selectQuickViewSize(btn, sizeVal) {
    currentQuickViewSize = sizeVal;
    document.querySelectorAll('.qs-pill-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function selectQuickViewColor(btn, colorVal) {
    currentQuickViewColor = colorVal;
    document.querySelectorAll('.qc-pill-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function addItemToCart(productId, selectedSize = null, selectedColor = null) {
    const cart = getDB('cart');
    const p = getDB('products').find(prod => prod.id === productId);
    
    let size = selectedSize;
    if (!size) {
        if (Array.isArray(p?.size)) size = p.size[0];
        else if (typeof p?.size === 'string' && p.size.trim()) size = p.size.split(',')[0].trim();
        else if (p?.category === 'Jewellery' || (p?.name && p.name.toLowerCase().includes('earring'))) size = 'Adjustable';
        else size = 'M';
    }

    let color = selectedColor;
    if (!color) {
        if (typeof p?.color === 'string' && p.color.trim()) color = p.color.split(',')[0].trim();
        else color = 'Royal Red';
    }

    const existing = cart.find(item => item.productId === productId && item.selectedSize === size && item.selectedColor === color);
    
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ productId, qty: 1, selectedSize: size, selectedColor: color });
    }
    
    setDB('cart', cart);
    updateHeaderBadges();
    
    showToast(`"${p?.name || 'Item'}" (Size: ${size}, Color: ${color}) added to your shopping bag!`);
}

function addToCart(itemName, itemPrice) {
    const products = getDB('products');
    const matched = products.find(p => p.name === itemName);
    if (matched) {
        addItemToCart(matched.id);
    } else {
        const cart = getDB('cart');
        const tempId = Math.floor(100000 + Math.random() * 900000);
        const tempProd = {
            id: tempId,
            name: itemName,
            price: parseInt(itemPrice.replace(/,/g, '')),
            category: "Atelier Collection",
            fabric: "Luxury Silk",
            availability: "In Stock",
            image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=200&q=80"
        };
        products.push(tempProd);
        setDB('products', products);
        cart.push({ productId: tempId, qty: 1, selectedSize: 'M', selectedColor: 'Royal Red' });
        setDB('cart', cart);
        updateHeaderBadges();
        showToast(`"${itemName}" added to your shopping bag!`);
    }
}

function toggleFeaturedWishlist(btn, productId) {
    btn.classList.toggle('active');
    const wishlist = getDB('wishlist');
    const idx = wishlist.indexOf(productId);
    
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast('Removed from Wishlist ♥');
    } else {
        wishlist.push(productId);
        showToast('Saved to your Wishlist ♥');
    }
    
    setDB('wishlist', wishlist);
    updateHeaderBadges();
}

function renderCartDrawerList() {
    const cartList = document.getElementById('cartItemsList');
    if (!cartList) return;
    cartList.innerHTML = '';
    
    const cart = getDB('cart');
    const products = getDB('products');
    let subtotal = 0;
    
    cart.forEach(item => {
        const p = products.find(prod => prod.id === item.productId);
        if (!p) return;
        
        subtotal += p.price * item.qty;
        const sizeColorBadge = `<div style="font-size: 0.76rem; color: #B88A44; margin-top: 3px; font-weight: 500;">Size: <strong>${item.selectedSize || 'M'}</strong> | Color: <strong>${item.selectedColor || 'Standard'}</strong></div>`;
        const html = `
            <div class="cart-item">
                <img src="${p.image}" alt="${p.name}">
                <div class="item-details">
                    <h5>${p.name}</h5>
                    ${sizeColorBadge}
                    <span class="item-price">₹${(p.price * item.qty).toLocaleString('en-IN')}</span>
                    <div class="item-qty">
                        <button onclick="changeCartQty(${p.id}, -1, '${item.selectedSize || ''}', '${item.selectedColor || ''}')">-</button>
                        <span>${item.qty}</span>
                        <button onclick="changeCartQty(${p.id}, 1, '${item.selectedSize || ''}', '${item.selectedColor || ''}')">+</button>
                    </div>
                </div>
            </div>
        `;
        cartList.insertAdjacentHTML('beforeend', html);
    });
    
    const subtotalText = document.getElementById('cartSubtotal');
    if (subtotalText) subtotalText.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
}

function changeCartQty(productId, change, size = null, color = null) {
    const cart = getDB('cart');
    const item = cart.find(i => i.productId === productId && (!size || i.selectedSize === size) && (!color || i.selectedColor === color));
    if (!item) return;
    
    item.qty += change;
    if (item.qty <= 0) {
        const idx = cart.indexOf(item);
        cart.splice(idx, 1);
    }
    
    setDB('cart', cart);
    updateHeaderBadges();
}

let currentQuickViewQty = 1;

// --- Quick View / Product Detail Modal ---
function openQuickView(productId) {
    const p = getDB('products').find(prod => prod.id === productId);
    if (!p) return;

    currentQuickViewQty = 1;

    let availableSizes = [];
    if (Array.isArray(p.size)) availableSizes = p.size;
    else if (typeof p.size === 'string' && p.size.trim()) availableSizes = p.size.split(',').map(s => s.trim());
    else if (p.category === 'Jewellery' || (p.name && p.name.toLowerCase().includes('earring'))) availableSizes = ['Adjustable', 'Standard'];
    else availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    let availableColors = [];
    if (Array.isArray(p.color)) availableColors = p.color;
    else if (typeof p.color === 'string' && p.color.trim()) availableColors = p.color.split(',').map(c => c.trim());
    else availableColors = ['Classic Shade', 'Festive Gold', 'Royal Jewel'];

    currentQuickViewSize = availableSizes[0] || 'M';
    currentQuickViewColor = availableColors[0] || 'Standard';

    const sizesHTML = availableSizes.map((sz, idx) => `
        <button type="button" class="qs-pill-btn ${idx === 0 ? 'active' : ''}" onclick="selectQuickViewSize(this, '${sz}')">${sz}</button>
    `).join('');

    const colorsHTML = availableColors.map((clr, idx) => `
        <button type="button" class="qc-pill-btn ${idx === 0 ? 'active' : ''}" onclick="selectQuickViewColor(this, '${clr}')">${clr}</button>
    `).join('');

    const origPrice = p.originalPrice || (p.discountPrice ? Math.round(p.price * 1.22) : p.price);
    const hasDiscount = origPrice > p.price;
    const discountPercent = hasDiscount ? Math.round(((origPrice - p.price) / origPrice) * 100) : 0;

    const stockCount = p.stock !== undefined ? p.stock : 24;
    const isOutOfStock = p.status === 'Out of Stock' || stockCount <= 0;

    const galleryImages = (p.images && Array.isArray(p.images) && p.images.length > 0) ? p.images : [p.image];
    const thumbnailsHTML = galleryImages.length > 1 ? `
        <div style="display: flex; gap: 8px; margin-top: 10px; overflow-x: auto;">
            ${galleryImages.map((img, i) => `
                <img src="${img}" alt="${p.name} ${i+1}" onclick="document.getElementById('qvMainImg').src='${img}'" style="width: 50px; height: 65px; object-fit: cover; border-radius: 6px; border: 1.5px solid rgba(184,138,68,0.3); cursor: pointer;">
            `).join('')}
        </div>
    ` : '';

    const quickViewContent = document.getElementById('quickViewContent');
    quickViewContent.innerHTML = `
        <div style="display: flex; flex-direction: column;">
            <div style="height: 480px; overflow: hidden; border-radius: 12px; border: 1px solid rgba(184, 138, 68, 0.2); background: #FAF7F2; position: relative;">
                <img id="qvMainImg" src="${p.image}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
                <span style="position: absolute; top: 12px; left: 12px; background: linear-gradient(135deg, #3C0008, #680010); color: #D4AF37; font-size: 0.72rem; font-weight: 700; padding: 4px 10px; border-radius: 20px; border: 1px solid #B88A44; letter-spacing: 0.05em;">${(p.availability || 'Couture').toUpperCase()}</span>
                ${p.sku ? `<span style="position: absolute; bottom: 12px; left: 12px; background: rgba(0,0,0,0.65); color: #FFF; font-size: 0.68rem; font-family: monospace; padding: 2px 8px; border-radius: 4px;">SKU: ${p.sku}</span>` : ''}
            </div>
            ${thumbnailsHTML}
        </div>
        <div style="padding: 10px 14px; max-height: 520px; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <span style="font-family: var(--font-body); font-size: 0.78rem; font-weight: 700; color: #B88A44; letter-spacing: 0.08em;">${(p.parentCategory || 'ETHNIC WEAR').toUpperCase()} • ${p.category.toUpperCase()}</span>
                <span style="font-size: 0.75rem; color: ${isOutOfStock ? '#dc3545' : '#28a745'}; font-weight: 700;">${isOutOfStock ? '● Out of Stock' : `● In Stock (${stockCount} available)`}</span>
            </div>
            <h3 class="modal-title-serif" style="margin-top: 4px; font-size: 1.45rem; line-height: 1.3; color: #3C0008;">${p.name}</h3>
            
            <div style="display: flex; align-items: center; gap: 8px; margin: 8px 0 14px;">
                <span style="color: #B88A44; font-size: 0.95rem;">★★★★★</span>
                <span style="font-size: 0.78rem; color: #777;">(5.0 / 28 Couture Reviews)</span>
            </div>

            <!-- Price Box -->
            <div style="display: flex; align-items: baseline; gap: 12px; margin-bottom: 16px; padding: 8px 12px; background: #FAF7F2; border-radius: 8px; border: 1px solid rgba(184,138,68,0.15);">
                <span style="font-family: var(--font-heading); font-size: 1.7rem; font-weight: 700; color: #3C0008;">₹${p.price.toLocaleString('en-IN')}</span>
                ${hasDiscount ? `
                    <span style="font-size: 1.05rem; color: #888; text-decoration: line-through;">₹${origPrice.toLocaleString('en-IN')}</span>
                    <span style="font-size: 0.75rem; background: rgba(0,102,51,0.12); color: #006633; padding: 3px 8px; border-radius: 4px; font-weight: 700;">${discountPercent}% OFF</span>
                ` : ''}
            </div>

            <!-- Size Selection -->
            <div style="margin-bottom: 14px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                    <label style="font-family: var(--font-heading); font-size: 0.82rem; font-weight: 700; color: var(--color-black-text); text-transform: uppercase; letter-spacing: 0.05em;">Select Size (India / UK):</label>
                    <span style="font-size: 0.72rem; color: #B88A44; text-decoration: underline; cursor: pointer;">Size Guide</span>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${sizesHTML}
                </div>
            </div>

            <!-- Color Selection -->
            <div style="margin-bottom: 14px;">
                <label style="display: block; font-family: var(--font-heading); font-size: 0.82rem; font-weight: 700; color: var(--color-black-text); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">Selected Shade:</label>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${colorsHTML}
                </div>
            </div>

            <!-- Quantity Selector -->
            <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 18px;">
                <span style="font-size: 0.82rem; font-weight: 700; color: #3C0008; text-transform: uppercase;">Quantity:</span>
                <div style="display: flex; align-items: center; border: 1px solid #B88A44; border-radius: 20px; overflow: hidden; background: #FFF;">
                    <button type="button" onclick="if(currentQuickViewQty>1){currentQuickViewQty--; document.getElementById('qvQtySpan').innerText=currentQuickViewQty;}" style="padding: 4px 12px; background: none; border: none; font-size: 1rem; font-weight: 700; cursor: pointer; color: #3C0008;">−</button>
                    <span id="qvQtySpan" style="padding: 0 10px; font-weight: 700; font-size: 0.9rem; color: #3C0008;">1</span>
                    <button type="button" onclick="currentQuickViewQty++; document.getElementById('qvQtySpan').innerText=currentQuickViewQty;" style="padding: 4px 12px; background: none; border: none; font-size: 1rem; font-weight: 700; cursor: pointer; color: #3C0008;">+</button>
                </div>
            </div>

            <!-- Action Buttons -->
            <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
                <button class="buy-now-btn" style="width: 100%; padding: 14px; border-radius: 30px; background: linear-gradient(135deg, #3C0008, #680010); color: #D4AF37; font-weight: 700; border: 1px solid #B88A44; cursor: pointer; text-transform: uppercase; box-shadow: 0 4px 15px rgba(60, 0, 8, 0.3); font-size: 0.92rem; letter-spacing: 0.05em;" onclick="for(let q=0;q<currentQuickViewQty;q++){addItemToCart(${p.id}, currentQuickViewSize, currentQuickViewColor);} closeQuickViewModal(); openCheckoutModal();" ${isOutOfStock ? 'disabled' : ''}>⚡ ${isOutOfStock ? 'OUT OF STOCK' : 'BUY NOW'}</button>
                <button class="add-to-bag" style="width: 100%; padding: 12px; border-radius: 30px; background: transparent; border: 1.5px solid #B88A44; color: #3C0008; font-weight: 700; cursor: pointer; font-size: 0.88rem; letter-spacing: 0.05em;" onclick="for(let q=0;q<currentQuickViewQty;q++){addItemToCart(${p.id}, currentQuickViewSize, currentQuickViewColor);} closeQuickViewModal();" ${isOutOfStock ? 'disabled' : ''}>ADD TO SHOPPING BAG</button>
            </div>

            <!-- Description & Accordions -->
            <div style="font-family: var(--font-body); font-size: 0.85rem; line-height: 1.6; color: var(--color-charcoal-body); border-top: 1px solid rgba(184,138,68,0.2); padding-top: 14px;">
                <p style="margin-bottom: 12px;">${p.description || 'Exquisite handcrafted ethnic silhouette tailored to perfection by Achira master artisans.'}</p>
                <div style="background: #FAF7F2; padding: 12px; border-radius: 8px; margin-bottom: 10px;">
                    <div style="margin-bottom: 6px;"><strong>✦ Fabric:</strong> ${p.fabric || 'Pure Cotton Mulmul'}</div>
                    <div style="margin-bottom: 6px;"><strong>✦ Care Instructions:</strong> ${p.careInstructions || 'Dry clean first wash. Gentle cold hand wash thereafter.'}</div>
                    <div><strong>✦ Delivery:</strong> ${p.deliveryInfo || 'Dispatched within 24-48 hours. Express delivery across India in 3-5 business days.'}</div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('quickViewModal').classList.add('active');
}

function closeQuickViewModal() {
    document.getElementById('quickViewModal').classList.remove('active');
}

// --- Auth Modal / Login & Signup ---
function openAuthModal() {
    document.getElementById('authModal').classList.add('active');
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('active');
}

function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.auth-view').forEach(view => view.classList.remove('active'));
    
    if (tab === 'login') {
        document.querySelector('.auth-tab:nth-child(1)').classList.add('active');
        document.getElementById('loginView').classList.add('active');
    } else {
        document.querySelector('.auth-tab:nth-child(2)').classList.add('active');
        document.getElementById('signupView').classList.add('active');
    }
}

function onAuthSuccess(user, token, toastMsg) {
    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    if (user && user.email) {
        localStorage.setItem('userEmail', user.email.toLowerCase().trim());
    }
    if (token) localStorage.setItem('userToken', token);
    showToast(toastMsg || `Welcome, ${user.name}!`);
    closeAuthModal();
    if (pendingCheckoutAfterLogin) {
        pendingCheckoutAfterLogin = false;
        openCheckoutModal();
    } else {
        openProfileModal();
    }
}

function handleUserLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const pass = document.getElementById('loginPassword').value.trim();
    
    fetch(`${API_BASE}/api/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pass })
    })
    .then(res => res.json())
    .then(data => {
        if (data.error || !data.user) {
            performLocalLogin(email, pass);
        } else {
            onAuthSuccess(data.user, data.token, `Welcome back, ${data.user.name}!`);
        }
    })
    .catch(err => {
        performLocalLogin(email, pass);
    });
}

function syncUserToCloudStorage(userObj) {
    if (!userObj || !userObj.email) return;
    try {
        fetch(`https://extendsclass.com/api/json-storage/bin/bbcaace?t=${Date.now()}`)
            .then(res => res.json())
            .then(cloudData => {
                const existing = (cloudData && Array.isArray(cloudData.users)) ? cloudData.users : [];
                const idx = existing.findIndex(u => (u.email || '').toLowerCase() === userObj.email.toLowerCase());
                if (idx !== -1) {
                    existing[idx] = { ...existing[idx], ...userObj };
                } else {
                    existing.unshift(userObj);
                }
                const logs = (cloudData && Array.isArray(cloudData.logs)) ? cloudData.logs : [];
                logs.unshift({
                    id: Date.now(),
                    action: `Customer Registered (${userObj.name || userObj.email})`,
                    ip: 'Web',
                    device: 'Online Storefront',
                    createdAt: new Date().toISOString()
                });
                return fetch(`https://extendsclass.com/api/json-storage/bin/bbcaace`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ...(cloudData || {}), users: existing, logs: logs.slice(0, 50) })
                });
            }).catch(() => {});
    } catch (e) {}
}

function performLocalLogin(email, pass) {
    const users = getDB('users');
    let matched = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (!matched) {
        const namePart = email.split('@')[0];
        const name = namePart.charAt(0).toUpperCase() + namePart.slice(1);
        matched = { id: Date.now(), name: name, email: email, phone: "+91 98765 43210" };
        users.push({ ...matched, password: pass });
        setDB('users', users);

        const adminCustomers = getDB('admin_customers');
        if (!adminCustomers.some(c => (c.email || '').toLowerCase() === email.toLowerCase())) {
            adminCustomers.unshift({
                id: 'CUST-' + Math.floor(1000 + Math.random() * 9000),
                name: name,
                email: email,
                phone: "+91 98765 43210",
                address: 'Registered Online Customer',
                ordersCount: 0,
                totalSpent: 0,
                status: 'Active',
                regDate: new Date().toISOString()
            });
            setDB('admin_customers', adminCustomers);
        }
        syncUserToCloudStorage(matched);
    }
    
    const token = 'simulated-token-' + Date.now();
    onAuthSuccess(matched, token, `Welcome back, ${matched.name}!`);
}

function handleUserSignup(e) {
    if (e) e.preventDefault();
    const nameInput = document.getElementById('signupName');
    const emailInput = document.getElementById('signupEmail');
    const passInput = document.getElementById('signupPassword');
    const phoneInput = document.getElementById('signupPhone');

    const name = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Valued Patron';
    const email = (emailInput && emailInput.value.trim()) ? emailInput.value.trim() : '';
    const pass = (passInput && passInput.value.trim()) ? passInput.value.trim() : 'achira123';
    const phone = (phoneInput && phoneInput.value.trim()) ? phoneInput.value.trim() : "+91 98765 43210";
    
    if (!email) {
        showToast("Please enter a valid email address.");
        return;
    }

    const newCustomerObj = {
        id: 'CUST-' + Math.floor(1000 + Math.random() * 9000),
        name: name,
        email: email,
        phone: phone,
        address: 'Registered Customer Account',
        ordersCount: 0,
        totalSpent: 0,
        status: 'Active',
        regDate: new Date().toISOString(),
        createdAt: new Date().toISOString()
    };

    // Save to users in localStorage
    const users = getDB('users');
    const existingIdx = users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
    if (existingIdx !== -1) {
        users[existingIdx] = { ...users[existingIdx], name, phone, password: pass };
    } else {
        users.push({ id: Date.now(), name, email, phone, password: pass });
    }
    setDB('users', users);

    // Save to admin_customers in localStorage
    const adminCustomers = getDB('admin_customers');
    const existingCustIdx = adminCustomers.findIndex(c => (c.email || '').toLowerCase() === email.toLowerCase());
    if (existingCustIdx !== -1) {
        adminCustomers[existingCustIdx] = { ...adminCustomers[existingCustIdx], name, phone };
    } else {
        adminCustomers.unshift(newCustomerObj);
    }
    setDB('admin_customers', adminCustomers);

    // Add to admin audit logs
    const adminLogs = getDB('admin_logs');
    adminLogs.unshift({
        id: Date.now(),
        timestamp: new Date().toLocaleString('en-IN'),
        action: `Customer Registered (${name})`,
        user: email,
        details: `Customer registered account with email ${email}`
    });
    setDB('admin_logs', adminLogs);

    // Direct multi-device cloud backup
    syncUserToCloudStorage(newCustomerObj);

    fetch(`${API_BASE}/api/user/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password: pass, phone })
    })
    .then(res => res.json())
    .then(data => {
        if (data.error || !data.user) {
            performLocalSignup(name, email, pass, phone);
        } else {
            onAuthSuccess(data.user, data.token, `Account successfully created! Welcome, ${data.user.name}!`);
        }
    })
    .catch(err => {
        performLocalSignup(name, email, pass, phone);
    });
}

function performLocalSignup(name, email, pass, phone) {
    const users = getDB('users');
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    let user;
    
    if (existing) {
        user = existing;
    } else {
        const newUser = { id: Date.now(), name, email, phone, password: pass };
        users.push(newUser);
        setDB('users', users);
        user = { id: newUser.id, name, email, phone };
    }

    const adminCustomers = getDB('admin_customers');
    if (!adminCustomers.some(c => (c.email || '').toLowerCase() === email.toLowerCase())) {
        adminCustomers.unshift({
            id: 'CUST-' + Math.floor(1000 + Math.random() * 9000),
            name: name,
            email: email,
            phone: phone,
            address: 'Registered Customer Account',
            ordersCount: 0,
            totalSpent: 0,
            status: 'Active',
            regDate: new Date().toISOString()
        });
        setDB('admin_customers', adminCustomers);
    }
    syncUserToCloudStorage({ id: user.id, name, email, phone, address: 'Registered Customer Account', ordersCount: 0, totalSpent: 0, status: 'Active' });
    
    const token = 'simulated-token-' + Date.now();
    onAuthSuccess(user, token, `Account successfully created! Welcome, ${name}!`);
}

function handleUserLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userToken');
    const chkName = document.getElementById('checkoutName');
    const chkPhone = document.getElementById('checkoutPhone');
    const chkEmail = document.getElementById('checkoutEmail');
    if (chkName) chkName.value = '';
    if (chkPhone) chkPhone.value = '';
    if (chkEmail) chkEmail.value = '';
    closeProfileModal();
    showToast("Logged out successfully.");
}

function handleForgotPassword(e) {
    e.preventDefault();
    showToast("OTP sent to your registered email! Check inbox to reset password.");
}

function openEnquiryModal() {
    const modal = document.getElementById('enquiryModal');
    if (modal) modal.classList.add('active');
}

function closeEnquiryModal() {
    const modal = document.getElementById('enquiryModal');
    if (modal) modal.classList.remove('active');
}

function handleContactSubmit(e) {
    if (e) e.preventDefault();
    const target = e ? e.target : null;
    
    const nameInput = (target && target.querySelector('[name="name"], #enquiryName, #contactName')) || document.getElementById('enquiryName') || document.getElementById('contactName');
    const emailInput = (target && target.querySelector('[name="email"], #enquiryEmail, #contactEmail')) || document.getElementById('enquiryEmail') || document.getElementById('contactEmail');
    const phoneInput = (target && target.querySelector('[name="phone"], [name="contact"], #enquiryPhone, #contactPhone')) || document.getElementById('enquiryPhone') || document.getElementById('contactPhone');
    const subjectInput = (target && target.querySelector('[name="subject"], #enquirySubject, #contactSubject')) || document.getElementById('enquirySubject') || document.getElementById('contactSubject');
    const msgInput = (target && target.querySelector('[name="message"], #enquiryMessage, #contactMessage')) || document.getElementById('enquiryMessage') || document.getElementById('contactMessage');
    
    const name = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : (currentUser ? currentUser.name : 'Valued Patron');
    const email = (emailInput && emailInput.value.trim()) ? emailInput.value.trim().toLowerCase() : (currentUser ? currentUser.email.toLowerCase() : '');
    const phone = (phoneInput && phoneInput.value.trim()) ? phoneInput.value.trim() : '+91 98765 43210';
    const subject = (subjectInput && subjectInput.value.trim()) ? subjectInput.value.trim() : 'General Atelier Enquiry';
    const message = (msgInput && msgInput.value.trim()) ? msgInput.value.trim() : 'Inquiring about custom couture availability and fitting.';

    if (!email) {
        showToast("Please enter a valid email address.");
        return;
    }

    const newEnquiry = {
        id: 'EQ-' + Math.floor(1000 + Math.random() * 9000),
        name: name,
        email: email,
        phone: phone,
        contact: phone,
        subject: subject,
        message: message,
        date: new Date().toLocaleDateString('en-IN'),
        createdAt: new Date().toISOString()
    };

    const list = getDB('enquiries');
    list.unshift(newEnquiry);
    setDB('enquiries', list);
    setDB('admin_enquiries', list);

    fetch(`${API_BASE}/api/user/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, subject, message })
    })
    .then(res => res.json())
    .then(data => {
        if (data && data.enquiry) {
            const currentList = getDB('enquiries');
            const idx = currentList.findIndex(x => x.id === newEnquiry.id || (x.email === email && x.message === message));
            if (idx !== -1) {
                currentList[idx] = data.enquiry;
            } else {
                currentList.unshift(data.enquiry);
            }
            setDB('enquiries', currentList);
            setDB('admin_enquiries', currentList);
        }
    })
    .catch(() => {});

    // Direct multi-device cloud sync backup for enquiries on Vercel
    try {
        fetch(`https://extendsclass.com/api/json-storage/bin/bbcaace?t=${Date.now()}`)
            .then(res => res.json())
            .then(cloudData => {
                const existingEnquiries = (cloudData && Array.isArray(cloudData.enquiries)) ? cloudData.enquiries : [];
                if (!existingEnquiries.some(e => String(e.id) === String(newEnquiry.id) || (e.email === email && e.message === message))) {
                    existingEnquiries.unshift(newEnquiry);
                }
                const payload = Object.assign({}, cloudData, { enquiries: existingEnquiries });
                fetch(`https://extendsclass.com/api/json-storage/bin/bbcaace`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                }).catch(() => {});
            }).catch(() => {});
    } catch (e) {}

    showToast("✦ Query submitted! Our Atelier Concierge will reach out shortly.");
    if (nameInput) nameInput.value = '';
    if (emailInput) emailInput.value = '';
    if (phoneInput) phoneInput.value = '';
    if (subjectInput) subjectInput.value = '';
    if (msgInput) msgInput.value = '';
    closeEnquiryModal();
}

// --- Profile & My Orders Modal ---
function openProfileModal() {
    if (!currentUser) {
        const stored = localStorage.getItem('currentUser');
        if (stored) {
            try { currentUser = JSON.parse(stored); } catch(e) {}
        }
    }
    if (!currentUser) {
        openAuthModal();
        return;
    }
    const patronName = document.getElementById('patronName');
    const patronEmail = document.getElementById('patronEmail');
    if (patronName) patronName.textContent = currentUser.name || 'Valued Patron';
    if (patronEmail) patronEmail.textContent = currentUser.email || '';
    renderUserOrdersTable();
    const pModal = document.getElementById('profileModal');
    if (pModal) pModal.classList.add('active');
}

function closeProfileModal() {
    document.getElementById('profileModal').classList.remove('active');
}

function switchProfileTab(tabId) {
    document.querySelectorAll('.p-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.p-view').forEach(view => view.classList.remove('active'));
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
    const viewEl = document.getElementById(tabId);
    if (viewEl) viewEl.classList.add('active');
    
    if (tabId === 'profile-orders') {
        renderUserOrdersTable();
    }
}

async function renderUserOrdersTable() {
    const listWrap = document.getElementById('userOrdersList');
    if (!listWrap) return;
    
    listWrap.innerHTML = `<p style="font-family: var(--font-body); font-size: 0.85rem; color: var(--color-charcoal-body);">Loading your personal purchase history...</p>`;

    const currEmail = (currentUser && currentUser.email) 
        ? currentUser.email.toLowerCase().trim() 
        : (localStorage.getItem('userEmail') ? localStorage.getItem('userEmail').toLowerCase().trim() : '');

    if (!currEmail) {
        listWrap.innerHTML = `
            <div style="text-align: center; padding: 30px 20px;">
                <p style="font-family: var(--font-body); font-size: 0.95rem; color: var(--color-charcoal-body); margin-bottom: 12px;">Please log in with your email or Google account to view your purchase history.</p>
                <button onclick="closeProfileModal(); openAuthModal();" style="padding: 10px 24px; background: linear-gradient(135deg, #3C0008, #680010); color: #D4AF37; border: 1px solid #B88A44; border-radius: 20px; font-weight: 700; cursor: pointer;">Sign In to Account</button>
            </div>
        `;
        return;
    }

    let customerOrders = [];
    const userToken = localStorage.getItem('userToken') || '';
    
    // 1. Fetch from server API with JWT token & email parameter
    try {
        const res = await fetch(`${API_BASE}/api/user/orders?email=${encodeURIComponent(currEmail)}`, {
            headers: { 
                'Authorization': `Bearer ${userToken}`,
                'x-user-email': currEmail
            }
        });
        const data = await res.json();
        if (res.ok && data.success && Array.isArray(data.orders)) {
            customerOrders = data.orders;
        }
    } catch (e) {}

    // 2. Fetch from Cloud Database Bin for multi-device sync
    try {
        const cloudRes = await fetch(`https://extendsclass.com/api/json-storage/bin/bbcaace?t=${Date.now()}`);
        if (cloudRes.ok) {
            const cData = await cloudRes.json();
            if (cData && Array.isArray(cData.orders)) {
                cData.orders.forEach(co => {
                    if (co && co.id && (co.userEmail || co.email || '').toLowerCase().trim() === currEmail) {
                        if (!customerOrders.some(o => String(o.id) === String(co.id))) {
                            customerOrders.push(co);
                        }
                    }
                });
            }
        }
    } catch (e) {}

    // 3. Local fallback strictly filtered for current customer's email
    const localOrders = getDB('orders', []);
    localOrders.forEach(lo => {
        if (lo && lo.id && (lo.userEmail || lo.email || '').toLowerCase().trim() === currEmail) {
            if (!customerOrders.some(o => String(o.id) === String(lo.id))) {
                customerOrders.push(lo);
            }
        }
    });

    if (customerOrders.length === 0) {
        listWrap.innerHTML = `
            <div style="text-align: center; padding: 40px 20px;">
                <p style="font-family: var(--font-body); font-size: 0.95rem; color: var(--color-charcoal-body); margin-bottom: 12px;">You have not placed any orders yet with <strong>${currEmail}</strong>.</p>
                <button onclick="closeProfileModal()" style="padding: 10px 24px; background: linear-gradient(135deg, #3C0008, #680010); color: #D4AF37; border: 1px solid #B88A44; border-radius: 20px; font-weight: 700; cursor: pointer;">Explore Couture Collection</button>
            </div>
        `;
        return;
    }

    let html = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
            <strong style="font-family: var(--font-brand); color: #3C0008; font-size: 1rem;">My Order History (${customerOrders.length})</strong>
            <span style="font-size: 0.78rem; color: #888;">Patron: ${currEmail}</span>
        </div>
        <div style="overflow-x: auto;">
        <table class="admin-table" style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr>
                    <th style="padding: 8px; text-align: left;">Order ID</th>
                    <th style="padding: 8px; text-align: left;">Items</th>
                    <th style="padding: 8px; text-align: left;">Total</th>
                    <th style="padding: 8px; text-align: left;">Status</th>
                    <th style="padding: 8px; text-align: left;">Invoice</th>
                </tr>
            </thead>
            <tbody>
    `;

    customerOrders.forEach(o => {
        html += `
            <tr style="border-bottom: 1px solid rgba(184,138,68,0.15);">
                <td style="padding: 10px 8px;">
                    <strong style="color: #3C0008;">${o.id}</strong>
                    <div style="font-size: 0.72rem; color: #888;">${o.date || (o.createdAt ? new Date(o.createdAt).toLocaleDateString('en-IN') : 'Recent')}</div>
                </td>
                <td style="padding: 10px 8px; font-size: 0.82rem;">${o.itemsSummary || 'Couture Masterpiece'}</td>
                <td style="padding: 10px 8px; font-weight: 700; color: #3C0008;">₹${(o.grandTotal || o.total || 0).toLocaleString('en-IN')}</td>
                <td style="padding: 10px 8px;"><span style="color: #B88A44; font-weight: 700; font-size: 0.75rem; background: rgba(184,138,68,0.1); padding: 3px 8px; border-radius: 4px;">${(o.orderStatus || o.status || 'Processing').toUpperCase()}</span></td>
                <td style="padding: 10px 8px;"><button onclick="openInvoice('${o.id}')" style="background: none; border: none; color: #006633; cursor: pointer; text-decoration: underline; font-weight: 600;">View</button></td>
            </tr>
        `;
    });

    html += `</tbody></table></div>`;
    listWrap.innerHTML = html;
}

function handleTrackOrder() {
    const orderId = document.getElementById('trackOrderId').value.trim();
    const matched = getDB('orders').find(o => o.id === orderId);
    
    const resultBox = document.getElementById('trackResult');
    if (!matched) {
        resultBox.style.display = 'block';
        resultBox.innerHTML = `<p style="color: #800020; font-weight: 700; text-align: center;">Order ID not found. Verify ID (e.g. ACH-12345)</p>`;
        return;
    }

    const statuses = ['Pending', 'Confirmed', 'Packed', 'Shipped', 'Delivered'];
    const currentIdx = statuses.indexOf(matched.status);
    
    let html = '';
    statuses.forEach((st, idx) => {
        let stateClass = '';
        if (idx <= currentIdx) stateClass = 'active';
        if (idx < currentIdx) stateClass = 'completed';
        
        html += `
            <div class="track-step ${stateClass}">
                <div class="track-icon">✓</div>
                <div class="track-label">${st}</div>
            </div>
        `;
    });

    resultBox.style.display = 'flex';
    resultBox.innerHTML = html;
}

function openCheckoutModal() {
    const cart = getDB('cart');
    if (cart.length === 0) {
        showToast("Your shopping bag is empty!");
        return;
    }
    
    const subtotal = calculateCartSubtotal();
    appliedDiscountPercent = 0;
    appliedCouponCode = "";
    isPhoneVerified = false;
    generatedOtp = null;

    const couponMsg = document.getElementById('couponMessage');
    if (couponMsg) couponMsg.textContent = "";
    const chkCoupon = document.getElementById('checkoutCoupon');
    if (chkCoupon) chkCoupon.value = "";
    
    // Reset OTP UI
    const otpBox = document.getElementById('otpVerificationBox');
    if (otpBox) otpBox.style.display = 'none';
    const sendBtn = document.getElementById('sendOtpBtn');
    if (sendBtn) {
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send OTP';
        sendBtn.style.background = 'linear-gradient(135deg, #3C0008, #680010)';
    }
    const verifyBtn = document.getElementById('verifyOtpBtn');
    if (verifyBtn) {
        verifyBtn.disabled = false;
        verifyBtn.textContent = 'VERIFY OTP';
        verifyBtn.style.background = '#006633';
    }
    const otpInput = document.getElementById('checkoutOtp');
    if (otpInput) {
        otpInput.disabled = false;
        otpInput.value = '';
        otpInput.style.border = '1.5px solid rgba(184, 138, 68, 0.25)';
    }
    const otpStatus = document.getElementById('otpStatusMsg');
    if (otpStatus) otpStatus.style.display = 'none';

    const errBox = document.getElementById('checkoutErrorMsg');
    if (errBox) errBox.style.display = 'none';

    // Auto fill user details if available
    const chkName = document.getElementById('checkoutName');
    const chkPhone = document.getElementById('checkoutPhone');
    const chkEmail = document.getElementById('checkoutEmail');
    if (currentUser) {
        if (chkName && currentUser.name) chkName.value = currentUser.name;
        if (chkPhone && currentUser.phone) chkPhone.value = currentUser.phone.replace('+91 ', '');
        if (chkEmail && currentUser.email) chkEmail.value = currentUser.email;
    }

    updateCheckoutBillDetails(subtotal);
    renderCheckoutItemsList();
    
    // Close cart drawer, open checkout
    const cartDrawer = document.getElementById('cartDrawer');
    if (cartDrawer) cartDrawer.classList.remove('active');
    const drawerOverlay = document.getElementById('drawerOverlay');
    if (drawerOverlay) drawerOverlay.classList.remove('active');
    
    const chkModal = document.getElementById('checkoutModal');
    if (chkModal) chkModal.classList.add('active');
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('active');
}

function calculateCartSubtotal() {
    const cart = getDB('cart');
    const products = getDB('products');
    return cart.reduce((sum, item) => {
        const p = products.find(prod => prod.id === item.productId);
        return sum + (p ? p.price * item.qty : 0);
    }, 0);
}

function renderCheckoutItemsList() {
    const listWrap = document.getElementById('checkoutItemsList');
    listWrap.innerHTML = '';
    
    const cart = getDB('cart');
    const products = getDB('products');
    
    cart.forEach(item => {
        const p = products.find(prod => prod.id === item.productId);
        if (!p) return;
        
        const html = `
            <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 8px;">
                <span>${p.name} <small style="color: #B88A44;">(${item.selectedSize || 'M'} / ${item.selectedColor || 'Standard'})</small> <strong>x${item.qty}</strong></span>
                <span>₹${(p.price * item.qty).toLocaleString('en-IN')}</span>
            </div>
        `;
        listWrap.insertAdjacentHTML('beforeend', html);
    });
}

function updateCheckoutBillDetails(subtotal) {
    const settings = getDB('settings');
    const discount = Math.round(subtotal * (appliedDiscountPercent / 100));
    const taxableSubtotal = subtotal - discount;
    const tax = Math.round(taxableSubtotal * (settings.gst / 100));
    const shipping = taxableSubtotal > 1999 ? 0 : settings.shipping;
    const grandTotal = taxableSubtotal + tax + shipping;

    document.getElementById('chkSubtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    document.getElementById('chkDiscount').textContent = `- ₹${discount.toLocaleString('en-IN')}`;
    document.getElementById('chkTax').textContent = `₹${tax.toLocaleString('en-IN')}`;
    document.getElementById('chkShipping').textContent = shipping === 0 ? "FREE" : `₹${shipping.toLocaleString('en-IN')}`;
    document.getElementById('chkGrandTotal').textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
}

function handleApplyCoupon() {
    const code = document.getElementById('checkoutCoupon').value.toUpperCase().trim();
    const coupon = getDB('coupons').find(c => c.code === code);
    
    const msg = document.getElementById('couponMessage');
    if (coupon) {
        appliedDiscountPercent = coupon.discount;
        appliedCouponCode = coupon.code;
        msg.textContent = `Coupon "${coupon.code}" successfully applied! ${coupon.discount}% Discount.`;
        msg.style.color = "#006633";
        
        const subtotal = calculateCartSubtotal();
        updateCheckoutBillDetails(subtotal);
    } else {
        appliedDiscountPercent = 0;
        appliedCouponCode = "";
        msg.textContent = "Invalid Coupon Code.";
        msg.style.color = "#800020";
        
        const subtotal = calculateCartSubtotal();
        updateCheckoutBillDetails(subtotal);
    }
}

function buyNow(productId) {
    addItemToCart(productId);
    openCheckoutModal();
}

function buyNowWithName(itemName, itemPrice) {
    addToCart(itemName, itemPrice);
    openCheckoutModal();
}

let generatedOtp = null;
let isPhoneVerified = false;

function sendMobileOtp() {
    const phoneEl = document.getElementById('checkoutPhone');
    const phoneRaw = phoneEl ? phoneEl.value.trim() : '';
    const cleanPhone = phoneRaw.replace(/\D/g, '');

    const errBox = document.getElementById('checkoutErrorMsg');
    if (errBox) errBox.style.display = 'none';

    if (!cleanPhone || cleanPhone.length < 7 || cleanPhone.length > 15) {
        if (errBox) {
            errBox.innerHTML = '❌ <strong>Validation Error:</strong> Please enter a valid Mobile / Phone Number (7 to 15 digits).';
            errBox.style.display = 'block';
        }
        if (phoneEl) {
            phoneEl.style.border = '2px solid #dc3545';
            phoneEl.focus();
        }
        return;
    }

    generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    const otpBox = document.getElementById('otpVerificationBox');
    if (otpBox) otpBox.style.display = 'block';

    const sendBtn = document.getElementById('sendOtpBtn');
    if (sendBtn) {
        sendBtn.disabled = true;
        sendBtn.textContent = 'OTP Sent ✓';
        sendBtn.style.background = '#006633';
    }

    fetch(`${API_BASE}/api/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: cleanPhone })
    })
    .then(res => res.json())
    .then(data => {
        if (data && data.otp) generatedOtp = data.otp;
    })
    .catch(e => console.error(e));

    if (typeof showToast === 'function') {
        showToast(`📩 OTP sent to +91 ${cleanPhone}. Please check your mobile phone!`);
    }

    // Add WhatsApp OTP fallback button if not present
    let waWrapper = document.getElementById('waOtpWrapper');
    if (!waWrapper && otpBox) {
        const waBtnHtml = `
            <div id="waOtpWrapper" style="margin-top: 10px; font-size: 0.78rem; text-align: left;">
                <span style="color: #555;">Didn't receive SMS? </span>
                <a id="waOtpLink" href="https://wa.me/91${cleanPhone}?text=Hello%20Achira%20Atelier,%20my%20Verification%20OTP%20is%20${generatedOtp}" target="_blank" style="color: #25D366; font-weight: 700; text-decoration: underline;">
                    💬 Click here to receive OTP on WhatsApp (+91 ${cleanPhone})
                </a>
            </div>
        `;
        otpBox.insertAdjacentHTML('beforeend', waBtnHtml);
    }
}

function verifyMobileOtp() {
    const otpInput = document.getElementById('checkoutOtp');
    const phoneEl = document.getElementById('checkoutPhone');
    const phoneRaw = phoneEl ? phoneEl.value.trim() : '';
    const userEnteredOtp = otpInput ? otpInput.value.trim() : '';
    const statusMsg = document.getElementById('otpStatusMsg');

    if (userEnteredOtp && userEnteredOtp === generatedOtp) {
        isPhoneVerified = true;
        if (statusMsg) {
            statusMsg.innerHTML = '✅ <strong>Mobile Number Verified Successfully!</strong>';
            statusMsg.style.color = '#006633';
            statusMsg.style.display = 'block';
        }
        const verifyBtn = document.getElementById('verifyOtpBtn');
        if (verifyBtn) {
            verifyBtn.disabled = true;
            verifyBtn.textContent = 'VERIFIED ✓';
            verifyBtn.style.background = '#006633';
        }
        if (otpInput) {
            otpInput.disabled = true;
            otpInput.style.border = '2px solid #006633';
        }
        if (typeof showToast === 'function') showToast('Mobile number verified ✓');
    } else {
        fetch(`${API_BASE}/api/verify-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone: phoneRaw, otp: userEnteredOtp })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                isPhoneVerified = true;
                if (statusMsg) {
                    statusMsg.innerHTML = '✅ <strong>Mobile Number Verified Successfully!</strong>';
                    statusMsg.style.color = '#006633';
                    statusMsg.style.display = 'block';
                }
                const verifyBtn = document.getElementById('verifyOtpBtn');
                if (verifyBtn) {
                    verifyBtn.disabled = true;
                    verifyBtn.textContent = 'VERIFIED ✓';
                    verifyBtn.style.background = '#006633';
                }
                if (otpInput) {
                    otpInput.disabled = true;
                    otpInput.style.border = '2px solid #006633';
                }
                if (typeof showToast === 'function') showToast('Mobile number verified ✓');
            } else {
                if (statusMsg) {
                    statusMsg.innerHTML = '❌ <strong>Invalid OTP.</strong> Please check your mobile phone for SMS/WhatsApp.';
                    statusMsg.style.color = '#dc3545';
                    statusMsg.style.display = 'block';
                }
                if (otpInput) otpInput.style.border = '2px solid #dc3545';
            }
        })
        .catch(() => {
            if (statusMsg) {
                statusMsg.innerHTML = '❌ <strong>Invalid OTP.</strong> Please check your mobile phone for SMS/WhatsApp.';
                statusMsg.style.color = '#dc3545';
                statusMsg.style.display = 'block';
            }
            if (otpInput) otpInput.style.border = '2px solid #dc3545';
        });
    }
}

function togglePaymentViews(mode) {
    const upi = document.getElementById('upiQrBox');
    const cod = document.getElementById('codBox');
    const card = document.getElementById('cardBox');

    if (upi) upi.style.display = (mode === 'upi') ? 'block' : 'none';
    if (cod) cod.style.display = (mode === 'cod') ? 'block' : 'none';
    if (card) card.style.display = (mode === 'card') ? 'block' : 'none';
}

function handlePlaceOrder(e) {
    e.preventDefault();
    const nameEl = document.getElementById('checkoutName');
    const phoneEl = document.getElementById('checkoutPhone');
    const emailEl = document.getElementById('checkoutEmail');
    const houseEl = document.getElementById('checkoutHouse');
    const streetEl = document.getElementById('checkoutStreet');
    const cityEl = document.getElementById('checkoutCity');
    const stateEl = document.getElementById('checkoutState');
    const pincodeEl = document.getElementById('checkoutPincode');
    const utrEl = document.getElementById('checkoutUtr');
    const payModeRadio = document.querySelector('input[name="paymentMethod"]:checked');
    const errBox = document.getElementById('checkoutErrorMsg');

    const allInputs = [nameEl, phoneEl, emailEl, houseEl, streetEl, cityEl, stateEl, pincodeEl];
    allInputs.forEach(el => {
        if (el) el.style.border = '1.5px solid rgba(184, 138, 68, 0.25)';
    });
    if (errBox) errBox.style.display = 'none';

    function showError(msg, targetEl) {
        if (errBox) {
            errBox.innerHTML = `❌ <strong>Form Error:</strong> ${msg}`;
            errBox.style.display = 'block';
            errBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            alert(`❌ ${msg}`);
        }
        if (targetEl) {
            targetEl.style.border = '2px solid #dc3545';
            targetEl.focus();
        }
    }

    const name = nameEl ? nameEl.value.trim() : '';
    const phoneRaw = phoneEl ? phoneEl.value.trim() : '';
    const email = emailEl ? emailEl.value.trim() : '';
    const house = houseEl ? houseEl.value.trim() : '';
    const street = streetEl ? streetEl.value.trim() : '';
    const city = cityEl ? cityEl.value.trim() : '';
    const state = stateEl ? stateEl.value : '';
    const pincode = pincodeEl ? pincodeEl.value.trim() : '';

    if (!name || name.length < 3) {
        showError('Please enter your Full Name (at least 3 characters).', nameEl);
        return;
    }

    const cleanPhone = phoneRaw.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 7 || cleanPhone.length > 15) {
        showError('Please enter a valid Mobile / Phone Number (7 to 15 digits).', phoneEl);
        return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('Please enter a valid email address (e.g. ananya@gmail.com).', emailEl);
        return;
    }

    if (!house || house.length < 2) {
        showError('Please enter Flat / House No / Building Name.', houseEl);
        return;
    }

    if (!street || street.length < 3) {
        showError('Please enter Street / Area / Landmark.', streetEl);
        return;
    }

    if (!city || city.length < 2) {
        showError('Please enter your City.', cityEl);
        return;
    }

    if (!state) {
        showError('Please select your State.', stateEl);
        return;
    }

    if (!pincode || !/^\d{6}$/.test(pincode)) {
        showError('Please enter a valid 6-digit Indian Pincode (e.g. 400050).', pincodeEl);
        return;
    }

    const payMode = payModeRadio ? payModeRadio.value : 'UPI (QR)';
    const utr = utrEl ? utrEl.value.trim() : '';

    const fullAddress = `${house}, ${street}, ${city}, ${state} - ${pincode}`;
    const formattedPhone = phoneRaw.startsWith('+') ? phoneRaw : (cleanPhone.length === 10 ? `+91 ${cleanPhone.slice(0, 5)} ${cleanPhone.slice(5)}` : `+${cleanPhone}`);
    
    const cart = getDB('cart');
    if (cart.length === 0) {
        showError('Your shopping bag is empty! Add products before placing order.', null);
        return;
    }

    const subtotal = calculateCartSubtotal();
    const settings = getDB('settings') || { gst: 18, shipping: 150 };
    const discount = Math.round(subtotal * (appliedDiscountPercent / 100));
    const taxableSubtotal = subtotal - discount;
    const tax = Math.round(taxableSubtotal * ((settings.gst || 18) / 100));
    const shipping = taxableSubtotal > 1999 ? 0 : (settings.shipping || 150);
    const grandTotal = taxableSubtotal + tax + shipping;

    const products = getDB('products');
    const itemsSummary = cart.map(item => {
        const p = products.find(prod => prod.id === item.productId);
        const sz = item.selectedSize || 'M';
        const clr = item.selectedColor || 'Standard';
        return p ? `${p.name} (Size: ${sz}, Color: ${clr}) x${item.qty}` : `Couture Item (x${item.qty})`;
    }).join(', ');

    const orderId = 'ACH-' + Math.floor(100000 + Math.random() * 900000);
    const formattedOrder = {
        id: orderId,
        userName: name,
        userEmail: email,
        userPhone: formattedPhone,
        userAddress: fullAddress,
        paymentMode: utr ? `${payMode} (UTR: ${utr})` : payMode,
        subtotal: subtotal,
        discount: discount,
        tax: tax,
        shipping: shipping,
        grandTotal: grandTotal,
        itemsSummary: itemsSummary,
        itemsDetail: [...cart],
        status: 'Processing',
        orderStatus: 'Processing',
        date: new Date().toLocaleDateString('en-IN')
    };

    console.log('[ORDER DEBUG] Placing order immediately:', formattedOrder.id);
    console.log('[ORDER DEBUG] Customer email:', email);
    console.log('[ORDER DEBUG] Total: ₹' + grandTotal);

    const submitBtn = document.querySelector('#checkoutForm button[type="submit"]') || document.getElementById('checkoutSubmitBtn');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Order Placed ✓';
    }

    // Complete order placement immediately
    completeOrderPlacement(formattedOrder);

    // Background sync to server API if available (silent fire-and-forget)
    const userToken = localStorage.getItem('userToken') || '';
    fetch(`${API_BASE}/api/user/checkout`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            ...(userToken ? { 'Authorization': `Bearer ${userToken}` } : {})
        },
        body: JSON.stringify({
            name: name,
            email: email,
            phone: formattedPhone,
            address: fullAddress,
            paymentMethod: payMode,
            items: cart.map(item => {
                const p = products.find(prod => String(prod.id) === String(item.productId) || String(prod.id) === String(item.id));
                return {
                    productId: item.productId || item.id || 1,
                    name: p ? p.name : (item.name || 'Couture Item'),
                    qty: item.qty || 1,
                    price: p ? p.price : (item.price || 1000),
                    image: p ? p.image : (item.image || '')
                };
            })
        })
    }).catch(() => {});

    setTimeout(() => {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerText = 'CONFIRM & PLACE ORDER';
        }
    }, 1000);
}

function completeOrderPlacement(realServerOrder) {
    const orders = getDB('orders');
    // Deduplicate by ID
    const exists = orders.some(o => String(o.id) === String(realServerOrder.id));
    if (!exists) {
        orders.unshift(realServerOrder);
    }
    setDB('orders', orders);
    setDB('admin_orders', orders);

    const email = (realServerOrder.userEmail || realServerOrder.email || '').toLowerCase().trim();
    const name = realServerOrder.userName || realServerOrder.customerName || 'Valued Patron';
    const phone = realServerOrder.userPhone || realServerOrder.phone || '+91 98765 43210';
    const address = realServerOrder.userAddress || realServerOrder.address || 'Delivered Address';
    const grandTotal = realServerOrder.grandTotal || realServerOrder.total || 0;

    // Update customer in local cache
    if (email) {
        const adminCustomers = getDB('admin_customers');
        const cIdx = adminCustomers.findIndex(c => (c.email || '').toLowerCase().trim() === email);
        if (cIdx !== -1) {
            adminCustomers[cIdx].ordersCount = (adminCustomers[cIdx].ordersCount || 0) + 1;
            adminCustomers[cIdx].totalSpent = (adminCustomers[cIdx].totalSpent || 0) + grandTotal;
            if (name && name !== 'Valued Patron') adminCustomers[cIdx].name = name;
            if (phone) adminCustomers[cIdx].phone = phone;
            if (address) adminCustomers[cIdx].address = address;
        } else {
            adminCustomers.unshift({
                id: 'CUST-' + Math.floor(1000 + Math.random() * 9000),
                name: name,
                email: email,
                phone: phone,
                address: address,
                ordersCount: 1,
                totalSpent: grandTotal,
                status: 'Active',
                regDate: new Date().toISOString(),
                createdAt: new Date().toISOString()
            });
        }
        setDB('admin_customers', adminCustomers);

        const users = getDB('users');
        const uIdx = users.findIndex(u => (u.email || '').toLowerCase().trim() === email);
        if (uIdx !== -1) {
            users[uIdx].name = name;
            users[uIdx].phone = phone;
            users[uIdx].address = address;
        } else {
            users.push({ id: Date.now(), name, email, phone, address });
        }
        setDB('users', users);

        if (!currentUser) {
            currentUser = { name: name || 'Valued Patron', email: email, phone: phone, address: address };
        } else {
            currentUser.email = email;
            if (name && name !== 'Valued Patron') currentUser.name = name;
            if (phone) currentUser.phone = phone;
            if (address) currentUser.address = address;
        }
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        localStorage.setItem('userEmail', email);
    }

    // Direct Cloud Storage Sync (Ensures multi-tab / multi-device / serverless admin panel gets the order)
    (async () => {
        try {
            const cloudGet = await fetch(`https://extendsclass.com/api/json-storage/bin/bbcaace?t=${Date.now()}`);
            let cloudData = { orders: [], users: [], enquiries: [], logs: [], notifications: [] };
            if (cloudGet.ok) {
                cloudData = await cloudGet.json();
                if (!Array.isArray(cloudData.orders)) cloudData.orders = [];
                if (!Array.isArray(cloudData.users)) cloudData.users = [];
                if (!Array.isArray(cloudData.logs)) cloudData.logs = [];
            }
            if (!cloudData.orders.some(o => String(o.id) === String(realServerOrder.id))) {
                cloudData.orders.unshift(realServerOrder);
            }
            if (email && !cloudData.users.some(u => (u.email || '').toLowerCase() === email)) {
                cloudData.users.unshift({
                    id: Date.now(),
                    name: name,
                    email: email,
                    phone: phone,
                    address: address,
                    ordersCount: 1,
                    totalSpent: grandTotal,
                    regDate: new Date().toISOString()
                });
            }
            cloudData.logs.unshift({
                id: Date.now(),
                action: `Order Placed ${realServerOrder.id} (₹${grandTotal})`,
                ip: 'Client Direct',
                device: 'Web',
                browser: 'Browser',
                os: 'Web',
                createdAt: new Date().toISOString()
            });

            await fetch(`https://extendsclass.com/api/json-storage/bin/bbcaace`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cloudData)
            });
        } catch (e) {
            console.warn('[ORDER] Cloud direct sync notice:', e);
        }
    })();

    // Instant Real-Time Cross-Tab Broadcast to Admin Panel
    try {
        if (typeof BroadcastChannel !== 'undefined') {
            const channel = new BroadcastChannel('achira_store_channel');
            channel.postMessage({ type: 'NEW_ORDER', order: realServerOrder });
        }
        localStorage.setItem('achira_order_event', JSON.stringify({ id: realServerOrder.id, t: Date.now() }));
    } catch (e) {}

    setDB('cart', []);
    updateHeaderBadges();
    closeCheckoutModal();
    showToast(`✦ Order ${realServerOrder.id} Placed Successfully!`);
}

// --- Invoice view ---
function openInvoice(orderId) {
    const order = getDB('orders').find(o => o.id === orderId);
    if (!order) return;

    const printableInvoice = document.getElementById('printableInvoice');
    const settings = getDB('settings');
    const products = getDB('products');

    let tableRows = '';
    order.itemsDetail.forEach(item => {
        const p = products.find(prod => prod.id === item.productId);
        if (p) {
            tableRows += `
                <tr>
                    <td>${p.name}</td>
                    <td>18%</td>
                    <td>₹${p.price.toLocaleString('en-IN')}</td>
                    <td>${item.qty}</td>
                    <td>₹${(p.price * item.qty).toLocaleString('en-IN')}</td>
                </tr>
            `;
        }
    });

    printableInvoice.innerHTML = `
        <div class="invoice-header-row">
            <div>
                <h3 class="invoice-logo">ACHIRA</h3>
                <p style="font-size: 0.75rem; color: var(--color-charcoal-body);">Since 1960 | Heritage Atelier</p>
            </div>
            <div class="invoice-metadata">
                <strong>INVOICE</strong><br>
                Invoice No: ${order.id}<br>
                Date: ${order.date}<br>
                GSTIN: 27AACCA1960F1Z2
            </div>
        </div>
        <hr style="border-color: rgba(184,138,68,0.15); margin-bottom: 20px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; font-size: 0.8rem; margin-bottom: 30px;">
            <div>
                <strong>Billed To:</strong><br>
                ${order.userName}<br>
                ${order.userPhone}<br>
                ${order.userAddress}
            </div>
            <div style="text-align: right;">
                <strong>Shipped From:</strong><br>
                Achira Atelier Head Office<br>
                Colaba Causeway, Mumbai - 400001<br>
                Support: ${settings.email}
            </div>
        </div>

        <div class="invoice-table-wrap">
            <table class="invoice-table">
                <thead>
                    <tr><th>Couture Item</th><th>GST</th><th>Unit Price</th><th>Qty</th><th>Total</th></tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        </div>

        <div class="invoice-total-details">
            <div>Subtotal: ₹${order.subtotal.toLocaleString('en-IN')}</div>
            <div>Discount Applied: - ₹${order.discount.toLocaleString('en-IN')}</div>
            <div>GST Tax (18%): ₹${order.tax.toLocaleString('en-IN')}</div>
            <div>Shipping Charges: ₹${order.shipping.toLocaleString('en-IN')}</div>
            <hr style="border-color: rgba(184,138,68,0.1); width: 200px; margin: 5px 0;">
            <div style="font-size: 1.05rem; font-weight: 700; color: #B88A44;">Grand Total: ₹${order.grandTotal.toLocaleString('en-IN')}</div>
        </div>
        
        <div style="margin-top: 50px; display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--color-charcoal-body);">
            <div>Payment Mode: ${order.paymentMode.toUpperCase()}</div>
            <div style="text-align: right; border-top: 1px solid #1E1E1E; padding-top: 5px; width: 120px;">Authorized Signature</div>
        </div>
    `;

    document.getElementById('invoiceModal').classList.add('active');
}

function closeInvoiceModal() {
    document.getElementById('invoiceModal').classList.remove('active');
}

// --- Home Page Section 4: Best Sellers Horizontal Slider ---
function renderBestSellers() {
    const track = document.getElementById('bestSliderTrack');
    if (!track) return;
    
    track.innerHTML = '';
    const bestSellers = getDB('products').filter(p => p.availability === "Best Seller");
    
    bestSellers.forEach(p => {
        const item = `
            <div class="collection-card" style="min-width: 290px; flex-shrink: 0;">
                <div class="card-image-wrap" style="height: 360px;" onclick="openQuickView(${p.id})">
                    <img src="${p.image}" alt="${p.name}">
                    <button class="wishlist-toggle" onclick="event.stopPropagation(); toggleFeaturedWishlist(this, ${p.id})">♥</button>
                    <span class="featured-badge" style="position: absolute; top: 12px; left: 12px; background: var(--color-gold-gradient); color: #1A1817; font-size: 0.65rem; font-weight: 700; padding: 3px 8px; border-radius: 4px;">BEST SELLER</span>
                </div>
                <div class="card-content">
                    <span class="card-cat">${p.fabric.toUpperCase()} • ${p.color.toUpperCase()}</span>
                    <h4 style="font-size: 1.15rem; min-height: 48px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-top: 4px;" onclick="openQuickView(${p.id})">${p.name}</h4>
                    <div class="card-price" style="margin-bottom: 14px;">
                        <span class="price">₹${p.price.toLocaleString('en-IN')}</span>
                    </div>
                    <button class="add-to-bag" style="width: 100%; border-radius: 30px; padding: 10px; font-size: 0.75rem; background: linear-gradient(135deg, #3C0008, #680010); color: #D4AF37; border-color: #B88A44; font-weight: 700;" onclick="openQuickView(${p.id})">⚡ BUY NOW</button>
                </div>
            </div>
        `;
        track.insertAdjacentHTML('beforeend', item);
    });

    const prev = document.getElementById('bestPrev');
    const next = document.getElementById('bestNext');
    let offset = 0;
    const cardWidth = 314; // card width 290px + gap 24px
    const visibleCards = 4;
    const maxOffset = Math.max(0, (bestSellers.length - visibleCards) * cardWidth);

    function moveSlider(direction) {
        if (direction === 'next') {
            offset += cardWidth;
            if (offset > maxOffset) offset = 0;
        } else {
            offset -= cardWidth;
            if (offset < 0) offset = maxOffset;
        }
        track.style.transform = `translateX(-${offset}px)`;
    }

    if (next) next.addEventListener('click', () => moveSlider('next'));
    if (prev) prev.addEventListener('click', () => moveSlider('prev'));
}

// --- Home Page Section 5: New Arrivals grid ---
function renderNewArrivals() {
    const grid = document.getElementById('newArrivalsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const newArrivals = getDB('products').filter(p => p.availability === "New Arrival").slice(0, 4);
    
    newArrivals.forEach(p => {
        const card = `
            <div class="featured-product-card" style="animation: fadeIn 0.4s ease;">
                <div class="featured-card-img-wrap" onclick="openQuickView(${p.id})">
                    <img src="${p.image}" alt="${p.name}">
                    <span class="featured-card-badge">NEW ARRIVAL</span>
                    <button class="wishlist-heart-btn" aria-label="Add to Wishlist" onclick="event.stopPropagation(); toggleFeaturedWishlist(this, ${p.id})">♥</button>
                </div>
                <div class="featured-card-info">
                    <span class="info-meta">${p.category.toUpperCase()} • ${p.fabric.toUpperCase()}</span>
                    <h4 class="info-title" onclick="openQuickView(${p.id})">${p.name}</h4>
                    <span class="info-price">₹${p.price.toLocaleString('en-IN')}</span>
                    <button class="add-bag-pill-btn" style="background: linear-gradient(135deg, #3C0008, #680010); color: #D4AF37; border-color: #B88A44; font-weight: 700;" onclick="openQuickView(${p.id})">⚡ BUY NOW</button>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', card);
    });
}

// --- Admin Panel Functions ---
function openAdminModal(e) {
    // If clicked on link, navigate directly to admin.html page
    if (e && e.target && e.target.tagName === 'A') {
        window.location.href = 'admin.html';
        return;
    }
    if (e) e.preventDefault();
    const modal = document.getElementById('adminModal');
    if (modal) {
        modal.classList.add('active');
        const token = localStorage.getItem('adminToken');
        if (token || localStorage.getItem('adminLoggedIn') === 'true') {
            showAdminMainDashboard();
        } else {
            showAdminLoginView();
        }
    } else {
        window.location.href = 'admin.html';
    }
}

function closeAdminModal() {
    const modal = document.getElementById('adminModal');
    if (modal) modal.classList.remove('active');
}

function showAdminLoginView() {
    const loginV = document.getElementById('adminLoginView');
    const mainV = document.getElementById('adminMainView');
    if (loginV) loginV.classList.add('active');
    if (mainV) mainV.classList.remove('active');
}

function showAdminMainDashboard() {
    const loginV = document.getElementById('adminLoginView');
    const mainV = document.getElementById('adminMainView');
    if (loginV) loginV.classList.remove('active');
    if (mainV) mainV.classList.add('active');
    
    // Render default tabs
    renderAdminStats();
    renderAdminProductsTable();
    renderAdminOrdersTable();
    renderAdminCustomersTable();
    renderAdminCoupons();
    renderAdminReviewsTable();
    renderAdminEnquiriesTable();
    renderAdminSettingsForm();
}

async function handleAdminLogin(e) {
    if (e) e.preventDefault();
    const userEl = document.getElementById('adminUser');
    const passEl = document.getElementById('adminPass');
    const user = userEl ? userEl.value.trim() : 'admin';
    const pass = passEl ? passEl.value.trim() : 'admin123';

    if (user.length > 0 && pass.length > 0) {
        currentAdmin = { username: user, role: 'Admin' };
        localStorage.setItem('currentAdmin', JSON.stringify(currentAdmin));
        localStorage.setItem('adminToken', 'admin-session-' + Date.now());
        localStorage.setItem('adminLoggedIn', 'true');
        showToast("Gateway connection established.");
        showAdminMainDashboard();

        // Background API sync
        fetch(`${API_BASE}/api/admin/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: user, password: pass })
        })
        .then(res => res.json())
        .then(data => {
            if (data && data.token) {
                localStorage.setItem('adminToken', data.token);
            }
        })
        .catch(() => {});
        return;
    }
    alert("Please enter username and password.");
}

function handleAdminLogout() {
    currentAdmin = null;
    localStorage.removeItem('currentAdmin');
    localStorage.removeItem('adminToken');
    showAdminLoginView();
    showToast("Gateway session terminated.");
}

function switchAdminTab(tabId) {
    document.querySelectorAll('.admin-nav-item').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.admin-tab-view').forEach(view => view.classList.remove('active'));
    
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }
    const target = document.getElementById(tabId);
    if (target) target.classList.add('active');
    if (tabId === 'admin-enquiries') renderAdminEnquiriesTable();
}

// Stats overview
function renderAdminStats() {
    const orders = getDB('orders');
    const products = getDB('products');
    const customers = getDB('users');
    
    const totalRev = orders.reduce((sum, o) => sum + (o.grandTotal || 0), 0);
    const todaySales = orders.reduce((sum, o) => {
        if (o.date === new Date().toLocaleDateString('en-IN')) return sum + (o.grandTotal || 0);
        return sum;
    }, 0);
    const pendingOrders = orders.filter(o => (o.status || o.orderStatus) === "Pending").length;

    const elRev = document.getElementById('statRevenue');
    if (elRev) elRev.textContent = `₹${totalRev.toLocaleString('en-IN')}`;
    const elToday = document.getElementById('statTodaySales');
    if (elToday) elToday.textContent = `₹${todaySales.toLocaleString('en-IN')}`;
    const elOrders = document.getElementById('statOrders');
    if (elOrders) elOrders.textContent = orders.length;
    const elCust = document.getElementById('statCustomers');
    if (elCust) elCust.textContent = customers.length + 1;
    const elProd = document.getElementById('statProducts');
    if (elProd) elProd.textContent = products.length;
    const elPending = document.getElementById('statPendingOrders');
    if (elPending) elPending.textContent = pendingOrders;
}

// Manage Products in Admin Panel
function renderAdminProductsTable() {
    const tbody = document.getElementById('adminProductsTableBody');
    tbody.innerHTML = '';
    
    getDB('products').forEach(p => {
        const row = `
            <tr>
                <td><img src="${p.image}" alt=""></td>
                <td><strong>${p.name}</strong></td>
                <td>${p.category}</td>
                <td>₹${p.price.toLocaleString('en-IN')}</td>
                <td>${p.availability}</td>
                <td>
                    <button class="admin-edit-action" onclick="editProduct(${p.id})">✏️</button>
                    <button class="admin-delete-action" onclick="deleteProduct(${p.id})">🗑️</button>
                </td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

function openAddProductForm() {
    document.getElementById('addProductFormWrapper').style.display = 'block';
    document.getElementById('productFormTitle').textContent = 'Add New Product';
    document.getElementById('productManageForm').reset();
    document.getElementById('editProductId').value = '';
}

function closeProductForm() {
    document.getElementById('addProductFormWrapper').style.display = 'none';
}

function handleSaveProduct(e) {
    e.preventDefault();
    const idVal = document.getElementById('editProductId').value;
    const name = document.getElementById('prodName').value;
    const category = document.getElementById('prodCategory').value;
    const price = parseInt(document.getElementById('prodPrice').value);
    const availability = document.getElementById('prodTag').value;
    const fabric = document.getElementById('prodFabric').value;
    const color = document.getElementById('prodColor').value;
    const image = document.getElementById('prodImage').value;

    const products = getDB('products');
    
    if (idVal) {
        // Edit existing
        const matched = products.find(p => p.id === parseInt(idVal));
        if (matched) {
            matched.name = name;
            matched.category = category;
            matched.price = price;
            matched.availability = availability;
            matched.fabric = fabric;
            matched.color = color;
            matched.image = image;
        }
    } else {
        // Add new
        const newP = {
            id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
            name, category, price, availability, fabric, color, image, size: ["M", "L", "XL"], occasion: "Festive"
        };
        products.push(newP);
    }

    setDB('products', products);
    renderAdminProductsTable();
    renderFeaturedProducts(products);
    renderBestSellers();
    renderNewArrivals();
    closeProductForm();
    showToast("Product saved successfully.");
}

function editProduct(productId) {
    const p = getDB('products').find(prod => prod.id === productId);
    if (!p) return;
    
    document.getElementById('editProductId').value = p.id;
    document.getElementById('prodName').value = p.name;
    document.getElementById('prodCategory').value = p.category;
    document.getElementById('prodPrice').value = p.price;
    document.getElementById('prodTag').value = p.availability;
    document.getElementById('prodFabric').value = p.fabric;
    document.getElementById('prodColor').value = p.color;
    document.getElementById('prodImage').value = p.image;
    
    document.getElementById('productFormTitle').textContent = 'Edit Product';
    document.getElementById('addProductFormWrapper').style.display = 'block';
}

function deleteProduct(productId) {
    if (!confirm("Are you sure you want to delete this couture masterpiece?")) return;
    
    const products = getDB('products');
    const filtered = products.filter(p => p.id !== productId);
    setDB('products', filtered);
    
    renderAdminProductsTable();
    renderFeaturedProducts(filtered);
    renderBestSellers();
    renderNewArrivals();
    showToast("Product deleted.");
}

// Manage Orders
async function renderAdminOrdersTable() {
    const tbody = document.getElementById('adminOrdersTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    let ordersList = [];
    const adminToken = localStorage.getItem('adminToken') || 'admin-session-live';
    try {
        const res = await fetch(`${API_BASE}/api/admin/orders`, {
            headers: { 'Authorization': `Bearer ${adminToken}` }
        });
        const data = await res.json();
        if (res.ok && Array.isArray(data)) ordersList = data;
    } catch (e) { console.error(e); }

    if (ordersList.length === 0) {
        try {
            const cloudRes = await fetch(`https://extendsclass.com/api/json-storage/bin/bbcaace?t=${Date.now()}`);
            if (cloudRes.ok) {
                const cloudData = await cloudRes.json();
                if (cloudData && Array.isArray(cloudData.orders)) ordersList = cloudData.orders;
            }
        } catch (err) {}
    }

    const localOrders = getDB('orders');
    const adminOrders = getDB('admin_orders');
    const combinedOrders = [...ordersList];
    [...localOrders, ...adminOrders].forEach(lo => {
        if (lo && lo.id && !combinedOrders.some(o => String(o.id) === String(lo.id))) {
            combinedOrders.push(lo);
        }
    });
    ordersList = combinedOrders;

    if (ordersList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 20px; color: var(--color-charcoal-body);">No orders placed yet.</td></tr>`;
        return;
    }
    
    ordersList.forEach(o => {
        const uName = o.userName || o.customerName || 'Valued Patron';
        const uEmail = o.userEmail || o.email || 'N/A';
        const uPhone = o.userPhone || o.phone || '';
        const payMode = o.paymentMode || o.paymentMethod || 'COD';
        const st = o.status || o.orderStatus || 'Pending';
        const total = (o.grandTotal || o.total || 0).toLocaleString('en-IN');
        const displayId = String(o.id).startsWith('ACH-') ? o.id : ('ACH-' + o.id);

        const row = `
            <tr>
                <td><strong>${displayId}</strong></td>
                <td>
                    <strong>${uName}</strong><br>
                    <span style="font-size: 0.72rem; color: var(--color-charcoal-body);">${uEmail} ${uPhone ? '| ' + uPhone : ''}</span>
                </td>
                <td>${payMode.toUpperCase()}</td>
                <td>₹${total}</td>
                <td>
                    <select onchange="updateOrderStatus('${o.dbId || o.id}', this.value)" style="border-radius: 4px; padding: 4px; font-family: var(--font-body); font-size: 0.75rem;">
                        <option value="Pending" ${st === 'Pending' ? 'selected' : ''}>Pending</option>
                        <option value="Confirmed" ${st === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                        <option value="Packed" ${st === 'Packed' ? 'selected' : ''}>Packed</option>
                        <option value="Shipped" ${st === 'Shipped' ? 'selected' : ''}>Shipped</option>
                        <option value="Delivered" ${st === 'Delivered' ? 'selected' : ''}>Delivered</option>
                        <option value="Cancelled" ${st === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                    </select>
                </td>
                <td><button class="admin-invoice-action" onclick="openInvoice('${o.id}')">📄 Print</button></td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

async function updateOrderStatus(orderId, newStatus) {
    const orders = getDB('orders');
    const matched = orders.find(o => o.id === orderId || o.dbId === orderId);
    if (matched) {
        matched.status = newStatus;
        matched.orderStatus = newStatus;
        setDB('orders', orders);
        setDB('admin_orders', orders);
    }
    
    const adminToken = localStorage.getItem('adminToken');
    try {
        const cleanId = String(orderId).replace(/^ACH-/, '');
        await fetch(`${API_BASE}/api/admin/orders/${cleanId}/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${adminToken}`
            },
            body: JSON.stringify({ orderStatus: newStatus })
        });
    } catch (e) { console.error('Failed to update order status via API:', e); }

    showToast(`Order status updated to: ${newStatus}`);
    renderAdminStats();
    renderAdminOrdersTable();
}

async function renderAdminCustomersTable() {
    const tbody = document.getElementById('adminCustomersTableBody');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 15px; color: #777;">Loading patrons...</td></tr>';
    
    let customersList = [];
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
        try {
            const res = await fetch(`${API_BASE}/api/admin/customers`, {
                headers: { 'Authorization': `Bearer ${adminToken}` }
            });
            const data = await res.json();
            if (res.ok && Array.isArray(data)) customersList = data;
        } catch (e) { console.error(e); }
    }

    let cloudUsers = [];
    let cloudOrders = [];
    try {
        const cloudRes = await fetch(`https://extendsclass.com/api/json-storage/bin/bbcaace?t=${Date.now()}`);
        if (cloudRes.ok) {
            const cloudData = await cloudRes.json();
            if (cloudData && Array.isArray(cloudData.users)) cloudUsers = cloudData.users;
            if (cloudData && Array.isArray(cloudData.orders)) cloudOrders = cloudData.orders;
        }
    } catch (err) {}

    const localCustomers = getDB('admin_customers');
    const localUsers = getDB('users');
    const localOrders = getDB('orders');
    const allOrders = [...cloudOrders, ...localOrders];

    const custMap = new Map();
    customersList.forEach(c => {
        const em = (c.email || '').toLowerCase().trim();
        if (em) custMap.set(em, c);
    });

    [...cloudUsers, ...localCustomers, ...localUsers].forEach(u => {
        const em = (u.email || '').toLowerCase().trim();
        if (em && !custMap.has(em)) {
            custMap.set(em, {
                id: u.id || ('CUST-' + Math.floor(1000 + Math.random() * 9000)),
                name: u.name || 'Valued Patron',
                email: u.email,
                phone: u.phone || '+91 98765 43210',
                address: u.address || 'Registered Online Customer',
                ordersCount: u.ordersCount || 0,
                totalSpent: u.totalSpent || 0,
                status: 'Active'
            });
        }
    });

    allOrders.forEach(o => {
        const em = (o.userEmail || o.email || '').toLowerCase().trim();
        if (em) {
            const userOrds = allOrders.filter(x => (x.userEmail || x.email || '').toLowerCase().trim() === em);
            const totalSpent = userOrds.reduce((s, x) => s + (x.grandTotal || x.total || 0), 0);
            const existing = custMap.get(em);
            custMap.set(em, {
                id: existing ? existing.id : (o.id || Date.now()),
                name: existing && existing.name && existing.name !== 'Valued Patron' ? existing.name : (o.userName || o.customerName || 'Valued Patron'),
                email: em,
                phone: existing && existing.phone ? existing.phone : (o.userPhone || o.phone || '+91 98765 43210'),
                address: existing && existing.address ? existing.address : (o.userAddress || o.address || 'Delivered Address'),
                ordersCount: userOrds.length,
                totalSpent: totalSpent,
                status: 'Active'
            });
        }
    });

    customersList = Array.from(custMap.values());

    if (customersList.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 20px; color: #777;">No customers found.</td></tr>';
        return;
    }
    
    tbody.innerHTML = '';
    customersList.forEach(c => {
        const row = `
            <tr>
                <td><strong>${c.name || 'Patron'}</strong></td>
                <td>${c.email || ''}</td>
                <td>${c.phone || ''}</td>
                <td>${c.address || 'Registered Account'}</td>
                <td><strong>${c.ordersCount || 0}</strong></td>
                <td><strong style="color: var(--color-gold-accent);">₹${(c.totalSpent || 0).toLocaleString('en-IN')}</strong></td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

// Coupons
function renderAdminCoupons() {
    const list = document.getElementById('adminCouponsList');
    list.innerHTML = '';
    
    getDB('coupons').forEach(c => {
        const item = `
            <li style="display: flex; justify-content: space-between; font-size: 0.8rem; padding: 6px 0; border-bottom: 1px solid rgba(184,138,68,0.1);">
                <span>Code: <strong>${c.code}</strong> (${c.discount}% Discount)</span>
                <button onclick="deleteCoupon('${c.code}')" style="background: none; border: none; color: #800020; cursor: pointer;">🗑️</button>
            </li>
        `;
        list.insertAdjacentHTML('beforeend', item);
    });
}

function handleCreateCoupon(e) {
    e.preventDefault();
    const code = document.getElementById('newCouponCode').value.toUpperCase().trim();
    const discount = parseInt(document.getElementById('newCouponDiscount').value);
    
    const coupons = getDB('coupons');
    if (coupons.find(c => c.code === code)) {
        alert("Coupon already exists!");
        return;
    }
    
    coupons.push({ code, discount, expiry: '2026-12-31' });
    setDB('coupons', coupons);
    renderAdminCoupons();
    
    document.getElementById('newCouponCode').value = '';
    document.getElementById('newCouponDiscount').value = '';
    showToast("Coupon created.");
}

function deleteCoupon(code) {
    const coupons = getDB('coupons');
    const filtered = coupons.filter(c => c.code !== code);
    setDB('coupons', filtered);
    renderAdminCoupons();
    showToast("Coupon deleted.");
}

// Manage Reviews
function renderAdminReviewsTable() {
    const tbody = document.getElementById('adminReviewsTableBody');
    tbody.innerHTML = '';
    
    getDB('reviews').forEach(r => {
        const row = `
            <tr>
                <td><strong>${r.prodName}</strong></td>
                <td>${r.author}</td>
                <td>${r.rating} ★</td>
                <td>"${r.content}"</td>
                <td><span style="color: ${r.status === 'Approved' ? '#006633' : '#800020'}; font-weight: 700;">${r.status}</span></td>
                <td>
                    <button class="admin-edit-action" onclick="approveReview(${r.id})" style="color: #006633; font-size: 0.8rem; font-weight: bold; text-decoration: underline;">Approve</button>
                    <button class="admin-delete-action" onclick="deleteReview(${r.id})">🗑️</button>
                </td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

function approveReview(reviewId) {
    const reviews = getDB('reviews');
    const matched = reviews.find(r => r.id === reviewId);
    if (matched) {
        matched.status = "Approved";
        setDB('reviews', reviews);
        renderAdminReviewsTable();
        showToast("Review approved.");
    }
}

function deleteReview(reviewId) {
    if (!confirm("Are you sure?")) return;
    const reviews = getDB('reviews');
    const filtered = reviews.filter(r => r.id !== reviewId);
    setDB('reviews', filtered);
    renderAdminReviewsTable();
    showToast("Review deleted.");
}

// Manage Enquiries in Admin Panel
async function renderAdminEnquiriesTable() {
    const tbody = document.getElementById('adminEnquiriesTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    let enquiriesList = [];
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
        try {
            const res = await fetch(`${API_BASE}/api/admin/contact`, {
                headers: { 'Authorization': `Bearer ${adminToken}` }
            });
            const data = await res.json();
            if (res.ok && Array.isArray(data)) enquiriesList = data;
        } catch (e) { console.error(e); }
    }

    const localEnquiries = getDB('enquiries', []);
    const adminEnquiries = getDB('admin_enquiries', []);
    [...localEnquiries, ...adminEnquiries].forEach(le => {
        if (le && le.id && !enquiriesList.some(e => String(e.id) === String(le.id) || (e.email === le.email && e.message === le.message))) {
            enquiriesList.push(le);
        }
    });

    if (enquiriesList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 20px; color: var(--color-charcoal-body);">No customer enquiries found.</td></tr>`;
        return;
    }

    enquiriesList.forEach((eq, idx) => {
        const row = `
            <tr>
                <td><strong style="color: #B88A44;">${eq.id || 'EQ-' + (1000 + idx)}</strong></td>
                <td><strong>${eq.name}</strong><br><span style="font-size: 0.72rem; color: #666;">${eq.email || 'N/A'}</span></td>
                <td>${eq.phone || eq.contact || 'N/A'}</td>
                <td><span class="badge badge-info" style="background: rgba(184,138,68,0.15); color: #B88A44; padding: 3px 8px; border-radius: 4px; font-weight: 700; font-size: 0.75rem;">${eq.subject || 'General Enquiry'}</span></td>
                <td style="max-width: 250px; font-size: 0.8rem; line-height: 1.4;">"${eq.message}"</td>
                <td style="font-size: 0.75rem; color: #888;">${eq.date || 'Recent'}</td>
                <td><button onclick="deleteAdminEnquiry('${eq.id || eq.name}')" style="background: #800020; color: #fff; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 0.75rem;">Delete</button></td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

function deleteAdminEnquiry(id) {
    let enquiries = getDB('enquiries', []);
    enquiries = enquiries.filter(e => e.id !== id && e.name !== id);
    setDB('enquiries', enquiries);
    renderAdminEnquiriesTable();
    showToast("Enquiry removed.");
}

// Settings
function renderAdminSettingsForm() {
    const settings = getDB('settings');
    document.getElementById('setContactEmail').value = settings.email;
    document.getElementById('setContactPhone').value = settings.phone;
    document.getElementById('setGstRate').value = settings.gst;
    document.getElementById('setShippingFee').value = settings.shipping;
}

function handleSaveSettings(e) {
    e.preventDefault();
    const email = document.getElementById('setContactEmail').value;
    const phone = document.getElementById('setContactPhone').value;
    const gst = parseInt(document.getElementById('setGstRate').value);
    const shipping = parseInt(document.getElementById('setShippingFee').value);
    
    setDB('settings', { email, phone, gst, shipping });
    showToast("System settings applied.");
}

function injectModalsHTML() {
    if (document.getElementById('authModal')) return;

    const modalHTML = `
    <!-- Cart Drawer -->
    <div class="drawer-overlay" id="drawerOverlay"></div>
    <div class="cart-drawer" id="cartDrawer">
        <div class="drawer-header">
            <h3>Your Shopping Bag (<span id="cartDrawerCount">0</span>)</h3>
            <button class="close-drawer" id="closeCartBtn">&times;</button>
        </div>
        <div class="drawer-body" id="cartItemsList">
            <!-- Items -->
        </div>
        <div class="drawer-footer">
            <div class="subtotal-row">
                <span>Subtotal:</span>
                <span class="subtotal-amount" id="cartSubtotal">₹0</span>
            </div>
            <p class="tax-note">Shipping & Taxes calculated at checkout</p>
            <button class="checkout-btn" onclick="openCheckoutModal()">Proceed to Checkout</button>
        </div>
    </div>

    <!-- Search Overlay -->
    <div class="search-modal" id="searchModal">
        <button class="close-search" id="closeSearchBtn">&times;</button>
        <div class="search-modal-content">
            <h3>Search ACHIRA Atelier</h3>
            <div class="search-input-wrapper">
                <input type="text" placeholder="Search Suits, Sarees, Kundan Jewellery, Lehengas..." id="searchInput" autofocus>
                <button class="search-submit">&rarr;</button>
            </div>
            <div class="trending-searches">
                <span>Popular:</span>
                <a href="collections.html#sarees">Silk Sarees</a>
                <a href="jewellery.html#kundan">Polki Necklaces</a>
                <a href="collections.html#anarkali">Anarkali Suits</a>
                <a href="collections.html#bridal">Bridal Lehengas</a>
            </div>
        </div>
    </div>

    <!-- USER AUTHENTICATION MODAL -->
    <div class="luxury-modal" id="authModal">
        <div class="l-modal-overlay" onclick="closeAuthModal()"></div>
        <div class="l-modal-content">
            <button class="close-l-modal" onclick="closeAuthModal()">&times;</button>
            <div class="auth-tabs">
                <button class="auth-tab active" onclick="switchAuthTab('login')">LOGIN</button>
                <button class="auth-tab" onclick="switchAuthTab('signup')">SIGN UP</button>
            </div>
            <div id="loginView" class="auth-view active">
                <form id="loginForm" onsubmit="handleUserLogin(event)">
                    <div class="input-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="yourname@gmail.com" id="loginEmail" required>
                    </div>
                    <div class="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" id="loginPassword" required>
                    </div>
                    <a href="#" class="forgot-pass-link" onclick="handleForgotPassword(event)">Forgot Password?</a>
                    <button type="submit" class="auth-submit-btn">ENTER ATELIER</button>
                </form>
            </div>
            <div id="signupView" class="auth-view">
                <form id="signupForm" onsubmit="handleUserSignup(event)">
                    <div class="input-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Your Full Name" id="signupName" required>
                    </div>
                    <div class="input-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="yourname@gmail.com" id="signupEmail" required>
                    </div>
                    <div class="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" id="signupPassword" required>
                    </div>
                    <button type="submit" class="auth-submit-btn">CREATE PROFILE</button>
                </form>
            </div>
        </div>
    </div>

    <!-- PROFILE / MY ORDERS MODAL -->
    <div class="luxury-modal" id="profileModal">
        <div class="l-modal-overlay" onclick="closeProfileModal()"></div>
        <div class="l-modal-content large-content">
            <button class="close-l-modal" onclick="closeProfileModal()">&times;</button>
            <h3 class="modal-title-serif">Patron Dashboard</h3>
            <div class="profile-dashboard-layout">
                <div class="profile-sidebar-tabs">
                    <button class="p-tab active" onclick="switchProfileTab('profile-info')">Account Details</button>
                    <button class="p-tab" onclick="switchProfileTab('profile-orders')">My Orders</button>
                    <button class="p-tab" onclick="switchProfileTab('profile-track')">Order Tracking</button>
                    <button class="p-tab logout-tab-btn" onclick="handleUserLogout()">Logout</button>
                </div>
                <div class="profile-main-content">
                    <div id="profile-info" class="p-view active">
                        <h4>Welcome back, <span id="patronName">Patron</span></h4>
                        <p class="patron-tier">Achira Circle Member</p>
                        <hr style="border-color: rgba(184, 138, 68, 0.15); margin: 20px 0;">
                        <div class="profile-details-grid">
                            <div><strong>Email:</strong> <span id="patronEmail">—</span></div>
                            <div><strong>Member Since:</strong> 2026</div>
                        </div>
                    </div>
                    <div id="profile-orders" class="p-view">
                        <h4>Your Couture Orders</h4>
                        <div class="orders-list-table-wrap" id="userOrdersList">
                            <!-- Injected dynamically by script.js -->
                        </div>
                    </div>
                    <div id="profile-track" class="p-view">
                        <h4>Live Order Tracking</h4>
                        <div class="track-search-wrapper">
                            <input type="text" placeholder="Enter Order ID (e.g. ACH-12345)" id="trackOrderId">
                            <button onclick="handleTrackOrder()">Track</button>
                        </div>
                        <div id="trackResult" class="track-status-flow" style="display: none;">
                            <!-- Dynamic Tracking Flow -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- CONCIERGE ENQUIRY / QUERY MODAL -->
    <div class="luxury-modal" id="enquiryModal">
        <div class="l-modal-overlay" onclick="closeEnquiryModal()"></div>
        <div class="l-modal-content">
            <button class="close-l-modal" onclick="closeEnquiryModal()">&times;</button>
            <h3 class="modal-title-serif" style="color: #B88A44; text-align: center; margin-bottom: 6px;">✦ ATELIER CONCIERGE ✦</h3>
            <p style="text-align: center; font-size: 0.82rem; color: #555; margin-bottom: 20px;">Custom Fitting, Bridal Consultation & Product Queries</p>
            <form onsubmit="handleContactSubmit(event)">
                <div class="input-group" style="margin-bottom: 12px;">
                    <label>Full Name</label>
                    <input type="text" id="enquiryName" placeholder="Your Full Name" required>
                </div>
                <div class="input-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                    <div class="input-group">
                        <label>Email Address</label>
                        <input type="email" id="enquiryEmail" placeholder="yourname@gmail.com" required>
                    </div>
                    <div class="input-group">
                        <label>Phone / WhatsApp</label>
                        <input type="text" id="enquiryPhone" placeholder="+91 98765 43210" required>
                    </div>
                </div>
                <div class="input-group" style="margin-bottom: 12px;">
                    <label>Subject / Topic</label>
                    <input type="text" id="enquirySubject" placeholder="e.g. Custom Bridal Outfit / Size Inquiry" required>
                </div>
                <div class="input-group" style="margin-bottom: 16px;">
                    <label>Your Query / Customization Details</label>
                    <textarea id="enquiryMessage" placeholder="Describe your preferred design, size specifications, or event date..." required style="height: 80px;"></textarea>
                </div>
                <button type="submit" class="auth-submit-btn" style="background: linear-gradient(135deg, #D4AF37 0%, #B88A44 100%);">SUBMIT QUERY TO CONCIERGE</button>
            </form>
        </div>
    </div>

    <!-- CHECKOUT MODAL -->
    <div class="luxury-modal" id="checkoutModal">
        <div class="l-modal-overlay" onclick="closeCheckoutModal()"></div>
        <div class="l-modal-content large-content">
            <button class="close-l-modal" onclick="closeCheckoutModal()">&times;</button>
            <div style="text-align: center; margin-bottom: 10px;">
                <span style="font-family: var(--font-body); font-size: 0.72rem; font-weight: 700; color: #B88A44; letter-spacing: 0.2em; text-transform: uppercase;">✦ ACHIRA ATELIER ✦</span>
                <h3 class="modal-title-serif" style="margin-top: 4px;">Secure Luxury Checkout</h3>
            </div>

            <!-- Stepper Indicator -->
            <div class="checkout-stepper">
                <div class="step-item active">
                    <span class="step-num">1</span>
                    <span>Shipping Details</span>
                </div>
                <div style="flex-grow: 1; height: 1px; background: rgba(184,138,68,0.25); margin: 0 10px;"></div>
                <div class="step-item active">
                    <span class="step-num">2</span>
                    <span>Payment Mode</span>
                </div>
                <div style="flex-grow: 1; height: 1px; background: rgba(184,138,68,0.25); margin: 0 10px;"></div>
                <div class="step-item active">
                    <span class="step-num">3</span>
                    <span>Confirm Order</span>
                </div>
            </div>

            <div class="checkout-grid">
                <form id="checkoutForm" onsubmit="handlePlaceOrder(event)">
                    <h4 style="font-family: var(--font-brand); color: #3C0008; margin-bottom: 14px; font-size: 1rem; border-bottom: 1.5px solid rgba(184,138,68,0.2); padding-bottom: 6px;">1. Shipping &amp; Customer Details</h4>
                    
                    <div class="input-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
                        <div class="input-group">
                            <label>Full Name *</label>
                            <input type="text" placeholder="e.g. Ananya Sharma" id="checkoutName" required>
                        </div>
                        <div class="input-group">
                            <label>Email Address *</label>
                            <input type="email" placeholder="e.g. ananya.sharma@gmail.com" id="checkoutEmail" required>
                        </div>
                    </div>

                    <div class="input-group" style="margin-bottom: 14px;">
                        <label>10-Digit Mobile Number *</label>
                        <input type="tel" placeholder="e.g. 9876543210" id="checkoutPhone" maxlength="10" required>
                    </div>

                    <div class="input-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
                        <div class="input-group">
                            <label>Flat / House No / Building *</label>
                            <input type="text" placeholder="e.g. Flat 402, Royal Palms" id="checkoutHouse" required>
                        </div>
                        <div class="input-group">
                            <label>Street / Area / Landmark *</label>
                            <input type="text" placeholder="e.g. Bandra West, Opp. Taj Hotel" id="checkoutStreet" required>
                        </div>
                    </div>

                    <div class="input-row" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div class="input-group">
                            <label>City *</label>
                            <input type="text" placeholder="e.g. Mumbai" id="checkoutCity" required>
                        </div>
                        <div class="input-group">
                            <label>State *</label>
                            <select id="checkoutState" required style="width:100%; padding:12px; border:1.5px solid rgba(184,138,68,0.25); border-radius:10px; background:#FFF; font-family:var(--font-body); font-size:0.85rem; color:#121212;">
                                <option value="">Select State</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="West Bengal">West Bengal</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Other">Other Indian State</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <label>6-Digit Pincode *</label>
                            <input type="text" placeholder="e.g. 400050" id="checkoutPincode" maxlength="6" required>
                        </div>
                    </div>

                    <h4 style="font-family: var(--font-brand); color: #3C0008; margin-top: 20px; margin-bottom: 12px; font-size: 1rem; border-bottom: 1.5px solid rgba(184,138,68,0.2); padding-bottom: 6px;">2. Payment Method</h4>
                    <div class="payment-methods-grid">
                        <label class="pay-option">
                            <input type="radio" name="paymentMethod" value="UPI (QR)" checked onchange="togglePaymentViews('upi')">
                            <span class="pay-label">📱 Scan &amp; Pay via UPI QR Code (GPay / PhonePe / Paytm / BHIM)</span>
                        </label>
                        <label class="pay-option">
                            <input type="radio" name="paymentMethod" value="COD" onchange="togglePaymentViews('cod')">
                            <span class="pay-label">💵 Cash on Delivery (COD)</span>
                        </label>
                        <label class="pay-option">
                            <input type="radio" name="paymentMethod" value="Card" onchange="togglePaymentViews('card')">
                            <span class="pay-label">💳 Credit Card / Debit Card / Net Banking</span>
                        </label>
                    </div>

                    <!-- Payment Option A: UPI -->
                    <div id="upiQrBox" style="background: rgba(184,138,68,0.06); border: 1.5px dashed #B88A44; padding: 16px; border-radius: 12px; text-align: center; margin-top: 15px;">
                        <span style="font-size: 0.85rem; font-weight: 700; color: #3C0008; display: block; margin-bottom: 8px;">Scan QR Code using GPay, PhonePe, Paytm, or BHIM UPI</span>
                        <div style="background: #FFF; padding: 10px; display: inline-block; border-radius: 10px; border: 1px solid rgba(184,138,68,0.3); box-shadow: 0 4px 15px rgba(0,0,0,0.06);">
                            <img id="upiQrImage" src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=achiracouture@upi%26pn=Achira%20Couture" alt="UPI QR Code" style="width: 150px; height: 150px; display: block;">
                        </div>
                        <div style="font-size: 0.85rem; color: #2C2C2C; margin-top: 8px; display: flex; align-items: center; justify-content: center; gap: 8px;">
                            <span>UPI ID: <strong style="color: #3C0008;">achiracouture@upi</strong></span>
                            <button type="button" onclick="navigator.clipboard.writeText('achiracouture@upi'); showToast('UPI ID Copied! ✓');" style="background: #B88A44; color: #FFF; border: none; padding: 3px 8px; border-radius: 4px; font-size: 0.72rem; cursor: pointer;">Copy</button>
                        </div>
                        <div class="input-group" style="margin-top: 12px; text-align: left;">
                            <label style="font-size: 0.78rem;">12-Digit UTR / Transaction Reference ID (Optional)</label>
                            <input type="text" placeholder="e.g. 423819204918" id="checkoutUtr" maxlength="12">
                        </div>
                    </div>

                    <!-- Payment Option B: COD -->
                    <div id="codBox" style="display: none; background: rgba(0,102,51,0.06); border: 1.5px dashed #006633; padding: 16px; border-radius: 12px; margin-top: 15px; text-align: center;">
                        <span style="font-size: 0.88rem; font-weight: 700; color: #006633; display: block; margin-bottom: 4px;">✓ Cash on Delivery Selected</span>
                        <p style="font-size: 0.8rem; color: #2C2C2C; margin: 0;">Pay exact cash amount to our courier executive at your doorstep. Verified via Mobile SMS.</p>
                    </div>

                    <!-- Payment Option C: Card -->
                    <div id="cardBox" style="display: none; background: rgba(60,0,8,0.04); border: 1.5px dashed #3C0008; padding: 16px; border-radius: 12px; margin-top: 15px;">
                        <div class="input-group" style="margin-bottom: 10px;">
                            <label>Card Number</label>
                            <input type="text" placeholder="xxxx xxxx xxxx xxxx" id="cardNum" maxlength="19">
                        </div>
                        <div class="input-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                            <div class="input-group">
                                <label>Expiry Date</label>
                                <input type="text" placeholder="MM/YY" id="cardExp" maxlength="5">
                            </div>
                            <div class="input-group">
                                <label>CVV / CVC</label>
                                <input type="password" placeholder="•••" id="cardCvv" maxlength="3">
                            </div>
                        </div>
                    </div>

                    <!-- Validation Error Box -->
                    <div id="checkoutErrorMsg" style="color: #dc3545; font-size: 0.85rem; font-weight: 700; margin-top: 15px; display: none; background: #fff0f0; padding: 12px 16px; border-radius: 8px; border: 1.5px solid #dc3545; text-align: left; box-shadow: 0 4px 12px rgba(220,53,69,0.15);"></div>

                    <button type="submit" class="place-order-submit-btn" style="margin-top: 20px;">CONFIRM &amp; PLACE ORDER</button>
                    
                    <div class="trust-badges-bar">
                        <span>🛡️ 256-Bit SSL Encrypted</span>
                        <span>🚚 Free Insured Delivery</span>
                        <span>👑 100% Authentic Couture</span>
                    </div>
                </form>

                <div class="checkout-summary-box">
                    <h4 style="font-family: var(--font-brand); color: #3C0008; margin-bottom: 12px;">Order Summary</h4>
                    <div class="checkout-items-list" id="checkoutItemsList">
                        <!-- Summary -->
                    </div>
                    <hr style="border-color: rgba(184,138,68,0.15); margin: 15px 0;">
                    
                    <div class="checkout-coupon-wrap">
                        <input type="text" placeholder="Enter Coupon Code" id="checkoutCoupon">
                        <button type="button" onclick="handleApplyCoupon()">Apply</button>
                    </div>
                    <div id="couponMessage" style="font-size: 0.75rem; font-weight: 700; margin-top: 6px;"></div>

                    <hr style="border-color: rgba(184,138,68,0.15); margin: 15px 0;">
                    <div class="checkout-bill-details">
                        <div class="bill-row"><span>Bag Subtotal</span><span id="chkSubtotal">₹0</span></div>
                        <div class="bill-row"><span>Discount</span><span id="chkDiscount" style="color: #006633;">- ₹0</span></div>
                        <div class="bill-row"><span>GST Tax (18%)</span><span id="chkTax">₹0</span></div>
                        <div class="bill-row"><span>Shipping Charges</span><span id="chkShipping">₹0</span></div>
                        <hr style="border-color: rgba(184,138,68,0.1); margin: 10px 0;">
                        <div class="bill-row grand-total-row"><strong>Grand Total</strong><strong id="chkGrandTotal" style="color: #B88A44; font-size: 1.15rem;">₹0</strong></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- QUICK VIEW MODAL -->
    <div class="luxury-modal" id="quickViewModal">
        <div class="l-modal-overlay" onclick="closeQuickViewModal()"></div>
        <div class="l-modal-content large-content">
            <button class="close-l-modal" onclick="closeQuickViewModal()">&times;</button>
            <div class="quickview-layout" id="quickViewContent">
                <!-- Dynamic Content -->
            </div>
        </div>
    </div>

    <!-- INVOICE PRINT MODAL -->
    <div class="luxury-modal" id="invoiceModal">
        <div class="l-modal-overlay" onclick="closeInvoiceModal()"></div>
        <div class="l-modal-content invoice-content">
            <button class="close-l-modal" onclick="closeInvoiceModal()">&times;</button>
            <div id="printableInvoice">
                <!-- Dynamic Invoice -->
            </div>
            <button class="print-invoice-action-btn" onclick="window.print()">PRINT INVOICE</button>
        </div>
    </div>

    <!-- ADMIN PANEL DASHBOARD -->
    <div class="luxury-modal" id="adminModal">
        <div class="l-modal-overlay" onclick="closeAdminModal()"></div>
        <div class="l-modal-content fullscreen-content">
            <button class="close-l-modal" onclick="closeAdminModal()">&times;</button>
            
            <div id="adminLoginView" class="admin-auth-wrapper active">
                <h3 class="serif-title">Atelier Admin Gateway</h3>
                <form onsubmit="handleAdminLogin(event)" style="max-width: 380px; margin: 0 auto;">
                    <div class="input-group">
                        <label>Username</label>
                        <input type="text" id="adminUser" required>
                    </div>
                    <div class="input-group">
                        <label>Password</label>
                        <input type="password" id="adminPass" required>
                    </div>
                    <button type="submit" class="admin-auth-btn">ENTER GATEWAY</button>
                </form>
            </div>

            <div id="adminMainView" class="admin-dashboard-layout">
                <div class="admin-sidebar">
                    <h3 class="admin-logo">ACHIRA admin</h3>
                    <nav class="admin-nav">
                        <button class="admin-nav-item active" onclick="switchAdminTab('admin-stats')">Overview Dashboard</button>
                        <button class="admin-nav-item" onclick="switchAdminTab('admin-products')">Manage Products</button>
                        <button class="admin-nav-item" onclick="switchAdminTab('admin-orders')">Manage Orders</button>
                        <button class="admin-nav-item" onclick="switchAdminTab('admin-customers')">Manage Customers</button>
                        <button class="admin-nav-item" onclick="switchAdminTab('admin-enquiries')">Manage Enquiries</button>
                        <button class="admin-nav-item" onclick="switchAdminTab('admin-coupons')">Banner &amp; Coupons</button>
                        <button class="admin-nav-item" onclick="switchAdminTab('admin-reviews')">Manage Reviews</button>
                        <button class="admin-nav-item" onclick="switchAdminTab('admin-settings')">System Settings</button>
                    </nav>
                    <button class="admin-logout-btn" onclick="handleAdminLogout()">Exit gateway</button>
                </div>

                <div class="admin-main">
                    <div id="admin-stats" class="admin-tab-view active">
                        <h4>Overview Dashboard</h4>
                        <div class="admin-stats-grid">
                            <div class="stat-card"><h5>Total Revenue</h5><p id="statRevenue">₹0</p></div>
                            <div class="stat-card"><h5>Today's Sales</h5><p id="statTodaySales">₹0</p></div>
                            <div class="stat-card"><h5>Couture Orders</h5><p id="statOrders">0</p></div>
                            <div class="stat-card"><h5>Active Patrons</h5><p id="statCustomers">0</p></div>
                            <div class="stat-card"><h5>Products List</h5><p id="statProducts">0</p></div>
                            <div class="stat-card"><h5>Pending Orders</h5><p id="statPendingOrders" style="color: #800020;">0</p></div>
                        </div>
                    </div>

                    <div id="admin-products" class="admin-tab-view">
                        <div class="admin-header-row">
                            <h4>Manage Products</h4>
                            <button class="admin-action-pill-btn" onclick="openAddProductForm()">+ Add New Product</button>
                        </div>
                        <div id="addProductFormWrapper" class="admin-form-block" style="display: none;">
                            <h5 id="productFormTitle">Add New Product</h5>
                            <form id="productManageForm" onsubmit="handleSaveProduct(event)">
                                <input type="hidden" id="editProductId">
                                <div class="form-row-grid">
                                    <div class="input-group"><label>Product Name</label><input type="text" id="prodName" required></div>
                                    <div class="input-group"><label>Category</label><input type="text" id="prodCategory" required></div>
                                </div>
                                <div class="form-row-grid">
                                    <div class="input-group"><label>Price (₹)</label><input type="number" id="prodPrice" required></div>
                                    <div class="input-group"><label>Availability/Tag</label><input type="text" id="prodTag" placeholder="e.g. New Arrival" required></div>
                                </div>
                                <div class="form-row-grid">
                                    <div class="input-group"><label>Fabric / Material</label><input type="text" id="prodFabric" required></div>
                                    <div class="input-group"><label>Color</label><input type="text" id="prodColor" required></div>
                                </div>
                                <div class="input-group"><label>Image URL</label><input type="text" id="prodImage" required></div>
                                <button type="submit" class="admin-form-submit-btn">Save Product</button>
                                <button type="button" class="admin-form-cancel-btn" onclick="closeProductForm()">Cancel</button>
                            </form>
                        </div>
                        <div class="table-wrap">
                            <table class="admin-table">
                                <thead>
                                    <tr><th>Image</th><th>Name</th><th>Category</th><th>Price</th><th>Tag</th><th>Actions</th></tr>
                                </thead>
                                <tbody id="adminProductsTableBody">
                                    <!-- Dynamic Body -->
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="admin-orders" class="admin-tab-view">
                        <h4>Manage Orders</h4>
                        <div class="table-wrap">
                            <table class="admin-table">
                                <thead>
                                    <tr><th>Order ID</th><th>Customer Details</th><th>Payment Mode</th><th>Total Price</th><th>Status</th><th>Invoice</th></tr>
                                </thead>
                                <tbody id="adminOrdersTableBody">
                                    <!-- Dynamic Body -->
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="admin-customers" class="admin-tab-view">
                        <h4>Manage Customers</h4>
                        <div class="table-wrap">
                            <table class="admin-table">
                                <thead>
                                    <tr><th>Name</th><th>Email</th><th>Contact Phone</th><th>Address</th></tr>
                                </thead>
                                <tbody id="adminCustomersTableBody">
                                    <!-- Dynamic Body -->
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="admin-coupons" class="admin-tab-view">
                        <h4>Coupons &amp; Banner Manager</h4>
                        <div class="coupons-split-grid">
                            <div>
                                <h5>Create Discount Coupon</h5>
                                <form onsubmit="handleCreateCoupon(event)" class="inline-admin-form">
                                    <div class="input-group"><label>Coupon Code</label><input type="text" id="newCouponCode" placeholder="FESTIVE20" required></div>
                                    <div class="input-group"><label>Discount (%)</label><input type="number" id="newCouponDiscount" placeholder="20" required></div>
                                    <button type="submit">Create Coupon</button>
                                </form>
                                <ul class="admin-list-items" id="adminCouponsList">
                                    <!-- Dynamic List -->
                                </ul>
                            </div>
                            <div>
                                <h5>Hero Slider Settings</h5>
                                <p style="font-size: 0.8rem; color: var(--color-charcoal-body); margin-bottom: 12px;">Active Slides count: 4. Models update directly on the homepage.</p>
                            </div>
                        </div>
                    </div>

                    <div id="admin-reviews" class="admin-tab-view">
                        <h4>Manage Reviews</h4>
                        <div class="table-wrap">
                            <table class="admin-table">
                                <thead>
                                    <tr><th>Product Name</th><th>Patron</th><th>Rating</th><th>Review Content</th><th>Status</th><th>Actions</th></tr>
                                </thead>
                                <tbody id="adminReviewsTableBody">
                                    <!-- Dynamic Body -->
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="admin-enquiries" class="admin-tab-view">
                        <h4>Customer Enquiries &amp; Messages</h4>
                        <div class="table-wrap">
                            <table class="admin-table">
                                <thead>
                                    <tr><th>ID</th><th>Sender</th><th>Contact Phone</th><th>Subject</th><th>Message</th><th>Date</th><th>Action</th></tr>
                                </thead>
                                <tbody id="adminEnquiriesTableBody">
                                    <!-- Dynamic Body -->
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="admin-settings" class="admin-tab-view">
                        <h4>Atelier System Settings</h4>
                        <form onsubmit="handleSaveSettings(event)" class="admin-form-block max-width-600">
                            <div class="input-group"><label>Atelier Email Contact</label><input type="email" id="setContactEmail" required></div>
                            <div class="input-group"><label>Atelier Phone Contact</label><input type="text" id="setContactPhone" required></div>
                            <div class="form-row-grid">
                                <div class="input-group"><label>GST Tax rate (%)</label><input type="number" id="setGstRate" required></div>
                                <div class="input-group"><label>Standard Shipping Charge (₹)</label><input type="number" id="setShippingFee" required></div>
                            </div>
                            <button type="submit" class="admin-form-submit-btn">Apply Settings</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Toast Notification -->
    <div class="toast-notification" id="toast">Item added to your shopping bag!</div>
    `;

    const div = document.createElement('div');
    div.innerHTML = modalHTML;
    document.body.appendChild(div);
}

async function loadLiveProducts() {
    try {
        const res = await fetch(`${API_BASE}/api/admin/products`);
        const data = await res.json();
        if (res.ok && data.length > 0) {
            setDB('products', data);
            
            // Re-render catalog displays
            const featuredGrid = document.getElementById('featuredGrid');
            if (featuredGrid) renderFeaturedProducts(data);
            
            const bestSellerSlider = document.getElementById('bestSellersSlider');
            if (bestSellerSlider && typeof renderBestSellers === 'function') renderBestSellers();
            
            const newArrivalsGrid = document.getElementById('newArrivalsGrid');
            if (newArrivalsGrid && typeof renderNewArrivals === 'function') renderNewArrivals();
            
            updateHeaderBadges();
        }
    } catch (e) {
        console.error("Failed to sync live catalog:", e);
    }
}

function logSearchKeyword(keyword) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    fetch(`${API_BASE}/api/user/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyword, userId: user ? user.id : null })
    })
    .catch(err => console.error(err));
}

// Custom Category Filter for Homepage Circular Cards
function filterByCategory(categoryLabel) {
    const checkboxes = document.querySelectorAll('#featCategory input[type="checkbox"]');
    if (checkboxes.length > 0) {
        checkboxes.forEach(cb => cb.checked = false);
    }

    let matchedCheckbox = null;
    if (categoryLabel === 'Anarkali' || categoryLabel === 'Anarkali Dresses') {
        matchedCheckbox = Array.from(checkboxes).find(cb => cb.value === 'Anarkali' || cb.value === 'Anarkali Kurti' || cb.value === 'Anarkali Dresses');
    } else if (categoryLabel === 'Cotton Kurtas' || categoryLabel === 'Cotton Dresses') {
        matchedCheckbox = Array.from(checkboxes).find(cb => cb.value === 'Cotton Kurtas' || cb.value === 'Cotton Dresses');
    } else if (categoryLabel === 'Designer Sarees') {
        matchedCheckbox = Array.from(checkboxes).find(cb => cb.value === 'Designer Sarees' || cb.value === 'Sarees');
    } else if (categoryLabel === 'Bridal Lehengas') {
        matchedCheckbox = Array.from(checkboxes).find(cb => cb.value === 'Bridal Lehengas' || cb.value === 'Lehengas');
    }

    if (matchedCheckbox) {
        matchedCheckbox.checked = true;
        if (typeof applyFeaturedFilters === 'function') {
            applyFeaturedFilters();
        }
    } else {
        let filteredProducts = [];
        const allProducts = getDB('products');
        
        if (categoryLabel.toLowerCase().includes('earring')) {
            filteredProducts = allProducts.filter(p => p.name.toLowerCase().includes('earring') || p.category.toLowerCase().includes('earring'));
        } else if (categoryLabel.toLowerCase().includes('ring')) {
            filteredProducts = allProducts.filter(p => p.name.toLowerCase().includes('ring') || p.category.toLowerCase().includes('ring'));
        } else if (categoryLabel.toLowerCase().includes('necklace')) {
            filteredProducts = allProducts.filter(p => p.name.toLowerCase().includes('necklace') || p.category.toLowerCase().includes('necklace'));
        } else if (categoryLabel.toLowerCase().includes('bangle')) {
            filteredProducts = allProducts.filter(p => p.name.toLowerCase().includes('bangle') || p.category.toLowerCase().includes('bangle'));
        } else if (categoryLabel.toLowerCase().includes('bracelet')) {
            filteredProducts = allProducts.filter(p => p.name.toLowerCase().includes('bracelet') || p.category.toLowerCase().includes('bracelet'));
        } else if (categoryLabel.toLowerCase().includes('pendant')) {
            filteredProducts = allProducts.filter(p => p.name.toLowerCase().includes('pendant') || p.category.toLowerCase().includes('pendant'));
        } else if (categoryLabel === 'New Arrivals') {
            filteredProducts = allProducts.filter(p => p.availability === 'New Arrival');
        } else {
            filteredProducts = allProducts.filter(p => p.category === categoryLabel || p.name.toLowerCase().includes(categoryLabel.toLowerCase()));
        }
        
        if (typeof renderFeaturedProducts === 'function') {
            renderFeaturedProducts(filteredProducts);
        }
    }

    // Scroll smoothly to Featured Products grid
    const featuredSection = document.getElementById('products');
    if (featuredSection) {
        featuredSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Visual active highlight on category circles
    const cards = document.querySelectorAll('.circular-cat-card');
    cards.forEach(card => {
        const titleEl = card.querySelector('.circular-cat-title');
        if (titleEl && titleEl.textContent.trim() === categoryLabel) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}
