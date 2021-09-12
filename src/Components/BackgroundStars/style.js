import styled from "styled-components";


export const Star = styled.span`
    transform: translate(${props => props.posX}px, ${props => props.posY}px);
    position: absolute;
    border: 1px solid white;
    width: 1px;
    height: 1px;
    border-radius: 25px;
    box-shadow: 0px 0px 8px 2px white;
`;