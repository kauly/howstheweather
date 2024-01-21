import { NextRequest } from "next/server";
import { getFormattedOPWInput } from "./_api/ai";

async function POST(request: NextRequest) {
  const res = await request.json();
  try {
    const aiRes = await getFormattedOPWInput(res.city);
    return Response.json({
      data: aiRes,
    });
  } catch (err) {
    return Response.error();
  }
}

export { POST };
