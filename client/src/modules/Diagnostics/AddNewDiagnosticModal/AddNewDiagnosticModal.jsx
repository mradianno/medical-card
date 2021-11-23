import React, { useState } from 'react';
import './AddNewDiagnosticModal.scss';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { generateLink } from '../../../redux/link/Actions';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Input from '../../../components/Input/Input';

const AddNewDiagnosticModal = () => {
  const dispatch = useDispatch();
  const [link, setLink] = useState(null);
  const buttonHandler = () => {
    dispatch(generateLink('diagnostic')).then((res) => {
      const { id } = res;
      setLink(`${window.location.origin}/actions/${id}`);
    });
  };
  return (
    <div className="add-new-examination-modal">
      {link && <Input value={link} />}
      <Button onClick={buttonHandler}>Genereaza Link-ul</Button>
    </div>
  );
};

export default AddNewDiagnosticModal;
