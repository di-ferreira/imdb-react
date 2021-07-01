import styled, { keyframes } from 'styled-components';
import { colors } from '../../colors';


/*
    === ANIMATIONS ===
*/

const Ripple = keyframes`
    0%{
        transform: scale(0);
        opacity:0;
    }
    50%{
        opacity:1;
    }
    100%{
        transform: scale(1.5);
        opacity:0;
    }
`;

export const Container = styled.div<{visible:boolean}>`
    display: ${(props)=>(props.visible ? "flex": "none" )};
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 1000;
    background-color: rgba(${colors.blackRgb},0.7);
`;

export const LoadingAnimation = styled.span`
    position: relative;
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color:${colors.white};
    font-size: 2em;

    ::after{
        content: '';
        position: absolute;
        top:0;
        left: 0;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 3px ${colors.white};
        animation: ${Ripple} 1s linear infinite 1s;
    }

    ::before{
        content: '';
        position: absolute;
        top:0;
        left: 0;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 3px ${colors.white};
        animation: ${Ripple} 1s linear infinite 2.5s;
    }
`;
