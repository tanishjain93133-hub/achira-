/**
 * ACHIRA COUTURE - Centralized & Scalable Products Database
 * 
 * Supports multi-slot image structures:
 * {
 *   front: "...",
 *   side: "...",
 *   zoom: "...",
 *   palazzo: "...",
 *   dupatta: "...",
 *   back: "..."
 * }
 */

const ACHIRA_PRODUCTS_DATA = [
    // ==========================================
    // --- STRAIGHT FIT COLLECTION (Ethnic Wear) ---
    // ==========================================
    {
        id: "straight-001",
        numericId: 301,
        sku: "ACH-STR-001",
        name: "Zari & Zardozi Embroidered Olive Silk Sharara Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Pure Raw Silk & Chanderi",
        color: "Olive Green",
        size: ["L"],
        price: null,
        originalPrice: null,
        discountPrice: null,
        stock: 25,
        status: "Active",
        featured: true,
        availability: "New Arrival",
        occasion: "Festive & Wedding",
        image: "products/straight-fit/product-01/front.jpg",
        images: {
            front: "products/straight-fit/product-01/front.jpg",
            side: "",
            zoom: "",
            palazzo: "",
            dupatta: "",
            back: ""
        },
        rating: 5,
        description: "Exquisite chartreuse olive-green raw silk sleeveless kurti with a V-neckline adorned with delicate zardozi and soft pink threadwork embroidery, paired with a matching flared pleated sharara bottom and scalloped zari embroidered dupatta.",
        careInstructions: "Dry clean only to preserve raw silk texture and fine metallic zari embroidery.",
        deliveryInfo: "Dispatched within 24-48 hours. Express delivery across India in 3-5 business days."
    },
    {
        id: "straight-002",
        numericId: 302,
        sku: "ACH-STR-002",
        name: "Gulabi Noor Dusty Rose Embroidered Raw Silk Kurta Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Pure Raw Silk",
        color: "Dusty Rose Pink",
        size: ["L"],
        price: null,
        originalPrice: null,
        discountPrice: null,
        stock: 22,
        status: "Active",
        featured: true,
        availability: "New Arrival",
        occasion: "Wedding & Day Festive",
        image: "products/straight-fit/product-02/front.jpg",
        images: {
            front: "products/straight-fit/product-02/front.jpg",
            side: "",
            zoom: "",
            palazzo: "",
            dupatta: "",
            back: ""
        },
        rating: 5,
        description: "Sophisticated dusty rose blush raw silk straight-cut kurta featuring delicate floral motif resham and zardozi threadwork on the V-neck yoke and sleeves, paired with tailored tonal churidar trousers and a heavily bordered floral embroidered sheer silk dupatta.",
        careInstructions: "Dry clean only to protect delicate resham embroidery.",
        deliveryInfo: "Dispatched within 24-48 hours. Express delivery across India."
    },
    {
        id: "straight-003",
        numericId: 303,
        sku: "ACH-STR-003",
        name: "Parijaat Seafoam Sage Green Silk Kurta Sharara Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Chanderi Silk Blend",
        color: "Seafoam Green",
        size: ["L"],
        price: null,
        originalPrice: null,
        discountPrice: null,
        stock: 20,
        status: "Active",
        featured: true,
        availability: "Trending",
        occasion: "Festive & Party",
        image: "products/straight-fit/product-03/front.jpg",
        images: {
            front: "products/straight-fit/product-03/front.jpg",
            side: "",
            zoom: "",
            palazzo: "",
            dupatta: "",
            back: ""
        },
        rating: 5,
        description: "Regal seafoam sage green straight kurti embellished with intricate silver and pink floral zardozi neckline and border detailing, paired with matching flared tiered sharara bottoms and a sequined lace border dupatta.",
        careInstructions: "Dry clean only.",
        deliveryInfo: "Dispatched within 24-48 hours. Express delivery in 3-5 business days."
    },
    {
        id: "straight-004",
        numericId: 304,
        sku: "ACH-STR-004",
        name: "Meera Teal Raw Silk Kurta with Floral Zari Dupatta Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Pure Raw Silk & Banarasi Silk",
        color: "Teal Green",
        size: ["L"],
        price: null,
        originalPrice: null,
        discountPrice: null,
        stock: 24,
        status: "Active",
        featured: true,
        availability: "Best Seller",
        occasion: "Evening Festive & Wedding Guest",
        image: "products/straight-fit/product-04/front.jpg",
        images: {
            front: "products/straight-fit/product-04/front.jpg",
            side: "",
            zoom: "",
            palazzo: "",
            dupatta: "",
            back: ""
        },
        rating: 5,
        description: "Stunning rich teal green straight raw silk kurta with a zardozi embellished V-neckline, paired with matching straight-cut palazzo trousers and a luxurious multi-colored floral printed Banarasi silk dupatta with golden zari borders.",
        careInstructions: "Dry clean recommended.",
        deliveryInfo: "Dispatched within 24 hours. Express delivery across India."
    },
    {
        id: "straight-005",
        numericId: 305,
        sku: "ACH-STR-005",
        name: "Aarohi Beige Mirror-Work Tassel Kurta Mauve Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Linen Cotton & Chanderi Silk",
        color: "Ivory Beige & Mauve",
        size: ["L"],
        price: null,
        originalPrice: null,
        discountPrice: null,
        stock: 18,
        status: "Active",
        featured: true,
        availability: "New Arrival",
        occasion: "Haldi & Day Festive",
        image: "products/straight-fit/product-05/front.jpg",
        images: {
            front: "products/straight-fit/product-05/front.jpg",
            side: "",
            zoom: "",
            palazzo: "",
            dupatta: "",
            back: ""
        },
        rating: 5,
        description: "Artisanal ivory beige straight kurta featuring traditional mirror-work bib embroidery with handcrafted dangling fringe tassels on the hem and sleeves, paired with mauve-purple gathered crushed silk palazzo pants and a solid sheer dupatta.",
        careInstructions: "Dry clean or gentle cold hand wash.",
        deliveryInfo: "Dispatched within 24-48 hours."
    },
    {
        id: "straight-006",
        numericId: 306,
        sku: "ACH-STR-006",
        name: "Kesar Peach Silk Kurta with Fuchsia Leheriya Dupatta Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Pure Raw Silk",
        color: "Peach & Fuchsia Pink",
        size: ["L"],
        price: null,
        originalPrice: null,
        discountPrice: null,
        stock: 21,
        status: "Active",
        featured: true,
        availability: "Trending",
        occasion: "Festive & Sangeet",
        image: "products/straight-fit/product-06/front.jpg",
        images: {
            front: "products/straight-fit/product-06/front.jpg",
            side: "",
            zoom: "",
            palazzo: "",
            dupatta: "",
            back: ""
        },
        rating: 5,
        description: "Elegant pastel peach straight raw silk kurta accented with magenta zardozi neckline embroidery, accompanied by a flowing flared peach skirt and a vibrant fuchsia pink & gold metallic striped leheriya dupatta.",
        careInstructions: "Dry clean only.",
        deliveryInfo: "Dispatched within 24 hours."
    },
    {
        id: "straight-007",
        numericId: 307,
        sku: "ACH-STR-007",
        name: "Gulaal Berry Pink Mirror Medallion Strappy Kurta Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Chanderi Cotton Blend",
        color: "Berry Pink",
        size: ["L"],
        price: null,
        originalPrice: null,
        discountPrice: null,
        stock: 26,
        status: "Active",
        featured: true,
        availability: "New Arrival",
        occasion: "Party & Summer Festive",
        image: "products/straight-fit/product-07/front.jpg",
        images: {
            front: "products/straight-fit/product-07/front.jpg",
            side: "",
            zoom: "",
            palazzo: "",
            dupatta: "",
            back: ""
        },
        rating: 5,
        description: "Breezy berry pink strappy straight-fit kurta designed with a prominent circular mirror medallion on the bodice, delicate micro-booti weaving, and straight tailored cigarette trousers.",
        careInstructions: "Hand wash cold with gentle soap.",
        deliveryInfo: "Dispatched within 24 hours."
    },
    {
        id: "straight-008",
        numericId: 308,
        sku: "ACH-STR-008",
        name: "Meghna Magenta Violet Ikat Handcrafted Kurta Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Pure Handloom Cotton",
        color: "Magenta Violet",
        size: ["L"],
        price: null,
        originalPrice: null,
        discountPrice: null,
        stock: 20,
        status: "Active",
        featured: true,
        availability: "Trending",
        occasion: "Casual & Workwear Festive",
        image: "products/straight-fit/product-08/front.jpg",
        images: {
            front: "products/straight-fit/product-08/front.jpg",
            side: "",
            zoom: "",
            palazzo: "",
            dupatta: "",
            back: ""
        },
        rating: 5,
        description: "Heritage handloom magenta violet straight kurta featuring striking white traditional ikat geometric patterns, notch neck detailing, matching solid straight trousers, and a full-length matching ikat printed dupatta.",
        careInstructions: "Cold hand wash separately.",
        deliveryInfo: "Dispatched within 24 hours."
    },
    {
        id: "straight-009",
        numericId: 309,
        sku: "ACH-STR-009",
        name: "Vrinda Lime Green Yoke Motif Embroidered Kurta Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Pure Chanderi Silk",
        color: "Lime Green",
        size: ["L"],
        price: null,
        originalPrice: null,
        discountPrice: null,
        stock: 25,
        status: "Active",
        featured: true,
        availability: "New Arrival",
        occasion: "Day Festive & Puja",
        image: "products/straight-fit/product-09/front.jpg",
        images: {
            front: "products/straight-fit/product-09/front.jpg",
            side: "",
            zoom: "",
            palazzo: "",
            dupatta: "",
            back: ""
        },
        rating: 5,
        description: "Refreshing vibrant lime green silk straight-cut kurta featuring an intricate geometric motif embroidered yoke patch in chocolate brown and teal, matching tapered pants, and a printed contrast dupatta.",
        careInstructions: "Dry clean first wash.",
        deliveryInfo: "Dispatched within 24-48 hours."
    },
    {
        id: "straight-010",
        numericId: 310,
        sku: "ACH-STR-010",
        name: "Neelambari Indigo Block Printed Flared Kurta Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Pure Cotton Mulmul",
        color: "Indigo Blue",
        size: ["L"],
        price: null,
        originalPrice: null,
        discountPrice: null,
        stock: 22,
        status: "Active",
        featured: true,
        availability: "Best Seller",
        occasion: "Festive & Heritage Occasions",
        image: "products/straight-fit/product-10/front.jpg",
        images: {
            front: "products/straight-fit/product-10/front.jpg",
            side: "",
            zoom: "",
            palazzo: "",
            dupatta: "",
            back: ""
        },
        rating: 5,
        description: "Deep indigo blue artisanal handblock printed kurta with terracotta floral booti motifs, lace accented V-yoke, front waist drawstring tassels, matching trousers, and an elaborate printed dupatta.",
        careInstructions: "Gentle cold hand wash.",
        deliveryInfo: "Dispatched within 24 hours."
    }
];

