import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
`
export const Form = styled.form`
    width: 300px;
    max-width: 300px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 0px 0px 20px -8px gray;

    h1 {
        margin-bottom: 20px;
    }

    input {
        width: 220px;
        height: 30px;
        margin-bottom: 20px;
    }

    button {
        padding: 9px;
        font-size: 16px;       
    }
`   