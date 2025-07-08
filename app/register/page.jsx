'use client';

import Field from '@/components/common/Field';
import Loading from '@/components/common/Loading';
import { auth } from '@/firebase/config';
import useAuthStore from '@/store/useAuthStore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const user = useAuthStore((state) => state.user);
  const loadingUser = useAuthStore((state) => state.loading);

  // Check if user already logged in
  useEffect(() => {
    if (user && !loadingUser) {
      router.push('/');
    }
  }, [router, user, loadingUser]);

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      router.push('/');
    } catch (err) {
      setError('root', { type: 'manual', message: err.message });
    } finally {
      setLoading(false);
    }
  };

  if (loadingUser) return <Loading context={'Checking session...'} />;
  if (user) return null;

  return (
    <>
      <div className="flex-1 flex justify-center items-center bg-slate-100 min-h-screen">
        <div className="max-w-md mx-auto border p-4 rounded-lg  bg-white shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4"
          >
            <Field label="Email" htmlFor="email" error={errors.email}>
              <input
                {...register('email', { required: 'Email is required' })}
                className="border p-2 rounded w-full"
                type="email"
                placeholder="Enter your email"
                id="email"
              />
            </Field>
            <Field label="Password" htmlFor="password" error={errors.password}>
              <input
                {...register('password', { required: 'Password is required' })}
                className="border p-2 rounded w-full"
                type="password"
                placeholder="Enter your password"
                id="password"
              />
            </Field>
            <button
              type="submit"
              className="btn-primary disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
            {errors.root && (
              <p className="text-red-500">{errors.root.message}</p>
            )}
          </form>
          <p className="text-gray-500 py-5">
            Already registered?{' '}
            <Link href="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
