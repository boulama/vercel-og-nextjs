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
      : 'Ilimmi'

    return new ImageResponse(
      (
          <div
              style={{
                  backgroundColor: '#FFEDD5',
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  flexWrap: 'nowrap',
              }}
          >
              <svg width="106" height="100" viewBox="0 0 245 229" version="1.1" xmlns="http://www.w3.org/2000/svg"
              >
                  <defs>
                      <linearGradient x1="0%" y1="49.9989119%" x2="100%" y2="49.9989119%" id="linearGradient-1">
                          <stop stopColor="#C2410C" offset="0%"></stop>
                          <stop stopColor="#EA580C" offset="100%"></stop>
                      </linearGradient>
                      <linearGradient x1="0%" y1="49.9989556%" x2="100%" y2="49.9989556%" id="linearGradient-2">
                          <stop stopColor="#EA580C" offset="0%"></stop>
                          <stop stopColor="#C2410C" offset="100%"></stop>
                      </linearGradient>
                  </defs>
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="more-than"
                         transform="translate(122.500000, 114.500000) rotate(-90.000000) translate(-122.500000, -114.500000) translate(8.500000, -7.500000)"
                         fillRule="nonzero">
                          <path
                              d="M228,120.119471 L228,136.445253 C228,139.1709 226.404,141.650676 223.896,142.802754 L5.778375,243.616564 C3.085125,244.859965 2.84217094e-14,242.928128 2.84217094e-14,239.99876 L2.84217094e-14,214.793551 C2.84217094e-14,212.580719 1.29675,210.564583 3.3345,209.623252 L214.840125,111.872282 C220.967625,109.041262 228,113.445851 228,120.119471 Z"
                              id="Path" fill="url(#linearGradient-1)"></path>
                          <path
                              d="M223.361625,143 C225.606,141.983662 228,140.180021 228,136.06457 C228,133.38058 228,109.582535 228,109.582535 C228,106.8055 226.404,104.278971 223.896,103.105173 L5.778375,0.390664758 C3.085125,-0.876178522 0,1.09208081 0,4.07667769 L0,29.757094 C0,32.0116456 1.29675,34.0657926 3.3345,35.0248717 C3.3345,35.0248717 219.06525,136.608525 220.397625,137.238368 C225.87675,139.800684 223.361625,143 223.361625,143 Z"
                              id="Path" fill="url(#linearGradient-2)"></path>
                      </g>
                  </g>
              </svg>
              <div
                  style={{
                      fontSize: 30,
                      fontStyle: 'italic',
                      letterSpacing: '-0.025em',
                      color: 'white',
                      textShadow: '1px 1px 2px black',
                      marginTop: 30,
                      padding: '0 120px',
                      lineHeight: 1.2,
                      whiteSpace: 'pre-wrap',
                  }}
              >
                  Ilimmi Docs
              </div>
              <div
                  style={{
                      fontSize: 65,
                      fontStyle: 'normal',
                      letterSpacing: '-0.025em',
                      color: '#EA580C',
                      padding: '0 120px',
                      textShadow: '1px 1px 2px black',
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
