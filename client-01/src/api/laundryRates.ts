import { API_ORIGIN } from './client';

export interface LaundryRate {
  id: number | string;
  itemName: string;
  price: number;
  description?: string | null;
}

interface LaundryRatesResponse {
  docs?: LaundryRate[];
  totalDocs?: number;
}

/** Fetch every laundry rate, in the order they were created in the admin. */
export async function fetchLaundryRates(signal?: AbortSignal): Promise<LaundryRate[]> {
  const response = await fetch(`${API_ORIGIN}/api/laundry-rates?limit=100&sort=createdAt`, {
    signal,
  });

  if (!response.ok) {
    throw new Error(`Laundry rates request failed with status ${response.status}`);
  }

  const data = (await response.json()) as LaundryRatesResponse;
  return data.docs ?? [];
}

/** 250 → "250", 1200 → "1,200". */
export function formatPrice(price: number): string {
  if (typeof price !== 'number' || Number.isNaN(price)) return '';
  return price.toLocaleString('en-US');
}

/**
 * The collection only stores `price`, so the pricing unit is inferred from the
 * description when it mentions one ("Wash + fold, per kg" → "KES / kg") and
 * falls back to plain "KES".
 */
export function unitLabel(rate: LaundryRate): string {
  const text = `${rate.itemName ?? ''} ${rate.description ?? ''}`.toLowerCase();

  if (/rush|express|\+50%/.test(text)) return 'rush fee';
  if (/\bkilos?\b|\bkg\b|per kg/.test(text)) return 'KES / kg';
  if (/\bpairs?\b|shoes?|sneakers?|boots/.test(text)) return 'KES / pair';
  if (/\bpieces?\b|duvets?|beddings?|per item/.test(text)) return 'KES / piece';
  return 'KES';
}

/** Decorative glyphs that cycle through the cards (the collection has no icon field). */
const ICONS = ['◐', '▭', '✦', '⬗', '≡', '↻'];

export function rateIcon(index: number): string {
  return ICONS[index % ICONS.length];
}
