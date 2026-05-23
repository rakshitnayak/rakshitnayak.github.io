import { NextResponse } from "next/server";

import dbConnect from "../../../lib/dbconnect";
import { ConfigModel } from "@/lib/models";
import { verifyApiSecret } from "@/lib/apiAuth";

export async function GET() {
  await dbConnect();

  try {
    const configs = await ConfigModel.find({});

    const headers = {
      "Cache-Control": "no-store, must-revalidate",
    };
    return NextResponse.json({ success: true, data: configs }, { headers });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to fetch configs" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  const auth = verifyApiSecret(request);
  if (!auth.ok) {
    return NextResponse.json(
      { success: false, error: auth.error },
      { status: auth.status }
    );
  }

  await dbConnect();

  try {
    const body = await request.json();
    const { _id, id, ...updates } = body;
    const docId =
      _id || id || new URL(request.url).searchParams.get("id");

    if (!docId) {
      const existing = await ConfigModel.findOne({});
      if (!existing) {
        return NextResponse.json(
          { success: false, error: "No config document found" },
          { status: 404 }
        );
      }

      const config = await ConfigModel.findByIdAndUpdate(
        existing._id,
        { $set: updates },
        { new: true, runValidators: true }
      );

      return NextResponse.json({ success: true, data: config });
    }

    const config = await ConfigModel.findByIdAndUpdate(
      docId,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!config) {
      return NextResponse.json(
        { success: false, error: "Config not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: config });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to update config" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const auth = verifyApiSecret(request);
  if (!auth.ok) {
    return NextResponse.json(
      { success: false, error: auth.error },
      { status: auth.status }
    );
  }

  await dbConnect();

  try {
    const body = await request.json();
    const { _id, id, ...payload } = body;

    if (_id || id) {
      const docId = _id || id;
      const config = await ConfigModel.findByIdAndUpdate(
        docId,
        { $set: payload },
        { new: true, runValidators: true, upsert: false }
      );

      if (!config) {
        return NextResponse.json(
          { success: false, error: "Config not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({ success: true, data: config });
    }

    const config = await ConfigModel.create(payload);
    return NextResponse.json({ success: true, data: config }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to create config" },
      { status: 500 }
    );
  }
}

export const revalidate = 60;
