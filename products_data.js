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
    // (Ready for new Straight Fit dresses)
    // ==========================================
];

// Provide to Global Window Scope
if (typeof window !== 'undefined') {
    window.ACHIRA_PRODUCTS_DATA = ACHIRA_PRODUCTS_DATA;
}

// Support Node.js export if used in server environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ACHIRA_PRODUCTS_DATA };
}
