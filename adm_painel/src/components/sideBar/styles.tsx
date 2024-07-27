import styled from "styled-components";

export const Aside = styled.aside`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0px 14px;
    border-right: 2px solid ${props => props.theme};

    .active button {
        color: ${props => props.theme};
        background-color: aliceblue;
        border: 2px solid ${props => props.theme};
    }

    @media (max-width: 900px) {
        flex-direction: row;
        border-right: none;
        border-bottom: 2px solid ${props => props.theme};
        padding: 14px;
    }

    @media (max-width: 500px) {
        justify-content: space-around;
        padding: 14px 0;
    }
`

export const Button = styled.button`
    width: 150px;
    font-size: 20px;
    border-radius: 20px;
    border: 2px solid;
    padding: 5px;
    color: aliceblue;
    background-color: ${props => props.theme};

    &:hover {
        color: ${props => props.theme};
        background-color: aliceblue;
        border: 2px solid ${props => props.theme};
        cursor: pointer;
    }

    @media (max-width: 500px) {
        width: 100px;
        font-size: 14px;
        border-radius: 15px;
    }
`