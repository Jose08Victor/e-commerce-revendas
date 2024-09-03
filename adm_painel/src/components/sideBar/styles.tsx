import styled from "styled-components";

export const Aside = styled.aside`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    padding: 0px 14px;
    border-right: 2px solid ${ props => props.theme };

    a { 
        width: 150px;
        font-size: 20px;
        font-weight: 600;
        border-radius: 15px;
        border: 2px solid;
        padding: 5px;
        color: aliceblue;
        background-color: ${ props => props.theme };

        &:hover,
        &.active {
            color: ${ props => props.theme };
            background-color: aliceblue;
            border: 2px solid ${ props => props.theme };
            cursor: pointer;
        }
    }

    @media (max-width: 900px) {
        flex-direction: row;
        border-right: none;
        border-bottom: 2px solid ${ props => props.theme };
        padding: 14px;
    }

    @media (max-width: 700px) {
        justify-content: space-around;
        padding: 14px 0;

        a {
            width: 110px;
            font-size: 14px;
        }
    }

    @media (max-width: 450px) {
        padding: 12px 0;

        a {
            width: 78px;
            font-size: 10px;
            border-radius: 12px;
        }
    }
`