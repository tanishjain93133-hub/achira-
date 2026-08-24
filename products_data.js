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
        name: "Noor-e-Gulab Blush Powder Pink Silk Sharara Set with Pearl Tassels",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Pure Raw Silk & Chanderi",
        color: "Blush Powder Pink",
        size: ["S", "M", "L", "XL", "XXL"],
        price: null,
        originalPrice: null,
        discountPrice: null,
        stock: 25,
        status: "Active",
        featured: true,
        availability: "New Arrival",
        occasion: "Festive, Wedding Reception & Day Glamour",
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
        description: "Ethereal blush powder pink straight-cut raw silk kurta adorned with delicate floral resham and silver threadwork embroidery along the neckline, shimmering pearl droplet tassels along the bottom hem, paired with wide pleated matching sharara pants and an intricately embroidered scalloped border dupatta.",
        careInstructions: "Dry clean only to maintain delicate pearl tassel detailing and the pristine sheen of pure raw silk.",
        deliveryInfo: "Dispatched within 24-48 hours. Express delivery across India in 3-5 business days."
    },
    {
        id: "straight-002",
        numericId: 302,
        sku: "ACH-STR-002",
        name: "Nazneen Deep Wine Magenta Silk Kurti with Embellished V-Yoke & Wide Palazzo Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Pure Raw Silk & Fluid Crepe",
        color: "Deep Magenta / Wine Plum",
        size: ["S", "M", "L", "XL", "XXL"],
        price: null,
        originalPrice: null,
        discountPrice: null,
        stock: 28,
        status: "Active",
        featured: true,
        availability: "Trending",
        occasion: "Evening Soirees, Sangeet & Celebrations",
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
        description: "Striking jewel-toned deep magenta wine straight-fit raw silk kurti featuring an intricately hand-embroidered multi-color resham and zardozi V-neckline yoke, sleek three-quarter sleeves, high side slits, paired with voluminous coordinated wide-leg palazzo pants.",
        careInstructions: "Dry clean only to preserve raw silk texture and fine metallic yoke embroidery.",
        deliveryInfo: "Dispatched within 24-48 hours across India."
    },
    {
        id: "straight-003",
        numericId: 303,
        sku: "ACH-STR-003",
        name: "Zehra Olive Mehendi Green Silk Kurta with Diamond Medallion & Scalloped Dupatta Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Pure Silk & Sheer Organza",
        color: "Olive Mehendi Green",
        size: ["S", "M", "L", "XL", "XXL"],
        price: null,
        originalPrice: null,
        discountPrice: null,
        stock: 22,
        status: "Active",
        featured: true,
        availability: "Best Seller",
        occasion: "Mehendi, Haldi & Festive Celebrations",
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
        description: "Sophisticated olive green straight-cut silk kurti highlighted by a geometric silver gota diamond medallion on the bodice with artisanal silk tassels, ornate sleeve embroidery, paired with relaxed pleated dhoti-sharara bottoms and a flowing scalloped embroidered dupatta with corner tassels.",
        careInstructions: "Dry clean only to maintain delicate silk tassels and metallic thread embellishments.",
        deliveryInfo: "Dispatched within 24-48 hours across India."
    },
    {
        id: "straight-004",
        numericId: 304,
        sku: "ACH-STR-004",
        name: "Mumtaz Royal Moss Green Silk Kurti with Handcrafted Chakra Medallion & Sharara Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Handloom Raw Silk & Chanderi",
        color: "Royal Moss Green",
        size: ["S", "M", "L", "XL", "XXL"],
        price: null,
        originalPrice: null,
        discountPrice: null,
        stock: 20,
        status: "Active",
        featured: true,
        availability: "New Arrival",
        occasion: "Royal Weddings, Sangeet & Festive Galas",
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
        description: "Magnificent moss green raw silk straight kurti crowned by a grand circular sun medallion (chakra motif) handcrafted in gold zari and magenta resham embroidery, accented with pearl droplet tassels on the hem, paired with a flared gathered sharara and a luxurious gold-embroidered border dupatta.",
        careInstructions: "Professional dry clean only.",
        deliveryInfo: "Dispatched within 24-48 hours across India."
    },
    {
        id: "straight-005",
        numericId: 305,
        sku: "ACH-STR-005",
        name: "Roshni Dusty Mauve Lavender Silk Kurti with Tiered Sharara & Printed Organza Dupatta Set",
        category: "Straight Fit",
        parentCategory: "Ethnic Wear",
        fabric: "Pure Mulberry Silk & Printed Organza",
        color: "Dusty Mauve Lavender",
        size: ["S", "M", "L", "XL", "XXL"],
        price: null,
        originalPrice: null,
        discountPrice: null,
        stock: 24,
        status: "Active",
        featured: true,
        availability: "Trending",
        occasion: "Day Weddings, Sangeet & Intimate Receptions",
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
        description: "Regal dusty mauve lavender straight-fit pure silk kurti highlighted by silver resham threadwork along the neckline and front button placket, matched with dramatic tiered layered sharara pants and an ethereal floral-printed sheer organza dupatta framed in woven gold zari borders.",
        careInstructions: "Dry clean only.",
        deliveryInfo: "Dispatched within 24-48 hours across India."
    }
];

// Provide to Global Window Scope
if (typeof window !== 'undefined') {
    window.ACHIRA_PRODUCTS_DATA = ACHIRA_PRODUCTS_DATA;
}

// Support Node.js export if used in server environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ACHIRA_PRODUCTS_DATA };
}
