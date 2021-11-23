import React, { useContext } from 'react';
import './Register.scss';
import {
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Paper,
  Radio,
  RadioGroup,
} from '@mui/material';
import serialize from 'form-serialize';
import { authContext } from '../../../services/contexts';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as authActions from '../../../redux/auth/Actions';

const Register = () => {
  const { logIn } = useContext(authContext);
  const history = useHistory();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const form = serialize(e.target, { hash: true });

    dispatch(authActions.register(form)).then((response) => {
      logIn(form.email, form.password);
    });
  };

  const loginButtonHandler = () => {
    history.push('/login');
  };

  return (
    <form onSubmit={submitHandler}>
      <Paper className="register-paper">
        <h2>Inregistrare</h2>
        <Input placeholder="Nume" type="text" className="input" name="lastName" />
        <Input placeholder="Prenume" type="text" className="input" name="firstName" />
        <Input placeholder="Data nasterii" type="date" className="input" name="birthday" />
        <Input placeholder="Email" type="email" className="input" name="email" />
        <Input placeholder="Parola" type="password" className="input" name="password" />
        <Input
          placeholder="Confirmati parola"
          type="password"
          className="input"
          name="confirmPassword"
        />
        <FormControl component="fieldset" className="input">
          <FormLabel component="legend">Genul</FormLabel>
          <RadioGroup row aria-label="gender" name="sex">
            <FormControlLabel value="F" control={<Radio />} label="F" />
            <FormControlLabel value="M" control={<Radio />} label="M" />
          </RadioGroup>
        </FormControl>
        <ButtonGroup>
          <Button variant="contained" type="submit">
            Inregistreaza-te
          </Button>
          <Button onClick={loginButtonHandler}>Am deja un cont</Button>
        </ButtonGroup>
      </Paper>
    </form>
  );
};

export default Register;
