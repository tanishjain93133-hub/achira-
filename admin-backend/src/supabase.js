/**
 * ACHIRA COUTURE - SUPABASE DIRECT DATABASE & REST CLIENT
 * Project Reference: yixfebpbiqlhigunjbvt
 */

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://yixfebpbiqlhigunjbvt.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpeGZlYnBiaXFsaGlndW5qYnZ0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NzE2MDkyOSwiZXhwIjoyMTAyNzM2OTI5fQ.ycIKFrEGvueg25UEntZE-4nQDIYz_QQB_5_zlTWf0sU';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpeGZlYnBiaXFsaGlndW5qYnZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxNjA5MjksImV4cCI6MjEwMjczNjkyOX0.yemPfDSe9HK-dDJKunjPxyNaNPR9lrm07h3SVeIW1NY';

function getHeaders(useServiceKey = true) {
  const key = useServiceKey ? SUPABASE_SERVICE_ROLE_KEY : SUPABASE_ANON_KEY;
  return {
    'apikey': key,
    'Authorization': `Bearer ${key}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
  };
}

async function supabaseQuery(endpoint, method = 'GET', body = null, useServiceKey = true) {
  try {
    const url = `${SUPABASE_URL}/rest/v1/${endpoint}`;
    const opts = {
      method,
      headers: getHeaders(useServiceKey)
    };
    if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
      opts.body = JSON.stringify(body);
    }
    const res = await fetch(url, opts);
    if (!res.ok) {
      return { ok: false, status: res.status, data: null };
    }
    const ct = res.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      const json = await res.json();
      return { ok: true, status: res.status, data: json };
    }
    return { ok: true, status: res.status, data: null };
  } catch (err) {
    return { ok: false, status: 0, error: err.message, data: null };
  }
}

// --- Orders ---
async function getSupabaseOrders() {
  const res = await supabaseQuery('orders?select=*&order=created_at.desc');
  return (res.ok && Array.isArray(res.data)) ? res.data : [];
}

async function insertSupabaseOrder(orderData) {
  const payload = {
    id: String(orderData.id),
    customer_name: orderData.customerName || orderData.userName || 'Valued Patron',
    email: orderData.email || orderData.userEmail || '',
    phone: orderData.phone || orderData.userPhone || '',
    address: orderData.address || orderData.userAddress || '',
    payment_method: orderData.paymentMethod || orderData.paymentMode || 'UPI (QR)',
    payment_status: orderData.paymentStatus || 'Paid',
    order_status: orderData.orderStatus || orderData.status || 'Processing',
    subtotal: orderData.subtotal || 0,
    discount: orderData.discount || 0,
    tax: orderData.tax || 0,
    shipping_fee: orderData.shippingFee || orderData.shipping || 0,
    grand_total: orderData.grandTotal || orderData.total || 0,
    items_summary: orderData.itemsSummary || '',
    items_detail: orderData.itemsDetail || orderData.items || [],
    created_at: new Date().toISOString()
  };
  return await supabaseQuery('orders', 'POST', payload);
}

async function updateSupabaseOrderStatus(orderId, newStatus, paymentStatus = null) {
  const payload = {};
  if (newStatus) {
    payload.order_status = newStatus;
  }
  if (paymentStatus) {
    payload.payment_status = paymentStatus;
  }
  return await supabaseQuery(`orders?id=eq.${orderId}`, 'PATCH', payload);
}

async function deleteSupabaseOrder(orderId) {
  return await supabaseQuery(`orders?id=eq.${orderId}`, 'DELETE');
}

// --- Products ---
async function getSupabaseProducts() {
  const res = await supabaseQuery('products?select=*&order=id.asc');
  return (res.ok && Array.isArray(res.data)) ? res.data : [];
}

async function insertSupabaseProduct(prod) {
  return await supabaseQuery('products', 'POST', prod);
}

// --- Customers ---
async function getSupabaseCustomers() {
  const res = await supabaseQuery('users?select=*&order=created_at.desc');
  return (res.ok && Array.isArray(res.data)) ? res.data : [];
}

async function insertSupabaseCustomer(cust) {
  return await supabaseQuery('users', 'POST', cust);
}

// --- Coupons ---
async function getSupabaseCoupons() {
  const res = await supabaseQuery('coupons?select=*');
  return (res.ok && Array.isArray(res.data)) ? res.data : [];
}

async function insertSupabaseCoupon(coupon) {
  return await supabaseQuery('coupons', 'POST', coupon);
}

async function deleteSupabaseCoupon(code) {
  return await supabaseQuery(`coupons?code=eq.${code}`, 'DELETE');
}

// --- Enquiries ---
async function getSupabaseEnquiries() {
  const res = await supabaseQuery('enquiries?select=*&order=created_at.desc');
  return (res.ok && Array.isArray(res.data)) ? res.data : [];
}

async function insertSupabaseEnquiry(enquiry) {
  return await supabaseQuery('enquiries', 'POST', enquiry);
}

// --- Logs ---
async function getSupabaseLogs() {
  const res = await supabaseQuery('logs?select=*&order=created_at.desc&limit=100');
  return (res.ok && Array.isArray(res.data)) ? res.data : [];
}

async function insertSupabaseLog(log) {
  return await supabaseQuery('logs', 'POST', log);
}

// --- Settings ---
async function getSupabaseSettings() {
  const res = await supabaseQuery('settings?select=*&limit=1');
  return (res.ok && Array.isArray(res.data) && res.data.length > 0) ? res.data[0] : null;
}

module.exports = {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY,
  supabaseQuery,
  getSupabaseOrders,
  insertSupabaseOrder,
  updateSupabaseOrderStatus,
  deleteSupabaseOrder,
  getSupabaseProducts,
  insertSupabaseProduct,
  getSupabaseCustomers,
  insertSupabaseCustomer,
  getSupabaseCoupons,
  insertSupabaseCoupon,
  deleteSupabaseCoupon,
  getSupabaseEnquiries,
  insertSupabaseEnquiry,
  getSupabaseLogs,
  insertSupabaseLog,
  getSupabaseSettings
};
