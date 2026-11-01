import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode } from '../types/finance';
import { TRANSLATIONS } from '../data/translations';
import { CATEGORIES_DATA } from '../data/categoriesData';
import {
  getStoredApiKey,
  saveStoredApiKey,
  getStoredWorkerUrl,
  saveStoredWorkerUrl,
  sendToCloudflareWorker,
  WorkerDispatchResult,
  DEFAULT_API_KEY
} from '../services/cloudflareWorkerApi';

export type ActiveViewType = 'home' | 'category' | 'subcategory' | 'item' | 'calculator' | 'screener';

// ============================================================
// URL ROUTING — parse & build URL untuk semua halaman
// ============================================================

function findCategoryBySlug(slug: string) {
  return CATEGORIES_DATA.find(c => c.slug === slug);
}

function findSubcategoryBySlug(category: any, slug: string) {
  return category.subcategories.find((s: any) => s.slug === slug);
}

function findItemBySlug(subcategory: any, slug: string) {
  return subcategory.items.find((i: any) => i.slug === slug);
}

function parseUrl(pathname: string): {
  view: ActiveViewType;
  categoryId: string | null;
  subcategoryId: string | null;
  itemId: string | null;
} {
  const parts = pathname.split('/').filter(Boolean);

  if (parts.length === 0)
    return { view: 'home', categoryId: null, subcategoryId: null, itemId: null };

  if (parts[0] === 'kalkulator')
    return { view: 'calculator', categoryId: null, subcategoryId: null, itemId: null };

  if (parts[0] === 'screener')
    return { view: 'screener', categoryId: null, subcategoryId: null, itemId: null };

  const category = findCategoryBySlug(parts[0]);
  if (!category)
    return { view: 'home', categoryId: null, subcategoryId: null, itemId: null };

  if (parts.length === 1)
    return { view: 'category', categoryId: category.id, subcategoryId: null, itemId: null };

  const subcategory = findSubcategoryBySlug(category, parts[1]);
  if (!subcategory)
    return { view: 'category', categoryId: category.id, subcategoryId: null, itemId: null };

  if (parts.length === 2)
    return { view: 'subcategory', categoryId: category.id, subcategoryId: subcategory.id, itemId: null };

  const item = findItemBySlug(subcategory, parts[2]);
  if (!item)
    return { view: 'subcategory', categoryId: category.id, subcategoryId: subcategory.id, itemId: null };

  return { view: 'item', categoryId: category.id, subcategoryId: subcategory.id, itemId: item.id };
}

function buildUrl(
  view: string,
  categoryId?: string | null,
  subcategoryId?: string | null,
  itemId?: string | null
): string {
  if (view === 'home') return '/';
  if (view === 'calculator') return '/kalkulator';
  if (view === 'screener') return '/screener';

  if (!categoryId) return '/';
  const category = CATEGORIES_DATA.find(c => c.id === categoryId);
  if (!category) return '/';

  if (view === 'category') return `/${category.slug}`;

  if (!subcategoryId) return `/${category.slug}`;
  const subcategory = category.subcategories.find(s => s.id === subcategoryId);
  if (!subcategory) return `/${category.slug}`;

  if (view === 'subcategory') return `/${category.slug}/${subcategory.slug}`;

  if (!itemId) return `/${category.slug}/${subcategory.slug}`;
  const item = subcategory.items.find(i => i.id === itemId);
  if (!item) return `/${category.slug}/${subcategory.slug}`;

  return `/${category.slug}/${subcategory.slug}/${item.slug}`;
}

function getInitialUrlState() {
  if (typeof window === 'undefined')
    return { view: 'home' as ActiveViewType, categoryId: null, subcategoryId: null, itemId: null };
  return parseUrl(window.location.pathname);
}

// ============================================================
// CONTEXT TYPE
// ============================================================

interface FinancialContextType {
  activeView: ActiveViewType;
  selectedCategoryId: string | null;
  selectedSubcategoryId: string | null;
  selectedItemId: string | null;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  lang: LanguageCode;
  setLang: (l: LanguageCode) => void;
  t: (key: string) => string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  isApiKeyModalOpen: boolean;
  setIsApiKeyModalOpen: (open: boolean) => void;
  apiKey: string;
  setApiKey: (key: string) => void;
  workerUrl: string;
  setWorkerUrl: (url: string) => void;
  lastWorkerResult: WorkerDispatchResult | null;
  isWorkerLoading: boolean;
  triggerWorkerAction: (action: string, params?: Record<string, any>) => Promise<WorkerDispatchResult>;
  navigateToHome: () => void;
  navigateToCategory: (categoryId: string) => void;
  navigateToSubcategory: (categoryId: string, subcategoryId: string) => void;
  navigateToItem: (categoryId: string, subcategoryId: string, itemId: string) => void;
  navigateToTool: (tool: 'calculator' | 'screener') => void;
  resetApiKeyToDefault: () => void;
}

const FinancialContext = createContext<FinancialContextType | undefined>(undefined);

// ============================================================
// PROVIDER
// ============================================================

