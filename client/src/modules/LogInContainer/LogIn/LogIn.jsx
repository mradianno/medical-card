import React, { useContext } from 'react';
import './LogIn.scss';
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Input,
  Paper,
} from '@mui/material';
import serialize from 'form-serialize';
import { authContext } from '../../../services/contexts';
import { useHistory } from 'react-router-dom';

const LogIn = () => {
  const { logIn } = useContext(authContext);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    const form = serialize(e.target, { hash: true });

    logIn(form.email, form.password);
  };

  const registerButtonHandler = () => {
    history.push('/register');
  };

  return (
    <form onSubmit={submitHandler}>
      <Paper className="login-paper">
        <h2>Log in</h2>
        <Input placeholder="Email" type="email" className="input" name="email" />
        <Input placeholder="Parola" type="password" className="input" name="password" />
        <ButtonGroup>
          <Button variant="contained" type="submit">
            Intra
          </Button>
          <Button onClick={registerButtonHandler}>Inregistreaza-te</Button>
        </ButtonGroup>
      </Paper>
    </form>
  );
};

export default LogIn;
