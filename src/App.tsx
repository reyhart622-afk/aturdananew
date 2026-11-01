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
import { LegalView } from './components/views/LegalView';
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
      <MarketTicker />
      <HeaderMobile />

      <div className="flex-1 flex max-w-[1920px] w-full mx-auto relative">
        <SidebarDesktop />

        <main className="flex-1 min-w-0 flex flex-col">
          <Breadcrumb />

          <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6 max-w-6xl w-full mx-auto">
            {activeView === 'home' && <HomeView />}
            {activeView === 'category' && <CategoryDetailView />}
            {activeView === 'subcategory' && <SubcategoryDetailView />}
            {activeView === 'item' && <ItemDetailView />}
            {activeView === 'legal' && <LegalView />}
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

          <Footer />
        </main>
      </div>

      <ApiKeyModal />
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
