import React from 'react';

export default function loading() {
  return (
    <div className="flex flex-1 items-center justify-center min-h-screen">
      <div className="text-center space-y-2">
        <span className="text-xl text-gray-700">Loading...</span>
        <div className="h-10 w-10 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto" />
      </div>
    </div>
  );
}
