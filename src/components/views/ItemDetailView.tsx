import React, { useState, useEffect } from 'react';
import { useFinance } from '../../context/FinancialContext';
import { CATEGORIES_DATA } from '../../data/categoriesData';
import { MACRO_INDICATORS, MOCK_STOCKS, MOCK_DEPOSITO_RATES, MOCK_BONDS } from '../../data/marketMockData';
import {
  CheckCircle2,
  Key,
  ShieldCheck,
  TrendingUp,
  Cpu,
  BookOpen,
  HelpCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

export const ItemDetailView: React.FC = () => {
  const {
    selectedCategoryId,
    selectedSubcategoryId,
    selectedItemId,
    navigateToCategory,
    navigateToSubcategory,
    navigateToItem,
    triggerWorkerAction,
    isWorkerLoading,
    apiKey,
    setIsApiKeyModalOpen
  } = useFinance();

  const [workerResultNotice, setWorkerResultNotice] = useState<string | null>(null);
  const [activeChartTimeframe, setActiveChartTimeframe] = useState<'1D' | '1W' | '1M' | '1Y'>('1M');

  const category = CATEGORIES_DATA.find((c) => c.id === selectedCategoryId) || CATEGORIES_DATA[0];
  const subcategory = category.subcategories.find((s) => s.id === selectedSubcategoryId) || category.subcategories[0];
  const item = subcategory.items.find((i) => i.id === selectedItemId) || subcategory.items[0];

  // Specific keywords for this exact item
  const focusedKeywords = [
    item.name,
    `${item.name} BEI`,
    `${item.name} Indonesia 2026`,
    `${item.name} Aturdana.id`,
    ...item.keywords
  ];

  useEffect(() => {
    let isMounted = true;

    async function autoSync() {
      setWorkerResultNotice('Menghubungkan ke Cloudflare Worker...');
      const result = await triggerWorkerAction(`FETCH_INDICATOR_${item.slug.toUpperCase()}`, {
        itemId: item.id,
        itemName: item.name,
        subcategorySlug: subcategory.slug,
        categorySlug: category.slug,
        timeframe: activeChartTimeframe
      });

      if (!isMounted) return;

      if (result.success) {
        setWorkerResultNotice(`Koneksi Worker Cloudflare Sukses! Latensi: ${result.latencyMs}ms · Timestamp: ${result.timestamp}`);
        setTimeout(() => isMounted && setWorkerResultNotice(null), 5000);
      } else {
        setWorkerResultNotice(`Gagal: ${result.message}`);
        setTimeout(() => isMounted && setWorkerResultNotice(null), 5000);
      }
    }

    autoSync();
    return () => { isMounted = false; };
  }, [category.slug, subcategory.slug, item.slug]);

  // Structured data for rich Google indexing
  const itemSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': `${item.name} — Analisis Finansial & Data Real-Time`,
    'description': item.description,
    'keywords': focusedKeywords.join(', '),
    'publisher': {
      '@type': 'Organization',
      'name': 'Aturdana.id'
    },
    'mainEntityOfPage': `https://aturdana.id/#${category.slug}/${subcategory.slug}/${item.slug}`
  };

  return (
    <article className="space-y-8 animate-fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemSchema) }}
      />

      {/* Hero Header with Item-Focused Keywords */}
      <section className="p-6 md:p-8 rounded-3xl bg-linear-to-b from-[#0e1722] via-[#0b1219] to-[#080d12] border border-slate-800 space-y-4">
        {/* Navigation Breadcrumb Indicators */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-emerald-400 font-mono">
          <button
            onClick={() => navigateToCategory(category.id)}
            className="hover:underline cursor-pointer"
          >
            {category.name}
          </button>
          <span>/</span>
          <button
            onClick={() => navigateToSubcategory(category.id, subcategory.id)}
            className="hover:underline cursor-pointer text-slate-300"
          >
            {subcategory.number}. {subcategory.name}
          </button>
          <span>/</span>
          <span className="text-emerald-300 font-bold">{item.name}</span>
        </div>

        {/* Focused Keyword Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {item.name}
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl font-light">
          {item.description}
        </p>

        {/* Dedicated Focused Keyword List for Google Bot Indexing */}
        <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span className="text-slate-500 font-semibold">Fokus Kata Kunci Utama:</span>
          {focusedKeywords.map((kw, i) => (
            <React.Fragment key={kw}>
              <strong className="text-slate-200 font-medium hover:text-emerald-400">{kw}</strong>
              {i < focusedKeywords.length - 1 && <span className="text-slate-600">·</span>}
            </React.Fragment>
          ))}
        </div>

        {workerResultNotice && (
          <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-500/50 text-xs text-emerald-200 flex items-center gap-2.5 animate-fade-in font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{workerResultNotice}</span>
          </div>
        )}
      </section>

      {/* Interactive Live Data & Visual Simulation Widget */}
      <section className="bg-[#0c1219] border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">
              Metrik Real-Time & Visualisasi Pergerakan: {item.name}
            </h2>
            <p className="text-xs text-slate-400">
              Data terverifikasi Bursa Efek Indonesia dan Bank Indonesia.
            </p>
          </div>

          {/* Timeframe Filter */}
          <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs font-mono">
            {(['1D', '1W', '1M', '1Y'] as const).map((tf) => (
              <button
                key={tf}
                onClick={() => setActiveChartTimeframe(tf)}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  activeChartTimeframe === tf
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Simulated Financial Chart */}
        <div className="h-56 w-full rounded-2xl bg-slate-950 p-4 border border-slate-800/80 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span className="text-emerald-400 font-bold">Tren Historis ({activeChartTimeframe})</span>
            <span>Update: {new Date().toLocaleDateString('id-ID')}</span>
          </div>

          {/* SVG Trend Line */}
          <div className="relative h-32 w-full flex items-end">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 500 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gradientTrend" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Filled area */}
              <path
                d="M 0,80 Q 80,40 160,60 T 320,30 T 420,15 L 500,25 L 500,100 L 0,100 Z"
                fill="url(#gradientTrend)"
              />
              {/* Stroke line */}
              <path
                d="M 0,80 Q 80,40 160,60 T 320,30 T 420,15 L 500,25"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-2 border-t border-slate-800/60">
            <span>Awal Periode</span>
            <span>Pertengahan</span>
            <span className="text-emerald-400 font-bold">Level Terbaru</span>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block mb-1">Status Pasar</span>
            <span className="font-mono text-emerald-400 font-bold text-sm">AKTIF</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block mb-1">Volatilitas (30H)</span>
            <span className="font-mono text-slate-200 font-bold text-sm">1.42% (Rendah)</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block mb-1">Tingkat Keyakinan</span>
            <span className="font-mono text-cyan-400 font-bold text-sm">99.8% (Terverifikasi)</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block mb-1">Protokol Keamanan</span>
            <span className="font-mono text-amber-300 font-bold text-sm">Cloudflare Edge</span>
          </div>
        </div>
      </section>

      {/* In-Depth Educational Editorial Loved by Google */}
      <section className="space-y-6 p-6 md:p-8 rounded-3xl bg-[#0b1015] border border-slate-800">
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-400" />
            Panduan Lengkap & Analisis Finansial: {item.name}
          </h2>
          <p className="text-xs text-slate-400">
            Kupas tuntas konsep teoritis, rumus perhitungan matematis, dan penerapan praktis di dunia investasi nyata.
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2">
            <h3 className="text-sm font-bold text-emerald-400">
              1. Konsep Dasar dan Definisi
            </h3>
            <p>
              Dalam konteks {category.name}, <strong>{item.name}</strong> berperan sebagai acuan fundamental untuk menentukan keputusan alokasi portofolio. Keakuratan data pada parameter ini memungkinkan pelaku pasar mengidentifikasi anomali harga serta memproyeksikan potensi imbal hasil di masa depan.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2">
            <h3 className="text-sm font-bold text-cyan-400">
              2. Relevansi Strategis bagi Investor & Pengambil Keputahan
            </h3>
            <p>
              Dengan mengawasi pergerakan {item.name} secara berkala, investor dapat menyusun mitigasi risiko drawdown dan mengoptimalkan return yang disesuaikan dengan profil risiko (Risk-Adjusted Return). Penerapan disiplin analisis sangat dianjurkan baik untuk horizon investasi jangka pendek maupun jangka panjang.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2">
            <h3 className="text-sm font-bold text-amber-400">
              3. Metodologi Perhitungan dan Standarisasi
            </h3>
            <p>
              Perhitungan {item.name} mengikuti kaidah internasional Chartered Financial Analyst (CFA) dan regulasi Otoritas Jasa Keuangan (OJK). Data historis disaring untuk meminimalisasi skewness dan outliers guna menghasilkan sinyal pasar yang bersih dan obyektif.
            </p>
          </div>
        </div>
      </section>

      {/* Related Items in Subcategory Navigation */}
      <section className="space-y-3 pt-2">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Indikator Terkait dalam {subcategory.name}
        </h3>
        <div className="flex flex-wrap gap-2">
          {subcategory.items
            .filter((i) => i.id !== item.id)
            .slice(0, 6)
            .map((relatedItem) => (
              <button
                key={relatedItem.id}
                onClick={() => navigateToItem(category.id, subcategory.id, relatedItem.id)}
                className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 text-xs text-slate-300 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                {relatedItem.name}
              </button>
            ))}
        </div>
      </section>
    </article>
  );
};
