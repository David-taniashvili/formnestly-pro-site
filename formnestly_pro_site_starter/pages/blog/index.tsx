import Head from 'next/head'
import posts from '@/data/blog.json'

export default function Blog() {
  return (
    <>
      <Head><title>Blog — FormNestly Studio</title></Head>
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2">
          {posts.map((p:any)=>(
            <a key={p.id} href={`/blog/${p.slug}`} className="card p-6 hover:shadow-md transition">
              <div className="text-xs text-muted mb-1">{new Date(p.created_at).toDateString()}</div>
              <h3 className="font-semibold text-xl">{p.title}</h3>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
