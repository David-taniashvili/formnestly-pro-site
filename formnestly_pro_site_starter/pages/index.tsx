import Head from 'next/head'
import Hero from '@/components/Hero'
import TemplatesGrid from '@/components/TemplatesGrid'
import NewsletterForm from '@/components/NewsletterForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>FormNestly Studio — Smart Templates for Modern Professionals</title>
        <meta name="description" content="Minimalist, ATS-friendly templates: resumes, invoices, proposals." />
      </Head>
      <Hero />
      <TemplatesGrid />
      <section className="section">
        <div className="container">
          <h3 className="section-title">Join our newsletter</h3>
          <p className="text-muted mb-4">Product launches, freebies, and tips — no spam.</p>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}
