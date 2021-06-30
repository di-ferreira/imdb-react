import styled from 'styled-components';
import { colors } from '../../colors';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;

    ul{
        display: flex;
        align-items: flex-start;
        margin-top: 0.5rem;
        width: 95%;
        padding: 0 2rem 1rem 2rem;
        overflow: auto hidden;

        li{
            a{
                color: ${colors.black};
                text-decoration: none;
            }
        }
}
`;

export const Title = styled.h1`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-left: 5rem;
    width: 95%;
`;

export const SubTitle = styled.h3`
    width: 95%;
    padding: .5rem;
    border-top: solid 2px ${colors.red};
    background-color: rgb(${colors.whiteGray});
    margin-left: 5rem;
    margin-bottom: .3rem;
`;
