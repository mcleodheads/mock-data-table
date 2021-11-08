import React, {useState} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

import {config} from "../data/dataIndex";

import {Dimmer, Dropdown, Loader, Placeholder, Ref, Segment, Table, TableCell} from "semantic-ui-react";

const TableComponent = () => {
    const [headers, setHeaders] = useState([])
    const [isBlur, setBlur] = useState(false)

    const handleGetCol = (e, data) => {
        const {value} = data
        setHeaders(value)
    }

    const onDragEnd = (result) => {
        const {destination, source, draggableId} = result
        if (!destination) {
            setBlur(false)
            return
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            setBlur(false)
            return;
        }
        const colHeader = headers[source.index]
        setHeaders(prev => {
            prev.splice(source.index, 1)
            prev.splice(destination.index, 0, colHeader)
            return prev
        })
        setBlur(false)
    }
    console.log(headers)
    return (
        <Segment>
            <Dropdown
                placeholder='Columns'
                fluid
                multiple
                selection
                options={config.tableHeaders}
                onChange={(e, data) => handleGetCol(e, data)}
            />
            <DragDropContext onDragStart={() => setBlur(true)} onDragEnd={result => onDragEnd(result)}>
                <Table compact singleLine>
                    <Table.Header>
                        <Droppable droppableId={'droppable'} direction={'horizontal'}>
                            {
                                provided => (
                                    <Ref innerRef={provided.innerRef}>
                                        <Table.Row>
                                            {
                                                headers.map((header, index) => {
                                                    return config.tableHeaders
                                                        .filter(headerValue => headerValue.value === header)
                                                        .map((item) => (
                                                            <Draggable
                                                                index={index}
                                                                draggableId={item.key}
                                                                key={item.key}>
                                                                {
                                                                    provided => (
                                                                        <Ref innerRef={provided.innerRef}>
                                                                            <Table.HeaderCell
                                                                                width={4}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}
                                                                                key={item.key}>
                                                                                {item.value}
                                                                            </Table.HeaderCell>
                                                                        </Ref>
                                                                    )
                                                                }
                                                            </Draggable>
                                                        ))
                                                })
                                            }
                                            {provided.placeholder}
                                        </Table.Row>
                                    </Ref>
                                )
                            }
                        </Droppable>
                    </Table.Header>
                    <Table.Body>
                        {
                            isBlur ? (
                                <Table.Row/>
                            ) : (
                                <>
                                    {
                                        config.tableData.map((data, index) => {
                                            return (
                                                <Table.Row key={data.id}>
                                                    {
                                                        headers.map(keys => {
                                                            const key = config.tableHeaders
                                                                .filter(k => k.value === keys)
                                                                .map(item => item)
                                                            return (
                                                                <Table.Cell key={key.key}>
                                                                    {data[key[0].key]}
                                                                </Table.Cell>
                                                            )
                                                        })
                                                    }
                                                </Table.Row>
                                            )
                                        })
                                    }
                                </>
                            )
                        }

                    </Table.Body>
                </Table>

            </DragDropContext>
        </Segment>
    );
};

export default TableComponent;