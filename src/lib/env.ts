import type { EnvCapableAstro } from '../types'

/**
 * Reads runtime bindings first so Worker dashboard/Wrangler vars can override
 * build-time .env values, then falls back to Vite's import.meta.env.
 */
export function getEnv(
  env: Record<string, string | undefined>,
  Astro: EnvCapableAstro,
  name: string,
): string | undefined {
  return Astro.locals?.runtime?.env?.[name] ?? env[name]
}
