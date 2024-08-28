import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        background-color: aliceblue;
        font-family: "Nunito", sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    main {
        display: flex;
        height: 91vh;
    }

    @media (max-width: 900px) {
        main {
            flex-direction: column;
        }
    }
`