import React, { useState } from 'react';
import Diagnostic from './Diagnostic';
import { Button } from '@mui/material';
import './Diagnostics.scss';
import Modal from '../../components/Modal';
import AddNewDiagnosticModal from './AddNewDiagnosticModal';

const Diagnostics = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <h1>Foaia diagnosticelor definitive (precizate)</h1>
      <Diagnostic />
      <Diagnostic />
      <Diagnostic />

      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <AddNewDiagnosticModal />
      </Modal>

      <Button className="button-add-new" variant="contained" onClick={() => setModalOpen(true)}>
        Adauga o noua diagnoza
      </Button>
    </div>
  );
};

export default Diagnostics;
