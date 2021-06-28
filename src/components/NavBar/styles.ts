import styled, { keyframes } from "styled-components";
import { colors } from "./../../colors";
import { Link } from "react-router-dom";

/*
    === ANIMATIONS ===
*/

const SlideToRight = keyframes`
    from{
        transform: translateX(-46.5rem);
    }
    to{
        transform: translateX(-26.5rem);
    }
`;

const Rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Container = styled.nav`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.8rem;
    font-size: 1.1rem;
`;

export const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    padding: 1% 0.8% 0.5% 0.8%;
    background-color: ${colors.yellow};
    color: ${colors.black};

    strong {
        text-transform: uppercase;
    }
`;

export const Icon = styled.span`
    transform: rotate(360deg);
    animation: ${Rotate} 0.3 ease-in-out;

    svg {
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

export const Menu = styled.div<{ open: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    z-index: 20;

    ul {
        z-index: 10;
    }

    li {
        display: flex;
        align-items: center;
        width: 100%;
        height: 1.5rem;
        margin: 0.2rem 0;
    }

    a {
        text-decoration: none;
        color: ${colors.black};
        transition: all 0.5s ease;

        &:hover {
            margin-left: 0.4rem;
            font-weight: bold;
            transition: all 0.5s ease;
        }
    }

    @media (max-width: 800px) {
        ul {
            position: absolute;
            display: ${(props) => (props.open ? "flex" : "none")};
            flex-direction: column;
            align-items: center;
            padding: 4% 3.5% 2% 3.5%;
            width: 100%;
            max-width: 15rem;
            height: 20rem;
            top: 2.5rem;
            transform: translateX(-26.5rem);
            animation: ${SlideToRight} 0.3s ease-in-out normal;
            border-radius: 0.4rem;
            background-color: rgb(${colors.whiteGray});
            box-shadow: 0px 5px 3px -2px rgba(0, 0, 0, 0.3);
            transition: all 0.5s ease;
        }
    }
`;
