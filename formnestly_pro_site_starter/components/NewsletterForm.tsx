import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<string|null>(null)
  const [err, setErr] = useState<string|null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true); setOk(null); setErr(null);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      if (res.ok) {
        setOk('Subscribed! Check your inbox 📥')
        setEmail('')
        window.location.href = '/thanks'
      } else {
        const j = await res.json().catch(() => ({}))
        setErr(j.error || 'Something went wrong')
      }
    } catch (e:any) {
      setErr(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full md:w-[520px] flex gap-2">
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="flex-1 rounded-2xl border border-gray-200 px-4 h-12"
      />
      <button disabled={loading} className="btn btn-primary h-12">
        {loading ? 'Subscribing…' : 'Subscribe'}
      </button>
    </form>
  )
}
