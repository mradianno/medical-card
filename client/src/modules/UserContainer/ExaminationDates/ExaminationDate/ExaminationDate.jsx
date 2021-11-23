import React, { useState } from 'react';
import { Button, Paper } from '@mui/material';
import Input from '../../../../components/Input/Input';
import './ExaminationDate.scss';
import serialize from 'form-serialize';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createExaminationDate } from '../../../../redux/auth/Actions';

const ExaminationDate = ({ item, inAction }) => {
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

  const {
    weight,
    height,
    skin,
    lymphNodes,
    mammaryGlands,
    bloodPressure,
    intraocularPressure,
    chestMicroradiography,
    MRS,
    bloodGlucose,
    cholesterol,
    year,
  } = date;

  const handlerSave = (e) => {
    e.preventDefault();

    const param = {
      linkId: params.id,
      date: {
        ...serialize(e.target, { hash: true }),
      },
    };

    dispatch(createExaminationDate(param)).then(() => {
      alert('Success!');
    });
  };

  if (inAction)
    return (
      <form className="in-action-form" onSubmit={handlerSave}>
        <h2>Datele examinarii medicale profilactice</h2>
        <Paper elevation={3} className="user-examination-date">
          <Input label="Anul" name={'year'} />
          <Input label="Masa ponderala" name={'weight'} />
          <Input label="Inaltimea" name={'height'} />
          <Input label="Tegumentele" name={'skin'} />
          <Input label="Ganglionii limfatici" name={'lymphNodes'} />
          <Input label="Glandele mamare" name={'mammaryGlands'} />
          <Input label="Tensiunea arteriala" name={'bloodPressure'} />
          <Input label="Tensiunea intraoculara" name={'intraocularPressure'} />
          <Input label="Microradiografia cutiei toracice" name={'chestMicroradiography'} />
          <Input label="Reactia MRS" name={'MRS'} />
          <Input label="Glucoza sangelui" name={'bloodGlucose'} />
          <Input label="Colesterolul" name={'cholesterol'} />
          <Button type="submit">Salveaza</Button>
        </Paper>
      </form>
    );
  return (
    <Paper elevation={3} className="user-examination-date">
      <h4>{year}</h4>
      <Input
        label="Masa ponderala"
        value={weight}
        InputProps={{
          readOnly: true,
        }}
      />
      <Input
        label="Inaltimea"
        value={height}
        InputProps={{
          readOnly: true,
        }}
      />
      <Input
        label="Tegumentele"
        value={skin}
        InputProps={{
          readOnly: true,
        }}
      />
      <Input
        label="Ganglionii limfatici"
        value={lymphNodes}
        InputProps={{
          readOnly: true,
        }}
      />
      <Input
        label="Glandele mamare"
        value={mammaryGlands}
        InputProps={{
          readOnly: true,
        }}
      />
      <Input
        label="Tensiunea arteriala"
        value={bloodPressure}
        InputProps={{
          readOnly: true,
        }}
      />
      <Input
        label="Tensiunea intraoculara"
        value={intraocularPressure}
        InputProps={{
          readOnly: true,
        }}
      />
      <Input
        label="Microradiografia cutiei toracice"
        value={chestMicroradiography}
        InputProps={{
          readOnly: true,
        }}
      />
      <Input
        label="Reactia MRS"
        value={MRS}
        InputProps={{
          readOnly: true,
        }}
      />
      <Input
        label="Glucoza sangelui"
        value={bloodGlucose}
        InputProps={{
          readOnly: true,
        }}
      />
      <Input
        label="Colesterolul"
        value={cholesterol}
        InputProps={{
          readOnly: true,
        }}
      />
    </Paper>
  );
};

export default ExaminationDate;
