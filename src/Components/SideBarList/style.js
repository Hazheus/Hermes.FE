import styled from "styled-components";

export const List = styled.ul`
    height: 100%;
    list-style: none;
    display: grid;
    grid-gap: 15px;    

    @media(max-width: 650px) {
        grid-template-columns: repeat(5, 32px);
        width: 100%;
    }
`;