import { ReactNode, useEffect, useState } from 'react';
import FooterPage from '../../components/FooterPage';
import NavBar from '../../components/NavBar';
import api from '../../services/api';

import { Container,Content } from './styles';

interface MovieDetailsProps {
  children?: ReactNode;
}

function MovieDetails({ children }: MovieDetailsProps) {
    // const [movieDetails,setMovieDetails] = useState<any>([]);
    // const [movieCredits,setMovieCredits] = useState<any>([]);

const getMovieDetails = async ()=>{
    await api.get("/movie/508943?language=pt-BR").then((res:any)=>{
        console.log(res.data);
    });
};

const getMovieCredits = async ()=>{
    await api.get("/movie/508943/credits?language=pt-BR").then((res:any)=>{
        console.log(res.data);
    });
};

useEffect(() => {
    getMovieCredits();
    getMovieDetails();
}, [])

  return (
    <Container>
        <NavBar/>
        <Content>
            <h1>MovieDetails</h1>

        </Content>
        <FooterPage/>
    </Container>
  );
};

export default MovieDetails;
