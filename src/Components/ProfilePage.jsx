import React from 'react';
import { auth } from '../firebase';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  button: {
    margin: '20px 0',
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

const ProfilePage = ({ onLogout }) => {
  const handleLogout = () => {
    auth.signOut().then(() => {
      onLogout();
    });
  };

  return (
    <div style={styles.container}>
      <h2>Profile Page</h2>
      <button style={styles.button} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
