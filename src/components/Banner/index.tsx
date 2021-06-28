import { ReactNode } from "react";

import { Container } from "./styles";

interface BannerProps {
    children?: ReactNode;
}

function Banner({ children }: BannerProps) {
    return (
        <Container>
            <h1>Banner</h1>
            {children}
        </Container>
    );
}

export default Banner;
