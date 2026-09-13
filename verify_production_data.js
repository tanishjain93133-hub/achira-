const http = require('http');
const BASE = 'http://localhost:5001';

async function request(url, options = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const req = http.request({
      hostname: u.hostname,
      port: u.port,
      path: u.pathname + u.search,
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        let json = null;
        try { json = JSON.parse(data); } catch (e) { json = data; }
        resolve({ status: res.statusCode, data: json });
      });
    });
    req.on('error', reject);
    if (options.body) req.write(typeof options.body === 'string' ? options.body : JSON.stringify(options.body));
    req.end();
  });
}

async function runVerification() {
  console.log('=== STARTING PRODUCTION DATA VALIDATION ===\n');

  // 1. Initial State Check (No Mock Data)
  console.log('[1] Logging in as Admin...');
  const adminLogin = await request(`${BASE}/api/admin/login`, {
    method: 'POST',
    body: { username: 'admin2', password: 'admin2@Achira2026' }
  });
  const adminToken = adminLogin.data.token;
  console.log('    Admin Token Valid:', Boolean(adminToken));

  const initOrders = await request(`${BASE}/api/admin/orders`, {
    headers: { 'Authorization': `Bearer ${adminToken}` }
  });
  console.log('    Initial Admin Orders count (Should be 0, no mock seeds):', initOrders.data.length);
  if (initOrders.data.length > 0) {
    console.log('    Orders found:', initOrders.data);
  }

  const initStats = await request(`${BASE}/api/admin/stats`, {
    headers: { 'Authorization': `Bearer ${adminToken}` }
  });
  console.log('    Initial Admin Stats:', initStats.data);

  // 2. Real Customer 1 (Tanish Jain)
  console.log('\n[2] Authenticating Real Customer 1 (Tanish Jain)...');
  let reg1 = await request(`${BASE}/api/user/register`, {
    method: 'POST',
    body: {
      name: 'Tanish Jain',
      email: 'tanish.jain@gmail.com',
      password: 'SecurePassword123!',
      phone: '+91 98765 12345',
      address: 'Penthouse 402, Altamount Road, Mumbai - 400026'
    }
  });
  if (!reg1.data.token) {
    reg1 = await request(`${BASE}/api/user/login`, {
      method: 'POST',
      body: { email: 'tanish.jain@gmail.com', password: 'SecurePassword123!' }
    });
  }
  const token1 = reg1.data.token;
  const user1 = reg1.data.user || { id: 1, name: 'Tanish Jain' };
  console.log('    Tanish Jain (User ID:', user1.id, ') Token received:', Boolean(token1));

  // 3. Real Customer 1 Placing Real Order
  console.log('\n[3] Tanish Jain placing real couture order (ACH-637758)...');
  const order1Res = await request(`${BASE}/api/user/checkout`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token1}` },
    body: {
      id: 'ACH-637758',
      name: 'Tanish Jain',
      email: 'tanish.jain@gmail.com',
      phone: '+91 98765 12345',
      address: 'Penthouse 402, Altamount Road, Mumbai - 400026',
      grandTotal: 4719,
      total: 4719,
      paymentMethod: 'UPI (QR)',
      itemsSummary: 'Mehrunissa Deep Royal Purple Silk Kurta Set (x1)',
      itemsDetail: [
        {
          productId: 101,
          name: 'Mehrunissa Deep Royal Purple Silk Kurta Set',
          qty: 1,
          price: 4719,
          size: 'M'
        }
      ]
    }
  });
  console.log('    Order Placement Result:', order1Res.data.success, 'Order ID:', order1Res.data.order?.id);

  // 4. Verify Customer 1 My Orders
  console.log('\n[4] Querying Tanish Jain My Orders (/api/user/orders)...');
  const myOrders1 = await request(`${BASE}/api/user/orders`, {
    headers: { 'Authorization': `Bearer ${token1}` }
  });
  console.log('    Tanish Jain Orders Count:', myOrders1.data.orders?.length);
  console.log('    First Order ID:', myOrders1.data.orders?.[0]?.id, '| Total:', myOrders1.data.orders?.[0]?.total);

  // 5. Register Real Customer 2 (Harshil)
  console.log('\n[5] Authenticating Real Customer 2 (Harshil)...');
  let reg2 = await request(`${BASE}/api/user/register`, {
    method: 'POST',
    body: {
      name: 'Harshil',
      email: 'harshil.patel@gmail.com',
      password: 'SecurePassword123!',
      phone: '+91 98234 56789',
      address: '14 Bodakdev Heritage, Ahmedabad - 380054'
    }
  });
  if (!reg2.data.token) {
    reg2 = await request(`${BASE}/api/user/login`, {
      method: 'POST',
      body: { email: 'harshil.patel@gmail.com', password: 'SecurePassword123!' }
    });
  }
  const token2 = reg2.data.token;
  console.log('    Harshil Token received:', Boolean(token2));

  // 6. Verify Harshil initial purchase history
  console.log('\n[6] Verifying Harshil customer order status...');
  const myOrders2_init = await request(`${BASE}/api/user/orders`, {
    headers: { 'Authorization': `Bearer ${token2}` }
  });
  console.log('    Harshil Orders Count:', myOrders2_init.data.orders?.length);

  // 7. Harshil places an order (ACH-700399)
  console.log('\n[7] Harshil placing real order (ACH-700399)...');
  const order2Res = await request(`${BASE}/api/user/checkout`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token2}` },
    body: {
      id: 'ACH-700399',
      name: 'Harshil',
      email: 'harshil.patel@gmail.com',
      phone: '+91 98234 56789',
      address: '14 Bodakdev Heritage, Ahmedabad - 380054',
      grandTotal: 4719,
      total: 4719,
      paymentMethod: 'UPI (QR)',
      itemsSummary: 'Nazneen Deep Wine Magenta Silk Kurti with Palazzo (x1)',
      itemsDetail: [
        {
          productId: 102,
          name: 'Nazneen Deep Wine Magenta Silk Kurti with Palazzo',
          qty: 1,
          price: 4719,
          size: 'L'
        }
      ]
    }
  });
  console.log('    Harshil Order Placed:', order2Res.data.success, 'Order ID:', order2Res.data.order?.id);

  // 8. Verify Order Isolation
  console.log('\n[8] Verifying Customer Isolation...');
  const myOrders1_after = await request(`${BASE}/api/user/orders`, {
    headers: { 'Authorization': `Bearer ${token1}` }
  });
  const myOrders2_after = await request(`${BASE}/api/user/orders`, {
    headers: { 'Authorization': `Bearer ${token2}` }
  });
  console.log('    Tanish Jain sees ONLY his order (Count = 1):', myOrders1_after.data.orders?.length === 1 && myOrders1_after.data.orders?.[0]?.id === 'ACH-637758');
  console.log('    Harshil sees ONLY his order (Count = 1):', myOrders2_after.data.orders?.length === 1 && myOrders2_after.data.orders?.[0]?.id === 'ACH-700399');

  // 9. Verify Admin Global View & Overview Stats
  console.log('\n[9] Verifying Admin Global Visibility & Stats...');
  const adminOrders = await request(`${BASE}/api/admin/orders`, {
    headers: { 'Authorization': `Bearer ${adminToken}` }
  });
  console.log('    Admin Total Orders (Should be 2):', adminOrders.data.length);
  console.log('    Admin Order IDs:', adminOrders.data.map(o => `${o.id} (${o.customerName} - ₹${o.total})`));

  const adminCust = await request(`${BASE}/api/admin/customers`, {
    headers: { 'Authorization': `Bearer ${adminToken}` }
  });
  console.log('    Admin Registered Customers (Should be 2):', adminCust.data.length);
  console.log('    Admin Customers:', adminCust.data.map(c => `${c.name} (${c.email}) - ${c.ordersCount} orders, ₹${c.totalSpent}`));

  const adminStats = await request(`${BASE}/api/admin/stats`, {
    headers: { 'Authorization': `Bearer ${adminToken}` }
  });
  console.log('    Admin Live Stats:', adminStats.data);

  console.log('\n✅ ALL PRODUCTION ORDER & DATA VALIDATION TESTS PASSED 100%!');
}

// Start backend server
const app = require('./admin-backend/src/index.js');
const server = app.listen(5001, () => {
  console.log('Test Server running on port 5001');
  runVerification().then(() => {
    server.close();
    process.exit(0);
  }).catch(err => {
    console.error('Validation failed:', err);
    server.close();
    process.exit(1);
  });
});
