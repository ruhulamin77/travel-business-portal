import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400   font-bold text-4xl"
    >
      TBP
    </Link>
  );
}
