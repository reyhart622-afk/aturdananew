import React, { useState, useEffect } from 'react';
import { useFinance } from '../../context/FinancialContext';
import { CATEGORIES_DATA } from '../../data/categoriesData';
import { MOCK_DEPOSITO_RATES, MOCK_STOCKS, MOCK_BONDS } from '../../data/marketMockData';
import { ArrowRight, ChevronRight, Send, RefreshCw, CheckCircle2, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

export const SubcategoryDetailView: React.FC = () => {
  const {
    selectedCategoryId,
    selectedSubcategoryId,
    navigateToItem,
    navigateToCategory,
    triggerWorkerAction,
    isWorkerLoading
  } = useFinance();

  const [syncNotice, setSyncNotice] = useState<string | null>(null);

  const category = CATEGORIES_DATA.find((c) => c.id === selectedCategoryId) || CATEGORIES_DATA[0];
  const subcategory = category.subcategories.find((s) => s.id === selectedSubcategoryId) || category.subcategories[0];

    useEffect(() => {
    let isMounted = true;

    async function autoSync() {
      setSyncNotice('Menghubungkan ke Cloudflare Worker...');
      const res = await triggerWorkerAction('SYNC_SUBCATEGORY_STREAM', {
        categorySlug: category.slug,
        subcategorySlug: subcategory.slug,
        itemsCount: subcategory.items.length
      });

      if (!isMounted) return;

      if (res.success) {
        setSyncNotice(`Feed ${subcategory.name} tersinkron (${res.latencyMs}ms)`);
        setTimeout(() => isMounted && setSyncNotice(null), 3500);
      } else {
        setSyncNotice(`Gagal: ${res.message}`);
        setTimeout(() => isMounted && setSyncNotice(null), 5000);
      }
    }

    autoSync();
    return () => { isMounted = false; };
  }, [category.slug, subcategory.slug]);


  return (
    <div className="space-y-8 animate-fade-in">
      {/* Subcategory Banner */}
      <section className="p-6 md:p-8 rounded-3xl bg-linear-to-b from-[#0e1722] to-[#091016] border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs text-emerald-400 font-mono">
          <button
            onClick={() => navigateToCategory(category.id)}
            className="hover:underline cursor-pointer"
          >
            {category.name}
          </button>
          <span>/</span>
          <span>SUBKATEGORI {subcategory.number}</span>
          <span>·</span>
          <span>{subcategory.items.length} INDIKATOR</span>
        </div>

        {/* Focused Keyword Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {subcategory.number}. {subcategory.name}
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          {subcategory.description}
        </p>

        {/* Focused SEO Keywords */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-slate-400">
          <span className="text-slate-500 font-semibold">Fokus Keyword Halaman:</span>
          {subcategory.keywords.map((kw, i) => (
            <React.Fragment key={kw}>
              <span className="text-slate-200 font-semibold hover:text-emerald-400">{kw}</span>
              {i < subcategory.keywords.length - 1 && <span>·</span>}
            </React.Fragment>
          ))}
        </div>
        
        {syncNotice && (
          <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2 animate-fade-in font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            {syncNotice}
          </div>
        )}
      </section>

      {/* Complete List of Subcategory Items */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white tracking-tight">
            Daftar Lengkap Topik & Indikator: {subcategory.name}
          </h2>
          <span className="text-xs text-slate-400">
            {subcategory.items.length} Indikator Spesifik
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subcategory.items.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => navigateToItem(category.id, subcategory.id, item.id)}
              className="p-5 rounded-2xl bg-[#0c1219] border border-slate-800 hover:border-emerald-500/40 hover:bg-[#0e1620] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                    Indikator #{idx + 1}
                  </span>
                  {item.requiresApiKey && (
                    <span className="text-[10px] font-mono font-semibold bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      Edge API
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-emerald-400 font-medium">
                <span>Buka Detail & Data Pasar</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contextual Market Data Preview */}
      {category.id === 'deposito-tabungan' && (
        <section className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Tabel Suku Bunga Deposito Perbankan Nasional Terupdate
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-2.5 px-3">Bank</th>
                  <th className="py-2.5 px-3">Produk</th>
                  <th className="py-2.5 px-3 text-right">Tenor 1 Bulan</th>
                  <th className="py-2.5 px-3 text-right">Tenor 6 Bulan</th>
                  <th className="py-2.5 px-3 text-right">Tenor 12 Bulan</th>
                  <th className="py-2.5 px-3 text-center">Status LPS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {MOCK_DEPOSITO_RATES.slice(0, 5).map((dep) => (
                  <tr key={dep.bankName} className="hover:bg-slate-900/60">
                    <td className="py-2.5 px-3 font-sans font-bold text-white">{dep.bankName}</td>
                    <td className="py-2.5 px-3 font-sans text-slate-400">{dep.productName}</td>
                    <td className="py-2.5 px-3 text-right text-slate-300">{dep.rate1M.toFixed(2)}%</td>
                    <td className="py-2.5 px-3 text-right text-slate-300">{dep.rate6M.toFixed(2)}%</td>
                    <td className="py-2.5 px-3 text-right text-emerald-400 font-bold">{dep.rate12M.toFixed(2)}%</td>
                    <td className="py-2.5 px-3 text-center">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-sans font-semibold ${dep.lpsCovered ? 'bg-cyan-950 text-cyan-300' : 'bg-amber-950 text-amber-300'}`}>
                        {dep.lpsCovered ? 'Dijamin' : 'Non-LPS'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {category.id === 'obligasi-pendapatan-tetap' && (
        <section className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Tabel Surat Berharga Negara (SBN Ritel) & Benchmark Terupdate
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-2.5 px-3">Kode Seri</th>
                  <th className="py-2.5 px-3">Nama Instrumen</th>
                  <th className="py-2.5 px-3 text-right">Kupon (p.a.)</th>
                  <th className="py-2.5 px-3 text-right">Yield (YTM)</th>
                  <th className="py-2.5 px-3 text-right">Tenor</th>
                  <th className="py-2.5 px-3 text-center">Peringkat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {MOCK_BONDS.map((bnd) => (
                  <tr key={bnd.code} className="hover:bg-slate-900/60">
                    <td className="py-2.5 px-3 font-sans font-bold text-emerald-400">{bnd.code}</td>
                    <td className="py-2.5 px-3 font-sans text-slate-300">{bnd.name}</td>
                    <td className="py-2.5 px-3 text-right text-emerald-400 font-bold">{bnd.couponRate.toFixed(2)}%</td>
                    <td className="py-2.5 px-3 text-right text-slate-300">{bnd.yieldToMaturity.toFixed(2)}%</td>
                    <td className="py-2.5 px-3 text-right text-slate-400">{bnd.tenorYears} Thn</td>
                    <td className="py-2.5 px-3 text-center">
                      <span className="px-2 py-0.5 rounded text-[10px] font-sans font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                        {bnd.creditRating}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
};
