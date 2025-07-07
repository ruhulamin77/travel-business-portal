export default function ProgressBar({ step }) {
  const steps = ['Booking', 'Review', 'Payment'];

  return (
    <div className="container w-full flex justify-between items-center mb-6">
      {steps.map((label, i) => (
        <div key={i} className="flex-1 flex items-center mx-auto">
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full text-white ${
              step > i ? 'bg-green-500' : 'bg-gray-400'
            }`}
          >
            {i + 1}
          </div>
          {i < steps.length - 1 && (
            <div
              className={`flex-1 h-1 ${
                step > i + 1 ? 'bg-green-500' : 'bg-gray-300'
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
