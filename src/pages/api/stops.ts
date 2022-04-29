import { NextApiRequest, NextApiResponse } from "next";

import { stopsData } from "@constants/stopsData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(stopsData);
}
