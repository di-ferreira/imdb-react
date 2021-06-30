import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    padding: 2.5rem 5rem;
    color: ${colors.white};
    background-color: ${colors.dark};
    @media (max-width: 800px) {
        justify-content: center;
    }
`;

export const Viewed = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 1rem;

    ul {
        width: 100%;
    }

    li {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 0.7rem;

        img {
            margin-right: 1rem;
        }
        p {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 800px) {
        max-width: 100%;
        margin-bottom: 2rem;
    }
`;

export const SiteIndex = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    height: 100%;

    ul {
        width: 100%;

        li {
            width: 100%;
            display: flex;
            align-items: center;
            margin: 0.7rem 0;

            a {
                color: ${colors.white};
                text-decoration: none;
                font-size: 1.1rem;

                &:hover {
                    color: ${colors.red};
                }
            }
        }
    }
    @media (max-width: 800px) {
        max-width: 100%;
        margin-bottom: 2rem;
    }
`;

export const Social = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2 1 1;
    font-size: 1.1rem;

    @media (max-width: 800px) {
        margin-top: 1rem;
    }
`;

export const Icons = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 0.5rem;
    align-items: center;
    justify-content: space-between;

    svg {
        margin-right: 0.5rem;
        font-size: 1.8rem;
    }
`;

export const Title = styled.h1`
    color: ${colors.red};
    font-size: 1.2rem;
    margin-bottom: 1rem;
`;
