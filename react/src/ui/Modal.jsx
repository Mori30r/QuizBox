import { styled } from "styled-components";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { HiXMark } from "react-icons/hi2";

import Button from "./Button";

import { toggleModal } from "./uiSlice";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(5px);
    z-index: 5;
    transition: all 0.5s;
`;

const StyledModal = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    background-color: var(--color-purple-0);
    border: 2px solid var(--color-purple-100);
    display: grid;
    padding: 2rem;
    grid-template-rows: 1fr 1fr 1fr;
`;

const TopModal = styled.div``;

const TextModal = styled.p`
    font-size: 1.8rem;
    font-weight: 800;
    margin: 0 0 2rem 0;
    padding: 0 2rem;
    color: var(--color-purple-500);
`;
const BottomModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Icon = styled(HiXMark)`
    cursor: pointer;

    &:hover {
        border: 1px solid var(--color-purple-300);
    }
`;

function Modal({ isModalOpen, message, submitText, cancelText, onSubmit }) {
    const dispatch = useDispatch();

    function closeModal() {
        dispatch(toggleModal());
    }

    return createPortal(
        isModalOpen && (
            <Overlay>
                <StyledModal>
                    <TopModal>
                        <Icon
                            onClick={closeModal}
                            size={25}
                            color="var(--color-purple-300)"
                        />
                    </TopModal>
                    <TextModal>{message}</TextModal>
                    <BottomModal>
                        <Button onClick={onSubmit} type="primary">
                            {submitText}
                        </Button>
                        <Button onClick={closeModal} type="big">
                            {cancelText}
                        </Button>
                    </BottomModal>
                </StyledModal>
            </Overlay>
        ),
        document.body
    );
}

export default Modal;
