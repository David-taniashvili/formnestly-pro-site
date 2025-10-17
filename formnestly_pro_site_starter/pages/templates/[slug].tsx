import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import data from '@/data/templates.json'
import type { TemplateItem } from '@/types'

export default function Product({ item }: { item: TemplateItem }) {
  if (!item) return <div className="container py-20">Not found</div>
  return (
    <>
      <Head>
        <title>{item.title} — FormNestly Studio</title>
        <meta name="description" content={item.description} />
        <meta property="og:title" content={item.title} />
        <meta property="og:image" content={item.cover_img} />
      </Head>
      <section className="section">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            {item.gallery?.length ? item.gallery.map((src, i) => (
              <img key={i} src={src} alt={`${item.title} ${i+1}`} className="w-full rounded-2xl border" />
            )) : <img src={item.cover_img} alt={item.title} className="w-full rounded-2xl border" />}
          </div>
          <div>
            <h1 className="section-title mb-4">{item.title}</h1>
            <p className="text-muted mb-4">{item.description}</p>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              {item.features.map((f, i)=>(<li key={i}>{f}</li>))}
            </ul>
            <div className="flex items-center gap-4">
              <a href={item.etsy_url || '#'} target="_blank" className="btn btn-primary">Download via Etsy</a>
              <a href="/templates" className="btn btn-secondary">Back to Templates</a>
            </div>
            <div className="mt-10">
              <h3 className="font-semibold mb-2">What’s included</h3>
              <p>Editable files ({item.tools.join(', ')}) and a quick-start guide.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h3 className="section-title">Related templates</h3>
          <p className="text-muted">Coming soon.</p>
        </div>
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const items = data as unknown as TemplateItem[]
  return {
    paths: items.map(i => ({ params: { slug: i.slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const items = data as unknown as TemplateItem[]
  const item = items.find(i => i.slug === params?.slug)
  return { props: { item: item || null } }
}
