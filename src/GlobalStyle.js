import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0px;
    padding: 0px;
}
body {
    background-color: #1f1f1f;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    /*width: 100vw;*/
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /*overflow-x: hidden;*/
}
`;

export default GlobalStyle;