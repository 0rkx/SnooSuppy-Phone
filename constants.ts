import { Order, StockItem, Invoice } from './types';

export const ACTIVE_ORDERS: Order[] = [
  {
    id: '#2931',
    type: 'Prep',
    detail: 'Table 4',
    time: '12m',
    statusLabel: 'ETA',
    icon: 'skillet',
    colorClass: 'orange',
  },
  {
    id: '#2935',
    type: 'Delivery',
    detail: 'Driver: Ali',
    time: '5m',
    statusLabel: 'ETA',
    icon: 'delivery_dining',
    colorClass: 'blue',
  },
];

export const LOW_STOCK_ITEMS: StockItem[] = [
  {
    id: '1',
    name: 'Tomato Paste',
    quantity: '2',
    quantityLabel: 'cans left',
    price: 120,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqyaa6TImXySrBdTShtjbad2suBhQFzUE-K6EK55Ul7aHXo1Cieh5BnSvSEtHoGarDTNKG7P-4bTHxBIqbSf9eZezXDlB5Q1Uy1O7p5K8kUhx3XfZQ0SqjE4VpVgi8oCLMtUHR-MfxXXt3Pfl-SoZX_68lplySQ5aHaCzQYgpBUe9YjZwB-m0PJHKTOh0zKk-MZrPAplN7aHcDRplJnnjysn06FoGq8Qpij16YopHlsBxMpQwLi7GxfZMCZFk4uAgoqByCbPbY6Q',
  },
  {
    id: '2',
    name: 'Extra Virgin Olive Oil',
    quantity: '1',
    quantityLabel: 'bottle left',
    price: 330,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsiy9Z0IYTFJhfS_BigwmxNru7YkmJFg4stCJnS35lNTTWElOwSw38726NsgBzCxUiUxyYW209i_XJZdMFHGj57tziNN0yuAbh1RPPXcBgqzAzUsl2oRCD7pH7oevwuShY4Qqv5fviE2h5_rNRgKXHXfCw9LKIEVRHTwKCD3R3_BQBVJjpFogX-yQpy8c800S3NhUCZDupqy3VoI5FbC8iFxEdiHaKSFGG3hM8Ax2cI0vW0j0Nog1f6fVf2jGazLPNIyHkcHXMyA',
  },
];

export const UPCOMING_INVOICES: Invoice[] = [
  {
    id: 'inv-1',
    vendor: 'FreshVeg Co.',
    amount: 850,
    dueDate: 'Due Tomorrow',
    dueLabel: 'Due Tomorrow',
    dueColorClass: 'text-orange-500',
  },
  {
    id: 'inv-2',
    vendor: 'MeatMarket',
    amount: 350,
    dueDate: 'Due in 2 days',
    dueLabel: 'Due in 2 days',
    dueColorClass: 'text-gray-400',
  },
];
