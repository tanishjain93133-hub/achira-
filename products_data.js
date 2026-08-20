/**
 * ACHIRA COUTURE - Centralized & Scalable Products Database
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
    // --- STRAIGHT FIT COLLECTION ---
    {
        id: "straight-001",
        numericId: 301,
        sku: "ACH-STR-001",
        name: "Zari & Zardozi Embroidered Olive Silk Sharara Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Pure Raw Silk & Chanderi",
        color: "Olive Green",
        size: ["XS", "S", "M", "L", "XL", "XXL"],
        price: 4899,
        originalPrice: 5999,
        discountPrice: 4899,
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
        numericId: 201,
        sku: "ACH-STR-002",
        name: "Mayura Mustard & Teal Blue Embroidered Straight Kurta Pant Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Pure Cotton Slub",
        color: "Mustard Yellow & Teal",
        size: ["XS", "S", "M", "L", "XL", "XXL"],
        price: 3450,
        originalPrice: 4200,
        discountPrice: 3450,
        stock: 26,
        status: "Active",
        featured: true,
        availability: "Best Seller",
        occasion: "Casual & Festive",
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
        description: "Chic dual-tone straight kurta set in mustard yellow with a teal blue embroidered chest patch featuring geometric stitch-work, paired with matching tailored trousers and a lavish geometric printed teal dupatta.",
        careInstructions: "Hand wash cold with mild detergent. Dry in shade.",
        deliveryInfo: "Dispatched within 24-48 hours. Express delivery across India in 3-5 business days."
    },
    {
        id: "straight-003",
        numericId: 202,
        sku: "ACH-STR-003",
        name: "Parijaat Lime Green V-Neck Motif Embroidered Kurta Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Pure Chanderi Silk",
        color: "Lime Green",
        size: ["XS", "S", "M", "L", "XL", "XXL"],
        price: 3850,
        originalPrice: 4600,
        discountPrice: 3850,
        stock: 20,
        status: "Active",
        featured: true,
        availability: "Trending",
        occasion: "Day Festive & Office Wear",
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
        description: "Refreshing lime green straight kurta set accented with a contrasting dark green embroidered V-neckline border, tree of life central motif, geometric hem detailing, and matching printed tapered trousers.",
        careInstructions: "Dry clean first wash. Gentle cold hand wash thereafter.",
        deliveryInfo: "Dispatched within 24-48 hours. Express delivery in 3-5 business days."
    },
    {
        id: "straight-004",
        numericId: 203,
        sku: "ACH-STR-004",
        name: "Raktika Crimson Red Sleeveless Kurta Trouser Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Modal Satin Silk",
        color: "Crimson Red",
        size: ["XS", "S", "M", "L", "XL", "XXL"],
        price: 4100,
        originalPrice: 4900,
        discountPrice: 4100,
        stock: 18,
        status: "Active",
        featured: true,
        availability: "New Arrival",
        occasion: "Party & Evening Festive",
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
        description: "Bold and alluring crimson red sleeveless straight silhouette kurta tailored from lustrous modal satin silk, featuring minimal neckline piping, side slits, matching ankle-length trousers, and a lightweight printed contrast dupatta.",
        careInstructions: "Dry clean recommended for maintaining satin silk lustre.",
        deliveryInfo: "Dispatched within 24-48 hours. Express delivery across India in 3-5 business days."
    },
    {
        id: "straight-005",
        numericId: 204,
        sku: "ACH-STR-005",
        name: "Gulbahar Ivory & Pink Floral Printed Straight Kurta Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Mulmul Cotton",
        color: "Ivory White",
        size: ["XS", "S", "M", "L", "XL", "XXL"],
        price: 3200,
        originalPrice: 3800,
        discountPrice: 3200,
        stock: 30,
        status: "Active",
        featured: true,
        availability: "Best Seller",
        occasion: "Summer Festive & Daily Luxury",
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
        description: "Serene ivory white straight kurta adorned with delicate pink hand-block floral sprigs, a lace-trimmed round neckline with keyhole notch, matching comfort-fit trousers, and a soft breathable mulmul dupatta.",
        careInstructions: "Hand wash cold inside out with gentle detergent.",
        deliveryInfo: "Dispatched within 24 hours. Delivery in 3-5 business days."
    },
    {
        id: "straight-006",
        numericId: 205,
        sku: "ACH-STR-006",
        name: "Shyamala Royal Indigo Chanderi Silk Kurta Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Pure Chanderi Silk",
        color: "Indigo Blue",
        size: ["XS", "S", "M", "L", "XL", "XXL"],
        price: 4350,
        originalPrice: 5200,
        discountPrice: 4350,
        stock: 22,
        status: "Active",
        featured: true,
        availability: "New Arrival",
        occasion: "Festive & Dinner",
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
        description: "Deep indigo blue Chanderi silk straight kurta enriched with delicate silver zari threadwork along the neckline and cuffs, tonal trousers, and an organza dupatta embellished with scalloped borders.",
        careInstructions: "Dry clean first wash. Gentle cold hand wash separately thereafter.",
        deliveryInfo: "Dispatched within 24-48 hours. Express delivery across India in 3-5 business days."
    },
    {
        id: "straight-007",
        numericId: 206,
        sku: "ACH-STR-007",
        name: "Zeenat Peach Mirror Work Straight Fit Kurta Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Chanderi Cotton",
        color: "Peach Pastel",
        size: ["XS", "S", "M", "L", "XL", "XXL"],
        price: 3650,
        originalPrice: 4400,
        discountPrice: 3650,
        stock: 20,
        status: "Active",
        featured: true,
        availability: "Trending",
        occasion: "Day Wedding & Pooja",
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
        description: "Pastel peach straight kurta set embellished with subtle mirror work on the neck yoke, 3/4th sleeves with gota patti borders, tonal straight pants, and a featherlight printed chiffon dupatta.",
        careInstructions: "Dry clean recommended to protect delicate mirror work.",
        deliveryInfo: "Dispatched within 24-48 hours. Express delivery in 3-5 business days."
    },
    {
        id: "straight-008",
        numericId: 207,
        sku: "ACH-STR-008",
        name: "Aafreen Teal Floral Embroidered Straight Kurta Suit",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Cotton Silk",
        color: "Teal Green",
        size: ["XS", "S", "M", "L", "XL", "XXL"],
        price: 3999,
        originalPrice: 4850,
        discountPrice: 3999,
        stock: 19,
        status: "Active",
        featured: true,
        availability: "Best Seller",
        occasion: "Festive & Family Gatherings",
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
        description: "Opulent teal green cotton silk straight kurta featuring floral needle embroidery on the placket, 3/4th sleeves with lace accents, matching tonal trousers, and a luxurious Banarasi border dupatta.",
        careInstructions: "Hand wash cold with mild detergent or dry clean.",
        deliveryInfo: "Dispatched within 24 hours. Delivery in 3-5 business days."
    },
    {
        id: "straight-009",
        numericId: 208,
        sku: "ACH-STR-009",
        name: "Mehrunisa Ruby Maroon Velvet Touch Straight Kurti Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Silk Blend",
        color: "Ruby Maroon",
        size: ["XS", "S", "M", "L", "XL", "XXL"],
        price: 4550,
        originalPrice: 5500,
        discountPrice: 4550,
        stock: 17,
        status: "Active",
        featured: true,
        availability: "New Arrival",
        occasion: "Winter Wedding & Reception",
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
        description: "Regal ruby maroon straight cut suit set accented with delicate zari embroidery along the mandarin collar, sleeve cuffs, and side slits, complemented by silk trousers and a lightweight jacquard dupatta.",
        careInstructions: "Strictly dry clean only.",
        deliveryInfo: "Dispatched within 24-48 hours. Express delivery across India in 3-5 business days."
    },
    {
        id: "straight-010",
        numericId: 209,
        sku: "ACH-STR-010",
        name: "Kashish Sage Green Handblock Straight Kurta Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Organic Cotton",
        color: "Sage Green",
        size: ["XS", "S", "M", "L", "XL", "XXL"],
        price: 3350,
        originalPrice: 3999,
        discountPrice: 3350,
        stock: 28,
        status: "Active",
        featured: true,
        availability: "Best Seller",
        occasion: "Casual Chic & Workwear",
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
        description: "Subtle sage green handblock printed straight kurta featuring classic floral jaal motifs, buttoned placket, straight silhouette, ankle pants, and a matching handblock cotton doriya dupatta.",
        careInstructions: "Hand wash separately in cold water with mild detergent.",
        deliveryInfo: "Dispatched within 24 hours. Delivery in 3-5 business days."
    },
    {
        id: "straight-011",
        numericId: 210,
        sku: "ACH-STR-011",
        name: "Chandrika Lavender Zari Woven Straight Suit Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Chanderi Silk",
        color: "Lavender Purple",
        size: ["XS", "S", "M", "L", "XL", "XXL"],
        price: 4200,
        originalPrice: 5100,
        discountPrice: 4200,
        stock: 21,
        status: "Active",
        featured: true,
        availability: "Trending",
        occasion: "Festive & Party",
        image: "products/straight-fit/product-11/front.jpg",
        images: {
            front: "products/straight-fit/product-11/front.jpg",
            side: "",
            zoom: "",
            palazzo: "",
            dupatta: "",
            back: ""
        },
        rating: 5,
        description: "Graceful lavender purple Chanderi silk straight suit with all-over woven zari booti patterns, intricate lace detailing on the round neckline, tonal tailored trousers, and an airy matching dupatta.",
        careInstructions: "Dry clean first wash. Gentle cold hand wash separately thereafter.",
        deliveryInfo: "Dispatched within 24-48 hours. Express delivery in 3-5 business days."
    }
];

// Helper to extract available images without broken/empty links
function getProductImagesList(product) {
    if (!product) return [];
    
    // Check structured images object (front, side, zoom, palazzo, dupatta, back)
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
            const url = product.images[slot.key];
            if (url && typeof url === 'string' && url.trim().length > 0) {
                list.push({ type: slot.key, label: slot.label, url: url.trim() });
            }
        });
        if (list.length > 0) return list;
    }
    
    // Check array format
    if (Array.isArray(product.images) && product.images.length > 0) {
        return product.images.map((img, i) => ({
            type: 'view-' + (i + 1),
            label: i === 0 ? 'Front View' : `Angle ${i + 1}`,
            url: typeof img === 'string' ? img : (img.url || '')
        })).filter(item => item.url && item.url.trim().length > 0);
    }
    
    // Fallback to single primary image
    if (product.image && typeof product.image === 'string' && product.image.trim().length > 0) {
        return [{ type: 'front', label: 'Front View', url: product.image.trim() }];
    }
    
    return [];
}

if (typeof window !== 'undefined') {
    window.ACHIRA_PRODUCTS_DATA = ACHIRA_PRODUCTS_DATA;
    window.getProductImagesList = getProductImagesList;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ACHIRA_PRODUCTS_DATA, getProductImagesList };
}
