import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.div`
    width: 100%;
    height: 25rem;
`;

export const Slider = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url("https://image.tmdb.org/t/p/original/z2UtGA1WggESspi6KOXeo66lvLx.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: ${colors.black};
`;
