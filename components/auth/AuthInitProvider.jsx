'use client';
import useAuthStore from '@/store/useAuthStore';
import { Fragment, useEffect } from 'react';

export default function AuthInitProvider({ children }) {
  const initAuthListener = useAuthStore((state) => state.initAuthListener);
  useEffect(() => {
    const unsubscribe = initAuthListener();
    return () => unsubscribe();
  }, [initAuthListener]);

  return <Fragment>{children}</Fragment>;
}
