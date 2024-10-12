import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: sticky;
    z-index: 1;
    background-color: aliceblue;
    width: 100%;
    top: 0;
    border-end-end-radius: 30px;
    border-end-start-radius: 30px;
    padding-bottom: 8px;
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
    border: 1px solid black;
    padding: 0px 40px 0px 12px;
`

export const Button = styled.input`
    background: url("./src/assets/magnifying-glass.svg") no-repeat center ;
    background-size: 20px;
    width: 35px;
    height: 35px;
    border: none;
    cursor: pointer;
    position: absolute;
    left: 94%;

    &:hover {
        transform: scale(1.2);
    }

    ${ HeaderContainer }:hover & {
        background-color: cyan;
    }

    @media (max-width: 1024px) {
        left: 90%;
    }
`

export const SVGContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
`

export const BagSVG = styled.svg`
    width: 28px;
    fill: ${ ( { theme } ) => theme.color };

    @media (max-width: 500px) {
        width: 20px;
    }
`

export const Span = styled.span`
    text-align: center;
    line-height: 18px;
    width: 17px;
    height: 17px;
    background-color: black;
    color: #ffffff;
    border-radius: 50%;
    font-size: 13px;
    position: absolute;
    top: 18px;
    right: 45px;

    @media (max-width: 500px) {
        top: 20px;
        right: 38px;
        line-height: 15px;
        width: 14px;
        height: 14px;
        font-size: 11px;
    }
`

export const ProfileSVG = styled.svg`
    width: 25px;
    fill: ${ ( { theme } ) => theme.color };

    @media (max-width: 500px) {
        width: 18px;
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
        color: aliceblue;
        background-color: ${ ( { theme } ) => theme.color };
        white-space: nowrap;
        font-weight: 600;

        &:hover {
            color: ${ ( { theme } ) => theme.color };
            background-color: aliceblue;
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