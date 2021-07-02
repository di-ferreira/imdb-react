/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";
import FooterPage from "../../components/FooterPage";
import NavBar from "../../components/NavBar";
import api from "../../services/api";
import { formatLocalDate } from "../../utils/format";

import {
    Container,
    Content,
    MovieCard,
    CardTop,
    Poster,
    MovieInformation,
    TopInformation,
    MovieTitle,
    DateInfo,
    RateInfo,
    MovieSinopse,
    MovieProductionInfo,
    MovieLike,
    ButtonLike,
    ButtonShare,
    ContentDetails,
    ContentDetailsRow,
    CastList,
    MovieTrailer,
    MoviesContainers,
} from "./styles";
import { MovieResultProps } from "../../components/MovieResult";

interface MovieDetailsProps {
    children?: ReactNode;
}

interface IdParam {
    id: string;
}

function MovieDetails({ children }: MovieDetailsProps) {
    //captura id do filme
    const dataParam = useParams<IdParam>();
    const id = dataParam.id;

    const [movieDetails, setMovieDetails] = useState<any>({});
    const [movieGenres, setMovieGenres] = useState<any>([]);
    const [movieCast, setMovieCast] = useState<any>([]);
    const [movieTrailer, setMovieTrailer] = useState<any>([]);
    const [favorite, setFavorite] = useState(false);

    const getMovieDetails = async () => {
        await api.get(`/movie/${id}`).then((res: any) => {
            console.log(res.data);

            res.data.release_date = formatLocalDate(
                res.data.release_date,
                "yyyy"
            );
            setMovieGenres(res.data.genres);
            setMovieDetails(res.data);
        });
    };

    const getMovieCredits = async () => {
        await api.get(`/movie/${id}/credits`).then((res: any) => {
            console.log(res.data);
            const itemCast = [];

            for (let i = 0; i < 5; i++) {
                itemCast.push(res.data.cast[i]);
            }

            setMovieCast(itemCast);
        });
    };

    const getMovieTrailer = async () => {
        await api.get(`/movie/${id}/videos`).then((res: any) => {
            console.log("trailes");
            console.log(res.data.results);
            setMovieTrailer(res.data.results);
        });
    };

    const favoritingMovie = () => {
        setFavorite(!favorite);
        const movieData: MovieResultProps = {
            id: parseInt(id),
            rate: movieDetails.vote_average,
            title: movieDetails.title,
            url: movieDetails.poster_path,
            favorite: true,
            release_date: movieDetails.release_date,
        };

        if (!favorite) {
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
        }
    };

    useEffect(() => {
        getMovieCredits();
        getMovieDetails();
        getMovieTrailer();
    }, []);

    return (
        <Container>
            <NavBar />
            <Content
                imgUrl={
                    "https://image.tmdb.org/t/p/original" +
                    movieDetails.backdrop_path
                }
            >
                <MovieCard>
                    <CardTop>
                        <Poster>
                            <img
                                src={
                                    "https://image.tmdb.org/t/p/original" +
                                    movieDetails.poster_path
                                }
                                alt={movieDetails.title}
                            />
                        </Poster>
                        <MovieInformation>
                            <TopInformation>
                                <div>
                                    <MovieTitle>
                                        {movieDetails.title}
                                    </MovieTitle>
                                    <DateInfo>
                                        ({movieDetails.release_date})
                                    </DateInfo>
                                </div>
                                <RateInfo>
                                    {movieDetails.vote_average} / 10
                                </RateInfo>
                            </TopInformation>
                            <MovieSinopse>{movieDetails.overview}</MovieSinopse>
                            <MovieProductionInfo>
                                <strong>Genero: </strong>
                                {movieGenres.map((g: any) => g.name + ", ")}
                            </MovieProductionInfo>
                        </MovieInformation>
                        <MovieLike>
                            <ButtonLike onClick={() => favoritingMovie()}>
                                Favorito
                                {favorite ? <FaHeart /> : <FaRegHeart />}
                            </ButtonLike>
                            <ButtonShare>
                                Compartilhar <FaShareAlt />
                            </ButtonShare>
                        </MovieLike>
                    </CardTop>
                    <ContentDetails>
                        <ContentDetailsRow>
                            <CastList>
                                <h1>Cast</h1>
                                <ul>
                                    {movieCast.map((c: any) => (
                                        <li key={c.id}>
                                            <img
                                                src={
                                                    "https://image.tmdb.org/t/p/original" +
                                                    c.profile_path
                                                }
                                                alt={c.name}
                                            />
                                            <p>
                                                <strong>{c.name}</strong>
                                                Interpretando
                                                <strong>{c.character}</strong>
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </CastList>
                        </ContentDetailsRow>
                        <ContentDetailsRow>
                            <MovieTrailer>
                                <h1>Trailes e Vídeos</h1>
                                <MoviesContainers>
                                    {movieTrailer.map((t: any) => (
                                        <li key={t.id}>
                                            <iframe
                                                width="560"
                                                height="315"
                                                src={
                                                    "https://www.youtube.com/embed/" +
                                                    t.key
                                                }
                                                title={t.name}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </li>
                                    ))}
                                </MoviesContainers>
                            </MovieTrailer>
                        </ContentDetailsRow>
                    </ContentDetails>
                </MovieCard>
            </Content>
            <FooterPage />
        </Container>
    );
}

export default MovieDetails;
