import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useFinance } from '../context/FinancialContext';
import { CATEGORIES_DATA } from '../data/categoriesData';
import {
  X,
  Search,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  PieChart,
  Landmark,
  ShieldCheck,
  Calculator,
  SlidersHorizontal,
  Key,
  Home
} from 'lucide-react';

export const MobileMenuDrawer: React.FC = () => {
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    navigateToHome,
    navigateToCategory,
    navigateToSubcategory,
    navigateToItem,
    navigateToTool,
    setIsApiKeyModalOpen,
    selectedItemId
  } = useFinance();

  const [expandedCat, setExpandedCat] = useState<string | null>('saham-ihsg');
  const [expandedSubcat, setExpandedSubcat] = useState<string | null>(null);
  const [mobileSearch, setMobileSearch] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  if (!mounted || !isMobileMenuOpen) return null;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-emerald-400" />;
      case 'PieChart': return <PieChart className="w-4 h-4 text-cyan-400" />;
      case 'Landmark': return <Landmark className="w-4 h-4 text-amber-400" />;
      default: return <ShieldCheck className="w-4 h-4 text-blue-400" />;
    }
  };

  const drawerContent = (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#080d12] text-slate-100 animate-fade-in lg:hidden">
      {/* Top Bar inside Drawer */}
      <div className="px-4 py-3.5 border-b border-slate-800 bg-[#0c1218] flex items-center justify-between gap-3 shrink-0">
        <button
          onClick={() => {
            navigateToHome();
            setIsMobileMenuOpen(false);
          }}
          className="flex items-center gap-2.5 text-left cursor-pointer"
        >
          <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white text-sm">
            A
          </div>
          <div>
            <span className="font-extrabold text-sm text-white">
              Aturdana<span className="text-emerald-400">.id</span>
            </span>
            <span className="text-[10px] text-slate-400 block font-normal">Daftar Kategori Finansial</span>
          </div>
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-xs font-semibold px-2.5"
          aria-label="Tutup Menu"
        >
          <X className="w-4 h-4" />
          <span>Tutup</span>
        </button>
      </div>

      {/* Quick Search */}
      <div className="p-3 border-b border-slate-800/80 bg-[#0a0f15] shrink-0">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Cari dari 400+ topik & kategori finansial..."
            value={mobileSearch}
            onChange={(e) => setMobileSearch(e.target.value)}
            className="w-full pl-9 pr-8 py-2 bg-slate-950 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
          {mobileSearch && (
            <button
              onClick={() => setMobileSearch('')}
              className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-white"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Main Categories Tree */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
        {/* Shortcut to Home */}
        <button
          onClick={() => {
            navigateToHome();
            setIsMobileMenuOpen(false);
          }}
          className="w-full flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-emerald-400 transition-colors"
        >
          <Home className="w-4 h-4 text-emerald-400" />
          <span>Kembali ke Beranda Utama</span>
        </button>

        <div className="flex items-center justify-between text-[11px] text-slate-400 font-bold uppercase tracking-wider pt-1">
          <span>Kategori Induk, Sub & Isi Topik</span>
          <span className="text-emerald-400 font-mono text-[10px]">4 KATEGORI · 48 SUBKATEGORI</span>
        </div>

        {/* 3 Main Categories */}
        {CATEGORIES_DATA.map((cat) => {
          const isCatExpanded = expandedCat === cat.id;
          const matchesSearch = !mobileSearch ||
            cat.name.toLowerCase().includes(mobileSearch.toLowerCase()) ||
            cat.subcategories.some(s => s.name.toLowerCase().includes(mobileSearch.toLowerCase()) ||
            s.items.some(i => i.name.toLowerCase().includes(mobileSearch.toLowerCase())));

          if (!matchesSearch) return null;

          return (
            <div key={cat.id} className="rounded-xl border border-slate-800/80 bg-slate-900/60 overflow-hidden">
              {/* Category Header */}
              <div className="flex items-center justify-between p-3 bg-[#0d141c] border-b border-slate-800/60">
                <button
                  onClick={() => {
                    navigateToCategory(cat.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2.5 text-left font-bold text-xs sm:text-sm text-slate-100 hover:text-emerald-400 transition-colors cursor-pointer flex-1"
                >
                  {getCategoryIcon(cat.iconName)}
                  <span>{cat.name}</span>
                </button>
                <button
                  onClick={() => setExpandedCat(isCatExpanded ? null : cat.id)}
                  className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer ml-1"
                  aria-label="Toggle subkategori"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isCatExpanded ? 'rotate-180 text-emerald-400' : ''}`}
                  />
                </button>
              </div>

              {/* Subcategories Accordion */}
              {isCatExpanded && (
                <div className="p-2 space-y-1.5 bg-[#090e14]/90">
                  {cat.subcategories.map((subcat) => {
                    const isSubcatExpanded = expandedSubcat === subcat.id;
                    const subMatches = !mobileSearch ||
                      subcat.name.toLowerCase().includes(mobileSearch.toLowerCase()) ||
                      subcat.items.some(i => i.name.toLowerCase().includes(mobileSearch.toLowerCase()));

                    if (!subMatches) return null;

                    return (
                      <div key={subcat.id} className="rounded-lg bg-slate-900/70 border border-slate-800/50 overflow-hidden">
                        {/* Subcategory Row */}
                        <div className="flex items-center justify-between p-2">
                          <button
                            onClick={() => {
                              navigateToSubcategory(cat.id, subcat.id);
                              setIsMobileMenuOpen(false);
                            }}
                            className="text-xs text-left text-slate-300 hover:text-emerald-300 font-medium transition-colors flex-1 truncate"
                          >
                            <span className="text-slate-500 mr-1">{subcat.number}.</span>
                            {subcat.name}
                          </button>
                          <button
                            onClick={() => setExpandedSubcat(isSubcatExpanded ? null : subcat.id)}
                            className="p-1 text-slate-400 hover:text-white cursor-pointer ml-1 text-[11px] flex items-center gap-0.5"
                          >
                            <span className="text-[10px] text-slate-500 font-mono">({subcat.items.length})</span>
                            <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSubcatExpanded ? 'rotate-90 text-emerald-400' : ''}`} />
                          </button>
                        </div>

                        {/* Items inside Subcategory */}
                        {isSubcatExpanded && (
                          <div className="px-2.5 pb-2 pt-1 border-t border-slate-800/50 space-y-1 bg-slate-950/70">
                            {subcat.items.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => {
                                  navigateToItem(cat.id, subcat.id, item.id);
                                  setIsMobileMenuOpen(false);
                                }}
                                className={`w-full text-left py-1.5 px-2 rounded text-[11px] transition-colors flex items-center justify-between cursor-pointer ${
                                  selectedItemId === item.id
                                    ? 'bg-emerald-950/80 text-emerald-300 font-semibold'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                                }`}
                              >
                                <span className="truncate">· {item.name}</span>
                                {item.requiresApiKey && (
                                  <span className="text-[9px] font-mono text-emerald-400 ml-1">API</span>
                                )}
                              </button>
                            ))}
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

        {/* Quick Tools in Menu */}
        <div className="pt-2 border-t border-slate-800 space-y-2">
          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
            Kalkulator & Alat Cepat
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                navigateToTool('calculator');
                setIsMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs text-slate-200 hover:text-emerald-300 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-amber-400 mb-1" />
              <span className="font-semibold block text-[11px]">Kalkulator Deposito</span>
              <span className="text-[10px] text-slate-400">Pajak PPh 20% & ARO</span>
            </button>
            <button
              onClick={() => {
                navigateToTool('screener');
                setIsMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs text-slate-200 hover:text-emerald-300 cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-cyan-400 mb-1" />
              <span className="font-semibold block text-[11px]">Screener Saham</span>
              <span className="text-[10px] text-slate-400">Filter PER, PBV & Yield</span>
            </button>
          </div>
        </div>
      </div>

      {/* Drawer Footer */}
      <div className="p-3 border-t border-slate-800 bg-[#0c1218] flex items-center justify-between text-xs text-slate-400 shrink-0">
        {/* Pengaturan APIKEY disembunyikan dari tampilan mata pengunjung */}
        <button
          onClick={() => {
            setIsApiKeyModalOpen(true);
            setIsMobileMenuOpen(false);
          }}
          style={{ display: 'none' }}
          className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium cursor-pointer"
        >
          <Key className="w-3.5 h-3.5" />
          <span>Kelola Cloudflare API Key</span>
        </button>
        <span className="text-[11px] text-slate-400 font-medium">Portal Finansial Terpadu</span>
        <span className="text-[11px] text-slate-500 font-mono">Aturdana.id</span>
      </div>
    </div>
  );

  return createPortal(drawerContent, document.body);
};
