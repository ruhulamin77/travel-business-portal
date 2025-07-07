const { auth } = require('@/firebase/config');
const { onAuthStateChanged } = require('firebase/auth');
const { useEffect, useState } = require('react');

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [test, setTest] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading, test, setTest };
};
