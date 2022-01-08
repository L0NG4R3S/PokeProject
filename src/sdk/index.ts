import axios from 'axios';

type getPokemonDetailsProps = {
  url: string;
};

export const getPokemons = () => {
  return axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    .then(({data}) => {
      return data;
    })
    .catch(err => {
      console.log('ERROR', err);
      throw new Error(err);
    });
};

export const getPokemonDetails = ({ url }: getPokemonDetailsProps) => {
  return axios
    .get(url)
    .then(({data}) => {
      return data;
    })
    .catch(err => {
      console.log('ERROR', err);
      throw new Error(err);
    });
};
