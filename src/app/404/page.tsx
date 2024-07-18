// pages/404.tsx
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-600">404</h1>
        <p className="text-lg mb-4">Sorry, the page you're looking for does not exist.</p>
        <Link href="/">
          <span className="text-blue-500 hover:text-blue-700 transition duration-200">Go back to Home</span>
        </Link>
      </div>
    </div>
  );
}
