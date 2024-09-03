import styled from "styled-components";
import { Input, Select } from "../styles/componentStyles";

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