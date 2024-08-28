import styled from "styled-components";
import { AddPrice_Quantity } from "../styles/componentStyles";

export const AddKitFields = styled.div`
    width: 54vw;

    p {
        font-weight: 700;
        font-size: 18px;
    }

    @media (max-width: 740px) {
        width: 85vw; 

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
export const AddPrice_Quantity1 = styled(AddPrice_Quantity)`
    margin-bottom: 20px;

    @media (max-width: 375px) {
        input {
            width: 78px;
        }
    }
`