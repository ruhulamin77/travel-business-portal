import { formatDOB } from '@/lib/formatDOB';
import { getPassengerLabel } from '@/lib/getPassengerLabel';

export default function Review({ passengerDetails, onBack, onNext }) {
  const typeCounters = {};
  return (
    <div className="">
      <h2 className="text-xl font-bold mb-4">Review Details</h2>
      {passengerDetails.map((p, i) => {
        typeCounters[p.type] = (typeCounters[p.type] || 0) + 1;
        return (
          <div key={i} className="border rounded p-4 mb-4 bg-gray-50">
            <h3 className="font-semibold mb-2">
              {' '}
              {`${p.type.toUpperCase()} ${typeCounters[p.type]}`}
            </h3>
            <p>Title: {p?.title}</p>
            <p>First name: {p?.firstName}</p>
            <p>Last name: {p?.lastName}</p>
            <p>Gender: {p?.gender}</p>
            <p>Date of birth: {formatDOB(p?.dob) || ''}</p>
            <p>Country: {p?.country || 'N/A'}</p>
            <p>Email: {p?.email || 'N/A'}</p>
            <p>Phone Number: {p?.phone || 'N/A'}</p>
          </div>
        );
      })}
      <div className="flex justify-between mt-4">
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={onNext}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
