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

export const FinancialProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeView, setActiveView] = useState<ActiveViewType>('home');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<string | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [lang, setLang] = useState<LanguageCode>('id');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);

  const [apiKey, setApiKeyState] = useState<string>(getStoredApiKey());
  const [workerUrl, setWorkerUrlState] = useState<string>(getStoredWorkerUrl());
  const [lastWorkerResult, setLastWorkerResult] = useState<WorkerDispatchResult | null>(null);
  const [isWorkerLoading, setIsWorkerLoading] = useState(false);

  // Sync scroll to top on page transition
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToHome = () => {
    setActiveView('home');
    setSelectedCategoryId(null);
    setSelectedSubcategoryId(null);
    setSelectedItemId(null);
    setIsMobileMenuOpen(false);
    scrollToTop();
  };

  const navigateToCategory = (categoryId: string) => {
    setActiveView('category');
    setSelectedCategoryId(categoryId);
    setSelectedSubcategoryId(null);
    setSelectedItemId(null);
    setIsMobileMenuOpen(false);
    scrollToTop();
  };

  const navigateToSubcategory = (categoryId: string, subcategoryId: string) => {
    setActiveView('subcategory');
    setSelectedCategoryId(categoryId);
    setSelectedSubcategoryId(subcategoryId);
    setSelectedItemId(null);
    setIsMobileMenuOpen(false);
    scrollToTop();
  };

  const navigateToItem = (categoryId: string, subcategoryId: string, itemId: string) => {
    setActiveView('item');
    setSelectedCategoryId(categoryId);
    setSelectedSubcategoryId(subcategoryId);
    setSelectedItemId(itemId);
    setIsMobileMenuOpen(false);
    scrollToTop();
  };

  const navigateToTool = (tool: 'calculator' | 'screener') => {
    setActiveView(tool);
    setIsMobileMenuOpen(false);
    scrollToTop();
  };

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
