import { HiBell } from "react-icons/hi2";
import { styled } from "styled-components";

const IconContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex: 1;
    position: relative;
`;

const NotificationIndicator = styled.div`
    width: 1.7rem;
    height: 1.7rem;
    background-color: var(--color-red-400);
    color: var(--color-red-0);
    font-size: 1.3rem;
    font-weight: 1000;
    border-radius: 100%;
    position: absolute;
    text-align: center;
`;

function NotificationIcon() {
    return (
        <IconContainer>
            <NotificationIndicator>4</NotificationIndicator>
            <HiBell size="3.5rem" color="var(--color-orange-200)" />
        </IconContainer>
    );
}

export default NotificationIcon;
