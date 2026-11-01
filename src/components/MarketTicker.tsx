import React from 'react';
import { MACRO_INDICATORS } from '../data/marketMockData';
import { TrendingUp, TrendingDown, ShieldAlert, Cpu } from 'lucide-react';
import { useFinance } from '../context/FinancialContext';

export const MarketTicker: React.FC = () => {
  const { apiKey, setIsApiKeyModalOpen } = useFinance();

  return (
    <div className="bg-[#080d12] border-b border-slate-800/60 text-xs py-2 px-4 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Ticker marquee items */}
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap text-slate-300">
          {/* IHSG */}
          <div className="flex items-center gap-1.5 font-mono">
            <span className="font-semibold text-slate-400">IHSG</span>
            <span className="text-white font-bold">{MACRO_INDICATORS.ihsg.value.toLocaleString('id-ID', { minimumFractionDigits: 2 })}</span>
            <span className="flex items-center text-emerald-400 font-medium text-[11px]">
              <TrendingUp className="w-3 h-3 mr-0.5 inline" />
              +{MACRO_INDICATORS.ihsg.change} (+{MACRO_INDICATORS.ihsg.changePercent}%)
            </span>
          </div>

          <span className="text-slate-700" aria-hidden="true">|</span>

          {/* LQ45 */}
          <div className="flex items-center gap-1.5 font-mono">
            <span className="font-semibold text-slate-400">LQ45</span>
            <span className="text-white font-bold">{MACRO_INDICATORS.lq45.value.toFixed(2)}</span>
            <span className="flex items-center text-emerald-400 font-medium text-[11px]">
              <TrendingUp className="w-3 h-3 mr-0.5 inline" />
              +{MACRO_INDICATORS.lq45.changePercent}%
            </span>
          </div>

          <span className="text-slate-700" aria-hidden="true">|</span>

          {/* BI-Rate */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">BI-Rate:</span>
            <span className="text-amber-400 font-mono font-semibold">{MACRO_INDICATORS.biRate.value.toFixed(2)}%</span>
          </div>

          <span className="text-slate-700" aria-hidden="true">|</span>

          {/* LPS Rate */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Penjaminan LPS:</span>
            <span className="text-cyan-400 font-mono font-semibold">{MACRO_INDICATORS.lpsRate.value.toFixed(2)}%</span>
          </div>

          <span className="text-slate-700" aria-hidden="true">|</span>

          {/* USD/IDR */}
          <div className="flex items-center gap-1.5 font-mono">
            <span className="text-slate-400">USD/IDR</span>
            <span className="text-white font-semibold">Rp {MACRO_INDICATORS.usdIdr.value.toLocaleString('id-ID')}</span>
            <span className="text-emerald-400 text-[11px]">({MACRO_INDICATORS.usdIdr.changePercent}%)</span>
          </div>

          <span className="text-slate-700" aria-hidden="true">|</span>

          {/* Emas Antam */}
          <div className="flex items-center gap-1.5 font-mono">
            <span className="text-slate-400">Emas Antam:</span>
            <span className="text-amber-300 font-semibold">Rp {(MACRO_INDICATORS.emasAntam.value / 1000).toFixed(0)}k/gr</span>
          </div>

          <span className="text-slate-700" aria-hidden="true">|</span>

          {/* US 10Y */}
          <div className="flex items-center gap-1.5 font-mono">
            <span className="text-slate-400">US 10Y Yield:</span>
            <span className="text-slate-200">{MACRO_INDICATORS.us10Y.value}%</span>
          </div>
        </div>

        {/* Cloudflare Worker API Key Badge (Disembunyikan dari tampilan mata pengunjung) */}
        <button
          onClick={() => setIsApiKeyModalOpen(true)}
          style={{ display: 'none' }}
          className="shrink-0 hidden md:flex items-center gap-2 py-1 px-2.5 rounded bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono transition-colors group cursor-pointer"
          title="Konfigurasi Worker Cloudflare API Key"
        >
          <Cpu className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>CF-Worker Key:</span>
          <span className="text-emerald-300 font-bold underline decoration-dotted">{apiKey.slice(0, 10)}...</span>
        </button>
      </div>
    </div>
  );
};
