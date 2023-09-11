import { HiMagnifyingGlass } from "react-icons/hi2";
import { styled } from "styled-components";

const StyledSearchBar = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 2;
    height: 5rem;
    background-color: var(--color-purple-200);
    gap: 1rem;
    padding-right: 2rem;
    border-radius: 25px;
`;

const Input = styled.input`
    border-radius: 25px;
    border: none;
    flex: 1;
    height: 100%;
    background-color: inherit;
    padding: 2rem;
    font-size: 1.5rem;
    text-align: start;
    direction: rtl;
    color: var(--color-purple-0);
    transition: all 0.5s;

    &::placeholder {
        color: var(--color-purple-100);
    }

    &:focus {
        box-shadow: 0 0 0.5rem var(--color-purple-400);
        scale: 1.01;
        border: none;
        outline: none;
    }
`;

function SearchBar() {
    return (
        <StyledSearchBar>
            <Input placeholder="نام درس یا استاد..." />
            <HiMagnifyingGlass
                strokeWidth={1}
                size={25}
                color="var(--color-purple-100)"
            />
        </StyledSearchBar>
    );
}

export default SearchBar;
