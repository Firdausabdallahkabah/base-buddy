import ConnectWallet from '@/components/ConnectWallet';
import OnboardingSteps from '@/components/OnboardingSteps';
import FundWallet from '@/components/FundWallet';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">🚀 Welcome to Base Buddy</h1>
      <p className="text-gray-700 mb-4">Connect your wallet to begin onboarding.</p>
      <ConnectWallet />
      <OnboardingSteps />
      <FundWallet/>
    </main>
  );
}
