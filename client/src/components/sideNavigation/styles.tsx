import styled from "styled-components";

export const Nav = styled.nav`
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    height: 9%;
    
    p {
        font-size: 34px;
        font-weight: 700;
        margin-bottom: 7px;
        cursor: pointer;
        transition: .3s ease-in-out; 

        &:hover {
            transform: scale(1.2);
            color: ${ ( { theme } ) => theme.color };
        }
    }
`

export const Form = styled.form`
    display: flex;
    position: relative;
    align-items: center;
    width: 90%;
`

export const Input = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 10px;
    border: 1px solid  ${ ( { theme } ) => theme.color };
    padding: 0px 40px 0px 12px;

    &:focus {
        outline: 1px solid  ${ ( { theme } ) => theme.color };
    }
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 15px 0;
    height: 16%;

    img {
        width: 80px;
        border-radius: 50%;

        &.active {
            outline: 2px solid ${ ( { theme } ) => theme.color };
            padding: 4px;
        }
    }
`

export const Ul = styled.ul`
    height: 60%;
    overflow: auto;
    border-top: 1px solid ${ ( { theme } ) => theme.color };
     
    li {
        font-size: 20px;
        padding: 10px 15px;
        border-bottom: 1px solid ${ ( { theme } ) => theme.backgroundColor };
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: .3s ease-in-out;
        
        &:hover {
            background-color: ${ ( { theme } ) => theme.color };
            color: #fff;
        }

        &:after {
            content: '';
            background: url(./src/assets/arrow-right.svg) no-repeat center;
            width: 11px;
            height: 20px;
            display: inline-block;
        }
    }
`

export const LoginContainer = styled.div`   
    border-top: 1px solid ${ ( { theme } ) => theme.color };
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button {
        width: 130px;
        font-size: 15px;
        border-radius: 15px;
        border: 2px solid;
        padding: 14px;
        color: #fff;
        background-color:  ${ ( { theme } ) => theme.color };

        &:hover {
            color:  ${ ( { theme } ) => theme.color };
            background-color: #fff;
            border: 2px solid  ${ ( { theme } ) => theme.color };
            cursor: pointer;
        }
    }
`