import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload the Rive WASM file with the correct path */}
        <link 
          rel="preload" 
          href="/_next/static/chunks/node_modules_@rive-app_canvas_rive_wasm.wasm" 
          as="fetch" 
          crossOrigin="anonymous" 
          type="application/wasm" 
        />
        
        {/* Note: Hero image is prioritized by Next.js Image component instead of preload */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 