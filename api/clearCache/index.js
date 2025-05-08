import { GET } from '../../src/pages/clearCache/[...url]'

export const config = {
  runtime: 'edge',
}

export default function handler(request) {
  const key = request.url?.split('/clearCache/')?.[1]

  return GET({
    request,
    params: {
      key,
    },
  })
}
