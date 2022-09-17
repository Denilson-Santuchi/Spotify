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
        <Form.Label className="item">Username</Form.Label>
        <Form.Control
          className="item"
          type="text"
          placeholder="Seu nome de usúario"
          onChange={({ target }) => setUser(target.value)}
        />
        <div className="item">
          <p className="test">
            Você será chamado por esse nome.
          </p>
        </div>
        <Form.Label className="item">Senha</Form.Label>
        <Form.Control
          className="item"
          type="password"
          placeholder="Sua senha"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button
          className="item"
          variant="primary"
          type="button"
          disabled={user.length >= 3 && password.length >= 6
            ? false : true}
          onClick={() => navigate('/search')}
        >
          Entrar
        </Button>
      </Form.Group>
    </div>
  );
}
