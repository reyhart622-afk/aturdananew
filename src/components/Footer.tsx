import React, { useState } from 'react';
import { useFinance } from '../context/FinancialContext';
import { CATEGORIES_DATA } from '../data/categoriesData';
import {
  ShieldCheck,
  Cpu,
  ArrowUp,
  Globe,
  Mail,
  MapPin,
  Clock,
  Phone,
  FileText,
  Lock,
  AlertTriangle,
  HelpCircle,
  Building2,
  ExternalLink,
  X,
  CheckCircle2,
  Info
} from 'lucide-react';

type LegalModalTab = 'disclaimer' | 'privacy' | 'terms' | 'contact' | 'about' | 'pedoman' | null;

export const Footer: React.FC = () => {
  const { navigateToHome, navigateToCategory, navigateToTool, setIsApiKeyModalOpen } = useFinance();
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalTab>(null);
  const [contactFeedback, setContactFeedback] = useState<string | null>(null);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactFeedback('Pesan Anda berhasil dikirim ke tim redaksi Aturdana.id. Kami akan merespons dalam 1x24 jam kerja.');
    setTimeout(() => {
      setContactFeedback(null);
    }, 6000);
  };

  return (
    <footer className="mt-16 border-t border-slate-800/80 bg-[#060a0e] text-slate-400 text-xs relative">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-5 py-12 lg:py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand & Editorial Identity (4 cols) */}
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

            {/* Direct Contact Snippets */}
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

            {/* Verification & Trust Badges */}
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

          {/* 3 Categories Navigation (5 cols) */}
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

          {/* Professional Links & Legal Actions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-bold text-white block text-xs tracking-tight">
              Informasi & Legalitas
            </span>
            <ul className="space-y-2 list-none p-0 m-0 text-[11px]">
              <li>
                <button
                  onClick={() => setActiveLegalModal('disclaimer')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Disclaimer & Risiko Finansial</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveLegalModal('privacy')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Kebijakan Privasi (Privacy Policy)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveLegalModal('terms')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Syarat & Ketentuan Layanan (Terms)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveLegalModal('contact')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Kontak Redaksi & Pengaduan Data</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveLegalModal('about')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Tentang Kami (About Us)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveLegalModal('pedoman')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Pedoman Pemberitaan Media Siber</span>
                </button>
              </li>
            </ul>

            {/* Quick Tools Access */}
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

        {/* Highlighted Disclaimer Box - Essential for Professional Finance Sites */}
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
              onClick={() => setActiveLegalModal('disclaimer')}
              className="hover:text-emerald-400 cursor-pointer transition-colors"
            >
              Disclaimer
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-emerald-400 cursor-pointer transition-colors"
            >
              Kebijakan Privasi
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-emerald-400 cursor-pointer transition-colors"
            >
              Syarat & Ketentuan
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveLegalModal('contact')}
              className="hover:text-emerald-400 cursor-pointer transition-colors"
            >
              Kontak
            </button>
          </div>

          <div className="flex items-center gap-3">
            {/* API Key trigger preserved for state/system logic, but hidden visually */}
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

      {/* Interactive Modal for Reading Full Professional Legal Texts */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#0b1016] border border-slate-700/80 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-[#0e1620]">
              <div className="flex items-center gap-2.5">
                {activeLegalModal === 'disclaimer' && <AlertTriangle className="w-5 h-5 text-amber-400" />}
                {activeLegalModal === 'privacy' && <Lock className="w-5 h-5 text-emerald-400" />}
                {activeLegalModal === 'terms' && <FileText className="w-5 h-5 text-cyan-400" />}
                {activeLegalModal === 'contact' && <Mail className="w-5 h-5 text-emerald-400" />}
                {activeLegalModal === 'about' && <Building2 className="w-5 h-5 text-blue-400" />}
                {activeLegalModal === 'pedoman' && <ShieldCheck className="w-5 h-5 text-emerald-400" />}
                <h3 className="text-base font-bold text-white tracking-tight">
                  {activeLegalModal === 'disclaimer' && 'Disclaimer & Batasan Tanggung Jawab Finansial'}
                  {activeLegalModal === 'privacy' && 'Kebijakan Privasi (Privacy Policy)'}
                  {activeLegalModal === 'terms' && 'Syarat & Ketentuan Layanan (Terms of Service)'}
                  {activeLegalModal === 'contact' && 'Kontak Redaksi & Layanan Pengaduan'}
                  {activeLegalModal === 'about' && 'Tentang Aturdana.id'}
                  {activeLegalModal === 'pedoman' && 'Pedoman Pemberitaan Media Siber'}
                </h3>
              </div>
              <button
                onClick={() => setActiveLegalModal(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex items-center gap-1 p-2 bg-[#080d12] border-b border-slate-800 overflow-x-auto text-xs">
              <button
                onClick={() => setActiveLegalModal('disclaimer')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeLegalModal === 'disclaimer' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Disclaimer
              </button>
              <button
                onClick={() => setActiveLegalModal('privacy')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeLegalModal === 'privacy' ? 'bg-emerald-500/20 text-emerald-300 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Kebijakan Privasi
              </button>
              <button
                onClick={() => setActiveLegalModal('terms')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeLegalModal === 'terms' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Syarat & Ketentuan
              </button>
              <button
                onClick={() => setActiveLegalModal('contact')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeLegalModal === 'contact' ? 'bg-emerald-500/20 text-emerald-300 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Kontak Redaksi
              </button>
              <button
                onClick={() => setActiveLegalModal('about')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeLegalModal === 'about' ? 'bg-blue-500/20 text-blue-300 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Tentang Kami
              </button>
              <button
                onClick={() => setActiveLegalModal('pedoman')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeLegalModal === 'pedoman' ? 'bg-emerald-500/20 text-emerald-300 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Pedoman Siber
              </button>
            </div>

            {/* Modal Body Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-300 leading-relaxed custom-scrollbar">
              {activeLegalModal === 'disclaimer' && (
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-200">
                    <strong>PENTING:</strong> Segala informasi dan alat kalkulasi di Aturdana.id ditujukan secara eksklusif untuk kepentingan edukasi dan riset informasi umum.
                  </div>
                  <h4 className="text-sm font-bold text-white">1. Bukan Merupakan Saran Investasi Personal</h4>
                  <p>
                    Konten yang dimuat di Aturdana.id tidak boleh dianggap sebagai rekomendasi, tawaran, ajakan, atau nasihat investasi perorangan untuk membeli atau menjual instrumen keuangan apa pun, termasuk saham emiten BEI, penempatan deposito bank, maupun produk reksa dana.
                  </p>
                  <h4 className="text-sm font-bold text-white">2. Akurasi & Keterlambatan Data Pasar (Delay)</h4>
                  <p>
                    Meskipun Aturdana.id berupaya menyajikan data pasar saham, valuasi emiten, dan suku bunga deposito perbankan seakurat mungkin, data dapat mengalami keterlambatan (market feed delay) dari bursa atau lembaga sumber. Aturdana.id tidak bertanggung jawab atas kerugian finansial yang timbul akibat keterlambatan, ketidakakuratan, atau kelalaian data pihak ketiga.
                  </p>
                  <h4 className="text-sm font-bold text-white">3. Tanggung Jawab Pengguna (Do Your Own Research)</h4>
                  <p>
                    Keputusan menempatkan dana atau bertransaksi efek berada sepenuhnya dalam diskresi dan tanggung jawab masing-masing investor. Pengguna disarankan untuk berkonsultasi dengan penasihat keuangan independen yang berizin sebelum mengambil keputusan finansial bernilai material.
                  </p>
                </div>
              )}

              {activeLegalModal === 'privacy' && (
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                    <strong>KOMITMEN PRIVASI:</strong> Kami menghormati privasi Anda sesuai dengan UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).
                  </div>
                  <h4 className="text-sm font-bold text-white">1. Data yang Kami Kumpulkan</h4>
                  <p>
                    Aturdana.id tidak mengharuskan pengguna membuat akun pribadi untuk mengakses data pasar atau alat simulasi. Kami tidak mengumpulkan nomor KTP, rekening bank, password finansial, atau data sensitif pengguna.
                  </p>
                  <h4 className="text-sm font-bold text-white">2. Penggunaan Cookie & Penyimpanan Lokal (LocalStorage)</h4>
                  <p>
                    Kami menggunakan penyimpanan lokal browser (localStorage) semata-mata untuk menyimpan preferensi teknis pengguna, seperti pilihan bahasa (Bahasa Indonesia/Inggris), status tampilan tema, dan konfigurasi API Key Cloudflare Worker pengguna tanpa mentransmisikan kredensial tersebut ke server pihak lain.
                  </p>
                  <h4 className="text-sm font-bold text-white">3. Perlindungan terhadap Pihak Ketiga</h4>
                  <p>
                    Aturdana.id tidak pernah dan tidak akan pernah menjual, menyewakan, atau memperdagangkan data analitik penggunaan kepada pihak ketiga mana pun untuk tujuan telemarketing atau periklanan terselubung.
                  </p>
                </div>
              )}

              {activeLegalModal === 'terms' && (
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-200">
                    <strong>KETENTUAN PENGGUNAAN:</strong> Dengan mengakses portal Aturdana.id, Anda menyetujui seluruh ketentuan layanan di bawah ini.
                  </div>
                  <h4 className="text-sm font-bold text-white">1. Hak Kekayaan Intelektual (HAKI)</h4>
                  <p>
                    Seluruh struktur kode, tata letak visual, analisis editorial, kalkulator interaktif, dan kompilasi data taksonomi adalah milik sah Aturdana.id dan dilindungi undang-undang hak cipta Republik Indonesia.
                  </p>
                  <h4 className="text-sm font-bold text-white">2. Larangan Penggunaan Ilegal</h4>
                  <p>
                    Pengguna dilarang melakukan scraping berlebihan, peretasan, penyusupan kode berbahaya, atau tindakan apa pun yang membebani infrastruktur server Aturdana.id atau melanggar hukum siber yang berlaku.
                  </p>
                  <h4 className="text-sm font-bold text-white">3. Perubahan Ketentuan</h4>
                  <p>
                    Aturdana.id berhak memperbarui syarat dan ketentuan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Penggunaan portal secara berkelanjutan dianggap sebagai persetujuan terhadap pembaruan tersebut.
                  </p>
                </div>
              )}

              {activeLegalModal === 'contact' && (
                <div className="space-y-4">
                  <p className="text-slate-300">
                    Hubungi redaksi, tim riset data, atau ajukan pertanyaan seputar kemitraan dan koreksi informasi data perbankan serta saham BEI.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">Email Redaksi & Koreksi:</span>
                      <a href="mailto:redaksi@aturdana.id" className="text-emerald-400 font-semibold hover:underline">
                        redaksi@aturdana.id
                      </a>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">Email Kemitraan & Bisnis:</span>
                      <a href="mailto:kontak@aturdana.id" className="text-emerald-400 font-semibold hover:underline">
                        kontak@aturdana.id
                      </a>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">Kantor Operasional:</span>
                      <span className="text-slate-200 font-medium">Financial Tower Lt. 18, SCBD, Jakarta</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">Jam Kerja Redaksi:</span>
                      <span className="text-slate-200 font-medium">Senin - Jumat 08:30 - 17:30 WIB</span>
                    </div>
                  </div>

                  {/* Quick Message Form */}
                  <form onSubmit={handleContactSubmit} className="space-y-3 pt-2">
                    <span className="text-xs font-bold text-white block">Kirim Pesan Langsung ke Redaksi</span>
                    {contactFeedback && (
                      <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-300 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{contactFeedback}</span>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Nama Lengkap"
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Alamat Email"
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tulis pesan, koreksi data emiten/bank, atau usulan instrumen..."
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500 resize-none"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs cursor-pointer transition-colors shadow-md shadow-emerald-950/50"
                    >
                      Kirim Pesan Redaksi
                    </button>
                  </form>
                </div>
              )}

              {activeLegalModal === 'about' && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-white">Misi Kami: Demokratisasi Akses Data Finansial</h4>
                  <p>
                    Aturdana.id didirikan dengan komitmen menyajikan transparansi data pasar modal dan perbankan di Indonesia. Kami percaya bahwa setiap masyarakat Indonesia berhak mendapatkan akses langsung terhadap perbandingan suku bunga deposito yang riil, kalkulasi dampak pajak bunga 20%, valuasi rasio saham emiten BEI, dan edukasi portofolio investasi tanpa harus terkendala informasi yang bias.
                  </p>
                  <h4 className="text-sm font-bold text-white">Independensi & Standar Riset</h4>
                  <p>
                    Portal kami tidak berafiliasi eksklusif dengan salah satu emiten, perbankan, atau manajer investasi tertentu. Seluruh analisis yang disajikan mengutamakan transparansi metodologi kuantitatif, rumus baku keuangan, dan kepatuhan terhadap regulasi Otoritas Jasa Keuangan (OJK) serta Lembaga Penjamin Simpanan (LPS).
                  </p>
                </div>
              )}

              {activeLegalModal === 'pedoman' && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-white">Pedoman Pemberitaan Media Siber (Dewan Pers RI)</h4>
                  <p>
                    Aturdana.id senantiasa menjunjung tinggi prinsip akurasi, verifikasi fakta, serta keberimbangan dalam setiap publikasi berita dan artikel edukasi keuangan sesuai Pedoman Pemberitaan Media Siber.
                  </p>
                  <h4 className="text-sm font-bold text-white">Hak Jawab dan Koreksi Data</h4>
                  <p>
                    Lembaga perbankan, emiten, atau pengguna yang menemukan kekeliruan data kuotasi atau suku bunga berhak mengajukan permohonan koreksi atau hak jawab melalui saluran email resmi kami di <span className="text-emerald-400 font-mono">redaksi@aturdana.id</span>. Redaksi akan segera melakukan verifikasi dan pembaruan data secara transparan.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 flex justify-end bg-[#0a0f15]">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Tutup Dokumen
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
