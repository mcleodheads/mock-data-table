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
                config.tableData.map(items => {
                    const newItems = _.omit(items, 'id') // lodash used
                    return (
                        <tr
                            className={st.bodyRow}
                            key={items.id}>
                            {
                                Object.values(newItems).map(data => {
                                    return (
                                        <td className={st.bodyItem}
                                            key={data}>{data}</td>
                                    )
                                })
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