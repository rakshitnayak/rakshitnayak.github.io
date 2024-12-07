import { NextResponse } from "next/server";

import dbConnect from "../../../lib/dbconnect";
import label from "../../../models/labels";

export async function GET() {
  await dbConnect();

  try {
    const labels = await label.find({});
    return NextResponse.json(
      { success: true, data: labels },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch labels" },
      { status: 500 }
    );
  }
}
