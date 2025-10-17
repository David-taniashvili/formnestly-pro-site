import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' })
  const { email, source } = req.body || {}
  if (!email || typeof email !== 'string') return res.status(400).json({ error: 'Invalid email' })

  try {
    if (!supabase) return res.status(200).json({ ok: true, notice: 'Supabase not configured; dev mode' })
    const { error } = await supabase.from('subscribers').insert({ email, source })
    if (error) return res.status(400).json({ error: error.message })
    return res.status(200).json({ ok: true })
  } catch (e:any) {
    return res.status(500).json({ error: e.message })
  }
}
