import { useState, useContext } from 'react';
import { AppContext } from '../context';
import { Header } from '../components';
// import { useArtistsAndBands } from '../services';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Search = () => {
  const [artist, setArtist] = useState('');
  const { musics, setMusics, setMusicView } = useContext(AppContext) as any;
  const navigate = useNavigate();

  const useClickButon = async () => {
    const baseURL = `https://itunes.apple.com/search?term=${artist}&enitity=album`;
    await axios.get(baseURL)
      .then((response) => {
        setMusics(response.data.results)
      })
      .catch((err) => {
        console.log({ message: err })
      })
  }

  return (
    <section>
      <Header />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Nome da música"
            onChange={({ target }) => setArtist(target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          disabled={artist.length >= 2 ? false : true}
          onClick={useClickButon}
        >
          Pesquisar
        </Button>
      </Form>
      <main>
        {musics.map(({
          artistName,
          collectionName,
          trackName,
          previewUrl,
          primaryGenreName,
          artworkUrl100,
          trackId }: any) => {
          return (
            <Card style={{ width: '11rem' }} key={trackId}
              onClick={() => {
                setMusicView({
                  artistName,
                  collectionName,
                  trackName,
                  previewUrl,
                  primaryGenreName,
                  artworkUrl100,
                  trackId
                })
                navigate('/music')
              }}
            >
              <Card.Img variant="top" src={artworkUrl100} alt={collectionName} />
              <Card.Body>
                <Card.Title>{artistName}</Card.Title>
                <Card.Text>{trackName}</Card.Text>
              </Card.Body>
            </Card>
          )
        })}
      </main>
    </section >
  )
}
