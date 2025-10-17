import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About — FormNestly Studio</title>
      </Head>
      <section className="section">
        <div className="container prose max-w-3xl">
          <h1>About FormNestly Studio</h1>
          <p>We craft clean, modern, and effective templates that help professionals move faster.</p>
          <p>Founded by a small team obsessed with design systems, accessibility, and performance.</p>
        </div>
      </section>
    </>
  )
}
