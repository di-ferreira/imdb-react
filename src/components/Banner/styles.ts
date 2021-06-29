import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 25rem;
`;

export const SliderContent = styled.div<{ transform: string }>`
    display: block;
    width: 100%;
    height: 100%;
    transform: translateX(${(props) => props.transform});
`;

export const SliderInner = styled.div<{ width: string }>`
    display: flex;
    width: ${(props) => props.width};
    height: 100%;
`;
