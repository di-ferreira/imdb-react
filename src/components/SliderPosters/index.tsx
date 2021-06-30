import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Poster from "../Poster";

import { Container, Title, SubTitle } from "./styles";

interface DataItem {
    first_air_date: string;
    name: string;
    poster_path: string;
}

interface SliderPostersProps {
    children?: ReactNode;
    title: string;
    subtitle: string;
    data: DataItem[];
}

function SliderPosters({ title, subtitle, data }: SliderPostersProps) {
    return (
        <Container>
            <Title> {title} </Title>
            <SubTitle> {subtitle} </SubTitle>
            <ul>
                {data.map((s: any) => (
                    <li key={s.id}>
                        <Link to="/">
                            <Poster
                                data={
                                    s.first_air_date
                                        ? s.first_air_date
                                        : s.release_date
                                }
                                nome={s.name ? s.name : s.title}
                                poster={s.poster_path}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </Container>
    );
}

export default SliderPosters;
