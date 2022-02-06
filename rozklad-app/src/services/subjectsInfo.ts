export enum LessonType {
    Lecture,
    Practical,
    All,
    Lab
}

export interface ISubject 
{
    name: string;
    lecturer: string;
    type: LessonType;
    links?: { name: string; link: string; }[]
}

const subjectInfos = [
    {
        name: "IC11mn",
        list: [
            {
                name: "IVP2-IC",
                type: LessonType.Lecture,
                lecturer: "Ромашко Алла Сазонівна",
                links: [
                    { name: 'Classroom', link: 'https://classroom.google.com/u/1/c/NDQ5MTY0NDM1NDcw' },
                    { name: 'Google', link: 'http://meet.google.com/szf-dfno-ajt' }
                ],
            },
            {
                name: "IVP2-IC",
                type: LessonType.Practical,
                lecturer: "Гаврушкевич Наталія Валеріївна",
                links: [
                    { name: 'Telegram', link: 'https://t.me/+i0J6URn4Tuw2NWQy' },
                ],
            },
            {
                name: "IVP1-IC",
                type: LessonType.All,
                lecturer: "Гордієнко Сергій Георгійович",
                links: [
                ],
            },
            {
                name: "SIR-IC",
                type: LessonType.All,
                lecturer: "Джигирей Ірина Миколаївна",
                links: [
                ],
            },
            {
                name: "ENG-IC",
                type: LessonType.All,
                lecturer: "Шевченко Ольга Миколаївна",
                links: [
                ],
            },
            {
                name: "NRMD-IC",
                type: LessonType.Practical,
                lecturer: "Коган Алла Вікторівна",
                links: [
                ],
            },
            {
                name: "SMOS",
                type: LessonType.All,
                lecturer: "Корнієнко Б. Я.",
                links: [
                    { name: 'Telegram', link: 'https://t.me/+RNTV09xpZXFlmL-L' },
                    { name: 'Zoom', link: 'https://us02web.zoom.us/j/2539419529?pwd=cUxoSkhNdEpYbzhzRkRjZWs4MU1nZz09' }
                ],
            },
            {
                name: "NRDB",
                type: LessonType.All,
                lecturer: "Ульяницька Ксенія Олександрівна",
                links: [
                    { name: 'Telegram', link: 'https://t.me/+WQe3dYsx6LQziDN2' },
                    { name: 'Disk', link: 'https://drive.google.com/drive/folders/1evphvZeEoNp7zH7OInY4CMf3Gci41liVfkSjvtmcPNo9aoLAhvtWc5SkV0tWQK3FGji8pvdG' },
                    { name: 'Classroom', link: 'https://classroom.google.com/c/NDIxMjM0OTc5ODY4?cjc=pymdonb' }
                ],
            },
            {
                name: "HSA",
                type: LessonType.Lecture,
                lecturer: "",
                links: [
                    { name: 'Telegram', link: 'https://t.me/+pS0JOhWcWFtlMzY6' },
                    { name: 'e-mail', link: 'education@gen.tech' }
                ],
            },
            {
                name: "HSA",
                type: LessonType.Lab,
                lecturer: "",
                links: [
                    { name: 'Telegram', link: 'https://t.me/+pS0JOhWcWFtlMzY6' },
                    { name: 'e-mail', link: 'education@gen.tech' }
                ],
            },
            {
                name: "UBP",
                type: LessonType.All,
                lecturer: "Савенко Володимир Миколайович",
                links: [
                    { name: 'Google Meet', link: 'https://meet.google.com/gwr-xvyw-anf?hs=224' }
                ],
            },
            {
                name: "PVS",
                type: LessonType.All,
                lecturer: "Катін Павло Юрійович",
                links: [
                ],
            }
        ]
    },
    {
        name: "IA11mn",
        list: [
            {
                name: "IVP2-IA",
                type: LessonType.Lecture,
                lecturer: "Ромашко Алла Сазонівна",
                links: [
                    { name: 'Classroom', link: 'https://classroom.google.com/u/1/c/NDQ5MTY0NDM1NDcw' },
                    { name: 'Google', link: 'http://meet.google.com/szf-dfno-ajt' }
                ],
            },
            {
                name: "IVP2-IA",
                viewName: "Інтелектуальна власність та патентознавство-2. Патентознавство та набуття прав",
                type: LessonType.Practical,
                lecturer: "Гаврушкевич Наталія Валеріївна",
                links: [
                    { name: 'Classroom', link: 'https://classroom.google.com/u/1/c/NDQ5MTY0NDM1NDcw' },
                    { name: 'Telegram', link: 'https://t.me/+i0J6URn4Tuw2NWQy' }
                ],
            },
            {
                name: "SIR-IA",
                viewName: "Сталий іноваційний розвиток",
                type: LessonType.All,
                lecturer: "Бендюг Владислав Іванович",
                links: [
                    { name: 'Telegram', link: 'https://t.me/+CN9T7bUdUAxkMjEy' },
                    { name: 'Site', link: 'https://www.xn--90aecd4bzg.xn--j1amh/sd/innosd' }
                ],
            },
            {
                name: "ENG-IA",
                type: LessonType.Practical,
                lecturer: "Колісник Марина Павлівна",
                links: [
                    { name: 'Zoom', link: 'https://us04web.zoom.us/j/8894287667?pwd=L211bFZ1YWVqUlJvdTR5d2o1YkFqdz09' },
                    { name: 'Telegram', link: 'https://web.telegram.org/z/#-1549971772' },
                    { name: 'Classroom', link: 'https://classroom.google.com/u/1/c/Mzg3MDQ4NTgzMjAw' }
                ],
            },
            {
                name: "NRMD-IA",
                type: LessonType.Practical,
                lecturer: "Дорошенко Анатолій Юхимович",
                links: [
                ],
            },
            {
                name: "SMOS",
                type: LessonType.Lecture,
                lecturer: "Корнієнко Б. Я.",
                links: [
                    { name: 'Telegram', link: 'https://t.me/+RNTV09xpZXFlmL-L' },
                    { name: 'Zoom', link: 'https://us02web.zoom.us/j/2539419529?pwd=cUxoSkhNdEpYbzhzRkRjZWs4MU1nZz09' }
                ],
            },
            {
                name: "NRDB",
                type: LessonType.Lecture,
                lecturer: "Ульяницька Ксенія Олександрівна",
                links: [
                    { name: 'Telegram', link: 'https://t.me/+WQe3dYsx6LQziDN2' },
                    { name: 'Disk', link: 'https://drive.google.com/drive/folders/1evphvZeEoNp7zH7OInY4CMf3Gci41liVfkSjvtmcPNo9aoLAhvtWc5SkV0tWQK3FGji8pvdG' },
                    { name: 'Classroom', link: 'https://classroom.google.com/c/NDIxMjM0OTc5ODY4?cjc=pymdonb' }
                ],
            },
            {
                name: "HSA",
                type: LessonType.Lecture,
                lecturer: "",
                links: [
                    { name: 'Telegram', link: 'https://t.me/+pS0JOhWcWFtlMzY6' },
                    { name: 'e-mail', link: 'education@gen.tech' }
                ],
            },
            {
                name: "HSA",
                type: LessonType.Lab,
                lecturer: "",
                links: [
                    { name: 'Telegram', link: 'https://t.me/+pS0JOhWcWFtlMzY6' },
                    { name: 'e-mail', link: 'education@gen.tech' }
                ],
            },
            {
                name: "UBP",
                type: LessonType.All,
                lecturer: "Савенко Володимир Миколайович",
                links: [
                    { name: 'Google Meet', link: 'https://meet.google.com/gwr-xvyw-anf?hs=224' }
                ],
            },
            {
                name: "PVS",
                type: LessonType.All,
                lecturer: "Катін Павло Юрійович",
                links: [
                ],
            }
        ]
    }
]

export default subjectInfos;
