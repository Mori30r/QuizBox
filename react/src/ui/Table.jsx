import Tag from "./Tag";
import { styled } from "styled-components";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import {
    getNameOfProjectGrade,
    getNameOfProjectDeadline,
    getNameOfProjectStatus,
} from "./../utils/getNameOfTag";
import {
    getColorOfProjectDeadline,
    getColorOfProjectGrade,
    getColorOfProjectStatus,
} from "./../utils/getColorOfTag";

const StyledTable = styled.div`
    margin-bottom: 3rem;
    background-color: color-mix(
        in srgb,
        var(--color-purple-0),
        transparent 50%
    );
`;

const TableRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 3fr 3fr 5fr;
    justify-items: self-end;

    & p:last-child {
        padding-right: 2rem;
    }
`;

const TableHeader = styled(TableRow)`
    background-color: var(--color-purple-0);

    & p {
        font-size: 1.5rem;
        font-weight: 600;
        padding: 2rem 0.5rem;
        color: var(--color-grey-500);
    }
`;

const MenuIcon = styled(HiEllipsisHorizontal)`
    justify-self: center;
    align-self: center;
`;

function Table({ headerList, data }) {
    return (
        <StyledTable>
            <TableHeader>
                {headerList.map((header, id) => (
                    <p key={id}>{header}</p>
                ))}
            </TableHeader>
            {data.map((project, id) => (
                <TableBody {...project} key={id} />
            ))}
        </StyledTable>
    );
}

const StyledTableBody = styled(TableRow)`
    & p:nth-child(5) {
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--color-grey-400);
    }

    & p {
        padding: 2rem 0;
    }
`;

function TableBody({ name, status, deadline, grade }) {
    const gradeType = getColorOfProjectGrade(grade);
    const deadlineType = getColorOfProjectDeadline(deadline);
    const statusType = getColorOfProjectStatus(status);
    return (
        <StyledTableBody>
            <MenuIcon size={20} />
            <Tag type={gradeType}>{getNameOfProjectGrade(grade)}</Tag>
            <Tag type={deadlineType}>{getNameOfProjectDeadline(deadline)}</Tag>
            <Tag type={statusType}>{getNameOfProjectStatus(status)}</Tag>
            <p>{name}</p>
        </StyledTableBody>
    );
}

export default Table;
