import { createGlobalStyle } from "styled-components";

import VazirThin from "../assets/fonts/vazirmatn/webfonts/Vazirmatn-Thin.woff2";
import VazirExtraLight from "../assets/fonts/vazirmatn/webfonts/Vazirmatn-ExtraLight.woff2";
import VazirLight from "../assets/fonts/vazirmatn/webfonts/Vazirmatn-Light.woff2";
import VazirRegular from "../assets/fonts/vazirmatn/webfonts/Vazirmatn-Regular.woff2";
import VazirMedium from "../assets/fonts/vazirmatn/webfonts/Vazirmatn-Medium.woff2";
import VazirSemiBold from "../assets/fonts/vazirmatn/webfonts/Vazirmatn-SemiBold.woff2";
import VazirBold from "../assets/fonts/vazirmatn/webfonts/Vazirmatn-Bold.woff2";
import VazirExtraBold from "../assets/fonts/vazirmatn/webfonts/Vazirmatn-ExtraBold.woff2";
import VazirBlack from "../assets/fonts/vazirmatn/webfonts/Vazirmatn-Black.woff2";

const styled = { createGlobalStyle };

const FontStyles = styled.createGlobalStyle`
    @font-face {
        font-family: Vazirmatn;
        src: url(${VazirThin}) format("woff2");
        font-weight: 100;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Vazirmatn;
        src: url(${VazirExtraLight}) format("woff2");
        font-weight: 200;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Vazirmatn;
        src: url(${VazirLight}) format("woff2");
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Vazirmatn;
        src: url(${VazirRegular}) format("woff2");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Vazirmatn;
        src: url(${VazirMedium}) format("woff2");
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Vazirmatn;
        src: url(${VazirSemiBold}) format("woff2");
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Vazirmatn;
        src: url(${VazirBold}) format("woff2");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Vazirmatn;
        src: url(${VazirExtraBold}) format("woff2");
        font-weight: 800;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Vazirmatn;
        src: url(${VazirBlack}) format("woff2");
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }
`;

export default FontStyles;
