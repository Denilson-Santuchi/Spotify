import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../styles/index.css'

export const Login: React.FC = () => {
  const { user, password, setUser, setPassword } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Seu nome de usúario"
          onChange={({ target }) => setUser(target.value)}
        />
        <div>
          <p className="test">
            Você será chamado por esse nome.
          </p>
        </div>
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Sua senha"
          onChange={({ target }) => setPassword(target.value)}
        />
        <div  className="login-button">
          <Button
            variant="dark"
            type="button"
            disabled={user.length >= 3 && password.length >= 6
              ? false : true}
            onClick={() => navigate('/search')}
          >
            Entrar
          </Button>
        </div>
      </Form.Group>
    </div>
  );
}
