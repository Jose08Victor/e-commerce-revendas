import styled from "styled-components";

export const EditBackground = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`

export const EditContainer = styled.form`
    width: 60%;
    background-color: aliceblue;
    border-radius: 20px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
        font-weight: 700;
        font-size: 13.2px;
        text-align: left;
        margin-bottom: 3px;
    }
    
    input,
    select {
        height: 30px;
        font-size: 15px;
        font-family: "Nunito", sans-serif;
        padding-left: 8px;
        margin-bottom: 25px;
    }
    
    @media (max-width: 900px) {
        width: 80%;
    }

    @media (max-width: 700px) {
        width: 90%;
        padding: 20px;
    }

    @media (max-width: 500px) {
        p {
            font-size: 11px;
            margin-bottom: 2px;
        }
        
        input,
        select {
            height: 25px;
            font-size: 11px;
            padding-left: 6px;
        }
    }
`
export const Edit = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    h1 {
        font-size: 30px;
    }

    img {
        width: 28px;
        height: 28px;
        cursor: pointer;
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 25px;
        }

        img {
            width: 23px;
            height: 23px;
        }
    }
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 8%;
    align-items: center;
    margin-bottom: 20px;

    p {
        padding-bottom: 10px;
        text-align: center;
    }

    @media (max-width: 500px) {
        gap: 5%;
        margin-bottom: 15px;

     p {
        padding-bottom: 6px;
    }
`

export const CurrentImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 20px;

    @media (max-width: 500px) {
        width: 100px;
        height: 100px;
    }
`

export const ArrowIcon = styled.img`
    width: 34px;
    height: 34px;

    @media (max-width: 500px) {
        width: 23px;
        height: 24px;
    }
`

export const ImgUpload = styled( CurrentImg )`
    cursor: pointer;
`

export const EditName = styled.div`
    width: 80%;
    margin: 0 auto;

    input {
        width: 100%;
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`

export const EditCategory_Price = styled(EditName)`
    display: flex;
    justify-content: space-between;

    select {
        text-align: center;
        width: 200px;
    }

    input {
        width: 120px;
        text-align: center;
    }

    @media (max-width: 500px) {
        select {
            width: 140px;
        }

        input {
            width: 100px;
        }
    }
`

export const EditValidity_Quantity = styled(EditCategory_Price)`
    :first-child input {
        text-align: center;
        width: 200px;
    }

    @media (max-width: 500px) {
        :first-child input {
            width: 140px;
        }
    }
`

export const EditButton = styled.button`
    width: 150px;
    font-size: 20px;
    border-radius: 20px;
    border: 2px solid;
    padding: 15px;
    color: aliceblue;
    background-color: ${props => props.theme};
    align-self: center;

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