import React, { useState } from 'react';
import { auth, db } from '../firebase';

const RegisterPage = ({ toggleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Send email verification
      await user.sendEmailVerification();

      // Add user to Firestore
      await db.collection('users').doc(user.uid).set({
        email: user.email,
      });

      // Call toggleLogin to switch to login view
      toggleLogin();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required style={{ margin: '10px 0', padding: '10px', width: '200px', borderRadius: '4px', border: '1px solid #ddd' }} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required style={{ margin: '10px 0', padding: '10px', width: '200px', borderRadius: '4px', border: '1px solid #ddd' }} />
        <button type="submit" style={{ margin: '10px 0', padding: '10px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Register</button>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </form>
      <p>Already have an account? <span onClick={toggleLogin} style={{ marginTop: '10px', cursor: 'pointer', color: '#007bff' }}>Login</span></p>
    </div>
  );
};

export default RegisterPage;
