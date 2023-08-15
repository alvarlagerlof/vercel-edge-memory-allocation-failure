import type { NextApiRequest, NextApiResponse } from 'next'

export const runtime = 'edge'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const extendArray = (array: any[]) => {
    array.push(new Array(1000000).fill('test'))
  }

  const testArray: any[] = []

  for (let i = 0; i <= 1000; i++) {
    extendArray(testArray)
  }

  res.status(200).json({ name: 'John Doe' })
}
