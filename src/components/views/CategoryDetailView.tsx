import React from 'react';
import { useFinance } from '../../context/FinancialContext';
import { CATEGORIES_DATA } from '../../data/categoriesData';
import { ArrowRight, ChevronRight, Layers, Send, RefreshCw, CheckCircle2 } from 'lucide-react';

export const CategoryDetailView: React.FC = () => {
  const {
    selectedCategoryId,
    navigateToSubcategory,
    navigateToItem,
    triggerWorkerAction,
    isWorkerLoading
  } = useFinance();

  const category = CATEGORIES_DATA.find((c) => c.id === selectedCategoryId) || CATEGORIES_DATA[0];

  const handleSyncCategoryData = async () => {
    await triggerWorkerAction('SYNC_CATEGORY_FEED', {
      categoryId: category.id,
      subcategoriesCount: category.subcategories.length
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Category Hero Banner */}
      <section className="p-6 md:p-8 rounded-3xl bg-linear-to-b from-[#0e1722] to-[#091016] border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs text-emerald-400 font-mono">
          <span>KATEGORI INDUK</span>
          <span>·</span>
          <span>{category.subcategories.length} SUBKATEGORI</span>
          <span>·</span>
          <span>ATURDANA.ID</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {category.name}
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          {category.description}
        </p>

        {/* Focused SEO Keywords for Category */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-slate-400">
          <span className="text-slate-500 font-semibold">Fokus Kata Kunci:</span>
          {category.keywords.map((kw, i) => (
            <React.Fragment key={kw}>
              <span className="text-slate-300 font-medium hover:text-emerald-400">{kw}</span>
              {i < category.keywords.length - 1 && <span>·</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Worker Action Button (Disembunyikan dari tampilan mata pengunjung) */}
        <div className="pt-3" style={{ display: 'none' }}>
          <button
            onClick={handleSyncCategoryData}
            disabled={isWorkerLoading}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/60 transition-colors text-xs font-medium cursor-pointer"
          >
            {isWorkerLoading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
            <span>Kirim API Key ke Cloudflare Worker untuk Feed {category.name}</span>
          </button>
        </div>
      </section>

      {/* Grid of Subcategories */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-400" />
            Daftar Subkategori Resmi {category.name}
          </h2>
          <span className="text-xs text-slate-400">
            {category.subcategories.length} Bidang Analisis
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {category.subcategories.map((subcat) => (
            <div
              key={subcat.id}
              className="p-5 rounded-2xl bg-[#0c1219] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    Subkategori {subcat.number}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {subcat.items.length} Indikator / Topik
                  </span>
                </div>

                <h3
                  onClick={() => navigateToSubcategory(category.id, subcat.id)}
                  className="text-base font-bold text-white hover:text-emerald-300 cursor-pointer transition-colors mb-2"
                >
                  {subcat.number}. {subcat.name}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                  {subcat.description}
                </p>

                {/* Subcategory Items Preview */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {subcat.items.slice(0, 5).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => navigateToItem(category.id, subcat.id, item.id)}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400 hover:text-emerald-300 hover:border-emerald-500/40 transition-colors cursor-pointer"
                    >
                      {item.name}
                    </button>
                  ))}
                  {subcat.items.length > 5 && (
                    <span className="text-[10px] text-slate-500 self-center">
                      +{subcat.items.length - 5} lainnya
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => navigateToSubcategory(category.id, subcat.id)}
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Buka Data Subkategori</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
