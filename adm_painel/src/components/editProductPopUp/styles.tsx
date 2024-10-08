import styled from "styled-components";
import { AddImgUpload, Input, Select } from "../styles/componentStyles";

export const EditImgUpload = styled(AddImgUpload)`
    gap: 20px;
    margin-bottom: 0;

    h2 {
        font-size: 13px;
        margin-bottom: 0;
        font-weight: 700;
    }

    label {
        font-size: 13px;
        padding: 10px 65px;
    }

    div {
        font-size: 13px;
        max-width: 240px;
    }

    img {
        margin-top: 20px;
    }

    p {
         right: -10px;
         top: 0px;
    }

    @media (max-width: 740px) {
        gap: 10px;

        label {
            padding: 8px 55px;
            font-size: 12px;
        }

        div {
            max-width: 210px;
            font-size: 12px;
            padding: 15px;
        }     
    }

    @media (max-width: 375px) {
         h2 {
             font-size: 11px;
         }

         label {
             padding: 5px 32px;
             font-size: 9px;
         }

         div {
             max-width: 140px;
             font-size: 9px;
             padding: 5px;
         }
     }
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

export const EditCategoryAndPrice = styled( EditName )`
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

    @media (max-width: 500px) {
        select {
            width: 140px;
        }

        input {
            width: 100px;
        }
    }
`

export const EditValidityAndQuantity = styled( EditCategoryAndPrice )`
    :first-child input {
        width: 200px;
    }

    @media (max-width: 500px) {
        :first-child input {
            width: 140px;
        }
    }
`

export const EditInput = styled( Input )`
    height: 30px;
    margin-bottom: 25px;
    
    @media (max-width: 740px) {
        height: 26px;
        font-size: 13px;
    }

    @media (max-width: 375px) {
        height: 22px;
        font-size: 10px;
    }
`

export const EditSelect = styled( Select )`
    height: 30px;
    margin-bottom: 25px;
    
    @media (max-width: 740px) {
        height: 26px;
        font-size: 13px;
    }

    @media (max-width: 375px) {
        height: 22px;
        font-size: 10px;
    }
`