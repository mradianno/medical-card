import React from 'react';
import { Button, Paper, TextareaAutosize, TextField } from '@mui/material';
import './Diagnostic.scss';
import Input from '../../../components/Input/Input';

const Diagnostic = ({ inAction }) => {
  return (
    <>
      <Paper className="diagnostic-row">
        <div>
          <Input type="date" placeholder="" disabled={!inAction} />
        </div>
        <div>
          <TextareaAutosize
            placeholder="Diagnosticul"
            style={{ width: '40vw', height: '100%', maxWidth: '45vw' }}
            disabled={!inAction}
          />
        </div>
        <div>
          <Input
            placeholder="Numele, Prenumele medicului"
            style={{ width: '15rem' }}
            disabled={!inAction}
          />
        </div>
      </Paper>
      {inAction && <Button>Salveaza</Button>}
    </>
  );
};

export default Diagnostic;
