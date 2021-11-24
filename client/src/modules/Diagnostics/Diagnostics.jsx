import React, { useEffect, useState } from 'react';
import Diagnostic from './Diagnostic';
import { Button } from '@mui/material';
import './Diagnostics.scss';
import Modal from '../../components/Modal';
import AddNewDiagnosticModal from './AddNewDiagnosticModal';
import { useDispatch, useSelector } from 'react-redux';
import { getdiagnostic, getExaminationDate } from '../../redux/auth/Actions';

const Diagnostics = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const diagnostic = useSelector((state) => state.authReducer.diagnostic);

  useEffect(() => {
    dispatch(getdiagnostic());
  }, []);
  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <h1>Foaia diagnosticelor definitive (precizate)</h1>
      {diagnostic && diagnostic.map((item, i) => <Diagnostic item={item} key={i} />)}

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
