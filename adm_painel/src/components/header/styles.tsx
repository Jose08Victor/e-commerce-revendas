import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 9vh;
    border-bottom: 2px solid ${ props => props.theme };

    input {
        display: none;
    }
`

export const Logo = styled.img`
    padding-left: 20px;
    width: 50px;
    border-radius: 50%;
`

export const Nav = styled.nav`
    label {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 900px) {
        position: absolute;
        top: .1vh;
        right: 0;
        z-index: 1;

        &.toggle ul {
            display: block;
        }

        &.toggle label span {
        transform: rotate(45deg);
        }

        &.toggle label span:before {
            transform: rotate(90deg);
            top: 0;
        }

        &.toggle label span:after {
            transform: rotate(90deg);
            bottom: 0;
        }
    }
`

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 75vw;
    padding: 0px 20px;

    @media (max-width: 900px) {
        display: none;
        width: 290px;
        background-color: aliceblue;
    }
`

export const Links = styled.li`
    display: flex;
    justify-content: space-between;
    width: 500px;

    a {
        cursor: pointer;

        &:last-child p {
            color: #FF6916;
        }

        &.active {
            border-bottom: 2px solid ${ props => props.theme };
        }
    }

    @media (max-width: 900px) {
        display: block;
        width: 100%;

        a {
            text-align: center;
            padding: 20px 20px 2px;
            margin-bottom: 18px;
            display: block;
        }
`

export const P = styled.p`
     font-size: 23px;
    font-weight: 700;
    color: #E4004B;
`

export const LoginButton = styled.button`
    height: 40px;
    width: 105px;
    border-radius: 30px;
    border: none;
    color: white;
    background-color: ${ props => props.theme };
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;

    @media (max-width: 900px) {
        margin: 20px 70px;
    }
`

export const Menu = styled.div`
    display: none;
    width: 60px;
    height: 60px;
    align-self: flex-end;

    @media (max-width: 900px) {
        display: block;
    }
`

export const Hamburguer = styled.span`
    background-color: ${ props => props.theme };
    position: relative;
    display: block;
    width: 30px;
    height: 2px;
    top: 29px;
    left: 15px;
    transition: 0.5s ease-in-out;

    &:before,
    &:after {
        background-color: ${ props => props.theme };
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 0.2s ease-in-out;
    }

    &:before {
        top: -10px;
    }

    &:after {
        bottom: -10px;
    }
`