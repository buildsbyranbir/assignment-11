import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // Simulating user state for the purpose of the UI demo
  // In a real app, this uses onAuthStateChanged from firebase/auth
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock function to simulate sign in
  const signIn = (email, password) => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser = {
            email,
            displayName: "Demo User",
            photoURL: "https://i.pravatar.cc/150?img=3",
            role: email.includes('admin') ? 'admin' : 'student'
        };
        setUser(mockUser);
        localStorage.setItem('scholar_token', 'mock_jwt_token');
        setLoading(false);
        resolve(mockUser);
      }, 1000);
    });
  };

  const createUser = (email, password) => {
    return signIn(email, password);
  };

  const googleSignIn = () => {
    return signIn("googleuser@gmail.com", "password");
  };

  const logOut = () => {
    setLoading(true);
    return new Promise((resolve) => {
        setUser(null);
        localStorage.removeItem('scholar_token');
        setLoading(false);
        resolve();
    });
  };

  useEffect(() => {
    // Check for existing session (Mocking Firebase persistence)
    const token = localStorage.getItem('scholar_token');
    if(token) {
        setUser({
            email: "student@example.com",
            displayName: "Returning Student",
            photoURL: "https://i.pravatar.cc/150?img=12",
            role: 'student'
        });
    }
    setLoading(false);
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;