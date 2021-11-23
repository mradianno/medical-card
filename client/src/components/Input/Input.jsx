import React from 'react';
import { TextField } from '@mui/material';
import './Input.scss';

const Input = (props) => {
  return (
    <div className="standard-input">
      <TextField variant="standard" {...props} fullWidth />
    </div>
  );
};

export default Input;
