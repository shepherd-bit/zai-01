/**
 * Shared origin for the Payload REST API.
 *
 * Dev: the Vite app runs on :3001 and Payload on :3000, so requests go to the
 *      Payload origin directly (CORS is enabled in payload.config.ts).
 * Prod: set VITE_API_URL to the deployed Payload origin, or serve this app from
 *      the same domain as Payload and leave it unset.
 */
export const API_ORIGIN = (
  import.meta.env.VITE_API_URL ?? (import.meta.env.DEV ? 'http://localhost:3000' : '')
).replace(/\/+$/, '');
