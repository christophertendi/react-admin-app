import React, { useState } from 'react';

const ResetPasswordPage = ({ onReset, success }) => {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    onReset(email);
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {success && <p>Password reset email sent. Check your email inbox.</p>}
    </div>
  );
};

export default ResetPasswordPage;
