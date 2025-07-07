/* eslint-disable react/jsx-key */
import React from 'react';
import PackageCard from './PackageCard';
import { popularPackages } from '@/db/data';

export default function LatestArticles() {
  return (
    <section className="py-12 px-4 space-y-5 container">
      <h2 className="text-center text-3xl font-semibold">
        Our latest articles about travel
      </h2>
      <p className="text-center text-lg pb-4 text-gray-500">
        Know the latest articles about travel
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularPackages.slice(4, 7).map((pkg) => (
          <PackageCard kay={pkg.id} pkg={pkg} />
        ))}
      </div>
      <div className="flex justify-center pt-10">
        <button className="btn-primary ">Explore more</button>
      </div>
    </section>
  );
}
