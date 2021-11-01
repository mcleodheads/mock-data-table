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
            keyName: 'zxc',
            displayName: 'zxc',
        },
        {
            keyName: 'unused col',
            displayName: 'unused col',
        },
    ],
    tableData: [
        {
            id: `${uuid()}`,
            name: 'Ivan',
            date: `${new Date()}`,
            surname: 'Ivanov',
            patronymic: 'Ivanovich',
        },
        {
            id: `${uuid()}`,
            name: 'Petr',
            date: `Mon Oct 22 2021 01:56:27 GMT+0300 (Москва, стандартное время)`,
            surname: 'Petrov',
            patronymic: 'Petrovich',
            qwe: 'qweqwe',
            asd: 'tgb',
            zxc: 'zxc',
        },
        {
            id: `${uuid()}`,
            name: 'Sidor',
            date: `Tue Oct 26 2021 11:56:27 GMT+0300 (Москва, стандартное время)`,
            surname: 'Sidorov',
            patronymic: 'Sidorovich',
            qwe: 'qweqwe',
            qwe1: 'qweqwe',
            qwe2: 'qweqwe',
            qwe3: 'qweqwe',

        },
    ]
}