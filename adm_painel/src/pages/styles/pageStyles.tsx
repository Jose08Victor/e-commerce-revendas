import styled from "styled-components";

export const ListContainer = styled.section`
    overflow: auto;
    width: 100%;
    position: relative;

    &::-webkit-scrollbar {
        width: 6px;
        height: 4px;
        border-left: ${ props => props.theme } 1px solid;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${ props => props.theme };
        border-radius: 25px;
    }
`

export const ListTableFormat = styled.ul`
    display: grid;
    grid-template-columns: .5fr 2fr .5fr .6fr .5fr .5fr;
    align-items: center;
    padding: 10px 14px;
    border-bottom: 1px solid ${ props => props.theme };
    width: 100%;
    text-align: center;
    font-weight: 500;

    @media (max-width: 700px) {
        width: 200%;
    }

    @media (max-width: 500px) {
        font-size: 13px;
        padding: 6px 8px;

        &:nth-child(2) {
            font-size: 12px;
        }
    }
`

export const ListTable = styled.div`
    ul img {
        width: 72px;
        max-height: 72px;
        border: 1px solid ${ props => props.theme };
        border-radius: 15px;
    }
        
    @media (max-width: 500px) {
        ul img {
            width: 50px;
            max-height: 50px;
        }
    }
`

export const ActionButton = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    position: relative;

    button {
        width: 80px;
        border-radius: 20px;
        border: 2px solid;
        padding: 8px;
        color: aliceblue;
        background-color: ${ props => props.theme };
        font-weight: 500;

        &:hover {
            color: ${ props => props.theme };
            background-color: aliceblue;
            border: 2px solid ${ props => props.theme };
            cursor: pointer;
        }
    }

    @media (max-width: 500px) {
        gap: 2px;

        button {
            width: 56px;
            padding: 5px;
            font-size: 10px;
        }
    }
`