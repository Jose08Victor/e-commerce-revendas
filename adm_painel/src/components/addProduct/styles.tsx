import styled from "styled-components";
import { Input, Select } from "../styles/componentStyles";

export const AddProductFields = styled.div`
    p {
        font-weight: 700;
        font-size: 18px;
    }

    @media (max-width: 740px) {
        p {
            font-size: 16px;
        }
    }

    @media (max-width: 375px) {
        p {
            font-size: 13px;
        }
    }
`

export const AddInput = styled(Input)`
    margin-bottom: 15px;
`

export const AddSelect = styled(Select)`
    margin-bottom: 15px;
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
    margin-bottom: 20px;

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
        margin-bottom: 0px;

        :first-child input {
            width: 120px;
        }
    }
`