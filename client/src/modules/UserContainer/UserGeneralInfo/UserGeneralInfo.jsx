import React from 'react';
import { Paper } from '@mui/material';
import './UserGeneralInfo.scss';
import Input from '../../../components/Input/Input';
import { useSelector } from 'react-redux';

const UserGeneralInfo = () => {
  const { user } = useSelector((state) => state.authReducer || {});
  const { firstName, lastName, sex } = user || {};

  return (
    <Paper elevation={3} className="user-general-info">
      <Input label="Nume" value={firstName} disabled />
      <Input label="Prenume" value={lastName} disabled />
      <Input label="Sex" value={sex} disabled />
    </Paper>
  );
};

export default UserGeneralInfo;
