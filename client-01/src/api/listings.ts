/**
 * Payload REST client for the `listings` collection.
 *
 * Dev: the Vite app runs on :3001 and Payload on :3000, so requests go to the
 *      Payload origin directly (CORS is enabled in payload.config.ts).
 * Prod: set VITE_API_URL to the deployed Payload origin, or serve this app from
 *      the same domain as Payload and leave it unset.
 */
const API_ORIGIN = (
  import.meta.env.VITE_API_URL ?? (import.meta.env.DEV ? 'http://localhost:3000' : '')
).replace(/\/+$/, '');

export interface ListingImage {
  id: number | string;
  url?: string | null;
  alt?: string | null;
}

export interface ListingFeature {
  id?: string | null;
  feature: string;
}

export interface Listing {
  id: number | string;
  title: string;
  location: string;
  thumbnail: ListingImage | number | string;
  capacity: number;
  bedrooms: number;
  features?: ListingFeature[] | null;
  pricePerNight: number;
  airbnbLink: string;
  airbnbRating?: number | null;
}

interface ListingsResponse {
  docs?: Listing[];
  totalDocs?: number;
}

/** Fetch every published listing, newest first. Populates the thumbnail (`depth=1`). */
export async function fetchListings(signal?: AbortSignal): Promise<Listing[]> {
  const response = await fetch(`${API_ORIGIN}/api/listings?limit=100&depth=1&sort=-createdAt`, {
    signal,
  });

  if (!response.ok) {
    throw new Error(`Listings request failed with status ${response.status}`);
  }

  const data = (await response.json()) as ListingsResponse;
  return data.docs ?? [];
}

/** Resolve a Payload media path (`/api/media/file/x.jpg`) into a full URL. */
export function mediaUrl(src?: string | null): string {
  if (!src) return '';
  if (/^(?:https?:)?\/\//.test(src) || src.startsWith('data:')) return src;
  return `${API_ORIGIN}${src}`;
}

/** Thumbnail URL for a listing, or '' when the image is missing/unpopulated. */
export function thumbnailUrl(listing: Listing): string {
  const thumb = listing.thumbnail;
  if (thumb && typeof thumb === 'object') return mediaUrl(thumb.url);
  return '';
}

/** Airbnb ratings are stored 1–5; show at most two decimals (4.9, 4.87). */
export function formatRating(rating?: number | null): string | null {
  if (typeof rating !== 'number' || Number.isNaN(rating)) return null;
  return String(Math.round(rating * 100) / 100);
}
