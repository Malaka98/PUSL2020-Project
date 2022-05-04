import {Button, Flex, Text, VStack} from "@chakra-ui/react";
import {FiPaperclip} from "react-icons/fi";
import React from "react";

const AddNewAttachment = ({onOpenModel, title}: any) => {
    return (
        <>
            <Text textColor={"#4A4A4A"} fontWeight={500} marginTop={{base: 3}}>{title}</Text>
            <Flex p={{base: 2, md:5}} border={"1px"} borderRadius={4} borderColor={"#DCDCDC"} direction={{base: 'column', md: 'column'}}
                  backgroundColor={"#F9F9F9"} align={"center"} justify={"center"}
                  minH={{md: "35vh"}} marginTop={{base: 2}} gap={'1rem'}>
                {/*<Flex p={{md: '10'}} flex={0.4} justify={"center"} align={"center"}>*/}
                {/*    <FiPaperclip size={"100px"}/>*/}
                {/*</Flex>*/}
                {/*<VStack mt={{base: 5, md: 20}} justifyContent={"center"} justifyItems={"center"} flex={1} direction={"column"} ps={"10px"} spacing={5}*/}
                {/*        alignItems={"baseline"}>*/}
                    <Text pt={"10px"} textColor={"#172B4D"} fontWeight={500} fontSize={"md"}> Upload your
                        important attachments</Text>
                    <Text>You are allowed to upload images, pdf, doc, videos...</Text>

                    <Button onClick={onOpenModel}
                            bg={'#0065FF'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}

                    >
                        Add files
                    </Button>
                {/*</VStack>*/}
            </Flex>
        </>
    )
}

export default AddNewAttachment