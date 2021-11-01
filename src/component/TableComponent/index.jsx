import React, {useState} from 'react';

import {config} from "../../data/dataIndex";

import st from './TableComponent.module.css'

const TableComponent = () => {
    return (
        <table className={st.wrapper}>
            <thead className={st.tableHeader}>
                <tr className={st.headerRow}>
                    {
                        config.tableHeaders.map(header => (
                            <th className={st.header}
                                key={header.keyName}>
                                {header.displayName}
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody className={st.tableBody}>
            {
                config.tableData.map(item => (
                    <tr
                        className={st.bodyRow}
                        key={item.id}>
                        <td className={st.bodyName}>
                            {item.name}
                        </td>
                        <td className={st.bodyDate}>
                            {item.date}
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};

export default TableComponent;