import { formatToLongDate } from '@/utils/formatToLongDate';

export default function SelectedFlightDetails({ selectedFlight }) {
  return (
    <div className="space-y-1 p-4 bg-gray-100 rounded-md mb-5">
      <p>
        <span className="mr-2 font-semibold">Airline:</span>
        <span>
          {selectedFlight.itin_details[0]?.flight_data[0]?.airline_name}
        </span>
      </p>
      <p>
        <span className="mr-2 font-semibold">Departure Data</span>
        <span>
          {formatToLongDate(
            selectedFlight.itin_details[0]?.flight_data[0]?.departuredate
          )}
        </span>
      </p>
      <p>
        <span className="mr-2 font-semibold">From:</span>
        <span>
          {selectedFlight.itin_details[0]?.flight_data[0]?.origincode}
        </span>
      </p>
      <p>
        <span className="mr-2 font-semibold">To:</span>
        <span>
          {selectedFlight.itin_details[0]?.flight_data[0]?.destinationcode}
        </span>
      </p>
    </div>
  );
}
