'use client';
import { dateToTime } from '@/lib/dateToTime';
import { formatMinutesToHours } from '@/lib/formatMinutesToHours';
import { useSearchStore } from '@/store/useSearchStore';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlane } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

export default function FlightCard({ flight, urlPayload }) {
  const setSelectedFlight = useSearchStore((state) => state.setSelectedFlight);

  return (
    <div className="shadow-md rounded-lg py-5 px-6 mb-6 border">
      <div className="grid grid-cols-2 md:grid-cols-9 justify-between items-center gap-5 mt-2">
        <div className="col-span-2 justify-center">
          <div className="overflow-hidden rounded-full w-16 h-16 relative">
            <Image
              fill
              alt="airline"
              src={flight?.air_logo}
              className="rounded-full object-cover"
            />
          </div>
          <div>{flight?.itin_details[0].flight_data[0].airline_name}</div>
        </div>

        <div className="text-lg font-semibold col-span-1">
          <p>
            {dateToTime(flight?.itin_details[0].flight_data[0].departuredate)}
          </p>
          <p>{flight?.itin_details[0].flight_data[0].origincode}</p>
        </div>
        <div className="flex text-center justify-center items-center gap-2 col-span-3">
          <span>
            <FaPlane size={24} />
          </span>
          <div className="flex flex-col items-center">
            <p>
              {formatMinutesToHours(
                flight?.itin_details[0].flight_data[0].duration
              )}
            </p>
            <p className="border border-dashed min-w-24"></p>
            <p className="text-sm font-semibold text-start">
              {flight?.itin_details[0].layover === 0 && ' Direct'}
              {flight?.itin_details[0].layover === 1 && '1 Stop'}
              {flight?.itin_details[0].layover > 1 &&
                flight?.itin_details[0].layover + ' ' + 'Stops'}
            </p>
          </div>

          <span>
            <FaLocationDot size={24} />
          </span>
        </div>

        <div className="text-lg font-semibold">
          <p>
            {dateToTime(flight?.itin_details[0].flight_data[0].arrivaldate)}
          </p>
          <p>{flight?.itin_details[0].flight_data[0].destinationcode}</p>
        </div>

        <div className="col-span-2 flex justify-end items-center">
          <div className="text-center">
            <p className="font-bold text-2xl">${flight?.price_info?.total}</p>
            <p className="my-3">Business Class</p>
            <Link
              href={`/booking/${flight?.resultid}`}
              onClick={() => setSelectedFlight(flight)}
              className="btn-primary"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
