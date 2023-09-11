import { css, styled } from "styled-components";

const Row = styled.div`
    display: flex;
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
            height: 100%;
        `}
`;

Row.defaultProps = {
    type: "horizontal",
};

export default Row;
