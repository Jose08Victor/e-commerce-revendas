import styled from "styled-components";
import { ListTableFormat } from "../styles/pageStyles.tsx";

export const CategoryField = styled.ul`
    display: flex;
    align-items: center;
    padding: 22px 22px 8px;
    gap: 20px;
    overflow-x: auto;
    width: 90%;
    margin: 0 auto 14px;

    &::-webkit-scrollbar {
        height: 2px;
        background-color: #ddd;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${ props => props.theme };
        border-radius: 25px;
    }

    li {
        border-radius: 20px;
        border: 2px solid;
        padding: 8px 15px;
        letter-spacing: .8px;
        color: aliceblue;
        background-color: ${ props => props.theme };
        white-space: nowrap;

        &:hover {
            color: ${ props => props.theme };
            background-color: aliceblue;
            border: 2px solid ${ props => props.theme };
            cursor: pointer;
        }
    }

    .selected {
        color: ${ props => props.theme };
        background-color: aliceblue;
        border: 2px solid ${ props => props.theme };
    }

    @media (max-width: 700px) {
        width: 188%;
        position: relative;
        left: 6%;

        li {
            font-size: 12px;
        }
    }
`

export const ProductListTableFormat = styled( ListTableFormat )`
    grid-template-columns: .5fr 2fr .5fr .6fr .5fr .5fr;
`