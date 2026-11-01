import React, { useState } from 'react';
import { useFinance } from '../../context/FinancialContext';
import { CATEGORIES_DATA } from '../../data/categoriesData';
import { MOCK_STOCKS, MOCK_DEPOSITO_RATES, MACRO_INDICATORS, MOCK_BONDS } from '../../data/marketMockData';
import { DepositoCalculator } from '../tools/DepositoCalculator';
import { StockScreener } from '../tools/StockScreener';
import { RealtimeIhsgChart } from '../home/RealtimeIhsgChart';
import {
  TrendingUp,
  Landmark,
  ShieldCheck,
  PieChart,
  ArrowRight,
  Sparkles,
  HelpCircle,
  ChevronRight,
  BookOpen,
  CheckCircle,
  ExternalLink,
  Cpu,
  Layers
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const {
    navigateToCategory,
    navigateToSubcategory,
    navigateToItem,
    navigateToTool,
    setIsApiKeyModalOpen,
    t
  } = useFinance();

  const [activeTab, setActiveTab] = useState<'saham' | 'deposito' | 'reksadana' | 'obligasi'>('saham');

  // FAQ structured data for rich snippet
  const homeFaq = [
    {
      q: 'Apa perbedaan antara investasi Saham, Deposito bank, dan Obligasi SBN di Indonesia?',
      a: 'Saham memberikan kepemilikan modal di emiten BEI dengan potensi capital gain dan dividen berisiko tinggi. Deposito perbankan adalah simpanan berjangka berpendapatan tetap dengan bunga yang dijamin LPS (hingga 4.25% p.a.) dengan pajak 20%. Obligasi SBN (seperti ORI dan SR) adalah surat utang negara dengan kupon tetap bulanan yang dijamin undang-undang 100% dengan tarif pajak istimewa hanya 10%.'
    },
    {
      q: 'Berapa potongan pajak bunga deposito di bank Indonesia?',
      a: 'Berdasarkan Peraturan Pemerintah RI, penghasilan bunga deposito di atas saldo Rp 7.500.000 dikenakan Pajak Penghasilan (PPh) Final sebesar 20%. Simpanan deposito dengan saldo Rp 7.500.000 ke bawah dibebaskan dari pemotongan pajak (0%).'
    },
    {
      q: 'Bagaimana cara membaca pergerakan IHSG dan LQ45?',
      a: 'IHSG (Indeks Harga Saham Gabungan) mengukur rerata seluruh emiten tercatat di BEI. Sementara LQ45 merangkum 45 saham terlikuid dengan kapitalisasi pasar terbesar. Investor menganalisis arah tren melalui volume transaksi, foreign net buy/sell, dan valuasi rata-rata Price to Earnings Ratio (PER).'
    },
    {
      q: 'Bagaimana cara kerja sinkronisasi API Key Cloudflare Worker di Aturdana.id?',
      a: 'Aturdana.id terhubung langsung ke arsitektur Edge Cloudflare Worker. Setiap data pasar live disinkronkan dengan menyertakan API Key yang dapat Anda atur secara fleksibel di menu konfigurasi, memastikan feed pasar modal BEI dan suku bunga perbankan tersaji seketika tanpa perantara.'
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': homeFaq.map(item => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.a
      }
    }))
  };

  return (
    <div className="space-y-10 animate-fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Editorial Header Section with Core Keywords */}
      <section className="relative overflow-hidden rounded-3xl bg-linear-to-b from-[#0e1722] via-[#091017] to-[#070b0f] border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-4">
          {/* Unboxed Metadata Tagline according to frontend-design zero-pill discipline */}
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono tracking-wide">
            <span className="font-bold">PORTAL FINANSIAL INDONESIA</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>DATA TERVERIFIKASI BEI & BI</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">UPDATE 2026</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Pusat Analisis <span className="text-emerald-400">Saham</span>, <span className="text-emerald-400">IHSG</span>, <span className="text-cyan-400">Deposito</span>, & <span className="text-amber-400">Investasi</span> Finansial Terpadu
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            Eksplorasi mendalam seputar dunia finansial Indonesia. Dapatkan akses ke 4 kategori utama, 48 subkategori analitis, dan ratusan indikator pasar modal, komparasi suku bunga perbankan, kalkulator kupon obligasi & SBN, kalkulator pajak deposito, dan screener emiten terintegrasi.
          </p>

          {/* Core Keywords Breadth & SEO Kicker */}
          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="text-slate-500 font-medium">Fokus Utama:</span>
            <span className="text-slate-300 font-semibold hover:text-emerald-400 transition-colors">Saham BEI</span>
            <span>·</span>
            <span className="text-slate-300 font-semibold hover:text-emerald-400 transition-colors">IHSG Hari Ini</span>
            <span>·</span>
            <span className="text-slate-300 font-semibold hover:text-cyan-400 transition-colors">Suku Bunga Deposito</span>
            <span>·</span>
            <span className="text-slate-300 font-semibold hover:text-amber-400 transition-colors">Investasi Ritel SBN</span>
            <span>·</span>
            <span className="text-slate-300 font-semibold hover:text-emerald-400 transition-colors">Seputar Dunia Finansial</span>
          </div>

          {/* Quick Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigateToCategory('saham-ihsg')}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/60"
            >
              <span>Eksplorasi Saham & IHSG</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => navigateToCategory('deposito-tabungan')}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Bandingkan Bunga Deposito</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Pengaturan APIKEY disembunyikan dari tampilan mata pengunjung */}
            <button
              onClick={() => setIsApiKeyModalOpen(true)}
              style={{ display: 'none' }}
              className="px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-medium flex items-center gap-2 cursor-pointer"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Konfigurasi Worker Key</span>
            </button>
          </div>
        </div>
      </section>

      {/* Real-Time IHSG Chart with Live Stream & Special Code Activation */}
      <RealtimeIhsgChart />

      {/* 3 Main Categories Showcase Cards */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              Cuplikan 4 Kategori Finansial Utama
            </h2>
            <p className="text-xs text-slate-400">
              Pilih pilar instrumen untuk melihat subkategori dan data pasar terverifikasi.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigateToCategory(cat.id)}
              className="p-5 rounded-2xl bg-[#0c1218] border border-slate-800 hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col justify-between hover:shadow-xl hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-emerald-500/30 transition-colors">
                    {cat.iconName === 'TrendingUp' && <TrendingUp className="w-5 h-5 text-emerald-400" />}
                    {cat.iconName === 'PieChart' && <PieChart className="w-5 h-5 text-cyan-400" />}
                    {cat.iconName === 'Landmark' && <Landmark className="w-5 h-5 text-amber-400" />}
                    {cat.iconName === 'ShieldCheck' && <ShieldCheck className="w-5 h-5 text-blue-400" />}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 group-hover:text-emerald-400">
                    {cat.subcategories.length} Subkategori
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-1.5">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-emerald-400 font-medium">
                <span>Eksplorasi Lengkap</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Category Snippets Tabs */}
      <section className="bg-[#0b1015] border border-slate-800 rounded-3xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">
              Data Pasar Terkini Berdasarkan Kategori
            </h2>
            <p className="text-xs text-slate-400">
              Ringkasan harga saham BEI, suku bunga deposito bank, dan reksa dana pilihan.
            </p>
          </div>

          {/* Segmented Control Buttons */}
          <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs font-medium">
            <button
              onClick={() => setActiveTab('saham')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'saham' ? 'bg-emerald-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Saham & IHSG
            </button>
            <button
              onClick={() => setActiveTab('deposito')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'deposito' ? 'bg-emerald-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Deposito Bank
            </button>
            <button
              onClick={() => setActiveTab('reksadana')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'reksadana' ? 'bg-emerald-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Reksa Dana
            </button>
            <button
              onClick={() => setActiveTab('obligasi')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'obligasi' ? 'bg-emerald-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Obligasi & SBN
            </button>
          </div>
        </div>

        {/* Tab 1: Saham & IHSG Snippets */}
        {activeTab === 'saham' && (
          <div className="space-y-4 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {MOCK_STOCKS.slice(0, 3).map((stk) => (
                <div
                  key={stk.ticker}
                  onClick={() => navigateToItem('saham-ihsg', 'harga-dan-grafik-saham', 'harga-saham-terbaru')}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-emerald-500/40 cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono font-bold text-white text-base">{stk.ticker}</span>
                    <span className="text-xs font-mono font-semibold text-emerald-400">
                      +{stk.changePercent}%
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 block truncate mb-3">{stk.name}</span>
                  <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-slate-800/60">
                    <span className="text-slate-400">Harga:</span>
                    <span className="text-white font-bold">Rp {stk.price.toLocaleString('id-ID')}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => navigateToCategory('saham-ihsg')}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 cursor-pointer"
              >
                Lihat Semua 10 Subkategori Saham & IHSG <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Deposito Snippets */}
        {activeTab === 'deposito' && (
          <div className="space-y-4 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {MOCK_DEPOSITO_RATES.slice(0, 3).map((dep) => (
                <div
                  key={dep.bankName}
                  onClick={() => navigateToItem('deposito-tabungan', 'suku-bunga-deposito', 'suku-bunga-deposito-terbaru')}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-emerald-500/40 cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white text-xs">{dep.bankName}</span>
                    <span className="text-[10px] text-cyan-400 font-mono font-semibold bg-cyan-950/60 px-1.5 py-0.5 rounded">
                      {dep.bankType}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 block truncate mb-3">{dep.productName}</span>
                  <div className="space-y-1 text-xs font-mono pt-2 border-t border-slate-800/60">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Bunga 12 Bulan:</span>
                      <span className="text-emerald-400 font-bold">{dep.rate12M.toFixed(2)}% p.a.</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => navigateToCategory('deposito-tabungan')}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 cursor-pointer"
              >
                Lihat Ranking Bunga Seluruh Bank <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Reksa Dana Snippets */}
        {activeTab === 'reksadana' && (
          <div className="space-y-4 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Sucorinvest Equity Fund', 'Mandiri Pasar Uang', 'Batavia Dana Saham'].map((name, i) => (
                <div
                  key={name}
                  onClick={() => navigateToCategory('reksa-dana-etf')}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-emerald-500/40 cursor-pointer transition-colors"
                >
                  <span className="font-bold text-white text-xs block mb-1">{name}</span>
                  <span className="text-[11px] text-slate-400 block mb-3">Reksa Dana Pilihan</span>
                  <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-slate-800/60">
                    <span className="text-slate-400">Return 1 Thn:</span>
                    <span className="text-emerald-400 font-bold">+{14.8 - i * 3.2}%</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => navigateToCategory('reksa-dana-etf')}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 cursor-pointer"
              >
                Lihat 12 Subkategori Reksa Dana & ETF <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Obligasi & SBN Snippets */}
        {activeTab === 'obligasi' && (
          <div className="space-y-4 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {MOCK_BONDS.slice(0, 3).map((bnd) => (
                <div
                  key={bnd.code}
                  onClick={() => navigateToCategory('obligasi-pendapatan-tetap')}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-emerald-500/40 cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white text-xs">{bnd.code}</span>
                    <span className="text-[10px] text-emerald-400 font-mono font-semibold bg-emerald-950/60 px-1.5 py-0.5 rounded">
                      {bnd.type}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 block truncate mb-3">{bnd.name}</span>
                  <div className="space-y-1 text-xs font-mono pt-2 border-t border-slate-800/60">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Kupon ({bnd.couponType}):</span>
                      <span className="text-emerald-400 font-bold">{bnd.couponRate.toFixed(2)}% p.a.</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => navigateToCategory('obligasi-pendapatan-tetap')}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 cursor-pointer"
              >
                Lihat Semua 14 Subkategori Obligasi & SBN <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Embedded Live Tool 1: Deposito Calculator */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <Landmark className="w-4 h-4 text-emerald-400" />
            Simulasi Mandiri: Kalkulator Deposito & Pajak
          </h2>
          <span className="text-xs text-slate-400">Regulasi PPh 20%</span>
        </div>
        <DepositoCalculator />
      </section>

      {/* Embedded Live Tool 2: Stock Screener */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            Screener Saham & Indeks BEI
          </h2>
          <span className="text-xs text-slate-400">Data Terupdate</span>
        </div>
        <StockScreener />
      </section>

      {/* Rich Educational Articles Loved by Google Search Engine */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            Wawasan Analisis Finansial & Edukasi Investasi
          </h2>
          <p className="text-xs text-slate-400">
            Artikel riset mendalam untuk membantu keputusan investasi cerdas dan berimbang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <article className="p-5 rounded-2xl bg-[#0c1219] border border-slate-800 space-y-3">
            <span className="text-[11px] font-mono text-emerald-400 font-semibold block">
              Saham & Valuasi
            </span>
            <h3 className="text-sm font-bold text-white leading-snug">
              Memahami Price to Earnings Ratio (PER) dan Price to Book Value (PBV) pada Saham BEI
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Panduan membaca saham bervaluasi murah (undervalued) vs mahal (overvalued). Mengapa sektor perbankan memiliki rata-rata PBV lebih tinggi dibandingkan sektor komoditas batubara.
            </p>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-800/60">
              Topik: Saham · IHSG · Fundamental Emiten
            </div>
          </article>

          <article className="p-5 rounded-2xl bg-[#0c1219] border border-slate-800 space-y-3">
            <span className="text-[11px] font-mono text-cyan-400 font-semibold block">
              Perbankan & Deposito
            </span>
            <h3 className="text-sm font-bold text-white leading-snug">
              Batas Penjaminan LPS vs Bunga Bank Digital: Memilih Simpanan Aman dan Menguntungkan
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Analisis perbandingan risiko menempatkan dana pada bank konvensional dengan bunga LPS 4.25% versus neobank dengan bunga hingga 8.75% per tahun.
            </p>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-800/60">
              Topik: Deposito · LPS · Bank Digital
            </div>
          </article>

          <article className="p-5 rounded-2xl bg-[#0c1219] border border-slate-800 space-y-3">
            <span className="text-[11px] font-mono text-cyan-400 font-semibold block">
              Reksa Dana & ETF
            </span>
            <h3 className="text-sm font-bold text-white leading-snug">
              Strategi Dollar Cost Averaging (DCA) Reksa Dana Indeks vs Reksa Dana Pasar Uang
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Panduan membangun diversifikasi portofolio investasi otomatis melalui Reksa Dana Pasar Uang berlikuiditas tinggi dan Reksa Dana Indeks IDX30 jangka panjang.
            </p>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-800/60">
              Topik: Reksa Dana · ETF · Portofolio Investasi
            </div>
          </article>
        </div>
      </section>

      {/* Rich FAQ Section for Search Engine Schema & User Trust */}
      <section className="p-6 md:p-8 rounded-3xl bg-[#0c1219] border border-slate-800 space-y-6">
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-400" />
            Pertanyaan Umum (FAQ) Seputar Dunia Finansial
          </h2>
          <p className="text-xs text-slate-400">
            Jawaban terverifikasi mengenai Saham, IHSG, Deposito perbankan, dan instrumen investasi resmi di Indonesia.
          </p>
        </div>

        <div className="space-y-4">
          {homeFaq.map((faq, index) => (
            <div key={index} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5">
              <h3 className="text-xs sm:text-sm font-bold text-slate-100 flex items-start gap-2">
                <span className="text-emerald-400 font-mono">Q{index + 1}:</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
