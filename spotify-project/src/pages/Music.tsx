import React from 'react';
import { useAppContext } from '../context';
import { Header } from '../components';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Music: React.FC = () => {
  const { musicView, setFavoritesMusics, favoritesMusics } = useAppContext();
  const navigate = useNavigate();

  return (
    <section>
      <Header />
      {Object.keys(musicView).length === 0
        ? <p>carregando</p>
        : <main>
          {[musicView].map(({
            artistName,
            collectionName,
            trackName,
            previewUrl,
            primaryGenreName,
            artworkUrl100 }: IMusicView) => {
            return (
              <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={artworkUrl100} alt={collectionName} />
                <Card.Body>
                  <Card.Title>{artistName}</Card.Title>
                  <Card.Text>{trackName}</Card.Text>
                  <Card.Text>{primaryGenreName}</Card.Text>
                  <audio
                    src={previewUrl}
                    controls
                  >
                    <track kind="captions" />
                    O seu navegador não suporta o elemento
                    <code>audio</code>
                  </audio>
                </Card.Body>
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => navigate('/search')}
                >
                  Voltar
                </Button>
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => {
                    setFavoritesMusics([musicView] as any)
                    console.log(favoritesMusics);
                  }
                  }
                >
                  Favorita
                </Button>
              </Card>
            )
          })}
        </main>}
    </section>
  )
}
