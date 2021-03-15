import Head from 'next/head'

// Styles
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
// Types
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Component {...pageProps} />
      </body>
    </>
  )
}

export default MyApp
