import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-6"
        >
          Smart Templates for Modern Professionals
        </motion.h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mb-8">
          Stand out with minimalist, ATS‑friendly designs. Launch your next resume, invoice, or proposal in minutes.
        </p>
        <div className="flex gap-3">
          <Link href="/templates" className="btn btn-primary">Browse Templates</Link>
          <a href="https://www.etsy.com/shop/FormNestlyStudio" className="btn btn-secondary" target="_blank">Visit Etsy Store</a>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
          className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-accent blur-3xl opacity-20"
        />
      </div>
    </section>
  )
}
