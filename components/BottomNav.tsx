import React from 'react';

const BottomNav: React.FC = () => {
  return (
    <nav className="absolute bottom-0 left-0 right-0 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 px-6 py-2 flex justify-between items-end pb-6 z-30 rounded-b-3xl">
      <button className="flex flex-col items-center gap-1 group text-primary w-16">
        <span className="material-symbols-outlined text-[26px] group-hover:scale-110 transition-transform fill-1">
          home
        </span>
        <span className="text-[10px] font-bold">Home</span>
      </button>
      <button className="flex flex-col items-center gap-1 group text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white w-16 transition-colors">
        <span className="material-symbols-outlined text-[26px] group-hover:scale-110 transition-transform">
          storefront
        </span>
        <span className="text-[10px] font-medium">Market</span>
      </button>
      <button className="flex flex-col items-center gap-1 group text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white w-16 transition-colors">
        <span className="material-symbols-outlined text-[26px] group-hover:scale-110 transition-transform">
          inventory_2
        </span>
        <span className="text-[10px] font-medium">Inventory</span>
      </button>
      <button className="flex flex-col items-center gap-1 group text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white w-16 transition-colors">
        <span className="material-symbols-outlined text-[26px] group-hover:scale-110 transition-transform">
          receipt_long
        </span>
        <span className="text-[10px] font-medium">Orders</span>
      </button>
    </nav>
  );
};

export default BottomNav;
