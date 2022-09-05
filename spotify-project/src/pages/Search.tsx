import { useState } from 'react';
import { Header } from '../components';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export const Search = () => {
  const [artist, setArtist] = useState('');
  const [data, setData] = useState([]);
  const baseURL = `https://itunes.apple.com/search?term=${artist}&enitity=album`;

  const test = async () => {
    axios.get(baseURL)
      .then(({ data }) => {
        return data;
      })
      .then(({ results }: any) => {
        return setData(results);
      })
    console.log(data);
    return data
  }

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
          onClick={test}
        >
          Pesquisar
        </Button>
      </Form>
    </section>
  )
}
