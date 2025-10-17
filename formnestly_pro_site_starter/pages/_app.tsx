import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#007BFF" />
        <meta property="og:image" content="/og.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
