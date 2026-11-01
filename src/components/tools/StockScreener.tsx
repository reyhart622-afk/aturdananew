import React, { useState } from 'react';
import { MOCK_STOCKS } from '../../data/marketMockData';
import { StockData } from '../../types/finance';
import { useFinance } from '../../context/FinancialContext';
import { SlidersHorizontal, TrendingUp, TrendingDown, Send, RefreshCw, CheckCircle2, Search, ArrowUpDown } from 'lucide-react';

export const StockScreener: React.FC = () => {
  const { triggerWorkerAction, isWorkerLoading, navigateToItem } = useFinance();

  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [maxPer, setMaxPer] = useState<number>(999);
  const [maxPbv, setMaxPbv] = useState<number>(999);
  const [minYield, setMinYield] = useState<number>(0);
  const [onlySyariah, setOnlySyariah] = useState<boolean>(false);
  const [searchTicker, setSearchTicker] = useState<string>('');
  const [sortBy, setSortBy] = useState<'marketCap' | 'changePercent' | 'peRatio' | 'dividendYield'>('marketCap');
  const [syncNotice, setSyncNotice] = useState<string | null>(null);

  const sectors = ['All', 'Financials', 'Energy', 'Industrials', 'Infrastructure', 'Basic Materials', 'Consumer Non-Cyclicals', 'Technology'];

  const filteredStocks = MOCK_STOCKS.filter((stock) => {
    if (selectedSector !== 'All' && stock.sector !== selectedSector) return false;
    if (stock.peRatio > maxPer) return false;
    if (stock.pbvRatio > maxPbv) return false;
    if (stock.dividendYield < minYield) return false;
    if (onlySyariah && !stock.isSyariah) return false;
    if (searchTicker && !stock.ticker.toLowerCase().includes(searchTicker.toLowerCase()) && !stock.name.toLowerCase().includes(searchTicker.toLowerCase())) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'marketCap') return b.marketCap - a.marketCap;
    if (sortBy === 'changePercent') return b.changePercent - a.changePercent;
    if (sortBy === 'peRatio') return a.peRatio - b.peRatio;
    if (sortBy === 'dividendYield') return b.dividendYield - a.dividendYield;
    return 0;
  });

  const handleWorkerSync = async () => {
    setSyncNotice('Mengirim API Key ke Cloudflare Worker...');
    const res = await triggerWorkerAction('SCREEN_IDX_STOCKS', {
      sector: selectedSector,
      maxPer,
      maxPbv,
      minYield,
      timestamp: Date.now()
    });
    if (res.success) {
      setSyncNotice(`Data emiten BEI terverifikasi (${res.latencyMs}ms) via Edge`);
      setTimeout(() => setSyncNotice(null), 3000);
    }
  };

  return (
    <div className="bg-[#0c1219] border border-slate-800 rounded-2xl p-5 md:p-7 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <SlidersHorizontal className="w-5 h-5" />
            </span>
            <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">
              Screener Saham Bursa Efek Indonesia (BEI)
            </h2>
          </div>
          <p className="text-xs text-slate-400">
            Saring emiten IHSG berbasis valuasi fundamental (PER, PBV), yield dividen, dan kapitalisasi pasar.
          </p>
        </div>

        {/* Worker Cloudflare Sync Button (Disembunyikan dari tampilan mata pengunjung) */}
        <button
          onClick={handleWorkerSync}
          disabled={isWorkerLoading}
          style={{ display: 'none' }}
          className="shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/60 transition-colors text-xs font-medium cursor-pointer disabled:opacity-50"
          title="Sinkronkan data live harga & fundamental via Worker"
        >
          {isWorkerLoading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
          <span>Sync Screener via Worker</span>
        </button>
      </div>

      {syncNotice && (
        <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2 animate-fade-in font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          {syncNotice}
        </div>
      )}

      {/* Filter Controls Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 text-xs">
        {/* Search Ticker */}
        <div>
          <label className="text-slate-400 block mb-1 font-medium">Cari Kode / Nama</label>
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
            <input
              type="text"
              placeholder="BBCA, BBRI, Adaro..."
              value={searchTicker}
              onChange={(e) => setSearchTicker(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-slate-900 border border-slate-700/80 rounded-lg text-white focus:outline-none focus:border-emerald-500 text-xs"
            />
          </div>
        </div>

        {/* Sektor */}
        <div>
          <label className="text-slate-400 block mb-1 font-medium">Sektor BEI</label>
          <select
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
            className="w-full py-1.5 px-2 bg-slate-900 border border-slate-700/80 rounded-lg text-white focus:outline-none focus:border-emerald-500 text-xs"
          >
            {sectors.map((sec) => (
              <option key={sec} value={sec}>{sec === 'All' ? 'Semua Sektor' : sec}</option>
            ))}
          </select>
        </div>

        {/* PER Filter */}
        <div>
          <label className="text-slate-400 block mb-1 font-medium">Valuasi PER</label>
          <select
            value={maxPer}
            onChange={(e) => setMaxPer(Number(e.target.value))}
            className="w-full py-1.5 px-2 bg-slate-900 border border-slate-700/80 rounded-lg text-white focus:outline-none focus:border-emerald-500 text-xs"
          >
            <option value={999}>Semua PER</option>
            <option value={10}>PER Murah (&le; 10x)</option>
            <option value={15}>PER Wajar (&le; 15x)</option>
            <option value={20}>PER &le; 20x</option>
          </select>
        </div>

        {/* Dividend Yield */}
        <div>
          <label className="text-slate-400 block mb-1 font-medium">Dividen Yield</label>
          <select
            value={minYield}
            onChange={(e) => setMinYield(Number(e.target.value))}
            className="w-full py-1.5 px-2 bg-slate-900 border border-slate-700/80 rounded-lg text-white focus:outline-none focus:border-emerald-500 text-xs"
          >
            <option value={0}>Semua Emiten</option>
            <option value={3}>Yield &gt; 3%</option>
            <option value={5}>Yield &gt; 5% (Tinggi)</option>
            <option value={8}>Yield &gt; 8% (Jumbo)</option>
          </select>
        </div>

        {/* Syariah & Sort */}
        <div className="flex flex-col justify-end">
          <label className="flex items-center gap-2 cursor-pointer py-1.5">
            <input
              type="checkbox"
              checked={onlySyariah}
              onChange={(e) => setOnlySyariah(e.target.checked)}
              className="accent-emerald-500 rounded"
            />
            <span className="text-slate-300 font-medium text-xs">Hanya Saham Syariah (ISSI)</span>
          </label>
        </div>
      </div>

      {/* Sorting Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
        <span className="text-slate-400">
          Ditemukan <strong className="text-emerald-400">{filteredStocks.length}</strong> emiten memenuhi kriteria
        </span>

        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-[11px]">
          <span className="text-slate-500 px-2 font-medium">Urutkan:</span>
          {(['marketCap', 'changePercent', 'peRatio', 'dividendYield'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setSortBy(mode)}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                sortBy === mode ? 'bg-emerald-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {mode === 'marketCap' && 'Market Cap'}
              {mode === 'changePercent' && 'Gainers %'}
              {mode === 'peRatio' && 'PER Terendah'}
              {mode === 'dividendYield' && 'Yield Tertinggi'}
            </button>
          ))}
        </div>
      </div>

      {/* Results Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-[#0e1620] text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
              <th className="py-3 px-4">Ticker</th>
              <th className="py-3 px-4">Nama Emiten</th>
              <th className="py-3 px-4 text-right">Harga (IDR)</th>
              <th className="py-3 px-4 text-right">Perubahan</th>
              <th className="py-3 px-4 text-right">PER (x)</th>
              <th className="py-3 px-4 text-right">PBV (x)</th>
              <th className="py-3 px-4 text-right">ROE (%)</th>
              <th className="py-3 px-4 text-right">Yield (%)</th>
              <th className="py-3 px-4 text-right">Market Cap</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-mono">
            {filteredStocks.map((stock) => {
              const isPositive = stock.change >= 0;
              return (
                <tr
                  key={stock.ticker}
                  onClick={() => navigateToItem('saham-ihsg', 'harga-dan-grafik-saham', 'harga-saham-terbaru')}
                  className="hover:bg-slate-900/60 transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4 font-bold text-white group-hover:text-emerald-400 transition-colors">
                    <div className="flex items-center gap-1.5">
                      <span>{stock.ticker}</span>
                      {stock.isSyariah && (
                        <span className="text-[9px] font-sans font-semibold text-emerald-400 bg-emerald-950 px-1 rounded border border-emerald-500/20">
                          Syariah
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4 font-sans text-slate-300 truncate max-w-[180px]">
                    {stock.name}
                  </td>
                  <td className="py-3 px-4 text-right font-bold text-white">
                    Rp {stock.price.toLocaleString('id-ID')}
                  </td>
                  <td className={`py-3 px-4 text-right font-semibold ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {isPositive ? '+' : ''}{stock.changePercent}%
                  </td>
                  <td className="py-3 px-4 text-right text-slate-300">
                    {stock.peRatio > 0 ? `${stock.peRatio.toFixed(1)}x` : '-'}
                  </td>
                  <td className="py-3 px-4 text-right text-slate-300">
                    {stock.pbvRatio.toFixed(2)}x
                  </td>
                  <td className="py-3 px-4 text-right text-slate-300">
                    {stock.roe.toFixed(1)}%
                  </td>
                  <td className="py-3 px-4 text-right text-amber-300 font-semibold">
                    {stock.dividendYield > 0 ? `${stock.dividendYield.toFixed(2)}%` : '-'}
                  </td>
                  <td className="py-3 px-4 text-right text-slate-400 font-sans text-[11px]">
                    Rp {stock.marketCap.toFixed(1)} T
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
