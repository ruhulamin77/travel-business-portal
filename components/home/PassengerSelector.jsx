'use client';
import { useEffect, useRef, useState } from 'react';
import { FaUsers } from 'react-icons/fa';

export default function PassengerSelector({ value, onChange, error }) {
  const handleChange = (type, delta) => {
    const newValue = {
      ...value,
      [type]: (value[type] || 0) + delta,
    };
    onChange(newValue);
  };

  const [showPassenger, setShowPassenger] = useState(false);
  const passengerRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        passengerRef.current &&
        !passengerRef.current.contains(event.target)
      ) {
        setShowPassenger(false);
      }
    }
    if (showPassenger) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPassenger]);

  return (
    <div className="form-control">
      <span className="input-label">Guest</span>
      <div className="relative">
        <div className="relative">
          <FaUsers className="absolute my-auto inset-y-0 left-0 w-10" />
          <button
            onClick={() => setShowPassenger(!showPassenger)}
            type="button"
            className={`input-field pl-10 bg-white border border-gray-300 text-left ${
              error ? 'border-red-500' : ''
            }`}
          >
            {Number(value.adult) +
              Number(value.children) +
              Number(value.infant)}
          </button>
        </div>
        {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
        {showPassenger && (
          <div
            ref={passengerRef}
            className="mt-2 p-4 border rounded shadow bg-white absolute w-full z-10"
          >
            <div className="flex justify-around items-center gap-2 mb-2">
              <span className="min-w-20">Adults</span>
              <button
                type="button"
                onClick={() => handleChange('adult', -1)}
                disabled={value.adult <= 0}
                className="px-2 py-0 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                -
              </button>
              <span>{value.adult}</span>
              <button
                type="button"
                onClick={() => handleChange('adult', 1)}
                className="px-2 py-0 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                +
              </button>
            </div>
            <div className="flex justify-around items-center gap-2 mb-2">
              <span className="min-w-20">Children</span>
              <button
                type="button"
                onClick={() => handleChange('children', -1)}
                disabled={value.children <= 0}
                className="px-2 py-0 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                -
              </button>
              <span>{value.children}</span>
              <button
                type="button"
                onClick={() => handleChange('children', 1)}
                className="px-2 py-0 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                +
              </button>
            </div>
            <div className="flex justify-around items-center gap-2">
              <span className="min-w-20">Infants</span>
              <button
                type="button"
                onClick={() => handleChange('infant', -1)}
                disabled={value.infant <= 0}
                className="px-2 py-0 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                -
              </button>
              <span>{value.infant}</span>
              <button
                type="button"
                onClick={() => handleChange('infant', 1)}
                className="px-2 py-0 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
