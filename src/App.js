import React, { useState, useEffect } from 'react';
import { Admin, Resource } from 'react-admin';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import dataProvider from './dataProvider';
import { KaryawanList, KaryawanCreate, KaryawanEdit } from './Components/Karyawan';
import { OrderList, OrderCreate, OrderEdit } from './Components/Order';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import ProfilePage from './Components/ProfilePage'; // Import the ProfilePage component
import { auth } from './firebase';

const App = () => {
  const [user, setUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

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

  if (!user) {
    return isRegistering ? (
      <RegisterPage onRegister={handleRegister} toggleLogin={toggleRegister} />
    ) : (
      <LoginPage onLogin={handleLogin} toggleRegister={toggleRegister} />
    );
  }

  return (
    <Router>
      <div style={{ position: 'relative' }}>
        <Routes>
          <Route
            path="*"
            element={
              <Admin dataProvider={dataProvider}>
                <Resource name="karyawan" list={KaryawanList} create={KaryawanCreate} edit={KaryawanEdit} />
                <Resource name="orders" list={OrderList} create={OrderCreate} edit={OrderEdit} />
              </Admin>
            }
          />
          <Route path="/profile" element={<ProfilePage onLogout={handleLogout} />} />
        </Routes>
        <nav style={{ position: 'fixed', bottom: 0, right: 0, padding: '10px' }}>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </div>
    </Router>
  );
};

export default App;
