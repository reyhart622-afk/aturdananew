import React, { useState } from 'react';
import { useFinance } from '../../context/FinancialContext';
import {
  AlertTriangle,
  Lock,
  FileText,
  Mail,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const LEGAL_TITLES: Record<string, string> = {
  disclaimer: 'Disclaimer & Batasan Tanggung Jawab Finansial',
  privacy: 'Kebijakan Privasi (Privacy Policy)',
  terms: 'Syarat & Ketentuan Layanan (Terms of Service)',
  contact: 'Kontak Redaksi & Layanan Pengaduan',
  about: 'Tentang Aturdana.id',
  pedoman: 'Pedoman Pemberitaan Media Siber',
};

const LEGAL_ICONS: Record<string, React.ReactNode> = {
  disclaimer: <AlertTriangle className="w-5 h-5 text-amber-400" />,
  privacy: <Lock className="w-5 h-5 text-emerald-400" />,
  terms: <FileText className="w-5 h-5 text-cyan-400" />,
  contact: <Mail className="w-5 h-5 text-emerald-400" />,
  about: <Building2 className="w-5 h-5 text-blue-400" />,
  pedoman: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
};

export const LegalView: React.FC = () => {
  const { legalPage, navigateToHome, navigateToLegal } = useFinance();
  const [contactFeedback, setContactFeedback] = useState<string | null>(null);

  if (!legalPage) return null;

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactFeedback('Pesan Anda berhasil dikirim ke tim redaksi Aturdana.id. Kami akan merespons dalam 1x24 jam kerja.');
    setTimeout(() => setContactFeedback(null), 6000);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <section className="p-6 md:p-8 rounded-3xl bg-linear-to-b from-[#0e1722] to-[#091016] border border-slate-800 space-y-4">
        <div className="flex items-center gap-2.5">
          {LEGAL_ICONS[legalPage]}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {LEGAL_TITLES[legalPage]}
          </h1>
        </div>
        <button
          onClick={navigateToHome}
          className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          <span>Kembali ke Beranda</span>
        </button>
      </section>

      <section className="p-6 md:p-8 rounded-3xl bg-[#0b1015] border border-slate-800 space-y-4 text-sm text-slate-300 leading-relaxed">
        {legalPage === 'disclaimer' && (
          <div className="space-y-4">
            <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-200">
              <strong>PENTING:</strong> Segala informasi dan alat kalkulasi di Aturdana.id ditujukan secara eksklusif untuk kepentingan edukasi dan riset informasi umum.
            </div>
            <h4 className="text-base font-bold text-white">1. Bukan Merupakan Saran Investasi Personal</h4>
            <p>Konten yang dimuat di Aturdana.id tidak boleh dianggap sebagai rekomendasi, tawaran, ajakan, atau nasihat investasi perorangan untuk membeli atau menjual instrumen keuangan apa pun, termasuk saham emiten BEI, penempatan deposito bank, maupun produk reksa dana.</p>
            <h4 className="text-base font-bold text-white">2. Akurasi & Keterlambatan Data Pasar (Delay)</h4>
            <p>Meskipun Aturdana.id berupaya menyajikan data pasar saham, valuasi emiten, dan suku bunga deposito perbankan seakurat mungkin, data dapat mengalami keterlambatan (market feed delay) dari bursa atau lembaga sumber. Aturdana.id tidak bertanggung jawab atas kerugian finansial yang timbul akibat keterlambatan, ketidakakuratan, atau kelalaian data pihak ketiga.</p>
            <h4 className="text-base font-bold text-white">3. Tanggung Jawab Pengguna (Do Your Own Research)</h4>
            <p>Keputusan menempatkan dana atau bertransaksi efek berada sepenuhnya dalam diskresi dan tanggung jawab masing-masing investor. Pengguna disarankan untuk berkonsultasi dengan penasihat keuangan independen yang berizin sebelum mengambil keputusan finansial bernilai material.</p>
          </div>
        )}

        {legalPage === 'privacy' && (
          <div className="space-y-4">
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
              <strong>KOMITMEN PRIVASI:</strong> Kami menghormati privasi Anda sesuai dengan UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).
            </div>
            <h4 className="text-base font-bold text-white">1. Data yang Kami Kumpulkan</h4>
            <p>Aturdana.id tidak mengharuskan pengguna membuat akun pribadi untuk mengakses data pasar atau alat simulasi. Kami tidak mengumpulkan nomor KTP, rekening bank, password finansial, atau data sensitif pengguna.</p>
            <h4 className="text-base font-bold text-white">2. Penggunaan Cookie & Penyimpanan Lokal (LocalStorage)</h4>
            <p>Kami menggunakan penyimpanan lokal browser (localStorage) semata-mata untuk menyimpan preferensi teknis pengguna, seperti pilihan bahasa (Bahasa Indonesia/Inggris), status tampilan tema, dan konfigurasi API Key Cloudflare Worker pengguna tanpa mentransmisikan kredensial tersebut ke server pihak lain.</p>
            <h4 className="text-base font-bold text-white">3. Perlindungan terhadap Pihak Ketiga</h4>
            <p>Aturdana.id tidak pernah dan tidak akan pernah menjual, menyewakan, atau memperdagangkan data analitik penggunaan kepada pihak ketiga mana pun untuk tujuan telemarketing atau periklanan terselubung.</p>
          </div>
        )}

        {legalPage === 'terms' && (
          <div className="space-y-4">
            <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-200">
              <strong>KETENTUAN PENGGUNAAN:</strong> Dengan mengakses portal Aturdana.id, Anda menyetujui seluruh ketentuan layanan di bawah ini.
            </div>
            <h4 className="text-base font-bold text-white">1. Hak Kekayaan Intelektual (HAKI)</h4>
            <p>Seluruh struktur kode, tata letak visual, analisis editorial, kalkulator interaktif, dan kompilasi data taksonomi adalah milik sah Aturdana.id dan dilindungi undang-undang hak cipta Republik Indonesia.</p>
            <h4 className="text-base font-bold text-white">2. Larangan Penggunaan Ilegal</h4>
            <p>Pengguna dilarang melakukan scraping berlebihan, peretasan, penyusupan kode berbahaya, atau tindakan apa pun yang membebani infrastruktur server Aturdana.id atau melanggar hukum siber yang berlaku.</p>
            <h4 className="text-base font-bold text-white">3. Perubahan Ketentuan</h4>
            <p>Aturdana.id berhak memperbarui syarat dan ketentuan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Penggunaan portal secara berkelanjutan dianggap sebagai persetujuan terhadap pembaruan tersebut.</p>
          </div>
        )}

        {legalPage === 'contact' && (
          <div className="space-y-4">
            <p>Hubungi redaksi, tim riset data, atau ajukan pertanyaan seputar kemitraan dan koreksi informasi data perbankan serta saham BEI.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">Email Redaksi & Koreksi:</span>
                <a href="mailto:redaksi@aturdana.id" className="text-emerald-400 font-semibold hover:underline">redaksi@aturdana.id</a>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">Email Kemitraan & Bisnis:</span>
                <a href="mailto:kontak@aturdana.id" className="text-emerald-400 font-semibold hover:underline">kontak@aturdana.id</a>
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
            <form onSubmit={handleContactSubmit} className="space-y-3 pt-2">
              <span className="text-sm font-bold text-white block">Kirim Pesan Langsung ke Redaksi</span>
              {contactFeedback && (
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{contactFeedback}</span>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="text" required placeholder="Nama Lengkap" className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500" />
                <input type="email" required placeholder="Alamat Email" className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500" />
              </div>
              <textarea required rows={3} placeholder="Tulis pesan, koreksi data emiten/bank, atau usulan instrumen..." className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500 resize-none" />
              <button type="submit" className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs cursor-pointer transition-colors shadow-md shadow-emerald-950/50">Kirim Pesan Redaksi</button>
            </form>
          </div>
        )}

        {legalPage === 'about' && (
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white">Misi Kami: Demokratisasi Akses Data Finansial</h4>
            <p>Aturdana.id didirikan dengan komitmen menyajikan transparansi data pasar modal dan perbankan di Indonesia. Kami percaya bahwa setiap masyarakat Indonesia berhak mendapatkan akses langsung terhadap perbandingan suku bunga deposito yang riil, kalkulasi dampak pajak bunga 20%, valuasi rasio saham emiten BEI, dan edukasi portofolio investasi tanpa harus terkendala informasi yang bias.</p>
            <h4 className="text-base font-bold text-white">Independensi & Standar Riset</h4>
            <p>Portal kami tidak berafiliasi eksklusif dengan salah satu emiten, perbankan, atau manajer investasi tertentu. Seluruh analisis yang disajikan mengutamakan transparansi metodologi kuantitatif, rumus baku keuangan, dan kepatuhan terhadap regulasi Otoritas Jasa Keuangan (OJK) serta Lembaga Penjamin Simpanan (LPS).</p>
          </div>
        )}

        {legalPage === 'pedoman' && (
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white">Pedoman Pemberitaan Media Siber (Dewan Pers RI)</h4>
            <p>Aturdana.id senantiasa menjunjung tinggi prinsip akurasi, verifikasi fakta, serta keberimbangan dalam setiap publikasi berita dan artikel edukasi keuangan sesuai Pedoman Pemberitaan Media Siber.</p>
            <h4 className="text-base font-bold text-white">Hak Jawab dan Koreksi Data</h4>
            <p>Lembaga perbankan, emiten, atau pengguna yang menemukan kekeliruan data kuotasi atau suku bunga berhak mengajukan permohonan koreksi atau hak jawab melalui saluran email resmi kami di <span className="text-emerald-400 font-mono">redaksi@aturdana.id</span>. Redaksi akan segera melakukan verifikasi dan pembaruan data secara transparan.</p>
          </div>
        )}
      </section>

      <section className="flex flex-wrap gap-2 text-xs">
        {Object.entries(LEGAL_TITLES).map(([key, title]) => (
          <button
            key={key}
            onClick={() => navigateToLegal(key)}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              legalPage === key
                ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/40'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {title}
          </button>
        ))}
      </section>
    </div>
  );
};
