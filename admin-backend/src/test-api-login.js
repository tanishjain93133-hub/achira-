const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  try {
    // 1. Fetch SQL record
    const adminRecord = await prisma.admin.findUnique({
      where: { username: 'Achira@123' }
    });
    console.log('--- SQL RECORD FOR ADMIN USER ---');
    console.log(JSON.stringify(adminRecord, null, 2));

    // 2. Perform test login request
    const res = await fetch('http://localhost:5000/api/admin/login', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ username: 'Achira@123', password: 'achira@8061@7741' })
    });
    const loginResponse = await res.json();
    console.log('\n--- API RESPONSE FROM SUCCESSFUL LOGIN TEST ---');
    console.log('Status Code:', res.status);
    console.log(JSON.stringify(loginResponse, null, 2));

  } catch(e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

run();
