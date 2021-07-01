import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.div`
    position: relative;
    width: 10rem;
    border-radius: 0.3rem;
    margin: 0.5rem;
    padding-bottom: 0.5rem;

    img{
        width: 100%;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
    }

    h1{
        color: ${colors.black};
        font-size: 1rem;
        margin: 0.3rem 0 0.1rem 0;
        word-wrap: normal;
        word-break: keep-all;
        text-align: center;
    }

    h3{
        color: ${colors.whiteGray};
        font-size: 0.8rem;
        margin: 0.3rem 0 0.1rem 0;
        word-wrap: normal;
        word-break: keep-all;
        text-align: center;
    }
`;

export const RateMovie = styled.span<{rate:number}>`
    position: absolute;
    top: 10rem;
    left: -0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    z-index: 10;
    font-size: 0.8rem;
    color: ${colors.yellow};
    background-color: ${colors.dark};
    box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.5);

    ::after{
        content: '';
        position: absolute;
        width: 1.9rem;
        height: 1.9rem;
        border: solid 2px ${(props)=>(
                                props.rate > 7.5 ? colors.green :
                                props.rate > 4.5 ? "yellow" : colors.red
                            )};
        border-radius: 50%;
    }
`;

export const FavoriteIcon = styled.span`
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    z-index: 10;
    font-size: 0.8rem;
    color: ${colors.pink};
    background-color: ${colors.white};
    box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: all 0.5s ease;

    :hover{
        background-color: ${colors.whiteGray};
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
        transition: all 0.5s ease;
    }
`;
