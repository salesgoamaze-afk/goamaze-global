import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">404</h1>
      <h2 className="text-xl sm:text-2xl font-bold text-slate-200 mb-2">Page Not Found</h2>
      <p className="text-slate-400 text-sm max-w-md mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn-primary py-2.5 px-6 text-sm font-bold">
        Return to Home
      </Link>
    </div>
  );
}
