"use client";

import { useContract, useContractWrite } from "@thirdweb-dev/react";

const CONTRACT_ADDRESS = "DEPLOYED_CONTRACT_ADDRESS";

export default function CheckInButton() {
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { mutateAsync, isLoading } = useContractWrite(contract, "checkIn");

  return (
    <button
      disabled={isLoading}
      onClick={async () => await mutateAsync()}
      className="px-6 py-3 rounded-xl bg-black text-white"
    >
      {isLoading ? "Checking in..." : "Daily Check-In"}
    </button>
  );
}