export const FinancialProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from URL on first render
  const initial = getInitialUrlState();

  const [activeView, setActiveView] = useState<ActiveViewType>(initial.view);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(initial.categoryId);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<string | null>(initial.subcategoryId);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(initial.itemId);

  const [searchQuery, setSearchQuery] = useState('');
  const [lang, setLang] = useState<LanguageCode>('id');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);

  const [apiKey, setApiKeyState] = useState<string>(getStoredApiKey());
  const [workerUrl, setWorkerUrlState] = useState<string>(getStoredWorkerUrl());
  const [lastWorkerResult, setLastWorkerResult] = useState<WorkerDispatchResult | null>(null);
  const [isWorkerLoading, setIsWorkerLoading] = useState(false);

  // ============================================================
  // Listen to browser back/forward button
  // ============================================================
  useEffect(() => {
    function handlePopState() {
      const state = parseUrl(window.location.pathname);
      setActiveView(state.view);
      setSelectedCategoryId(state.categoryId);
      setSelectedSubcategoryId(state.subcategoryId);
      setSelectedItemId(state.itemId);
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // ============================================================
  // Helper: push URL to browser history
  // ============================================================
  function pushUrl(
    view: string,
    categoryId?: string | null,
    subcategoryId?: string | null,
    itemId?: string | null
  ) {
    const url = buildUrl(view, categoryId, subcategoryId, itemId);
    if (typeof window !== 'undefined' && window.location.pathname !== url) {
      window.history.pushState({ view, categoryId, subcategoryId, itemId }, '', url);
    }
  }

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // ============================================================
  // Navigation functions — update state AND push URL
  // ============================================================

  const navigateToHome = () => {
    setActiveView('home');
    setSelectedCategoryId(null);
    setSelectedSubcategoryId(null);
    setSelectedItemId(null);
    pushUrl('home');
    setIsMobileMenuOpen(false);
    scrollToTop();
  };

  const navigateToCategory = (categoryId: string) => {
    setActiveView('category');
    setSelectedCategoryId(categoryId);
    setSelectedSubcategoryId(null);
    setSelectedItemId(null);
    pushUrl('category', categoryId);
    setIsMobileMenuOpen(false);
    scrollToTop();
  };

  const navigateToSubcategory = (categoryId: string, subcategoryId: string) => {
    setActiveView('subcategory');
    setSelectedCategoryId(categoryId);
    setSelectedSubcategoryId(subcategoryId);
    setSelectedItemId(null);
    pushUrl('subcategory', categoryId, subcategoryId);
    setIsMobileMenuOpen(false);
    scrollToTop();
  };

  const navigateToItem = (categoryId: string, subcategoryId: string, itemId: string) => {
    setActiveView('item');
    setSelectedCategoryId(categoryId);
    setSelectedSubcategoryId(subcategoryId);
    setSelectedItemId(itemId);
    pushUrl('item', categoryId, subcategoryId, itemId);
    setIsMobileMenuOpen(false);
    scrollToTop();
  };

  const navigateToTool = (tool: 'calculator' | 'screener') => {
    setActiveView(tool);
    setSelectedCategoryId(null);
    setSelectedSubcategoryId(null);
    setSelectedItemId(null);
    pushUrl(tool);
    setIsMobileMenuOpen(false);
    scrollToTop();
  };

  // ============================================================
  // API Key & Worker (unchanged)
  // ============================================================

  const updateApiKey = (newKey: string) => {
    setApiKeyState(newKey);
    saveStoredApiKey(newKey);
  };

  const updateWorkerUrl = (newUrl: string) => {
    setWorkerUrlState(newUrl);
    saveStoredWorkerUrl(newUrl);
  };

  const resetApiKeyToDefault = () => {
    updateApiKey(DEFAULT_API_KEY);
  };

  const triggerWorkerAction = async (action: string, params: Record<string, any> = {}) => {
    setIsWorkerLoading(true);
    try {
      const result = await sendToCloudflareWorker(action, params);
      setLastWorkerResult(result);
      return result;
    } finally {
      setIsWorkerLoading(false);
    }
  };

  // Translation helper
  const t = (key: string): string => {
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['id']?.[key] || key;
  };

  return (
    <FinancialContext.Provider
      value={{
        activeView,
        selectedCategoryId,
        selectedSubcategoryId,
        selectedItemId,
        searchQuery,
        setSearchQuery,
        lang,
        setLang,
        t,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        isApiKeyModalOpen,
        setIsApiKeyModalOpen,
        apiKey,
        setApiKey: updateApiKey,
        workerUrl,
        setWorkerUrl: updateWorkerUrl,
        lastWorkerResult,
        isWorkerLoading,
        triggerWorkerAction,
        navigateToHome,
        navigateToCategory,
        navigateToSubcategory,
        navigateToItem,
        navigateToTool,
        resetApiKeyToDefault
      }}
    >
      {children}
    </FinancialContext.Provider>
  );
};

export function useFinance() {
  const context = useContext(FinancialContext);
  if (!context) {
    throw new Error('useFinance must be used within a FinancialProvider');
  }
  return context;
}
