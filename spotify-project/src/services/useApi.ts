import { useEffect } from 'react';
import axios from 'axios';

export const useApi = async (artist: string) => {
  const baseURL = `https://itunes.apple.com/search?entity=album&term=${artist}&attribute=allArtistTerm`;

  useEffect(() => {
    axios.get(baseURL)
      .then(({ data }) => {
        return data;
      })
  }, [])
};
