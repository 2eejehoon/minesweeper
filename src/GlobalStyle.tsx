import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        min-width: 100vw;
        min-height: 100vh;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`;

export default GlobalStyle;
