import styled from "styled-components";

export const RemovalPopUpContainer = styled.div`
    position: absolute;
    width: 200px;
    height: 94px;
    right: -10px;
    bottom: -10px;
    background-color: aliceblue;

    button {
        margin: 6px;
    }

    @media (max-width: 500px) {
        width: 128px;
        height: 64px;
        bottom: -6px;
        right: -6px;

        button {
            margin: 2px;
        }
    }
`