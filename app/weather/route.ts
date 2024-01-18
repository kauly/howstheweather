import { NextRequest } from "next/server";
import { getFormattedOPWInput } from "./_api/ai";

async function POST(request: NextRequest) {
  const res = await request.json();
  try {
    const aiRes = await getFormattedOPWInput(res.city);
    console.log("🚀 ~ POST ~ aiRes:", aiRes);
    return Response.json({
      data: aiRes,
    });
  } catch (err) {
    console.log("🚀 ~ POST ~ err:", err);
    return Response.json({
      data: "error",
    });
  }
}

export { POST };
