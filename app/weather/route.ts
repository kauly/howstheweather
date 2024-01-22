import { NextRequest } from "next/server";

import { getFormattedOPWInput } from "./_api/ai";

async function POST(request: NextRequest) {
  try {
    const res = await request.json();
    const aiRes = await getFormattedOPWInput(res.city);
    const data = {
      data: aiRes,
    };
    return Response.json(data);
  } catch (err) {
    return Response.error();
  }
}

export { POST };
