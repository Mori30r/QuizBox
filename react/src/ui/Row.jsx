import { css, styled } from "styled-components";

const Row = styled.div`
    display: flex;
    width: 100%;
    ${(props) =>
        props.type === "horizontal" &&
        css`
            align-items: center;
            justify-content: space-between;
        `}

    ${(props) =>
        props.type === "vertical" &&
        css`
            flex-direction: column;
            justify-content: space-between;
            height: 100dvh;
        `}
`;

Row.defaultProps = {
    type: "horizontal",
};

export default Row;
