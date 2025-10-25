import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* Add all availabel routes here */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">MetaBlock Technologies LLP</h1>
        <p className="text-lg text-gray-600">
          Welcome to the MetaBlock Technologies LLP website. Please use the
          links below to navigate to our important policy pages.
        </p>
        <div className="space-y-4">
          <Link
            href="/terms-and-conditions"
            className="text-blue-600 hover:underline block"
          >
            Terms and Conditions
          </Link>
          <Link
            href="/privacy-policy"
            className="text-blue-600 hover:underline block"
          >
            Privacy Policy
          </Link>
          <Link
            href="/refund-policy"
            className="text-blue-600 hover:underline block"
          >
            Refund Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
