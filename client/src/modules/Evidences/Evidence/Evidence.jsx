import React from 'react';
import { Button, Paper } from '@mui/material';
import './Evidence.scss';
import Input from '../../../components/Input/Input';

const Evidence = ({ inAction }) => {
  return (
    <>
      <Paper className="diagnostic-row">
        <Input type="date" label=" " style={{ width: '8.9rem' }} disabled={!inAction} />
        <Input type="text" label="Denumirea medicamentului" multiline disabled={!inAction} />

        <Input type="text" label="forma de manifestare" multiline disabled={!inAction} />
        <Input type="text" label="Masuri interprinse" multiline disabled={!inAction} />
        <Input type="text" label="Observatii" multiline disabled={!inAction} />
        {/*<div>*/}
        {/*  <TextareaAutosize*/}
        {/*    placeholder="Diagnosticul"*/}
        {/*    style={{ width: '40vw', height: '100%', maxWidth: '45vw' }}*/}
        {/*  />*/}
        {/*</div> */}
        <Input type="text" label="Numele, Prenumele medicului" multiline disabled={!inAction} />
      </Paper>
      {inAction && <Button>Salveaza</Button>}
    </>
  );
};

export default Evidence;
