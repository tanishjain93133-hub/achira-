-- ============================================================================
-- ACHIRA LUXURY COUTURE - SUPABASE DATABASE INITIALIZATION SCHEMA
-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/yixfebpbiqlhigunjbvt/sql/new
-- ============================================================================

-- 1. ORDERS TABLE
CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  customer_name TEXT DEFAULT 'Valued Patron',
  email TEXT DEFAULT '',
  phone TEXT DEFAULT '',
  address TEXT DEFAULT '',
  payment_method TEXT DEFAULT 'COD',
  payment_status TEXT DEFAULT 'Pending',
  order_status TEXT DEFAULT 'Processing',
  subtotal NUMERIC DEFAULT 0,
  discount NUMERIC DEFAULT 0,
  tax NUMERIC DEFAULT 0,
  shipping_fee NUMERIC DEFAULT 0,
  grand_total NUMERIC DEFAULT 0,
  items_summary TEXT DEFAULT '',
  items_detail JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS products (
  id BIGINT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT DEFAULT 'Couture',
  price NUMERIC NOT NULL,
  original_price NUMERIC DEFAULT 0,
  discount_price NUMERIC DEFAULT 0,
  fabric TEXT DEFAULT '',
  color TEXT DEFAULT '',
  size TEXT DEFAULT '',
  stock INT DEFAULT 10,
  availability TEXT DEFAULT 'In Stock',
  occasion TEXT DEFAULT 'Festive',
  image TEXT DEFAULT '',
  description TEXT DEFAULT '',
  rating NUMERIC DEFAULT 5.0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. USERS / PATRONS TABLE
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT DEFAULT 'Valued Patron',
  email TEXT UNIQUE NOT NULL,
  phone TEXT DEFAULT '',
  address TEXT DEFAULT '',
  orders_count INT DEFAULT 1,
  total_spent NUMERIC DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. COUPONS TABLE
CREATE TABLE IF NOT EXISTS coupons (
  code TEXT PRIMARY KEY,
  discount NUMERIC DEFAULT 10,
  expiry_date TEXT DEFAULT '2026-12-31',
  status TEXT DEFAULT 'Active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. ENQUIRIES TABLE
CREATE TABLE IF NOT EXISTS enquiries (
  id TEXT PRIMARY KEY,
  name TEXT DEFAULT 'Valued Patron',
  email TEXT DEFAULT '',
  phone TEXT DEFAULT '',
  subject TEXT DEFAULT 'General Inquiry',
  message TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. AUDIT LOGS TABLE
CREATE TABLE IF NOT EXISTS logs (
  id BIGSERIAL PRIMARY KEY,
  user_email TEXT DEFAULT '',
  action TEXT DEFAULT '',
  ip TEXT DEFAULT '127.0.0.1',
  device TEXT DEFAULT 'Web',
  details TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. ATELIER SETTINGS TABLE
CREATE TABLE IF NOT EXISTS settings (
  id INT PRIMARY KEY DEFAULT 1,
  store_name TEXT DEFAULT 'ACHIRA Atelier',
  contact_email TEXT DEFAULT 'atelier@achira.com',
  contact_phone TEXT DEFAULT '+91 98765 43210',
  gst_rate NUMERIC DEFAULT 18,
  shipping_fee NUMERIC DEFAULT 150,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. ROW LEVEL SECURITY & POLICIES (Full Access for Anon and Service Role API Keys)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE coupons ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow all on orders" ON orders;
CREATE POLICY "Allow all on orders" ON orders FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all on products" ON products;
CREATE POLICY "Allow all on products" ON products FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all on users" ON users;
CREATE POLICY "Allow all on users" ON users FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all on coupons" ON coupons;
CREATE POLICY "Allow all on coupons" ON coupons FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all on enquiries" ON enquiries;
CREATE POLICY "Allow all on enquiries" ON enquiries FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all on logs" ON logs;
CREATE POLICY "Allow all on logs" ON logs FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all on settings" ON settings;
CREATE POLICY "Allow all on settings" ON settings FOR ALL USING (true) WITH CHECK (true);

-- Insert Default Atelier Settings
INSERT INTO settings (id, store_name, contact_email, contact_phone, gst_rate, shipping_fee)
VALUES (1, 'ACHIRA Atelier', 'atelier@achira.com', '+91 98765 43210', 18, 150)
ON CONFLICT (id) DO NOTHING;

-- Insert Active Coupons
INSERT INTO coupons (code, discount, expiry_date, status)
VALUES 
  ('LUXE15', 15, '2026-12-31', 'Active'),
  ('ACHIRA1960', 20, '2026-12-31', 'Active'),
  ('FESTIVE20', 20, '2026-12-31', 'Active')
ON CONFLICT (code) DO NOTHING;
