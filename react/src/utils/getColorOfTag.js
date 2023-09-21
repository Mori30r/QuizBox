export function getColorOfProjectStatus(status) {
    switch (true) {
        case status === "completed":
            return "green";
        case status === "waiting" || status === "incomplete":
            return "orange";
        case status === "ended":
            return "red";
    }
}

export function getColorOfProjectDeadline(deadline) {
    switch (true) {
        case deadline >= 5:
            return "green";
        case deadline < 5 && deadline > 0:
            return "orange";
        case deadline === 0:
            return "red";
    }
}

export function getColorOfProjectGrade(grade) {
    switch (true) {
        case grade >= 70:
            return "green";
        case grade < 70 && grade >= 50:
            return "orange";
        case grade < 50:
            return "red";
        case grade === "unknown":
            return "grey";
    }
}
