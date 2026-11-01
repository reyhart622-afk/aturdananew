export type LanguageCode = 'id' | 'en' | 'zh' | 'ja' | 'ar';

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  keywords: string[];
  formulaOrRule?: string;
  dataType?: 'price' | 'indicator' | 'screener' | 'calculator' | 'table' | 'profile' | 'feed';
  requiresApiKey?: boolean;
}

export interface SubCategory {
  id: string;
  number: number;
  name: string;
  slug: string;
  description: string;
  keywords: string[];
  items: CategoryItem[];
}

export interface MainCategory {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  iconName: string;
  keywords: string[];
  subcategories: SubCategory[];
}

export interface StockData {
  ticker: string;
  name: string;
  sector: string;
  industry: string;
  price: number;
  change: number;
  changePercent: number;
  open: number;
  high: number;
  low: number;
  volume: number;
  value: number; // in Rupiah
  freq: number;
  peRatio: number;
  pbvRatio: number;
  roe: number;
  dividendYield: number;
  marketCap: number; // in Trillion IDR
  foreignNetBuy: number; // in Billion IDR
  isSyariah: boolean;
  board: 'Utama' | 'Pengembangan' | 'Akselerasi';
}

export interface DepositoRate {
  bankName: string;
  bankType: 'Bank Digital' | 'Bank BUKU IV' | 'Bank Syariah' | 'Bank Daerah';
  productName: string;
  rate1M: number;
  rate3M: number;
  rate6M: number;
  rate12M: number;
  minDeposit: number;
  lpsCovered: boolean;
  feature: string;
}

export interface MutualFundData {
  code: string;
  name: string;
  type: 'Saham' | 'Pendapatan Tetap' | 'Pasar Uang' | 'Campuran' | 'ETF';
  fundManager: string;
  custodianBank: string;
  navPerUnit: number;
  return1M: number;
  return1Y: number;
  return3Y: number;
  aum: number; // in Billion IDR
  sharpeRatio: number;
  minPurchase: number;
  isSyariah: boolean;
}

export interface BondData {
  code: string;
  name: string;
  type: 'SBN Ritel' | 'SUN Seri Benchmark' | 'Sukuk Ritel' | 'Obligasi Korporasi';
  issuer: string;
  couponRate: number;
  couponType: 'Fixed Rate' | 'Floating with Floor';
  yieldToMaturity: number;
  tenorYears: number;
  maturityDate: string;
  creditRating: string;
  minOrder: number;
  cleanPrice: number;
}

export interface CloudflareApiConfig {
  apiKey: string;
  workerEndpoint: string;
  lastSyncTime: string | null;
  status: 'idle' | 'syncing' | 'connected' | 'error';
  lastResponse?: {
    status: number;
    latencyMs: number;
    payload: any;
  };
}
