import styled from "styled-components";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { colors } from "../../colors";

export const Container = styled.div`
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 25rem;
`;

export const SliderContent = styled.div<{ transform: string }>`
    display: block;
    width: 100vw;
    height: 100%;
    transform: translateX(${(props) => props.transform});
    transition: all 1s ease-in-out;
`;

export const SliderInner = styled.div<{ width: string }>`
    display: flex;
    width: ${(props) => props.width};
    height: 100%;
`;

export const SlideFooter = styled.nav<{ transform: string }>`
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    height: 2rem;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateX(${(props) => props.transform});
    transition: all 1s ease-in-out;
    background-color: rgba(${colors.blackRgb}, 0.5);
`;

export const SlideNavigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25%;
    height: 100%;

    svg {
        font-size: 1.2rem;
        color: ${colors.white};
    }
`;

export const FaChevronLeftIcon = styled(FaChevronLeft)`
    cursor: pointer;
    :hover {
        transform: translateX(-0.5rem);
        transition: all 0.5s ease-in-out;
    }
`;

export const FaChevronRightIcon = styled(FaChevronRight)`
    cursor: pointer;
    :hover {
        transform: translateX(0.5rem);
        transition: all 0.5s ease-in-out;
    }
`;
