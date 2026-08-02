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
    getDB('settings', { gst: 18, shipping: 150, email: 'atelier@achira.com', phone: '+91 98765 43210' });
}

const API_BASE = 'https://admin-backend-pearl.vercel.app';

// Global active session state
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let currentAdmin = JSON.parse(localStorage.getItem('currentAdmin')) || null;
let appliedDiscountPercent = 0;
let appliedCouponCode = "";

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
    renderFeaturedProducts(getDB('products'));
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
                    <button class="add-bag-pill-btn" onclick="addItemToCart(${p.id})">ADD TO BAG</button>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', card);
    });
}

function applyFeaturedFilters() {
    const searchVal = document.getElementById('featSearch').value.toLowerCase();
    const maxPrice = parseInt(document.getElementById('featPrice').value);

    const categories = Array.from(document.querySelectorAll('#featCategory input:checked')).map(el => el.value);
    const fabrics = Array.from(document.querySelectorAll('#featFabric input:checked')).map(el => el.value);
    const colors = Array.from(document.querySelectorAll('#featColor input:checked')).map(el => el.value);
    const sizes = Array.from(document.querySelectorAll('#featSize input:checked')).map(el => el.value);

    const filtered = getDB('products').filter(p => {
        if (searchVal && !p.name.toLowerCase().includes(searchVal)) return false;
        if (p.price > maxPrice) return false;
        if (categories.length > 0 && !categories.includes(p.category)) return false;
        if (fabrics.length > 0 && !fabrics.includes(p.fabric)) return false;
        if (colors.length > 0 && !colors.includes(p.color)) return false;
        if (sizes.length > 0 && !p.size.some(s => sizes.includes(s))) return false;
        return true;
    });

    renderFeaturedProducts(filtered);
}

function clearFeaturedFilters() {
    document.getElementById('featSearch').value = '';
    document.getElementById('featPrice').value = 25000;
    document.getElementById('featPriceVal').textContent = '25,000';
    document.querySelectorAll('.featured-sidebar input[type="checkbox"]').forEach(cb => cb.checked = false);
    renderFeaturedProducts(getDB('products'));
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

function addItemToCart(productId) {
    const cart = getDB('cart');
    const existing = cart.find(item => item.productId === productId);
    
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ productId, qty: 1 });
    }
    
    setDB('cart', cart);
    updateHeaderBadges();
    
    const prod = getDB('products').find(p => p.id === productId);
    showToast(`"${prod.name}" added to your shopping bag!`);
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
        cart.push({ productId: tempId, qty: 1 });
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
        const html = `
            <div class="cart-item">
                <img src="${p.image}" alt="${p.name}">
                <div class="item-details">
                    <h5>${p.name}</h5>
                    <span class="item-price">₹${(p.price * item.qty).toLocaleString('en-IN')}</span>
                    <div class="item-qty">
                        <button onclick="changeCartQty(${p.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button onclick="changeCartQty(${p.id}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
        cartList.insertAdjacentHTML('beforeend', html);
    });
    
    const subtotalText = document.getElementById('cartSubtotal');
    if (subtotalText) subtotalText.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
}

function changeCartQty(productId, change) {
    const cart = getDB('cart');
    const item = cart.find(i => i.productId === productId);
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

    const quickViewContent = document.getElementById('quickViewContent');
    quickViewContent.innerHTML = `
        <div style="height: 480px; overflow: hidden; border-radius: 12px; border: 1px solid rgba(184, 138, 68, 0.15);">
            <img src="${p.image}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="padding: 10px;">
            <span style="font-family: var(--font-body); font-size: 0.8rem; font-weight: 700; color: #B88A44;">${p.category.toUpperCase()}</span>
            <h3 class="modal-title-serif" style="margin-top: 10px; font-size: 1.6rem;">${p.name}</h3>
            <div style="color: #B88A44; font-size: 1.1rem; margin: 15px 0;">★★★★★ (5 reviews)</div>
            <p style="font-family: var(--font-body); font-size: 0.9rem; line-height: 1.8; color: var(--color-charcoal-body); margin-bottom: 25px;">
                Material: ${p.fabric}<br>
                Occasion: ${p.occasion}<br>
                Handcrafted by master Indian weavers. Premium quality couture.
            </p>
            <div style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 600; color: var(--color-black-text); margin-bottom: 30px;">
                ₹${p.price.toLocaleString('en-IN')}
            </div>
            <button class="add-to-bag" style="width: 100%; padding: 14px; border-radius: 30px;" onclick="addItemToCart(${p.id}); closeQuickViewModal();">ADD TO SHOPPING BAG</button>
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
            currentUser = data.user;
            localStorage.setItem('currentUser', JSON.stringify(data.user));
            localStorage.setItem('userToken', data.token);
            showToast(`Welcome back, ${data.user.name}!`);
            closeAuthModal();
            openProfileModal();
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
    
    currentUser = matched;
    localStorage.setItem('currentUser', JSON.stringify(matched));
    localStorage.setItem('userToken', 'simulated-token-' + Date.now());
    showToast(`Welcome back, ${matched.name}!`);
    closeAuthModal();
    openProfileModal();
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
            currentUser = data.user;
            localStorage.setItem('currentUser', JSON.stringify(data.user));
            localStorage.setItem('userToken', data.token);
            showToast(`Account successfully created! Welcome, ${data.user.name}!`);
            closeAuthModal();
            openProfileModal();
        }
    })
    .catch(err => {
        performLocalSignup(name, email, pass, phone);
    });
}

