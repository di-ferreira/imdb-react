import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container, RateMovie, FavoriteIcon } from "./styles";
import { useState } from "react";

export interface MovieResultProps {
    id: number;
    title: string;
    url: string;
    rate: number;
    favorite?: boolean;
    release_date?: string;
}

function MovieResult({
    id,
    title,
    url,
    rate,
    favorite,
    release_date,
}: MovieResultProps) {
    const [favoriteMovie, setFavoriteMovie] = useState<boolean>(
        favorite ? favorite : false
    );

    const favoritingMovie = () => {
        setFavoriteMovie(!favoriteMovie);
    };

    return (
        <Container>
            <RateMovie rate={rate}>{rate}</RateMovie>
            <FavoriteIcon onClick={(): void => favoritingMovie()}>
                {favoriteMovie ? <FaHeart /> : <FaRegHeart />}
            </FavoriteIcon>
            <Link to={`/movie/${id}`}>
                <img
                    src={"https://image.tmdb.org/t/p/original" + url}
                    alt={title}
                />
            </Link>
            <h1>{title}</h1>
            <h3>{release_date}</h3>
        </Container>
    );
}

export default MovieResult;
