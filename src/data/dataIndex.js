import uuid from 'react-uuid'

export const tableHeaders = [
    {
        keyName: 'name',
        displayName: 'Имя',
    },
    {
        keyName: 'date',
        displayName: 'Дата',
    },
]

export const tableData = [
    {
        id: `${uuid()}`,
        name: 'Иванов',
        date: `${new Date()}`,
    },
    {
        id: `${uuid()}`,
        name: 'Петров',
        date: `Mon Oct 22 2021 01:56:27 GMT+0300 (Москва, стандартное время)`,
    },
    {
        id: `${uuid()}`,
        name: 'Сидоров',
        date: `Tue Oct 26 2021 11:56:27 GMT+0300 (Москва, стандартное время)`,
    },
]