import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import { KaryawanList, KaryawanCreate, KaryawanEdit } from './Components/Karyawan';
import { OrderList, OrderCreate, OrderEdit } from './Components/Order';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import ProfilePage from './Components/ProfilePage';
import ResetPasswordPage from './Components/ResetPasswordPage'; // Import your Reset Password component
import { auth } from './firebase';

const App = () => {
  const [user, setUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [resetPasswordEmail, setResetPasswordEmail] = useState('');
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    setUser(auth.currentUser);
  };

  const handleRegister = () => {
    setUser(auth.currentUser);
    setIsRegistering(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  const handleResetPassword = async () => {
    try {
      await auth.sendPasswordResetEmail(resetPasswordEmail);
      setResetPasswordSuccess(true);
    } catch (error) {
      console.error('Error sending reset password email:', error.message);
    }
  };

  if (!user) {
    return isRegistering ? (
      <RegisterPage toggleLogin={toggleRegister} />
    ) : (
      <LoginPage onLogin={handleLogin} toggleRegister={toggleRegister} />
    );
  }

  return (
    <Router>
      <div style={{ position: 'relative' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/admin" />} />
          <Route
            path="/admin"
            element={
              <Admin dataProvider={dataProvider}>
                <Resource name="karyawan" list={KaryawanList} create={KaryawanCreate} edit={KaryawanEdit} />
                <Resource name="orders" list={OrderList} create={OrderCreate} edit={OrderEdit} />
              </Admin>
            }
          />
          <Route path="/profile" element={<ProfilePage onLogout={handleLogout} />} />
          <Route
            path="/reset-password"
            element={<ResetPasswordPage onReset={handleResetPassword} success={resetPasswordSuccess} />}
          />
        </Routes>
        <nav style={{ position: 'fixed', bottom: 0, right: 0, padding: '10px' }}>
          {/* Navigation or footer content can be added here */}
        </nav>
      </div>
    </Router>
  );
};

export default App;
