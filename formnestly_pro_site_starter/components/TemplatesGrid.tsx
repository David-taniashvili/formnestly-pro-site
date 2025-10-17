'use client'
import { useMemo, useState } from 'react'
import data from '@/data/templates.json'
import ProductCard from './ProductCard'
import type { TemplateItem } from '@/types'

const categories = ['All','Resume','Invoice','Proposal','Other'] as const
const sorts = ['Most Popular','Newest','Price'] as const

export default function TemplatesGrid() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState<typeof categories[number]>('All')
  const [sort, setSort] = useState<typeof sorts[number]>('Most Popular')

  const items = useMemo(()=>{
    let arr = data as unknown as TemplateItem[]
    if (cat !== 'All') arr = arr.filter(i => i.category === cat)
    if (q) arr = arr.filter(i => (i.title + ' ' + i.description).toLowerCase().includes(q.toLowerCase()))
    if (sort === 'Price') arr = [...arr].sort((a,b)=>a.price - b.price)
    if (sort === 'Newest') arr = [...arr].reverse()
    return arr
  }, [q,cat,sort])

  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <h2 className="section-title">Templates</h2>
          <div className="flex gap-2">
            <select className="rounded-2xl border px-3 h-10" value={cat} onChange={(e)=>setCat(e.target.value as any)}>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select className="rounded-2xl border px-3 h-10" value={sort} onChange={(e)=>setSort(e.target.value as any)}>
              {sorts.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <input placeholder="Search…" className="rounded-2xl border px-3 h-10" value={q} onChange={(e)=>setQ(e.target.value)}/>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(t => <ProductCard key={t.id} t={t} />)}
        </div>
      </div>
    </section>
  )
}
