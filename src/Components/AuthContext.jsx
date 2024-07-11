import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const resetPassword = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      return 'Password reset email sent. Please check your inbox.';
    } catch (error) {
      console.error('Error sending password reset email:', error);
      return 'Failed to send password reset email. Please try again.';
    }
  };

  const value = {
    currentUser,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
