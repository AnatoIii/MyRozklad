import { LessonType } from "./subjectsInfo";

export enum Weeks {
    Both,
    First,
    Second
}

export enum Days {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday"
}

const subjectSchedule = [
    {
        groupName: "IC11mn",
        pairs: [
            {
                name: "IVP2-IC",
                type: LessonType.Lecture,
                week: Weeks.Both,
                day: Days.Monday,
                pair: 3
            },
            {
                name: "IVP1-IC",
                type: LessonType.Lecture,
                week: Weeks.Second,
                day: Days.Monday,
                pair: 4
            },
            {
                name: "IVP1-IC",
                type: LessonType.Practical,
                week: Weeks.Second,
                day: Days.Friday,
                pair: 1
            },
            {
                name: "SIR-IC",
                type: LessonType.Lecture,
                week: Weeks.First,
                day: Days.Monday,
                pair: 4
            },
            {
                name: "ENG-IC",
                type: LessonType.Practical,
                week: Weeks.Both,
                day: Days.Thursday,
                pair: 6
            },
            {
                name: "NRMD-IC",
                type: LessonType.Practical,
                week: Weeks.First,
                day: Days.Friday,
                pair: 2
            },
            {
                name: "IVP2-IC",
                type: LessonType.Practical,
                week: Weeks.First,
                day: Days.Friday,
                pair: 1
            },
            {
                name: "SIR-IC",
                type: LessonType.Practical,
                week: Weeks.Second,
                day: Days.Monday,
                pair: 5
            },
            {
                name: "SMOS",
                type: LessonType.Lecture,
                week: Weeks.Both,
                day: Days.Friday,
                pair: 5
            },
            {
                name: "SMOS",
                type: LessonType.Lab,
                week: Weeks.First,
                day: Days.Friday,
                pair: 6
            },
            {
                name: "NRDB",
                type: LessonType.Lecture,
                week: Weeks.Both,
                day: Days.Tuesday,
                pair: 1
            },
            {
                name: "NRDB",
                type: LessonType.Lab,
                week: Weeks.Second,
                day: Days.Thursday,
                pair: 1
            },
            {
                name: "HSA",
                type: LessonType.Lecture,
                week: Weeks.Both,
                day: Days.Thursday,
                pair: 3
            },
            {
                name: "HSA",
                type: LessonType.Lab,
                week: Weeks.First,
                day: Days.Thursday,
                pair: 5
            },
            {
                name: "UBP",
                type: LessonType.Lecture,
                week: Weeks.Both,
                day: Days.Friday,
                pair: 4
            },
            {
                name: "UBP",
                type: LessonType.Practical,
                week: Weeks.First,
                day: Days.Monday,
                pair: 2
            },
            {
                name: "PVS",
                type: LessonType.Lecture,
                week: Weeks.Both,
                day: Days.Thursday,
                pair: 2
            },
            {
                name: "PVS",
                type: LessonType.Practical,
                week: Weeks.First,
                day: Days.Thursday,
                pair: 4
            },
            // Other
            {
                name: "KIST",
                type: LessonType.Lecture,
                week: Weeks.Both,
                day: Days.Tuesday,
                pair: 1
            },
            {
                name: "KIST",
                type: LessonType.Practical,
                week: Weeks.Second,
                day: Days.Monday,
                pair: 2
            },
            {
                name: "TMN",
                type: LessonType.Lecture,
                week: Weeks.Both,
                day: Days.Tuesday,
                pair: 1
            },
            {
                name: "TMN",
                type: LessonType.Practical,
                week: Weeks.Second,
                day: Days.Thursday,
                pair: 1
            },
            {
                name: "MDL",
                type: LessonType.Lecture,
                week: Weeks.Both,
                day: Days.Thursday,
                pair: 2
            },
            {
                name: "MDL",
                type: LessonType.Practical,
                week: Weeks.Second,
                day: Days.Wednesday,
                pair: 4
            },
            {
                name: "PCS",
                type: LessonType.Lecture,
                week: Weeks.Both,
                day: Days.Tuesday,
                pair: 5
            },
            {
                name: "PCS",
                type: LessonType.Practical,
                week: Weeks.First,
                day: Days.Tuesday,
                pair: 6
            }
        ]
    },
    {
        groupName: "IA11mn",
        pairs: [
            {
                name: "IVP1-IA",
                type: LessonType.Lecture,
                week: Weeks.Second,
                day: Days.Monday,
                pair: 4
            },
            {
                name: "IVP1-IA",
                type: LessonType.Practical,
                week: Weeks.First,
                day: Days.Friday,
                pair: 2
            },
            {
                name: "IVP2-IA",
                type: LessonType.Lecture,
                week: Weeks.Both,
                day: Days.Monday,
                pair: 3
            },
            {
                name: "IVP2-IA",
                type: LessonType.Practical,
                week: Weeks.Second,
                day: Days.Friday,
                pair: 1
            },
            {
                name: "SIR-IA",
                type: LessonType.Lecture,
                week: Weeks.First,
                day: Days.Monday,
                pair: 4
            },
            {
                name: "SIR-IA",
                type: LessonType.Practical,
                week: Weeks.Second,
                day: Days.Friday,
                pair: 2
            },
            {
                name: "ENG-IA",
                type: LessonType.Practical,
                week: Weeks.Both,
                day: Days.Friday,
                pair: 3
            },
            {
                name: "NRMD-IA",
                type: LessonType.Practical,
                week: Weeks.First,
                day: Days.Friday,
                pair: 1
            },
            // Selectable
            {
                name: "SMOS",
                type: LessonType.Lecture,
                week: Weeks.Both,
                day: Days.Friday,
                pair: 5
            },
            {
                name: "SMOS",
                type: LessonType.Lab,
                week: Weeks.First,
                day: Days.Friday,
                pair: 6
            },
            {
                name: "NRDB",
                type: LessonType.Lecture,
                week: Weeks.Both,
                day: Days.Tuesday,
                pair: 1
            },
            {
                name: "NRDB",
                type: LessonType.Lab,
                week: Weeks.Second,
                day: Days.Thursday,
                pair: 1
            },
            {
                name: "HSA",
                type: LessonType.Lecture,
                week: Weeks.Both,
                day: Days.Thursday,
                pair: 3
            },
            {
                name: "HSA",
                type: LessonType.Lab,
                week: Weeks.First,
                day: Days.Thursday,
                pair: 5
            },
            {
                name: "UBP",
                type: LessonType.Lecture,
                week: Weeks.Both,
                day: Days.Friday,
                pair: 4
            },
            {
                name: "UBP",
                type: LessonType.Practical,
                week: Weeks.First,
                day: Days.Monday,
                pair: 2
            },
            {
                name: "PVS",
                type: LessonType.Lecture,
                week: Weeks.Both,
                day: Days.Thursday,
                pair: 2
            },
            {
                name: "PVS",
                type: LessonType.Practical,
                week: Weeks.First,
                day: Days.Thursday,
                pair: 4
            }
        ]
    }
]

export default subjectSchedule;
