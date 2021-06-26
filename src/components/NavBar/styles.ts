import styled from 'styled-components';
import { colors } from './../../colors';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem .8rem;
    font-size: 1.1rem;
`;

export const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    padding: 1% .8% .5% .8%;
    background-color: ${colors.yellow};
    color: ${colors.black};

    strong{
        text-transform: uppercase;
    }
    `;

export const Icon = styled.span`

    svg{
        font-size: 1.5rem;
    }
`;

export const Menu = styled.div<{open:boolean}>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    z-index: 20;

    ul{
        z-index: 10;
    }

    @media(max-width:800px){
        ul{
            position: absolute;
            display: ${props=>(props.open?'flex':'none')};
            top: 1.5rem;
            background-color:rebeccapurple;
        }
    }

`;
