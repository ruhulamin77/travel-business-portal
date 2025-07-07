import { travelRecommendation } from '@/db/data';
import Image from 'next/image';
import { GoStarFill } from 'react-icons/go';

export default function TravelRecommendations() {
  return (
    <section className="py-12 px-4 container">
      <h3 className="text-3xl font-bold text-center mb-8">
        Travel Recommendations
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {travelRecommendation.map((i) => (
          <div
            key={i.id}
            className="rounded-lg overflow-hidden shadow flex flex-col"
          >
            <Image
              src={i.image}
              alt={i.title}
              height={500}
              width={300}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <span className="flex justify-between">
                <h4 className="text-xl font-bold">{i.title}</h4>
                <p className="text-black font-semibold flex items-center gap-1 text-xl">
                  <GoStarFill className="text-yellow-500 inline" /> {i.rating}
                </p>
              </span>
              <p className="text-gray-500">{i.description}</p>
              <span className="flex justify-between items-center mt-auto">
                <p className="font-bold text-xl">$ {i.price}</p>
                <button className="btn-primary">Book Now</button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
