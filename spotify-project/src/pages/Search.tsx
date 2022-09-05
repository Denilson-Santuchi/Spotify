import { useState } from 'react';
import { Header } from '../components'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Search = () => {
  const [artist, setArtist] = useState('');

  return (
    <section>
      <Header />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Nome do Artista ou Banda"
            onChange={({ target }) => setArtist(target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          disabled={artist.length >= 2 ? false : true}
        >
          Pesquisar
        </Button>
      </Form>
    </section>
  )
}
