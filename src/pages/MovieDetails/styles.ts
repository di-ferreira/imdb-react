import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.div`
    width: 100vw;
    overflow-x: hidden;
`;

export const Content = styled.div<{ imgUrl: string | any }>`
    display: flex;
    overflow-x: hidden;
    min-height: 60rem;
    padding: 1rem 5rem;
    background: linear-gradient(rgba(${colors.blackRgb}, 50%), ${colors.black}),
        url(${(props) => props.imgUrl}) no-repeat top;
    background-size: contain;
    justify-content: center;
`;

export const MovieCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 90rem;
    margin-top: 2.5rem;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

export const CardTop = styled.div`
    display: flex;
    width: 100%;
    color: ${colors.white};
    @media (max-width: 800px) {
        align-items: center;
        flex-direction: column;
    }
`;

export const Poster = styled.div`
    max-width: 10rem;
    img {
        max-width: 100%;
    }

    @media (max-width: 800px) {
        max-width: 20rem;
    }
`;

export const MovieInformation = styled.div`
    margin: 0 1.5rem;

    @media (max-width: 800px) {
        margin: 0;
    }
`;

export const TopInformation = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 0.5rem 0;
    text-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgba(${colors.blackRgb}, 0.7);
    div {
        display: flex;
        align-items: baseline;
    }
`;

export const MovieTitle = styled.h1`
    font-size: 2.5rem;
`;

export const DateInfo = styled.span`
    font-size: 1.2rem;
    margin-left: 0.2rem;
`;

export const RateInfo = styled.span`
    color: ${colors.yellow};
    font-size: 1.2rem;
    font-weight: bold;
`;

export const MovieSinopse = styled.p`
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;

    @media (max-width: 800px) {
        font-size: 0.8rem;
        line-height: 1.2rem;
    }
`;

export const MovieProductionInfo = styled.div`
    font-size: 0.8rem;
`;

export const MovieLike = styled.div`
    background-color: rgba(${colors.blackRgb}, 0.5);
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 8rem;
    width: 100%;
`;

export const ButtonLike = styled.button`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    font-size: 1.1rem;
    color: ${colors.white};
    background-color: rgba(${colors.pinkRGB}, 1);
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        transition: all 0.5s ease;
        background-color: rgba(${colors.pinkRGB}, 0.8);
    }

    svg {
        margin-left: 0.5rem;
    }
`;

export const ButtonShare = styled.button`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    font-size: 1.1rem;
    color: ${colors.white};
    background-color: rgba(${colors.greenRGB}, 1);
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        transition: all 0.5s ease;
        background-color: rgba(${colors.greenRGB}, 0.8);
    }
    svg {
        margin-left: 0.5rem;
    }
`;

export const ContentDetails = styled.div`
    display: block;
    width: 100%;
    min-height: 10rem;
    background-color: rgb(${colors.whiteGray});
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
`;

export const ContentDetailsRow = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin: 0.2rem 0;
    padding: 0 1rem;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const CastList = styled.div`
    width: 100%;
    margin-right: 2rem;

    h1 {
        text-transform: capitalize;
        font-size: 1.6rem;
        color: ${colors.red};
        text-shadow: 1rem 1rem 0.2rem 0.2rem rgba(${colors.blackRgb}, 0.7);
    }

    ul {
        width: 100%;

        li {
            display: flex;
            align-items: center;
            width: 100%;
            margin: 1rem 0;
            border-top: solid 2px ${colors.red};
            background-color: ${colors.white};

            img {
                max-width: 5rem;
                width: 100%;
            }
            p {
                display: flex;
                justify-content: space-evenly;
                width: 100%;
                font-size: 1rem;

                strong {
                    text-transform: capitalize;
                }
            }
        }
    }

    @media (max-width: 800px) {
        ul {
            li {
                padding-bottom: 0.5rem;
                flex-direction: column;

                img {
                    max-width: 90%;
                }

                p {
                    margin-top: 1rem;
                    flex-direction: column;
                    align-items: center;
                    strong {
                        margin: 0.5rem 0;
                    }
                }
            }
        }
    }
`;

export const MovieTrailer = styled.div`
    width: 100%;
    h1 {
        text-transform: capitalize;
        font-size: 1.6rem;
        color: ${colors.red};
        text-shadow: 1rem 1rem 0.2rem 0.2rem rgba(${colors.blackRgb}, 0.7);
    }
`;

export const MoviesContainers = styled.ul`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: ${colors.white};
    border-radius: 0.4rem;

    li {
        width: 100%;
        max-width: 25rem;
        margin: 1rem;

        iframe {
            width: 100%;
        }
    }

    @media (max-width: 800px) {
        iframe {
            height: auto;
        }
    }
`;
