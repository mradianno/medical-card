import React from 'react';
import './RegisterContainer.scss';
import Register from './Register';

const RegisterContainer = () => {
  return (
    <div className="login-container">
      <h1>Creeaza o cartela electronica acum</h1>
      <Register />
    </div>
  );
};

export default RegisterContainer;
