import React, { ReactNode } from "react";

import { Container, Slider, SlideFooter, SlideNavigation } from "./styles";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface SlideProps {
    children?: ReactNode;
    title: string;
    director: string;
    image: string;
    prevSlide: (e: React.MouseEventHandler<SVGElement, MouseEvent>) => void;
    nextSlide?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Slide({ director, image, title, prevSlide, nextSlide }: SlideProps) {
    return (
        <Container>
            <Slider backgroundUrl={image}>
                <h1>{title}</h1>
                <h2>{director}</h2>
                <p>Em Breve nos cinemas</p>
                <SlideFooter>
                    <SlideNavigation>
                        <FaChevronLeft onClick={(e) => prevSlide(e)} />
                        <FaChevronRight />
                    </SlideNavigation>
                    <a href="/">Sobre este filme</a>
                </SlideFooter>
            </Slider>
        </Container>
    );
}

export default Slide;
