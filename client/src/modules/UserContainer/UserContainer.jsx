import React, { useState } from 'react';
import UserGeneralInfo from './UserGeneralInfo';
import ExaminationDates from './ExaminationDates';
import './UserContainer.scss';
import { Button } from '@mui/material';
import Modal from '../../components/Modal';
import AddNewExaminationDateModal from './AddNewExaminationDateModal';

const UserContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="user-container">
      <Button className="button-add-new" variant="contained" onClick={() => setModalOpen(true)}>
        Adauga o noua examinare medicala
      </Button>

      <div className="user-general-info-container">
        <UserGeneralInfo />
      </div>
      <ExaminationDates />

      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <AddNewExaminationDateModal />
      </Modal>
    </div>
  );
};

export default UserContainer;
