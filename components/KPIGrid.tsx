import React from 'react';

const KPIGrid: React.FC = () => {
  return (
    <section className="px-6 py-6 grid grid-cols-2 gap-4">
      <div className="col-span-1 bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 p-5 rounded-2xl shadow-clean">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Total Inflow</p>
        <p className="text-primary text-2xl font-extrabold tracking-tight">QAR 12.4k</p>
        <div className="mt-2 flex items-center text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded w-fit">
          <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span>
          +12%
        </div>
      </div>
      <div className="col-span-1 bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 p-5 rounded-2xl shadow-clean">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Total Outflow</p>
        <p className="text-gray-900 dark:text-white text-2xl font-extrabold tracking-tight">QAR 4.2k</p>
        <div className="mt-2 flex items-center text-xs font-bold text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded w-fit">
          <span className="material-symbols-outlined text-[14px] mr-1">remove</span>
          Stable
        </div>
      </div>
    </section>
  );
};

export default KPIGrid;
