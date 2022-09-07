import axios from 'axios';

export const Api = async (baseURL: string) => {
  const request = await axios.get(baseURL)
    .then((response) => {
      return response.data.results;
    })
    .catch((err) => {
      console.log({ message: err.message })
    })
  return request;
}