/* eslint-disable react/jsx-key */
import { popularPackages } from '@/db/data';
import PackageCard from './PackageCard';

export default function PopularPackages() {
  return (
    <section className="py-12 px-4 mx-auto mt-48 md:mt-44 lg:mt-36 space-y-5 container">
      <h2 className="text-center text-3xl font-semibold">Popular Packages</h2>
      <p className="text-center text-lg pb-4 text-gray-500">
        The most popular tour packages presented to you
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularPackages.slice(0, 4).map((pkg) => (
          <PackageCard kay={pkg.id} pkg={pkg} />
        ))}
      </div>
      <div className="flex justify-center pt-10">
        <button className="btn-primary ">Explore more</button>
      </div>
    </section>
  );
}
