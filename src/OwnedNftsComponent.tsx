"use client";

import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react";

export default function UseOwnedNftsComponent() {
  const contractAddress = "0xCD4Ef397D4f1c936336C19fbc4ac43b78708C439";
  const { contract } = useContract(contractAddress, "nft-drop");
  const { data: nfts, isLoading } = useOwnedNFTs(contract, useAddress());

  // This doesn't return any item
  console.log({ nfts, isLoading });

  return (
    <div className="mx-auto mt-20 flex flex-col">
      <div className="mx-auto">
        <ConnectWallet />
      </div>
      <div>
        {nfts && nfts?.length > 0 && (
          <div>
            {nfts.map((nft) => (
              <div key={nft.metadata.id.toString()}>
                <h1>{nft.metadata.name}</h1>
                <ThirdwebNftMedia metadata={nft.metadata} />
                <p>owned by {nft.owner}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
