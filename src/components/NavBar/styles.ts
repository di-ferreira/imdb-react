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
        transform: translateX(-5rem);
    }
`;

const Rotate = keyframes`
    from{
       -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate3d(0, 0, 1, -200deg);
        transform: rotate3d(0, 0, 1, -200deg);
        opacity: 0;
    }
    to{
       -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: none;
        transform: none;
        opacity: 1;
    }
`;

export const Container = styled.nav`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 5rem;
    margin-bottom: 0.5rem;
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
    display: none;

    @media (max-width: 800px) {
        display: block;
        transform: rotate(360deg);
        -webkit-animation-name: ${Rotate};
        animation-name: ${Rotate};
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;

        svg {
            font-size: 1.5rem;
            cursor: pointer;
        }
    }
`;

export const Menu = styled.div<{ open: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    font-size: 1rem;

    ul {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 50%;
        height: 100%;
    }

    li {
        display: flex;
        justify-content: center;
        width: fit-content;
        height: 100%;
        padding: 0 1%;
        border-top: solid ${colors.red} 0rem;
        transition: background-color 0.3s ease;

        &:hover {
            border-top-width: 0.1rem;
            background-color: rgba(${colors.whiteGray}, 0.7);
            transition: background-color 0.3s ease;
        }

        a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: ${colors.black};
            height: 100%;
            font-weight: bold;
            transition: all 0.3s ease;

            &:hover {
                color: ${colors.red};
                transition: all 0.3s ease;
            }
        }
    }

    @media (max-width: 800px) {
        ul {
            display: none;
        }
    }
`;

export const MenuMobile = styled.ul<{ open: boolean }>`
    display: none;

    @media (max-width: 800px) {
        position: absolute;
        display: ${(props) => (props.open ? "flex" : "none")};
        flex-direction: column;
        align-items: center;
        padding: 4% 3.5% 2% 3.5%;
        width: 100%;
        max-width: 15rem;
        height: 20rem;
        top: 3rem;
        transform: translateX(-5rem);
        animation: ${SlideToRight} 0.3s ease-in-out normal;
        border-radius: 0.4rem;
        border: solid rgb(${colors.whiteGray}) 0.1rem;
        background-color: ${colors.white};
        box-shadow: 0px 5px 3px -2px rgba(0, 0, 0, 0.3);
        transition: all 0.5s ease;

        li {
            display: flex;
            align-items: center;
            width: 100%;
            height: 1.7rem;
            margin: 0.2rem 0;

            a {
                text-decoration: none;
                color: ${colors.black};
                font-weight: bold;
                width: 100%;
                height: 100%;
                border-top: solid ${colors.red} 0rem;
                transition: all 0.3s ease;

                &:hover {
                    border-top-width: 0.1rem;
                    transition: all 0.3s ease;
                    background-color: rgba(${colors.whiteGray}, 0.7);
                }
            }
        }
    }
`;
