import React, { ReactNode } from "react";

import { Container, Slider, SliderInfo } from "./styles";

interface SlideProps {
    children?: ReactNode;
    title: string;
    image: string;
}

function Slide({ image, title }: SlideProps) {
    return (
        <Container>
            <Slider backgroundUrl={image}>
                <SliderInfo>
                    <h1>{title}</h1>
                    <p>Em Breve nos cinemas</p>
                </SliderInfo>
            </Slider>
        </Container>
    );
}

export default Slide;
