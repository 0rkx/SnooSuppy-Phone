import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-3 text-gray-900 dark:text-white">
        <div className="size-8 text-primary">
          <svg className="fill-current w-full h-full" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
          </svg>
        </div>
        <h1 className="text-xl font-bold tracking-tight">SnooSupply</h1>
      </div>
      <button className="relative rounded-full overflow-hidden size-10 ring-2 ring-gray-100 dark:ring-gray-800 focus:outline-none focus:ring-primary transition-all">
        <img
          alt="Restaurant Manager Profile Avatar"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdrjOP_SOgqIat-0htuuaHh9GhgDhUPBfOMfRgwxHRtV8cu47fs0DFjTbjjeX1VuIBBdxU9DJXsLikLSR3Td-XPrvjZHKTHuPAFyiRh1mAGFvtD1F4c3oLNrIG-eES-uplhzoKrcR5UaB2OM3Hbm4jYKSiIS6142YE7zXqJNpbbHvX3qAsyChQ0caH4bsK87o2lFhyR1z2EuGs2WT6jbLswmaZkFWOVM-3TcoVPKffSuDE4nuLgmkHE1Am7VhaLSVOBsdYI-0zqA"
        />
      </button>
    </header>
  );
};

export default Header;
