import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.div`
    width: 100vw;
`;

export const ContainerPage = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
`;

export const ContentPage = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 95%;
    flex-wrap: wrap;
    padding: 2rem;
    border-radius: 0.4rem;
    box-shadow: -5px 5px 3px -2px rgba(0, 0, 0, 0.3);
    background-color: rgb(${colors.whiteGray});
`;

export const SearchBox = styled.div``;
