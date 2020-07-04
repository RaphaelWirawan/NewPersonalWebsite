import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
    }
    body {
        background: linear-gradient(130deg, #0f0f0f 50%, #1f1f1f 50%);
        font-family: 'hk grotesk';
        font-size: 30px;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default GlobalStyle;