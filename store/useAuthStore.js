import { create } from 'zustand';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config';

const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  initAuthListener: () => {
    set({ loading: true });
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      set({ user, loading: false });
    });
    return unsubscribe;
  },
}));

export default useAuthStore;
