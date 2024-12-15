import { NextResponse } from "next/server";

import dbConnect from "../../../lib/dbconnect";
import { LabelModel } from "@/lib/models";

export async function GET() {
  await dbConnect();

  try {
    const labels = await LabelModel.find({});

    const headers = {
      "Cache-Control": "no-store, must-revalidate",
    };

    return NextResponse.json({ success: true, data: labels }, { headers });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch labels" },
      { status: 500 }
    );
  }
}

export const revalidate = 60;
