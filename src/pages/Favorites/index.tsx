import { useState } from "react";
import FooterPage from "../../components/FooterPage";
import MovieResult from "../../components/MovieResult";
import NavBar from "../../components/NavBar";

import { Container, ContentPage, ContainerPage } from "./styles";
import useLocalStorage from "react-use-localstorage";

interface FavoritesProps {
    id: number;
    title: string;
    url: string;
    rate: number;
    release_date: string;
}

function Favorites({ id, rate, release_date, title, url }: FavoritesProps) {
    const [favoritesMoviesId] = useLocalStorage("@MOVIES", "");
    const [movieList] = useState(JSON.parse(favoritesMoviesId));

    return (
        <Container>
            <NavBar />
            <ContainerPage>
                <ContentPage>
                    {movieList.map((mov: FavoritesProps) => (
                        <MovieResult
                            key={mov.id}
                            id={mov.id}
                            title={mov.title}
                            url={mov.url}
                            rate={mov.rate}
                            favorite={true}
                            release_date={mov.release_date}
                        />
                    ))}
                </ContentPage>
            </ContainerPage>
            <FooterPage />
        </Container>
    );
}

export default Favorites;