/**
 * Safely extracts non-empty image slots from a product object.
 * Only returns image slots that actually have a valid file URL.
 */
function getProductImagesList(product) {
    if (!product) return [];
    
    // If product has structured slot images
    if (product.images && typeof product.images === 'object' && !Array.isArray(product.images)) {
        const slots = [
            { key: 'front', label: 'Front View' },
            { key: 'side', label: 'Side View' },
            { key: 'zoom', label: 'Fabric Zoom' },
            { key: 'palazzo', label: 'Palazzo / Bottom' },
            { key: 'dupatta', label: 'Dupatta' },
            { key: 'back', label: 'Back View' }
        ];
        
        const list = [];
        slots.forEach(slot => {
            const val = product.images[slot.key];
            if (val && typeof val === 'string' && val.trim() !== '') {
                list.push({ slot: slot.key, label: slot.label, url: val.trim() });
            }
        });
        
        if (list.length > 0) return list;
    }
    
    // Array of string URLs fallback
    if (Array.isArray(product.images) && product.images.length > 0) {
        return product.images
            .filter(url => url && typeof url === 'string' && url.trim() !== '')
            .map((url, i) => ({ slot: `view_${i+1}`, label: i === 0 ? 'Front View' : `View ${i+1}`, url: url.trim() }));
    }
    
    // Single image fallback
    if (product.image && typeof product.image === 'string' && product.image.trim() !== '') {
        return [{ slot: 'front', label: 'Front View', url: product.image.trim() }];
    }
    
    return [];
}

// Global export for storefront and admin portals
if (typeof window !== 'undefined') {
    window.ACHIRA_PRODUCTS_DATA = ACHIRA_PRODUCTS_DATA;
    window.getProductImagesList = getProductImagesList;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ACHIRA_PRODUCTS_DATA,
        getProductImagesList
    };
}
