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
                    { name: 'Meet', link: 'http://meet.google.com/szf-dfno-ajt' },
                    { name: 'Google', link: 'http://meet.google.com/szf-dfno-ajt' },
                    { name: 'Classroom', link: 'https://classroom.google.com/u/1/c/NDQ5MTY0NDM1NDcw' }

                ],
            },
            {
                name: "IVP2-IC",
                type: LessonType.Practical,
                lecturer: "Гаврушкевич Наталія Валеріївна",
                links: [
                    { name: 'Meet', link: 'https://meet.google.com/oid-etcz-mik' },
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
                    { name: 'Meet', link: 'https://meet.google.com/urh-pirs-das' },
                    { name: 'email', link: 'ostl@ukr.net' }
                ],
            },
            {
                name: "NRMD-IC",
                type: LessonType.Practical,
                lecturer: "Коган Алла Вікторівна",
                links: [
                    { name: 'Zoom', link: 'https://us04web.zoom.us/j/7292429058?pwd=cDVQYlVvbW1EQUN1L28wNGp6eEhmQT09' }
                ],
            },
            {
                name: "SMOS",
                type: LessonType.All,
                lecturer: "Корнієнко Б. Я.",
                links: [
                    { name: 'Zoom', link: 'https://us02web.zoom.us/j/2539419529?pwd=cUxoSkhNdEpYbzhzRkRjZWs4MU1nZz09' },
                    { name: 'Telegram', link: 'https://t.me/+RNTV09xpZXFlmL-L' }
                ],
            },
            {
                name: "NRDB",
                type: LessonType.All,
                lecturer: "Ульяницька Ксенія Олександрівна",
                links: [
                    { name: 'Classroom', link: 'https://classroom.google.com/c/NDIxMjM0OTc5ODY4?cjc=pymdonb' },
                    { name: 'Telegram', link: 'https://t.me/+WQe3dYsx6LQziDN2' },
                    { name: 'Disk', link: 'https://drive.google.com/drive/folders/1evphvZeEoNp7zH7OInY4CMf3Gci41liVfkSjvtmcPNo9aoLAhvtWc5SkV0tWQK3FGji8pvdG' }
                ],
            },
            {
                name: "HSA",
                type: LessonType.Lecture,
                lecturer: "Жаріков Едуард В'ячеславович",
                links: [
                    { name: 'Zoom', link: 'https://zoom.us/j/91224659580?pwd=OUV5TXpYZkViU1dxMCt2TkllczhMQT09' },
                    { name: 'Youtube', link: 'https://youtube.com/playlist?list=PLF9HFWsOwLhFc71gfxEvJNvEW4dbsWHno' },
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
                    { name: 'Meet', link: 'https://meet.google.com/gwr-xvyw-anf' },
                    { name: 'Drive', link: 'https://drive.google.com/drive/folders/1zOMbOazxT5W0CZirSjglFy0V76AWAb9Q' }
                ],
            },
            // Not mine
            {
                name: "KIST",
                type: LessonType.All,
                lecturer: "Тимошин Юрій Афанасійович",
                links: [
                    { name: 'Zoom', link: 'https://us04web.zoom.us/j/9937940977?pwd=Y1praFZJdkhXQTliemFBZkZVZmxUUT09' }
                ],
            },
            {
                name: "TMN",
                type: LessonType.All,
                lecturer: "Сарнацький Владислав Віталійович",
                links: [
                    { name: "Telegram", link: "https://t.me/+gi5FAcFNYskwNTRi" },
                    { name: "Meet", link: "http://meet.google.com/hvq-wuvy-nez" },
                    { name: "Disk", link: "https://drive.google.com/drive/folders/1l6Yt4IyVtRDRhBixeLI1L5eteq_nAx6Q" }
                ],
            },
            {
                name: "MDL",
                type: LessonType.Lecture,
                lecturer: "Гордієнко Юрій Григорович",
                links: [
                    { name: "Telegram", link: "https://t.me/+WllVd8TWc_liMWMy" },
                    { name: "BBB", link: "https://bbb.comsys.kpi.ua/b/yur-uui-ujj-0s0" }
                ],
            },
            {
                name: "MDL",
                type: LessonType.Practical,
                lecturer: "Кочура Юрій Петрович",
                links: [
                    { name: "Telegram", link: "https://t.me/+WllVd8TWc_liMWMy" },
                    { name: "BBB", link: "https://bbb.comsys.kpi.ua/b/yur-gnj-w3v-daq" }
                ],
            },
            {
                name: "PCS",
                type: LessonType.Practical,
                lecturer: "Гордієнко Юрій Григорович",
                links: [
                    { name: "Telegram", link: "https://t.me/+nan_8H4to_UxYTFi" },
                    { name: "BBB", link: "https://bbb.comsys.kpi.ua/b/yur-fo1-svx-zsm" }
                ],
            },
            {
                name: "PCS",
                type: LessonType.Practical,
                lecturer: "Таран Владислав Ігорович",
                links: [
                    { name: "Telegram", link: "https://t.me/+nan_8H4to_UxYTFi" },
                    { name: "BBB", link: "https://bbb.comsys.kpi.ua/b/ewx-27d-6xu" },
                    { name: "Materials", link: "https://cloud.comsys.kpi.ua/s/iwJWdanx5B87L5z" },
                    { name: "Submission", link: "https://cloud.comsys.kpi.ua/s/AQGyrTbbSxtG864" }
                ],
            }
        ]
    },
    {
        name: "IA11mn",
        list: [
            {
                name: "IVP1-IA",
                type: LessonType.All,
                lecturer: "Гордієнко Сергій Георгійович",
                links: [
                ],
            },
            {
                name: "IVP2-IA",
                type: LessonType.Lecture,
                lecturer: "Ромашко Алла Сазонівна",
                links: [
                    { name: 'Google', link: 'http://meet.google.com/szf-dfno-ajt' },
                    { name: 'Classroom', link: 'https://classroom.google.com/u/1/c/NDQ5MTY0NDM1NDcw' },
                    { name: 'Telegram', link: 'https://t.me/+i0J6URn4Tuw2NWQy' }
                ],
            },
            {
                name: "IVP2-IA",
                type: LessonType.Practical,
                lecturer: "Гаврушкевич Наталія Валеріївна",
                links: [
                    { name: 'Classroom', link: 'https://classroom.google.com/u/1/c/NDQ5MTY0NDM1NDcw' },
                    { name: 'Telegram', link: 'https://t.me/+i0J6URn4Tuw2NWQy' }
                ],
            },
            {
                name: "SIR-IA",
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
                    { name: 'Zoom', link: 'https://us02web.zoom.us/j/87189890809?pwd=ZGxuZEY2S2YyV2FzNlAxTW84TkVPdz09' }
                ],
            },
            {
                name: "SMOS",
                type: LessonType.All,
                lecturer: "Корнієнко Б. Я.",
                links: [
                    { name: 'Zoom', link: 'https://us02web.zoom.us/j/2539419529?pwd=cUxoSkhNdEpYbzhzRkRjZWs4MU1nZz09' },
                    { name: 'Telegram', link: 'https://t.me/+RNTV09xpZXFlmL-L' }
                ],
            },
            {
                name: "NRDB",
                type: LessonType.All,
                lecturer: "Ульяницька Ксенія Олександрівна",
                links: [
                    { name: 'Classroom', link: 'https://classroom.google.com/c/NDIxMjM0OTc5ODY4?cjc=pymdonb' },
                    { name: 'Telegram', link: 'https://t.me/+WQe3dYsx6LQziDN2' },
                    { name: 'Disk', link: 'https://drive.google.com/drive/folders/1evphvZeEoNp7zH7OInY4CMf3Gci41liVfkSjvtmcPNo9aoLAhvtWc5SkV0tWQK3FGji8pvdG' }
                ],
            },
            {
                name: "HSA",
                type: LessonType.Lecture,
                lecturer: "Жаріков Едуард В'ячеславович",
                links: [
                    { name: 'Zoom', link: 'https://zoom.us/j/91224659580?pwd=OUV5TXpYZkViU1dxMCt2TkllczhMQT09' },
                    { name: 'Youtube', link: 'https://youtube.com/playlist?list=PLF9HFWsOwLhFc71gfxEvJNvEW4dbsWHno' },
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
                    { name: 'Meet', link: 'https://meet.google.com/gwr-xvyw-anf?hs=224' },
                    { name: 'Drive', link: 'https://drive.google.com/drive/folders/1zOMbOazxT5W0CZirSjglFy0V76AWAb9Q' }
                ],
            },
            {
                name: "PVS",
                type: LessonType.All,
                lecturer: "Катін Павло Юрійович",
                links: [
                    { name: 'Zoom', link: 'https://us04web.zoom.us/j/7477652542?pwd=RTloNGpTbEg2eFVpbVo4Z2Yxd2x5Zz09' },
                    { name: 'Telegram', link: 'https://t.me/+LOqk3_KQV51jNTI6' }
                ],
            }
        ]
    }
]

export default subjectInfos;
