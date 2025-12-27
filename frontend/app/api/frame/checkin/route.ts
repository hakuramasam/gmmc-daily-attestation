import { NextRequest, NextResponse } from "next/server";

const CONTRACT = "DEPLOYED_CONTRACT_ADDRESS";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const address = body.untrustedData?.address;

  return NextResponse.json({
    chainId: "eip155:8453",
    method: "eth_sendTransaction",
    params: {
      to: CONTRACT,
      data: "0x" + "checkIn()", // thirdweb handles ABI
      value: "0x0"
    }
  });
}
