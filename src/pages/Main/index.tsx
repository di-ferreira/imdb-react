import { ReactNode } from "react";
import Banner from "../../components/Banner";
import FooterPage from "../../components/FooterPage";
import NavBar from "../../components/NavBar";
import { Container } from "./styles";

interface MainProps {
    children?: ReactNode;
}

function Main({ children }: MainProps) {
    return (
        <Container>
            <NavBar />
            <Banner />
            <FooterPage />
        </Container>
    );
}

export default Main;
