import styled from 'styled-components';
import { colors } from '../../colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0.5rem;
    min-width: 10rem;
    padding-bottom: 0.5rem;
    overflow: hidden;
    border-radius: 0.4rem;
    background-color: rgb(${colors.whiteGray});

    img{
        width: 100%;
    }

    h1{
        color: ${colors.red};
        font-size: 1.2rem;
        margin: 0.3rem 0 0.1rem 0;
        word-wrap: normal;
        word-break: keep-all;
        text-align: center;
    }

    h3{
        font-weight: bolder;
    }
`;
