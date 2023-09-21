export function getNameOfProjectStatus(status) {
    switch (true) {
        case status === "completed":
            return "کامل";
        case status === "waiting":
            return "منتظر نمره";
        case status === "incomplete":
            return "منتظر پروژه";
        case status === "ended":
            return "اتمام";
    }
}

export function getNameOfProjectDeadline(deadline) {
    switch (true) {
        case deadline !== 0:
            return `${deadline} روز`;
        case deadline === 0:
            return "تمام شده";
    }
}

export function getNameOfProjectGrade(grade) {
    switch (true) {
        case grade === "unknown":
            return "نا مشخص";
        case grade !== "unknown":
            return grade;
    }
}
