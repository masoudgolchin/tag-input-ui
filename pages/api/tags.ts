// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from "@data/data.json";

type Tag = {
  id: string,
  label: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tag[]>
) {
  res.status(200).json(data);
}
