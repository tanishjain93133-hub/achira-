const bcrypt = require('bcryptjs');

async function test() {
  const plainPass = 'achira@8061@7741';
  const hashedPass = '$2a$10$B9UkTQmYtBtNW9fz0uR7Q.z9PvmXSu2F9a74319zhQlglh9mjWAIy';
  const match = await bcrypt.compare(plainPass, hashedPass);
  console.log('Plain:', plainPass);
  console.log('Match result:', match);
}
test();
