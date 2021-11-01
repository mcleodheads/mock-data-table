import uuid from 'react-uuid'

export const config = {
    tableHeaders: [
        {
            keyName: 'name',
            displayName: 'Имя',
        },
        {
            keyName: 'date',
            displayName: 'Дата',
        },
        {
            keyName: 'surname',
            displayName: 'Фамилия',
        },
        {
            keyName: 'patronymic',
            displayName: 'Отчество',
        },
        {
            keyName: 'education',
            displayName: 'Образование',
        },
    ],
    tableData: [
        {
            id: `${uuid()}`,
            name: 'Ivan',
            date: `${new Date()}`,
            surname: 'Ivanov',
            patronymic: 'Ivanovich',
            education: 'qwerty',
        },
        {
            id: `${uuid()}`,
            name: 'Petr',
            date: `Mon Oct 22 2021 01:56:27 GMT+0300 (Москва, стандартное время)`,
            surname: 'Petrov',
            patronymic: 'Petrovich',
            education: 'qwerty',
        },
        {
            id: `${uuid()}`,
            name: 'Sidor',
            date: `Tue Oct 26 2021 11:56:27 GMT+0300 (Москва, стандартное время)`,
            surname: 'Sidorov',
            patronymic: 'Sidorovich',
            education: 'qwerty',
        },
    ]
}