import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { breakPoint8 } from "../../constants/breakpoints";

const Container = styled.div`
    grid-template-columns: 1fr 1fr;
    display: grid;

    @media screen and (${breakPoint8}) {
        grid-template-columns: 1fr;
        justify-items: center;
    }
`;

function Auth() {
    return (
        <div>
            <WaveTop />
            <Container>
                <Outlet />
            </Container>
            <WaveBottom />
        </div>
    );
}

const TopSvg = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    @media screen and (${breakPoint8}) {
        display: none;
    }
`;

function WaveTop() {
    return (
        <TopSvg viewBox="0 0 1280 115">
            <path
                d="M0 49.7562L53 44.1316C107 38.9396 213 27.6904 320 44.1316C427 61.0054 533 105.137 640 113.358C747 122.011 853 94.3204 960 80.4752C1067 66.63 1173 66.63 1227 66.63H1280V0H1227C1173 0 1067 0 960 0C853 0 747 0 640 0C533 0 427 0 320 0C213 0 107 0 53 0H0V49.7562Z"
                fill="var(--color-purple-100)"
            />
        </TopSvg>
    );
}

const BottomSvg = styled.svg`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;

    @media screen and (${breakPoint8}) {
        display: none;
    }
`;

function WaveBottom() {
    return (
        <BottomSvg viewBox="0 0 1280 180">
            <path
                d="M0 77.2198L71 90.2049C142 103.19 284 128.161 427 109.183C569 90.2049 711 26.2782 853 7.29993C996 -12.6772 1138 13.2931 1209 26.2782L1280 39.2633V269H1209C1138 269 996 269 853 269C711 269 569 269 427 269C284 269 142 269 71 269H0V77.2198Z"
                fill="var(--color-purple-100)"
            />
        </BottomSvg>
    );
}

export default Auth;
