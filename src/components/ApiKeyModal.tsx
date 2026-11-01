import React, { useState } from 'react';
import { useFinance } from '../context/FinancialContext';
import { DEFAULT_API_KEY, DEFAULT_WORKER_URL } from '../services/cloudflareWorkerApi';
import { X, Key, Send, CheckCircle2, AlertCircle, RefreshCw, Server, ShieldCheck, Copy, Check } from 'lucide-react';

export const ApiKeyModal: React.FC = () => {
  const {
    isApiKeyModalOpen,
    setIsApiKeyModalOpen,
    apiKey,
    setApiKey,
    workerUrl,
    setWorkerUrl,
    triggerWorkerAction,
    isWorkerLoading,
    lastWorkerResult,
    resetApiKeyToDefault,
    t
  } = useFinance();

  const [inputKey, setInputKey] = useState(apiKey);
  const [inputUrl, setInputUrl] = useState(workerUrl);
  const [savedNotice, setSavedNotice] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isApiKeyModalOpen) return null;

  const handleSave = () => {
    setApiKey(inputKey);
    setWorkerUrl(inputUrl);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  const handleReset = () => {
    resetApiKeyToDefault();
    setInputKey(DEFAULT_API_KEY);
    setInputUrl(DEFAULT_WORKER_URL);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  const handleTestPing = async () => {
    // Save current values first
    setApiKey(inputKey);
    setWorkerUrl(inputUrl);
    await triggerWorkerAction('PING_HEALTHCHECK', {
      source: 'aturdana_admin_settings',
      clientVersion: '2026.1.0'
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0f1720] border border-slate-700/80 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0d141c]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white tracking-tight">
                {t('apiKeyConfig')}
              </h2>
              <p className="text-xs text-slate-400">
                Integrasi Cloudflare Worker & API Otorisasi Data Real-Time
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsApiKeyModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          {/* Information Notice */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-emerald-400 block mb-1">
                Kesiapan Pengiriman API Key ke Worker Cloudflare
              </span>
              Setiap kali Anda atau pengunjung mengklik tombol sinkronisasi data bursa, feed live IHSG, atau ranking bunga bank, sistem Aturdana.id langsung menyisipkan API Key ini ke dalam header HTTP: <code className="text-amber-300 font-mono bg-slate-800/80 px-1 py-0.5 rounded">Authorization: Bearer &lt;API_KEY&gt;</code> dan <code className="text-amber-300 font-mono bg-slate-800/80 px-1 py-0.5 rounded">X-API-Key</code>.
            </div>
          </div>

          {/* Input API Key */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-200">
                Kode API Key Pengunjung (Dapat Diedit Kapanpun)
              </label>
              <button
                type="button"
                onClick={handleReset}
                className="text-[11px] text-emerald-400 hover:text-emerald-300 underline cursor-pointer"
              >
                Kembalikan ke Contoh Default
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
                placeholder="Masukkan API Key Cloudflare Anda..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-xs focus:outline-none focus:border-emerald-500 transition-colors pr-10"
              />
              <button
                type="button"
                onClick={() => copyToClipboard(inputKey)}
                className="absolute right-2 top-2 p-1 text-slate-400 hover:text-white"
                title="Salin API Key"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              Contoh API Key default saat ini: <code className="text-slate-300 font-mono">{DEFAULT_API_KEY}</code>
            </p>
          </div>

          {/* Input Worker URL */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-200">
              Cloudflare Worker Endpoint URL
            </label>
            <input
              type="url"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="https://api.aturdana.id/worker/v1/market-feed"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-xs focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          {/* Save and Test Trigger Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4" />
              Simpan Perubahan
            </button>

            <button
              onClick={handleTestPing}
              disabled={isWorkerLoading}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors flex items-center gap-2 cursor-pointer border border-slate-700 disabled:opacity-50"
            >
              {isWorkerLoading ? (
                <RefreshCw className="w-4 h-4 animate-spin text-emerald-400" />
              ) : (
                <Send className="w-4 h-4 text-emerald-400" />
              )}
              Uji Handshake ke Worker
            </button>

            {savedNotice && (
              <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium animate-fade-in">
                <Check className="w-3.5 h-3.5" /> Berhasil disimpan ke memori browser!
              </span>
            )}
          </div>

          {/* Live Result Log & Payload Inspector */}
          {lastWorkerResult && (
            <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Server className="w-3.5 h-3.5" /> Status HTTP: {lastWorkerResult.statusCode} OK
                </span>
                <span className="text-slate-400">
                  Latensi: <strong className="text-white">{lastWorkerResult.latencyMs} ms</strong> · {lastWorkerResult.timestamp}
                </span>
              </div>

              <div>
                <span className="text-slate-500 text-[10px] uppercase tracking-wider block mb-1">Header Terkirim Otomatis:</span>
                <pre className="p-2 rounded bg-slate-900 text-slate-300 overflow-x-auto text-[11px]">
                  {JSON.stringify(lastWorkerResult.requestHeaders, null, 2)}
                </pre>
              </div>

              <div>
                <span className="text-slate-500 text-[10px] uppercase tracking-wider block mb-1">Respon Worker Cloudflare:</span>
                <pre className="p-2 rounded bg-slate-900 text-emerald-300 overflow-x-auto text-[11px]">
                  {JSON.stringify(lastWorkerResult.responsePayload, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800/80 bg-[#0d141c] flex items-center justify-between text-xs text-slate-400">
          <span>Domain: <strong>Aturdana.id</strong></span>
          <button
            onClick={() => setIsApiKeyModalOpen(false)}
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer transition-colors"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};
