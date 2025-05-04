'use client';

import { useAccount } from 'wagmi';

const steps = [
  { id: 1, title: 'Connect Wallet', description: 'Securely connect your wallet to get started.' },
  { id: 2, title: 'Fund Wallet', description: 'Add funds via a fiat on-ramp or faucet.' },
  { id: 3, title: 'Explore dApps', description: 'Start using decentralized apps on Base.' },
];

export default function OnboardingSteps() {
  const { isConnected } = useAccount();

  const currentStep = isConnected ? 2 : 1;

  return (
    <div className="max-w-xl w-full mt-10 space-y-4">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`p-4 rounded-xl border-2 transition-all ${
            step.id === currentStep
              ? 'border-blue-600 bg-blue-50'
              : step.id < currentStep
              ? 'border-green-500 bg-green-50'
              : 'border-gray-300 bg-white'
          }`}
        >
          <h3 className="text-lg font-semibold">{step.title}</h3>
          <p className="text-sm text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
