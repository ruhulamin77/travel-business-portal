'use client';

import BookingForm from '@/components/booking/BookingForm';
import Payment from '@/components/booking/Payment';
import ProgressBar from '@/components/booking/ProgressBar';
import Review from '@/components/booking/Review';
import Loading from '@/components/common/Loading';
import useAuthStore from '@/store/useAuthStore';
import { useSearchStore } from '@/store/useSearchStore';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function BookingPage({ params: { bookingId } }) {
  const [step, setStep] = useState(1);
  const [passengerDetails, setPassengerDetails] = useState([]);
  const router = useRouter();

  const searchPayload = useSearchStore((state) => state.searchPayload);
  const user = useAuthStore((state) => state.user);
  const userLoading = useAuthStore((state) => state.loading);

  useEffect(() => {
    if (!userLoading && !user) {
      router.push(`/login?redirect=/booking/${bookingId}`);
    }
  }, [userLoading, user, router, bookingId]);

  useEffect(() => {
    const adultCount = parseInt(searchPayload?.passenger?.adult || 0);
    const childrenCount = parseInt(searchPayload?.passenger?.children || 0);
    const infantCount = parseInt(searchPayload?.passenger?.infant || 0);

    if (passengerDetails.length === 0) {
      const adultDetails = Array.from({ length: adultCount }, () => ({
        type: 'adult',
      }));
      const childrenDetails = Array.from({ length: childrenCount }, () => ({
        type: 'child',
      }));
      const infantDetails = Array.from({ length: infantCount }, () => ({
        type: 'infant',
      }));
      const details = [...adultDetails, ...childrenDetails, ...infantDetails];
      setPassengerDetails(details);
    }
  }, [passengerDetails.length, searchPayload]);

  if (userLoading) return <Loading context={'Checking session...'} />;
  if (!user) return null;

  function handleBookingConfirm() {
    toast.success('Booking Successful!', { position: 'top-center' });
    router.push('/');
  }

  return (
    <Fragment>
      <div className="container p-4 pt-32">
        <ProgressBar step={step} />

        {step === 1 && (
          <BookingForm
            passengerDetails={passengerDetails}
            setPassengerDetails={setPassengerDetails}
            onNext={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <Review
            passengerDetails={passengerDetails}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}

        {step === 3 && (
          <Payment onBack={() => setStep(2)} onConfirm={handleBookingConfirm} />
        )}
      </div>
    </Fragment>
  );
}
