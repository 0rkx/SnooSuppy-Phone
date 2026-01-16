export interface Order {
  id: string;
  type: 'Prep' | 'Delivery';
  detail: string;
  time: string;
  statusLabel: string;
  icon: string;
  colorClass: string;
}

export interface StockItem {
  id: string;
  name: string;
  quantity: string;
  quantityLabel: string;
  price: number;
  image: string;
}

export interface Invoice {
  id: string;
  vendor: string;
  amount: number;
  dueDate: string;
  dueLabel: string;
  dueColorClass: string;
}
