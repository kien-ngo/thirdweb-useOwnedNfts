"use client";

import UseOwnedNftsComponent from "@/src/OwnedNftsComponent";
import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function Page() {
  return (
    <ThirdwebProvider activeChain="ethereum">
      <UseOwnedNftsComponent />
    </ThirdwebProvider>
  );
}
