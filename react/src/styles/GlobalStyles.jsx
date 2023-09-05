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

        --color-purple-0: #E5DBFF;
        --color-purple-100: #B197FC
        --color-purple-200: #845EF7
        --color-purple-300: #7048E8
        --color-purple-400: #5F3DC4
        --color-purple-500: #1B1138

        --color-green-0: #C3FAE8;
        --color-green-200: #20C997;
        --color-green-400: #087F5B;
        
        --color-red-0: #FFE3E3;
        --color-red-200: #FF7D7D;
        --color-red-400: #FA5252;
        
        --color-orange-0: #FFE8CC;
        --color-orange-200: #FFA94D;
        --color-orange-400: #E67700;

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
