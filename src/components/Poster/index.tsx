import { ReactNode } from 'react';

import { Container } from './styles';

interface PosterProps {
  children?: ReactNode;
  poster:string;
  nome:string;
  data:string;
}

function Poster({poster, nome, data }: PosterProps) {
  return (
    <Container>
        <img
            src={
                "https://image.tmdb.org/t/p/original"+poster
            }
            alt={nome}
        />

        <h1> {nome} </h1>
        <h3> {data} </h3>
      </Container>
  );
};

export default Poster;
