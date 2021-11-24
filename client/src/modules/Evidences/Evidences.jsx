import React, { useEffect, useState } from 'react';
import Evidence from './Evidence';
import { Button } from '@mui/material';
import './Evidences.scss';
import Modal from '../../components/Modal';
import AddNewDataModal from '../../components/AddNewDataModal';
import { useDispatch, useSelector } from 'react-redux';
import { getdiagnostic, getEvidence } from '../../redux/auth/Actions';
import Diagnostic from '../Diagnostics/Diagnostic';

const Evidences = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const evidence = useSelector((state) => state.authReducer.evidence);

  useEffect(() => {
    dispatch(getEvidence());
  }, []);
  return (
    <div>
      <h1>Evidenta efectelor adverse si complicatiilor la tratament</h1>
      {evidence && evidence.map((item, i) => <Evidence item={item} key={i} />)}

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
