import React, { useState } from 'react';
import { Button, Paper } from '@mui/material';
import './Evidence.scss';
import Input from '../../../components/Input/Input';
import serialize from 'form-serialize';
import { creatediagnostic, createEvidence } from '../../../redux/auth/Actions';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { formatDate } from '../../../services/utils';

const Evidence = ({ item, inAction }) => {
  const [date, setDate] = useState(
    inAction
      ? {
          evidenceDate: '',
          drug: '',
          measuresTaken: '',
          remarks: '',
          doctorName: '',
        }
      : { ...item }
  );

  const { params } = useRouteMatch();
  const dispatch = useDispatch();

  const { evidenceDate, drug, measuresTaken, remarks, doctorName } = date;

  const handlerSave = (e) => {
    e.preventDefault();

    const param = {
      linkId: params.id,
      date: {
        ...serialize(e.target, { hash: true }),
      },
    };

    dispatch(createEvidence(param)).then(() => {
      alert('Success!');
    });
  };
  if (inAction)
    return (
      <form className="in-action-form" onSubmit={handlerSave}>
        <Paper className="diagnostic-row">
          <Input type="date" label=" " style={{ width: '8.9rem' }} name={'evidenceDate'} />
          <Input type="text" label="Denumirea medicamentului" multiline name={'drug'} />

          <Input type="text" label="forma de manifestare" multiline name={'measuresTaken'} />
          <Input type="text" label="Observatii" multiline name={'remarks'} />

          <Input type="text" label="Numele, Prenumele medicului" multiline name={'doctorName'} />
        </Paper>
        <Button type="submit">Salveaza</Button>
      </form>
    );
  return (
    <>
      <Paper className="diagnostic-row">
        <Input
          type="date"
          label=" "
          style={{ width: '8.9rem' }}
          value={formatDate(new Date(evidenceDate))}
          disabled
        />
        <Input type="text" label="Denumirea medicamentului" multiline value={drug} disabled />

        <Input type="text" label="forma de manifestare" multiline value={measuresTaken} disabled />
        <Input type="text" label="Observatii" multiline value={remarks} disabled />

        <Input
          type="text"
          label="Numele, Prenumele medicului"
          multiline
          value={doctorName}
          disabled
        />
      </Paper>
    </>
  );
};

export default Evidence;
