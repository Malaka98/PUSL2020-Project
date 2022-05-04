import {Button, Flex, Text, VStack, Heading} from "@chakra-ui/react";
import React from "react";
import AttachmentLines from "./attchment-line.component";

const ShowAttachments = ({lineCloseButtonFunction, state, title, onOpenModel, lineType, page}: any) => {
   
    return (
        <>

            <Flex marginTop={{base: 3, md: 3}} flexDirection={{base: "column"}}>
                <Flex alignItems={'center'} justifyContent={"space-between"} flexDirection={{base: "row"}}>
                    <Text textColor={"#4A4A4A"} fontWeight={500}>{title}</Text>
                    <Button alignSelf={'end'} onClick={onOpenModel} flex={0.0001} mb={{base: 2}} p={{base: 2}}
                            bg={'#0065FF'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}
                    >
                        +
                    </Button>
                </Flex>
                <VStack p={"5px"} flex={0.9999} h='calc(50vh - 100px)' overflowY={'auto'} justify={"left"}
                        align={"left"} border={"1px"}
                        borderColor={"#DCDCDC"}
                        backgroundColor={"#F9F9F9"} minH={{md: "30vh"}}>

                    {state.map((item: any, index: any) => {
                        return <AttachmentLines closeButtonFunction={lineCloseButtonFunction} name={item.name}
                                                path={item.path} page={page} key={index} index={index}
                                                year={item.description} title={item.title}
                                                lineType={lineType}/>
                    })}

                </VStack>

            </Flex>
        </>
    )
}

export default ShowAttachments