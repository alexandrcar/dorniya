const semestersData = [
    {
        id: "sem-1",
        title: "Первый семестр",
        subjects:[
            {
                name: "Алгебра и геометрия",
                attestation: "Зачет",
                professor: ["Никонов Владимир Иванович"],
                description: "Фундаментальный предмет, тратьте много времени дома на разбор пройденных тем. Уверуйте в матрицы.",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: "https://drive.google.com/drive/folders/1fX8aaBEInlh5mUY5rdMe7TYef6eXJ_G9?usp=sharing"
                }
            }, 
            {
                name: "Аналитическая геометрия",
                attestation: "Экзамен",
                professor: ["Сухарев Лев Александрович"],
                description: "Фундаментальный предмет, тратьте много времени дома на разбор пройденных тем. i j k.",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: "https://drive.google.com/drive/folders/1aINgBWqP8hWCCSlSXpa4WwvNsCImjsCq?usp=sharing"
                }
            }, 
            {
                name: "Введение в направление",
                attestation: "Зачет",
                professor: ["Егорова Дарья Константиновна"],
                description: "Описание предмета",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            }, 
            {
                name: "Иностранный язык (Английский)",
                attestation: "Зачет",
                professor: ["Рубцова Ольга Валериевна"],
                description: "По количеству д/з привосходит все остальные предметы вместе взятые, стоит пропустить пару - увязните в долгах.",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            }, 
            {
                name: "История России",
                attestation: "Зачет с оценкой (дифференцированный)",
                professor: ["Святкин Михаил Юрьевич", "Першина Татьяна Анатольевна"],
                description: "Спидран по всей истории России. На зачете спрашивают страшные вещи, все что ниже пятерки - легко получается атвоматом у М.Ю. Святкина.",
                diskLinks: {
                    lectures: "",
                    seminars: "https://drive.google.com/drive/folders/1XuyFND5qx7v7w_wS0R9IaiwYtHDg4XSh?usp=sharing",
                    kr: ""
                }
            }, 
            {
                name: "Математический анализ",
                attestation: "Экзамен",
                professor: ["Костров Олег Геннадьевич", "Чучаев Иван Иванович"],
                description: "Фундаментальный предмет, всё что непонятно - разбирайте сразу. С каждой новой парой матана Вы все дальше от Бога...",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: "https://drive.google.com/drive/folders/1As4Guh6n7lZzBxaMgqN-eYBEHigy3Ir-?usp=sharing"
                }
            }, 
            {
                name: "Основы программирования",
                attestation: "Экзамен",
                professor: ["Каменева Инга Олеговна"],
                description: "C++. Название предмета говорит само за себя.",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            }, 
            {
                name: "Основы Российской государственности",
                attestation: "Зачет",
                professor: ["Скворцова Лариса Геннадьевна"],
                description: "Описание предмета",
                diskLinks: {
                    lectures: "",
                    seminars: "https://drive.google.com/drive/folders/1pxU7IUwstWMK07osUZbYqqOEnMlMl2lx?usp=sharing",
                    kr: ""
                }
            }, 
            {
                name: "Физра в тестах (Физическая культура и спорт)",
                attestation: "Зачет",
                professor: ["Комарова Нина Анатольевна"],
                description: "Просто чтобы было. Делайте тесты в срок.",
                diskLinks: {
                    lectures: "",
                    seminars: "https://drive.google.com/drive/folders/1zqJK6sTLEJqBLaRpC6HDJMxLViVVHhRb?usp=sharing",
                    kr: ""
                }
            }, 
            {
                name: "Физра вживую (Элективные дисциплины и т.д...)",
                attestation: "Зачет",
                professor: ["Комарова Нина Анатольевна"],
                description: "Описание предмета",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            }
            
        ]
    },

    {
        id: "sem-2",
        title: "Второй семестр",
        subjects:[
            {
                name: "Алгебра и геометрия",
                attestation: "Экзамен",
                professor: ["Никонов Владимир Иванович"],
                description: "Фундаментальный предмет, тратьте много времени дома на разбор пройденных тем. Уверуйте в матрицы.",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            }, 
            {
                name: "Алгоритмы и структуры данных",
                attestation: "Экзамен",
                professor: ["Кулягин Андрей Иванович", "Каледин Олег Евгеньевич"],
                description: "Описание предмета",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            }, 
            {
            
                name: "Архитектура компьютеров и операционные системы",
                attestation: "Экзамен",
                professor: ["Десяев Евгений Васильевич"],
                description: "Программирование на пальцах. Чем быстрее сдадите все работы - тем лучше.",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            }, 
            {
                name: "Безопасность жизнедеятельности",
                attestation: "Зачет",
                professor: ["Даськин Иван Николаевич", "Игайкина Ирина Ивановна"],
                description: "Описание предмета",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            }, 
            {
                name: "Иностранный язык (Английский)",
                attestation: "Зачет",
                professor: ["Рубцова Ольга Валериевна"],
                description: "По количеству д/з привосходит все остальные предметы вместе взятые, стоит пропустить пару - увязните в долгах.",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            }, 
            {
                name: "Компьютерная графика",
                attestation: "Зачет",
                professor: ["Дворянинова Наталья Васильевна", "Бадокина Татьяна Евгеньевна"],
                description: "Описание предмета",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            }, 
            {
                name: "Математический анализ",
                attestation: "Экзамен",
                professor: ["Костров Олег Геннадьевич", "Чучаев Иван Иванович"],
                description: "Фундаментальный предмет, всё что непонятно - разбирайте сразу. С каждой новой парой матана Вы все дальше от Бога...",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            }, 
            {
                name: "Практикум на ЭВМ",
                attestation: "Зачет",
                professor: ["Епишкин Илья Андреевич"],
                description: "Описание предмета",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            }, 
            {
                name: "Физра вживую (Элективные дисциплины и т.д...)",
                attestation: "Зачет",
                professor: ["Комарова Нина Анатольевна"],
                description: "Описание предмета",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            }
        ]
    },

    {
        id: "sem-3",
        title: "Третий семестр",
        subjects:[
            {
                name: "Дискретная математика",
                attestation: "Зачет",
                professor: ["Кочугаев Пётр Николаевич"],
                description: "Описание дискретки",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            }, 
            {
                name: "Дифференциальные уравнения",
                attestation: "Зачет",
                professor: ["Зинина Светлана Халиловна"],
                description: "Описание диффуров",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: "https://drive.google.com/drive/u/1/folders/1aI34mgIZehwtAiLx6XQe-9Sx4GAO_YRT"
                }
            },
            {
                name: "Иностранный язык (Английский)",
                attestation: "Экзамен",
                professor: ["Рубцова Ольга Валериевна"],
                description: "По количеству д/з привосходит все остальные предметы вместе взятые, стоит пропустить пару - увязните в долгах.",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: "https://drive.google.com/drive/folders/1dX5rOr9wPH4HsBtdUBIx6Kp2OXHLakmf?usp=sharing"
                }
            },
            {
                name: "Математические основы теории кодирования и защиты информации",
                attestation: "Экзамен",
                professor: ["Сухарев Лев Александрович"],
                description: "Описание предмета",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            },
            {
                name: "Математический анализ",
                attestation: "Экзамен",
                professor: ["Костров Олег Геннадьевич", "Чучаев Иван Иванович"],
                description: "Фундаментальный предмет, всё что непонятно - разбирайте сразу. С каждой новой парой матана Вы все дальше от Бога...",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: "https://drive.google.com/drive/folders/18fcGAQt53Aoa8yVkJFoM8ll8yMCARB5b?usp=sharing"
                }
            },
            {
                name: "Объектно-ориентированное и функциональное программирование",
                attestation: "Экзамен",
                professor: ["Каледин Олег Евгеньевич", "Шибайкин Сергей Дмитриевич"],
                description: "Описание предмета",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            },
            {
                name: "Сетевые и облачные технологии",
                attestation: "Зачет",
                professor: ["Макаров Юрий Алексеевич"],
                description: "Описание предмета",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            },
            {
                name: "Физ-ра (Элективные дисциплины и т.д...)",
                attestation: "Зачет",
                professor: ["Комарова Нина Анатольевна"],
                description: "Описание предмета",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            }
        ]
    }, 

    {
        id: "sem-4",
        title: "Четвёртый семестр",
        subjects:[
            {
                name: "Дискретная математика",
                attestation: "Экзамен",
                professor: ["Кочугаев Пётр Николаевич"],
                description: "Описание дискретки",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            }, 
            {
                name: "Дифференциальные уравнения",
                attestation: "Экзамен",
                professor: ["Зинина Светлана Халиловна"],
                description: "Описание диффуров",
                diskLinks: {
                    lectures: "",
                    seminars: "",
                    kr: ""
                }
            }
        ]
    }
]

