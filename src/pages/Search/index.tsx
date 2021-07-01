import { ReactNode, useEffect, useState } from "react";
import FooterPage from "../../components/FooterPage";
import MovieResult from "../../components/MovieResult";
import NavBar from "../../components/NavBar";
import api from "../../services/api";

import { Container, ContentPage, ContainerPage } from "./styles";
import { MovieResultProps } from "../../components/MovieResult/index";
import { formatLocalDate } from '../../utils/format';
import Loading from "../../components/Loading";

interface SearchProps {
    children?: ReactNode;
}

function Search({ children }: SearchProps) {
    const [movies, setMovies] = useState<MovieResultProps[]>([]);

    const searchMovie = async () => {
        await api
            .get("/search/movie?query=indiana&with_genres=12&page=1")
            .then((res: any) => {
                const movieData: MovieResultProps[] = [];

                console.log(res.data.results);

                res.data.results.map((m: any) => {
                    return movieData.push({
                        id: m.id,
                        title: m.title,
                        url: m.poster_path,
                        rate:m.vote_average,
                        release_date: formatLocalDate(m.release_date,"yyyy")
                    });
                });
                setMovies(movieData);
            });
    };

    useEffect(() => {
        searchMovie();
    }, []);
    return (
        <Container>
            <Loading/>
            <NavBar />
            <ContainerPage>

                <ContentPage>
                    {movies.map((mov) => (
                        <MovieResult
                            key={mov.id}
                            id={mov.id}
                            title={mov.title}
                            url={mov.url}
                            rate={mov.rate}
                            favorite={false}
                            release_date={mov.release_date}
                        />
                    ))}
                </ContentPage>
            </ContainerPage>
            <FooterPage />
        </Container>
    );
}

export default Search;
