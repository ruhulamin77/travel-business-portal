export default function Payment({ onBack, onConfirm }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Payment</h2>
      <p className="mb-4">
        Payment gateway integration here (for now fake submit).
      </p>
      <div className="flex justify-between">
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={onConfirm}
        >
          Pay & Confirm
        </button>
      </div>
    </div>
  );
}
