import { ReactNode } from "react";

import { Container, Slider } from "./styles";

interface BannerProps {
    children?: ReactNode;
}

function Banner({ children }: BannerProps) {
    return (
        <Container>
            <Slider>
                <h1>Banner</h1>
            </Slider>
        </Container>
    );
}

export default Banner;
