import { ReactNode } from "react";
import FooterPage from "../../components/FooterPage";
import NavBar from "../../components/NavBar";

import { Container } from "./styles";

interface FavoritesProps {
    children?: ReactNode;
}

function Favorites({ children }: FavoritesProps) {
    return (
        <Container>
            <NavBar />
            <h1>Favoritos</h1>
            <FooterPage />
        </Container>
    );
}

export default Favorites;
