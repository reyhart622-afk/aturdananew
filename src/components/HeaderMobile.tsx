import React, { useState, useEffect } from 'react';
import { useFinance } from '../context/FinancialContext';
import { CATEGORIES_DATA } from '../data/categoriesData';
import { Menu, X, ChevronDown, ChevronRight, Search, ShieldCheck, Sparkles, TrendingUp, Landmark, PieChart, ShieldAlert } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';

export const HeaderMobile: React.FC = () => {
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    navigateToHome,
    navigateToCategory,
    navigateToSubcategory,
    navigateToItem,
    navigateToTool,
    setIsApiKeyModalOpen,
    apiKey,
    selectedCategoryId,
    selectedSubcategoryId,
    selectedItemId,
    t
  } = useFinance();

  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedCat, setExpandedCat] = useState<string | null>('saham-ihsg');
  const [expandedSubcat, setExpandedSubcat] = useState<string | null>(null);
  const [mobileSearch, setMobileSearch] = useState('');

  // Track scroll position to enhance sticky header visual appeal
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-emerald-400" />;
      case 'PieChart': return <PieChart className="w-4 h-4 text-cyan-400" />;
      case 'Landmark': return <Landmark className="w-4 h-4 text-amber-400" />;
      default: return <ShieldCheck className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <header
      className={`lg:hidden sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090e13]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-emerald-500/20'
          : 'bg-[#0a0f15]/90 backdrop-blur-sm border-b border-slate-800/80'
      }`}
    >
      <div className="px-4 py-3 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <button
          onClick={navigateToHome}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-emerald-500 to-emerald-800 flex items-center justify-center shadow-md shadow-emerald-950/60 font-black text-white text-base">
            A
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                Aturdana<span className="text-emerald-400">.id</span>
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <p className="text-[10px] text-slate-400 font-medium tracking-wide truncate max-w-[150px]">
              Saham · Deposito · Finansial
            </p>
          </div>
        </button>

        {/* Right header controls */}
        <div className="flex flex-col items-end gap-1.5">
          {/* Quick Language Toggle */}
          <LanguageSelector compact={true} />

          {/* Cloudflare Worker key trigger (Disembunyikan dari tampilan mata pengunjung) */}
          <button
            onClick={() => setIsApiKeyModalOpen(true)}
            style={{ display: 'none' }}
            className="p-1.5 rounded-lg bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-1 hover:bg-emerald-900/60 transition-colors cursor-pointer"
            title="Kelola API Key Cloudflare Worker"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-[10px] font-bold">API</span>
          </button>

          {/* Primary "Menu" Trigger required by user */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-transform active:scale-95 shadow-md shadow-emerald-950/50 cursor-pointer"
            aria-label="Buka menu kategori lengkap"
          >
            {isMobileMenuOpen ? (
              <>
                <X className="w-4 h-4" />
                <span>Tutup</span>
              </>
            ) : (
              <>
                <Menu className="w-4 h-4" />
                <span>Menu</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
