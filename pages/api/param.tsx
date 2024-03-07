import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title'

    return new ImageResponse(
      (
          <div
              style={{
                  backgroundColor: 'black',
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  flexWrap: 'nowrap',
              }}
          >
              <div
                  style={{
                      fontSize: 30,
                      fontStyle: 'italic',
                      letterSpacing: '-0.025em',
                      color: 'white',
                      marginTop: 30,
                      padding: '0 120px',
                      lineHeight: 1.2,
                      whiteSpace: 'pre-wrap',
                  }}
              >
                  Boulama's blog
              </div>
              <div
                  style={{
                      fontSize: 50,
                      fontStyle: 'normal',
                      letterSpacing: '-0.025em',
                      color: 'white',
                      padding: '0 120px',
                      lineHeight: 1.2,
                      whiteSpace: 'pre-wrap',
                  }}
              >
                  {title}
              </div>
          </div>
      ),
        {
            width: 1200,
            height: 630,
        }
    )
  } catch (e: any) {
      console.log(`${e.message}`)
      return new Response(`Failed to generate the image`, {
          status: 500,
      })
  }
}
