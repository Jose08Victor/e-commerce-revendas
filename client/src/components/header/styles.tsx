import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: sticky;
    z-index: 1;
    background-color: #fff;
    width: 100%;
    top: 0;
    border-end-end-radius: 30px;
    border-end-start-radius: 30px;
    padding-bottom: 8px;
    border-bottom: 1px ${ ( { theme } ) => theme.backgroundColor } solid;

    @media (max-width: 500px) {
        border-end-end-radius: 20px;
        border-end-start-radius: 20px;
    }
`

export const Nav = styled.nav`
    display: flex;
    width: 100%;
    padding: 10px 12px 0px;
    align-items: center;
    justify-content: space-between;
`

export const Hamburguer = styled.span`
    display: none;
    background-color: ${ ( { theme } ) => theme.color };
    position: relative;
    width: 24px;
    height: 2px;
    margin-right: 26px;

    &:before,
    &:after {
        background-color: ${ ( { theme } ) => theme.color };
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
    }

    &:before {
        top: -8px;
    }

    &:after {
        bottom: -8px;
    }

    @media (max-width: 500px) {
        display: block;
    }
`

export const Form = styled.form`
    display: flex;
    position: relative;
    align-items: center;
    padding-bottom: 10px;
    width: 50%;

    @media (max-width: 500px) {
        display: none;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 10px;
    border: 1px solid ${ ( { theme } ) => theme.color };
    padding: 0px 40px 0px 12px;
    font-family: nunito;

    &:focus {
        outline: 1px solid ${ ( { theme } ) => theme.color };
    }
`

export const SVGContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
`

export const Span = styled.span`
    text-align: center;
    line-height: 18px;
    width: 17px;
    height: 17px;
    background-color: #444;
    color: #fff;
    border-radius: 50%;
    font-size: 13px;
    position: absolute;
    top: 18px;
    right: 45px;
    cursor: default;

    @media (max-width: 500px) {
        top: 20px;
        right: 38px;
        line-height: 15px;
        width: 14px;
        height: 14px;
        font-size: 11px;
    }
`

export const Ul = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20%;
    align-items: center;
    margin-bottom: 15px;

    li {
        color: #E4004B;
        cursor: pointer;
        font-size: 20px;
        letter-spacing: .5px;
        font-weight: 700;

        &:last-child {
            color: #FF6916;
        }

        &.active {
            border-bottom: 2px solid ${ ( { theme } ) => theme.color };
        }
    }

    @media (max-width: 500px) {
        display: none;
    }
`

export const CategoryField = styled.ul`
    display: flex;
    align-items: center;
    padding: 5px;
    gap: 20px;
    overflow-x: auto;
    width: 95%;
    margin: 0 auto;

    &::-webkit-scrollbar {
        height: 2px;
        background-color: #ddd;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${ ( { theme } ) => theme.color };
        border-radius: 25px;
    }

    li {
        border-radius: 18px;
        font-size: 12px;
        border: 2px solid;
        padding: 4px 12px;
        letter-spacing: 2px;
        color: #fff;
        background-color: ${ ( { theme } ) => theme.color };
        white-space: nowrap;
        font-weight: 600;

        &:hover {
            color: ${ ( { theme } ) => theme.color };
            background-color: #fff;
            border: 2px solid ${ ( { theme } ) => theme.color };
            cursor: pointer;
        }
    }

    @media (min-width: 1100px) {
        max-width: 70%;
    }

    @media (max-width: 500px) {
        display: none;
    }
`