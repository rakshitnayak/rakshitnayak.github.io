import { NextResponse } from "next/server";

import dbConnect from "../../../lib/dbconnect";
import Label from "../../../models/Labels";

export async function GET() {
  await dbConnect();

  try {
    const labels = await Label.find({});
    return NextResponse.json({ success: true, data: labels });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch labels" },
      { status: 500 }
    );
  }
}
