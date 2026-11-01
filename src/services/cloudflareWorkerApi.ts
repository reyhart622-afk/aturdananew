export interface WorkerDispatchResult {
  success: boolean;
  statusCode: number;
  latencyMs: number;
  endpoint: string;
  requestHeaders: Record<string, string>;
  requestPayload: any;
  responsePayload: any;
  timestamp: string;
  isSimulatedFallback: boolean;
  message: string;
}

const STORAGE_KEY_API_KEY = 'aturdana_cloudflare_apikey';
const STORAGE_KEY_WORKER_URL = 'aturdana_cloudflare_worker_url';

export const DEFAULT_API_KEY = 'apikeycontohefjehfjadbicfi';
export const DEFAULT_WORKER_URL = 'https://engine.aturdana.id/worker/v1/market-feed';

export function getStoredApiKey(): string {
  if (typeof window === 'undefined') return DEFAULT_API_KEY;
  return localStorage.getItem(STORAGE_KEY_API_KEY) || DEFAULT_API_KEY;
}

export function saveStoredApiKey(apiKey: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY_API_KEY, apiKey.trim() || DEFAULT_API_KEY);
}

export function getStoredWorkerUrl(): string {
  if (typeof window === 'undefined') return DEFAULT_WORKER_URL;
  return localStorage.getItem(STORAGE_KEY_WORKER_URL) || DEFAULT_WORKER_URL;
}

export function saveStoredWorkerUrl(url: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY_WORKER_URL, url.trim() || DEFAULT_WORKER_URL);
}

/**
 * Dispatches an authenticated request to Cloudflare Worker with user API key
 */
export async function sendToCloudflareWorker(
  action: string,
  parameters: Record<string, any> = {}
): Promise<WorkerDispatchResult> {
  const apiKey = getStoredApiKey();
  const workerUrl = getStoredWorkerUrl();
  const startTime = performance.now();

  const requestHeaders = {
    'Authorization': `Bearer ${apiKey}`,
    'X-API-Key': apiKey,
    'X-Requested-With': 'AturdanaClient-Web',
    'Content-Type': 'application/json',
    'X-Client-Version': '2026.1.0'
  };

  const requestPayload = {
    action,
    parameters,
    requestedAt: new Date().toISOString(),
    callerOrigin: typeof window !== 'undefined' ? window.location.origin : 'https://aturdana.id'
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(workerUrl, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(requestPayload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    const endTime = performance.now();
    const data = await response.json();

    return {
      success: response.ok,
      statusCode: response.status,
      latencyMs: Math.round(endTime - startTime),
      endpoint: workerUrl,
      requestHeaders,
      requestPayload,
      responsePayload: data,
      timestamp: new Date().toLocaleTimeString('id-ID'),
      isSimulatedFallback: false,
      message: response.ok ? 'Data berhasil disinkronkan dari Cloudflare Worker.' : `Worker HTTP error: ${response.statusText}`
    };
    } catch (err: any) {
    const endTime = performance.now();
    return {
      success: false,
      statusCode: 0,
      latencyMs: Math.round(endTime - startTime),
      endpoint: workerUrl,
      requestHeaders,
      requestPayload,
      responsePayload: null,
      timestamp: new Date().toLocaleTimeString('id-ID'),
      isSimulatedFallback: true,
      message: `Worker tidak terjangkau: ${err.message || 'Network error'}`
    };
  }

}
