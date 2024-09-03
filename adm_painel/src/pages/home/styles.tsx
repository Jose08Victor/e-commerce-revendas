import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    padding-top: 20px;
    gap: 20px;
    flex-direction: column;
    text-align: center;
`

export const DivContainer = styled.div`
    display: flex; 
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
`

export const Div = styled.div`
    width: 500px;
    height: 160px;
    max-width: 300px;
    border: 2px solid transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    width: 500px;
    height: 160px;
    max-width: 300px;
    border: 2px solid ${ props => props.theme };
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const HOne = styled.h1`
    margin-bottom: 20px;

    span {
        border-bottom: 2px solid ${ props => props.theme };
    }
`

export const HTwo = styled.h2`
    margin-bottom: 10px;
`

export const Label = styled.label`
   font-size: 17px;
   font-weight: 500;
`

export const Label1 = styled( Label )`
    margin-left: 20px;
`

export const Input = styled.input`
    width: 114px;
    text-align: center;
    height: 28px;
    font-size: 15px;
    font-family: "Nunito", sans-serif;
    border: 1px solid ${ props => props.theme };
    border-radius: 10px;
    outline: none;
    margin-bottom: 10px;
    margin-left: 5px;

    &:focus {
        border: 2px solid ${ props => props.theme };
    }
    
    @media (max-width: 740px) {
        height: 28px;
        font-size: 13.5px;
        padding-left: 6px;
    }

    @media (max-width: 375px) {
        height: 23px;
        font-size: 10px;
        padding-left: 4px;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Button = styled.button`
    font-size: 13px;
    border-radius: 12px;
    border: 2px solid;
    padding: 7px 12px;
    color: aliceblue;
    background-color: ${ props => props.theme };

    &:hover {
        color: ${ props => props.theme };
        background-color: aliceblue;
        border: 2px solid ${ props => props.theme };
        cursor: pointer;
    }
`

export const ImgContainerDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    @media(max-width: 900px) {
        justify-content: center;
        gap: 80px;
        padding: 0 20px;
    }
`

export const MagazineContainer = styled.div`
    h2 {
        margin-bottom: 10px;
    }
`

export const ImgContainer = styled.div`
    position: relative;

    img {
        width: 250px;
        display: flex;
        border: 3px solid ${ props => props.theme };
        
        &:hover~div {
            display: flex;
        }
    }
`

export const Test = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px 0;
    display: none;

    &:hover {
        display: flex;
    }
`