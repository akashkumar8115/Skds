"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-red-900 to-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold">500</h1>
        <p className="mt-4 text-2xl font-semibold">
          Something Broke in the Studio!
        </p>
        <p className="mt-2 text-lg">
          An unexpected error occurred. Our designers are working to fix it!
        </p>
        <button
          onClick={reset}
          className="mt-6 inline-block rounded-full bg-red-600 px-6 py-3 text-lg font-medium text-white hover:bg-red-700 transition"
        >
          Try Again
        </button>
        <p className="mt-4 text-sm">Error: {error.message}</p>
      </div>
    </div>
  );
}