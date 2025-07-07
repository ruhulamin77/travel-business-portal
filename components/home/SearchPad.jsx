'use client';
import { getTwoDaysAheadISO } from '@/lib/getTwoDaysAheadISO';
import { useSearchStore } from '@/store/useSearchStore';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker';
import { Controller, useForm } from 'react-hook-form';
import { FaCalendarAlt } from 'react-icons/fa';
import Field from '../Field';
import PassengerSelector from './PassengerSelector';

import { FaLocationDot } from 'react-icons/fa6';
export default function SearchPad() {
  // two days ahead date in ISO format
  const twoDaysAhead = getTwoDaysAheadISO();
  const { searchPayload, setSearchPayload } = useSearchStore();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    control,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      origin: 'DAC',
      destination: 'DXB',
      departureDate: twoDaysAhead,
      returnDate: '',
      passenger: {
        adult: 1,
        children: 0,
        infant: 0,
      },
    },
  });

  const onSubmit = (data) => {
    setSearchPayload(data);
    const { passenger, ...rest } = data;
    const query = {
      ...rest,
      ...passenger,
    };

    router.push(`/search?${new URLSearchParams(query).toString()}`);
  };

  return (
    <div className="absolute shadow-md bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 bg-slate-100 rounded-3xl p-6 lg:p-10 w-[90%] container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center">
          <Field label="Your Location" htmlFor={'origin'} error={errors.origin}>
            <input
              {...register('origin', {
                required: 'Location is required',
              })}
              className={`input-field ${
                errors.origin ? 'border-red-500' : 'border-gray-200'
              }`}
              name="origin"
              type="text"
              id="origin"
              placeholder="Origin"
            />
          </Field>

          <button type="button" className="text-gray-500 font-semibold">
            Search History <span>&gt;</span>
          </button>
        </div>

        <hr className="my-4" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 items-start">
          <Field
            label="Location"
            htmlFor={'destination'}
            error={errors.destination}
          >
            <div className="relative">
              <FaLocationDot className="absolute my-auto inset-y-0 left-0 w-10 z-10" />
              <input
                {...register('destination', {
                  required: 'Destination is required',
                })}
                className={`input-field pl-10 ${
                  errors.destination ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Destination"
                name="destination"
                type="text"
                id="destination"
              />
            </div>
          </Field>

          <Field
            label="Check-In"
            htmlFor={'departureDate'}
            error={errors.departureDate}
          >
            <Controller
              id="departureDate"
              control={control}
              name="departureDate"
              rules={{ required: 'Departure date is required' }}
              render={({ field }) => (
                <div className="relative">
                  <FaCalendarAlt className="absolute my-auto inset-y-0 left-0 w-10 z-10" />
                  <DatePicker
                    placeholderText="Select date"
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                    dateFormat="EEE, dd MMM yyyy"
                    className={`input-field pl-10 ${
                      errors.departureDate
                        ? 'border-red-500'
                        : 'border-gray-200'
                    }`}
                  />
                </div>
              )}
            />
          </Field>

          <Field
            label="Check-Out"
            htmlFor={'returnDate'}
            error={errors.returnDate}
          >
            <Controller
              control={control}
              name="returnDate"
              id="returnDate"
              render={({ field }) => (
                <div className="relative">
                  <FaCalendarAlt className="absolute my-auto inset-y-0 left-0 w-10 z-10" />
                  <DatePicker
                    placeholderText="Select date"
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                    dateFormat="EEE, dd MMM yyyy"
                    className={`input-field pl-10 ${
                      errors.returnDate ? 'border-red-500' : 'border-gray-200'
                    }`}
                  />
                </div>
              )}
            />
          </Field>

          {/* Passenger Field */}
          <Controller
            control={control}
            name="passenger"
            rules={{
              validate: (value) =>
                value.adult >= 1 || 'At least one adult is required',
            }}
            render={({ field, fieldState }) => (
              <PassengerSelector
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error}
              />
            )}
          />

          <div className="form-control">
            <div className="input-label opacity-0">Search</div>
            <button
              type="submit"
              className="btn-primary input-field rounded-full"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
