import { ReactNode, useEffect, useState } from "react";
import Banner from "../../components/Banner";
import FooterPage from "../../components/FooterPage";
import NavBar from "../../components/NavBar";
import { Container } from "./styles";
import SliderPosters from "../../components/SliderPosters/index";
import api from "../../services/api";

interface MainProps {
    children?: ReactNode;
}

function Main({ children }: MainProps) {
    const [popularTVData, setPopularTVData] = useState<any>([]);
    const [popularMovieData, setPopularMovieData] = useState<any>([]);

    const getPopularTV = async () => {
        await api.get("/tv/popular?page=1").then((res: any) => {
            setPopularTVData(res.data.results);
        });
    };
    const getPopularMovie = async () => {
        await api.get("/movie/popular?page=1").then((res: any) => {
            setPopularMovieData(res.data.results);
            /*console.log(res.data.results)*/
        });
    };

    const createStorage = () => {
        if (!localStorage.hasOwnProperty("@MOVIES")) {
            localStorage.setItem("@MOVIES", JSON.stringify([]));
        }
    };

    useEffect(() => {
        createStorage();
        getPopularMovie();
        getPopularTV();
    }, []);

    return (
        <Container>
            <NavBar />
            <Banner />
            <SliderPosters
                data={popularTVData}
                title="Os mais Populares"
                subtitle="Séries de TV"
            />
            <SliderPosters
                data={popularMovieData}
                title="Os mais Populares"
                subtitle="Filmes"
            />
            <FooterPage />
        </Container>
    );
}

export default Main;
