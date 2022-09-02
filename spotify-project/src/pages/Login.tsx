import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Seu nome de usúario"
          onChange={({ target }) => setUser(target.value)}
        />
        <Form.Text className="text-muted">
          Você será chamado por esse nome.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Sua senha"
          onChange={({ target }) => setPassword(target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="button"
        disabled={user.length >= 3 && password.length >= 6
          ? false : true}
        onClick={() => navigate('/search')}
      >
        Entrar
      </Button>
    </Form>
  );
}
