import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import posts from '@/data/blog.json'
import { marked } from 'marked'

export default function Post({ post, html }: { post: any, html: string }) {
  if (!post) return <div className="container py-20">Not found</div>
  return (
    <>
      <Head><title>{post.title} — Blog</title></Head>
      <section className="section">
        <div className="container prose max-w-3xl" dangerouslySetInnerHTML={{__html: html}} />
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: posts.map((p:any)=>({ params: { slug: p.slug }})),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = posts.find((p:any)=>p.slug === params?.slug) || null
  const html = post ? marked.parse(post.body_md) : ""
  return { props: { post, html } }
}
