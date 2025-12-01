import { Product, Order, OrderStatus, StoreConfig } from "../types";

// Categories list for reuse
export const PRODUCT_CATEGORIES = [
  'لبنیات',
  'خواربار',
  'پروتئینی',
  'نوشیدنی',
  'تنقلات',
  'بستنی',
  'فست فود و منجمد',
  'میوه و سبزیجات',
  'بهداشتی',
  'دخانیات و مواد افزودنی',
  'مواد افزودنی'
];

// Seed data for the store - Updated with realistic prices (Tomans)
const INITIAL_PRODUCTS: Product[] = [
  // --- Dairy (لبنیات) ---
  { id: '101', name: 'شیر کم چرب کاله ۱ لیتر', price: 32000, category: 'لبنیات', unit: 'بطری', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=300' },
  { id: '102', name: 'شیر پرچرب دامداران ۱ لیتر', price: 34000, category: 'لبنیات', unit: 'بطری', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=300' },
  { id: '103', name: 'پنیر فتا پگاه ۴۰۰ گرم', price: 68000, category: 'لبنیات', unit: 'بسته', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=300' },
  { id: '104', name: 'پنیر خامه‌ای ویلی ۲۰۰ گرم', price: 45000, category: 'لبنیات', unit: 'بسته', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=300' },
  { id: '105', name: 'ماست سون کاله ۲.۲ کیلوگرم', price: 145000, category: 'لبنیات', unit: 'دبه', image: 'https://images.unsplash.com/photo-1562166453-6056636739d4?auto=format&fit=crop&q=80&w=300' },
  { id: '106', name: 'کره پاستوریزه ۱۰۰ گرمی', price: 42000, category: 'لبنیات', unit: 'عدد', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=300' },
  { id: '107', name: 'خامه صبحانه صورتی ۲۰۰ گرم', price: 38000, category: 'لبنیات', unit: 'پاکت', image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=300' },
  { id: '108', name: 'دوغ آلیس ۱.۵ لیتر', price: 42000, category: 'لبنیات', unit: 'بطری', image: 'https://images.unsplash.com/photo-1626139576127-4589d892842e?auto=format&fit=crop&q=80&w=300' },

  // --- Groceries (خواربار) ---
  { id: '201', name: 'برنج ایرانی هاشمی درجه یک', price: 1350000, category: 'خواربار', unit: '۱۰ کیلوگرم', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=300' },
  { id: '202', name: 'برنج هندی خاطره', price: 580000, category: 'خواربار', unit: '۱۰ کیلوگرم', image: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d449cd?auto=format&fit=crop&q=80&w=300' },
  { id: '203', name: 'روغن مایع آفتابگردان لادن', price: 62000, category: 'خواربار', unit: '۸۱۰ گرم', image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=300' },
  { id: '204', name: 'روغن سرخ کردنی بهار', price: 85000, category: 'خواربار', unit: '۱.۵ لیتر', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=300' },
  { id: '205', name: 'ماکارونی زر ماکارون ۱.۲', price: 28000, category: 'خواربار', unit: '۷۰۰ گرم', image: 'https://images.unsplash.com/photo-1551462147-37885acc36f1?auto=format&fit=crop&q=80&w=300' },
  { id: '206', name: 'رب گوجه فرنگی روژین', price: 65000, category: 'خواربار', unit: '۸۰۰ گرم', image: 'https://images.unsplash.com/photo-1596450523249-14a51eb83e60?auto=format&fit=crop&q=80&w=300' },
  { id: '207', name: 'قند شکسته ۵ کیلویی', price: 210000, category: 'خواربار', unit: 'بسته', image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&q=80&w=300' },
  { id: '208', name: 'شکر سفید', price: 42000, category: 'خواربار', unit: '۱ کیلوگرم', image: 'https://images.unsplash.com/photo-1622484214029-03f528331528?auto=format&fit=crop&q=80&w=300' },
  { id: '209', name: 'عدس ریز کانادایی', price: 95000, category: 'خواربار', unit: '۹۰۰ گرم', image: 'https://images.unsplash.com/photo-1515543904379-3d757afe7264?auto=format&fit=crop&q=80&w=300' },
  { id: '210', name: 'لوبیا چیتی', price: 110000, category: 'خواربار', unit: '۹۰۰ گرم', image: 'https://images.unsplash.com/photo-1551462147-37885acc36f1?auto=format&fit=crop&q=80&w=300' },

  // --- Protein (پروتئینی) ---
  { id: '301', name: 'مرغ کشتار روز', price: 115000, category: 'پروتئینی', unit: 'کیلوگرم', image: 'https://images.unsplash.com/photo-1615967015488-81d2f9394f6f?auto=format&fit=crop&q=80&w=300' },
  { id: '302', name: 'تخم مرغ شانه ۳۰ عددی', price: 145000, category: 'پروتئینی', unit: 'شانه', image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=300' },
  { id: '303', name: 'گوشت چرخ کرده مخلوط مهیا', price: 380000, category: 'پروتئینی', unit: '۱ کیلوگرم', image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=300' },
  { id: '304', name: 'ران گوسفندی', price: 850000, category: 'پروتئینی', unit: 'کیلوگرم', image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=300' },
  { id: '305', name: 'تن ماهی شیلتون', price: 85000, category: 'پروتئینی', unit: '۱۸۰ گرم', image: 'https://images.unsplash.com/photo-1534351658428-26f6345dc3f6?auto=format&fit=crop&q=80&w=300' },

  // --- Drinks (نوشیدنی) ---
  { id: '401', name: 'نوشابه کوکاکولا', price: 32000, category: 'نوشیدنی', unit: '۱.۵ لیتر', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=300' },
  { id: '402', name: 'نوشابه پپسی', price: 32000, category: 'نوشیدنی', unit: '۱.۵ لیتر', image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80&w=300' },
  { id: '403', name: 'دلستر لیمویی ایستک', price: 25000, category: 'نوشیدنی', unit: '۱ لیتر', image: 'https://images.unsplash.com/photo-1566934057861-125a072d6349?auto=format&fit=crop&q=80&w=300' },
  { id: '404', name: 'آب معدنی دماوند', price: 10000, category: 'نوشیدنی', unit: '۱.۵ لیتر', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=300' },
  { id: '405', name: 'چای شهرزاد', price: 180000, category: 'نوشیدنی', unit: '۵۰۰ گرم', image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=300' },
  { id: '406', name: 'قهوه فوری کلاسیک', price: 120000, category: 'نوشیدنی', unit: '۱۰۰ گرم', image: 'https://images.unsplash.com/photo-1552346989-e069318e20a5?auto=format&fit=crop&q=80&w=300' },

  // --- Snacks (تنقلات) ---
  { id: '501', name: 'چیپس نمکی مزمز', price: 25000, category: 'تنقلات', unit: 'بسته', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=300' },
  { id: '502', name: 'پفک نمکی مینو', price: 22000, category: 'تنقلات', unit: 'بسته', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=300' },
  { id: '503', name: 'بیسکویت پتی بور', price: 18000, category: 'تنقلات', unit: 'بسته', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=300' },
  { id: '504', name: 'کیک تی تاپ', price: 8000, category: 'تنقلات', unit: 'عدد', image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=300' },
  { id: '505', name: 'تخمه آفتابگردان', price: 45000, category: 'تنقلات', unit: 'بسته', image: 'https://images.unsplash.com/photo-1528435132514-15959141042d?auto=format&fit=crop&q=80&w=300' },

  // --- Ice Cream (بستنی) ---
  { id: '801', name: 'بستنی سنتی زعفرانی ۱ لیتری', price: 120000, category: 'بستنی', unit: 'ظرف', image: 'https://images.unsplash.com/photo-1549395156-e8c1e9f43faa?auto=format&fit=crop&q=80&w=300' },
  { id: '802', name: 'بستنی مگنوم شکلاتی', price: 35000, category: 'بستنی', unit: 'عدد', image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=300' },
  { id: '803', name: 'بستنی لیوانی وانیلی', price: 15000, category: 'بستنی', unit: 'لیوان', image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&q=80&w=300' },
  { id: '804', name: 'بستنی عروسکی', price: 12000, category: 'بستنی', unit: 'عدد', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=300' },

  // --- Frozen & Fast Food (فست فود و منجمد) ---
  { id: '601', name: 'همبرگر ۹۰ درصد ۲۰۲', price: 210000, category: 'فست فود و منجمد', unit: 'بسته ۵ عددی', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=300' },
  { id: '602', name: 'پنیر پیتزا مطهر ۵۰۰ گرم', price: 155000, category: 'فست فود و منجمد', unit: 'بسته', image: 'https://images.unsplash.com/photo-1510629954389-c1e0da47d414?auto=format&fit=crop&q=80&w=300' },
  { id: '603', name: 'فلافل نیمه آماده', price: 85000, category: 'فست فود و منجمد', unit: '۱ کیلوگرم', image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?auto=format&fit=crop&q=80&w=300' },
  { id: '604', name: 'سیب زمینی خلال منجمد', price: 95000, category: 'فست فود و منجمد', unit: '۹۰۰ گرم', image: 'https://images.unsplash.com/photo-1573080496987-aeb4d9171d55?auto=format&fit=crop&q=80&w=300' },
  { id: '605', name: 'ناگت مرغ ۷۰ درصد', price: 140000, category: 'فست فود و منجمد', unit: '۵۰۰ گرم', image: 'https://images.unsplash.com/photo-1569691105751-88df003de7a4?auto=format&fit=crop&q=80&w=300' },

  // --- Hygiene (بهداشتی) ---
  { id: '701', name: 'دستمال کاغذی تنو ۲۰۰ برگ', price: 35000, category: 'بهداشتی', unit: 'جعبه', image: 'https://images.unsplash.com/photo-1583947581924-860b81d43195?auto=format&fit=crop&q=80&w=300' },
  { id: '702', name: 'مایع ظرفشویی پریل', price: 65000, category: 'بهداشتی', unit: '۱ لیتر', image: 'https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?auto=format&fit=crop&q=80&w=300' },
  { id: '703', name: 'پودر لباسشویی پرسیل', price: 42000, category: 'بهداشتی', unit: '۵۰۰ گرم', image: 'https://images.unsplash.com/photo-1584674996901-b27b9735d492?auto=format&fit=crop&q=80&w=300' },
  { id: '704', name: 'دستمال توالت ۴ قلو', price: 95000, category: 'بهداشتی', unit: 'بسته', image: 'https://images.unsplash.com/photo-1584674996901-b27b9735d492?auto=format&fit=crop&q=80&w=300' },
  { id: '705', name: 'شامپو صحت', price: 45000, category: 'بهداشتی', unit: '۳۰۰ گرم', image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&q=80&w=300' },
  { id: '706', name: 'خمیر دندان سیگنال', price: 55000, category: 'بهداشتی', unit: '۱۰۰ میلی', image: 'https://images.unsplash.com/photo-1559653777-1c11fe9ee644?auto=format&fit=crop&q=80&w=300' },
  { id: '707', name: 'مایع دستشویی اکتیو', price: 52000, category: 'بهداشتی', unit: '۴۵۰ گرم', image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=300' },

  // --- Tobacco (دخانیات) & Additives ---
  { id: '901', name: 'فندک آشپزخانه', price: 45000, category: 'دخانیات و مواد افزودنی', unit: 'عدد', image: 'https://images.unsplash.com/photo-1595183353457-3f3333333333?auto=format&fit=crop&q=80&w=300' },
  { id: '951', name: 'وانیل شکری', price: 8000, category: 'مواد افزودنی', unit: 'بسته', image: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&q=80&w=300' },
  { id: '952', name: 'بکینگ پودر', price: 12000, category: 'مواد افزودنی', unit: '۱۰۰ گرم', image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=300' },
];

const INITIAL_CONFIG: StoreConfig = {
  address: 'رشت، مسکن مهر، فلکه اول، پارک دایجون، فروشگاه همتی',
  phone: '021-66000000'
};

const STORAGE_KEYS = {
  PRODUCTS: 'hemmati_products_v2',
  ORDERS: 'hemmati_orders_v2',
  CONFIG: 'hemmati_config_v1',
};

// --- Products API ---
export const getProducts = (): Product[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
  if (!stored) {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
    return INITIAL_PRODUCTS;
  }
  return JSON.parse(stored);
};

export const saveProduct = (product: Product): void => {
  const products = getProducts();
  const index = products.findIndex(p => p.id === product.id);
  
  if (index >= 0) {
    // Update existing
    products[index] = product;
  } else {
    // Add new (ensure ID exists)
    products.push(product);
  }
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
};

export const deleteProduct = (id: string): void => {
  const products = getProducts();
  const filtered = products.filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(filtered));
};

// --- Orders API ---
export const getOrders = (): Order[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.ORDERS);
  return stored ? JSON.parse(stored) : [];
};

export const getOrderById = (id: string): Order | undefined => {
  const orders = getOrders();
  return orders.find(o => o.id === id);
};

export const createOrder = (orderData: Omit<Order, 'id' | 'createdAt' | 'status'>): Order => {
  const orders = getOrders();
  const newOrder: Order = {
    ...orderData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    status: 'PENDING',
  };
  
  orders.push(newOrder);
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  return newOrder;
};

export const updateOrderStatus = (orderId: string, status: OrderStatus): void => {
  const orders = getOrders();
  const index = orders.findIndex(o => o.id === orderId);
  if (index !== -1) {
    orders[index].status = status;
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  }
};

// --- Config API ---
export const getStoreConfig = (): StoreConfig => {
  const stored = localStorage.getItem(STORAGE_KEYS.CONFIG);
  if (!stored) {
    return INITIAL_CONFIG;
  }
  return JSON.parse(stored);
};

export const saveStoreConfig = (config: StoreConfig): void => {
  localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(config));
};
