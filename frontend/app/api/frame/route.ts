import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const image = `${process.env.NEXT_PUBLIC_APP_URL}/frame.png`;

  return NextResponse.json({
    version: "vNext",
    image,
    buttons: [
      {
        label: "🔥 Daily Check-In",
        action: "tx",
        target: `${process.env.NEXT_PUBLIC_APP_URL}/api/frame/checkin`
      }
    ],
    post_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/frame/confirm`
  });
}
