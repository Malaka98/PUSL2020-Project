import {Table, Tbody, Th, Thead, Tr} from "@chakra-ui/react";
import React from 'react';
import TrComponent from "./tr.component";

const TableComponent = ({columns, data, onSelected}: any) => {

    function selectedRow(row: any) {
        onSelected(row)
    }

    return (<Table size='sm'>
        <Thead>
            <Tr>
                {columns.map((item: any, index: any) => <Th key={index}>{item.header}</Th>)}
            </Tr>
        </Thead>
        <Tbody>
            {data?.map((item: any, index: any) => <TrComponent onSelected={(selectedItem: any) => {
                selectedRow(selectedItem)
            }} key={index} columns={columns} item={item}/>)}
        </Tbody>
    </Table>)
}

export default TableComponent