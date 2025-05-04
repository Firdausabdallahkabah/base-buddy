// components/FundWallet.tsx
'use client';

import { useAccount } from 'wagmi';

export default function FundWallet() {
  const { address, isConnected } = useAccount();

  if (!isConnected) return null;

  return (
    <div className="mt-6 text-center">
      <h2 className="text-xl font-semibold mb-2">Need Testnet ETH?</h2>
      <p className="mb-4 text-sm text-gray-600">Use a faucet to fund your wallet on Base Sepolia.</p>
      <a
        href="https://www.alchemy.com/faucets/base-sepolia"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
      >
        Open Faucet
      </a>
    </div>
  );
}
