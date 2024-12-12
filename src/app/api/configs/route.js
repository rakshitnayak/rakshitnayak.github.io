import { NextResponse } from "next/server";

import dbConnect from "../../../lib/dbconnect";
import config from "../../../models/config";

export async function GET() {
  await dbConnect();

  try {
    const configs = await config.find({});

    const headers = {
      "Cache-Control": "no-store, must-revalidate",
    };

    return NextResponse.json({ success: true, data: configs }, { headers });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch configs" },
      { status: 500 }
    );
  }
}

export const revalidate = 60;
