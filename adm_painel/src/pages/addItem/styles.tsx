import styled from "styled-components";

export const Section = styled.section`
    overflow-y: scroll;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const HOne = styled.h1`
    align-self: start;
    margin: 15px 20px;
    font-size: 30px;

    @media (max-width: 375px) {
        font-size: 22px;
        margin: 15px 20px 40px;
    }
`