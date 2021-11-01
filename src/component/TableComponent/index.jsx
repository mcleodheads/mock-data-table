import React from 'react';
import * as _ from 'lodash'

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
                config.tableData.map(data => {
                    const keysIntersection = _.intersection(Object.keys(data), config.tableHeaders.map(item => item.keyName))
                    console.log(keysIntersection)
                    return (
                        <tr key={data.id}>
                            {
                                keysIntersection.map(item => (
                                    <td key={item}>{data[item]}</td>
                                ))
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
};

export default TableComponent;