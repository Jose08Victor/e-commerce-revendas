import styled from "styled-components";

export const FormContainer = styled.form`
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const AddImgUpload = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;

    img {
        max-width: 200px;
        max-height: 200px;
        cursor: pointer;
        border-radius: 10px;
    }

    p {
        font-weight: 500;
        font-size: 17px;
        margin-bottom: 10px;
    }

    @media (max-width: 740px) {
        img {
            max-width: 150px;
            max-height: 150px;
        }

        p {
            font-size: 14px;
        }
    }

    @media (max-width: 375px) {
        width: 130px;
        height: 130px;

        img {
            max-width: 130px;
            max-height: 130px;
        }

        p {
            font-size: 12px;
            margin-bottom: 5px;
        }
    }
`

export const InputFields = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1100px) {
        width: 90%;
    }

    @media (max-width: 740px) {
        height: 45vh;
        flex-direction: column;
        justify-content: space-around;
    }

    @media (max-width: 375px) {
        justify-content: space-evenly;
    }
`

export const AddProductFields = styled.div`
    p {
        font-weight: 700;
        font-size: 18px;
    }

    input,
    select {
        height: 38px;
        font-size: 15px;
        font-family: "Nunito", sans-serif;
        padding-left: 8px;
        margin-bottom: 15px;
        border: 1px solid ${props => props.theme};
        border-radius: 10px;
        outline: none;

        &:focus {
            border: 2px solid ${props => props.theme};
        }
    }

    @media (max-width: 740px) {
        p {
            font-size: 16px;
        }

        input,
        select {
            height: 30px;
            font-size: 13.5px;
            padding-left: 6px;
        }
    }

    @media (max-width: 375px) {
        p {
            font-size: 13px;
        }

        input,
        select {
            height: 25px;
            font-size: 10px;
            padding-left: 4px;
        }
    }
`

export const AddName = styled.div`
    width: 50vw;

    input {
        width: 100%;
    }

    @media (max-width: 740px) {
        width: 80vw;
    }

    @media (max-width: 375px) {
        width: 85vw;
    }
`

export const AddCategory_Price = styled.div`
    display: flex;
    justify-content: space-between;

    select {
        text-align: center;
        width: 200px;
    }

    input {
        text-align: center;
        width: 120px;
    }

    @media (max-width: 740px) {
        select {
            width: 150px;
        }

        input {
            width: 95px;
        }
    }

    @media (max-width: 375px) {
        select {
            width: 120px;
        }

        input {
            width: 78px;
        }
    }
`

export const AddValidity_Quantity = styled(AddCategory_Price)`
    :first-child input {
        text-align: center;
        width: 200px;
    }

    @media (max-width: 740px) {
        :first-child input {
            width: 150px;
        }
    }

    @media (max-width: 375px) {
        :first-child input {
            width: 120px;
        }
    }
`

export const AddButton = styled.button`
    width: 150px;
    font-size: 20px;
    border-radius: 20px;
    border: 2px solid;
    padding: 15px;
    color: aliceblue;
    background-color: ${props => props.theme};

    &:hover {
        color: ${props => props.theme};
        background-color: aliceblue;
        border: 2px solid ${props => props.theme};
        cursor: pointer;
    }

    @media (max-width: 500px) {
        width: 100px;
        font-size: 14px;
        border-radius: 15px;
    }
`