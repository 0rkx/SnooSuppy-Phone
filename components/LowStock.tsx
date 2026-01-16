import React from 'react';
import { LOW_STOCK_ITEMS } from '../constants';

const LowStock: React.FC = () => {
  const totalCost = LOW_STOCK_ITEMS.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="px-6 mb-8">
      <h3 className="text-gray-900 dark:text-white text-lg font-bold mb-4">Low Stock Alert</h3>
      <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl shadow-clean overflow-hidden">
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {LOW_STOCK_ITEMS.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div
                  className="size-10 rounded bg-gray-100 dark:bg-gray-800 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium text-sm">{item.name}</p>
                  <p className="text-primary text-xs font-bold">
                    {item.quantity} {item.quantityLabel}
                  </p>
                </div>
              </div>
              <span className="text-gray-400 text-xs">QAR {item.price}</span>
            </div>
          ))}
        </div>
        <div className="p-4 bg-gray-50 dark:bg-gray-900/50">
          <button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-[0.98]">
            <span className="material-symbols-outlined text-[20px]">shopping_cart_checkout</span>
            Reorder All (QAR {totalCost})
          </button>
        </div>
      </div>
    </section>
  );
};

export default LowStock;
