import React, { useState } from 'react';
import { MOCK_BONDS } from '../../data/marketMockData';
import { useFinance } from '../../context/FinancialContext';
import { ShieldCheck, ArrowRight, Percent, Send, RefreshCw, CheckCircle2 } from 'lucide-react';

export const BondYieldCalculator: React.FC = () => {
  const { triggerWorkerAction, isWorkerLoading } = useFinance();

  const [modalInvestasi, setModalInvestasi] = useState<number>(100000000); // 100 Juta
  const [selectedBondCode, setSelectedBondCode] = useState<string>('ORI025-T3');
  const [syncNotice, setSyncNotice] = useState<string | null>(null);

  const selectedBond = MOCK_BONDS.find((b) => b.code === selectedBondCode) || MOCK_BONDS[0];

  // Calculations: SBN Ritel coupon tax is strictly 10% (vs Deposito 20%)
  const kuponTahunanGross = modalInvestasi * (selectedBond.couponRate / 100);
  const pajakSBN10 = kuponTahunanGross * 0.10;
  const kuponTahunanNet = kuponTahunanGross - pajakSBN10;
  const kuponBulananNet = kuponTahunanNet / 12;

  // Comparative Deposit at 5.0% with 20% tax
  const depositoGross = modalInvestasi * 0.05;
  const pajakDep20 = depositoGross * 0.20;
  const depositoNet = depositoGross - pajakDep20;
  const selisihKeuntungan = kuponTahunanNet - depositoNet;

  const handleSyncWorker = async () => {
    setSyncNotice('Mengirim API Key ke Cloudflare Worker...');
    const res = await triggerWorkerAction('FETCH_SBN_PRICES', {
      bondCode: selectedBondCode,
      tenor: selectedBond.tenorYears
    });
    if (res.success) {
      setSyncNotice(`Kuotasi obligasi berhasil diverifikasi (${res.latencyMs}ms)`);
      setTimeout(() => setSyncNotice(null), 3000);
    }
  };

  return (
    <div className="bg-[#0c1219] border border-slate-800 rounded-2xl p-5 md:p-7 shadow-xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">
              Kalkulator Kupon SBN Ritel & Yield to Maturity (YTM)
            </h2>
          </div>
          <p className="text-xs text-slate-400">
            Simulasi passive income bulanan Surat Berharga Negara (Pajak hanya 10% vs Deposito 20%).
          </p>
        </div>

        {/* Worker Sync Button (Disembunyikan dari tampilan mata pengunjung) */}
        <button
          onClick={handleSyncWorker}
          disabled={isWorkerLoading}
          style={{ display: 'none' }}
          className="shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/60 transition-colors text-xs font-medium cursor-pointer disabled:opacity-50"
        >
          {isWorkerLoading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
          <span>Sync Yield via Worker</span>
        </button>
      </div>

      {syncNotice && (
        <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2 animate-fade-in font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          {syncNotice}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">
              Pilih Seri Obligasi / Surat Berharga Negara (SBN)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {MOCK_BONDS.map((bond) => (
                <button
                  key={bond.code}
                  type="button"
                  onClick={() => setSelectedBondCode(bond.code)}
                  className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                    selectedBondCode === bond.code
                      ? 'bg-slate-900 border-emerald-500 text-white shadow-xs'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold font-mono text-xs text-emerald-400">{bond.code}</span>
                    <span className="text-[10px] font-mono font-semibold bg-emerald-950/80 text-emerald-300 px-1.5 py-0.5 rounded">
                      Kupon {bond.couponRate}%
                    </span>
                  </div>
                  <span className="text-xs text-slate-300 line-clamp-1">{bond.name}</span>
                  <div className="flex items-center gap-2 mt-2 text-[10px] text-slate-400">
                    <span>Tenor {bond.tenorYears} Thn</span>
                    <span>·</span>
                    <span>Jatuh Tempo: {bond.maturityDate}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">
              Modal Investasi SBN (IDR)
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-2.5 text-xs font-mono text-slate-400 font-bold">
                Rp
              </span>
              <input
                type="number"
                value={modalInvestasi}
                onChange={(e) => setModalInvestasi(Math.max(1000000, Number(e.target.value)))}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-white font-mono text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {[5000000, 25000000, 50000000, 100000000, 500000000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setModalInvestasi(preset)}
                  className={`text-[11px] px-2.5 py-1 rounded-md border transition-colors cursor-pointer ${
                    modalInvestasi === preset
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  Rp {(preset / 1000000).toFixed(0)} Juta
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Results */}
        <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Proyeksi Imbal Hasil Bersih
              </span>
              <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                Pajak Kupon 10%
              </span>
            </div>

            <dl className="mt-4 space-y-3 text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <dt>Kupon Kotor per Tahun ({selectedBond.couponRate}%)</dt>
                <dd className="font-mono text-slate-200 font-semibold">
                  Rp {Math.round(kuponTahunanGross).toLocaleString('id-ID')}
                </dd>
              </div>

              <div className="flex items-center justify-between text-slate-400">
                <dt>Pajak Penghasilan Final (10%)</dt>
                <dd className="font-mono text-rose-400 font-semibold">
                  - Rp {Math.round(pajakSBN10).toLocaleString('id-ID')}
                </dd>
              </div>

              <div className="flex items-center justify-between text-slate-300 pt-2 border-t border-slate-800/60">
                <dt className="font-semibold text-emerald-400">Kupon Bersih per Tahun</dt>
                <dd className="font-mono text-emerald-400 font-bold text-sm">
                  Rp {Math.round(kuponTahunanNet).toLocaleString('id-ID')}
                </dd>
              </div>
            </dl>
          </div>

          {/* Monthly Passive Income Box */}
          <div className="mt-5 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
            <span className="text-[11px] text-emerald-300 font-medium block mb-1">
              Passive Income Ditransfer ke Rekening Setiap Bulan:
            </span>
            <div className="text-xl md:text-2xl font-black font-mono text-emerald-400">
              Rp {Math.round(kuponBulananNet).toLocaleString('id-ID')} / bulan
            </div>
            <p className="text-[10px] text-slate-400 mt-2">
              Lebih untung <strong>Rp {Math.round(selisihKeuntungan).toLocaleString('id-ID')}/tahun</strong> dibanding deposito konvensional berkat tarif pajak istimewa 10%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
