import { useContext } from 'react';
import { AppContext } from '../context';
import { Header } from '../components';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export const Music = () => {
  const { musicView } = useContext(AppContext) as any;
  const navigate = useNavigate();
  return (
    <section>
      <Header />
      {musicView.length === 0
        ? <p>carregando</p>
        : <main>
          {[musicView].map(({
            artistName,
            collectionName,
            trackName,
            previewUrl,
            primaryGenreName,
            artworkUrl100,
            trackId }: any) => {
            return (
              <div key={trackId}>
                <h1>{artistName}</h1>
                <img src={artworkUrl100} alt={collectionName} />
                <h2>{trackName}</h2>
                <p>{primaryGenreName}</p>
                <audio
                  src={previewUrl}
                  controls
                >
                  <track kind="captions" />
                  O seu navegador não suporta o elemento
                  <code>audio</code>
                </audio>
              </div>
            )
          })}
        </main>}
        <Button
        variant="primary"
        type="button"
        onClick={() => navigate('/search')}
      >
        Voltar
      </Button>
    </section>
  )
}
