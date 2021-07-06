/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container, RateMovie, FavoriteIcon } from "./styles";

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
    const [favoriteMovie, setFavoriteMovie] = useState<boolean>(false);

    //Controla os favoritos
    const favoritingMovie = () => {
        const movieData: MovieResultProps = {
            id,
            title,
            url,
            rate,
            favorite: true,
            release_date,
        };

        if (!favoriteMovie) {
            addFavorite(movieData);
            setFavoriteMovie(true);
        } else {
            setFavoriteMovie(false);
            removeFavorite(movieData.id);
        }
    };

    //Adiciona filme aos favoritos
    const addFavorite = (movieData: MovieResultProps) => {
        if (localStorage.hasOwnProperty("@MOVIES")) {
            const list = localStorage.getItem("@MOVIES");

            let localData: any[] = list !== null ? JSON.parse(list) : [];

            localData.push(movieData);
            localStorage.setItem("@MOVIES", JSON.stringify(localData));
        } else {
            let localData: any[] = [];

            localData.push(movieData);
            localStorage.setItem("@MOVIES", JSON.stringify(localData));
        }
    };

    //Remove filme dos favoritos
    const removeFavorite = (id: number) => {
        const listFavoritesStrign = localStorage.getItem("@MOVIES");

        let listFavorites: MovieResultProps[] =
            listFavoritesStrign !== null ? JSON.parse(listFavoritesStrign) : [];

        if (listFavorites) {
            const newList: MovieResultProps[] = listFavorites.filter(
                (movie: MovieResultProps): MovieResultProps | undefined => {
                    if (movie.id !== id) {
                        return movie;
                    }
                }
            );
            localStorage.setItem("@MOVIES", JSON.stringify(newList));
        }
    };

    //busca filme pelo ID no localStorage
    const findMovieLocal = (id: number) => {
        const listFavoritesStrign = localStorage.getItem("@MOVIES");

        let listFavorites: MovieResultProps[] =
            listFavoritesStrign !== null ? JSON.parse(listFavoritesStrign) : [];

        if (listFavorites) {
            const newList: MovieResultProps[] = listFavorites.filter(
                (movie: MovieResultProps): MovieResultProps | undefined => {
                    if (movie.id === id) {
                        return movie;
                    }
                }
            );

            if (newList.length > 0) {
                return true;
            } else {
                return false;
            }
        }
    };

    useEffect(() => {
        const findMovie = findMovieLocal(id);
        if (findMovie) {
            setFavoriteMovie(true);
        } else {
            setFavoriteMovie(false);
        }
    }, []);

    return (
        <Container>
            <RateMovie rate={rate}>{rate}</RateMovie>
            <FavoriteIcon onClick={() => favoritingMovie()}>
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
