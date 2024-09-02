export const runtime = 'edge'

export const preferredRegion = ['gru1']

export async function GET() {
 
  return new Response('Hello', { status: 200 })
}
