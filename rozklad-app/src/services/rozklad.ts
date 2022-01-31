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
                name: "PAT-L",
                week: Weeks.Both,
                day: Days.Monday,
                pair: 3
            },
            {
                name: "SIR-L",
                week: Weeks.First,
                day: Days.Monday,
                pair: 4
            },
            {
                name: "ENG",
                week: Weeks.Both,
                day: Days.Thursday,
                pair: 6
            },
            {
                name: "SMW",
                week: Weeks.First,
                day: Days.Friday,
                pair: 2
            },
            {
                name: "PAT-P",
                week: Weeks.First,
                day: Days.Friday,
                pair: 1
            },
            {
                name: "SIR-P",
                week: Weeks.Second,
                day: Days.Monday,
                pair: 5
            },
            {
                name: "MMOS-L",
                week: Weeks.Both,
                day: Days.Friday,
                pair: 5
            },
            {
                name: "DB-L",
                week: Weeks.Both,
                day: Days.Tuesday,
                pair: 1
            },
            {
                name: "DB-P",
                week: Weeks.Second,
                day: Days.Thursday,
                pair: 1
            },
            {
                name: "HSA-L",
                week: Weeks.Both,
                day: Days.Thursday,
                pair: 3
            },
            {
                name: "DB-P",
                week: Weeks.First,
                day: Days.Thursday,
                pair: 5
            },
            {
                name: "BPM-L",
                week: Weeks.Both,
                day: Days.Friday,
                pair: 4
            },
            {
                name: "BPM-P",
                week: Weeks.Second,
                day: Days.Tuesday,
                pair: 6
            },
            {
                name: "KATIN-L",
                week: Weeks.Both,
                day: Days.Thursday,
                pair: 2
            },
            {
                name: "KATIN-P",
                week: Weeks.First,
                day: Days.Thursday,
                pair: 4
            }
        ]
    },
    {
        groupName: "IA11mn",
        pairs: [
            {
                name: "PAT-L",
                week: Weeks.Both,
                day: Days.Monday,
                pair: 3
            },
            {
                name: "SIR-L",
                week: Weeks.First,
                day: Days.Monday,
                pair: 4
            },
            {
                name: "ENG",
                week: Weeks.Both,
                day: Days.Monday,
                pair: 5
            },
            {
                name: "SMW",
                week: Weeks.First,
                day: Days.Friday,
                pair: 1
            },
            {
                name: "PAT-P",
                week: Weeks.Second,
                day: Days.Friday,
                pair: 1
            },
            {
                name: "SIR-P",
                week: Weeks.Second,
                day: Days.Friday,
                pair: 2
            },
            {
                name: "MMOS-L",
                week: Weeks.Both,
                day: Days.Friday,
                pair: 5
            },
            {
                name: "DB-L",
                week: Weeks.Both,
                day: Days.Tuesday,
                pair: 1
            },
            {
                name: "DB-P",
                week: Weeks.Second,
                day: Days.Thursday,
                pair: 1
            },
            {
                name: "HSA-L",
                week: Weeks.Both,
                day: Days.Thursday,
                pair: 3
            },
            {
                name: "DB-P",
                week: Weeks.First,
                day: Days.Thursday,
                pair: 5
            },
            {
                name: "BPM-L",
                week: Weeks.Both,
                day: Days.Friday,
                pair: 4
            },
            {
                name: "BPM-P",
                week: Weeks.Second,
                day: Days.Tuesday,
                pair: 6
            },
            {
                name: "KATIN-L",
                week: Weeks.Both,
                day: Days.Thursday,
                pair: 2
            },
            {
                name: "KATIN-P",
                week: Weeks.First,
                day: Days.Thursday,
                pair: 4
            }
        ]
    }
]

export default subjectSchedule;