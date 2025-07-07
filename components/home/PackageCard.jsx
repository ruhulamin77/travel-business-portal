import Image from 'next/image';
import React from 'react';

export default function PackageCard({ pkg }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md min-h-96 relative group">
      <Image
        src={pkg.image}
        alt={pkg.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        height={500}
        width={300}
      />
      <div className="p-4 absolute z-10 text-white left-0 right-0  bottom-0 transition-transform duration-500 bg-black/50">
        <h4 className="text-lg ">{pkg.title}</h4>
        <p className="text-gray-300">{pkg.duration}</p>
      </div>
    </div>
  );
}
