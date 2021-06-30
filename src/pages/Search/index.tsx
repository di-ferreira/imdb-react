import { ReactNode, useEffect, useState } from "react";
import FooterPage from "../../components/FooterPage";
import MovieResult from "../../components/MovieResult";
import NavBar from "../../components/NavBar";
import api from "../../services/api";

import { Container, ContentPage, ContainerPage } from "./styles";
import { MovieResultProps } from "../../components/MovieResult/index";

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
                res.data.results.map((m: any) => {
                    return movieData.push({
                        id: m.id,
                        title: m.title,
                        url: m.poster_path,
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
            <NavBar />
            <ContainerPage>
                <ContentPage>
                    {movies.map((mov) => (
                        <MovieResult
                            key={mov.id}
                            id={mov.id}
                            title={mov.title}
                            url={mov.url}
                        />
                    ))}
                </ContentPage>
            </ContainerPage>
            <FooterPage />
        </Container>
    );
}

export default Search;
