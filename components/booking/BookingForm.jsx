'use client';

import { useSearchStore } from '@/store/useSearchStore';
import { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import Field from '../common/Field';
import SelectedFlightDetails from './SelectedFlightDetails';

export default function BookingForm({
  passengerDetails,
  setPassengerDetails,
  onNext,
}) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      passengers: passengerDetails || [],
    },
  });

  // reset the passengers array if somehow default value not set
  useEffect(() => {
    if (passengerDetails.length) {
      reset({ passengers: passengerDetails });
    }
  }, [passengerDetails, reset]);

  const { fields } = useFieldArray({
    control,
    name: 'passengers',
  });

  const selectedFlight = useSearchStore((state) => state.selectedFlight);

  const onSubmit = (data) => {
    setPassengerDetails(data.passengers || []);
    onNext();
  };

  // count same type of passengers
  const typeCounters = {};

  return (
    <div className="container">
      <SelectedFlightDetails selectedFlight={selectedFlight} />
      <h2 className="text-xl font-bold mb-4">Passenger Details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          typeCounters[field.type] = (typeCounters[field.type] || 0) + 1;
          return (
            <div key={field.id} className="border rounded p-4 mb-4 bg-gray-50">
              <h3 className="font-semibold mb-2">
                {`${field.type.toUpperCase()} ${typeCounters[field.type]}`}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Field
                  label="Title*"
                  htmlFor={`passengers[${index}].title`}
                  error={errors.passengers?.[index]?.title}
                >
                  <select
                    {...register(`passengers[${index}].title`, {
                      required: 'Title is required',
                    })}
                    className={`input-field border p-2 rounded ${
                      errors.passengers?.[index]?.title
                        ? 'border-red-500'
                        : 'border-gray-200'
                    }`}
                    name={`passengers[${index}].title`}
                    id={`passengers[${index}].title`}
                  >
                    <option value="">Passenger Type</option>
                    <option value="Mr">Mr.</option>
                    <option value="Mrs">Mrs.</option>
                    <option value="Mrs">Ms.</option>
                  </select>
                </Field>

                <Field
                  label="First Name*"
                  htmlFor={`passengers[${index}].firstName`}
                  error={errors.passengers?.[index]?.firstName}
                >
                  <input
                    {...register(`passengers[${index}].firstName`, {
                      required: 'First Name is required',
                    })}
                    className={`input-field border p-2 rounded ${
                      errors.passengers?.[index]?.firstName
                        ? 'border-red-500'
                        : 'border-gray-200'
                    }`}
                    type="text"
                    placeholder="First Name"
                    id={`passengers[${index}].firstName`}
                    name={`passengers[${index}].firstName`}
                  />
                </Field>

                <Field
                  label="Last Name*"
                  htmlFor={`passengers[${index}].lastName`}
                  error={errors.passengers?.[index]?.lastName}
                >
                  <input
                    {...register(`passengers[${index}].lastName`, {
                      required: 'Last Name is required',
                    })}
                    className={`input-field border p-2 rounded ${
                      errors.passengers?.[index]?.lastName
                        ? 'border-red-500'
                        : 'border-gray-200'
                    }`}
                    type="text"
                    placeholder="Last Name"
                    id={`passengers[${index}].lastNam`}
                    name={`passengers[${index}].lastName`}
                  />
                </Field>
                <Field
                  label="Gender*"
                  htmlFor={`passengers[${index}].gender`}
                  error={errors.passengers?.[index]?.gender}
                >
                  <select
                    {...register(`passengers[${index}].gender`, {
                      required: 'Gender is required',
                    })}
                    className={`input-field border p-2 rounded ${
                      errors.passengers?.[index]?.gender
                        ? 'border-red-500'
                        : 'border-gray-200'
                    }`}
                    placeholder="Gender"
                    id={`passengers[${index}].gender`}
                    name={`passengers[${index}].gender`}
                  >
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </Field>

                <Controller
                  control={control}
                  name={`passengers[${index}].dob`}
                  rules={{
                    required: 'Date of Birth is required',
                    validate: (value) => {
                      if (value && value > new Date()) {
                        return 'Date of Birth cannot be in the future';
                      }
                      return true;
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <Field
                      label="Date of Birth*"
                      htmlFor={`passengers[${index}].dob`}
                      error={fieldState.error}
                    >
                      <div className="flex flex-col">
                        <DatePicker
                          selected={field.value}
                          onChange={(date) => field.onChange(date)}
                          dateFormat={'EEE, dd MMM yyyy'}
                          placeholderText="Date of Birth"
                          className={`input-field w-full border p-2 rounded ${
                            fieldState.error
                              ? 'border-red-500'
                              : 'border-gray-200'
                          }`}
                        />
                      </div>
                    </Field>
                  )}
                />

                <Field
                  label="Country"
                  error={errors.passengers?.[index]?.country}
                >
                  <select
                    {...register(`passengers[${index}].country`)}
                    className="input-field border p-2 rounded"
                    placeholder="Country"
                    id={`passengers[${index}].country`}
                    name={`passengers[${index}].country`}
                  >
                    <option value="">Country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Bhutan">Bhutan</option>
                  </select>
                </Field>
                <Field
                  label="Email"
                  htmlFor={`passengers[${index}].email`}
                  error={errors.passengers?.[index]?.passport}
                >
                  <input
                    {...register(`passengers[${index}].email`, {
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address',
                      },
                    })}
                    className="input-field border p-2 rounded"
                    type="email"
                    placeholder="Email"
                    id={`passengers[${index}].email`}
                    name={`passengers[${index}].email`}
                  />
                </Field>

                {field.type !== 'infant' && field.type !== 'child' && (
                  <Field
                    label="Passport Number"
                    htmlFor={`passengers[${index}].phone`}
                    error={errors.passengers?.[index]?.passport}
                  >
                    <input
                      {...register(`passengers[${index}].passport`)}
                      className="input-field border p-2 rounded"
                      type="text"
                      placeholder="Passport Number"
                      id={`passengers[${index}].phone`}
                      name={`passengers[${index}].phone`}
                    />
                  </Field>
                )}
              </div>
            </div>
          );
        })}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Next: Review
        </button>
      </form>
    </div>
  );
}
