import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-heading font-bold">
          <img src="/logo.svg" alt="FormNestly Studio" className="h-8 w-auto" />
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/templates" className="hover:underline">Templates</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="/terms" className="hover:underline">Terms</Link>
          <a href="https://www.etsy.com/shop/FormNestlyStudio" target="_blank" className="btn btn-secondary">Visit Etsy</a>
        </nav>
      </div>
    </header>
  )
}
