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
    background-size: cover;
    background-color: ${colors.black};
`;

export const SlideFooter = styled.div`
    display: flex;
    width: 100%;
    height: 2rem;
    background-color: green;
`;

export const SlideNavigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25%;
    height: 100%;
    background-color: greenyellow;
`;
