import { NextResponse } from "next/server";

import dbConnect from "../../../lib/dbconnect";
import label from "../../../models/temp";

export async function GET() {
  await dbConnect();

  try {
    const labels = await label.find({});
    return NextResponse.json({ success: true, data: labels });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch labels" },
      { status: 500 }
    );
  }
}
