import styled from "styled-components";

export const FormContainer = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
`

export const AddImgUpload = styled.div`
    width: 180px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;

    img {
        max-width: 180px;
        max-height: 180px;
        cursor: pointer;
        border-radius: 10px;
    }

    p {
        font-weight: 500;
        font-size: 17px;
        margin-bottom: 5px;
        cursor: default;
    }

    @media (max-width: 740px) {
        margin-bottom: 0px;

        img {
            max-width: 140px;
            max-height: 140px;
        }

        p {
            font-size: 14px;
        }
    }

    @media (max-width: 375px) {
        width: 120px;
        height: 120px;

        img {
            max-width: 120px;
            max-height: 120px;
        }

        p {
            font-size: 12px;
        }
    }
`

export const InputFields = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1100px) {
        flex-direction: column;
    }

    @media (max-width: 740px) {
        height: 45vh;
        justify-content: space-around;
    }

    @media (max-width: 375px) {
        justify-content: space-evenly;
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    
    @media (max-width: 740px) {
        gap: 10px;
    }

    @media (max-width: 375px) {
        gap: 7px;
    }
`

export const AddButton = styled.button`
    font-size: 22px;
    border-radius: 20px;
    border: 2px solid;
    padding: 14px 45px;
    color: aliceblue;
    background-color: ${ props => props.theme };

    &:hover {
        color: ${ props => props.theme };
        background-color: aliceblue;
        border: 2px solid ${ props => props.theme };
        cursor: pointer;
    }

    @media (max-width: 500px) {
        font-size: 15px;
        padding: 12px 40px;
        border-radius: 14px;
    }

    @media (max-width: 375px) {
        font-size: 13px;
        padding: 10px 32px;
        border-radius: 14px;
    }
`

export const ChangeButton = styled.a`
    font-size: 12px;
    border-radius: 10px;
    padding: 7px 8px;
    border: 2px solid;
    color: aliceblue;
    background-color: ${ props => props.theme };
    text-align: center;
    margin-bottom: 30px;

    &:hover {
        color: ${ props => props.theme };
        background-color: aliceblue;
        border: 2px solid ${ props => props.theme };
        cursor: pointer;
    }

    @media (max-width: 500px) {
        font-size: 10px;
        padding: 7px;
    }

    @media (max-width: 375px) {
        font-size: 8px;
        padding: 5px;
    }
`

export const Input = styled.input`
    height: 36px;
    font-size: 15px;
    font-family: "Nunito", sans-serif;
    padding-left: 8px;
    border: 1px solid ${ props => props.theme };
    border-radius: 10px;
    outline: none;

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

export const Select = styled.select`
    height: 36px;
    font-size: 15px;
    font-family: "Nunito", sans-serif;
    padding-left: 8px;
    border: 1px solid ${ props => props.theme };
    border-radius: 10px;
    outline: none;

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

export const InputName = styled( Input )`
    width: 82.5%;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
`

export const CurrentImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 20px;

    @media (max-width: 500px) {
        width: 90px;
        height: 90px;
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
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
        font-weight: 700;
        font-size: 13.2px;
        text-align: left;
        margin-bottom: 3px;
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
    }
`

export const EditTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    h1 {
        font-size: 30px;
        padding-top: 5px;
    }

    p {
        font-size: 45px;
        font-weight: 600;
        margin-bottom: 0px;
        cursor: pointer;
        transition: ease-in-out .3s;

        &:hover {
            transform: scale(1.2);
            color: ${props => props.theme};
        }
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 25px;
            padding-top: 2px;
        }

        p {
            font-size: 34px;
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

    @media (max-width: 740px) {
        width: 120px;
        font-size: 15px;
        padding: 10px;
        border-radius: 15px;
    }

    @media (max-width: 500px) {
        width: 100px;
        font-size: 13px;
        padding: 8px;
        border-radius: 10px;
    }
`

export const Label = styled.label`
    width: 17.5%;
    font-size: 15px;
    display: inline-block;
    background-color: ${props => props.theme};
    color: aliceblue;
    padding: 6px 5px;
    border: 2px solid ${props => props.theme};
    border-left: none;
    border-radius: 10px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    text-align: center;

    &:hover {
        color: ${props => props.theme};
        background-color: aliceblue;
        border: 2px solid ${props => props.theme};
        border-left: none;
        cursor: pointer;
    }

    @media (max-width: 740px) {
        padding: 5.3px 5px;
        font-size: 11.5px;
    }

    @media (max-width: 375px) {
        padding: 3.3px 5px;
        font-size: 9.5px;
    }
`

export const NameList = styled.ul`
    margin: 10px 0;
    max-height: 160px;
    overflow-y: scroll;
    padding: 0 5px;

    &::-webkit-scrollbar {
        width: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme};
        border-radius: 25px;
    }
    
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        
        h4 {
            border-bottom: 1px solid ${props => props.theme};
            max-width: 95%;
            font-weight: 600;
        }

        p {
            border: 1px solid transparent;
            cursor: pointer;
            font-size: 22px;
            transition: ease-in-out .3s;

            &:hover {
                color: ${props => props.theme};
                transform: scale(1.4);
            }
        }
    }

    @media (max-width: 500px) {
        max-height: 150px;

        li {
            h4 {
                font-size: 11px;
            }

            p {
                font-size: 18px;
            }
        }
    }
`

export const AddPrice_Quantity = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 15px;

    input {
        text-align: center;
        width: 120px;
    }

    @media (max-width: 500px) {
        input {
            width: 100px;
        }
    }
`