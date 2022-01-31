export enum LessonType {
    Lecture,
    Practical,
    Lab
}

export interface ISubject 
{
    name: string;
    viewName: string;
    lecturer: string;
    isSelectable: boolean;
    type: LessonType;
    links?: { name: string; link: string; }[]
}

const subjects = [
    {
        name: "IC11mn",
        list: [
            {
                name: "PAT-L",
                viewName: "Інтелектуальна власність та патентознавство-2. Патентознавство та набуття прав",
                type: LessonType.Lecture,
                lecturer: "Ромашко Алла Сазонівна",
                links: [
                    { name: 'Classroom', link: 'https://classroom.google.com/u/1/c/NDQ5MTY0NDM1NDcw' },
                    { name: 'Google', link: 'http://meet.google.com/szf-dfno-ajt' }
                ],
                isSelectable: false
            },
            {
                name: "SIR-L",
                viewName: "Сталий іноваційний розвиток",
                type: LessonType.Lecture,
                lecturer: "Джигирей Ірина Миколаївна",
                links: [
                ],
                isSelectable: false
            },
            {
                name: "ENG",
                viewName: "Практичний курс іншомовного наукового спілкування-1. Практичний курс іноземної мови для наукового спілкування І",
                type: LessonType.Practical,
                lecturer: "Шевченко Ольга Миколаївна",
                links: [
                ],
                isSelectable: false
            },
            {
                name: "SMW",
                viewName: "Наукова робота за темою магістерської дисертації-2. Науково-дослідна робота за темою магістерської дисертації",
                type: LessonType.Practical,
                lecturer: "Коган Алла Вікторівна",
                links: [
                ],
                isSelectable: false
            },
            {
                name: "PAT-P",
                viewName: "Інтелектуальна власність та патентознавство-2. Патентознавство та набуття прав",
                type: LessonType.Practical,
                lecturer: "Гаврушкевич Наталія Валеріївна",
                links: [
                    { name: 'Telegram', link: 'https://t.me/+i0J6URn4Tuw2NWQy' },
                ],
                isSelectable: false
            },
            {
                name: "SIR-P-IS",
                viewName: "Сталий іноваційний розвиток",
                type: LessonType.Practical,
                lecturer: "Джигирей Ірина Миколаївна",
                links: [
                ],
                isSelectable: false
            },
            {
                name: "MMOS-L",
                viewName: "Сучасні мобільні операційні системи",
                type: LessonType.Lecture,
                lecturer: "Корнієнко Б. Я.",
                links: [
                ],
                isSelectable: true
            },
            {
                name: "MMOS-P",
                viewName: "Сучасні мобільні операційні системи",
                type: LessonType.Lab,
                lecturer: "Корнієнко Б. Я.",
                links: [
                ],
                isSelectable: true
            },
            {
                name: "DB-L",
                viewName: "Проектування інформаційно-комунікаційних систем з розподіленими та нереляційними базами даних",
                type: LessonType.Lecture,
                lecturer: "Ульяницька Ксенія Олександрівна",
                links: [
                    { name: 'Telegram', link: 'https://t.me/+WQe3dYsx6LQziDN2' },
                    { name: 'Disk', link: 'https://drive.google.com/drive/folders/1evphvZeEoNp7zH7OInY4CMf3Gci41liVfkSjvtmcPNo9aoLAhvtWc5SkV0tWQK3FGji8pvdG' },
                    { name: 'Classroom', link: 'https://classroom.google.com/c/NDIxMjM0OTc5ODY4?cjc=pymdonb' }
                ],
                isSelectable: true
            },
            {
                name: "DB-P",
                viewName: "Проектування інформаційно-комунікаційних систем з розподіленими та нереляційними базами даних",
                type: LessonType.Lab,
                lecturer: "Ульяницька Ксенія Олександрівна",
                links: [
                    { name: 'Telegram', link: 'https://t.me/+WQe3dYsx6LQziDN2' },
                    { name: 'Disk', link: 'https://drive.google.com/drive/folders/1evphvZeEoNp7zH7OInY4CMf3Gci41liVfkSjvtmcPNo9aoLAhvtWc5SkV0tWQK3FGji8pvdG' },
                    { name: 'Classroom', link: 'https://classroom.google.com/c/NDIxMjM0OTc5ODY4?cjc=pymdonb' }
                ],
                isSelectable: true
            },
            {
                name: "HSA-L",
                viewName: "Developing a highload software architecture (авторський курс від компанії Genesis)",
                type: LessonType.Lecture,
                lecturer: "",
                links: [
                ],
                isSelectable: true
            },
            {
                name: "HSA-P",
                viewName: "Developing a highload software architecture (авторський курс від компанії Genesis)",
                type: LessonType.Lab,
                lecturer: "",
                links: [
                ],
                isSelectable: true
            },
            {
                name: "BPM-L",
                viewName: "Управління бізнес процесами",
                type: LessonType.Lecture,
                lecturer: "Савенко Володимир Миколайович",
                links: [
                ],
                isSelectable: true
            },
            {
                name: "BPM-P",
                viewName: "Управління бізнес процесами",
                type: LessonType.Lab,
                lecturer: "Савенко Володимир Миколайович",
                links: [
                ],
                isSelectable: true
            },
            {
                name: "KATIN-L",
                viewName: "Технології та методика програмування вбудованих систем",
                type: LessonType.Lecture,
                lecturer: "Катін Павло Юрійович",
                links: [
                ],
                isSelectable: true
            },
            {
                name: "KATIN-P",
                viewName: "Технології та методика програмування вбудованих систем",
                type: LessonType.Lab,
                lecturer: "Катін Павло Юрійович",
                links: [
                ],
                isSelectable: true
            }
        ]
    },
    {
        name: "IA11mn",
        list: [
            {
                name: "PAT-L",
                viewName: "Інтелектуальна власність та патентознавство-2. Патентознавство та набуття прав",
                type: LessonType.Lecture,
                lecturer: "Ромашко Алла Сазонівна",
                links: [
                    { name: 'Classroom', link: 'https://classroom.google.com/u/1/c/NDQ5MTY0NDM1NDcw' },
                    { name: 'Google', link: 'http://meet.google.com/szf-dfno-ajt' }
                ],
                isSelectable: false
            },
            {
                name: "SIR-L",
                viewName: "Сталий іноваційний розвиток",
                type: LessonType.Lecture,
                lecturer: "Бендюг Владислав Іванович",
                links: [
                ],
                isSelectable: false
            },
            {
                name: "ENG",
                viewName: "Практичний курс іншомовного наукового спілкування-1. Практиктичний курс іноземної мови для наукового спілкування І",
                type: LessonType.Practical,
                lecturer: "Колісник Марина Павлівна",
                links: [
                    { name: 'Zoom', link: 'https://us04web.zoom.us/j/8894287667?pwd=L211bFZ1YWVqUlJvdTR5d2o1YkFqdz09' },
                    { name: 'Telegram', link: 'https://web.telegram.org/z/#-1549971772' },
                    { name: 'Disk', link: 'https://classroom.google.com/u/1/c/Mzg3MDQ4NTgzMjAw' }
                ],
                isSelectable: false
            },
            {
                name: "SMW",
                viewName: "Наукова робота за темою магістерської дисертації-2. Науково-дослідна робота за темою магістерської дисертації",
                type: LessonType.Practical,
                lecturer: "Дорошенко Анатолій Юхимович",
                links: [
                ],
                isSelectable: false
            },
            {
                name: "PAT-P",
                viewName: "Інтелектуальна власність та патентознавство-2. Патентознавство та набуття прав",
                type: LessonType.Practical,
                lecturer: "Гаврушкевич Наталія Валеріївна",
                links: [
                    { name: 'Telegram', link: 'https://t.me/+i0J6URn4Tuw2NWQy' },
                ],
                isSelectable: false
            },
            {
                name: "SIR-P",
                viewName: "Сталий іноваційний розвиток",
                type: LessonType.Practical,
                lecturer: "Бендюг Владислав Іванович",
                links: [
                ],
                isSelectable: false
            },
            {
                name: "MMOS-L",
                viewName: "Сучасні мобільні операційні системи",
                type: LessonType.Lecture,
                lecturer: "Корнієнко Б. Я.",
                links: [
                ],
                isSelectable: true
            },
            {
                name: "MMOS-P",
                viewName: "Сучасні мобільні операційні системи",
                type: LessonType.Lab,
                lecturer: "Корнієнко Б. Я.",
                links: [
                ],
                isSelectable: true
            },
            {
                name: "DB-L",
                viewName: "Проектування інформаційно-комунікаційних систем з розподіленими та нереляційними базами даних",
                type: LessonType.Lecture,
                lecturer: "Ульяницька Ксенія Олександрівна",
                links: [
                    { name: 'Telegram', link: 'https://t.me/+WQe3dYsx6LQziDN2' },
                    { name: 'Disk', link: 'https://drive.google.com/drive/folders/1evphvZeEoNp7zH7OInY4CMf3Gci41liVfkSjvtmcPNo9aoLAhvtWc5SkV0tWQK3FGji8pvdG' },
                    { name: 'Classroom', link: 'https://classroom.google.com/c/NDIxMjM0OTc5ODY4?cjc=pymdonb' }
                ],
                isSelectable: true
            },
            {
                name: "DB-P",
                viewName: "Проектування інформаційно-комунікаційних систем з розподіленими та нереляційними базами даних",
                type: LessonType.Lab,
                lecturer: "Ульяницька Ксенія Олександрівна",
                links: [
                    { name: 'Telegram', link: 'https://t.me/+WQe3dYsx6LQziDN2' },
                    { name: 'Disk', link: 'https://drive.google.com/drive/folders/1evphvZeEoNp7zH7OInY4CMf3Gci41liVfkSjvtmcPNo9aoLAhvtWc5SkV0tWQK3FGji8pvdG' },
                    { name: 'Classroom', link: 'https://classroom.google.com/c/NDIxMjM0OTc5ODY4?cjc=pymdonb' }
                ],
                isSelectable: true
            },
            {
                name: "HSA-L",
                viewName: "Developing a highload software architecture (авторський курс від компанії Genesis)",
                type: LessonType.Lecture,
                lecturer: "",
                links: [
                ],
                isSelectable: true
            },
            {
                name: "HSA-P",
                viewName: "Developing a highload software architecture (авторський курс від компанії Genesis)",
                type: LessonType.Lab,
                lecturer: "",
                links: [
                ],
                isSelectable: true
            },
            {
                name: "BPM-L",
                viewName: "Управління бізнес процесами",
                type: LessonType.Lecture,
                lecturer: "Савенко Володимир Миколайович",
                links: [
                ],
                isSelectable: true
            },
            {
                name: "BPM-P",
                viewName: "Управління бізнес процесами",
                type: LessonType.Lab,
                lecturer: "Савенко Володимир Миколайович",
                links: [
                ],
                isSelectable: true
            },
            {
                name: "KATIN-L",
                viewName: "Технології та методика програмування вбудованих систем",
                type: LessonType.Lecture,
                lecturer: "Катін Павло Юрійович",
                links: [
                ],
                isSelectable: true
            },
            {
                name: "KATIN-P",
                viewName: "Технології та методика програмування вбудованих систем",
                type: LessonType.Lab,
                lecturer: "Катін Павло Юрійович",
                links: [
                ],
                isSelectable: true
            }
        ]
    }
]

export default subjects;