import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
    :root {
        --color-grey-0: #f8f9fa;
        --color-grey-100: #e9ecef;
        --color-grey-200: #ced4da;
        --color-grey-300: #868e96;
        --color-grey-400: #4f626b;
        --color-grey-500: #3c4a52;
        --color-grey-600: #2a3439;
        --color-grey-700: #171c1f;
        --color-grey-800: #040505;
        --color-grey-800: #040505;

        --color-purple-0: #e5dbff;
        --color-purple-100: #b197fc;
        --color-purple-200: #845ef7;
        --color-purple-300: #7048e8;
        --color-purple-400: #5f3dc4;
        --color-purple-500: #1b1138;

        --color-green-0: #c3fae8;
        --color-green-200: #20c997;
        --color-green-400: #087f5b;

        --color-red-0: #ffe3e3;
        --color-red-200: #ff7d7d;
        --color-red-400: #fa5252;

        --color-orange-0: #ffe8cc;
        --color-orange-200: #ffa94d;
        --color-orange-400: #e67700;

        --border-radius-tiny: 3px;
        --border-radius-sm: 5px;
        --border-radius-md: 7px;
        --border-radius-lg: 9px;

        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
        --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
        --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
    }

    html {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        font-family: Vazirmatn;
        font-feature-settings: "ss01";
        line-height: 1.6;
        text-align: right;
        overflow: hidden;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    *:disabled {
        cursor: not-allowed;
    }
`;

export default GlobalStyles;
