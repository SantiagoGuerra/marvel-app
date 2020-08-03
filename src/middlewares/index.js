import axios from 'axios';
import md5 from 'md5';
import { getCharacters } from '../actions';

const URL = 'https://gateway.marvel.com:443/v1/public';
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
const { TIMESTAMP } = process.env;

const fetchData = async endpoints => {
  const result = await axios.get(`${URL}${endpoints}`, {
    params: {
      apikey: PUBLIC_KEY,
      ts: TIMESTAMP,
      hash: md5(`${TIMESTAMP}${PRIVATE_KEY}${PUBLIC_KEY}`),
    },
  });

  return result;
};

export const getCharactersData = () => async dispatch => {
  await fetchData('/characters')
    .then(result => {
      const { data } = result.data;

      const characters = data.results;

      dispatch(getCharacters(characters));
    })

    .catch(error => {
      throw new Error(error);
    });
};

export const api = '';
