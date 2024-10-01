import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        background-color: rgb(228, 0, 75, .3);
        font-family: "Nunito", sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`