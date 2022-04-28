import {
    Td, Text, Tr, Badge, Center, HStack, Menu, MenuButton, MenuList, MenuItem
} from "@chakra-ui/react";
import {FaEllipsisH} from "react-icons/fa";
import React from 'react';

const TrComponent = ({item, columns, onSelected}: any) => {

    function selectedRow(row: any) {
        onSelected(row)
    }

    return (<Tr cursor={'pointer'}>
        {columns.map((col: any, index: any) => <Td onClick={!col.options ? () => selectedRow(item) : () => {
        }} key={index}>
            {col.condition ? <Badge
                    colorScheme={col.condition[item[columns[index].accessor]]}>{item[columns[index].accessor]}</Badge> :
                <Text>{item[columns[index].accessor]}</Text>}

            {col.options ? <Center>
                <HStack spacing={5}>
                    <Menu>
                        <MenuButton>
                            <FaEllipsisH/>
                        </MenuButton>
                        <MenuList>
                            {col.options.map((actionItem: any, index: any) => <MenuItem onClick={() => {
                                actionItem.action(item)
                            }} key={index}>{actionItem.label}</MenuItem>)}
                        </MenuList>
                    </Menu>
                </HStack>
            </Center> : null}
        </Td>)}
    </Tr>)
}
export default TrComponent;