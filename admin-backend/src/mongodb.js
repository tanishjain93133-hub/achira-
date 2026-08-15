const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 
  (process.env.DATABASE_URL && (process.env.DATABASE_URL.startsWith('mongodb://') || process.env.DATABASE_URL.startsWith('mongodb+srv://')) ? process.env.DATABASE_URL : null) || 
  'mongodb://127.0.0.1:27017/achira';

let isConnected = false;

// Disable command buffering so queries don't hang if MongoDB is offline
mongoose.set('strictQuery', false);
mongoose.set('bufferCommands', false);

async function connectMongoDB() {
  if (isConnected && mongoose.connection.readyState === 1) return true;
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 3000,
      connectTimeoutMS: 3000,
      bufferCommands: false
    });
    isConnected = true;
    console.log('🍃 :: MongoDB Database Connected Successfully to:', MONGODB_URI.replace(/:[^:@]+@/, ':****@'));
    return true;
  } catch (err) {
    console.warn('🍃 :: MongoDB Connection Notice (using resilient store fallback):', err.message);
    isConnected = false;
    return false;
  }
}

// Auto connect in background
connectMongoDB().catch(() => {});

// --- Mongoose Schemas & Models ---

const UserSchema = new mongoose.Schema({
  id: { type: Number, index: true },
  name: { type: String, default: 'Valued Patron' },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, default: '' },
  phone: { type: String, default: '' },
  address: { type: String, default: '' },
  city: { type: String, default: '' },
  state: { type: String, default: '' },
  pincode: { type: String, default: '' },
  role: { type: String, default: 'User' },
  regDate: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: Date.now }
}, { timestamps: true, bufferCommands: false });

const ProductSchema = new mongoose.Schema({
  id: { type: Number, index: true, unique: true },
  name: { type: String, required: true },
  category: { type: String, default: 'Couture' },
  fabric: { type: String, default: 'Silk' },
  color: { type: String, default: 'Gold' },
  size: { type: String, default: 'M' },
  price: { type: Number, required: true },
  availability: { type: String, default: 'In Stock' },
  occasion: { type: String, default: 'Festive' },
  image: { type: String, default: '' },
  rating: { type: Number, default: 5.0 },
  stock: { type: Number, default: 10 },
  sku: { type: String, default: '' },
  description: { type: String, default: '' },
  videoUrl: { type: String, default: '' },
  featured: { type: Boolean, default: false },
  trending: { type: Boolean, default: false }
}, { timestamps: true, bufferCommands: false });

const OrderSchema = new mongoose.Schema({
  id: { type: Number, index: true, unique: true },
  userId: { type: Number, default: 0 },
  customerName: { type: String, default: 'Valued Patron' },
  userName: { type: String, default: 'Valued Patron' },
  email: { type: String, default: '', index: true },
  userEmail: { type: String, default: '' },
  phone: { type: String, default: '' },
  userPhone: { type: String, default: '' },
  address: { type: String, default: '' },
  userAddress: { type: String, default: '' },
  paymentMethod: { type: String, default: 'COD' },
  paymentMode: { type: String, default: 'COD' },
  paymentStatus: { type: String, default: 'Pending' },
  orderStatus: { type: String, default: 'Pending' },
  status: { type: String, default: 'Pending' },
  invoiceNumber: { type: String, default: '' },
  trackingNumber: { type: String, default: '' },
  shippingFee: { type: Number, default: 0 },
  tax: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  subtotal: { type: Number, default: 0 },
  grandTotal: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
  itemsSummary: { type: String, default: '' },
  itemsDetail: { type: Array, default: [] },
  date: { type: String, default: '' }
}, { timestamps: true, bufferCommands: false });

const SettingsSchema = new mongoose.Schema({
  id: { type: Number, default: 1 },
  gst: { type: Number, default: 18 },
  shipping: { type: Number, default: 150 },
  email: { type: String, default: 'atelier@achira.com' },
  phone: { type: String, default: '+91 98765 43210' },
  storeName: { type: String, default: 'ACHIRA Atelier' },
  paymentGateway: { type: String, default: 'Razorpay' },
  logo: { type: String, default: '' },
  favicon: { type: String, default: '' },
  socialLinks: { type: String, default: '' }
}, { timestamps: true, bufferCommands: false });

const CouponSchema = new mongoose.Schema({
  id: { type: Number },
  code: { type: String, required: true, unique: true, index: true },
  discount: { type: Number, default: 10 },
  expiry: { type: String, default: '2026-12-31' },
  status: { type: String, default: 'Active' }
}, { timestamps: true, bufferCommands: false });

const ContactSchema = new mongoose.Schema({
  id: { type: String, index: true },
  name: { type: String, default: 'Valued Patron' },
  phone: { type: String, default: '' },
  contact: { type: String, default: '' },
  email: { type: String, default: '' },
  subject: { type: String, default: 'General Inquiry' },
  message: { type: String, default: '' },
  date: { type: String, default: '' }
}, { timestamps: true, bufferCommands: false });

const LogSchema = new mongoose.Schema({
  id: { type: Number },
  userId: { type: Number },
  adminId: { type: Number },
  action: { type: String, default: '' },
  ip: { type: String, default: '127.0.0.1' },
  browser: { type: String, default: 'Chrome' },
  os: { type: String, default: 'Windows' },
  device: { type: String, default: 'Web' },
  timestamp: { type: String, default: '' },
  details: { type: String, default: '' }
}, { timestamps: true, bufferCommands: false });

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);
const ProductModel = mongoose.models.Product || mongoose.model('Product', ProductSchema);
const OrderModel = mongoose.models.Order || mongoose.model('Order', OrderSchema);
const SettingsModel = mongoose.models.Settings || mongoose.model('Settings', SettingsSchema);
const CouponModel = mongoose.models.Coupon || mongoose.model('Coupon', CouponSchema);
const ContactModel = mongoose.models.ContactMessage || mongoose.model('ContactMessage', ContactSchema);
const LogModel = mongoose.models.LoginActivity || mongoose.model('LoginActivity', LogSchema);

function isDbReady() {
  return mongoose.connection && mongoose.connection.readyState === 1;
}

module.exports = {
  mongoose,
  connectMongoDB,
  isDbReady,
  UserModel,
  ProductModel,
  OrderModel,
  SettingsModel,
  CouponModel,
  ContactModel,
  LogModel
};
