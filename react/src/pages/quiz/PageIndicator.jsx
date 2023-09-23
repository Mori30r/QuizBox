import React from "react";
import { styled } from "styled-components";

const StyledPageIndicator = styled.div`
    display: flex;
    justify-self: center;
    direction: rtl;
`;

const Circle = styled.div`
    background-color: ${(props) =>
        props.$active || props.$wasActive
            ? "var(--color-purple-300)"
            : "var(--color-purple-100)"};
    height: ${(props) => (props.$active ? "1.5rem" : "1rem")};
    width: ${(props) => (props.$active ? "1.5rem" : "1rem")};
    align-self: center;
    border-radius: 100%;
`;

const Dash = styled.div`
    background-color: ${(props) =>
        props.$wasActive
            ? "var(--color-purple-300)"
            : "var(--color-purple-100)"};
    width: 1rem;
    height: 0.2rem;
    align-self: center;
`;

function PageIndicator({ active, count }) {
    return (
        <StyledPageIndicator>
            {Array.from({ length: count }, (_, i) => {
                return (
                    <React.Fragment key={i}>
                        {i !== 0 && <Dash $wasActive={i <= active} />}
                        <Circle
                            $wasActive={i < active}
                            $active={i === active}
                        />
                    </React.Fragment>
                );
            })}
        </StyledPageIndicator>
    );
}

export default PageIndicator;
