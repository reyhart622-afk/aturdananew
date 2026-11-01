import React, { useState } from 'react';
import { useFinance } from '../../context/FinancialContext';
import { MOCK_DEPOSITO_RATES, MACRO_INDICATORS } from '../../data/marketMockData';
import { Calculator, ArrowRight, ShieldCheck, AlertTriangle, Send, RefreshCw, CheckCircle2 } from 'lucide-react';

export const DepositoCalculator: React.FC = () => {
  const { triggerWorkerAction, isWorkerLoading, t } = useFinance();

  const [nominal, setNominal] = useState<number>(50000000); // 50 Juta
  const [bungaTahunan, setBungaTahunan] = useState<number>(6.00); // 6%
  const [tenorBulan, setTenorBulan] = useState<number>(12); // 12 bulan
  const [isAroPlus, setIsAroPlus] = useState<boolean>(false);
  const [syncStatus, setSyncStatus] = useState<string | null>(null);

  // Indonesian Banking Tax Law: PPh Final 20% if nominal > 7.500.000 IDR
  const isTaxApplicable = nominal > 7500000;
  const taxRate = isTaxApplicable ? 0.20 : 0.00;

  // Calculation
  const tenorTahun = tenorBulan / 12;
  const bungaKotor = nominal * (bungaTahunan / 100) * tenorTahun;
  const pajakPPh = bungaKotor * taxRate;
  const bungaBersih = bungaKotor - pajakPPh;
  const totalAkhir = nominal + bungaBersih;
  const bungaBulananBersih = bungaBersih / tenorBulan;

  // Is within LPS limit?
  const isLpsSafe = bungaTahunan <= MACRO_INDICATORS.lpsRate.value;

  const handleWorkerSyncRates = async () => {
    setSyncStatus('Mengirim API Key ke Cloudflare Worker...');
    const res = await triggerWorkerAction('FETCH_BANK_DEPOSIT_RATES', {
      source: 'kalkulator_deposito',
      filter: 'all_banks'
    });
    if (res.success) {
      setSyncStatus(`Data suku bunga berhasil disinkronkan (${res.latencyMs}ms)`);
      setTimeout(() => setSyncStatus(null), 3000);
    }
  };

  return (
    <div className="bg-[#0c1219] border border-slate-800 rounded-2xl p-5 md:p-7 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Calculator className="w-5 h-5" />
            </span>
            <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">
              Kalkulator Simulasi Bunga Deposito & Pajak PPh 20%
            </h2>
          </div>
          <p className="text-xs text-slate-400">
            Perhitungan akurat sesuai regulasi perbankan Indonesia (PPh 20% untuk saldo &gt; Rp 7.500.000).
          </p>
        </div>

        {/* Worker Sync Button (Disembunyikan dari tampilan mata pengunjung) */}
        <button
          onClick={handleWorkerSyncRates}
          disabled={isWorkerLoading}
          style={{ display: 'none' }}
          className="shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/60 transition-colors text-xs font-medium cursor-pointer disabled:opacity-50"
          title="Sinkronkan suku bunga bank terbaru via Worker"
        >
          {isWorkerLoading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
          <span>Sync Rate via Cloudflare Worker</span>
        </button>
      </div>

      {syncStatus && (
        <div className="mb-4 p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2 animate-fade-in font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          {syncStatus}
        </div>
      )}

      {/* Main Grid: Inputs vs Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Input Column */}
        <div className="lg:col-span-7 space-y-4">
          {/* Nominal Deposit */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">
              Nominal Penempatan Deposito (IDR)
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-2.5 text-xs font-mono text-slate-400 font-bold">
                Rp
              </span>
              <input
                type="number"
                value={nominal}
                onChange={(e) => setNominal(Math.max(0, Number(e.target.value)))}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-white font-mono text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
            {/* Quick Nominal Presets */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {[10000000, 25000000, 50000000, 100000000, 500000000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setNominal(preset)}
                  className={`text-[11px] px-2.5 py-1 rounded-md border transition-colors cursor-pointer ${
                    nominal === preset
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  Rp {(preset / 1000000).toFixed(0)} Juta
                </button>
              ))}
            </div>
          </div>

          {/* Suku Bunga */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Suku Bunga per Tahun (% p.a.)
              </label>
              <span className="text-[11px] font-mono text-emerald-400 font-bold">
                {bungaTahunan.toFixed(2)}%
              </span>
            </div>
            <input
              type="range"
              min="2.00"
              max="9.00"
              step="0.25"
              value={bungaTahunan}
              onChange={(e) => setBungaTahunan(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            {/* Preset Bank Rate buttons */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              <button
                type="button"
                onClick={() => setBungaTahunan(MACRO_INDICATORS.lpsRate.value)}
                className="text-[11px] px-2 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300 hover:bg-slate-800"
              >
                Maks LPS (4.25%)
              </button>
              <button
                type="button"
                onClick={() => setBungaTahunan(4.00)}
                className="text-[11px] px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800"
              >
                BCA/Mandiri (4.00%)
              </button>
              <button
                type="button"
                onClick={() => setBungaTahunan(6.00)}
                className="text-[11px] px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800"
              >
                SeaBank (6.00%)
              </button>
              <button
                type="button"
                onClick={() => setBungaTahunan(8.75)}
                className="text-[11px] px-2 py-1 rounded bg-slate-900 border border-slate-800 text-amber-300 hover:bg-slate-800"
              >
                Krom Bank (8.75%)
              </button>
            </div>
          </div>

          {/* Tenor Selection */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">
              Jangka Waktu Penempatan (Tenor)
            </label>
            <div className="grid grid-cols-5 gap-2">
              {[1, 3, 6, 12, 24].map((tenor) => (
                <button
                  key={tenor}
                  type="button"
                  onClick={() => setTenorBulan(tenor)}
                  className={`py-2 text-xs font-medium rounded-xl border text-center transition-colors cursor-pointer ${
                    tenorBulan === tenor
                      ? 'bg-emerald-600 border-emerald-500 text-white font-bold shadow-sm'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {tenor} Bulan
                </button>
              ))}
            </div>
          </div>

          {/* LPS Warning / Safety Indicator */}
          <div className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
            isLpsSafe
              ? 'bg-cyan-950/30 border-cyan-800/40 text-cyan-200'
              : 'bg-amber-950/30 border-amber-800/40 text-amber-200'
          }`}>
            {isLpsSafe ? (
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            )}
            <div>
              <span className="font-semibold block mb-0.5">
                {isLpsSafe
                  ? 'Bunga Dijamin 100% oleh LPS'
                  : 'Perhatian: Bunga Melebihi Tingkat Penjaminan LPS'}
              </span>
              <p className="text-[11px] opacity-90">
                {isLpsSafe
                  ? `Suku bunga ${bungaTahunan}% berada di bawah batas penjaminan LPS (${MACRO_INDICATORS.lpsRate.value}%). Simpanan hingga Rp 2 Milyar terlindungi undang-undang.`
                  : `Suku bunga ${bungaTahunan}% di atas batas penjaminan LPS (${MACRO_INDICATORS.lpsRate.value}%). Jika bank mengalami likuidasi, simpanan Anda tidak ditanggung oleh LPS.`}
              </p>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Rincian Imbal Hasil
              </span>
              <span className="text-[11px] font-mono text-emerald-400">
                Tenor {tenorBulan} Bulan
              </span>
            </div>

            <dl className="mt-4 space-y-3 text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <dt>Bunga Kotor (Gross)</dt>
                <dd className="font-mono text-slate-200 font-semibold">
                  Rp {Math.round(bungaKotor).toLocaleString('id-ID')}
                </dd>
              </div>

              <div className="flex items-center justify-between text-slate-400">
                <dt className="flex items-center gap-1">
                  <span>Pajak PPh Final (20%)</span>
                  {!isTaxApplicable && <span className="text-[10px] text-emerald-400">(Bebas Pajak &le; 7.5Jt)</span>}
                </dt>
                <dd className="font-mono text-rose-400 font-semibold">
                  - Rp {Math.round(pajakPPh).toLocaleString('id-ID')}
                </dd>
              </div>

              <div className="flex items-center justify-between text-slate-300 pt-2 border-t border-slate-800/60">
                <dt className="font-semibold text-emerald-400">Bunga Bersih (Net)</dt>
                <dd className="font-mono text-emerald-400 font-bold text-sm">
                  + Rp {Math.round(bungaBersih).toLocaleString('id-ID')}
                </dd>
              </div>

              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <dt>Bunga per Bulan (Rata-rata)</dt>
                <dd className="font-mono text-slate-300">
                  Rp {Math.round(bungaBulananBersih).toLocaleString('id-ID')} / bln
                </dd>
              </div>
            </dl>
          </div>

          {/* Total Maturity Value Banner */}
          <div className="mt-5 pt-4 border-t border-slate-800 bg-[#0e1620] -mx-5 -mb-5 p-5 rounded-b-2xl">
            <span className="text-[11px] text-slate-400 block mb-1 uppercase tracking-wide">
              Total Dana Saat Jatuh Tempo (Pokok + Bunga Bersih)
            </span>
            <div className="text-xl md:text-2xl font-black font-mono text-white tracking-tight text-emerald-400">
              Rp {Math.round(totalAkhir).toLocaleString('id-ID')}
            </div>
            <span className="text-[10px] text-slate-500 mt-1 block">
              Dihitung berdasarkan 365 hari per tahun kalender perbankan.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
