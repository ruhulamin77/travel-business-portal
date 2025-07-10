'use client';
import Loading from '@/components/common/Loading';
import FlightCard from '@/components/search/FlightCard';
import { axiosClient } from '@/lib/axiosClient';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function SearchResultPage({ searchParams }) {
  const router = useRouter();
  const payload = {
    ...searchParams,
    passenger: {
      adult: Number(searchParams?.adult) || 1,
      children: Number(searchParams?.children) || 0,
      infant: Number(searchParams?.infant) || 0,
    },
  };

  const fetchFlights = async (params) => {
    try {
      const res = await axiosClient.post('/flights', params);
      return res.data;
    } catch (err) {
      throw new Error(
        err?.response?.data?.message || 'Failed to fetch flights'
      );
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['flights', payload],
    queryFn: () => fetchFlights(payload),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  if (isLoading) return <Loading context="Loading Flights..." />;

  if (isError)
    return (
      <div className="flex-1 flex justify-center items-center min-h-screen container">
        <div className="text-center space-y-5">
          <p className="text-rose-500">Error: {error.message}</p>
          <button className="btn-primary " onClick={() => router.back()}>
            Go Back
          </button>
        </div>
      </div>
    );

  return (
    <div className="container pt-20">
      <div className="border rounded col-span-3 p-5">
        {data?.data?.length === 0 ? (
          <p>No flights found.</p>
        ) : (
          data?.data?.map((flight) => (
            <FlightCard key={flight.resultid} flight={flight} />
          ))
        )}
      </div>
    </div>
  );
}
