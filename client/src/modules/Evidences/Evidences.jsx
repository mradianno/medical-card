import React, { useState } from 'react';
import Evidence from './Evidence';
import { Button } from '@mui/material';
import './Evidences.scss';
import Modal from '../../components/Modal';
import AddNewDataModal from '../../components/AddNewDataModal';

const Evidences = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <h1>Evidenta efectelor adverse si complicatiilor la tratament</h1>
      <Evidence />
      <Evidence />
      <Evidence />
      <Evidence />
      <Evidence />
      <Evidence />
      <Evidence />
      <Evidence />
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <AddNewDataModal action="evidence" />
      </Modal>
      <Button className="button-add-new" variant="contained" onClick={() => setModalOpen(true)}>
        Adauga o nou
      </Button>
    </div>
  );
};

export default Evidences;
