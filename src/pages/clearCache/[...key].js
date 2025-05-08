import { clearCache } from '../../lib/telegram'

export async function GET({ params }) {
  try {
    const key = import.meta.env.CACHE_CLEAR_KEY
    if (key && key === params.key) {
      clearCache()
      return new Response('Cache clear triggered')
    }
    else {
      return new Response('Invalid request', { status: 500 })
    }
  }
  catch (error) {
    return new Response(error.message, { status: 500 })
  }
}
