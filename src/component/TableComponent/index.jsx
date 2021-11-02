import React from 'react';

import {config} from "../../data/dataIndex";

import st from './TableComponent.module.css'

const TableComponent = () => {
    return (
        <table className={st.wrapper}>
            <thead className={st.tableHeader}>
            <tr className={st.headerRow}>
                {
                    config.tableHeaders.map(header => (
                        <th key={header.keyName}>
                            {header.displayName}
                        </th>
                    ))
                }
            </tr>
            </thead>
            <tbody className={st.tableBody}>
            {
                config.tableData.map(data => (
                    <tr key={data.id}>
                        {
                            config.tableHeaders.map(key => (
                                <td className={st.bodyItem} key={key.keyName}>
                                    {data[key.keyName]}
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};

export default TableComponent;