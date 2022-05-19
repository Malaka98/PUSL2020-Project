import {Box, CloseButton, Flex, HStack, Text} from "@chakra-ui/react";
import React from "react";

const AttachmentLines = ({index, name, year, title, closeButtonFunction, path}: any) => {

    return (

        <Flex p={"5px"} borderWidth={"1px"} borderColor={"#E8E8E8"} borderRadius={3}
              backgroundColor={"#FFFFFF"} display={"flex"}
              direction={"row"}>
            <HStack ps={"5px"} spacing={"25px"} width={"100%"} flex={0.5}>
                <Text fontWeight={"medium"} textColor={"gray"}>{index + 1}</Text>
                {name && (<Text textColor={"gray"}>{name}</Text>)}
                {year && (<Text textColor={"gray"}>{year}</Text>)}
                {title && (<Text textColor={"gray"}>{title}</Text>)}
                {path && (<Text textColor={"gray"}>{path}</Text>)}
            </HStack>
            <Box me={"5px"} justifyContent={"flex-end"} alignItems={"center"} display={"flex"} flex={0.5}>
                <CloseButton onClick={() => {
                    closeButtonFunction(index)
                }} color={"#747474"} w={3} h={3}/>
            </Box>
        </Flex>
    )
}

export default React.memo(AttachmentLines)