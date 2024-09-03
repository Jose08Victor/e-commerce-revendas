import styled from "styled-components";
import { EditTitle, NameList } from "../styles/componentStyles";

export const EditKitTitle = styled( EditTitle )`
    margin-bottom: 10px;
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
