import React from 'react';
import { UPCOMING_INVOICES } from '../constants';

const UpcomingInvoices: React.FC = () => {
  const totalDue = UPCOMING_INVOICES.reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <section className="px-6 mb-8">
      <h3 className="text-gray-900 dark:text-white text-lg font-bold mb-4">Upcoming Invoices</h3>
      <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl shadow-clean p-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
        <div className="flex flex-col gap-4 mb-5 relative z-10">
          {UPCOMING_INVOICES.map((inv, index) => (
            <React.Fragment key={inv.id}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-900 dark:text-white font-bold">{inv.vendor}</p>
                  <p className={`text-xs ${inv.dueColorClass} font-medium`}>{inv.dueLabel}</p>
                </div>
                <p className="text-gray-900 dark:text-white font-bold">QAR {inv.amount}</p>
              </div>
              {index < UPCOMING_INVOICES.length - 1 && (
                <div className="w-full h-px bg-gray-100 dark:bg-gray-800"></div>
              )}
            </React.Fragment>
          ))}
        </div>
        <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-[0.98]">
          <span className="material-symbols-outlined text-[20px]">payments</span>
          Pay All (QAR {totalDue.toLocaleString()})
        </button>
      </div>
    </section>
  );
};

export default UpcomingInvoices;
