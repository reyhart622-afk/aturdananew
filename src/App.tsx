import React from 'react';
import { FinancialProvider, useFinance } from './context/FinancialContext';
import { MarketTicker } from './components/MarketTicker';
import { HeaderMobile } from './components/HeaderMobile';
import { SidebarDesktop } from './components/SidebarDesktop';
import { Breadcrumb } from './components/Breadcrumb';
import { HomeView } from './components/views/HomeView';
import { CategoryDetailView } from './components/views/CategoryDetailView';
import { SubcategoryDetailView } from './components/views/SubcategoryDetailView';
import { ItemDetailView } from './components/views/ItemDetailView';
import { DepositoCalculator } from './components/tools/DepositoCalculator';
import { StockScreener } from './components/tools/StockScreener';
import { BondYieldCalculator } from './components/tools/BondYieldCalculator';
import { ApiKeyModal } from './components/ApiKeyModal';
import { MobileMenuDrawer } from './components/MobileMenuDrawer';
import { Footer } from './components/Footer';

const MainLayout: React.FC = () => {
  const { activeView } = useFinance();

  return (
    <div className="min-h-screen bg-[#070b0f] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Real-time Market Ticker */}
      <MarketTicker />

      {/* Mobile Sticky Header (Visible only on < lg screens) */}
      <HeaderMobile />

      {/* Main Container: Desktop Left Sidebar + Central Responsive Content */}
      <div className="flex-1 flex max-w-[1920px] w-full mx-auto relative">
        {/* Desktop Left Sidebar with Category & Subcategory Menu Hierarchy */}
        <SidebarDesktop />

        {/* Central Content Area */}
        <main className="flex-1 min-w-0 flex flex-col">
          {/* Breadcrumb Navigation for SEO Schema and User orientation */}
          <Breadcrumb />

          {/* View Container */}
          <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6 max-w-6xl w-full mx-auto">
            {activeView === 'home' && <HomeView />}
            {activeView === 'category' && <CategoryDetailView />}
            {activeView === 'subcategory' && <SubcategoryDetailView />}
            {activeView === 'item' && <ItemDetailView />}
            {activeView === 'calculator' && (
              <div className="space-y-8 animate-fade-in">
                <DepositoCalculator />
                <BondYieldCalculator />
              </div>
            )}
            {activeView === 'screener' && (
              <div className="space-y-8 animate-fade-in">
                <StockScreener />
              </div>
            )}
          </div>

          {/* Full Sitemap and Regulatory Footer */}
          <Footer />
        </main>
      </div>

      {/* Cloudflare Worker API Key Configuration Modal */}
      <ApiKeyModal />

      {/* Portal-based Mobile Menu Drawer (Bypasses parent containing block) */}
      <MobileMenuDrawer />
    </div>
  );
};

export default function App() {
  return (
    <FinancialProvider>
      <MainLayout />
    </FinancialProvider>
  );
}
