import React, { useState } from 'react';
import { useFinance } from '../context/FinancialContext';
import { CATEGORIES_DATA } from '../data/categoriesData';
import {
  ShieldCheck,
  ArrowUp,
  Globe,
  Mail,
  MapPin,
  Clock,
  FileText,
  Lock,
  AlertTriangle,
  Building2,
  Cpu,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateToHome, navigateToCategory, navigateToTool, navigateToLegal, setIsApiKeyModalOpen } = useFinance();

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="mt-16 border-t border-slate-800/80 bg-[#060a0e] text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-5 py-12 lg:py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand & Editorial Identity */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={navigateToHome}
              className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500 to-emerald-800 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-emerald-950/60">
                A
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  Aturdana<span className="text-emerald-400">.id</span>
                </span>
                <span className="block text-[10px] text-slate-500 font-medium">
                  Portal Finansial & Pasar Modal Indonesia
                </span>
              </div>
            </button>

            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Portal data independen untuk analisis pasar modal Bursa Efek Indonesia (BEI), suku bunga deposito perbankan berpenjaminan LPS, produk Reksa Dana & ETF, serta instrumen literasi finansial terpercaya.
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-800/70 text-[11px] text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Financial Tower Lt. 18, SCBD Kav. 52-53, Jakarta Selatan 12190</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="mailto:redaksi@aturdana.id" className="hover:text-emerald-400 transition-colors">
                  redaksi@aturdana.id
                </a>
                <span className="text-slate-600">·</span>
                <a href="mailto:kontak@aturdana.id" className="hover:text-emerald-400 transition-colors">
                  kontak@aturdana.id
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Jam Redaksi: Senin - Jumat (08:30 - 17:30 WIB)</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1 text-[10px] font-mono text-slate-400">
              <span className="px-2 py-0.5 rounded bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">
                BEI DATA SYNC
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                LPS MONITOR
              </span>
              <span className="px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
                SSL 256-BIT SECURE
              </span>
            </div>
          </div>

          {/* 3 Categories Navigation */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {CATEGORIES_DATA.map((cat) => (
              <div key={cat.id} className="space-y-2.5">
                <button
                  onClick={() => navigateToCategory(cat.id)}
                  className="font-bold text-white hover:text-emerald-400 transition-colors cursor-pointer text-left block text-xs tracking-tight"
                >
                  {cat.name}
                </button>
                <ul className="space-y-1.5 list-none p-0 m-0 text-slate-400 text-[11px]">
                  {cat.subcategories.slice(0, 5).map((sub) => (
                    <li key={sub.id}>
                      <button
                        onClick={() => navigateToCategory(cat.id)}
                        className="hover:text-slate-200 transition-colors text-left truncate max-w-full block"
                      >
                        {sub.name}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => navigateToCategory(cat.id)}
                      className="text-emerald-400 hover:text-emerald-300 font-semibold text-[10px] inline-flex items-center gap-1"
                    >
                      Lihat Semua ({cat.subcategories.length}) →
                    </button>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          {/* Professional Links & Legal Actions */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-bold text-white block text-xs tracking-tight">
              Informasi & Legalitas
            </span>
            <ul className="space-y-2 list-none p-0 m-0 text-[11px]">
              <li>
                <button
                  onClick={() => navigateToLegal('disclaimer')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Disclaimer & Risiko Finansial</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToLegal('privacy')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Kebijakan Privasi (Privacy Policy)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToLegal('terms')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Syarat & Ketentuan Layanan (Terms)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToLegal('contact')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Kontak Redaksi & Pengaduan Data</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToLegal('about')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Tentang Kami (About Us)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToLegal('pedoman')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Pedoman Pemberitaan Media Siber</span>
                </button>
              </li>
            </ul>

            <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                Alat Bantu Finansial
              </span>
              <div className="flex flex-col gap-1 text-[11px]">
                <button
                  onClick={() => navigateToTool('calculator')}
                  className="hover:text-emerald-400 text-left transition-colors cursor-pointer"
                >
                  Kalkulator Simulasi Deposito LPS
                </button>
                <button
                  onClick={() => navigateToTool('screener')}
                  className="hover:text-emerald-400 text-left transition-colors cursor-pointer"
                >
                  Screener Emiten Saham BEI
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Highlighted Disclaimer Box */}
        <div className="p-4 rounded-2xl bg-[#0a0f15] border border-amber-500/20 text-slate-400 text-xs space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Pemberitahuan Risiko Investasi & Batasan Tanggung Jawab (Disclaimer)</span>
          </div>
          <p className="text-[11px] leading-relaxed text-slate-400">
            Seluruh konten, ringkasan pergerakan saham BEI, grafik IHSG, suku bunga penempatan deposito, dan metrik kinerja reksa dana di portal Aturdana.id ditujukan eksklusif untuk tujuan edukasi finansial, perbandingan independen, dan referensi riset mandiri. Aturdana.id bukan merupakan perantara pedagang efek (broker), manajer investasi, atau lembaga penasihat keuangan berlisensi yang memberikan anjuran langsung beli/jual instrumen tertentu. Kinerja historis tidak menjamin hasil di masa depan. Selalu lakukan analisis fundamental dan pertimbangkan profil risiko pribadi Anda sebelum mengambil keputusan penempatan modal.
          </p>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-3 text-slate-400 text-[11px]">
            <span>© {new Date().getFullYear()} Aturdana.id. Seluruh hak cipta dilindungi.</span>
            <span>·</span>
            <span>Domain Resmi: aturdana.id</span>
            <span>·</span>
            <button
              onClick={() => navigateToLegal('disclaimer')}
              className="hover:text-emerald-400 cursor-pointer transition-colors"
            >
              Disclaimer
            </button>
            <span>·</span>
            <button
              onClick={() => navigateToLegal('privacy')}
              className="hover:text-emerald-400 cursor-pointer transition-colors"
            >
              Kebijakan Privasi
            </button>
            <span>·</span>
            <button
              onClick={() => navigateToLegal('terms')}
              className="hover:text-emerald-400 cursor-pointer transition-colors"
            >
              Syarat & Ketentuan
            </button>
            <span>·</span>
            <button
              onClick={() => navigateToLegal('contact')}
              className="hover:text-emerald-400 cursor-pointer transition-colors"
            >
              Kontak
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsApiKeyModalOpen(true)}
              style={{ display: 'none' }}
              className="text-xs text-emerald-400 flex items-center gap-1"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Worker Key</span>
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/50 hover:bg-slate-800 transition-colors cursor-pointer text-xs font-medium"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
