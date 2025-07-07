'use client';

import Loading from '@/components/common/Loading';
import Field from '@/components/Field';
import { auth } from '@/firebase/config';
import useAuthStore from '@/store/useAuthStore';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function LoginPage(s) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';
  const [loading, setLoading] = useState(false);
  const user = useAuthStore((state) => state.user);
  const loadingUser = useAuthStore((state) => state.loading);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!loadingUser && user) {
      router.push(redirect);
    }
  }, [user, router, loadingUser, redirect]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      router.push(redirect);
    } catch (err) {
      setError('root', { type: 'manual', message: err.message });
    } finally {
      setLoading(false);
    }
  };

  if (loadingUser) {
    return <Loading context={'Checking session...'} />;
  }

  //  if user logged-in then nothing is render just redirect to the effect
  if (user) {
    return null;
  }

  return (
    <div className="flex-1 flex justify-center items-center bg-slate-100 ">
      <div className="max-w-lg mx-auto border p-5 rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
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
            {loading ? 'Signing in...' : 'Login'}
          </button>
          {errors.root && <p className="text-red-500">{errors.root.message}</p>}
        </form>
        <p className="text-gray-500 py-5">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
