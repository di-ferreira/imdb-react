import { ReactNode, useEffect, useState } from 'react';
import FooterPage from '../../components/FooterPage';
import NavBar from '../../components/NavBar';
import api from '../../services/api';

import { Container,Content } from './styles';

interface MovieDetailsProps {
  children?: ReactNode;
}

function MovieDetails({ children }: MovieDetailsProps) {
    const [movieDetails,setMovieDetails] = useState<any>({});
    const [movieCredits,setMovieCredits] = useState<any>({});

const getMovieDetails = async ()=>{
    await api.get("/movie/508943?language=pt-BR").then((res:any)=>{
        console.log(res.data);
        setMovieDetails(res.data);
    });
};

const getMovieCredits = async ()=>{
    await api.get("/movie/508943/credits?language=pt-BR").then((res:any)=>{
        console.log(res.data);
        setMovieCredits(res.data);
    });
};

useEffect(() => {
    getMovieCredits();
    getMovieDetails();
}, [])

  return (
    <Container>
        <NavBar/>
        <Content imgUrl={"https://image.tmdb.org/t/p/original"+movieDetails.backdrop_path}>
            <h1>MovieDetails</h1>

        </Content>
        <FooterPage/>
    </Container>
  );
};

export default MovieDetails;
