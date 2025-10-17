import Head from 'next/head'
import TemplatesGrid from '@/components/TemplatesGrid'

export default function TemplatesPage() {
  return (
    <>
      <Head>
        <title>All Templates — FormNestly Studio</title>
        <meta name="description" content="Browse resume, invoice, and proposal templates."/>
      </Head>
      <TemplatesGrid />
    </>
  )
}
