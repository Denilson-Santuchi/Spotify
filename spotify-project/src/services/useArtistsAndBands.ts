import { useContext } from 'react';
import { AppContext } from '../context';
import axios from 'axios';

export const useArtistsAndBands = async (artist: string) => {
  const { setAlbums } = useContext(AppContext) as any;
  const baseURL = `https://itunes.apple.com/search?term=${artist}&enitity=album`;
  return axios.get(baseURL)
  .then((response) => {
    setAlbums(response.data.results)
  })
  .catch((err) => {
    console.log({ message: err })
  })
}