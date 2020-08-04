import axios from 'axios';
import md5 from 'md5';
import { getFeed, setCharacterData } from '../actions';

const URL = 'https://gateway.marvel.com/v1/public';
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

export const getDataForFeed = category => async dispatch => {
  await fetchData(`/${category}`)
    .then(result => {
      const { data } = result.data;

      const content = data.results;

      dispatch(getFeed(content));
    })

    .catch(error => {
      throw new Error(error);
    });
};

export const filterDataForFeed = options => async dispatch => {

  const keys = Object.keys(options);
 
  const query = keys.map(key => `${key}=${options[key]}`).join('&');

  console.log(query)

  await fetchData(`/characters?${query}`)
    .then(result => {
      const { data } = result.data;

      const content = data.results;

      dispatch(getFeed(content));
    })

    .catch(error => {
      throw new Error(error);
    });

};

export const getCharacterInfo = id => async dispatch => {

  await fetchData(`/characters/${id}`)
    .then(result => {
      const { data } = result.data;

      const content = data.results;

      dispatch(setCharacterData(content));
    })

    .catch(error => {
      throw new Error(error);
    });

} 