import React from 'react';
import { ACTIVE_ORDERS } from '../constants';

const ActiveOrders: React.FC = () => {
  return (
    <section className="px-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-900 dark:text-white text-lg font-bold">Active Orders</h3>
        <button className="text-primary text-sm font-bold hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3">
        {ACTIVE_ORDERS.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between p-4 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-xl shadow-clean relative group active:scale-[0.99] transition-transform duration-100 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div
                className={`bg-${order.colorClass}-50 dark:bg-${order.colorClass}-900/20 text-${order.colorClass}-600 dark:text-${order.colorClass}-400 size-10 rounded-lg flex items-center justify-center`}
              >
                <span className="material-symbols-outlined text-xl">{order.icon}</span>
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-bold text-base">Order {order.id}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {order.type} • {order.detail}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-primary font-bold">{order.time}</p>
              <p className="text-xs text-gray-400">{order.statusLabel}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActiveOrders;
