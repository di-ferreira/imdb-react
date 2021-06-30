import styled from 'styled-components';
import { colors } from '../../colors';

export const Container = styled.div`
    width: 100vw;
    overflow-x: hidden;
`;

export const Content = styled.div<{imgUrl:string|any}>`
    display: flex;
    overflow-x: hidden;
    min-height: 60rem;
    padding: 1rem 5rem;
    background-image: url(${(props)=>props.imgUrl});
    background-size: contain;
    background-color: ${colors.black};
`;