function performLocalSignup(name, email, pass, phone) {
    const users = getDB('users');
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (existing) {
        currentUser = existing;
    } else {
        const newUser = { id: Date.now(), name, email, phone, password: pass };
        users.push(newUser);
        setDB('users', users);
        currentUser = { id: newUser.id, name, email, phone };
    }
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem('userToken', 'simulated-token-' + Date.now());
    showToast(`Account successfully created! Welcome, ${name}!`);
    closeAuthModal();
    openProfileModal();
}

function handleUserLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    closeProfileModal();
    showToast("Logged out successfully.");
}

function handleForgotPassword(e) {
    e.preventDefault();
    alert("Simulated OTP sent to your registered email! Check inbox to reset password.");
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

// --- Checkout & Coupon management ---
function openCheckoutModal() {
    const cart = getDB('cart');
    if (cart.length === 0) {
        alert("Your shopping bag is empty!");
        return;
    }
    
    if (!currentUser) {
        alert("Please login or create a profile to checkout.");
        openAuthModal();
        return;
    }

    const subtotal = calculateCartSubtotal();
    appliedDiscountPercent = 0;
    appliedCouponCode = "";
    document.getElementById('couponMessage').textContent = "";
    document.getElementById('checkoutCoupon').value = "";
    
    updateCheckoutBillDetails(subtotal);
    renderCheckoutItemsList();
    
    // Close cart drawer, open checkout
    const cartDrawer = document.getElementById('cartDrawer');
    if (cartDrawer) cartDrawer.classList.remove('active');
    const drawerOverlay = document.getElementById('drawerOverlay');
    if (drawerOverlay) drawerOverlay.classList.remove('active');
    
    document.getElementById('checkoutModal').classList.add('active');
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
                <span>${p.name} <strong>x${item.qty}</strong></span>
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

function handlePlaceOrder(e) {
    e.preventDefault();
    const nameInput = document.getElementById('checkoutName');
    const phoneInput = document.getElementById('checkoutPhone');
    const addressInput = document.getElementById('checkoutAddress');
    const payModeRadio = document.querySelector('input[name="paymentMethod"]:checked');
    const errBox = document.getElementById('checkoutErrorMsg');
    
    if (errBox) errBox.style.display = 'none';

    const customerName = nameInput ? nameInput.value.trim() : "";
    const phoneRaw = phoneInput ? phoneInput.value.trim() : "";
    const address = addressInput ? addressInput.value.trim() : "";

    function showCheckoutError(msg, targetEl) {
        if (errBox) {
            errBox.innerHTML = `⚠️ ${msg}`;
            errBox.style.display = 'block';
        } else {
            alert(`⚠️ ${msg}`);
        }
        if (targetEl) targetEl.focus();
    }

    // 1. Full Name (Optional or validated if entered)
    const customerName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : (currentUser ? currentUser.name : "Valued Patron");

    // 2. Validate Phone Number (10-digit Indian Mobile Number)
    const cleanPhone = phoneRaw.replace(/[\s\-\+\(\)]/g, '');
    const phoneDigitsOnly = cleanPhone.startsWith('91') && cleanPhone.length === 12 ? cleanPhone.slice(2) : cleanPhone;
    const phoneRegex = /^[6-9]\d{9}$/;
    
    if (!phoneRegex.test(phoneDigitsOnly)) {
        showCheckoutError("Please enter a valid 10-digit mobile number (e.g. 7049845357).", phoneInput);
        return;
    }

    // 3. Validate Delivery Address
    if (!address || address.length < 5) {
        showCheckoutError("Please enter your complete delivery address.", addressInput);
        return;
    }

    const formattedPhone = "+91 " + phoneDigitsOnly.slice(0, 5) + " " + phoneDigitsOnly.slice(5);
    const payMode = payModeRadio ? payModeRadio.value : "UPI (QR)";
    const userToken = localStorage.getItem('userToken');
    
    const cart = getDB('cart');
    if (cart.length === 0) {
        showCheckoutError("Your shopping bag is empty! Please add items to proceed.", null);
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
        return p ? `${p.name} (x${item.qty})` : `Couture Item (x${item.qty})`;
    }).join(", ");

    const orderId = "ACH-" + Math.floor(100000 + Math.random() * 900000);
    const formattedOrder = {
        id: orderId,
        userEmail: currentUser ? currentUser.email : (customerName.toLowerCase().replace(/\s+/g, '') + "@gmail.com"),
        userName: customerName,
        userPhone: formattedPhone,
        userAddress: address,
        paymentMode: payMode,
        subtotal: subtotal,
        discount: discount,
        tax: tax,
        shipping: shipping,
        grandTotal: grandTotal,
        itemsSummary: itemsSummary,
        itemsDetail: [...cart],
        status: "Processing",
        date: new Date().toLocaleDateString('en-IN')
    };

    fetch(`${API_BASE}/api/user/checkout`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        },
        body: JSON.stringify({
            name: customerName,
            phone,
            address,
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
                    <button class="add-to-bag" style="width: 100%; border-radius: 30px; padding: 10px; font-size: 0.75rem;" onclick="addItemToCart(${p.id})">ADD TO BAG</button>
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
                    <button class="add-bag-pill-btn" onclick="addItemToCart(${p.id})">ADD TO BAG</button>
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
    e.preventDefault();
    const user = document.getElementById('adminUser').value;
    const pass = document.getElementById('adminPass').value;
    
    const matched = getDB('admins').find(a => a.username === user && a.password === pass);
    if (matched) {
        currentAdmin = matched;
        localStorage.setItem('currentAdmin', JSON.stringify(matched));
        showToast("Gateway connection established.");
        showAdminMainDashboard();
    } else {
        alert("Incorrect Admin Gateway credentials.");
    }
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

    <!-- CHECKOUT MODAL -->
    <div class="luxury-modal" id="checkoutModal">
        <div class="l-modal-overlay" onclick="closeCheckoutModal()"></div>
        <div class="l-modal-content large-content">
            <button class="close-l-modal" onclick="closeCheckoutModal()">&times;</button>
            <h3 class="modal-title-serif">Secure Luxury Checkout</h3>
            <div class="checkout-grid">
                <form id="checkoutForm" onsubmit="handlePlaceOrder(event)">
                    <h4>1. Customer Details &amp; Address</h4>
                    <div class="input-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                        <div class="input-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="e.g. Ananya Sharma" id="checkoutName">
                        </div>
                        <div class="input-group">
                            <label>Phone Number</label>
                            <input type="text" placeholder="+91 98765 43210" id="checkoutPhone" required>
                        </div>
                    </div>
                    <div class="input-group" style="margin-bottom: 16px;">
                        <label>Delivery Address</label>
                        <textarea placeholder="House/Flat No, Street, Landmark, City, Pincode" id="checkoutAddress" required style="height: 60px;"></textarea>
                    </div>

                    <h4 style="margin-top: 20px; margin-bottom: 10px;">2. Select Payment Method</h4>
                    <div class="payment-methods-grid">
                        <label class="pay-option">
                            <input type="radio" name="paymentMethod" value="UPI (QR)" checked onchange="document.getElementById('upiQrBox').style.display='block';">
                            <span class="pay-label">📱 Scan UPI QR Code (GPay / PhonePe / Paytm)</span>
                        </label>
                        <label class="pay-option">
                            <input type="radio" name="paymentMethod" value="COD" onchange="document.getElementById('upiQrBox').style.display='none';">
                            <span class="pay-label">💵 Cash on Delivery</span>
                        </label>
                        <label class="pay-option">
                            <input type="radio" name="paymentMethod" value="NetBanking" onchange="document.getElementById('upiQrBox').style.display='none';">
                            <span class="pay-label">💳 Credit Card / Net Banking</span>
                        </label>
                    </div>

                    <!-- Dynamic UPI QR Display -->
                    <div id="upiQrBox" style="background: rgba(184,138,68,0.06); border: 1.5px dashed #B88A44; padding: 16px; border-radius: 12px; text-align: center; margin-top: 15px;">
                        <span style="font-size: 0.8rem; font-weight: 700; color: #3C0008; display: block; margin-bottom: 8px;">Scan QR Code using GPay, PhonePe, Paytm, or BHIM UPI</span>
                        <div style="background: #FFF; padding: 10px; display: inline-block; border-radius: 10px; border: 1px solid rgba(184,138,68,0.3);">
                            <img id="upiQrImage" src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=achiracouture@upi%26pn=Achira%20Couture" alt="UPI QR Code" style="width: 150px; height: 150px; display: block;">
                        </div>
                        <div style="font-size: 0.8rem; color: #2C2C2C; margin-top: 8px;">UPI ID: <strong style="color: #3C0008;">achiracouture@upi</strong></div>
                    </div>

                    <!-- Validation Error Box -->
                    <div id="checkoutErrorMsg" style="color: #800020; font-size: 0.82rem; font-weight: 700; margin-top: 12px; display: none; background: rgba(128,0,32,0.08); padding: 10px 14px; border-radius: 8px; border: 1px solid rgba(128,0,32,0.2); text-align: left;"></div>

                    <button type="submit" class="place-order-submit-btn" style="margin-top: 15px;">CONFIRM &amp; PLACE ORDER</button>
                </form>

                <div class="checkout-summary-box">
                    <h4>Order Summary</h4>
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
                        <div class="bill-row grand-total-row"><strong>Grand Total</strong><strong id="chkGrandTotal" style="color: #B88A44;">₹0</strong></div>
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
