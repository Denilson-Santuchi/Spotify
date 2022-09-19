import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context';

import { LoadingSpinner } from '../components/Spinner';
import { Header } from '../components';

import Card from 'react-bootstrap/Card';

export const Search: React.FC = () => {
  const { musics, setMusicView, loading } = useAppContext()
  const navigate = useNavigate();

  return (
    <section>
      <Header />
      {loading === true
        ? <LoadingSpinner />
        : <>
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
