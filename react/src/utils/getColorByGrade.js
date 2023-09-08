export function getColorByGrade(grade) {
    switch (true) {
        case grade < 10:
            return "red";
        case grade >= 10 && grade < 15:
            return "orange";
        case grade >= 15 && grade !== 20:
            return "green";
        case grade == 20:
            return "purple";
    }
}
