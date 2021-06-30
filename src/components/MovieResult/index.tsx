import { Container } from "./styles";

export interface MovieResultProps {
    id: number;
    title: string;
    url: string;
}

function MovieResult({ title, url }: MovieResultProps) {
    return (
        <Container>
            <img
                src={"https://image.tmdb.org/t/p/original" + url}
                alt={title}
            />
            <h1>{title}</h1>
        </Container>
    );
}

export default MovieResult;
