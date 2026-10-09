/**
 * Payload REST client for the `gallery` collection.
 *
 * The origin comes from `client.ts` — see that file for the dev/prod rules.
 */
import { API_ORIGIN, mediaUrl } from './client';

export interface GalleryImage {
  id: number | string;
  url?: string | null;
  alt?: string | null;
}

export interface GalleryPost {
  id: number | string;
  image: GalleryImage | number | string;
  location: string;
  site?: string | null;
}

interface GalleryResponse {
  docs?: GalleryPost[];
  totalDocs?: number;
}

/** Fetch every gallery post, in the order they were created in the admin. */
export async function fetchGalleryPosts(signal?: AbortSignal): Promise<GalleryPost[]> {
  const response = await fetch(`${API_ORIGIN}/api/gallery?limit=100&depth=1&sort=createdAt`, {
    signal,
  });

  if (!response.ok) {
    throw new Error(`Gallery request failed with status ${response.status}`);
  }

  const data = (await response.json()) as GalleryResponse;
  return data.docs ?? [];
}

/** Image URL for a post, or '' when the image is missing/unpopulated. */
export function galleryImageUrl(post: GalleryPost): string {
  const image = post.image;
  if (image && typeof image === 'object') return mediaUrl(image.url);
  return '';
}

/** Alt text for a post's image, falling back to "Site, Location". */
export function galleryAlt(post: GalleryPost): string {
  const image = post.image;
  const alt = image && typeof image === 'object' ? image.alt?.trim() : '';
  if (alt) return alt;

  const site = post.site?.trim();
  const location = post.location?.trim() ?? '';
  return site ? `${site}, ${location}` : location;
}

/**
 * Captions read "Diani, KE" — the country suffix is added automatically.
 * A location that already ends in KE is left as typed.
 */
export function formatLocation(location?: string | null): string {
  const value = (location ?? '').trim();
  if (!value) return '';
  return /,?\s*KE$/i.test(value) ? value : `${value}, KE`;
}

/** The site is optional — fall back to the location so a card is never blank. */
export function galleryTitle(post: GalleryPost): string {
  const site = post.site?.trim();
  if (site) return site;
  return post.location?.trim() || 'Coastal moment';
}
