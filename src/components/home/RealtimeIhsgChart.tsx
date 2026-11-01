import React, { useEffect, useRef } from 'react';
import { Activity, TrendingUp } from 'lucide-react';
import { useFinance } from '../../context/FinancialContext';

export const RealtimeIhsgChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { apiKey } = useFinance();

  useEffect(() => {
    // Ensure TradingView widget script is present
    const scriptSrc = 'https://widgets.tradingview-widget.com/w/id/tv-advanced-chart.js';
    let scriptTag = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;
    
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'module';
      scriptTag.src = scriptSrc;
      document.head.appendChild(scriptTag);
    }

    // Mount the TradingView custom element directly into container
    if (containerRef.current) {
      containerRef.current.innerHTML = `
        <tv-advanced-chart 
          symbol="IDX:COMPOSITE" 
          timezone="Asia/Jakarta" 
          chart-type="bars" 
          allow-symbol-change
          style="width: 100%; height: 100%; display: block;"
        ></tv-advanced-chart>
      `;
    }
  }, []);

  return (
    <section className="bg-[#0c1219] border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-5">
      {/* Chart Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Activity className="w-5 h-5 animate-pulse" />
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
              Grafik IHSG Real-Time (Indeks Harga Saham Gabungan)
            </h2>
          </div>
          <p className="text-xs text-slate-400">
            Data pasar saham Indonesia (IDX:COMPOSITE) real-time dengan grafik teknikal interaktif TradingView.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>IDX:COMPOSITE LIVE</span>
            <span className="text-[10px] text-slate-400">· WIB (Jakarta)</span>
          </div>

          {/* Pengaturan APIKEY tetap ada di sistem namun disembunyikan (HIDDEN) dari tampilan mata pengunjung */}
          <div style={{ display: 'none' }} aria-hidden="true" data-apikey-setting={apiKey}>
            <input type="hidden" name="active_apikey" value={apiKey} readOnly />
          </div>
        </div>
      </div>

      {/* TradingView Advanced Chart Container */}
      <div className="w-full h-[520px] sm:h-[580px] lg:h-[620px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 relative">
        <div ref={containerRef} className="w-full h-full" />
      </div>

      {/* Chart Footer Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400 pt-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Simbol: <strong>IDX:COMPOSITE</strong> · Zona Waktu: <strong>Asia/Jakarta</strong> · Tipe Grafik: <strong>Bars</strong></span>
        </div>
        <span className="text-[11px] text-slate-500 font-mono">Bursa Efek Indonesia</span>
      </div>
    </section>
  );
};
