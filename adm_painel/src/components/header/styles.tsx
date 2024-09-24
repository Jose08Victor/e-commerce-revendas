import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 9vh;
    padding: 0 25px;
    border-bottom: 2px solid ${ props => props.theme };

    input {
        display: none;
    }
    
    @media (max-width: 700px) {
        height: 8vh;
    }

    @media (max-width: 400px) {
        padding: 0 15px;
    }
`

export const Logo = styled.img`
    width: 50px;

    @media (max-width: 400px) {
        width: 40px;
    }
`

export const Nav = styled.nav`
    position: relative;
    width: 100%;

    label {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 700px) {
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
    justify-content: end;

    @media (max-width: 700px) {
        display: none;
        text-align: center;
        position: absolute;
        top: 70px;
        right: -15px;
        background-color: aliceblue;
    }
`

export const Links = styled.li`
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    position: absolute;
    left: 0;
    right: 100px;
    margin: 0 auto;

    a {
        cursor: pointer;
        font-size: 23px;
        font-weight: 700;
        color: #E4004B;

        &:last-child {
            color: #FF6916;
        }

        &.active {
            border-bottom: 2px solid ${ props => props.theme };
        }
    }

    @media (max-width: 900px) {
        justify-content: space-evenly;
    }

    @media (max-width: 700px) {
        display: block;
        position: sticky;

        a {
            text-align: center;
            padding: 20px 20px 2px;
            margin-bottom: 18px;
            display: block;
        }
    }
`

export const Li = styled.li`
    padding: 10px 20px;
    border-radius: 30px;
    color: aliceblue;
    background-color: ${ props => props.theme };
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;
    
    &:hover {
        color: ${ props => props.theme };
        background-color: aliceblue;
        border: 2px solid ${ props => props.theme };
    }

    @media (max-width: 700px) {
        margin: 25px 70px;
    }
`

export const Menu = styled.div`
    display: none;
    width: 60px;
    height: 60px;
    align-self: flex-end;

    @media (max-width: 700px) {
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
    left: 30px;
    transition: 0.5s ease-in-out;
    z-index: 1;

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