import { ThirdwebProvider } from "@thirdweb-dev/react";

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider
      activeChain="base"
      clientId="7255c59ecd853bb68684ab64db95f5f8"
    >
      {children}
    </ThirdwebProvider>
  );
}
