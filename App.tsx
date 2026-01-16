import React from 'react';
import Header from './components/Header';
import KPIGrid from './components/KPIGrid';
import ActiveOrders from './components/ActiveOrders';
import LowStock from './components/LowStock';
import UpcomingInvoices from './components/UpcomingInvoices';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  return (
    <div className="w-full max-w-[480px] bg-background-light dark:bg-background-dark min-h-[calc(100vh-2rem)] md:min-h-[850px] md:h-auto md:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative border border-gray-100 dark:border-gray-800">
      <Header />
      
      <main className="flex-1 overflow-y-auto no-scrollbar pb-24">
        <KPIGrid />
        <ActiveOrders />
        <LowStock />
        <UpcomingInvoices />
        {/* Spacer for Nav */}
        <div className="h-8"></div>
      </main>

      <BottomNav />
    </div>
  );
};

export default App;
