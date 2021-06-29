import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${colors.red};
`;

export const Slider = styled.div<{ backgroundUrl: string }>`
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.backgroundUrl});
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100%;
    background-color: ${colors.black};
    color: ${colors.white};

    @media (min-width: 800px) {
        background-size: contain;
        background-position: 85%;
    }
`;

export const SliderInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;

    h1 {
        position: absolute;
        font-size: 2rem;
        margin: 0.5rem 0 0 1.5rem;
        bottom: 15%;
        text-shadow: -2px 3px 3px rgba(${colors.blackRgb}, 0.5);
    }

    p {
        position: absolute;
        font-size: 1rem;
        margin: 0.5rem 0 0 1.5rem;
        bottom: 10%;
        text-shadow: -2px 3px 3px rgba(${colors.blackRgb}, 0.5);
    }

    @media (min-width: 800px) {
        h1 {
            display: block;
            width: 30rem;
            font-size: 3rem;
            margin: 0.5rem 0 0 25%;
            bottom: 45%;
        }

        p {
            font-size: 1.5rem;
            margin: 0.5rem 0 0 25%;
            bottom: 35%;
        }
    }
`;
