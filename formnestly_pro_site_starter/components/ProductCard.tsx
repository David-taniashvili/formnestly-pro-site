import Link from 'next/link'
import Image from 'next/image'
import type { TemplateItem } from '@/types'

export default function ProductCard({ t }: { t: TemplateItem }) {
  return (
    <div className="card overflow-hidden">
      <Link href={`/templates/${t.slug}`}>
        {/* Using regular img for simplicity, Next/Image can be added */}
        <img src={t.cover_img} alt={t.title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <div className="text-xs text-muted mb-1">{t.category}</div>
        <h3 className="font-semibold text-lg mb-2">
          <Link href={`/templates/${t.slug}`}>{t.title}</Link>
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 min-h-[40px]">{t.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="font-semibold">${"{:.2f}".format(9.99)}</div>
          <Link href={`/templates/${t.slug}`} className="btn btn-secondary text-sm">Preview</Link>
        </div>
      </div>
    </div>
  )
}
