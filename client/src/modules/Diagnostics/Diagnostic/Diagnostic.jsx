import React, { useState } from 'react';
import { Button, Paper, TextareaAutosize, TextField } from '@mui/material';
import './Diagnostic.scss';
import Input from '../../../components/Input/Input';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import serialize from 'form-serialize';
import { creatediagnostic } from '../../../redux/auth/Actions';
import { formatDate } from '../../../services/utils';

const Diagnostic = ({ item, inAction }) => {
  const [date, setDate] = useState(
    inAction
      ? {
          weight: '',
          height: '',
          skin: '',
          lymphNodes: '',
          mammaryGlands: '',
          bloodPressure: '',
          intraocularPressure: '',
          chestMicroradiography: '',
          MRS: '',
          bloodGlucose: '',
          cholesterol: '',
          year: '',
        }
      : { ...item }
  );

  const { params } = useRouteMatch();
  const dispatch = useDispatch();

  const { diagnosticDate, dagnostic, doctorName } = date;

  const handlerSave = (e) => {
    e.preventDefault();

    const param = {
      linkId: params.id,
      date: {
        ...serialize(e.target, { hash: true }),
      },
    };

    dispatch(creatediagnostic(param)).then(() => {
      alert('Success!');
    });
  };

  if (inAction)
    return (
      <form className="in-action-form" onSubmit={handlerSave}>
        <Paper className="diagnostic-row">
          <div>
            <Input type="date" placeholder="" name="diagnosticDate" />
          </div>
          <div>
            <TextareaAutosize
              placeholder="Diagnosticul"
              style={{ width: '40vw', height: '100%', maxWidth: '45vw' }}
              name="dagnostic"
            />
          </div>
          <div>
            <Input
              placeholder="Numele, Prenumele medicului"
              style={{ width: '15rem' }}
              name="doctorName"
            />
          </div>
        </Paper>
        <Button type="submit">Salveaza</Button>
      </form>
    );

  return (
    <>
      <Paper className="diagnostic-row">
        <div>
          <Input
            type="date"
            placeholder=""
            disabled={!inAction}
            value={formatDate(new Date(diagnosticDate))}
          />
        </div>
        <div>
          <TextareaAutosize
            placeholder="Diagnosticul"
            style={{ width: '40vw', height: '100%', maxWidth: '45vw' }}
            disabled={!inAction}
            value={dagnostic}
          />
        </div>
        <div>
          <Input
            placeholder="Numele, Prenumele medicului"
            style={{ width: '15rem' }}
            disabled={!inAction}
            value={doctorName}
          />
        </div>
      </Paper>
    </>
  );
};

export default Diagnostic;
