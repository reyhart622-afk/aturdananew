import React, { useState } from 'react';
import { useFinance } from '../context/FinancialContext';
import { CATEGORIES_DATA } from '../data/categoriesData';
import {
  TrendingUp,
  PieChart,
  Landmark,
  ShieldCheck,
  Search,
  ChevronDown,
  ChevronRight,
  Cpu,
  Calculator,
  SlidersHorizontal,
  Home,
  Check,
  Zap,
  Globe
} from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';

export const SidebarDesktop: React.FC = () => {
  const {
    activeView,
    selectedCategoryId,
    selectedSubcategoryId,
    selectedItemId,
    navigateToHome,
    navigateToCategory,
    navigateToSubcategory,
    navigateToItem,
    navigateToTool,
    apiKey,
    setIsApiKeyModalOpen,
    searchQuery,
    setSearchQuery,
    t
  } = useFinance();

  // Accordion state
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'saham-ihsg': true,
    'deposito-tabungan': false,
    'reksa-dana-etf': false,
    'obligasi-pendapatan-tetap': false
  });

  const [expandedSubcategories, setExpandedSubcategories] = useState<Record<string, boolean>>({
    'harga-dan-grafik-saham': true,
    'suku-bunga-deposito': false
  });

  const toggleCategory = (catId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const toggleSubcategory = (subcatId: string) => {
    setExpandedSubcategories(prev => ({
      ...prev,
      [subcatId]: !prev[subcatId]
    }));
  };

  const getCategoryIcon = (iconName: string, isSelected: boolean) => {
    const iconClass = `w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-slate-400 group-hover:text-emerald-300'}`;
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className={iconClass} />;
      case 'PieChart': return <PieChart className={iconClass} />;
      case 'Landmark': return <Landmark className={iconClass} />;
      default: return <ShieldCheck className={iconClass} />;
    }
  };

  return (
    <aside className="hidden lg:flex flex-col w-80 xl:w-88 shrink-0 border-r border-slate-800/80 bg-[#090e14]/95 backdrop-blur-2xl h-screen sticky top-0 z-30 select-none">
      {/* Sidebar Header: Logo & Real-time Indicator */}
      <div className="p-5 border-b border-slate-800/80 bg-[#0c1218]/90">
        <button
          onClick={navigateToHome}
          className="w-full flex items-center gap-3 text-left group cursor-pointer focus:outline-none mb-3"
        >
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500 to-emerald-800 flex items-center justify-center shadow-lg shadow-emerald-950/60 font-black text-white text-xl transition-transform group-hover:scale-105">
            A
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                Aturdana<span className="text-emerald-400">.id</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-500" />
            </div>
            <p className="text-[11px] text-slate-400 font-medium tracking-tight">
              Portal Saham, Deposito & Investasi
            </p>
          </div>
        </button>

        

      {/* Instant Search Bar */}
      <div className="px-5 py-3 border-b border-slate-800/60 bg-[#0b1016]/50">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('searchPlaceholder')}
            className="w-full pl-9 pr-7 py-2 bg-slate-950/90 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/80 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-white"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Main Hierarchical Categories & Subcategories Menu */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 custom-scrollbar">
        {/* Navigation Home & Core Shortcuts */}
        <div className="space-y-1">
          <button
            onClick={navigateToHome}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeView === 'home'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/60'
                : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>{t('home')}</span>
          </button>

          <div className="grid grid-cols-2 gap-1.5 pt-1">
            <button
              onClick={() => navigateToTool('calculator')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-colors cursor-pointer ${
                activeView === 'calculator'
                  ? 'bg-slate-800 text-emerald-400 border border-emerald-500/40'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800/50'
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">Kalkulator Deposito</span>
            </button>
            <button
              onClick={() => navigateToTool('screener')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-colors cursor-pointer ${
                activeView === 'screener'
                  ? 'bg-slate-800 text-emerald-400 border border-emerald-500/40'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800/50'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">Screener Saham</span>
            </button>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between pt-2 px-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          <span>{t('menu')}</span>
          <span className="text-[10px] text-emerald-400/90 font-mono">3 INDUK · 35 SUB</span>
        </div>

        {/* 3 Main Categories Hierarchy */}
        <div className="space-y-2.5">
          {CATEGORIES_DATA.map((cat) => {
            const isCatExpanded = expandedCategories[cat.id] ?? false;
            const isCatActive = selectedCategoryId === cat.id && activeView !== 'home';

            const filteredSubcategories = cat.subcategories.filter((subcat) => {
              if (!searchQuery) return true;
              const query = searchQuery.toLowerCase();
              return (
                cat.name.toLowerCase().includes(query) ||
                subcat.name.toLowerCase().includes(query) ||
                subcat.items.some(i => i.name.toLowerCase().includes(query))
              );
            });

            if (searchQuery && filteredSubcategories.length === 0) {
              return null;
            }

            return (
              <div
                key={cat.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isCatActive
                    ? 'border-emerald-500/40 bg-slate-900/80 shadow-md shadow-emerald-950/20'
                    : 'border-slate-800/70 bg-[#0d141b]/60 hover:border-slate-700/80'
                }`}
              >
                {/* Category Header Row */}
                <div className="flex items-center justify-between p-2.5">
                  <button
                    onClick={() => navigateToCategory(cat.id)}
                    className="flex items-center gap-2.5 text-left flex-1 group cursor-pointer focus:outline-none"
                  >
                    {getCategoryIcon(cat.iconName, isCatActive)}
                    <span className={`text-xs font-bold tracking-tight ${isCatActive ? 'text-emerald-400' : 'text-slate-200 group-hover:text-white'}`}>
                      {cat.name}
                    </span>
                  </button>

                  <button
                    onClick={() => toggleCategory(cat.id)}
                    className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer ml-1"
                    aria-label={`Toggle subkategori ${cat.name}`}
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isCatExpanded ? 'rotate-180 text-emerald-400' : ''}`}
                    />
                  </button>
                </div>

                {/* Subcategories Accordion Content */}
                {isCatExpanded && (
                  <div className="px-2 pb-2.5 space-y-1 border-t border-slate-800/60 bg-[#090e14]/70 pt-1.5">
                    {filteredSubcategories.map((subcat) => {
                      const isSubcatExpanded = expandedSubcategories[subcat.id] ?? false;
                      const isSubcatActive = selectedSubcategoryId === subcat.id;

                      const filteredItems = subcat.items.filter((item) => {
                        if (!searchQuery) return true;
                        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
                      });

                      return (
                        <div key={subcat.id} className="rounded-lg bg-slate-900/50 border border-slate-800/40 overflow-hidden">
                          {/* Subcategory Row */}
                          <div className="flex items-center justify-between py-1.5 px-2">
                            <button
                              onClick={() => navigateToSubcategory(cat.id, subcat.id)}
                              className={`text-[11px] text-left flex-1 font-medium transition-colors cursor-pointer truncate ${
                                isSubcatActive
                                  ? 'text-emerald-300 font-semibold'
                                  : 'text-slate-300 hover:text-emerald-300'
                              }`}
                              title={`${subcat.number}. ${subcat.name}`}
                            >
                              <span className="text-slate-500 mr-1">{subcat.number}.</span>
                              {subcat.name}
                            </button>

                            <button
                              onClick={() => toggleSubcategory(subcat.id)}
                              className="p-1 text-slate-400 hover:text-white cursor-pointer ml-1 flex items-center gap-1 text-[10px]"
                            >
                              <span className="text-[10px] text-slate-500 font-mono">({subcat.items.length})</span>
                              <ChevronRight
                                className={`w-3 h-3 transition-transform ${isSubcatExpanded ? 'rotate-90 text-emerald-400' : ''}`}
                              />
                            </button>
                          </div>

                          {/* Subcategory Items List */}
                          {isSubcatExpanded && (
                            <div className="px-2 pb-2 pt-1 border-t border-slate-800/40 space-y-0.5 bg-slate-950/60">
                              {filteredItems.map((item) => {
                                const isItemActive = selectedItemId === item.id;
                                return (
                                  <button
                                    key={item.id}
                                    onClick={() => navigateToItem(cat.id, subcat.id, item.id)}
                                    className={`w-full text-left py-1 px-2 rounded text-[11px] transition-colors flex items-center justify-between cursor-pointer ${
                                      isItemActive
                                        ? 'bg-emerald-950/80 text-emerald-300 font-semibold'
                                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                                    }`}
                                  >
                                    <span className="truncate">· {item.name}</span>
                                    {item.requiresApiKey && (
                                      <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/80 px-1 rounded border border-emerald-500/20">
                                        API
                                      </span>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Sidebar Footer: Cloudflare Worker Key Card & Language */}
      <div className="p-4 border-t border-slate-800/80 bg-[#0c1218]/95 space-y-2.5">
        {/* Worker API Key Status Box (Disembunyikan dari tampilan mata pengunjung) */}
        <button
          onClick={() => setIsApiKeyModalOpen(true)}
          style={{ display: 'none' }}
          className="w-full p-2.5 rounded-xl bg-slate-900 border border-emerald-500/30 hover:border-emerald-500/60 transition-all text-left group cursor-pointer"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform" />
              Cloudflare Worker API Key
            </span>
            <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30">
              Siap Kirim
            </span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span className="truncate max-w-[140px] text-emerald-300">
              {apiKey.slice(0, 14)}...
            </span>
            <span className="text-[10px] text-slate-500 underline group-hover:text-emerald-400">
              Ubah
            </span>
          </div>
        </button>

        {/* Language Selector in Sidebar */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-xs text-slate-400">Bahasa:</span>
          <LanguageSelector compact={false} />
        </div>
      </div>
    </aside>
  );
};
