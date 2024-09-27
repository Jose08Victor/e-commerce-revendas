import styled from "styled-components";
import { EditTitle, NameList, AddImgUpload } from "../styles/componentStyles";

export const EditKitTitle = styled( EditTitle )`
    margin-bottom: 10px;
`

export const EditKitImgUpload = styled(AddImgUpload)`
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

export const KitNameList = styled( NameList )`
    max-height: 118px;
    margin: 8px 0;

    li{ 
        padding: 2px;
    }

    @media(max-width: 500px) {
        max-height: 128px;
    }
`
