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
    ],
    tableData: [
        {
            id: `${uuid()}`,
            name: 'Ivan',
            date: `${new Date()}`,
            surname: 'Ivanov',
            patronymic: 'Ivanovich',
            unusedData1: 'unusedData1',
            unusedData2: 'unusedData2',
            unusedData3: 'unusedData3',
        },
        {
            id: `${uuid()}`,
            name: 'Petr',
            date: `Mon Oct 22 2021 01:56:27 GMT+0300 (Москва, стандартное время)`,
            surname: 'Petrov',
            patronymic: 'Petrovich',
            unusedData1: 'unusedData1',
            unusedData2: 'unusedData2',
            unusedData3: 'unusedData3',
        },
        {
            id: `${uuid()}`,
            name: 'Sidor',
            date: `Tue Oct 26 2021 11:56:27 GMT+0300 (Москва, стандартное время)`,
            surname: 'Sidorov',
            patronymic: 'Sidorovich',
            unusedData1: 'unusedData1',
            unusedData2: 'unusedData2',
            unusedData3: 'unusedData3',
        },
    ]
}