import { ReactNode, useEffect, useState } from "react";

import { Container, Viewed, SiteIndex, Social, Icons, Title } from "./styles";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import api from "../../services/api";

interface FooterPageProps {
    children?: ReactNode;
}

function FooterPage({ children }: FooterPageProps) {
    const [recentViews, setRecentViews] = useState<any>([]);

    const getVieweds = async () => {
        await api
            .get(
                "/discover/tv?language=pt-br&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate"
            )
            .then((res: { data: any }) => {
                const itemsData = [];

                for (let i = 0; i < 5; i++) {
                    itemsData.push(res.data.results[i]);
                }

                setRecentViews(itemsData);
            });
    };

    useEffect(() => {
        getVieweds();
    }, []);

    return (
        <Container>
            <Viewed>
                <Title>Recentemente vistos</Title>
                <ul>
                    {recentViews.map((v: any, i: number) => (
                        <li key={v.id}>
                            <img
                                src={
                                    "https://image.tmdb.org/t/p/original" +
                                    v.poster_path
                                }
                                alt={v.original_name}
                                width="50"
                            />
                            <p>
                                {i + 1}. {v.original_name}
                            </p>
                        </li>
                    ))}
                </ul>
            </Viewed>
            <SiteIndex>
                <Title>Mapa do site</Title>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">My Favorites</Link>
                    </li>
                    <li>
                        <Link to="/">News</Link>
                    </li>
                </ul>
            </SiteIndex>
            <Social>
                <Icons>
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                </Icons>

                <p>
                    Copyright imdb.com, INC <br />
                    Conditions of Use <br />
                    Privacy Policy <br />
                    An Amazon Company
                </p>
            </Social>
        </Container>
    );
}

export default FooterPage;
