import { createGlobalStyle } from "styled-components";
import {
    breakPoint1,
    breakPoint3,
    breakPoint4,
    breakPoint5,
} from "./../constants/breakpoints";

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

        @media screen and (${breakPoint1}) {
            font-size: 60%;
        }

        @media screen and (${breakPoint3}) {
            font-size: 59%;
        }

        @media screen and (${breakPoint4}) {
            font-size: 58%;
        }

        @media screen and (${breakPoint5}) {
            font-size: 55%;
        }
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

    ::-webkit-scrollbar {
        width: 1rem;
        border-radius: 25px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--color-purple-0);
        border-radius: 25px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--color-purple-200);
        border-radius: 25px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
        border-radius: 25px;
    }
`;

export default GlobalStyles;
