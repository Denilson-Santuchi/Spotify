import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context';

import { LoadingSpinner } from '../components/Spinner';
import { Header } from '../components';

import { Api } from '../services';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Search: React.FC = () => {
  const [music, setMusic] = useState('');
  const [loading, setLoading] = useState(false);
  const { musics, setMusics, setMusicView } = useAppContext()
  const navigate = useNavigate();

  const useClickButon = async () => {
    setLoading(true)
    const baseURL = `https://itunes.apple.com/search?term=${music}&enitity=album`;
    const response = await Api(baseURL);
    setMusics(response)
    setLoading(false)
  }

  return (
    <section>
      <Header />
      {loading === true
        ? <LoadingSpinner />
        : <>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Nome da música"
                onChange={({ target }) => setMusic(target.value)}
              />
              <Button
                variant="primary"
                type="button"
                disabled={music.length >= 2 ? false : true}
                onClick={useClickButon}
              >
                Pesquisar
              </Button>
            </Form.Group>
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
                <Card
                  style={{ width: '11rem', margin: '1rem' }}
                  key={trackId}
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
                  <Card.Body>
                    <Card.Title>{artistName}</Card.Title>
                    <Card.Text>{trackName}</Card.Text>
                  </Card.Body>
                  <Card.Img
                    variant="top"
                    src={artworkUrl100}
                    alt={collectionName}
                    key={trackId}
                  />
                </Card>
              )
            })}
          </main>
        </>
      }
    </section >
  )
}
