import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Container, RateMovie, FavoriteIcon } from "./styles";

export interface MovieResultProps {
    id: number;
    title: string;
    url: string;
    rate:number;
    favorite?:boolean;
    release_date?:string;
}

function MovieResult({ title, url, rate, favorite, release_date }: MovieResultProps) {
    return (
        <Container>
            <RateMovie rate={rate}>
                {rate}
            </RateMovie>
            <FavoriteIcon>
             {favorite ? <FaHeart/>: <FaRegHeart/>}
            </FavoriteIcon>
            <img
                src={"https://image.tmdb.org/t/p/original" + url}
                alt={title}
            />
            <h1>{title}</h1>
            <h3>{release_date}</h3>
        </Container>
    );
}

export default MovieResult;
