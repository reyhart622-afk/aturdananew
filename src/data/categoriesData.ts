import { MainCategory } from '../types/finance';

export const CATEGORIES_DATA: MainCategory[] = [
  {
    id: 'saham-ihsg',
    name: 'Saham & IHSG',
    slug: 'saham-ihsg',
    tagline: 'Analisis Real-Time Pasar Modal BEI, Valuasi Emiten, Indeks & Data Transaksi',
    description: 'Pusat data pasar modal Indonesia terlengkap meliputi harga saham real-time, konstituen indeks IHSG & LQ45, fundamental emiten, indikator teknikal komprehensif, dan foreign flow.',
    iconName: 'TrendingUp',
    keywords: [
      'Saham',
      'IHSG',
      'Bursa Efek Indonesia',
      'Harga saham terbaru',
      'LQ45',
      'IDX30',
      'Grafik saham BEI',
      'Foreign flow IHSG',
      'PER PBV saham',
      'Dividen emiten'
    ],
    subcategories: [
      {
        id: 'harga-dan-grafik-saham',
        number: 1,
        name: 'Harga dan grafik saham',
        slug: 'harga-dan-grafik-saham',
        description: 'Informasi komprehensif mengenai kuotasi harga saham terbaru BEI, pergerakan intraday, grafik candlestick, dan data OHLC historis.',
        keywords: ['Harga saham terbaru', 'Harga pembukaan', 'Grafik intraday BEI', 'Data OHLC saham', 'Volume perdagangan saham'],
        items: [
          { id: 'harga-saham-terbaru', name: 'Harga saham terbaru', slug: 'harga-saham-terbaru', description: 'Kuotasi live harga saham emiten Bursa Efek Indonesia diperbarui setiap detik.', keywords: ['harga saham terbaru', 'realtime stock quote', 'live IDX'], requiresApiKey: true },
          { id: 'harga-pembukaan', name: 'Harga pembukaan', slug: 'harga-pembukaan', description: 'Harga transaksi pertama saat sesi pra-pembukaan atau pembukaan reguler pukul 09:00 WIB.', keywords: ['harga pembukaan saham', 'opening price BEI'] },
          { id: 'harga-tertinggi', name: 'Harga tertinggi', slug: 'harga-tertinggi', description: 'Titik harga tertinggi yang berhasil dicapai selama jam perdagangan hari ini.', keywords: ['high price saham', 'harga tertinggi harian'] },
          { id: 'harga-terendah', name: 'Harga terendah', slug: 'harga-terendah', description: 'Titik harga terendah yang disentuh saham selama sesi perdagangan berlangsung.', keywords: ['low price saham', 'harga terendah hari ini'] },
          { id: 'harga-penutupan', name: 'Harga penutupan', slug: 'harga-penutupan', description: 'Harga kesepakatan akhir saat pre-closing pukul 15:50-16:00 WIB.', keywords: ['closing price BEI', 'harga penutupan saham'] },
          { id: 'perubahan-harga', name: 'Perubahan harga', slug: 'perubahan-harga', description: 'Selisih poin nilai nominal antara harga saat ini dengan harga penutupan hari sebelumnya.', keywords: ['perubahan harga saham', 'stock price change IDR'] },
          { id: 'persentase-perubahan-harga', name: 'Persentase perubahan harga', slug: 'persentase-perubahan-harga', description: 'Kenaikan atau penurunan persentase harga relatif terhadap harga penutupan kemarin.', keywords: ['persentase perubahan harga saham', 'percentage change'] },
          { id: 'harga-saham-historis', name: 'Harga saham historis', slug: 'harga-saham-historis', description: 'Arsip riwayat harga saham harian, mingguan, bulanan hingga 10 tahun ke belakang.', keywords: ['harga saham historis BEI', 'historical stock data'] },
          { id: 'grafik-harga-harian', name: 'Grafik harga harian', slug: 'grafik-harga-harian', description: 'Visualisasi grafik pergerakan harga saham berbasis timeframe harian (1D).', keywords: ['grafik harian saham', 'daily chart IDX'] },
          { id: 'grafik-harga-mingguan', name: 'Grafik harga mingguan', slug: 'grafik-harga-mingguan', description: 'Grafik analisis teknikal mingguan untuk melihat tren jangka menengah.', keywords: ['grafik mingguan saham', 'weekly chart BEI'] },
          { id: 'grafik-harga-bulanan', name: 'Grafik harga bulanan', slug: 'grafik-harga-bulanan', description: 'Grafik pergerakan tren harga saham jangka panjang untuk investor institusi.', keywords: ['grafik bulanan saham', 'monthly trend chart'] },
          { id: 'grafik-intraday', name: 'Grafik intraday', slug: 'grafik-intraday', description: 'Grafik pergerakan tick-by-tick real-time dari pembukaan hingga penutupan bursa.', keywords: ['grafik intraday saham', 'intraday chart BEI'], requiresApiKey: true },
          { id: 'data-ohlc', name: 'Data OHLC', slug: 'data-ohlc', description: 'Representasi komprehensif Open, High, Low, Close untuk pembentukan candle.', keywords: ['data OHLC saham', 'candlestick open high low close'] },
          { id: 'volume-perdagangan', name: 'Volume perdagangan', slug: 'volume-perdagangan', description: 'Jumlah total lembar saham yang ditransaksikan oleh pelaku pasar.', keywords: ['volume perdagangan saham', 'trading volume lot'] },
          { id: 'nilai-transaksi', name: 'Nilai transaksi', slug: 'nilai-transaksi', description: 'Total perputaran uang (omzet) dalam satuan Rupiah pada perdagangan saham.', keywords: ['nilai transaksi saham', 'turnover BEI rupiah'] },
          { id: 'frekuensi-transaksi', name: 'Frekuensi transaksi', slug: 'frekuensi-transaksi', description: 'Total jumlah kesepakatan transaksi (matched orders) yang terjadi di bursa.', keywords: ['frekuensi transaksi saham', 'trade frequency'] }
        ]
      },
      {
        id: 'indeks-saham',
        number: 2,
        name: 'Indeks saham',
        slug: 'indeks-saham',
        description: 'Indikator statistik pergerakan pasar saham gabungan Indonesia dan indeks tematik pilihan.',
        keywords: ['IHSG', 'Indeks LQ45', 'IDX30', 'IDX High Dividend 20', 'Indeks Saham Syariah ISSI'],
        items: [
          { id: 'ihsg', name: 'IHSG', slug: 'ihsg', description: 'Indeks Harga Saham Gabungan (Composite Index) mengukur kinerja seluruh saham tercatat di BEI.', keywords: ['IHSG hari ini', 'indeks harga saham gabungan', 'prediksi IHSG', 'composite index IDX'], requiresApiKey: true },
          { id: 'lq45', name: 'LQ45', slug: 'lq45', description: 'Indeks 45 saham dengan likuiditas tertinggi dan kapitalisasi pasar terbesar di Indonesia.', keywords: ['indeks LQ45', 'saham blue chip LQ45'] },
          { id: 'idx30', name: 'IDX30', slug: 'idx30', description: 'Indeks 30 saham terlikuid dari konstituen LQ45 dengan fundamental prima.', keywords: ['indeks IDX30', 'konstituen IDX30'] },
          { id: 'idx80', name: 'IDX80', slug: 'idx80', description: 'Indeks yang mengukur performa 80 saham dengan likuiditas dan nilai kapitalisasi tinggi.', keywords: ['indeks IDX80 BEI'] },
          { id: 'idx-value30', name: 'IDX Value30', slug: 'idx-value30', description: 'Indeks saham dengan valuasi harga relatif murah berbasis rasio PER dan PBV.', keywords: ['IDX Value30', 'saham undervalued'] },
          { id: 'idx-growth30', name: 'IDX Growth30', slug: 'idx-growth30', description: 'Indeks 30 saham dengan pertumbuhan laba bersih dan pendapatan tertinggi.', keywords: ['IDX Growth30', 'saham growth BEI'] },
          { id: 'idx-high-dividend-20', name: 'IDX High Dividend 20', slug: 'idx-high-dividend-20', description: 'Indeks 20 saham yang konsisten membagikan dividen tunai ber-yield tinggi selama 3 tahun terakhir.', keywords: ['IDX High Dividend 20', 'saham dividen jumbo'] },
          { id: 'idx-quality30', name: 'IDX Quality30', slug: 'idx-quality30', description: 'Indeks 30 saham dengan profitabilitas tinggi, leverage rendah, dan stabilitas laba kuat.', keywords: ['IDX Quality30', 'saham fundamental kuat'] },
          { id: 'idx-esg-leaders', name: 'IDX ESG Leaders', slug: 'idx-esg-leaders', description: 'Indeks saham emiten yang memimpin dalam kepatuhan Environmental, Social, and Governance.', keywords: ['IDX ESG Leaders', 'investasi hijau BEI'] },
          { id: 'idx-sectoral', name: 'IDX Sectoral', slug: 'idx-sectoral', description: 'Kumpulan indeks sektor industri di BEI mencakup Finansial, Energi, Infrastruktur, dll.', keywords: ['IDX Sectoral', 'indeks sektoral BEI'] },
          { id: 'indeks-saham-syariah', name: 'Indeks saham syariah', slug: 'indeks-saham-syariah', description: 'Indeks Saham Syariah Indonesia (ISSI) dan Jakarta Islamic Index (JII) yang lolos kriteria DSN-MUI.', keywords: ['indeks saham syariah', 'ISSI', 'JII syariah'] },
          { id: 'indeks-saham-sektoral', name: 'Indeks saham sektoral', slug: 'indeks-saham-sektoral', description: 'Daftar indeks performa berdasarkan 11 sektor klasifikasi IDX-IC.', keywords: ['sektoral saham BEI', 'rotasi sektor IHSG'] },
          { id: 'grafik-indeks', name: 'Grafik indeks', slug: 'grafik-indeks', description: 'Visualisasi interaktif riwayat performa indeks acuan IHSG dan sektoral.', keywords: ['grafik indeks IHSG', 'chart indeks BEI'] },
          { id: 'riwayat-nilai-indeks', name: 'Riwayat nilai indeks', slug: 'riwayat-nilai-indeks', description: 'Tabel data historis nilai penutupan, level tertinggi, dan terendah indeks.', keywords: ['riwayat nilai IHSG', 'historis indeks bursa'] },
          { id: 'daftar-konstituen-indeks', name: 'Daftar konstituen indeks', slug: 'daftar-konstituen-indeks', description: 'Daftar emiten anggota yang terdaftar resmi di masing-masing indeks bursa.', keywords: ['konstituen IHSG', 'anggota LQ45'] }
        ]
      },
      {
        id: 'daftar-dan-ranking-saham',
        number: 3,
        name: 'Daftar dan ranking saham',
        slug: 'daftar-dan-ranking-saham',
        description: 'Peringkat saham BEI paling menguntungkan, teraktif, dan berkapitalisasi terbesar.',
        keywords: ['Top gainers BEI', 'Top losers saham', 'Daftar saham BEI', 'Saham paling aktif', 'Saham syariah'],
        items: [
          { id: 'daftar-seluruh-saham-bei', name: 'Daftar seluruh saham BEI', slug: 'daftar-seluruh-saham-bei', description: 'Katalog lengkap lebih dari 900 emiten yang tercatat di Bursa Efek Indonesia.', keywords: ['daftar saham BEI lengkap', 'list emiten IDX'], requiresApiKey: true },
          { id: 'daftar-saham-berdasarkan-sektor', name: 'Daftar saham berdasarkan sektor', slug: 'daftar-saham-berdasarkan-sektor', description: 'Pengelompokan emiten ke dalam sektor Finansial, Basic Materials, Energy, Healthcare, dll.', keywords: ['saham sektor perbankan', 'saham sektor energi'] },
          { id: 'daftar-saham-berdasarkan-industri', name: 'Daftar saham berdasarkan industri', slug: 'daftar-saham-berdasarkan-industri', description: 'Klasifikasi emiten berdasarkan lini industri spesifik menurut standar IDX-IC.', keywords: ['klasifikasi industri saham BEI'] },
          { id: 'daftar-saham-berdasarkan-papan-pencatatan', name: 'Daftar saham berdasarkan papan pencatatan', slug: 'daftar-saham-berdasarkan-papan-pencatatan', description: 'Pemilahan emiten pada Papan Utama, Papan Pengembangan, Papan Akselerasi, dan Papan Pemantauan Khusus.', keywords: ['papan utama BEI', 'papan pengembangan'] },
          { id: 'saham-paling-aktif', name: 'Saham paling aktif', slug: 'saham-paling-aktif', description: 'Saham dengan likuiditas perputaran transaksi harian paling tinggi di pasar reguler.', keywords: ['saham paling aktif BEI', 'most active stocks'] },
          { id: 'top-gainers', name: 'Top gainers', slug: 'top-gainers', description: 'Peringkat saham dengan kenaikan harga tertinggi hari ini di bursa.', keywords: ['top gainers BEI hari ini', 'saham naik tertinggi'] },
          { id: 'top-losers', name: 'Top losers', slug: 'top-losers', description: 'Peringkat saham dengan penurunan harga terdalam sesi hari ini.', keywords: ['top losers BEI', 'saham turun terbanyak'] },
          { id: 'saham-dengan-volume-terbesar', name: 'Saham dengan volume terbesar', slug: 'saham-dengan-volume-terbesar', description: 'Emiten dengan jumlah lot saham yang berpindah tangan terbanyak.', keywords: ['saham volume terbanyak', 'highest trading volume'] },
          { id: 'saham-dengan-nilai-transaksi-terbesar', name: 'Saham dengan nilai transaksi terbesar', slug: 'saham-dengan-nilai-transaksi-terbesar', description: 'Emiten dengan nilai rupiah transaksi terbesar (Big Turnover).', keywords: ['turnover saham terbesar', 'nilai transaksi tertinggi'] },
          { id: 'saham-dengan-frekuensi-transaksi-tertinggi', name: 'Saham dengan frekuensi transaksi tertinggi', slug: 'saham-dengan-frekuensi-transaksi-tertinggi', description: 'Saham dengan jumlah klik deal transaksi paling ramai.', keywords: ['frekuensi tertinggi BEI'] },
          { id: 'saham-paling-banyak-dibeli-asing', name: 'Saham paling banyak dibeli asing', slug: 'saham-paling-banyak-dibeli-asing', description: 'Emiten dengan net foreign buy tertinggi (arus modal asing masuk).', keywords: ['foreign buy saham', 'akumulasi investor asing'] },
          { id: 'saham-paling-banyak-dijual-asing', name: 'Saham paling banyak dijual asing', slug: 'saham-paling-banyak-dijual-asing', description: 'Emiten dengan tekanan jual bersih terbesar oleh investor asing.', keywords: ['foreign sell saham', 'distribusi asing BEI'] },
          { id: 'daftar-saham-ipo', name: 'Daftar saham IPO', slug: 'daftar-saham-ipo', description: 'Katalog emiten yang baru melantai atau sedang dalam periode penawaran umum perdana.', keywords: ['saham IPO terbaru', 'e-IPO BEI'] },
          { id: 'daftar-saham-syariah', name: 'Daftar saham syariah', slug: 'daftar-saham-syariah', description: 'Daftar Efek Syariah (DES) yang dirilis oleh Otoritas Jasa Keuangan (OJK).', keywords: ['daftar efek syariah', 'saham syariah OJK'] }
        ]
      },
      {
        id: 'fundamental-dan-valuasi',
        number: 4,
        name: 'Fundamental dan valuasi',
        slug: 'fundamental-dan-valuasi',
        description: 'Metrik kesehatan keuangan emiten: rasio laba, valuasi PER/PBV, neraca, dan arus kas.',
        keywords: ['PER PBV saham', 'EPS emiten', 'ROE ROA', 'Dividend yield saham', 'Laporan keuangan BEI'],
        items: [
          { id: 'eps', name: 'EPS', slug: 'eps', description: 'Earnings Per Share: Laba bersih dibagi dengan jumlah lembar saham beredar.', keywords: ['laba per saham EPS', 'earnings per share BEI'] },
          { id: 'per', name: 'PER', slug: 'per', description: 'Price to Earnings Ratio: Valuasi harga saham dibandingkan keuntungan per lembar.', keywords: ['rasio PER saham', 'price earning ratio'], requiresApiKey: true },
          { id: 'pbv', name: 'PBV', slug: 'pbv', description: 'Price to Book Value: Perbandingan harga pasar saham terhadap nilai buku ekuitasnya.', keywords: ['rasio PBV saham', 'price to book value'] },
          { id: 'roe', name: 'ROE', slug: 'roe', description: 'Return on Equity: Efektivitas perusahaan mencetak laba bersih dari modal investor.', keywords: ['ROE saham', 'return on equity emiten'] },
          { id: 'roa', name: 'ROA', slug: 'roa', description: 'Return on Assets: Efisiensi emiten dalam mengelola aset untuk menghasilkan laba.', keywords: ['ROA saham', 'return on asset'] },
          { id: 'der', name: 'DER', slug: 'der', description: 'Debt to Equity Ratio: Rasio utang berbunga dibandingkan total modal sendiri.', keywords: ['DER saham', 'debt to equity ratio'] },
          { id: 'npm', name: 'NPM', slug: 'npm', description: 'Net Profit Margin: Persentase sisa laba bersih dari total pendapatan penjualan.', keywords: ['NPM saham', 'net profit margin emiten'] },
          { id: 'gpm', name: 'GPM', slug: 'gpm', description: 'Gross Profit Margin: Margin laba kotor sebelum dipotong beban operasional.', keywords: ['GPM saham', 'margin laba kotor'] },
          { id: 'operating-margin', name: 'Operating margin', slug: 'operating-margin', description: 'Tingkat keuntungan dari operasional inti bisnis perusahaan.', keywords: ['operating margin emiten'] },
          { id: 'dividend-yield', name: 'Dividend yield', slug: 'dividend-yield', description: 'Tingkat imbal hasil dividen tunai tahunan terhadap harga beli saham saat ini.', keywords: ['dividend yield saham BEI', 'imbal hasil dividen'] },
          { id: 'market-capitalization', name: 'Market capitalization', slug: 'market-capitalization', description: 'Nilai kapitalisasi pasar emiten dihitung dari harga saham dikali total saham beredar.', keywords: ['market cap BEI', 'kapitalisasi pasar saham'] },
          { id: 'revenue', name: 'Revenue', slug: 'revenue', description: 'Pendapatan usaha kotor yang dicatat emiten dalam laporan keuangan berkala.', keywords: ['pendapatan emiten', 'omzet perusahaan'] },
          { id: 'net-income', name: 'Net income', slug: 'net-income', description: 'Laba bersih yang dapat diatribusikan kepada pemilik entitas induk.', keywords: ['laba bersih saham', 'net profit emiten'] },
          { id: 'total-assets', name: 'Total assets', slug: 'total-assets', description: 'Jumlah aset lancar dan aset tidak lancar yang dikuasai oleh perseroan.', keywords: ['total aset emiten'] },
          { id: 'total-liabilities', name: 'Total liabilities', slug: 'total-liabilities', description: 'Kewajiban jangka pendek dan jangka panjang yang wajib dilunasi perseroan.', keywords: ['total liabilitas utang emiten'] },
          { id: 'total-equity', name: 'Total equity', slug: 'total-equity', description: 'Kekayaan bersih modal disetor ditambah saldo laba ditahan pemegang saham.', keywords: ['total ekuitas saham'] },
          { id: 'cash-flow', name: 'Cash flow', slug: 'cash-flow', description: 'Arus kas masuk dan keluar dari operasional, investasi, dan pendanaan.', keywords: ['arus kas emiten', 'free cash flow'] },
          { id: 'laporan-laba-rugi', name: 'Laporan laba rugi', slug: 'laporan-laba-rugi', description: 'Dokumen finansial yang memuat kinerja pendapatan, beban, dan profitabilitas.', keywords: ['laporan laba rugi emiten BEI'] },
          { id: 'neraca-keuangan', name: 'Neraca keuangan', slug: 'neraca-keuangan', description: 'Posisi aset, liabilitas, dan ekuitas emiten pada akhir periode kuartalan/tahunan.', keywords: ['neraca keuangan emiten', 'balance sheet BEI'] },
          { id: 'laporan-arus-kas', name: 'Laporan arus kas', slug: 'laporan-arus-kas', description: 'Rincian likuiditas kas operasional emiten untuk memastikan solvabilitas bisnis.', keywords: ['laporan arus kas emiten'] },
          { id: 'riwayat-laporan-keuangan', name: 'Riwayat laporan keuangan', slug: 'riwayat-laporan-keuangan', description: 'Arsip laporan keuangan auditan (Financial Statements) 5 tahun terakhir.', keywords: ['riwayat laporan keuangan BEI'] }
        ]
      },
      {
        id: 'dividen-dan-aksi-korporasi',
        number: 5,
        name: 'Dividen dan aksi korporasi',
        slug: 'dividen-dan-aksi-korporasi',
        description: 'Jadwal pembagian dividen tunai, cum date, ex date, stock split, dan agenda RUPS emiten.',
        keywords: ['Cum date dividen', 'Ex date dividen', 'Jadwal RUPS BEI', 'Stock split saham', 'Rights issue'],
        items: [
          { id: 'riwayat-dividen', name: 'Riwayat dividen', slug: 'riwayat-dividen', description: 'Catatan rekam jejak konsistensi pembagian dividen emiten dari tahun ke tahun.', keywords: ['riwayat dividen saham', 'dividend history'] },
          { id: 'dividen-per-saham', name: 'Dividen per saham', slug: 'dividen-per-saham', description: 'Nominal rupiah dividen tunai (DPS) yang dibayarkan untuk setiap 1 lembar saham.', keywords: ['dividen per saham DPS', 'nominal dividen'] },
          { id: 'dividend-yield-aksi', name: 'Dividend yield', slug: 'dividend-yield-aksi', description: 'Persentase rasio dividen terhadap harga pasar saat penetapan jadwal.', keywords: ['dividend yield cum date'] },
          { id: 'cum-date', name: 'Cum date', slug: 'cum-date', description: 'Hari perdagangan bursa terakhir untuk berhak mendapatkan dividen saham.', keywords: ['cum date dividen BEI', 'jadwal cum dividen'], requiresApiKey: true },
          { id: 'ex-date', name: 'Ex date', slug: 'ex-date', description: 'Hari pertama perdagangan di mana pembeli saham sudah tidak berhak atas dividen.', keywords: ['ex date dividen saham'] },
          { id: 'recording-date', name: 'Recording date', slug: 'recording-date', description: 'Tanggal penutupan pencatatan data pemegang saham yang sah di KSEI.', keywords: ['recording date dividen KSEI'] },
          { id: 'payment-date', name: 'Payment date', slug: 'payment-date', description: 'Tanggal pengiriman dana dividen tunai ke RDN masing-masing investor.', keywords: ['payment date dividen', 'tanggal cair dividen'] },
          { id: 'jadwal-ipo', name: 'Jadwal IPO', slug: 'jadwal-ipo', description: 'Kalender masa bookbuilding, penawaran umum, dan listing saham baru di BEI.', keywords: ['kalender IPO BEI', 'jadwal e-ipo'] },
          { id: 'jadwal-rights-issue', name: 'Jadwal rights issue', slug: 'jadwal-rights-issue', description: 'Agenda penambahan modal dengan Hak Memesan Efek Terlebih Dahulu (HMETD).', keywords: ['jadwal rights issue HMETD'] },
          { id: 'jadwal-stock-split', name: 'Jadwal stock split', slug: 'jadwal-stock-split', description: 'Pemecahan nominal harga saham agar menjadi lebih terjangkau bagi investor ritel.', keywords: ['stock split saham BEI'] },
          { id: 'jadwal-reverse-stock', name: 'Jadwal reverse stock', slug: 'jadwal-reverse-stock', description: 'Penggabungan nilai nominal saham untuk menaikkan harga per lembar.', keywords: ['reverse stock split'] },
          { id: 'jadwal-warrant', name: 'Jadwal warrant', slug: 'jadwal-warrant', description: 'Jadwal pelaksanaan hak tebus waran seri I atau seri lanjutan menjadi saham biasa.', keywords: ['waran saham BEI', 'jadwal tebus waran'] },
          { id: 'jadwal-rups', name: 'Jadwal RUPS', slug: 'jadwal-rups', description: 'Rapat Umum Pemegang Saham Tahunan (RUPST) dan Luar Biasa (RUPSLB).', keywords: ['jadwal RUPS emiten BEI'] },
          { id: 'jadwal-public-expose', name: 'Jadwal public expose', slug: 'jadwal-public-expose', description: 'Pemaparan publik manajemen emiten mengenai kinerja dan proyeksi ke depan.', keywords: ['public expose emiten'] },
          { id: 'riwayat-aksi-korporasi', name: 'Riwayat aksi korporasi', slug: 'riwayat-aksi-korporasi', description: 'Catatan seluruh aksi korporasi yang pernah dilakukan oleh perseroan.', keywords: ['riwayat corporate action BEI'] }
        ]
      },
      {
        id: 'profil-dan-data-emiten',
        number: 6,
        name: 'Profil dan data emiten',
        slug: 'profil-dan-data-emiten',
        description: 'Biodata perusahaan tercatat: kepemilikan saham, dewan komisaris, anak usaha, dan tanggal listing.',
        keywords: ['Profil emiten BEI', 'Kode saham BEI', 'Kepemilikan saham emiten', 'Direksi komisaris saham'],
        items: [
          { id: 'nama-perusahaan', name: 'Nama perusahaan', slug: 'nama-perusahaan', description: 'Nama resmi perseroan terbatas yang terdaftar sebagai emiten di bursa.', keywords: ['nama emiten bursa'] },
          { id: 'kode-saham', name: 'Kode saham', slug: 'kode-saham', description: 'Kode unik 4 huruf ticker emiten di BEI (contoh: BBCA, BBRI, BMRI, TLKM).', keywords: ['ticker saham BEI', 'kode saham indonesia'] },
          { id: 'sektor-perusahaan', name: 'Sektor perusahaan', slug: 'sektor-perusahaan', description: 'Klasifikasi bidang bisnis utama menurut IDX Industrial Classification.', keywords: ['sektor emiten IDX'] },
          { id: 'sub-sektor-perusahaan', name: 'Sub-sektor perusahaan', slug: 'sub-sektor-perusahaan', description: 'Sub-kategori industri yang lebih spesifik dari lini bisnis perseroan.', keywords: ['subsektor saham'] },
          { id: 'industri-perusahaan', name: 'Industri perusahaan', slug: 'industri-perusahaan', description: 'Klasifikasi industri langsung tempat produk/jasa emiten bersaing.', keywords: ['industri emiten'] },
          { id: 'tanggal-ipo', name: 'Tanggal IPO', slug: 'tanggal-ipo', description: 'Tanggal bersejarah saat emiten pertama kali mencatatkan saham di bursa.', keywords: ['tanggal listing bursa'] },
          { id: 'jumlah-saham-beredar', name: 'Jumlah saham beredar', slug: 'jumlah-saham-beredar', description: 'Total lembar saham yang beredar di publik dan institusi non-treasury.', keywords: ['shares outstanding saham'] },
          { id: 'jumlah-saham-tercatat', name: 'Jumlah saham tercatat', slug: 'jumlah-saham-tercatat', description: 'Total saham yang secara legal terdaftar di sistem bursa efek.', keywords: ['listed shares BEI'] },
          { id: 'market-capitalization-profil', name: 'Market capitalization', slug: 'market-capitalization-profil', description: 'Valuasi nilai total perusahaan di bursa pada harga pasar saat ini.', keywords: ['kapitalisasi pasar emiten'] },
          { id: 'pemegang-saham-utama', name: 'Pemegang saham utama', slug: 'pemegang-saham-utama', description: 'Pemegang saham pengendali (PSP) dengan kepemilikan di atas 5% dan hak veto.', keywords: ['pemegang saham pengendali', 'PSP emiten'] },
          { id: 'komposisi-kepemilikan-saham', name: 'Komposisi kepemilikan saham', slug: 'komposisi-kepemilikan-saham', description: 'Rasio kepemilikan antara institusi, pemerintah, masyarakat publik, dan manajerial.', keywords: ['kepemilikan saham publik', 'free float BEI'] },
          { id: 'direksi-dan-komisaris', name: 'Direksi dan komisaris', slug: 'direksi-dan-komisaris', description: 'Struktur kepemimpinan, Dewan Direksi (BOD), dan Dewan Komisaris (BOC).', keywords: ['direksi komisaris emiten'] },
          { id: 'anak-perusahaan', name: 'Anak perusahaan', slug: 'anak-perusahaan', description: 'Daftar entitas anak usaha terkonsolidasi dan joint venture perusahaan.', keywords: ['anak usaha emiten BEI'] }
        ]
      },
      {
        id: 'indikator-teknikal',
        number: 7,
        name: 'Indikator teknikal',
        slug: 'indikator-teknikal',
        description: 'Perhitungan matematis momentum, tren, volatilitas, dan support/resistance harga saham.',
        keywords: ['Moving Average saham', 'RSI saham', 'MACD BEI', 'Bollinger Bands', 'Support resistance saham'],
        items: [
          { id: 'moving-average', name: 'Moving Average', slug: 'moving-average', description: 'Indikator rata-rata pergerakan harga saham periode MA20, MA50, MA100, MA200.', keywords: ['simple moving average SMA', 'golden cross MA200'] },
          { id: 'ema', name: 'EMA', slug: 'ema', description: 'Exponential Moving Average yang memberikan bobot lebih berat pada harga terkini.', keywords: ['exponential moving average EMA'] },
          { id: 'rsi', name: 'RSI', slug: 'rsi', description: 'Relative Strength Index (14): Mengukur kondisi jenuh beli (overbought >70) dan jenuh jual (oversold <30).', keywords: ['RSI saham BEI', 'overbought oversold'], requiresApiKey: true },
          { id: 'macd', name: 'MACD', slug: 'macd', description: 'Moving Average Convergence Divergence: Deteksi awal sinyal pembalikan tren harga.', keywords: ['indikator MACD saham', 'MACD crossover'] },
          { id: 'bollinger-bands', name: 'Bollinger Bands', slug: 'bollinger-bands', description: 'Pita volatilitas atas, tengah, dan bawah berbasis deviasi standar 20-periode.', keywords: ['bollinger bands saham', 'volatilitas harga'] },
          { id: 'stochastic', name: 'Stochastic', slug: 'stochastic', description: 'Osilator momentum membandingkan harga penutupan dengan rentang harga periode tertentu.', keywords: ['stochastic oscillator %K %D'] },
          { id: 'atr', name: 'ATR', slug: 'atr', description: 'Average True Range untuk mengukur tingkat volatilitas harian saham.', keywords: ['ATR volatilitas saham'] },
          { id: 'support-dan-resistance-berbasis-perhitungan-data', name: 'Support dan resistance berbasis perhitungan data', slug: 'support-dan-resistance-berbasis-perhitungan-data', description: 'Level acuan lantai (support) dan atap (resistance) berbasis pivot point Fibonacci.', keywords: ['support resistance saham', 'pivot point kalkulasi'] }
        ]
      },
      {
        id: 'kalender-dan-status-bursa',
        number: 8,
        name: 'Kalender dan status bursa',
        slug: 'kalender-dan-status-bursa',
        description: 'Jadwal jam perdagangan BEI, hari libur nasional pasar modal, suspensi emiten, dan pengumuman UMA.',
        keywords: ['Jadwal bursa buka', 'Hari libur bursa BEI', 'Status suspensi saham', 'Unusual Market Activity UMA'],
        items: [
          { id: 'kalender-perdagangan-bursa', name: 'Kalender perdagangan bursa', slug: 'kalender-perdagangan-bursa', description: 'Jadwal hari aktif bursa selama tahun berjalan yang ditetapkan OJK & BEI.', keywords: ['kalender perdagangan BEI'] },
          { id: 'hari-libur-bursa', name: 'Hari libur bursa', slug: 'hari-libur-bursa', description: 'Daftar tanggal merah dan cuti bersama saat aktivitas perdagangan BEI ditiadakan.', keywords: ['hari libur bursa indonesia'] },
          { id: 'jadwal-perdagangan', name: 'Jadwal perdagangan', slug: 'jadwal-perdagangan', description: 'Sesi I (09:00 - 12:00 WIB / Jumat 11:30) dan Sesi II (13:30 / Jumat 14:00 - 15:50 WIB).', keywords: ['jam perdagangan saham BEI'] },
          { id: 'status-pasar-buka-tutup', name: 'Status pasar buka/tutup', slug: 'status-pasar-buka-tutup', description: 'Status live apakah pasar saham saat ini sedang aktif (Open) atau jeda (Closed).', keywords: ['status pasar saham hari ini'], requiresApiKey: true },
          { id: 'status-suspensi-saham', name: 'Status suspensi saham', slug: 'status-suspensi-saham', description: 'Daftar saham yang dihentikan sementara perdagangannya oleh regulator bursa.', keywords: ['saham kena suspensi BEI'] },
          { id: 'status-unusual-market-activity-uma', name: 'Status unusual market activity (UMA)', slug: 'status-unusual-market-activity-uma', description: 'Pemberitahuan resmi bursa terhadap pola transaksi saham di luar kebiasaan.', keywords: ['saham UMA BEI', 'unusual market activity'] },
          { id: 'status-perdagangan-saham', name: 'Status perdagangan saham', slug: 'status-perdagangan-saham', description: 'Status apakah saham berada di pasar reguler, tunai, atau papan khusus.', keywords: ['status perdagangan emiten'] }
        ]
      },
      {
        id: 'screener-dan-visualisasi',
        number: 9,
        name: 'Screener dan visualisasi',
        slug: 'screener-dan-visualisasi',
        description: 'Alat penyaring saham berbasis kriteria valuasi, dividen, sektor, serta heatmap visual performa pasar.',
        keywords: ['Stock screener BEI', 'Heatmap saham indonesia', 'Screener PER rendah', 'Screener dividen tinggi'],
        items: [
          { id: 'stock-screener', name: 'Stock screener', slug: 'stock-screener', description: 'Filter multi-parameter untuk menyaring saham terbaik sesuai kriteria strategi investasi Anda.', keywords: ['stock screener indonesia', 'filter saham BEI'], requiresApiKey: true },
          { id: 'screener-berdasarkan-harga', name: 'Screener berdasarkan harga', slug: 'screener-berdasarkan-harga', description: 'Saring saham berdasarkan rentang harga per lembar (di bawah 1000, 1000-5000, >5000).', keywords: ['filter harga saham'] },
          { id: 'screener-berdasarkan-volume', name: 'Screener berdasarkan volume', slug: 'screener-berdasarkan-volume', description: 'Cari saham dengan lonjakan volume tidak biasa di atas rata-rata 20 hari.', keywords: ['screener volume saham'] },
          { id: 'screener-berdasarkan-per', name: 'Screener berdasarkan PER', slug: 'screener-berdasarkan-per', description: 'Temukan saham bervaluasi murah dengan rasio Price to Earnings di bawah rata-rata industri.', keywords: ['screener PER murah'] },
          { id: 'screener-berdasarkan-pbv', name: 'Screener berdasarkan PBV', slug: 'screener-berdasarkan-pbv', description: 'Temukan saham diskon dengan rasio harga terhadap modal (PBV < 1.0).', keywords: ['screener PBV di bawah 1'] },
          { id: 'screener-berdasarkan-dividen', name: 'Screener berdasarkan dividen', slug: 'screener-berdasarkan-dividen', description: 'Cari saham pemberi dividen tunai tinggi dengan yield di atas 5-10% per tahun.', keywords: ['screener dividen tinggi'] },
          { id: 'screener-berdasarkan-sektor', name: 'Screener berdasarkan sektor', slug: 'screener-berdasarkan-sektor', description: 'Eksplorasi emiten terbaik dalam sektor perbankan, batubara, properti, atau teknologi.', keywords: ['filter sektor saham'] },
          { id: 'heatmap-saham', name: 'Heatmap saham', slug: 'heatmap-saham', description: 'Peta visual ukuran kapitalisasi pasar dan warna performa hijau/merah saham bursa.', keywords: ['heatmap saham BEI', 'market heatmap'] },
          { id: 'heatmap-sektoral', name: 'Heatmap sektoral', slug: 'heatmap-sektoral', description: 'Visualisasi pergerakan sektoral untuk membaca rotasi sektor uang masuk dan keluar.', keywords: ['heatmap sektor bursa'] },
          { id: 'perbandingan-performa-saham', name: 'Perbandingan performa saham', slug: 'perbandingan-performa-saham', description: 'Bandingkan 2 hingga 4 saham secara berdampingan dari sisi valuasi dan kinerja historis.', keywords: ['perbandingan saham emiten'] }
        ]
      },
      {
        id: 'data-portofolio',
        number: 10,
        name: 'Data portofolio',
        slug: 'data-portofolio',
        description: 'Simulasi pelacakan portofolio investasi saham, perhitungan floating profit/loss, dan diversifikasi sektor.',
        keywords: ['Portofolio saham', 'Untung rugi saham', 'Alokasi portofolio', 'Average price saham'],
        items: [
          { id: 'nilai-portofolio', name: 'Nilai portofolio', slug: 'nilai-portofolio', description: 'Total valuasi nilai aset saham yang dimiliki pada harga pasar penutupan terakhir.', keywords: ['nilai portofolio investasi'] },
          { id: 'komposisi-portofolio', name: 'Komposisi portofolio', slug: 'komposisi-portofolio', description: 'Distribusi persentase bobot setiap saham dalam keseluruhan portofolio.', keywords: ['komposisi portofolio saham'] },
          { id: 'keuntungan-dan-kerugian', name: 'Keuntungan dan kerugian', slug: 'keuntungan-dan-kerugian', description: 'Perhitungan floating gain atau loss dalam nominal mata uang Rupiah.', keywords: ['untung rugi saham nominal'] },
          { id: 'persentase-keuntungan-dan-kerugian', name: 'Persentase keuntungan dan kerugian', slug: 'persentase-keuntungan-dan-kerugian', description: 'Persentase imbal hasil portofolio relatif terhadap modal beli awal.', keywords: ['persentase ROI portofolio'] },
          { id: 'harga-rata-rata-kepemilikan', name: 'Harga rata-rata kepemilikan', slug: 'harga-rata-rata-kepemilikan', description: 'Rata-rata tertimbang harga beli saham (Average Down/Up).', keywords: ['average down saham', 'avg price kepemilikan'] },
          { id: 'alokasi-saham-berdasarkan-sektor', name: 'Alokasi saham berdasarkan sektor', slug: 'alokasi-saham-berdasarkan-sektor', description: 'Diagram diversifikasi kepemilikan saham untuk memitigasi risiko konsentrasi sektor.', keywords: ['diversifikasi sektor portofolio'] }
        ]
      }
    ]
  },
  {
    id: 'reksa-dana-etf',
    name: 'Reksa Dana & ETF',
    slug: 'reksa-dana-etf',
    tagline: 'Katalog NAB Reksa Dana Terlengkap, Ranking Imbal Hasil, Risiko & Dana Kelolaan AUM',
    description: 'Eksplorasi reksa dana pasar uang, pendapatan tetap, campuran, saham, serta instrumen Exchange Traded Fund (ETF) dengan data NAB historis dan indikator Sharpe Ratio.',
    iconName: 'PieChart',
    keywords: [
      'Reksa Dana',
      'ETF Indonesia',
      'NAB per unit',
      'Manajer Investasi',
      'AUM Reksa Dana',
      'Return reksa dana',
      'Reksa dana syariah',
      'Kinerja reksa dana'
    ],
    subcategories: [
      {
        id: 'daftar-dan-identitas-reksa-dana',
        number: 1,
        name: 'Daftar dan identitas reksa dana',
        slug: 'daftar-dan-identitas-reksa-dana',
        description: 'Daftar lengkap produk reksa dana terdaftar di Otoritas Jasa Keuangan (OJK).',
        keywords: ['Daftar reksa dana OJK', 'Manajer investasi terbaik', 'Reksa dana syariah', 'Bank kustodian'],
        items: [
          { id: 'daftar-seluruh-reksa-dana', name: 'Daftar seluruh reksa dana', slug: 'daftar-seluruh-reksa-dana', description: 'Katalog ratusan produk reksa dana aktif dari seluruh Manajer Investasi di Indonesia.', keywords: ['reksa dana indonesia lengkap'], requiresApiKey: true },
          { id: 'nama-reksa-dana', name: 'Nama reksa dana', slug: 'nama-reksa-dana', description: 'Nama resmi produk kontrak investasi kolektif (KIK) reksa dana.', keywords: ['nama produk reksa dana'] },
          { id: 'kode-reksa-dana', name: 'Kode reksa dana', slug: 'kode-reksa-dana', description: 'Kode identifikasi unik produk di sistem KSEI / S-INVEST.', keywords: ['kode reksa dana KSEI'] },
          { id: 'jenis-reksa-dana', name: 'Jenis reksa dana', slug: 'jenis-reksa-dana', description: 'Klasifikasi: Pasar Uang, Pendapatan Tetap, Campuran, Saham, Terproteksi, atau Index Fund.', keywords: ['jenis reksa dana'] },
          { id: 'nama-manajer-investasi', name: 'Nama manajer investasi', slug: 'nama-manajer-investasi', description: 'Perusahaan pengelola dana profesional berizin OJK (Manajer Investasi).', keywords: ['manajer investasi OJK'] },
          { id: 'bank-kustodian', name: 'Bank kustodian', slug: 'bank-kustodian', description: 'Bank umum yang mengadministrasikan dan menyimpan aman aset reksa dana.', keywords: ['bank kustodian reksa dana'] },
          { id: 'tanggal-peluncuran-reksa-dana', name: 'Tanggal peluncuran reksa dana', slug: 'tanggal-peluncuran-reksa-dana', description: 'Tanggal inception date produk mulai ditawarkan ke masyarakat.', keywords: ['tanggal peluncuran produk'] },
          { id: 'status-aktif-atau-nonaktif', name: 'Status aktif atau nonaktif', slug: 'status-aktif-atau-nonaktif', description: 'Status operasional penerimaan unit penyertaan baru bagi investor.', keywords: ['status reksa dana aktif'] },
          { id: 'daftar-reksa-dana-syariah', name: 'Daftar reksa dana syariah', slug: 'daftar-reksa-dana-syariah', description: 'Produk yang menginvestasikan dananya hanya pada instrumen berbasis syariah Islam.', keywords: ['reksa dana syariah terbaik'] },
          { id: 'daftar-reksa-dana-konvensional', name: 'Daftar reksa dana konvensional', slug: 'daftar-reksa-dana-konvensional', description: 'Daftar reksa dana dengan fleksibilitas alokasi instrumen umum di bursa.', keywords: ['reksa dana konvensional'] },
          { id: 'daftar-reksa-dana-berdasarkan-manajer-investasi', name: 'Daftar reksa dana berdasarkan manajer investasi', slug: 'daftar-reksa-dana-berdasarkan-manajer-investasi', description: 'Pemilahan produk berdasarkan institusi penerbit (Schroders, Sucor, Batavia, dll).', keywords: ['produk manajer investasi'] },
          { id: 'daftar-reksa-dana-berdasarkan-kategori', name: 'Daftar reksa dana berdasarkan kategori', slug: 'daftar-reksa-dana-berdasarkan-kategori', description: 'Pencarian terarah berdasarkan profil risiko dan target durasi investasi.', keywords: ['kategori reksa dana'] }
        ]
      },
      {
        id: 'harga-dan-nab-reksa-dana',
        number: 2,
        name: 'Harga dan NAB Reksa Dana',
        slug: 'harga-dan-nab-reksa-dana',
        description: 'Nilai Aktiva Bersih (NAB) per unit penyertaan harian dan grafik pertumbuhan historis.',
        keywords: ['NAB reksa dana hari ini', 'Perubahan NAB harian', 'Grafik pertumbuhan NAB', 'Harga unit reksa dana'],
        items: [
          { id: 'nab-per-unit-terbaru', name: 'NAB per unit terbaru', slug: 'nab-per-unit-terbaru', description: 'Nilai Aktiva Bersih per unit yang dihitung setiap akhir hari bursa.', keywords: ['NAB hari ini reksa dana'], requiresApiKey: true },
          { id: 'nab-harian', name: 'NAB harian', slug: 'nab-harian', description: 'Catatan angka NAB harian untuk memantau fluktuasi jangka pendek.', keywords: ['NAB harian'] },
          { id: 'nab-historis', name: 'NAB historis', slug: 'nab-historis', description: 'Riwayat data NAB sejak hari pertama peluncuran hingga sekarang.', keywords: ['riwayat NAB reksa dana'] },
          { id: 'perubahan-nab-harian', name: 'Perubahan NAB harian', slug: 'perubahan-nab-harian', description: 'Kenaikan atau penurunan nilai nominal rupiah unit hari ini dibandingkan kemarin.', keywords: ['perubahan NAB'] },
          { id: 'persentase-perubahan-nab', name: 'Persentase perubahan NAB', slug: 'persentase-perubahan-nab', description: 'Persentase keuntungan atau penurunan harian unit penyertaan.', keywords: ['persentase NAB harian'] },
          { id: 'grafik-nab', name: 'Grafik NAB', slug: 'grafik-nab', description: 'Visualisasi kurva pergerakan harga unit reksa dana secara visual.', keywords: ['grafik NAB'] },
          { id: 'grafik-pertumbuhan-nab', name: 'Grafik pertumbuhan NAB', slug: 'grafik-pertumbuhan-nab', description: 'Simulasi garis pergerakan return compound dari waktu ke waktu.', keywords: ['grafik return reksa dana'] },
          { id: 'nab-tertinggi', name: 'NAB tertinggi', slug: 'nab-tertinggi', description: 'Rekor nilai tertinggi all-time high yang pernah disentuh produk.', keywords: ['NAB tertinggi sepanjang masa'] },
          { id: 'nab-terendah', name: 'NAB terendah', slug: 'nab-terendah', description: 'Level nilai terendah unit penyertaan selama masa edar.', keywords: ['NAB terendah'] },
          { id: 'riwayat-nab-berdasarkan-periode', name: 'Riwayat NAB berdasarkan periode', slug: 'riwayat-nab-berdasarkan-periode', description: 'Tabel ringkasan NAB pada akhir bulan, kuartal, dan tahun buku.', keywords: ['riwayat periode reksa dana'] }
        ]
      },
      {
        id: 'kinerja-dan-imbal-hasil',
        number: 3,
        name: 'Kinerja dan Imbal Hasil',
        slug: 'kinerja-dan-imbal-hasil',
        description: 'Metrik return investasi reksa dana dari harian, 1 bulan, 1 tahun, hingga 5 tahun dan ranking performa.',
        keywords: ['Return reksa dana', 'Top performing mutual fund', 'Imbal hasil 1 tahun', 'Ranking return reksa dana'],
        items: [
          { id: 'return-harian', name: 'Return harian', slug: 'return-harian', description: 'Imbal hasil 1 hari bursa.', keywords: ['return harian'] },
          { id: 'return-mingguan', name: 'Return mingguan', slug: 'return-mingguan', description: 'Kinerja akumulasi 7 hari perdagangan.', keywords: ['return mingguan'] },
          { id: 'return-bulanan', name: 'Return bulanan', slug: 'return-bulanan', description: 'Kinerja bulan berjalan.', keywords: ['return bulanan'] },
          { id: 'return-1-bulan', name: 'Return 1 bulan', slug: 'return-1-bulan', description: 'Kinerja persentase dalam 30 hari ke belakang.', keywords: ['return 1 bulan'] },
          { id: 'return-3-bulan', name: 'Return 3 bulan', slug: 'return-3-bulan', description: 'Kinerja kuartalan untuk evaluasi tren jangka pendek.', keywords: ['return 3 bulan'] },
          { id: 'return-6-bulan', name: 'Return 6 bulan', slug: 'return-6-bulan', description: 'Kinerja semester pertama atau kedua.', keywords: ['return 6 bulan'] },
          { id: 'return-ytd', name: 'Return YTD', slug: 'return-ytd', description: 'Year to Date: Performa sejak 1 Januari tahun berjalan.', keywords: ['return YTD reksa dana'] },
          { id: 'return-1-tahun', name: 'Return 1 tahun', slug: 'return-1-tahun', description: 'Pertumbuhan 12 bulan terakhir sebagai tolok ukur standar.', keywords: ['return 1 tahun reksa dana'], requiresApiKey: true },
          { id: 'return-3-tahun', name: 'Return 3 tahun', slug: 'return-3-tahun', description: 'Performa jangka menengah menguji ketahanan di berbagai siklus pasar.', keywords: ['return 3 tahun'] },
          { id: 'return-5-tahun', name: 'Return 5 tahun', slug: 'return-5-tahun', description: 'Bukti rekam jejak performa jangka panjang yang konsisten.', keywords: ['return 5 tahun reksa dana'] },
          { id: 'return-sejak-peluncuran', name: 'Return sejak peluncuran', slug: 'return-sejak-peluncuran', description: 'Total imbal hasil sejak hari perdana reksa dana diluncurkan.', keywords: ['return since inception'] },
          { id: 'annualized-return', name: 'Annualized return', slug: 'annualized-return', description: 'Rata-rata imbal hasil yang disetahunkan (CAGR).', keywords: ['annualized return CAGR'] },
          { id: 'cumulative-return', name: 'Cumulative return', slug: 'cumulative-return', description: 'Akumulasi total persentase pengembalian tanpa normalisasi tahunan.', keywords: ['cumulative return'] },
          { id: 'ranking-return-reksa-dana', name: 'Ranking return reksa dana', slug: 'ranking-return-reksa-dana', description: 'Klasemen urutan produk dengan return terbaik di kelasnya.', keywords: ['ranking reksa dana'] },
          { id: 'top-performing-reksa-dana', name: 'Top performing reksa dana', slug: 'top-performing-reksa-dana', description: 'Juara imbal hasil tertinggi yang mengalahkan benchmark pasar.', keywords: ['top performing mutual fund'] },
          { id: 'bottom-performing-reksa-dana', name: 'Bottom performing reksa dana', slug: 'bottom-performing-reksa-dana', description: 'Produk dengan performa tertinggal untuk evaluasi alokasi portofolio.', keywords: ['reksa dana underperform'] }
        ]
      },
      {
        id: 'dana-kelolaan-dan-unit-penyertaan',
        number: 4,
        name: 'Dana Kelolaan dan Unit Penyertaan',
        slug: 'dana-kelolaan-dan-unit-penyertaan',
        description: 'Statistik Asset Under Management (AUM), total unit beredar, dan aliran dana investor.',
        keywords: ['AUM reksa dana', 'Dana kelolaan', 'Unit penyertaan', 'Aliran dana reksa dana'],
        items: [
          { id: 'asset-under-management-aum', name: 'Asset Under Management (AUM)', slug: 'asset-under-management-aum', description: 'Total nilai pasar seluruh portofolio yang dikelola dalam reksa dana.', keywords: ['AUM reksa dana'], requiresApiKey: true },
          { id: 'aum-historis', name: 'AUM historis', slug: 'aum-historis', description: 'Riwayat perkembangan jumlah dana kelolaan dari waktu ke waktu.', keywords: ['historis AUM'] },
          { id: 'perubahan-aum', name: 'Perubahan AUM', slug: 'perubahan-aum', description: 'Selisih penambahan atau pengurangan dana kelolaan.', keywords: ['perubahan AUM'] },
          { id: 'pertumbuhan-aum', name: 'Pertumbuhan AUM', slug: 'pertumbuhan-aum', description: 'Persentase laju pertumbuhan dana kelolaan.', keywords: ['pertumbuhan dana kelolaan'] },
          { id: 'total-unit-penyertaan', name: 'Total unit penyertaan', slug: 'total-unit-penyertaan', description: 'Jumlah total lembar unit yang dipegang oleh seluruh nasabah.', keywords: ['unit penyertaan beredar'] },
          { id: 'perubahan-unit-penyertaan', name: 'Perubahan unit penyertaan', slug: 'perubahan-unit-penyertaan', description: 'Indikasi subscription bersih atau redemption massal nasabah.', keywords: ['perubahan unit'] },
          { id: 'dana-masuk-dan-keluar', name: 'Dana masuk dan keluar', slug: 'dana-masuk-dan-keluar', description: 'Arus dana kas subscription vs redemption bulanan.', keywords: ['fund flow reksa dana'] },
          { id: 'ranking-aum-reksa-dana', name: 'Ranking AUM reksa dana', slug: 'ranking-aum-reksa-dana', description: 'Peringkat reksa dana dengan kepercayaan dana investor terbesar di Indonesia.', keywords: ['ranking AUM'] },
          { id: 'reksa-dana-dengan-aum-terbesar', name: 'Reksa dana dengan AUM terbesar', slug: 'reksa-dana-dengan-aum-terbesar', description: 'Daftar produk reksa dana raksasa dengan dana kelolaan di atas puluhan triliun.', keywords: ['reksa dana AUM terbesar'] }
        ]
      },
      {
        id: 'risiko-dan-indikator-kinerja',
        number: 5,
        name: 'Risiko dan Indikator Kinerja',
        slug: 'risiko-dan-indikator-kinerja',
        description: 'Metrik risiko modern: Sharpe ratio, Sortino, Maximum Drawdown, Beta, dan Standar Deviasi.',
        keywords: ['Sharpe ratio reksa dana', 'Maximum drawdown', 'Beta reksa dana', 'Volatilitas reksa dana'],
        items: [
          { id: 'risk-profile', name: 'Risk profile', slug: 'risk-profile', description: 'Tingkat profil risiko: Konservatif, Moderat, atau Agresif.', keywords: ['profil risiko reksa dana'] },
          { id: 'volatilitas', name: 'Volatilitas', slug: 'volatilitas', description: 'Besarnya fluktuasi naik turun harga unit dalam jangka waktu tertentu.', keywords: ['volatilitas produk'] },
          { id: 'maximum-drawdown', name: 'Maximum drawdown', slug: 'maximum-drawdown', description: 'Penurunan terdalam dari puncak tertinggi ke lembah terendah dalam periode.', keywords: ['maximum drawdown MDD'], requiresApiKey: true },
          { id: 'sharpe-ratio', name: 'Sharpe ratio', slug: 'sharpe-ratio', description: 'Ukuran imbal hasil yang disesuaikan dengan total risiko (semakin tinggi semakin efisien).', keywords: ['sharpe ratio reksa dana'] },
          { id: 'sortino-ratio', name: 'Sortino ratio', slug: 'sortino-ratio', description: 'Rasio kinerja yang hanya memperhitungkan volatilitas sisi bawah (downside risk).', keywords: ['sortino ratio'] },
          { id: 'standard-deviation', name: 'Standard deviation', slug: 'standard-deviation', description: 'Deviasi standar sebaran return dari rata-rata historisnya.', keywords: ['standar deviasi reksa dana'] },
          { id: 'beta', name: 'Beta', slug: 'beta', description: 'Sensitivitas pergerakan produk terhadap indeks pasar acuan IHSG.', keywords: ['beta reksa dana'] },
          { id: 'alpha', name: 'Alpha', slug: 'alpha', description: 'Kelebihan return yang dihasilkan manajer investasi di atas return pasar.', keywords: ['alpha manajer investasi'] },
          { id: 'tracking-error', name: 'Tracking error', slug: 'tracking-error', description: 'Konsistensi produk indeks dalam mengikuti tolok ukur acuannya.', keywords: ['tracking error'] },
          { id: 'information-ratio', name: 'Information ratio', slug: 'information-ratio', description: 'Konsistensi manajer investasi dalam menghasilkan imbal hasil berlebih.', keywords: ['information ratio'] },
          { id: 'risk-adjusted-return', name: 'Risk-adjusted return', slug: 'risk-adjusted-return', description: 'Imbal hasil riil setelah memperhitungkan seluruh elemen ketidakpastian risiko.', keywords: ['risk adjusted return'] }
        ]
      },
      {
        id: 'komposisi-dan-alokasi-aset',
        number: 6,
        name: 'Komposisi dan Alokasi Aset',
        slug: 'komposisi-dan-alokasi-aset',
        description: 'Daftar aset portofolio reksa dana: Top 10 Holdings, alokasi saham, obligasi, dan pasar uang.',
        keywords: ['Top 10 holdings reksa dana', 'Alokasi aset', 'Portofolio reksa dana', 'Fund factsheet'],
        items: [
          { id: 'alokasi-saham', name: 'Alokasi saham', slug: 'alokasi-saham', description: 'Persentase porsi instrumen ekuitas dalam portofolio reksa dana.', keywords: ['alokasi saham reksa dana'] },
          { id: 'alokasi-obligasi', name: 'Alokasi obligasi', slug: 'alokasi-obligasi', description: 'Persentase penempatan pada surat utang negara maupun obligasi korporasi.', keywords: ['alokasi obligasi'] },
          { id: 'alokasi-pasar-uang', name: 'Alokasi pasar uang', slug: 'alokasi-pasar-uang', description: 'Porsi penempatan pada instrumen jangka pendek di bawah 1 tahun.', keywords: ['alokasi pasar uang'] },
          { id: 'alokasi-deposito', name: 'Alokasi deposito', slug: 'alokasi-deposito', description: 'Penempatan kas pada deposito berjangka bank-bank terpercaya.', keywords: ['alokasi deposito'] },
          { id: 'alokasi-kas', name: 'Alokasi kas', slug: 'alokasi-kas', description: 'Sisa uang tunai yang disiapkan untuk likuiditas redemption nasabah.', keywords: ['alokasi kas'] },
          { id: 'alokasi-aset-lainnya', name: 'Alokasi aset lainnya', slug: 'alokasi-aset-lainnya', description: 'Instrumen derivatif lindung nilai atau efek luar negeri yang diperbolehkan.', keywords: ['aset lainnya'] },
          { id: 'komposisi-portofolio-rd', name: 'Komposisi portofolio', slug: 'komposisi-portofolio-rd', description: 'Rincian bobot keseluruhan keranjang investasi reksa dana.', keywords: ['komposisi portofolio fund'] },
          { id: 'top-10-holdings', name: 'Top 10 holdings', slug: 'top-10-holdings', description: 'Sepuluh efek atau saham terbesar yang menjadi motor utama imbal hasil produk.', keywords: ['top 10 holdings reksa dana'], requiresApiKey: true },
          { id: 'daftar-saham-dalam-portofolio', name: 'Daftar saham dalam portofolio', slug: 'daftar-saham-dalam-portofolio', description: 'Daftar emiten yang dikoleksi oleh manajer investasi di reksa dana saham.', keywords: ['saham isi reksa dana'] },
          { id: 'daftar-obligasi-dalam-portofolio', name: 'Daftar obligasi dalam portofolio', slug: 'daftar-obligasi-dalam-portofolio', description: 'Daftar seri SBN atau surat utang korporasi dalam reksa dana pendapatan tetap.', keywords: ['obligasi isi reksa dana'] },
          { id: 'perubahan-komposisi-portofolio', name: 'Perubahan komposisi portofolio', slug: 'perubahan-komposisi-portofolio', description: 'Rotasi strategi manajer investasi dari factsheet bulan lalu ke bulan ini.', keywords: ['perubahan isi portofolio'] },
          { id: 'grafik-alokasi-aset', name: 'Grafik alokasi aset', slug: 'grafik-alokasi-aset', description: 'Diagram donat visual yang membagi proporsi saham, obligasi, dan kas.', keywords: ['grafik alokasi aset'] }
        ]
      },
      {
        id: 'biaya-dan-ketentuan-investasi',
        number: 7,
        name: 'Biaya dan Ketentuan Investasi',
        slug: 'biaya-dan-ketentuan-investasi',
        description: 'Biaya manajemen (management fee), bank kustodian, expense ratio, dan minimal pembelian modal awal.',
        keywords: ['Expense ratio reksa dana', 'Biaya beli reksa dana', 'Minimal investasi reksa dana', 'Management fee'],
        items: [
          { id: 'minimum-pembelian', name: 'Minimum pembelian', slug: 'minimum-pembelian', description: 'Batas modal terkecil untuk mulai berinvestasi (mulai dari Rp 10.000).', keywords: ['minimum beli reksa dana'] },
          { id: 'minimum-penjualan', name: 'Minimum penjualan', slug: 'minimum-penjualan', description: 'Batas minimal unit atau nominal rupiah saat mencairkan dana (redemption).', keywords: ['minimum jual reksa dana'] },
          { id: 'minimum-switching', name: 'Minimum switching', slug: 'minimum-switching', description: 'Batas minimal pengalihan unit dari satu produk ke produk lain dalam satu MI.', keywords: ['minimum switching'] },
          { id: 'subscription-fee', name: 'Subscription fee', slug: 'subscription-fee', description: 'Biaya transaksi pembelian unit penyertaan (0% - 2%).', keywords: ['subscription fee reksa dana'] },
          { id: 'redemption-fee', name: 'Redemption fee', slug: 'redemption-fee', description: 'Biaya pencairan unit kembali ke rekening bank investor.', keywords: ['redemption fee'] },
          { id: 'switching-fee', name: 'Switching fee', slug: 'switching-fee', description: 'Biaya administrasi saat melakukan pengalihan produk.', keywords: ['switching fee'] },
          { id: 'management-fee', name: 'Management fee', slug: 'management-fee', description: 'Imbalan jasa pengelolaan profesional yang dibayarkan kepada manajer investasi.', keywords: ['management fee'] },
          { id: 'custodian-fee', name: 'Custodian fee', slug: 'custodian-fee', description: 'Biaya administrasi penitipan efek yang dibayarkan kepada bank kustodian.', keywords: ['custodian fee'] },
          { id: 'expense-ratio', name: 'Expense ratio', slug: 'expense-ratio', description: 'Total persentase biaya operasional tahunan reksa dana terhadap total AUM.', keywords: ['expense ratio reksa dana'], requiresApiKey: true },
          { id: 'total-biaya-operasional', name: 'Total biaya operasional', slug: 'total-biaya-operasional', description: 'Pengeluaran operasional mencakup audit, hukum, dan pencatatan.', keywords: ['biaya operasional reksa dana'] },
          { id: 'mata-uang-reksa-dana', name: 'Mata uang reksa dana', slug: 'mata-uang-reksa-dana', description: 'Mata uang denominasi produk (Rupiah IDR atau Dollar USD).', keywords: ['mata uang reksa dana'] }
        ]
      },
      {
        id: 'dividen-dan-distribusi-hasil',
        number: 8,
        name: 'Dividen dan Distribusi Hasil',
        slug: 'dividen-dan-distribusi-hasil',
        description: 'Produk reksa dana dengan fitur bagi hasil tunai berkala (dividend-paying funds).',
        keywords: ['Dividen reksa dana', 'Distribusi hasil investasi', 'Passive income reksa dana'],
        items: [
          { id: 'riwayat-pembagian-dividen-rd', name: 'Riwayat pembagian dividen', slug: 'riwayat-pembagian-dividen-rd', description: 'Catatan historis pembagian cash distribution kepada pemegang unit.', keywords: ['riwayat dividen reksa dana'] },
          { id: 'nilai-dividen-per-unit-rd', name: 'Nilai dividen per unit', slug: 'nilai-dividen-per-unit-rd', description: 'Besaran rupiah tunai yang ditransfer per satu lembar unit penyertaan.', keywords: ['nilai dividen per unit'] },
          { id: 'tanggal-pembagian-dividen-rd', name: 'Tanggal pembagian dividen', slug: 'tanggal-pembagian-dividen-rd', description: 'Jadwal tanggal pencairan dividen ke rekening bank nasabah.', keywords: ['tanggal bagi dividen'] },
          { id: 'dividend-yield-rd', name: 'Dividend yield', slug: 'dividend-yield-rd', description: 'Rasio hasil bagi tunai tahunan terhadap nilai aktiva bersih unit.', keywords: ['dividend yield reksa dana'] },
          { id: 'riwayat-distribusi-hasil-investasi', name: 'Riwayat distribusi hasil investasi', slug: 'riwayat-distribusi-hasil-investasi', description: 'Arsip pengembalian modal atau pembagian keuntungan investasi.', keywords: ['distribusi hasil investasi'] }
        ]
      },
      {
        id: 'benchmark-dan-perbandingan',
        number: 9,
        name: 'Benchmark dan Perbandingan',
        slug: 'benchmark-dan-perbandingan',
        description: 'Komparasi performa reksa dana terhadap IHSG, LQ45, dan indeks obligasi pemerintah.',
        keywords: ['Benchmark reksa dana', 'Perbandingan reksa dana IHSG', 'Komparasi return reksa dana'],
        items: [
          { id: 'benchmark-reksa-dana', name: 'Benchmark reksa dana', slug: 'benchmark-reksa-dana', description: 'Tolok ukur acuan yang wajib dikalahkan oleh manajer investasi.', keywords: ['benchmark reksa dana'] },
          { id: 'indeks-acuan-reksa-dana', name: 'Indeks acuan reksa dana', slug: 'indeks-acuan-reksa-dana', description: 'Indeks pasar resmi yang dijadikan dasar target portofolio.', keywords: ['indeks acuan'] },
          { id: 'perbandingan-return-dengan-ihsg', name: 'Perbandingan return dengan IHSG', slug: 'perbandingan-return-dengan-ihsg', description: 'Apakah reksa dana saham mampu mengalahkan laju kenaikan IHSG.', keywords: ['reksa dana vs IHSG'], requiresApiKey: true },
          { id: 'perbandingan-return-dengan-lq45', name: 'Perbandingan return dengan LQ45', slug: 'perbandingan-return-dengan-lq45', description: 'Komparasi kinerja terhadap 45 saham terlikuid di bursa.', keywords: ['reksa dana vs LQ45'] },
          { id: 'perbandingan-return-dengan-indeks-obligasi', name: 'Perbandingan return dengan indeks obligasi', slug: 'perbandingan-return-dengan-indeks-obligasi', description: 'Komparasi kinerja reksa dana pendapatan tetap terhadap Indonesia Bond Index (IBPA).', keywords: ['reksa dana vs obligasi'] },
          { id: 'perbandingan-return-antar-reksa-dana', name: 'Perbandingan return antar reksa dana', slug: 'perbandingan-return-antar-reksa-dana', description: 'Head-to-head perbandingan 2 produk sejenis untuk menentukan pilihan terbaik.', keywords: ['komparasi reksa dana'] },
          { id: 'grafik-perbandingan-kinerja', name: 'Grafik perbandingan kinerja', slug: 'grafik-perbandingan-kinerja', description: 'Visualisasi garis performa multi-produk dalam satu grafik terpadu.', keywords: ['grafik perbandingan kinerja'] },
          { id: 'ranking-reksa-dana-berdasarkan-kategori', name: 'Ranking reksa dana berdasarkan kategori', slug: 'ranking-reksa-dana-berdasarkan-kategori', description: 'Peringkat lengkap dari kelas Pasar Uang hingga Saham.', keywords: ['ranking kategori reksa dana'] }
        ]
      },
      {
        id: 'etf',
        number: 10,
        name: 'ETF',
        slug: 'etf',
        description: 'Exchange Traded Fund: Reksa dana yang unit penyertaannya diperdagangkan di bursa efek seperti saham.',
        keywords: ['ETF Indonesia', 'Daftar ETF BEI', 'Harga ETF terbaru', 'iNAV ETF', 'Underlying ETF'],
        items: [
          { id: 'daftar-etf', name: 'Daftar ETF', slug: 'daftar-etf', description: 'Katalog seluruh Exchange Traded Fund yang tercatat di Bursa Efek Indonesia.', keywords: ['daftar ETF BEI', 'list ETF indonesia'] },
          { id: 'kode-etf', name: 'Kode ETF', slug: 'kode-etf', description: 'Kode ticker 4 huruf ETF di bursa efek (contoh: R-LQ45X, XIIT, XISR, XISC).', keywords: ['kode ticker ETF'] },
          { id: 'nama-etf', name: 'Nama ETF', slug: 'nama-etf', description: 'Nama lengkap produk ETF beserta indeks acuan yang direplikasi.', keywords: ['nama produk ETF'] },
          { id: 'manajer-investasi-etf', name: 'Manajer investasi ETF', slug: 'manajer-investasi-etf', description: 'Penerbit pengelola portofolio ETF (Indo Premier, Danareksa, Bahana, dll).', keywords: ['manajer investasi ETF'] },
          { id: 'harga-etf-terbaru', name: 'Harga ETF terbaru', slug: 'harga-etf-terbaru', description: 'Harga transaksi per lembar ETF di pasar sekunder secara real-time.', keywords: ['harga ETF hari ini'], requiresApiKey: true },
          { id: 'harga-pembukaan-etf', name: 'Harga pembukaan ETF', slug: 'harga-pembukaan-etf', description: 'Harga kesepakatan pertama saat bursa dibuka.', keywords: ['harga pembukaan ETF'] },
          { id: 'harga-tertinggi-etf', name: 'Harga tertinggi ETF', slug: 'harga-tertinggi-etf', description: 'Harga tertinggi perdagangan ETF hari ini.', keywords: ['harga tertinggi ETF'] },
          { id: 'harga-terendah-etf', name: 'Harga terendah ETF', slug: 'harga-terendah-etf', description: 'Harga terendah sesi berjalan.', keywords: ['harga terendah ETF'] },
          { id: 'harga-penutupan-etf', name: 'Harga penutupan ETF', slug: 'harga-penutupan-etf', description: 'Closing price ETF di pasar reguler.', keywords: ['harga penutupan ETF'] },
          { id: 'perubahan-harga-etf', name: 'Perubahan harga ETF', slug: 'perubahan-harga-etf', description: 'Selisih rupiah harga ETF hari ini dibanding penutupan kemarin.', keywords: ['perubahan harga ETF'] },
          { id: 'persentase-perubahan-harga-etf', name: 'Persentase perubahan harga ETF', slug: 'persentase-perubahan-harga-etf', description: 'Persentase fluktuasi harga ETF harian.', keywords: ['persentase harga ETF'] },
          { id: 'volume-perdagangan-etf', name: 'Volume perdagangan ETF', slug: 'volume-perdagangan-etf', description: 'Jumlah lembar unit ETF yang ditransaksikan di bursa.', keywords: ['volume ETF'] },
          { id: 'nilai-transaksi-etf', name: 'Nilai transaksi ETF', slug: 'nilai-transaksi-etf', description: 'Total perputaran uang rupiah pada perdagangan ETF.', keywords: ['nilai transaksi ETF'] },
          { id: 'frekuensi-transaksi-etf', name: 'Frekuensi transaksi ETF', slug: 'frekuensi-transaksi-etf', description: 'Jumlah frekuensi transaksi unit ETF.', keywords: ['frekuensi ETF'] },
          { id: 'grafik-harga-etf', name: 'Grafik harga ETF', slug: 'grafik-harga-etf', description: 'Grafik chart teknikal pergerakan harga ETF.', keywords: ['grafik harga ETF'] },
          { id: 'harga-historis-etf', name: 'Harga historis ETF', slug: 'harga-historis-etf', description: 'Data lampau harga penutupan ETF.', keywords: ['riwayat harga ETF'] },
          { id: 'nab-per-unit-etf', name: 'NAB per unit ETF', slug: 'nab-per-unit-etf', description: 'Nilai Aktiva Bersih wajar portofolio ETF yang dihitung kustodian.', keywords: ['NAB ETF'] },
          { id: 'indicative-net-asset-value-inav', name: 'Indicative Net Asset Value (iNAV)', slug: 'indicative-net-asset-value-inav', description: 'Estimasi nilai wajar NAB real-time selama jam perdagangan bursa.', keywords: ['iNAV ETF BEI', 'indicative NAV'] },
          { id: 'premium-atau-diskon-harga-etf-terhadap-nab', name: 'Premium atau diskon harga ETF terhadap NAB', slug: 'premium-atau-diskon-harga-etf-terhadap-nab', description: 'Selisih antara harga pasar bursa dengan iNAV wajarnya.', keywords: ['premium diskon ETF', 'arbitrase ETF'] },
          { id: 'aum-etf', name: 'AUM ETF', slug: 'aum-etf', description: 'Total dana kelolaan aset instrumen ETF.', keywords: ['AUM ETF'] },
          { id: 'komposisi-portofolio-etf', name: 'Komposisi portofolio ETF', slug: 'komposisi-portofolio-etf', description: 'Bobot konstituen underlying saham yang menyusun indeks ETF.', keywords: ['portofolio ETF'] },
          { id: 'underlying-etf', name: 'Underlying ETF', slug: 'underlying-etf', description: 'Indeks dasar yang direplikasi oleh instrumen ETF (misal: IDX30, LQ45, ESG).', keywords: ['underlying index ETF'] },
          { id: 'tracking-error-etf', name: 'Tracking error ETF', slug: 'tracking-error-etf', description: 'Penyimpangan hasil imbal hasil ETF terhadap performa indeks acuannya.', keywords: ['tracking error ETF'] },
          { id: 'return-etf', name: 'Return ETF', slug: 'return-etf', description: 'Imbal hasil investasi ETF dalam rentang 1 bulan, 1 tahun, dan 3 tahun.', keywords: ['return ETF'] },
          { id: 'ranking-etf-berdasarkan-return', name: 'Ranking ETF berdasarkan return', slug: 'ranking-etf-berdasarkan-return', description: 'Daftar ETF paling menguntungkan di bursa efek.', keywords: ['ranking return ETF'] },
          { id: 'ranking-etf-berdasarkan-volume-transaksi', name: 'Ranking ETF berdasarkan volume transaksi', slug: 'ranking-etf-berdasarkan-volume-transaksi', description: 'ETF terlikuid dengan dealer partisipan paling aktif.', keywords: ['ETF teraktif BEI'] }
        ]
      },
      {
        id: 'screener-dan-visualisasi-rd',
        number: 11,
        name: 'Screener dan Visualisasi',
        slug: 'screener-dan-visualisasi-rd',
        description: 'Alat penyaring reksa dana berdasarkan return, AUM, volatilitas terendah, dan simulasi compound return.',
        keywords: ['Screener reksa dana', 'Kalkulator reksa dana', 'Simulasi investasi compound', 'Heatmap reksa dana'],
        items: [
          { id: 'reksa-dana-dengan-return-tertinggi', name: 'Reksa dana dengan return tertinggi', slug: 'reksa-dana-dengan-return-tertinggi', description: 'Daftar produk dengan return terbaik dalam 1-3 tahun terakhir.', keywords: ['reksa dana return tertinggi'] },
          { id: 'reksa-dana-dengan-return-terendah', name: 'Reksa dana dengan return terendah', slug: 'reksa-dana-dengan-return-terendah', description: 'Daftar produk dengan kinerja tertinggal.', keywords: ['reksa dana return terendah'] },
          { id: 'reksa-dana-dengan-aum-terbesar-screen', name: 'Reksa dana dengan AUM terbesar', slug: 'reksa-dana-dengan-aum-terbesar-screen', description: 'Pilihan produk dengan dana kelolaan paling masif dan terpercaya.', keywords: ['reksa dana terpopuler AUM'] },
          { id: 'reksa-dana-dengan-volatilitas-terendah', name: 'Reksa dana dengan volatilitas terendah', slug: 'reksa-dana-dengan-volatilitas-terendah', description: 'Produk defensif paling stabil cocok untuk dana darurat.', keywords: ['reksa dana stabil'] },
          { id: 'reksa-dana-berdasarkan-expense-ratio', name: 'Reksa dana berdasarkan expense ratio', slug: 'reksa-dana-berdasarkan-expense-ratio', description: 'Filter produk dengan biaya kelolaan paling efisien dan murah.', keywords: ['reksa dana fee murah'] },
          { id: 'reksa-dana-berdasarkan-minimum-pembelian', name: 'Reksa dana berdasarkan minimum pembelian', slug: 'reksa-dana-berdasarkan-minimum-pembelian', description: 'Saring produk dengan modal awal terjangkau mulai Rp 10.000.', keywords: ['investasi reksa dana modal kecil'] },
          { id: 'screener-reksa-dana-berdasarkan-kategori', name: 'Screener reksa dana berdasarkan kategori', slug: 'screener-reksa-dana-berdasarkan-kategori', description: 'Filter multi-kondisi sesuai kelas aset pilihan.', keywords: ['screener kategori mutual fund'], requiresApiKey: true },
          { id: 'screener-reksa-dana-berdasarkan-manajer-investasi', name: 'Screener reksa dana berdasarkan manajer investasi', slug: 'screener-reksa-dana-berdasarkan-manajer-investasi', description: 'Cari produk yang dikelola oleh manajer investasi idaman Anda.', keywords: ['filter manajer investasi'] },
          { id: 'screener-reksa-dana-syariah', name: 'Screener reksa dana syariah', slug: 'screener-reksa-dana-syariah', description: 'Filter spesifik produk investasi berprinsip syariah murni.', keywords: ['screener syariah'] },
          { id: 'heatmap-kinerja-reksa-dana', name: 'Heatmap kinerja reksa dana', slug: 'heatmap-kinerja-reksa-dana', description: 'Peta visual warna-warni kinerja pasar reksa dana nasional.', keywords: ['heatmap mutual funds'] },
          { id: 'grafik-pertumbuhan-investasi', name: 'Grafik pertumbuhan investasi', slug: 'grafik-pertumbuhan-investasi', description: 'Visualisasi hasil compounding bunga berbunga dalam jangka panjang.', keywords: ['grafik compounding return'] },
          { id: 'simulasi-pertumbuhan-nilai-investasi-berdasarkan-data-historis', name: 'Simulasi pertumbuhan nilai investasi berdasarkan data historis', slug: 'simulasi-pertumbuhan-nilai-investasi-berdasarkan-data-historis', description: 'Kalkulator hitung hasil investasi jika Anda menabung rutin Rp 1 juta per bulan.', keywords: ['kalkulator simulasi reksa dana', 'DCA calculator'], requiresApiKey: true }
        ]
      },
      {
        id: 'indeks-reksa-dana',
        number: 12,
        name: 'Indeks Reksa Dana',
        slug: 'indeks-reksa-dana',
        description: 'Indeks komposit kinerja rata-rata industri reksa dana pasar uang, pendapatan tetap, campuran, dan saham.',
        keywords: ['Indeks reksa dana saham', 'Indeks reksa dana pasar uang', 'Benchmark industri reksa dana'],
        items: [
          { id: 'indeks-reksa-dana-saham', name: 'Indeks reksa dana saham', slug: 'indeks-reksa-dana-saham', description: 'Mengukur rata-rata kinerja seluruh reksa dana saham di Indonesia.', keywords: ['indeks reksa dana saham'] },
          { id: 'indeks-reksa-dana-pendapatan-tetap', name: 'Indeks reksa dana pendapatan tetap', slug: 'indeks-reksa-dana-pendapatan-tetap', description: 'Benchmark kinerja kelompok reksa dana berbasis obligasi.', keywords: ['indeks pendapatan tetap'] },
          { id: 'indeks-reksa-dana-pasar-uang', name: 'Indeks reksa dana pasar uang', slug: 'indeks-reksa-dana-pasar-uang', description: 'Benchmark rata-rata hasil instrumen pasar uang bebas risiko.', keywords: ['indeks pasar uang'] },
          { id: 'indeks-reksa-dana-campuran', name: 'Indeks reksa dana campuran', slug: 'indeks-reksa-dana-campuran', description: 'Tolok ukur kelompok reksa dana berimbang saham dan obligasi.', keywords: ['indeks reksa dana campuran'] },
          { id: 'indeks-reksa-dana-syariah', name: 'Indeks reksa dana syariah', slug: 'indeks-reksa-dana-syariah', description: 'Kinerja agregat seluruh reksa dana yang bersertifikat syariah.', keywords: ['indeks reksa dana syariah'] },
          { id: 'nilai-indeks-reksa-dana', name: 'Nilai indeks reksa dana', slug: 'nilai-indeks-reksa-dana', description: 'Poin indeks industri reksa dana teraktual.', keywords: ['nilai indeks industri'] },
          { id: 'grafik-indeks-reksa-dana', name: 'Grafik indeks reksa dana', slug: 'grafik-indeks-reksa-dana', description: 'Visualisasi tren pergerakan industri pengelolaan dana nasional.', keywords: ['grafik indeks mutual fund'] },
          { id: 'return-indeks-reksa-dana', name: 'Return indeks reksa dana', slug: 'return-indeks-reksa-dana', description: 'Persentase imbal hasil industri secara kolektif.', keywords: ['return rata rata industri'] }
        ]
      }
    ]
  },
  {
    id: 'deposito-tabungan',
    name: 'Deposito & Produk Tabungan',
    slug: 'deposito-tabungan',
    tagline: 'Perbandingan Suku Bunga Deposito Bank Nasional & Digital, Simulasi Pajak, Bunga LPS & BI-Rate',
    description: 'Pusat komparasi suku bunga deposito perbankan konvensional, digital, dan syariah terlengkap di Indonesia, dilengkapi kalkulator simulasi bunga bersih setelah pajak PPh 20% dan batas penjaminan LPS.',
    iconName: 'Landmark',
    keywords: [
      'Deposito',
      'Suku bunga deposito',
      'Bunga deposito tertinggi',
      'Simulasi deposito',
      'Kalkulator bunga deposito',
      'Bank digital deposito',
      'Bunga penjaminan LPS',
      'BI-Rate deposito',
      'Tabungan bunga tinggi'
    ],
    subcategories: [
      {
        id: 'daftar-produk-deposito',
        number: 1,
        name: 'Daftar produk deposito',
        slug: 'daftar-produk-deposito',
        description: 'Daftar produk simpanan deposito berjangka dari seluruh bank umum dan bank digital di Indonesia.',
        keywords: ['Daftar deposito bank', 'Deposito konvensional', 'Deposito bank digital', 'Deposito syariah', 'Deposito online'],
        items: [
          { id: 'daftar-deposito-seluruh-bank', name: 'Daftar deposito seluruh bank', slug: 'daftar-deposito-seluruh-bank', description: 'Katalog komprehensif produk deposito berjangka dari Bank BUKU IV, BPD, hingga Bank Digital.', keywords: ['daftar deposito bank indonesia'], requiresApiKey: true },
          { id: 'nama-produk-deposito', name: 'Nama produk deposito', slug: 'nama-produk-deposito', description: 'Nama komersial produk simpanan berjangka perbankan.', keywords: ['nama produk deposito bank'] },
          { id: 'nama-bank-penerbit', name: 'Nama bank penerbit', slug: 'nama-bank-penerbit', description: 'Institusi perbankan yang menerbitkan dan menjamin produk simpanan.', keywords: ['bank penerbit deposito'] },
          { id: 'jenis-deposito', name: 'Jenis deposito', slug: 'jenis-deposito', description: 'Klasifikasi: Deposito Berjangka, Sertifikat Deposito, atau Deposito On Call.', keywords: ['jenis deposito perbankan'] },
          { id: 'deposito-konvensional', name: 'Deposito konvensional', slug: 'deposito-konvensional', description: 'Simpanan berjangka dengan sistem bunga tetap per tahun (p.a.).', keywords: ['deposito konvensional'] },
          { id: 'deposito-syariah', name: 'Deposito syariah', slug: 'deposito-syariah', description: 'Simpanan berbasis akad Mudharabah Muthlaqah dengan nisbah bagi hasil kompetitif.', keywords: ['deposito syariah mudharabah'] },
          { id: 'deposito-online', name: 'Deposito online', slug: 'deposito-online', description: 'Pembukaan deposito instan langsung dari aplikasi mobile banking tanpa ke kantor cabang.', keywords: ['deposito online mobile banking'] },
          { id: 'deposito-bank-digital', name: 'Deposito bank digital', slug: 'deposito-bank-digital', description: 'Produk deposito dengan bunga agresif hingga 6% - 8.75% dari neobank (SeaBank, Krom, Jago, dll).', keywords: ['deposito bank digital bunga tinggi'] },
          { id: 'deposito-valas', name: 'Deposito valas', slug: 'deposito-valas', description: 'Simpanan mata uang asing (USD, SGD, EUR, AUD, CNY) dengan bunga valuta asing.', keywords: ['deposito valas USD'] },
          { id: 'status-produk-deposito', name: 'Status produk deposito', slug: 'status-produk-deposito', description: 'Informasi ketersediaan promo suku bunga spesial periode saat ini.', keywords: ['promo bunga deposito'] }
        ]
      },
      {
        id: 'suku-bunga-deposito',
        number: 2,
        name: 'Suku Bunga Deposito',
        slug: 'suku-bunga-deposito',
        description: 'Update suku bunga deposito perbankan tenor 1, 3, 6, 12, hingga 36 bulan terlengkap.',
        keywords: ['Suku bunga deposito terbaru', 'Bunga deposito 1 bulan', 'Bunga deposito 12 bulan', 'Ranking bunga deposito'],
        items: [
          { id: 'suku-bunga-deposito-terbaru', name: 'Suku bunga deposito terbaru', slug: 'suku-bunga-deposito-terbaru', description: 'Tabel suku bunga deposito terupdate dari bank konvensional dan digital hari ini.', keywords: ['suku bunga deposito hari ini', 'update bunga deposito'], requiresApiKey: true },
          { id: 'suku-bunga-deposito-1-bulan', name: 'Suku bunga deposito 1 bulan', slug: 'suku-bunga-deposito-1-bulan', description: 'Tingkat bunga untuk penempatan tenor super pendek 1 bulan (30 hari).', keywords: ['bunga deposito 1 bulan'] },
          { id: 'suku-bunga-deposito-3-bulan', name: 'Suku bunga deposito 3 bulan', slug: 'suku-bunga-deposito-3-bulan', description: 'Suku bunga tenor 3 bulan paling populer untuk penempatan dana jangka pendek.', keywords: ['bunga deposito 3 bulan'] },
          { id: 'suku-bunga-deposito-6-bulan', name: 'Suku bunga deposito 6 bulan', slug: 'suku-bunga-deposito-6-bulan', description: 'Suku bunga untuk komitmen penempatan 6 bulan (setengah tahun).', keywords: ['bunga deposito 6 bulan'] },
          { id: 'suku-bunga-deposito-12-bulan', name: 'Suku bunga deposito 12 bulan', slug: 'suku-bunga-deposito-12-bulan', description: 'Suku bunga penempatan 1 tahun penuh dengan imbal hasil maksimal.', keywords: ['bunga deposito 12 bulan 1 tahun'] },
          { id: 'suku-bunga-deposito-24-bulan', name: 'Suku bunga deposito 24 bulan', slug: 'suku-bunga-deposito-24-bulan', description: 'Suku bunga deposito tenor 2 tahun untuk mengunci tingkat bunga.', keywords: ['bunga deposito 2 tahun'] },
          { id: 'suku-bunga-deposito-36-bulan', name: 'Suku bunga deposito 36 bulan', slug: 'suku-bunga-deposito-36-bulan', description: 'Suku bunga tenor 3 tahun untuk kepastian pendapatan pasif jangka panjang.', keywords: ['bunga deposito 3 tahun'] },
          { id: 'suku-bunga-berdasarkan-nominal-penempatan', name: 'Suku bunga berdasarkan nominal penempatan', slug: 'suku-bunga-berdasarkan-nominal-penempatan', description: 'Tiering rate: bunga bertingkat sesuai besaran saldo dana nasabah (contoh: di bawah 100jt vs di atas 1M).', keywords: ['tiering suku bunga deposito'] },
          { id: 'suku-bunga-deposito-tertinggi', name: 'Suku bunga deposito tertinggi', slug: 'suku-bunga-deposito-tertinggi', description: 'Daftar bank dengan penawaran bunga deposito paling menguntungkan.', keywords: ['bunga deposito paling tinggi'] },
          { id: 'suku-bunga-deposito-terendah', name: 'Suku bunga deposito terendah', slug: 'suku-bunga-deposito-terendah', description: 'Daftar bunga deposito terendah (biasanya bank BUKU IV dengan likuiditas melimpah).', keywords: ['bunga deposito terendah'] },
          { id: 'riwayat-perubahan-suku-bunga-deposito', name: 'Riwayat perubahan suku bunga deposito', slug: 'riwayat-perubahan-suku-bunga-deposito', description: 'Arsip penyesuaian suku bunga deposito merespon perubahan BI-Rate.', keywords: ['riwayat perubahan bunga deposito'] },
          { id: 'ranking-bunga-deposito-antarbank', name: 'Ranking bunga deposito antarbank', slug: 'ranking-bunga-deposito-antarbank', description: 'Klasemen suku bunga deposito dari bunga tertinggi ke terendah seluruh bank.', keywords: ['ranking bunga deposito antarbank'] },
          { id: 'perbandingan-bunga-deposito-bank-digital', name: 'Perbandingan bunga deposito bank digital', slug: 'perbandingan-bunga-deposito-bank-digital', description: 'Komparasi suku bunga SeaBank, Bank Jago, Krom Bank, Neobank, Allo Bank.', keywords: ['komparasi bunga bank digital'] },
          { id: 'perbandingan-bunga-deposito-bank-konvensional', name: 'Perbandingan bunga deposito bank konvensional', slug: 'perbandingan-bunga-deposito-bank-konvensional', description: 'Perbandingan bunga deposito BCA, Mandiri, BRI, BNI, CIMB Niaga, Permata.', keywords: ['bunga deposito BCA Mandiri BRI BNI'] },
          { id: 'perbandingan-bunga-deposito-syariah', name: 'Perbandingan bunga deposito syariah', slug: 'perbandingan-bunga-deposito-syariah', description: 'Indikasi tingkat imbal hasil deposito syariah (BSI, BCA Syariah, Muamalat).', keywords: ['bagi hasil deposito syariah'] }
        ]
      },
      {
        id: 'ketentuan-dan-biaya-deposito',
        number: 3,
        name: 'Ketentuan dan Biaya Deposito',
        slug: 'ketentuan-dan-biaya-deposito',
        description: 'Ketentuan minimum saldo, penalti pencairan awal, pajak bunga deposito 20%, dan fasilitas ARO.',
        keywords: ['Pajak bunga deposito', 'Penalti pencairan deposito', 'Automatic Rollover ARO', 'Minimal penempatan deposito'],
        items: [
          { id: 'minimum-penempatan-deposito', name: 'Minimum penempatan deposito', slug: 'minimum-penempatan-deposito', description: 'Syarat modal minimal untuk membuka bilyet deposito (mulai Rp 100.000 di bank digital hingga Rp 10.000.000 di bank konvensional).', keywords: ['minimal uang deposito'] },
          { id: 'maksimum-penempatan-deposito', name: 'Maksimum penempatan deposito', slug: 'maksimum-penempatan-deposito', description: 'Batas plafon simpanan per akun nasabah.', keywords: ['maksimal deposito'] },
          { id: 'pilihan-tenor-deposito', name: 'Pilihan tenor deposito', slug: 'pilihan-tenor-deposito', description: 'Fleksibilitas jangka waktu: 1, 3, 6, 12 bulan atau tenor harian (flexi).', keywords: ['tenor deposito'] },
          { id: 'frekuensi-pembayaran-bunga', name: 'Frekuensi pembayaran bunga', slug: 'frekuensi-pembayaran-bunga', description: 'Jadwal pengiriman hasil bunga ke rekening tabungan nasabah.', keywords: ['pembayaran bunga deposito'] },
          { id: 'sistem-pembayaran-bunga', name: 'Sistem pembayaran bunga', slug: 'sistem-pembayaran-bunga', description: 'Metode pengkreditan bunga simpanan.', keywords: ['sistem bunga deposito'] },
          { id: 'bunga-dibayar-di-muka', name: 'Bunga dibayar di muka', slug: 'bunga-dibayar-di-muka', description: 'Fasilitas di mana bunga langsung diterima di awal saat penempatan saldo.', keywords: ['bunga deposito bayar di awal'] },
          { id: 'bunga-dibayar-bulanan', name: 'Bunga dibayar bulanan', slug: 'bunga-dibayar-bulanan', description: 'Sistem pembayaran bunga rutin yang ditransfer setiap bulan sebagai passive income.', keywords: ['bunga deposito bulanan'] },
          { id: 'bunga-dibayar-saat-jatuh-tempo', name: 'Bunga dibayar saat jatuh tempo', slug: 'bunga-dibayar-saat-jatuh-tempo', description: 'Bunga pokok dan imbal hasil dicairkan serentak di akhir masa perjanjian.', keywords: ['bunga saat jatuh tempo'] },
          { id: 'biaya-pencairan-deposito', name: 'Biaya pencairan deposito', slug: 'biaya-pencairan-deposito', description: 'Biaya materai atau biaya administrasi pemindahan dana saat jatuh tempo.', keywords: ['biaya pencairan deposito'] },
          { id: 'penalti-pencairan-sebelum-jatuh-tempo', name: 'Penalti pencairan sebelum jatuh tempo', slug: 'penalti-pencairan-sebelum-jatuh-tempo', description: 'Denda atau hangusnya hak bunga jika deposito dicairkan mendadak sebelum jatuh tempo.', keywords: ['penalti break deposito'] },
          { id: 'pajak-bunga-deposito', name: 'Pajak bunga deposito', slug: 'pajak-bunga-deposito', description: 'Pajak Penghasilan (PPh) Final sebesar 20% untuk saldo penempatan di atas Rp 7.500.000.', keywords: ['pajak deposito 20 persen', 'PPh bunga deposito'], requiresApiKey: true },
          { id: 'fasilitas-automatic-rollover-aro', name: 'Fasilitas automatic rollover (ARO)', slug: 'fasilitas-automatic-rollover-aro', description: 'Perpanjangan pokok deposito secara otomatis setelah periode berakhir.', keywords: ['fasilitas ARO deposito'] },
          { id: 'fasilitas-aro-plus', name: 'Fasilitas ARO plus', slug: 'fasilitas-aro-plus', description: 'Perpanjangan pokok ditambah akumulasi bunga yang diperoleh (compound rollover).', keywords: ['ARO plus bunga berbunga'] },
          { id: 'ketentuan-perpanjangan-deposito', name: 'Ketentuan perpanjangan deposito', slug: 'ketentuan-perpanjangan-deposito', description: 'Syarat dan mekanisme notifikasi sebelum perpanjangan otomatis berjalan.', keywords: ['perpanjangan deposito'] }
        ]
      },
      {
        id: 'simulasi-dan-kalkulator-deposito',
        number: 4,
        name: 'Simulasi dan Kalkulator Deposito',
        slug: 'simulasi-dan-kalkulator-deposito',
        description: 'Kalkulator bunga deposito interaktif: hitung keuntungan bersih setelah dipotong pajak 20%.',
        keywords: ['Kalkulator deposito', 'Simulasi bunga deposito', 'Hitung keuntungan deposito', 'Bunga bersih setelah pajak'],
        items: [
          { id: 'kalkulator-bunga-deposito', name: 'Kalkulator bunga deposito', slug: 'kalkulator-bunga-deposito', description: 'Alat bantu hitung bunga deposito kotor dan bersih dengan rumus akurat perbankan.', keywords: ['kalkulator bunga deposito online'], requiresApiKey: true },
          { id: 'simulasi-keuntungan-deposito', name: 'Simulasi keuntungan deposito', slug: 'simulasi-keuntungan-deposito', description: 'Simulasi proyeksi uang tunai yang akan diterima di akhir periode.', keywords: ['simulasi keuntungan deposito'] },
          { id: 'simulasi-bunga-deposito-setelah-pajak', name: 'Simulasi bunga deposito setelah pajak', slug: 'simulasi-bunga-deposito-setelah-pajak', description: 'Perhitungan riil setelah dipotong pajak PPh 20% (Rumus: Bunga Kotor x 80%).', keywords: ['hitung bunga deposito setelah pajak'] },
          { id: 'simulasi-deposito-berdasarkan-nominal', name: 'Simulasi deposito berdasarkan nominal', slug: 'simulasi-deposito-berdasarkan-nominal', description: 'Hitung hasil deposito untuk nominal Rp 10 juta, 50 juta, 100 juta, hingga 1 Milyar.', keywords: ['deposito 100 juta dapat bunga berapa'] },
          { id: 'simulasi-deposito-berdasarkan-tenor', name: 'Simulasi deposito berdasarkan tenor', slug: 'simulasi-deposito-berdasarkan-tenor', description: 'Bandingkan perolehan keuntungan antara tenor 1, 3, 6, dan 12 bulan.', keywords: ['perbandingan tenor simulasi'] },
          { id: 'simulasi-deposito-berdasarkan-bank', name: 'Simulasi deposito berdasarkan bank', slug: 'simulasi-deposito-berdasarkan-bank', description: 'Masukkan nama bank untuk langsung menerapkan suku bunga resmi bank tersebut.', keywords: ['simulasi deposito bank tertentu'] },
          { id: 'simulasi-pencairan-deposito', name: 'Simulasi pencairan deposito', slug: 'simulasi-pencairan-deposito', description: 'Kalkulasi pengembalian pokok dan pemotongan penalti jika dicairkan prematur.', keywords: ['simulasi break deposito'] },
          { id: 'perhitungan-nilai-jatuh-tempo', name: 'Perhitungan nilai jatuh tempo', slug: 'perhitungan-nilai-jatuh-tempo', description: 'Total pengembalian dana pokok ditambah akumulasi bunga bersih saat maturity.', keywords: ['nilai jatuh tempo deposito'] },
          { id: 'perbandingan-hasil-deposito-antarbank', name: 'Perbandingan hasil deposito antarbank', slug: 'perbandingan-hasil-deposito-antarbank', description: 'Bandingkan langsung selisih untung jika menaruh uang di Bank Mandiri vs SeaBank vs Krom.', keywords: ['komparasi keuntungan deposito antarbank'] }
        ]
      },
      {
        id: 'daftar-produk-tabungan',
        number: 5,
        name: 'Daftar Produk Tabungan',
        slug: 'daftar-produk-tabungan',
        description: 'Katalog produk tabungan reguler, tabungan digital, tabungan berjangka, haji, dan valas.',
        keywords: ['Tabungan bank', 'Tabungan digital bunga harian', 'Tabungan berjangka', 'Tabungan syariah'],
        items: [
          { id: 'daftar-produk-tabungan-seluruh-bank', name: 'Daftar produk tabungan seluruh bank', slug: 'daftar-produk-tabungan-seluruh-bank', description: 'Daftar ratusan rekening tabungan dari bank nasional dan swasta di Indonesia.', keywords: ['daftar rekening tabungan bank'], requiresApiKey: true },
          { id: 'nama-produk-tabungan', name: 'Nama produk tabungan', slug: 'nama-produk-tabungan', description: 'Nama varian simpanan (misal: Tahapan BCA, BritAma, Mandiri Tabungan NOW).', keywords: ['nama tabungan'] },
          { id: 'nama-bank-penerbit-tabungan', name: 'Nama bank penerbit', slug: 'nama-bank-penerbit-tabungan', description: 'Bank yang menyediakan fasilitas rekening tabungan.', keywords: ['bank penerbit tabungan'] },
          { id: 'tabungan-reguler', name: 'Tabungan reguler', slug: 'tabungan-reguler', description: 'Rekening simpanan umum sehari-hari yang dilengkapi kartu debit fisik.', keywords: ['tabungan reguler bank'] },
          { id: 'tabungan-digital', name: 'Tabungan digital', slug: 'tabungan-digital', description: 'Rekening tanpa buku tabungan dengan bunga harian tinggi dan bebas biaya admin.', keywords: ['tabungan digital tanpa biaya admin'] },
          { id: 'tabungan-syariah', name: 'Tabungan syariah', slug: 'tabungan-syariah', description: 'Simpanan berbasis akad Wadiah (titipan) atau Mudharabah (bagi hasil).', keywords: ['tabungan syariah wadiah'] },
          { id: 'tabungan-berjangka', name: 'Tabungan berjangka', slug: 'tabungan-berjangka', description: 'Simpanan autodebet bulanan dengan target jangka waktu dan perlindungan asuransi jiwa.', keywords: ['tabungan berjangka autodebet'] },
          { id: 'tabungan-rencana', name: 'Tabungan rencana', slug: 'tabungan-rencana', description: 'Solusi menabung disiplin untuk rencana liburan, pendidikan anak, atau pernikahan.', keywords: ['tabungan rencana'] },
          { id: 'tabungan-bisnis', name: 'Tabungan bisnis', slug: 'tabungan-bisnis', description: 'Rekening dengan limit transaksi besar dan deskripsi mutasi rekening yang lebih detail.', keywords: ['tabungan bisnis'] },
          { id: 'tabungan-payroll', name: 'Tabungan payroll', slug: 'tabungan-payroll', description: 'Rekening penerimaan gaji karyawan dengan bebas biaya administrasi bulanan.', keywords: ['tabungan gaji payroll'] },
          { id: 'tabungan-anak', name: 'Tabungan anak', slug: 'tabungan-anak', description: 'Rekening khusus untuk mengenalkan literasi finansial sejak dini kepada anak.', keywords: ['tabungan anak'] },
          { id: 'tabungan-pelajar', name: 'Tabungan pelajar', slug: 'tabungan-pelajar', description: 'Simpanan SimPel (Simpanan Pelajar) inisiasi OJK tanpa biaya administrasi.', keywords: ['tabungan simpel pelajar OJK'] },
          { id: 'tabunganku', name: 'TabunganKu', slug: 'tabunganku', description: 'Program tabungan bersama perbankan nasional bebas biaya administrasi bulanan.', keywords: ['tabunganku bebas biaya admin'] },
          { id: 'tabungan-valas', name: 'Tabungan valas', slug: 'tabungan-valas', description: 'Rekening tabungan mata uang asing untuk kebutuhan traveling atau transaksi internasional.', keywords: ['tabungan valas'] },
          { id: 'tabungan-multicurrency', name: 'Tabungan multicurrency', slug: 'tabungan-multicurrency', description: 'Satu kartu debit dan satu rekening yang mendukung hingga puluhan mata uang dunia.', keywords: ['tabungan multicurrency'] },
          { id: 'tabungan-haji', name: 'Tabungan haji', slug: 'tabungan-haji', description: 'Tabungan terintegrasi SISKOHAT Kementerian Agama untuk mendapatkan porsi antrean haji.', keywords: ['tabungan haji Kemenag'] },
          { id: 'tabungan-umrah', name: 'Tabungan umrah', slug: 'tabungan-umrah', description: 'Rencana simpanan terarah untuk ibadah umrah ke tanah suci.', keywords: ['tabungan umrah'] },
          { id: 'status-produk-tabungan', name: 'Status produk tabungan', slug: 'status-produk-tabungan', description: 'Status keterbukaan registrasi nasabah baru secara digital.', keywords: ['buka rekening online'] }
        ]
      },
      {
        id: 'suku-bunga-tabungan',
        number: 6,
        name: 'Suku Bunga Tabungan',
        slug: 'suku-bunga-tabungan',
        description: 'Tabel suku bunga tabungan reguler, perbandingan bunga bank digital vs konvensional.',
        keywords: ['Suku bunga tabungan', 'Bunga tabungan tertinggi', 'Bunga tabungan bank digital', 'Perbandingan bunga tabungan'],
        items: [
          { id: 'suku-bunga-tabungan-terbaru', name: 'Suku bunga tabungan terbaru', slug: 'suku-bunga-tabungan-terbaru', description: 'Daftar suku bunga simpanan tabungan terupdate seluruh bank.', keywords: ['suku bunga tabungan hari ini'], requiresApiKey: true },
          { id: 'suku-bunga-tabungan-berdasarkan-saldo', name: 'Suku bunga tabungan berdasarkan saldo', slug: 'suku-bunga-tabungan-berdasarkan-saldo', description: 'Tingkat bunga berjenjang (tier) sesuai jumlah saldo mengendap.', keywords: ['tiering bunga tabungan'] },
          { id: 'suku-bunga-tabungan-reguler', name: 'Suku bunga tabungan reguler', slug: 'suku-bunga-tabungan-reguler', description: 'Bunga tabungan bank konvensional (umumnya 0% hingga 0.5% p.a.).', keywords: ['bunga tabungan reguler'] },
          { id: 'suku-bunga-tabungan-digital', name: 'Suku bunga tabungan digital', slug: 'suku-bunga-tabungan-digital', description: 'Bunga tabungan neobank yang mencapai 3% - 5% p.a. dihitung harian.', keywords: ['bunga tabungan digital'] },
          { id: 'suku-bunga-tabungan-berjangka', name: 'Suku bunga tabungan berjangka', slug: 'suku-bunga-tabungan-berjangka', description: 'Bunga khusus tabungan rencana yang lebih tinggi dari tabungan reguler.', keywords: ['bunga tabungan berjangka'] },
          { id: 'suku-bunga-tabungan-syariah', name: 'Suku bunga tabungan syariah', slug: 'suku-bunga-tabungan-syariah', description: 'Indikasi rate imbalan bagi hasil tabungan syariah.', keywords: ['bagi hasil tabungan syariah'] },
          { id: 'suku-bunga-tabungan-valas', name: 'Suku bunga tabungan valas', slug: 'suku-bunga-tabungan-valas', description: 'Tingkat bunga untuk saldo mata uang asing US Dollar atau SGD.', keywords: ['bunga simpanan valas'] },
          { id: 'suku-bunga-tabungan-tertinggi', name: 'Suku bunga tabungan tertinggi', slug: 'suku-bunga-tabungan-tertinggi', description: 'Daftar tabungan dengan bunga tertinggi yang dibayar harian.', keywords: ['bunga tabungan paling tinggi'] },
          { id: 'suku-bunga-tabungan-terendah', name: 'Suku bunga tabungan terendah', slug: 'suku-bunga-tabungan-terendah', description: 'Daftar rekening dengan imbal hasil rendah.', keywords: ['bunga tabungan terendah'] },
          { id: 'riwayat-perubahan-suku-bunga-tabungan', name: 'Riwayat perubahan suku bunga tabungan', slug: 'riwayat-perubahan-suku-bunga-tabungan', description: 'Catatan tren perubahan bunga simpanan perbankan dari tahun ke tahun.', keywords: ['riwayat suku bunga tabungan'] },
          { id: 'ranking-bunga-tabungan-antarbank', name: 'Ranking bunga tabungan antarbank', slug: 'ranking-bunga-tabungan-antarbank', description: 'Peringkat bunga simpanan tabungan bank se-Indonesia.', keywords: ['ranking bunga tabungan'] },
          { id: 'perbandingan-bunga-tabungan-bank-digital', name: 'Perbandingan bunga tabungan bank digital', slug: 'perbandingan-bunga-tabungan-bank-digital', description: 'Komparasi bunga harian SeaBank, Jago, Neobank, Superbank, Krom.', keywords: ['bunga tabungan seabank jago krom'] },
          { id: 'perbandingan-bunga-tabungan-bank-konvensional', name: 'Perbandingan bunga tabungan bank konvensional', slug: 'perbandingan-bunga-tabungan-bank-konvensional', description: 'Perbandingan rate tabungan BCA, Mandiri, BRI, BNI.', keywords: ['bunga tabungan bca bri bni'] }
        ]
      },
      {
        id: 'ketentuan-dan-biaya-tabungan',
        number: 7,
        name: 'Ketentuan dan Biaya Tabungan',
        slug: 'ketentuan-dan-biaya-tabungan',
        description: 'Rincian biaya administrasi bulanan, biaya kartu ATM, saldo minimum, dan limit transaksi harian.',
        keywords: ['Biaya admin tabungan', 'Saldo minimum tabungan', 'Limit transfer harian', 'Biaya tarik tunai'],
        items: [
          { id: 'minimum-saldo-pembukaan', name: 'Minimum saldo pembukaan', slug: 'minimum-saldo-pembukaan', description: 'Setoran awal saat pertama kali membuka rekening bank (Rp 0 s/d Rp 500.000).', keywords: ['setoran awal tabungan'] },
          { id: 'minimum-saldo-mengendap', name: 'Minimum saldo mengendap', slug: 'minimum-saldo-mengendap', description: 'Saldo tertahan yang tidak bisa ditarik atau ditransfer nasabah.', keywords: ['saldo mengendap tabungan'] },
          { id: 'saldo-minimum-bulanan', name: 'Saldo minimum bulanan', slug: 'saldo-minimum-bulanan', description: 'Rata-rata saldo agar terhindar dari denda penalti biaya tambahan.', keywords: ['saldo minimum bulanan'] },
          { id: 'biaya-administrasi-bulanan', name: 'Biaya administrasi bulanan', slug: 'biaya-administrasi-bulanan', description: 'Biaya potongan rutin pemeliharaan rekening per bulan (Rp 0 s/d Rp 20.000).', keywords: ['biaya admin bulanan bank'], requiresApiKey: true },
          { id: 'biaya-kartu-atm', name: 'Biaya kartu ATM', slug: 'biaya-kartu-atm', description: 'Biaya pemeliharaan kartu debit fisik (GPN, Mastercard, Visa).', keywords: ['biaya kartu debit bulanan'] },
          { id: 'biaya-transfer', name: 'Biaya transfer', slug: 'biaya-transfer', description: 'Biaya transfer antarbank (BI-FAST Rp 2.500 vs Realtime Online Rp 6.500).', keywords: ['biaya transfer bi fast'] },
          { id: 'biaya-tarik-tunai', name: 'Biaya tarik tunai', slug: 'biaya-tarik-tunai', description: 'Biaya penarikan di ATM bank lain atau ATM Link/Bersama/Prima.', keywords: ['biaya tarik tunai atm'] },
          { id: 'biaya-penutupan-rekening', name: 'Biaya penutupan rekening', slug: 'biaya-penutupan-rekening', description: 'Biaya administrasi yang dikenakan saat menutup rekening simpanan.', keywords: ['biaya tutup rekening bank'] },
          { id: 'biaya-saldo-di-bawah-minimum', name: 'Biaya saldo di bawah minimum', slug: 'biaya-saldo-di-bawah-minimum', description: 'Denda yang dipotong otomatis jika saldo rata-rata bulanan berada di bawah batas.', keywords: ['denda saldo minimum'] },
          { id: 'batas-transaksi-harian', name: 'Batas transaksi harian', slug: 'batas-transaksi-harian', description: 'Plafon akumulasi nominal transaksi harian nasabah.', keywords: ['batas transaksi bank'] },
          { id: 'limit-transfer-harian', name: 'Limit transfer harian', slug: 'limit-transfer-harian', description: 'Batas maksimal pengiriman uang antarbank per hari melalui mobile banking.', keywords: ['limit transfer harian'] },
          { id: 'limit-tarik-tunai-harian', name: 'Limit tarik tunai harian', slug: 'limit-tarik-tunai-harian', description: 'Maksimal uang tunai yang dapat ditarik di mesin ATM dalam 24 jam.', keywords: ['limit tarik tunai'] },
          { id: 'jumlah-transaksi-gratis', name: 'Jumlah transaksi gratis', slug: 'jumlah-transaksi-gratis', description: 'Kuota bebas biaya transfer atau tarik tunai per bulan yang diberikan bank digital.', keywords: ['kuota gratis transfer'] },
          { id: 'syarat-saldo-untuk-mendapatkan-bunga', name: 'Syarat saldo untuk mendapatkan bunga', slug: 'syarat-saldo-untuk-mendapatkan-bunga', description: 'Saldo minimum yang wajib dipenuhi agar bunga tabungan mulai dihitung.', keywords: ['syarat dapat bunga tabungan'] }
        ]
      },
      {
        id: 'produk-tabungan-digital',
        number: 8,
        name: 'Produk Tabungan Digital',
        slug: 'produk-tabungan-digital',
        description: 'Evolusi perbankan modern: fitur kantong (pocket), auto-save, bunga cair harian, dan bunga bertingkat.',
        keywords: ['Bank digital indonesia', 'Fitur kantong tabungan', 'Bunga harian bank digital', 'Auto-save tabungan'],
        items: [
          { id: 'daftar-bank-digital', name: 'Daftar bank digital', slug: 'daftar-bank-digital', description: 'Katalog seluruh bank digital resmi berizin OJK di Indonesia.', keywords: ['daftar bank digital indonesia'] },
          { id: 'daftar-produk-tabungan-bank-digital', name: 'Daftar produk tabungan bank digital', slug: 'daftar-produk-tabungan-bank-digital', description: 'Semua variasi produk simpanan aplikasi neobank.', keywords: ['produk bank digital'] },
          { id: 'suku-bunga-tabungan-bank-digital', name: 'Suku bunga tabungan bank digital', slug: 'suku-bunga-tabungan-bank-digital', description: 'Update rate simpanan bank digital yang sangat kompetitif.', keywords: ['bunga tabungan bank digital'], requiresApiKey: true },
          { id: 'suku-bunga-deposito-bank-digital', name: 'Suku bunga deposito bank digital', slug: 'suku-bunga-deposito-bank-digital', description: 'Tingkat bunga deposito neobank tenor fleksibel.', keywords: ['bunga deposito bank digital'] },
          { id: 'minimum-saldo-bank-digital', name: 'Minimum saldo bank digital', slug: 'minimum-saldo-bank-digital', description: 'Sebagian besar bank digital menerapkan syarat saldo Rp 0.', keywords: ['minimum saldo neobank'] },
          { id: 'biaya-administrasi-bank-digital', name: 'Biaya administrasi bank digital', slug: 'biaya-administrasi-bank-digital', description: 'Transparansi biaya administrasi yang umumnya gratis tanpa syarat.', keywords: ['biaya admin bank digital'] },
          { id: 'limit-transaksi-bank-digital', name: 'Limit transaksi bank digital', slug: 'limit-transaksi-bank-digital', description: 'Fleksibilitas limit transfer hingga ratusan juta rupiah per hari.', keywords: ['limit transaksi bank digital'] },
          { id: 'fitur-kantong-atau-subrekening', name: 'Fitur kantong atau subrekening', slug: 'fitur-kantong-atau-subrekening', description: 'Kemudahan memisahkan pos keuangan (budgeting) dalam satu akun utama.', keywords: ['kantong jago pocket seabank'] },
          { id: 'fitur-tabungan-otomatis', name: 'Fitur tabungan otomatis', slug: 'fitur-tabungan-otomatis', description: 'Sistem autodebet berkala atau pembulatan transaksi belanja (round-up).', keywords: ['auto save tabungan'] },
          { id: 'fitur-bunga-harian', name: 'Fitur bunga harian', slug: 'fitur-bunga-harian', description: 'Bunga tabungan yang dihitung dan dibayarkan langsung setiap pagi ke rekening.', keywords: ['bunga cair harian'] },
          { id: 'fitur-bunga-bertingkat', name: 'Fitur bunga bertingkat', slug: 'fitur-bunga-bertingkat', description: 'Tingkat bunga yang semakin tinggi seiring bertambahnya saldo tabungan.', keywords: ['bunga bertingkat stepped interest'] }
        ]
      },
      {
        id: 'produk-tabungan-syariah',
        number: 9,
        name: 'Produk Tabungan Syariah',
        slug: 'produk-tabungan-syariah',
        description: 'Simpanan dan deposito bebas riba dengan akad Wadiah Yad Dhamanah dan Mudharabah Muthlaqah.',
        keywords: ['Tabungan syariah', 'Akad wadiah', 'Akad mudharabah', 'Nisbah bagi hasil syariah', 'BSI'],
        items: [
          { id: 'daftar-tabungan-syariah', name: 'Daftar tabungan syariah', slug: 'daftar-tabungan-syariah', description: 'Daftar rekening tabungan syariah dari BSI, BCA Syariah, Bank Muamalat, dll.', keywords: ['daftar tabungan syariah'] },
          { id: 'daftar-deposito-syariah', name: 'Daftar deposito syariah', slug: 'daftar-deposito-syariah', description: 'Produk deposito berjangka syariah di perbankan syariah nasional.', keywords: ['daftar deposito syariah'] },
          { id: 'nama-bank-syariah', name: 'Nama bank syariah', slug: 'nama-bank-syariah', description: 'Bank Umum Syariah (BUS) dan Unit Usaha Syariah (UUS) berizin OJK.', keywords: ['bank syariah indonesia'] },
          { id: 'jenis-akad-tabungan', name: 'Jenis akad tabungan', slug: 'jenis-akad-tabungan', description: 'Penjelasan akad titipan Wadiah Yad Dhamanah atau investasi Mudharabah.', keywords: ['akad wadiah tabungan'] },
          { id: 'jenis-akad-deposito', name: 'Jenis akad deposito', slug: 'jenis-akad-deposito', description: 'Akad kemitraan bagi hasil Mudharabah Muthlaqah.', keywords: ['akad mudharabah deposito'] },
          { id: 'nisbah-bagi-hasil-tabungan', name: 'Nisbah bagi hasil tabungan', slug: 'nisbah-bagi-hasil-tabungan', description: 'Porsi pembagian keuntungan antara nasabah (Shahibul Maal) dan bank (Mudharib).', keywords: ['nisbah bagi hasil tabungan'] },
          { id: 'nisbah-bagi-hasil-deposito', name: 'Nisbah bagi hasil deposito', slug: 'nisbah-bagi-hasil-deposito', description: 'Proporsi bagi hasil deposito (misal: 60% nasabah : 40% bank).', keywords: ['nisbah bagi hasil deposito'], requiresApiKey: true },
          { id: 'indikasi-tingkat-bagi-hasil', name: 'Indikasi tingkat bagi hasil', slug: 'indikasi-tingkat-bagi-hasil', description: 'Equivalent rate imbal hasil dalam satuan persentase tahunan.', keywords: ['equivalent rate syariah'] },
          { id: 'riwayat-bagi-hasil', name: 'Riwayat bagi hasil', slug: 'riwayat-bagi-hasil', description: 'Catatan historis realisasi bagi hasil bulanan bank syariah.', keywords: ['riwayat bagi hasil perbankan syariah'] },
          { id: 'minimum-penempatan-deposito-syariah', name: 'Minimum penempatan deposito syariah', slug: 'minimum-penempatan-deposito-syariah', description: 'Syarat setoran awal deposito berjangka syariah.', keywords: ['minimal penempatan deposito syariah'] },
          { id: 'tenor-deposito-syariah', name: 'Tenor deposito syariah', slug: 'tenor-deposito-syariah', description: 'Pilihan jangka waktu 1, 3, 6, 12 bulan sesuai prinsip syariah.', keywords: ['tenor deposito syariah'] }
        ]
      },
      {
        id: 'perbandingan-dan-ranking-deposito',
        number: 10,
        name: 'Perbandingan dan Ranking',
        slug: 'perbandingan-dan-ranking-deposito',
        description: 'Tabel komparasi bunga tertinggi, biaya administrasi, dan keuntungan bersih setelah pajak antarbank.',
        keywords: ['Ranking deposito terbaik', 'Komparasi tabungan antarbank', 'Perbandingan bunga deposito tertinggi', 'Perbandingan biaya tabungan'],
        items: [
          { id: 'ranking-deposito-berdasarkan-bunga-tertinggi', name: 'Ranking deposito berdasarkan bunga tertinggi', slug: 'ranking-deposito-berdasarkan-bunga-tertinggi', description: 'Daftar bank dengan penawaran bunga deposito paling menguntungkan.', keywords: ['ranking bunga deposito tertinggi'], requiresApiKey: true },
          { id: 'ranking-tabungan-berdasarkan-bunga-tertinggi', name: 'Ranking tabungan berdasarkan bunga tertinggi', slug: 'ranking-tabungan-berdasarkan-bunga-tertinggi', description: 'Daftar tabungan cair harian berbunga tinggi.', keywords: ['ranking bunga tabungan'] },
          { id: 'ranking-deposito-berdasarkan-tenor', name: 'Ranking deposito berdasarkan tenor', slug: 'ranking-deposito-berdasarkan-tenor', description: 'Bank terbaik untuk tenor 1 bulan vs 12 bulan.', keywords: ['deposito terbaik per tenor'] },
          { id: 'ranking-tabungan-berdasarkan-biaya-administrasi', name: 'Ranking tabungan berdasarkan biaya administrasi', slug: 'ranking-tabungan-berdasarkan-biaya-administrasi', description: 'Daftar tabungan dengan biaya admin termurah atau 100% gratis.', keywords: ['tabungan bebas biaya admin'] },
          { id: 'ranking-tabungan-berdasarkan-minimum-saldo', name: 'Ranking tabungan berdasarkan minimum saldo', slug: 'ranking-tabungan-berdasarkan-minimum-saldo', description: 'Rekening paling fleksibel tanpa saldo mengendap.', keywords: ['tabungan tanpa saldo mengendap'] },
          { id: 'perbandingan-deposito-antarbank', name: 'Perbandingan deposito antarbank', slug: 'perbandingan-deposito-antarbank', description: 'Matriks perbandingan bunga, tenor, dan fitur simpanan.', keywords: ['perbandingan deposito bank'] },
          { id: 'perbandingan-tabungan-antarbank', name: 'Perbandingan tabungan antarbank', slug: 'perbandingan-tabungan-antarbank', description: 'Perbandingan fasilitas transaksi dan kartu debit antarbank.', keywords: ['perbandingan tabungan'] },
          { id: 'perbandingan-deposito-bank-digital-comp', name: 'Perbandingan deposito bank digital', slug: 'perbandingan-deposito-bank-digital-comp', description: 'Head-to-head produk deposito neobank.', keywords: ['komparasi deposito neobank'] },
          { id: 'perbandingan-tabungan-bank-digital-comp', name: 'Perbandingan tabungan bank digital', slug: 'perbandingan-tabungan-bank-digital-comp', description: 'Head-to-head fitur tabungan dan transfer gratis neobank.', keywords: ['komparasi tabungan neobank'] },
          { id: 'perbandingan-deposito-syariah-comp', name: 'Perbandingan deposito syariah', slug: 'perbandingan-deposito-syariah-comp', description: 'Komparasi equivalent rate deposito antarbank syariah.', keywords: ['komparasi deposito syariah'] },
          { id: 'perbandingan-tabungan-syariah-comp', name: 'Perbandingan tabungan syariah', slug: 'perbandingan-tabungan-syariah-comp', description: 'Komparasi tabungan syariah wadiah dan mudharabah.', keywords: ['komparasi tabungan syariah'] },
          { id: 'perbandingan-keuntungan-deposito-setelah-pajak', name: 'Perbandingan keuntungan deposito setelah pajak', slug: 'perbandingan-keuntungan-deposito-setelah-pajak', description: 'Perbandingan uang bersih yang masuk ke rekening investor setelah dipotong PPh 20%.', keywords: ['keuntungan deposito setelah pajak net'] },
          { id: 'perbandingan-biaya-tabungan', name: 'Perbandingan biaya tabungan', slug: 'perbandingan-biaya-tabungan', description: 'Simulasi total biaya potongan per tahun di berbagai bank.', keywords: ['perbandingan potongan biaya tabungan'] }
        ]
      },
      {
        id: 'data-suku-bunga-acuan-dan-penjaminan',
        number: 11,
        name: 'Data Suku Bunga Acuan dan Penjaminan',
        slug: 'data-suku-bunga-acuan-dan-penjaminan',
        description: 'Tingkat bunga penjaminan LPS, BI-Rate historis, dan status keamanan simpanan dijamin negara.',
        keywords: ['Bunga penjaminan LPS', 'BI-Rate terbaru', 'Batas aman deposito LPS', 'Simpanan dijamin LPS'],
        items: [
          { id: 'suku-bunga-bi', name: 'Suku bunga BI', slug: 'suku-bunga-bi', description: 'Suku bunga kebijakan moneter Bank Indonesia (BI-Rate) penentu arah suku bunga perbankan.', keywords: ['suku bunga BI rate hari ini'], requiresApiKey: true },
          { id: 'bi-rate-historis', name: 'BI-Rate historis', slug: 'bi-rate-historis', description: 'Grafik dan arsip historis kenaikan/penurunan suku bunga acuan BI.', keywords: ['historis BI rate'] },
          { id: 'tingkat-bunga-penjaminan-lps', name: 'Tingkat bunga penjaminan LPS', slug: 'tingkat-bunga-penjaminan-lps', description: 'Batas suku bunga maksimal yang dijamin Lembaga Penjamin Simpanan (LPS) untuk bank umum dan BPR.', keywords: ['tingkat bunga LPS', 'batas penjaminan LPS'], requiresApiKey: true },
          { id: 'riwayat-perubahan-tingkat-bunga-penjaminan-lps', name: 'Riwayat perubahan tingkat bunga penjaminan LPS', slug: 'riwayat-perubahan-tingkat-bunga-penjaminan-lps', description: 'Catatan pengumuman berkala perubahan suku bunga penjaminan LPS.', keywords: ['riwayat suku bunga LPS'] },
          { id: 'perbandingan-bunga-deposito-dengan-bunga-penjaminan-lps', name: 'Perbandingan bunga deposito dengan bunga penjaminan LPS', slug: 'perbandingan-bunga-deposito-dengan-bunga-penjaminan-lps', description: 'Indikator apakah bunga deposito yang Anda terima aman dijamin LPS (di bawah/di atas batas LPS).', keywords: ['apakah bunga deposito dijamin LPS'] },
          { id: 'perbandingan-bunga-tabungan-dengan-bunga-penjaminan-lps', name: 'Perbandingan bunga tabungan dengan bunga penjaminan LPS', slug: 'perbandingan-bunga-tabungan-dengan-bunga-penjaminan-lps', description: 'Evaluasi jaminan simpanan tabungan perbankan.', keywords: ['tabungan dijamin LPS'] }
        ]
      },
      {
        id: 'screener-dan-visualisasi-deposito',
        number: 12,
        name: 'Screener dan Visualisasi',
        slug: 'screener-dan-visualisasi-deposito',
        description: 'Screener deposito perbankan interaktif dan grafik historis suku bunga perbankan nasional.',
        keywords: ['Screener deposito', 'Grafik bunga deposito', 'Grafik BI Rate', 'Visualisasi suku bunga bank'],
        items: [
          { id: 'screener-deposito-berdasarkan-bunga', name: 'Screener deposito berdasarkan bunga', slug: 'screener-deposito-berdasarkan-bunga', description: 'Cari penempatan deposito dengan return tertinggi sesuai target Anda.', keywords: ['screener deposito bunga'], requiresApiKey: true },
          { id: 'screener-deposito-berdasarkan-tenor', name: 'Screener deposito berdasarkan tenor', slug: 'screener-deposito-berdasarkan-tenor', description: 'Filter produk berdasarkan jangka waktu pencairan yang Anda butuhkan.', keywords: ['screener tenor deposito'] },
          { id: 'screener-deposito-berdasarkan-minimum-penempatan', name: 'Screener deposito berdasarkan minimum penempatan', slug: 'screener-deposito-berdasarkan-minimum-penempatan', description: 'Saring produk yang sesuai dengan kesiapan modal awal Anda.', keywords: ['filter modal deposito'] },
          { id: 'screener-deposito-berdasarkan-bank', name: 'Screener deposito berdasarkan bank', slug: 'screener-deposito-berdasarkan-bank', description: 'Filter khusus bank BUKU IV, BUMN, Swasta, Syariah, atau Bank Digital.', keywords: ['filter jenis bank deposito'] },
          { id: 'screener-tabungan-berdasarkan-bunga', name: 'Screener tabungan berdasarkan bunga', slug: 'screener-tabungan-berdasarkan-bunga', description: 'Cari tabungan dengan bunga harian tertinggi.', keywords: ['screener tabungan bunga'] },
          { id: 'screener-tabungan-berdasarkan-biaya', name: 'Screener tabungan berdasarkan biaya', slug: 'screener-tabungan-berdasarkan-biaya', description: 'Saring tabungan tanpa biaya admin bulanan sama sekali.', keywords: ['filter tabungan gratis admin'] },
          { id: 'screener-tabungan-berdasarkan-minimum-saldo', name: 'Screener tabungan berdasarkan minimum saldo', slug: 'screener-tabungan-berdasarkan-minimum-saldo', description: 'Cari rekening yang mengizinkan saldo Rp 0.', keywords: ['tabungan saldo nol rupiah'] },
          { id: 'screener-produk-berdasarkan-jenis-bank', name: 'Screener produk berdasarkan jenis bank', slug: 'screener-produk-berdasarkan-jenis-bank', description: 'Filter terpadu berdasarkan entitas perbankan.', keywords: ['screener jenis perbankan'] },
          { id: 'grafik-perbandingan-bunga-deposito', name: 'Grafik perbandingan bunga deposito', slug: 'grafik-perbandingan-bunga-deposito', description: 'Diagram batang visual suku bunga antarbank secara komparatif.', keywords: ['grafik bunga deposito'] },
          { id: 'grafik-perbandingan-bunga-tabungan', name: 'Grafik perbandingan bunga tabungan', slug: 'grafik-perbandingan-bunga-tabungan', description: 'Visualisasi sebaran suku bunga tabungan.', keywords: ['grafik bunga tabungan'] },
          { id: 'grafik-historis-suku-bunga-deposito', name: 'Grafik historis suku bunga deposito', slug: 'grafik-historis-suku-bunga-deposito', description: 'Tren suku bunga deposito rata-rata industri 5 tahun terakhir.', keywords: ['tren bunga deposito historis'] },
          { id: 'grafik-historis-suku-bunga-tabungan', name: 'Grafik historis suku bunga tabungan', slug: 'grafik-historis-suku-bunga-tabungan', description: 'Tren historis bunga tabungan perbankan Indonesia.', keywords: ['grafik historis tabungan'] },
          { id: 'grafik-perubahan-bi-rate', name: 'Grafik perubahan BI-Rate', slug: 'grafik-perubahan-bi-rate', description: 'Korelasi penyesuaian suku bunga acuan bank sentral.', keywords: ['grafik BI rate historis'] },
          { id: 'grafik-perubahan-tingkat-bunga-penjaminan-lps', name: 'Grafik perubahan tingkat bunga penjaminan LPS', slug: 'grafik-perubahan-tingkat-bunga-penjaminan-lps', description: 'Pergerakan batas maksimal penjaminan simpanan oleh LPS.', keywords: ['grafik LPS historis'] }
        ]
      }
    ]
  },
  {
    id: 'obligasi-pendapatan-tetap',
    name: 'Obligasi & Pendapatan Tetap',
    slug: 'obligasi-pendapatan-tetap',
    tagline: 'Pusat Data Pasar Surat Utang Negara, SBN Ritel, Sukuk & Obligasi Korporasi Indonesia',
    description: 'Informasi pasar obligasi Indonesia terlengkap: kuotasi yield SUN benchmark, jadwal penerbitan SBN ritel (ORI, SR, SBR, ST), peringkat utang Pefindo, kurva yield (ICBI), dan kalkulator imbal hasil investasi obligasi.',
    iconName: 'ShieldCheck',
    keywords: [
      'Obligasi',
      'SBN Ritel',
      'Surat Utang Negara',
      'Sukuk',
      'Yield Obligasi',
      'Pefindo Rating',
      'ORI',
      'SR',
      'FR Benchmark',
      'Obligasi Korporasi'
    ],
    subcategories: [
      {
        id: 'harga-dan-yield-obligasi-pemerintah',
        number: 1,
        name: 'Harga dan Yield Obligasi Pemerintah',
        slug: 'harga-dan-yield-obligasi-pemerintah',
        description: 'Kuotasi harga perdagangan dan tingkat imbal hasil (yield) Surat Utang Negara (SUN) seri benchmark dan non-benchmark.',
        keywords: [
          'Yield SUN 10 tahun',
          'Harga obligasi FR',
          'Yield to maturity obligasi',
          'Clean price SUN'
        ],
        items: [
          { id: 'yield-sun-benchmark-10-tahun', name: 'Yield SUN Benchmark 10 Tahun', slug: 'yield-sun-benchmark-10-tahun', description: 'Imbal hasil acuan obligasi pemerintah tenor 10 tahun penentu risk-free rate nasional.', keywords: ['yield SUN 10 tahun', 'benchmark 10Y RI'], requiresApiKey: true },
          { id: 'yield-sun-benchmark-5-tahun', name: 'Yield SUN Benchmark 5 Tahun', slug: 'yield-sun-benchmark-5-tahun', description: 'Imbal hasil SUN seri acuan bertenor 5 tahun untuk instrumen tenor menengah.', keywords: ['yield SUN 5 tahun'] },
          { id: 'harga-obligasi-pemerintah-seri-fr', name: 'Harga Obligasi Pemerintah Seri FR', slug: 'harga-obligasi-pemerintah-seri-fr', description: 'Kuotasi harga perdagangan pasar sekunder obligasi Fixed Rate (FR) terdaftar di BEI.', keywords: ['harga obligasi FR', 'harga SUN pasar sekunder'] },
          { id: 'kupon-sun-fixed-rate', name: 'Kupon SUN Fixed Rate', slug: 'kupon-sun-fixed-rate', description: 'Tingkat bunga kupon tetap yang dibayarkan pemerintah secara semi-annual.', keywords: ['kupon SUN FR', 'bunga obligasi negara'] },
          { id: 'clean-price-sun', name: 'Clean Price SUN', slug: 'clean-price-sun', description: 'Harga kuotasi obligasi tanpa memperhitungkan bunga berjalan (accrued interest).', keywords: ['clean price obligasi'] },
          { id: 'dirty-price-sun', name: 'Dirty Price SUN', slug: 'dirty-price-sun', description: 'Harga penyelesaian transaksi sesungguhnya mencakup clean price ditambah bunga berjalan.', keywords: ['dirty price obligasi'] },
          { id: 'yield-to-maturity-ytm-pemerintah', name: 'Yield to Maturity (YTM) Pemerintah', slug: 'yield-to-maturity-ytm-pemerintah', description: 'Total tingkat pengembalian yang diantisipasi investor jika memegang obligasi hingga jatuh tempo.', keywords: ['YTM obligasi negara', 'yield to maturity SUN'] },
          { id: 'accrued-interest-sun', name: 'Accrued Interest SUN', slug: 'accrued-interest-sun', description: 'Akumulasi bunga berjalan sejak tanggal pembayaran kupon terakhir hingga tanggal penyelesaian transaksi.', keywords: ['accrued interest obligasi', 'bunga berjalan SUN'] }
        ]
      },
      {
        id: 'harga-dan-yield-obligasi-korporasi',
        number: 2,
        name: 'Harga dan Yield Obligasi Korporasi',
        slug: 'harga-dan-yield-obligasi-korporasi',
        description: 'Pergerakan harga, yield, dan selisih imbal hasil obligasi yang diterbitkan oleh perusahaan BUMN dan swasta nasional.',
        keywords: [
          'Obligasi korporasi',
          'Credit spread',
          'Yield obligasi korporasi',
          'Kupon obligasi BUMN'
        ],
        items: [
          { id: 'harga-obligasi-korporasi', name: 'Harga Obligasi Korporasi', slug: 'harga-obligasi-korporasi', description: 'Daftar kuotasi harga pasar sekunder surat utang korporasi yang tercatat di Bursa Efek Indonesia.', keywords: ['harga obligasi korporasi'] },
          { id: 'yield-obligasi-korporasi', name: 'Yield Obligasi Korporasi', slug: 'yield-obligasi-korporasi', description: 'Tingkat yield to maturity obligasi swasta dan BUMN berdasarkan kuotasi pasar terkini.', keywords: ['yield obligasi korporasi'] },
          { id: 'credit-spread-korporasi', name: 'Credit Spread Korporasi', slug: 'credit-spread-korporasi', description: 'Selisih imbal hasil obligasi korporasi terhadap obligasi pemerintah bertenor setara sebagai premi risiko.', keywords: ['credit spread obligasi', 'risk premium obligasi'] },
          { id: 'kupon-obligasi-korporasi', name: 'Kupon Obligasi Korporasi', slug: 'kupon-obligasi-korporasi', description: 'Tingkat kupon tetap maupun mengambang yang dibayarkan emiten korporasi penerbit.', keywords: ['kupon obligasi korporasi'] },
          { id: 'daftar-emiten-penerbit-obligasi', name: 'Daftar Emiten Penerbit Obligasi', slug: 'daftar-emiten-penerbit-obligasi', description: 'Katalog perusahaan yang aktif menerbitkan obligasi berkelanjutan di pasar modal.', keywords: ['emiten obligasi BEI'] },
          { id: 'tenor-obligasi-korporasi', name: 'Tenor Obligasi Korporasi', slug: 'tenor-obligasi-korporasi', description: 'Jangka waktu jatuh tempo surat utang korporasi mulai dari 1 tahun hingga 10 tahun.', keywords: ['tenor obligasi'] }
        ]
      },
      {
        id: 'sbn-ritel-surat-berharga-negara',
        number: 3,
        name: 'SBN Ritel (Surat Berharga Negara)',
        slug: 'sbn-ritel-surat-berharga-negara',
        description: 'Instrumen investasi khusus investor Warga Negara Indonesia (WNI) yang aman dijamin undang-undang 100%.',
        keywords: [
          'SBN Ritel',
          'ORI Obligasi Negara Ritel',
          'SBR Savings Bond Ritel',
          'Kupon SBN ritel',
          'Midis SBN'
        ],
        items: [
          { id: 'ori-obligasi-negara-ritel', name: 'ORI (Obligasi Negara Ritel)', slug: 'ori-obligasi-negara-ritel', description: 'SBN ritel yang dapat diperdagangkan (tradable) di pasar sekunder antar-investor domestik.', keywords: ['ORI terbaru', 'obligasi negara ritel ORI'] },
          { id: 'sbr-savings-bond-ritel', name: 'SBR (Savings Bond Ritel)', slug: 'sbr-savings-bond-ritel', description: 'SBN ritel non-tradable dengan kupon floating with floor yang menyesuaikan suku bunga BI-Rate.', keywords: ['SBR terbaru', 'savings bond ritel kupon'] },
          { id: 'kupon-sbn-ritel', name: 'Kupon SBN Ritel', slug: 'kupon-sbn-ritel', description: 'Tingkat kupon bulanan yang ditransfer langsung ke rekening kas investor setiap tanggal 10 atau 15.', keywords: ['kupon SBN ritel', 'passive income SBN'] },
          { id: 'jadwal-penawaran-sbn-ritel', name: 'Jadwal Penawaran SBN Ritel', slug: 'jadwal-penawaran-sbn-ritel', description: 'Kalender masa penawaran penerbitan SBN Ritel tahun anggaran 2026 oleh Kemenkeu DJPPR.', keywords: ['jadwal SBN 2026', 'kalender emisi SBN ritel'] },
          { id: 'mitra-distribusi-midis-sbn', name: 'Mitra Distribusi (Midis) SBN', slug: 'mitra-distribusi-midis-sbn', description: 'Daftar bank umum, perusahaan efek, dan fintech APERD resmi mitra Kementerian Keuangan.', keywords: ['midis SBN kemenkeu', 'beli SBN di mana'] },
          { id: 'pembelian-minimum-dan-maksimum-sbn', name: 'Pembelian Minimum dan Maksimum SBN', slug: 'pembelian-minimum-dan-maksimum-sbn', description: 'Ketentuan kuota pemesanan: minimum Rp 1 juta dan maksimum hingga Rp 5 - 10 miliar.', keywords: ['minimum pembelian SBN'] },
          { id: 'early-redemption-sbn-ritel', name: 'Early Redemption SBN Ritel', slug: 'early-redemption-sbn-ritel', description: 'Fasilitas pencairan lebih awal tanpa denda bagi pemegang SBR setelah berjalan 1 tahun (maks 50%).', keywords: ['early redemption SBN', 'pencairan awal SBR'] }
        ]
      },
      {
        id: 'sukuk-surat-berharga-syariah-negara',
        number: 4,
        name: 'Sukuk (Surat Berharga Syariah Negara)',
        slug: 'sukuk-surat-berharga-syariah-negara',
        description: 'Surat berharga negara berbasis syariah yang diterbitkan dengan underlying asset riil serta diawasi DSN-MUI.',
        keywords: [
          'Sukuk Ritel SR',
          'Sukuk Tabungan ST',
          'Cash Waqf Linked Sukuk',
          'Akad syariah ijarah',
          'Investasi syariah'
        ],
        items: [
          { id: 'sukuk-ritel-sr', name: 'Sukuk Ritel (SR)', slug: 'sukuk-ritel-sr', description: 'SBSN ritel tradable berakad ijarah asset to be leased dengan imbalan tetap (fixed rate) bulanan.', keywords: ['sukuk ritel SR', 'SR terbaru'] },
          { id: 'sukuk-tabungan-st', name: 'Sukuk Tabungan (ST)', slug: 'sukuk-tabungan-st', description: 'Sukuk ritel non-tradable berakad wakalah dengan tingkat imbalan mengambang dengan batas minimal.', keywords: ['sukuk tabungan ST', 'ST kupon floating'] },
          { id: 'sukuk-wakaf-cwls', name: 'Cash Waqf Linked Sukuk (CWLS)', slug: 'sukuk-wakaf-cwls', description: 'Investasi wakaf uang temporer atau abadi di mana imbalan disalurkan untuk program sosial umat.', keywords: ['CWLS sukuk wakaf', 'wakaf tunai Kemenkeu'] },
          { id: 'imbalan-kupon-sukuk', name: 'Imbalan / Kupon Sukuk', slug: 'imbalan-kupon-sukuk', description: 'Nisbah bagi hasil atau ujrah sewa berkala yang bebas dari unsur riba, gharar, dan maysir.', keywords: ['imbalan sukuk', 'kupon sukuk syariah'] },
          { id: 'akad-syariah-sukuk-ijarah', name: 'Akad Syariah Sukuk Ijarah & Wakalah', slug: 'akad-syariah-sukuk-ijarah', description: 'Struktur akad fikih muamalah yang mendasari penerbitan SBSN sesuai fatwa DSN-MUI.', keywords: ['akad sukuk ijarah', 'fatwa DSN MUI obligasi syariah'] },
          { id: 'underlying-asset-sukuk', name: 'Underlying Asset Sukuk', slug: 'underlying-asset-sukuk', description: 'Aset barang milik negara (BMN) dan proyek infrastruktur APBN yang menjadi jaminan penerbitan sukuk.', keywords: ['underlying asset sukuk', 'BMN sukuk'] }
        ]
      },
      {
        id: 'yield-curve-kurva-imbal-hasil',
        number: 5,
        name: 'Yield Curve (Kurva Imbal Hasil)',
        slug: 'yield-curve-kurva-imbal-hasil',
        description: 'Grafik hubungan antara tingkat imbal hasil obligasi dengan jangka waktu jatuh tempo (tenor).',
        keywords: [
          'Yield curve Indonesia',
          'Indonesia Composite Bond Index ICBI',
          'Inverted yield curve',
          'Term structure'
        ],
        items: [
          { id: 'kurva-yield-sun-idr', name: 'Kurva Yield SUN IDR', slug: 'kurva-yield-sun-idr', description: 'Struktur imbal hasil obligasi pemerintah Indonesia dalam denominasi Rupiah dari tenor 1 bulan hingga 30 tahun.', keywords: ['kurva yield SUN IDR', 'yield curve PHEI'] },
          { id: 'kurva-yield-indonesia-composite-bond-index', name: 'Kurva Yield ICBI', slug: 'kurva-yield-indonesia-composite-bond-index', description: 'Kurva imbal hasil komposit obligasi yang dihitung harian oleh Penilai Harga Efek Indonesia (PHEI).', keywords: ['ICBI PHEI', 'indeks pasar obligasi'] },
          { id: 'normal-yield-curve', name: 'Bentuk Kurva Imbal Hasil Normal', slug: 'normal-yield-curve', description: 'Kondisi kurva saat yield obligasi jangka panjang lebih tinggi daripada jangka pendek mencerminkan pertumbuhan ekonomi sehat.', keywords: ['normal yield curve obligasi'] },
          { id: 'inverted-yield-curve', name: 'Inverted Yield Curve', slug: 'inverted-yield-curve', description: 'Fenomena langka saat yield obligasi jangka pendek melampaui jangka panjang sebagai sinyal potensi resesi ekonomi.', keywords: ['inverted yield curve sinyal resesi'] },
          { id: 'perbandingan-yield-curve-indonesia-vs-us-treasury', name: 'Yield Curve Indonesia vs US Treasury 10Y', slug: 'perbandingan-yield-curve-indonesia-vs-us-treasury', description: 'Perbandingan selisih suku bunga obligasi pemerintah RI terhadap obligasi US Treasury (Indo-US Spread).', keywords: ['spread yield Indo US Treasury'] }
        ]
      },
      {
        id: 'peringkat-rating-obligasi',
        number: 6,
        name: 'Peringkat & Rating Obligasi',
        slug: 'peringkat-rating-obligasi',
        description: 'Evaluasi independen kelayakan kredit dan risiko gagal bayar obligasi oleh lembaga pemeringkat efek.',
        keywords: [
          'Rating Pefindo',
          'Sovereign rating Indonesia',
          'Investment grade',
          'Peringkat obligasi AAA'
        ],
        items: [
          { id: 'rating-pefindo', name: 'Rating Obligasi Pefindo', slug: 'rating-pefindo', description: 'Peringkat kredit korporasi dan surat utang yang dirilis oleh PT Pemeringkat Efek Indonesia (Pefindo).', keywords: ['rating Pefindo', 'peringkat utang obligasi'] },
          { id: 'rating-sovereign-indonesia', name: 'Rating Sovereign RI S&P, Moody\'s, Fitch', slug: 'rating-sovereign-indonesia', description: 'Peringkat utang luar negeri Republik Indonesia dari lembaga pemeringkat global terkemuka.', keywords: ['sovereign rating Indonesia Fitch S&P Moody'] },
          { id: 'investment-grade', name: 'Kategori Investment Grade (AAA hingga BBB-)', slug: 'investment-grade', description: 'Klasifikasi obligasi yang memiliki kemampuan sangat kuat dan aman dalam memenuhi kewajiban finansialnya.', keywords: ['investment grade obligasi', 'peringkat idAAA idAA idA'] },
          { id: 'non-investment-grade-high-yield', name: 'Kategori Non-Investment Grade / High Yield', slug: 'non-investment-grade-high-yield', description: 'Obligasi berperingkat BB+ ke bawah yang menawarkan kupon tinggi dengan risiko kredit spekulatif.', keywords: ['junk bonds obligasi', 'high yield bonds'] },
          { id: 'credit-watch-dan-outlook', name: 'Credit Watch dan Rating Outlook', slug: 'credit-watch-dan-outlook', description: 'Indikasi arah potensi perubahan peringkat obligasi ke depan: Positif, Stabil, Negatif, atau Developing.', keywords: ['rating outlook obligasi', 'credit watch pefindo'] }
        ]
      },
      {
        id: 'lelang-obligasi-dan-jadwal-penerbitan',
        number: 7,
        name: 'Lelang Obligasi dan Jadwal Penerbitan',
        slug: 'lelang-obligasi-dan-jadwal-penerbitan',
        description: 'Mekanisme lelang perdana SUN dan SBSN oleh DJPPR Kementerian Keuangan di Bank Indonesia.',
        keywords: [
          'Lelang SUN',
          'Lelang SBSN Kemenkeu',
          'Incoming bids',
          'Awarded amount',
          'Weighted average yield'
        ],
        items: [
          { id: 'jadwal-lelang-sun-kemenkeu', name: 'Jadwal Lelang SUN Kemenkeu RI', slug: 'jadwal-lelang-sun-kemenkeu', description: 'Agenda lelang rutin dua mingguan obligasi negara konvensional melalui sistem Bank Indonesia BI-SSSS.', keywords: ['jadwal lelang SUN DJPPR'] },
          { id: 'jadwal-lelang-sbsn-sukuk-negara', name: 'Jadwal Lelang SBSN Sukuk Negara', slug: 'jadwal-lelang-sbsn-sukuk-negara', description: 'Jadwal lelang berkala surat berharga syariah negara dengan underlying asset BMN.', keywords: ['jadwal lelang sukuk negara'] },
          { id: 'target-indikatif-lelang', name: 'Target Indikatif Lelang', slug: 'target-indikatif-lelang', description: 'Target nominal dana yang direncanakan pemerintah untuk diserap dalam setiap sesi lelang (misal Rp 20 - 25 Triliun).', keywords: ['target indikatif lelang SUN'] },
          { id: 'total-penawaran-masuk-incoming-bids', name: 'Total Penawaran Masuk (Incoming Bids)', slug: 'total-penawaran-masuk-incoming-bids', description: 'Akumulasi total permintaan dana yang diajukan oleh dealer utama dan investor institusi peserta lelang.', keywords: ['incoming bids lelang SUN'] },
          { id: 'nominal-dimenangkan-awarded-amount', name: 'Nominal Dimenangkan (Awarded Amount)', slug: 'nominal-dimenangkan-awarded-amount', description: 'Jumlah total nominal penawaran yang resmi disetujui dan dimenangkan oleh pemerintah.', keywords: ['nominal dimenangkan lelang'] },
          { id: 'yield-rata-rata-tertimbang-way', name: 'Yield Rata-Rata Tertimbang (WAY)', slug: 'yield-rata-rata-tertimbang-way', description: 'Weighted Average Yield hasil lelang penentu kupon dan imbal hasil pasar obligasi.', keywords: ['WAY lelang obligasi', 'weighted average yield'] }
        ]
      },
      {
        id: 'jatuh-tempo-obligasi-maturity',
        number: 8,
        name: 'Jatuh Tempo Obligasi (Maturity)',
        slug: 'jatuh-tempo-obligasi-maturity',
        description: 'Informasi jatuh tempo pokok hutang obligasi dan profil jadwal pelunasan hutang negara serta korporasi.',
        keywords: [
          'Jatuh tempo obligasi',
          'Profil maturity SUN',
          'Tenor obligasi',
          'Pelunasan pokok obligasi'
        ],
        items: [
          { id: 'obligasi-jatuh-tempo-kurang-dari-1-tahun', name: 'Obligasi Jatuh Tempo < 1 Tahun', slug: 'obligasi-jatuh-tempo-kurang-dari-1-tahun', description: 'Daftar obligasi yang akan segera dilunasi pokoknya dalam kurun waktu 12 bulan ke depan.', keywords: ['obligasi jatuh tempo dekat'] },
          { id: 'obligasi-tenor-menengah-1-5-tahun', name: 'Obligasi Tenor Menengah (1-5 Tahun)', slug: 'obligasi-tenor-menengah-1-5-tahun', description: 'Kelompok surat utang bertenor menengah dengan keseimbangan durasi dan yield yang optimal.', keywords: ['obligasi tenor menengah'] },
          { id: 'obligasi-tenor-panjang-di-atas-5-tahun', name: 'Obligasi Tenor Panjang (> 5 Tahun)', slug: 'obligasi-tenor-panjang-di-atas-5-tahun', description: 'Surat utang jangka panjang (10-30 tahun) cocok untuk komitmen liabilitas dana pensiun dan asuransi.', keywords: ['obligasi tenor panjang'] },
          { id: 'jadwal-pembayaran-pokok-dan-kupon', name: 'Jadwal Pembayaran Pokok dan Kupon', slug: 'jadwal-pembayaran-pokok-dan-kupon', description: 'Kalender distribusi kas jatuh tempo pelunasan nilai nominal 100% dan kupon periodik obligasi.', keywords: ['jadwal pembayaran pokok obligasi'] },
          { id: 'refinancing-dan-rollover-obligasi', name: 'Refinancing dan Rollover Obligasi', slug: 'refinancing-dan-rollover-obligasi', description: 'Strategi penerbitan obligasi baru untuk melunasi obligasi lama yang telah jatuh tempo.', keywords: ['rollover obligasi', 'refinancing utang'] }
        ]
      },
      {
        id: 'analisis-dan-metrik-obligasi',
        number: 9,
        name: 'Analisis dan Metrik Obligasi',
        slug: 'analisis-dan-metrik-obligasi',
        description: 'Metrik teknis pengukuran sensitivitas harga obligasi terhadap perubahan suku bunga acuan pasar.',
        keywords: [
          'Durasi Macaulay',
          'Modified duration',
          'Konveksitas',
          'Current yield',
          'Yield spread'
        ],
        items: [
          { id: 'durasi-macaulay-macaulay-duration', name: 'Durasi Macaulay (Macaulay Duration)', slug: 'durasi-macaulay-macaulay-duration', description: 'Rata-rata tertimbang waktu penerimaan seluruh arus kas kupon dan pelunasan pokok obligasi.', keywords: ['durasi macaulay obligasi'] },
          { id: 'modified-duration', name: 'Modified Duration', slug: 'modified-duration', description: 'Persentase perkiraan perubahan harga obligasi akibat perubahan 100 bps (1%) suku bunga pasar.', keywords: ['modified duration obligasi', 'sensitivitas suku bunga obligasi'] },
          { id: 'konveksitas-convexity', name: 'Konveksitas (Convexity)', slug: 'konveksitas-convexity', description: 'Ukuran kelengkungan hubungan antara harga obligasi dan yield untuk koreksi akurasi estimasi durasi.', keywords: ['convexity obligasi'] },
          { id: 'current-yield', name: 'Current Yield', slug: 'current-yield', description: 'Rasio kupon tahunan obligasi dibagi dengan harga pasar obligasi saat ini.', keywords: ['current yield obligasi'] },
          { id: 'yield-to-call-ytc', name: 'Yield to Call (YTC)', slug: 'yield-to-call-ytc', description: 'Tingkat imbal hasil obligasi dengan opsi beli kembali (callable) jika ditebus emiten sebelum jatuh tempo.', keywords: ['yield to call obligasi'] },
          { id: 'spread-imbal-hasil-yield-spread', name: 'Spread Imbal Hasil (Yield Spread)', slug: 'spread-imbal-hasil-yield-spread', description: 'Diferensial imbal hasil antar-seri obligasi atau antar-sektor industri terhadap benchmark SUN.', keywords: ['yield spread obligasi'] }
        ]
      },
      {
        id: 'pajak-dan-regulasi-obligasi',
        number: 10,
        name: 'Pajak dan Regulasi Obligasi',
        slug: 'pajak-dan-regulasi-obligasi',
        description: 'Ketentuan perpajakan obligasi, insentif PPh Final 10%, serta payung hukum penerbitan surat utang di Indonesia.',
        keywords: [
          'Pajak obligasi 10%',
          'PPh Final bunga obligasi',
          'UU SUN No 24 2002',
          'Regulasi OJK obligasi'
        ],
        items: [
          { id: 'tarif-pajak-kupon-obligasi-pph-final-10', name: 'Tarif Pajak Kupon Obligasi (PPh Final 10%)', slug: 'tarif-pajak-kupon-obligasi-pph-final-10', description: 'Sesuai PP No. 91/2021, kupon obligasi domestik dikenakan PPh Final 10% (lebih hemat separuh dari deposito 20%).', keywords: ['pajak kupon obligasi', 'pph final obligasi 10 persen'] },
          { id: 'pajak-capital-gain-obligasi', name: 'Pajak Capital Gain Obligasi', slug: 'pajak-capital-gain-obligasi', description: 'Perlakuan pajak atas keuntungan selisih harga jual di atas harga beli obligasi di pasar sekunder (10%).', keywords: ['pajak capital gain obligasi'] },
          { id: 'undang-undang-surat-utang-negara', name: 'Undang-Undang Surat Utang Negara No. 24/2002', slug: 'undang-undang-surat-utang-negara', description: 'Landasan hukum mutlak yang menjamin pembayaran pokok dan kupon SUN dibayarkan penuh melalui APBN setiap tahunnya.', keywords: ['uu no 24 tahun 2002 SUN'] },
          { id: 'regulasi-ojk-pasar-obligasi', name: 'Regulasi OJK Pasar Modal Surat Utang', slug: 'regulasi-ojk-pasar-obligasi', description: 'Peraturan Otoritas Jasa Keuangan terkait keterbukaan informasi, wali amanat, dan transaksi obligasi.', keywords: ['peraturan OJK obligasi'] },
          { id: 'penjaminan-negara-100-persen', name: 'Jaminan Pembayaran Negara 100%', slug: 'penjaminan-negara-100-persen', description: 'Tidak ada batasan nominal penjaminan SBN (berbeda dari LPS deposito bank yang dibatasi maksimal Rp 2 Miliar).', keywords: ['jaminan SBN 100 persen negara'] }
        ]
      },
      {
        id: 'kepemilikan-obligasi-investor-profile',
        number: 11,
        name: 'Kepemilikan Obligasi & Investor Profile',
        slug: 'kepemilikan-obligasi-investor-profile',
        description: 'Struktur kepemilikan surat berharga negara oleh perbankan, Bank Indonesia, asuransi, dan investor asing.',
        keywords: [
          'Kepemilikan asing SBN',
          'Foreign ownership SBN',
          'Investor institusi obligasi',
          'DJPPR kepemilikan SBN'
        ],
        items: [
          { id: 'porsi-kepemilikan-asing-sun', name: 'Porsi Kepemilikan Asing pada SUN', slug: 'porsi-kepemilikan-asing-sun', description: 'Persentase nilai nominal SUN yang dimiliki investor non-residen di pasar surat utang Indonesia.', keywords: ['porsi asing obligasi SUN', 'foreign ownership SUN'] },
          { id: 'kepemilikan-bank-komersial', name: 'Kepemilikan Bank Komersial pada SBN', slug: 'kepemilikan-bank-komersial', description: 'Jumlah kepemilikan SBN oleh perbankan nasional sebagai instrumen secondary reserves likuiditas.', keywords: ['kepemilikan SBN perbankan'] },
          { id: 'kepemilikan-asuransi-dan-dana-pensiun', name: 'Kepemilikan Asuransi dan Dana Pensiun', slug: 'kepemilikan-asuransi-dan-dana-pensiun', description: 'Alokasi portofolio institusi dana pensiun dan asuransi dalam instrumen pendapatan tetap berdurasi panjang.', keywords: ['alokasi SBN dana pensiun'] },
          { id: 'kepemilikan-bank-indonesia', name: 'Kepemilikan Bank Indonesia', slug: 'kepemilikan-bank-indonesia', description: 'Portofolio SBN yang dimiliki bank sentral dalam rangka operasi moneter dan stabilitas nilai tukar Rupiah.', keywords: ['SBN bank indonesia'] },
          { id: 'partisipasi-investor-ritel-domestik', name: 'Partisipasi Investor Ritel Domestik', slug: 'partisipasi-investor-ritel-domestik', description: 'Tren pertumbuhan jumlah Single Investor Identification (SID) individu pemegang SBN ritel.', keywords: ['investor ritel SBN'] }
        ]
      },
      {
        id: 'edukasi-dan-panduan-investasi-obligasi',
        number: 12,
        name: 'Edukasi dan Panduan Investasi Obligasi',
        slug: 'edukasi-dan-panduan-investasi-obligasi',
        description: 'Panduan komprehensif bagi pemula mengenai strategi investasi obligasi negara dan swasta secara aman.',
        keywords: [
          'Cara beli SBN online',
          'Panduan investasi obligasi',
          'Risiko obligasi',
          'SBN vs Deposito'
        ],
        items: [
          { id: 'perbedaan-saham-deposito-dan-obligasi', name: 'Perbedaan Saham, Deposito, dan Obligasi', slug: 'perbedaan-saham-deposito-dan-obligasi', description: 'Perbandingan menyeluruh antara profil risiko, potensi imbal hasil, likuiditas, dan jaminan keamanan.', keywords: ['perbedaan saham deposito obligasi'] },
          { id: 'cara-beli-sbn-ritel-online', name: 'Cara Beli SBN Ritel Online di Mitra Distribusi', slug: 'cara-beli-sbn-ritel-online', description: 'Tutorial langkah demi langkah pendaftaran SID, pemesanan kuota, dan pembayaran via mobile banking.', keywords: ['cara beli SBN online', 'daftar sbn kemenkeu'] },
          { id: 'hubungan-terbalik-harga-dan-yield-obligasi', name: 'Hubungan Terbalik Harga dan Yield Obligasi', slug: 'hubungan-terbalik-harga-dan-yield-obligasi', description: 'Memahami prinsip mendasar: ketika suku bunga acuan naik harga obligasi turun, dan sebaliknya.', keywords: ['hubungan harga dan yield obligasi'] },
          { id: 'risiko-gagal-bayar-default-risk', name: 'Risiko Gagal Bayar (Default Risk) vs Sovereign Risk', slug: 'risiko-gagal-bayar-default-risk', description: 'Membedakan keamanan tanpa risiko pada SBN pemerintah dengan risiko kredit pada obligasi korporasi.', keywords: ['risiko gagal bayar obligasi'] },
          { id: 'risiko-suku-bunga-pada-obligasi', name: 'Risiko Fluktuasi Suku Bunga pada Obligasi', slug: 'risiko-suku-bunga-pada-obligasi', description: 'Dampak kenaikan suku bunga bank sentral terhadap nilai pasar obligasi yang diperdagangkan.', keywords: ['risiko suku bunga obligasi'] }
        ]
      },
      {
        id: 'kalkulator-dan-simulasi-obligasi',
        number: 13,
        name: 'Kalkulator dan Simulasi Obligasi',
        slug: 'kalkulator-dan-simulasi-obligasi',
        description: 'Alat bantu kalkulasi estimasi kupon bersih, perbandingan dengan deposito, dan simulasi yield to maturity.',
        keywords: [
          'Kalkulator kupon SBN',
          'Kalkulator obligasi',
          'Simulasi capital gain obligasi',
          'Kalkulator YTM'
        ],
        items: [
          { id: 'kalkulator-kupon-bersih-bulanan-sbn', name: 'Kalkulator Kupon Bersih Bulanan SBN', slug: 'kalkulator-kupon-bersih-bulanan-sbn', description: 'Hitung penerimaan passive income bersih setiap bulan setelah dipotong pajak PPh Final 10%.', keywords: ['kalkulator kupon SBN bulanan'] },
          { id: 'simulasi-capital-gain-loss-obligasi', name: 'Simulasi Capital Gain/Loss Obligasi', slug: 'simulasi-capital-gain-loss-obligasi', description: 'Simulasi keuntungan atau kerugian menjual obligasi di atas atau di bawah nilai par di pasar sekunder.', keywords: ['simulasi capital gain obligasi'] },
          { id: 'kalkulator-yield-to-maturity', name: 'Kalkulator Yield to Maturity (YTM)', slug: 'kalkulator-yield-to-maturity', description: 'Kalkulasi eksak YTM obligasi dengan memasukkan harga beli, kupon tahunan, dan sisa tenor.', keywords: ['kalkulator YTM obligasi'] },
          { id: 'komparasi-hasil-sbn-vs-deposito', name: 'Komparasi Hasil Bersih SBN vs Deposito Bank', slug: 'komparasi-hasil-sbn-vs-deposito', description: 'Komparasi head-to-head keuntungan bersih SBN (pajak 10%) melawan deposito perbankan (pajak 20%).', keywords: ['sbn vs deposito kalkulator'] }
        ]
      },
      {
        id: 'screener-dan-grafik-obligasi',
        number: 14,
        name: 'Screener dan Grafik Obligasi',
        slug: 'screener-dan-grafik-obligasi',
        description: 'Screener interaktif dan visualisasi grafik historis yield obligasi pemerintah Indonesia.',
        keywords: [
          'Screener SBN',
          'Screener obligasi korporasi',
          'Grafik yield SUN',
          'Grafik ICBI'
        ],
        items: [
          { id: 'screener-sbn-ritel-aktif', name: 'Screener SBN Ritel Aktif', slug: 'screener-sbn-ritel-aktif', description: 'Filter dan urutkan seri SBN ritel aktif berdasarkan tingkat kupon, tenor, dan jenis kupon.', keywords: ['screener SBN ritel'] },
          { id: 'screener-obligasi-korporasi-berdasarkan-rating', name: 'Screener Obligasi Korporasi Berdasarkan Rating', slug: 'screener-obligasi-korporasi-berdasarkan-rating', description: 'Saring emisi obligasi korporasi berdasarkan peringkat utang idAAA, idAA, atau idA.', keywords: ['screener rating obligasi'] },
          { id: 'grafik-historis-yield-sun-10-tahun', name: 'Grafik Historis Yield SUN 10 Tahun', slug: 'grafik-historis-yield-sun-10-tahun', description: 'Visualisasi tren pergerakan suku bunga acuan obligasi 10 tahun selama 5 tahun terakhir.', keywords: ['grafik historis yield SUN 10Y'] },
          { id: 'grafik-komposit-icbi-bond-index', name: 'Grafik Indonesia Composite Bond Index (ICBI)', slug: 'grafik-komposit-icbi-bond-index', description: 'Indeks performa total return pasar obligasi pemerintah dan korporasi Indonesia.', keywords: ['grafik ICBI PHEI'] },
          { id: 'peta-sebaran-jatuh-tempo-obligasi', name: 'Peta Sebaran Jatuh Tempo Obligasi', slug: 'peta-sebaran-jatuh-tempo-obligasi', description: 'Diagram sebaran jatuh tempo surat utang pemerintah dalam kurun waktu 30 tahun mendatang.', keywords: ['peta jatuh tempo SBN'] }
        ]
      }
    ]
  }
];
