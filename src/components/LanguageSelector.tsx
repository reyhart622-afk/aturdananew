import React from 'react';
import { useFinance } from '../context/FinancialContext';
import { LanguageCode } from '../types/finance';
import { Globe } from 'lucide-react';

const LANGUAGES: { code: LanguageCode; label: string; flag: string }[] = [
  { code: 'id', label: 'ID', flag: '🇮🇩' },
  { code: 'en', label: 'EN', flag: '🌐' },
  { code: 'zh', label: 'ZH', flag: '🇨🇳' },
  { code: 'ja', label: 'JA', flag: '🇯🇵' },
  { code: 'ar', label: 'AR', flag: '🇸🇦' }
];

export const LanguageSelector: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { lang, setLang } = useFinance();

  return (
    <div className="flex items-center gap-1 bg-slate-900/90 border border-slate-800 p-1 rounded-lg text-xs">
      {!compact && <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-0.5" />}
      <div className="flex items-center gap-0.5">
        {LANGUAGES.map((l) => {
          const isActive = lang === l.code;
          return (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`px-2 py-1 rounded transition-colors text-xs font-medium cursor-pointer ${
                isActive
                  ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
              title={`Switch language to ${l.label}`}
            >
              <span>{l.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
