// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function healthCheck(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ ok: true })
}
