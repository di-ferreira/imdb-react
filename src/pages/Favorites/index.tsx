import { ReactNode, useState } from "react";
import FooterPage from "../../components/FooterPage";
import MovieResult from "../../components/MovieResult";
import NavBar from "../../components/NavBar";

import { Container, ContentPage, ContainerPage } from "./styles";
import useLocalStorage from "react-use-localstorage";

interface FavoritesProps {
    children?: ReactNode;
}

function Favorites({ children }: FavoritesProps) {
    const [favoritesMovies] = useLocalStorage("@MOVIES", "");

    const [movieList] = useState(JSON.parse(favoritesMovies));
    return (
        <Container>
            <NavBar />
            <ContainerPage>
                <ContentPage>
                    {movieList ? (
                        movieList.map((mov: any) => (
                            <MovieResult
                                key={mov.id}
                                id={mov.id}
                                title={mov.title}
                                url={mov.url}
                                rate={mov.rate}
                                favorite={mov.favorite}
                                release_date={mov.release_date}
                            />
                        ))
                    ) : (
                        <h1>Não existe filmes favoritos</h1>
                    )}
                </ContentPage>
            </ContainerPage>
            <FooterPage />
        </Container>
    );
}

export default Favorites;
