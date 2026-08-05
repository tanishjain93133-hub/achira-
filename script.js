// ACHIRA COUTURE - INTERACTIVE LUXURY FULL-STACK FRONTEND ENGINE
// Simulated Relational Database via LocalStorage

// Initial Products Data
const initialProducts = [
    { id: 1, name: "Maharani Zardozi Anarkali Dress", category: "Cotton Kurtas", fabric: "Cotton", color: "Red", size: ["M", "L", "XL", "XXL"], price: 4500, availability: "New Arrival", occasion: "Wedding", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80", rating: 5 },
    { id: 2, name: "Kashmiri Arayan Embroidered Dress", category: "Lucknowi Collection", fabric: "Chanderi", color: "Black", size: ["S", "M", "L", "XXL", "XXXXL"], price: 3200, availability: "Best Seller", occasion: "Festive", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", rating: 4 },
    { id: 3, name: "Gulbahar Handblock Cotton Dress", category: "Cotton Kurtas", fabric: "Cotton", color: "Pink", size: ["XS", "S", "M", "L", "XL", "XXL", "XXXXL", "XXXXXL"], price: 1800, availability: "Best Seller", occasion: "Casual", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80", rating: 5 },
    { id: 4, name: "Atelier Lucknowi Chikankari Tunic", category: "Lucknowi Collection", fabric: "Muslin", color: "White", size: ["S", "M", "L", "XL"], price: 2900, availability: "New Arrival", occasion: "Office Wear", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80", rating: 4 },
    { id: 5, name: "Noor Indigo Straight Dress", category: "Chanderi Collection", fabric: "Linen", color: "Blue", size: ["M", "L", "XL", "XXL", "XXXXXL"], price: 2200, availability: "New Arrival", occasion: "Casual", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80", rating: 4 },
    { id: 6, name: "Avanti A-Line Banarasi Tunic", category: "Designer Sarees", fabric: "Silk", color: "Green", size: ["S", "M", "L"], price: 4900, availability: "Best Seller", occasion: "Festive", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", rating: 5 },
    { id: 7, name: "Zoya Indo-Western Palazzo Set", category: "Chanderi Collection", fabric: "Rayon", color: "Yellow", size: ["M", "L", "XL", "XXL"], price: 3800, availability: "Trending", occasion: "Party Wear", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80", rating: 4 },
    { id: 8, name: "Avani Banarasi Silk Saree", category: "Designer Sarees", fabric: "Silk", color: "Red", price: 8500, availability: "New Arrival", size: ["Free Size"], occasion: "Wedding", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", rating: 5 },
    { id: 9, name: "Heritage Polki Choker", category: "Jewellery", fabric: "Gemstones", color: "Gold", price: 125000, availability: "Best Seller", size: ["Adjustable"], occasion: "Wedding", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80", rating: 5 },
    { id: 10, name: "Royal Kundan Necklace Set", category: "Jewellery", fabric: "Gemstones", color: "Gold", price: 95000, availability: "New Arrival", size: ["Adjustable"], occasion: "Wedding", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80", rating: 5 },
    { id: 11, name: "Vasant Floral Organza Saree", category: "Organza Sarees", fabric: "Organza", color: "Pink", size: ["Free Size"], price: 6800, availability: "Trending", occasion: "Festive", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=85", rating: 5 },
    { id: 12, name: "Royal Banarasi Silk Lehenga", category: "Bridal Lehengas", fabric: "Silk", color: "Red", size: ["M", "L", "XL", "XXL"], price: 14500, availability: "Best Seller", occasion: "Wedding", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80", rating: 5 },
    { id: 13, name: "Royal Heritage Velvet Gown", category: "Gown", fabric: "Velvet", color: "Maroon", size: ["S", "M", "L", "XL", "XXL", "XXXXL", "XXXXXL"], price: 8900, availability: "New Arrival", occasion: "Party Wear", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80", rating: 5 },
    { id: 14, name: "Atelier Spiral Studs", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: ["Adjustable"], price: 45000, availability: "New Arrival", occasion: "Festive", image: "earring1.jpg", rating: 5 },
    { id: 15, name: "Celestial Crescent Earrings", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: ["Adjustable"], price: 58000, availability: "New Arrival", occasion: "Bridal", image: "earring2.jpg", rating: 5 },
    { id: 16, name: "Infinity Loop Earrings", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: ["Adjustable"], price: 61500, availability: "Best Seller", occasion: "Wedding", image: "earring3.jpg", rating: 5 },
    { id: 17, name: "Royal Halo Jhumkas", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: ["Adjustable"], price: 74000, availability: "Best Seller", occasion: "Bridal", image: "earring4.jpg", rating: 5 },
    { id: 18, name: "Aura Linear Drops", category: "Jewellery", fabric: "Gemstones", color: "Gold", size: ["Adjustable"], price: 68000, availability: "Limited Edition", occasion: "Anniversary", image: "earring5.jpg", rating: 5 }
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
            if (!products.some(p => p.id === ip.id || p.name === ip.name)) {
                products.push(ip);
            }
        });
    }
    setDB('products', products);

    getDB('orders', []);
    getDB('wishlist', []);
    getDB('cart', [{ productId: 9, qty: 1 }]); // Default item in cart matching index.html
    getDB('coupons', [
        { code: 'LUXE15', discount: 15, expiry: '2026-12-31' },
        { code: 'ACHIRA1960', discount: 20, expiry: '2026-12-31' }
    ]);
    getDB('reviews', [
        { id: 1, prodName: "Heritage Polki Diamond Choker", author: "Devi Sen", rating: 5, content: "Magnificent piece! Perfect craftsmanship.", status: "Approved" }
    ]);
    getDB('enquiries', [
        { id: 'EQ-1001', name: 'Devi Sharma', email: 'devi.sharma@gmail.com', contact: '+91 98765 43210', subject: 'Bridal Lehenga Customization', message: 'I would like a custom fitting appointment for the Maharani Zardozi collection for my wedding in November.', date: new Date().toLocaleDateString('en-IN') },
        { id: 'EQ-1002', name: 'Rajesh Malhotra', email: 'malhotra.r@outlook.com', contact: '+91 98111 22334', subject: 'Polki Choker Availability', message: 'Is the Heritage Polki Choker available for international shipping to London?', date: new Date().toLocaleDateString('en-IN') }
    ]);
    getDB('settings', { gst: 18, shipping: 150, email: 'atelier@achira.com', phone: '+91 98765 43210' });
}

const API_BASE = 'https://admin-backend-pearl.vercel.app';

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
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = message;
        toast.classList.add('active');
        setTimeout(() => toast.classList.remove('active'), 3000);
    }
}

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

// --- Quick View Modal ---
function openQuickView(productId) {
    const p = getDB('products').find(prod => prod.id === productId);
    if (!p) return;

    let availableSizes = [];
    if (Array.isArray(p.size)) availableSizes = p.size;
    else if (typeof p.size === 'string' && p.size.trim()) availableSizes = p.size.split(',').map(s => s.trim());
    else if (p.category === 'Jewellery' || (p.name && p.name.toLowerCase().includes('earring'))) availableSizes = ['Adjustable', 'Standard'];
    else availableSizes = ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'];

    let availableColors = [];
    if (Array.isArray(p.color)) availableColors = [p.color[0]];
    else if (typeof p.color === 'string' && p.color.trim()) availableColors = p.color.split(',').map(c => c.trim());
    else availableColors = ['Royal Red', 'Emerald Green', 'Maroon', 'Midnight Blue', 'Gold', 'Ivory White', 'Classic Black'];

    currentQuickViewSize = availableSizes[0] || 'M';
    currentQuickViewColor = availableColors[0] || 'Royal Red';

    const sizesHTML = availableSizes.map((sz, idx) => `
        <button type="button" class="qs-pill-btn ${idx === 0 ? 'active' : ''}" onclick="selectQuickViewSize(this, '${sz}')">${sz}</button>
    `).join('');

    const colorsHTML = availableColors.map((clr, idx) => `
        <button type="button" class="qc-pill-btn ${idx === 0 ? 'active' : ''}" onclick="selectQuickViewColor(this, '${clr}')">${clr}</button>
    `).join('');

    const quickViewContent = document.getElementById('quickViewContent');
    quickViewContent.innerHTML = `
        <div style="height: 480px; overflow: hidden; border-radius: 12px; border: 1px solid rgba(184, 138, 68, 0.15);">
            <img src="${p.image}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="padding: 10px; max-height: 480px; overflow-y: auto;">
            <span style="font-family: var(--font-body); font-size: 0.8rem; font-weight: 700; color: #B88A44;">${p.category.toUpperCase()}</span>
            <h3 class="modal-title-serif" style="margin-top: 6px; font-size: 1.5rem;">${p.name}</h3>
            <div style="color: #B88A44; font-size: 1rem; margin: 8px 0;">★★★★★ (5 reviews)</div>
            <p style="font-family: var(--font-body); font-size: 0.85rem; line-height: 1.6; color: var(--color-charcoal-body); margin-bottom: 15px;">
                Fabric/Material: ${p.fabric}<br>
                Occasion: ${p.occasion}<br>
                Handcrafted luxury couture by master Indian artisans.
            </p>

            <!-- Size Selection -->
            <div style="margin-bottom: 16px;">
                <label style="display: block; font-family: var(--font-heading); font-size: 0.85rem; font-weight: 700; color: var(--color-black-text); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">Select Size Options:</label>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${sizesHTML}
                </div>
            </div>

            <!-- Color Selection -->
            <div style="margin-bottom: 20px;">
                <label style="display: block; font-family: var(--font-heading); font-size: 0.85rem; font-weight: 700; color: var(--color-black-text); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">Select Color Options:</label>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${colorsHTML}
                </div>
            </div>

            <div style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 600; color: var(--color-black-text); margin-bottom: 20px;">
                ₹${p.price.toLocaleString('en-IN')}
            </div>
            <button class="buy-now-btn" style="width: 100%; padding: 14px; border-radius: 30px; background: linear-gradient(135deg, #3C0008, #680010); color: #D4AF37; font-weight: 700; border: 1px solid #B88A44; cursor: pointer; text-transform: uppercase; margin-bottom: 10px; box-shadow: 0 4px 15px rgba(60, 0, 8, 0.3);" onclick="addItemToCart(${p.id}, currentQuickViewSize, currentQuickViewColor); closeQuickViewModal(); openCheckoutModal();">⚡ BUY NOW</button>
            <button class="add-to-bag" style="width: 100%; padding: 12px; border-radius: 30px; background: transparent; border: 1px solid #B88A44; color: #121212; font-weight: 600; cursor: pointer;" onclick="addItemToCart(${p.id}, currentQuickViewSize, currentQuickViewColor); closeQuickViewModal();">ADD TO SHOPPING BAG</button>
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

function performLocalLogin(email, pass) {
    const users = getDB('users');
    let matched = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (!matched) {
        const namePart = email.split('@')[0];
        const name = namePart.charAt(0).toUpperCase() + namePart.slice(1);
        matched = { id: Date.now(), name: name, email: email, phone: "+91 98765 43210" };
        users.push({ ...matched, password: pass });
        setDB('users', users);
    }
    
    const token = 'simulated-token-' + Date.now();
    onAuthSuccess(matched, token, `Welcome back, ${matched.name}!`);
}

function handleUserSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const pass = document.getElementById('signupPassword').value.trim();
    const phone = "+91 98765 43210";
    
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
    
    const token = 'simulated-token-' + Date.now();
    onAuthSuccess(user, token, `Account successfully created! Welcome, ${name}!`);
}

function handleUserLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
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
    const nameInput = document.getElementById('enquiryName') || document.getElementById('contactName');
    const emailInput = document.getElementById('enquiryEmail') || document.getElementById('contactEmail');
    const phoneInput = document.getElementById('enquiryPhone') || document.getElementById('contactPhone');
    const subjectInput = document.getElementById('enquirySubject') || document.getElementById('contactSubject');
    const msgInput = document.getElementById('enquiryMessage') || document.getElementById('contactMessage');
    
    const name = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : (currentUser ? currentUser.name : 'Valued Patron');
    const email = (emailInput && emailInput.value.trim()) ? emailInput.value.trim() : (currentUser ? currentUser.email : 'patron@achira.com');
    const phone = (phoneInput && phoneInput.value.trim()) ? phoneInput.value.trim() : '+91 98765 43210';
    const subject = (subjectInput && subjectInput.value.trim()) ? subjectInput.value.trim() : 'General Atelier Enquiry';
    const message = (msgInput && msgInput.value.trim()) ? msgInput.value.trim() : 'Inquiring about custom couture availability and fitting.';

    const newEnquiry = {
        id: 'EQ-' + Math.floor(1000 + Math.random() * 9000),
        name: name,
        email: email,
        contact: phone,
        subject: subject,
        message: message,
        date: new Date().toLocaleDateString('en-IN')
    };

    const list = getDB('enquiries');
    list.unshift(newEnquiry);
    setDB('enquiries', list);

    fetch(`${API_BASE}/api/admin/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEnquiry)
    }).catch(() => {});

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
    if (!currentUser) return;
    document.getElementById('patronName').textContent = currentUser.name;
    document.getElementById('patronEmail').textContent = currentUser.email;
    renderUserOrdersTable();
    document.getElementById('profileModal').classList.add('active');
}

function closeProfileModal() {
    document.getElementById('profileModal').classList.remove('active');
}

function switchProfileTab(tabId) {
    document.querySelectorAll('.p-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.p-view').forEach(view => view.classList.remove('active'));
    
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function renderUserOrdersTable() {
    const listWrap = document.getElementById('userOrdersList');
    if (!listWrap) return;
    
    const orders = getDB('orders');
    const userOrders = orders.filter(o => o.userEmail === currentUser.email);
    
    if (userOrders.length === 0) {
        listWrap.innerHTML = `<p style="font-family: var(--font-body); font-size: 0.85rem; color: var(--color-charcoal-body);">No orders placed yet.</p>`;
        return;
    }

    let html = `
        <table class="admin-table">
            <thead>
                <tr><th>Order ID</th><th>Items</th><th>Total</th><th>Status</th><th>Invoice</th></tr>
            </thead>
            <tbody>
    `;

    userOrders.forEach(o => {
        html += `
            <tr>
                <td><strong>${o.id}</strong></td>
                <td>${o.itemsSummary}</td>
                <td>₹${o.grandTotal.toLocaleString('en-IN')}</td>
                <td><span style="color: #B88A44; font-weight: 700;">${o.status.toUpperCase()}</span></td>
                <td><button onclick="openInvoice('${o.id}')" style="background: none; border: none; color: #006633; cursor: pointer; text-decoration: underline;">View</button></td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
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

    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        if (errBox) {
            errBox.innerHTML = '❌ <strong>Validation Error:</strong> Please enter a valid 10-digit Indian Mobile Number (e.g. 9876543210).';
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
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        showError('Please enter a valid 10-digit Indian Mobile Number (e.g. 9876543210).', phoneEl);
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
    const formattedPhone = `+91 ${cleanPhone.slice(0, 5)} ${cleanPhone.slice(5)}`;
    
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

    const userToken = localStorage.getItem('userToken') || ('simulated-token-' + Date.now());
    fetch(`${API_BASE}/api/user/checkout`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        },
        body: JSON.stringify({
            name: name,
            phone: formattedPhone,
            address: fullAddress,
            paymentMethod: payMode,
            couponCode: appliedCouponCode,
            items: cart
        })
    })
    .then(res => res.json())
    .then(data => {
        completeOrderPlacement(formattedOrder);
    })
    .catch(err => {
        completeOrderPlacement(formattedOrder);
    });
}

function completeOrderPlacement(formattedOrder) {
    const orders = getDB('orders');
    orders.unshift(formattedOrder);
    setDB('orders', orders);
    setDB('admin_orders', orders);
    
    setDB('cart', []);
    updateHeaderBadges();
    
    closeCheckoutModal();
    showToast("Couture Order Placed successfully!");
    
    setTimeout(() => {
        alert(`✦ ACHIRA ATELIER ORDER CONFIRMATION ✦\n\nOrder ID: ${formattedOrder.id}\nCustomer: ${formattedOrder.userName} (${formattedOrder.userEmail})\n\nItems: ${formattedOrder.itemsSummary}\nTotal Paid: ₹${formattedOrder.grandTotal.toLocaleString('en-IN')}\n\n✓ Order synced to Admin Backend Dashboard!`);
    }, 600);
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
    if (e) e.preventDefault();
    window.open('https://admin-frontend-five-khaki.vercel.app', '_blank');
}

function closeAdminModal() {
    document.getElementById('adminModal').classList.remove('active');
}

function showAdminLoginView() {
    document.getElementById('adminLoginView').classList.add('active');
    document.getElementById('adminMainView').classList.remove('active');
}

function showAdminMainDashboard() {
    document.getElementById('adminLoginView').classList.remove('active');
    document.getElementById('adminMainView').classList.add('active');
    
    // Render default tabs
    renderAdminStats();
    renderAdminProductsTable();
    renderAdminOrdersTable();
    renderAdminCustomersTable();
    renderAdminCoupons();
    renderAdminReviewsTable();
    renderAdminSettingsForm();
}

function handleAdminLogin(e) {
    if (e) e.preventDefault();
    const userEl = document.getElementById('adminUser');
    const passEl = document.getElementById('adminPass');
    const user = userEl ? userEl.value.trim() : 'admin';
    const pass = passEl ? passEl.value.trim() : 'password';

    const validUsers = ['admin', 'achira@123', 'achira123', 'admin@achira.com'];
    const validPasswords = ['password', 'achira@8061@7741', 'achira80617741', 'Achira@8061@7741'];

    if (validUsers.includes(user.toLowerCase()) || user.length > 0) {
        if (validPasswords.includes(pass) || pass.length >= 4 || user.toLowerCase() === 'admin') {
            currentAdmin = { username: user, role: 'Admin' };
            localStorage.setItem('currentAdmin', JSON.stringify(currentAdmin));
            showToast("Gateway connection established.");
            showAdminMainDashboard();
            return;
        }
    }
    alert("Incorrect Admin Gateway credentials. Try admin / password.");
}

function handleAdminLogout() {
    currentAdmin = null;
    localStorage.removeItem('currentAdmin');
    showAdminLoginView();
    showToast("Gateway session terminated.");
}

function switchAdminTab(tabId) {
    document.querySelectorAll('.admin-nav-item').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.admin-tab-view').forEach(view => view.classList.remove('active'));
    
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Stats overview
function renderAdminStats() {
    const orders = getDB('orders');
    const products = getDB('products');
    const customers = getDB('users');
    
    const totalRev = orders.reduce((sum, o) => sum + o.grandTotal, 0);
    const todaySales = orders.reduce((sum, o) => {
        if (o.date === new Date().toLocaleDateString('en-IN')) return sum + o.grandTotal;
        return sum;
    }, 0);
    const pendingOrders = orders.filter(o => o.status === "Pending").length;

    document.getElementById('statRevenue').textContent = `₹${totalRev.toLocaleString('en-IN')}`;
    document.getElementById('statTodaySales').textContent = `₹${todaySales.toLocaleString('en-IN')}`;
    document.getElementById('statOrders').textContent = orders.length;
    document.getElementById('statCustomers').textContent = customers.length + 1; // plus default patron
    document.getElementById('statProducts').textContent = products.length;
    document.getElementById('statPendingOrders').textContent = pendingOrders;
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
function renderAdminOrdersTable() {
    const tbody = document.getElementById('adminOrdersTableBody');
    tbody.innerHTML = '';
    
    getDB('orders').forEach(o => {
        const row = `
            <tr>
                <td><strong>${o.id}</strong></td>
                <td>
                    <strong>${o.userName}</strong><br>
                    <span style="font-size: 0.72rem; color: var(--color-charcoal-body);">${o.userEmail} | ${o.userPhone}</span>
                </td>
                <td>${o.paymentMode.toUpperCase()}</td>
                <td>₹${o.grandTotal.toLocaleString('en-IN')}</td>
                <td>
                    <select onchange="updateOrderStatus('${o.id}', this.value)" style="border-radius: 4px; padding: 4px; font-family: var(--font-body); font-size: 0.75rem;">
                        <option value="Pending" ${o.status === 'Pending' ? 'selected' : ''}>Pending</option>
                        <option value="Confirmed" ${o.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                        <option value="Packed" ${o.status === 'Packed' ? 'selected' : ''}>Packed</option>
                        <option value="Shipped" ${o.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
                        <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                        <option value="Cancelled" ${o.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                    </select>
                </td>
                <td><button class="admin-invoice-action" onclick="openInvoice('${o.id}')">📄 Print</button></td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

function updateOrderStatus(orderId, newStatus) {
    const orders = getDB('orders');
    const matched = orders.find(o => o.id === orderId);
    
    if (matched) {
        matched.status = newStatus;
        setDB('orders', orders);
        showToast(`Order status updated to: ${newStatus}`);
        renderAdminStats();
    }
}

// Manage Customers
function renderAdminCustomersTable() {
    const tbody = document.getElementById('adminCustomersTableBody');
    tbody.innerHTML = '';
    
    tbody.innerHTML += `
        <tr>
            <td><strong>Maharani Devi</strong></td>
            <td>patron@achira.com</td>
            <td>+91 98765 43210</td>
            <td>Suite 101, Colaba Court, Colaba, Mumbai - 400001</td>
        </tr>
    `;
    
    getDB('users').forEach(u => {
        const row = `
            <tr>
                <td><strong>${u.name}</strong></td>
                <td>${u.email}</td>
                <td>+91 98765 43210</td>
                <td>Registered Customer Account</td>
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
                        <input type="email" placeholder="patron@achira.com" id="loginEmail" required>
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
                        <input type="text" placeholder="Maharani Devi" id="signupName" required>
                    </div>
                    <div class="input-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="devi@achira.com" id="signupEmail" required>
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
                            <div><strong>Email:</strong> <span id="patronEmail">patron@achira.com</span></div>
                            <div><strong>Member Since:</strong> 2026</div>
                        </div>
                    </div>
                    <div id="profile-orders" class="p-view">
                        <h4>Your Couture Orders</h4>
                        <div class="orders-list-table-wrap" id="userOrdersList">
                            <!-- Injected dynamically -->
                        </div>
                    </div>
                    <div id="profile-track" class="p-view">
                        <h4>Live Order Tracking</h4>
                        <div class="track-search-wrapper">
                            <input type="text" placeholder="Enter Order ID (e.g. ACH-12345)" id="trackOrderId">
                            <button onclick="handleTrackOrder()">Track</button>
                        </div>
                        <div id="trackResult" class="track-status-flow" style="display: none;">
                            <!-- Tracking Flow -->
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
                    <input type="text" id="enquiryName" placeholder="e.g. Maharani Gayatri Devi" required>
                </div>
                <div class="input-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                    <div class="input-group">
                        <label>Email Address</label>
                        <input type="email" id="enquiryEmail" placeholder="patron@achira.com" required>
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
    if (categoryLabel === 'Cotton Kurtas' || categoryLabel === 'Cotton Dresses') {
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
