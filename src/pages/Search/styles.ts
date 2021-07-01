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
    flex-direction: column;
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

    a{
        text-decoration: none;
        color:${colors.black};
    }
`;

export const SearchBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5rem;
    width: 95%;
    height: 3rem;

    label{
        color:${colors.red};
        font-size: 1.2rem;
        font-weight: bold;
        font-variant: small-caps;
    }

    input{
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom-color: ${colors.red};
        margin: 0 1rem;
        width: 40rem;
        padding: 0 0.5rem;
        font-size: 1rem;

        ::placeholder{
            color: ${colors.red};
            font-weight: bold;
            opacity: 0.4;
        }

    }

    button{
        border: none;
        width: 5rem;
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 0.2rem;
        box-shadow: -2px 2px 3px -1px rgba(0, 0, 0, 0.3);
        font-size: 1.1rem;
        :hover{
            box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.3);
        }
    }

    @media(max-width:800px){
        flex-direction: column;
        height: auto;
        margin: 0.5rem 0;

        input{
            margin: 0.5rem 0;
            width: 100vw;
        }

        button{
            width: 100vw;
            height: 3rem;
        }
    }
`;

export const ErrorSearch = styled.span`
    display: flex;
    color: ${colors.black};
    font-size: .8rem;
    font-weight: bold;
`;

export const Pagination = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        margin: 0 0.2rem;
        border: none;
        width: 5rem;
        height: 80%;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: -1px 1px 2px 1px rgba(0, 0, 0, 0.3);
    }

    @media(max-width:800px){
        flex-direction: column;
        height: auto;
        button{
            width: 90vw;
            margin: 0.3rem 0;
            height: 3rem;
            border-radius: 0.2rem;
            font-size: 1.5rem;
        }
        div{
            width: 40vw;
            margin: 0.5rem 0;
            height: 1.5rem;
            font-size: 1rem;

        }
    }
`;

export const FirstPage = styled.button`
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
`;

export const PrevPage = styled.button``;

export const NextPage = styled.button``;

export const LastPage = styled.button`
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
`;

export const InfoPage = styled.div`
    width: 5rem;
    display: flex;
    justify-content: space-evenly;
    text-shadow: -1px 3px 3px 2px rgba(0, 0, 0, 0.3);
    `;

export const InfoRegisters = styled.div`
    width: 10rem;
    padding: 0 1rem;
    display: flex;
    justify-content: space-evenly;
    text-shadow: -1px 3px 3px 2px rgba(0, 0, 0, 0.3);
`;

