import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExaminationDate } from '../../../redux/auth/Actions';
import ExaminationDate from './ExaminationDate';

const ExaminationDates = () => {
  const dispatch = useDispatch();
  const examinationDate = useSelector((state) => state.authReducer.examinationDate);

  useEffect(() => {
    dispatch(getExaminationDate());
  }, []);
  return (
    <>
      {examinationDate && examinationDate.map((item, i) => <ExaminationDate item={item} key={i} />)}
    </>
  );
};

export default ExaminationDates;
