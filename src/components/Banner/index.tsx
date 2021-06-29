import { ReactNode, useState } from "react";
import Slide from "../Slide";

import { Container, SliderContent, SliderInner } from "./styles";

interface BannerProps {
    children?: ReactNode;
}

function Banner({ children }: BannerProps) {
    const [items] = useState([
        {
            title: "Um Lugar Silencioso II",
            director: "Jhon Krasinsk",
            imageUrl:
                "https://image.tmdb.org/t/p/original/z2UtGA1WggESspi6KOXeo66lvLx.jpg",
        },
        {
            title: "Luca",
            director: "John Lester",
            imageUrl:
                "https://image.tmdb.org/t/p/original/z2UtGA1WggESspi6KOXeo66lvLx.jpg",
        },
        {
            title: "Din e o Dragão Genial",
            director: "Sonny",
            imageUrl:
                "https://image.tmdb.org/t/p/original/z2UtGA1WggESspi6KOXeo66lvLx.jpg",
        },
    ]);

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = items.length;

    const nextSlide = () => {
        setCurrentSlide(
            currentSlide === slideLength - 1 ? 0 : currentSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide(
            currentSlide === 0 ? slideLength - 1 : currentSlide - 1
        );
    };

    return (
        <Container>
            <SliderContent transform={"-" + currentSlide * 100 + "%"}>
                <SliderInner width={slideLength * 100 + "%"}>
                    {items.map((s, i) => (
                        <Slide
                            key={i}
                            title={s.title}
                            director={s.director}
                            image={s.imageUrl}
                            prevSlide={() => prevSlide()}
                            nextSlide={() => nextSlide()}
                        />
                    ))}
                </SliderInner>
            </SliderContent>
        </Container>
    );
}

export default Banner;
