import styled from "styled-components";

export const ProductListContainer = styled.section`
    overflow: auto;
    width: 100%;
    position: relative;

    &::-webkit-scrollbar {
        width: 6px;
        height: 4px;
        border-left: ${props => props.theme} 1px solid;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme};
        border-radius: 25px;
    }
`

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
        background-color: ${props => props.theme};
        border-radius: 25px;
    }

    li {
        border-radius: 20px;
        border: 2px solid;
        padding: 8px 15px;
        letter-spacing: .8px;
        color: aliceblue;
        background-color: ${props => props.theme};

        &:hover {
            color: ${props => props.theme};
            background-color: aliceblue;
            border: 2px solid ${props => props.theme};
            cursor: pointer;
        }
    }

    @media (max-width: 700px) {
        width: 188%;
        position: relative;
        left: 6%;
    }
`

export const ListTableFormat = styled.ul`
    display: grid;
    grid-template-columns: .5fr 2fr .5fr .6fr .5fr .5fr;
    align-items: center;
    padding: 10px 14px;
    border-bottom: 1px solid ${props => props.theme};
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
`

export const ListTable = styled.div`
    ul img {
        width: 68px;
        max-height: 68px;
        border: 1px solid ${props => props.theme};
        border-radius: 15px;
    }

    ul li:last-child {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        position: relative;
    }

    ul li:last-child button {
        width: 80px;
        border-radius: 20px;
        border: 2px solid;
        padding: 8px;
        color: aliceblue;
        background-color: ${props => props.theme};
        font-weight: 500;

        &:hover {
            color: ${props => props.theme};
            background-color: aliceblue;
            border: 2px solid ${props => props.theme};
            cursor: pointer;
        }
    }

    @media (max-width: 500px) {
        ul img {
            width: 47px;
            max-height: 47px;
        }

        ul li:last-child {
            gap: 2px;
        }

        ul li:last-child button {
            width: 56px;
            padding: 5px;
            font-size: 10px;
        }
    }
`