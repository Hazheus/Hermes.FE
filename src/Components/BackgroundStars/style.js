import styled from "styled-components";


export const Star = styled.div`
    transform: translate(${props => props.x}px, ${props => props.y}px);
    position: absolute;
    border: 1px solid white;
    width: 1px;
    height: 1px;
    border-radius: 25px;
    box-shadow: 0px 0px 8px 2px white;
`;