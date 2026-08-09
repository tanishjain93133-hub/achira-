async function testLiveVercel() {
  console.log('Testing live Vercel backend at https://admin-backend-pearl.vercel.app...');

  try {
    const loginRes = await fetch('https://admin-backend-pearl.vercel.app/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'admin', password: 'admin123' })
    });
    console.log('Login Status:', loginRes.status);
    const loginData = await loginRes.json();
    console.log('Login Token:', loginData.token ? 'RECEIVED' : 'FAILED');

    if (loginData.token) {
      const ordersRes = await fetch('https://admin-backend-pearl.vercel.app/api/admin/orders', {
        headers: { 'Authorization': `Bearer ${loginData.token}` }
      });
      console.log('Admin Orders Status:', ordersRes.status);
      const ordersData = await ordersRes.json();
      console.log('Orders Count:', Array.isArray(ordersData) ? ordersData.length : ordersData);
    }
  } catch (err) {
    console.error('Vercel live test error:', err);
  }
}

testLiveVercel();
