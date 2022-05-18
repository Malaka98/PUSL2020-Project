import {
    Avatar,
    Badge,
    Box,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    Textarea,
    VStack, Wrap,
} from "@chakra-ui/react";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import ChatItemComponent from "./components/chat-item.component";
import {AppDispatch, RootState} from "../../store/store";

const AccidentViewPage = () => {

    const dispatch: AppDispatch = useDispatch()
    const view = useSelector<RootState, any>(
        state => state.viewAccident.item
    )
    console.log("==================>>>>>>>", view)
    // const get = async () => {
    //     // try {
    //     //     const doc = getDoc(docTypes, meta?.publication_id.toString())
    //     //     const response = await dispatch(getPublication(doc, meta?.publication_id.toString()))
    //     //     // console.log("*****************************>", response.data)
    //     //     setView(response.data)
    //     // } catch (e: any) {
    //     //     console.log("Exception Error>>>>>>", e)
    //     // }
    // }
    //
    // useEffect(() => {
    //     get().catch(error => {
    //         console.log(error)
    //     })
    // }, [meta])

    return (
        <>
            <div className={'flex bg-[#F8F8F8]'}>
                <Box width={"100%"} mb={20}>
                    <Flex>
                        <Container maxW='container.lg' mt={4}>
                            <Tabs variant={"unstyled"} p={0}>
                                <Stack direction={{base: "column", md: 'row'}} justifyContent={{md: 'space-between'}}
                                       spacing={{base: '5'}}>
                                    <Heading size={'md'}>Project Status</Heading>
                                    <TabList borderBottom={'none'} justifyContent={{base: 'center', md: 'end'}}>
                                        <Tab fontWeight={"semibold"} fontSize='md' textColor={"#505050"} py={1} me={3}
                                             _focus={{
                                                 outline: "none !important",
                                                 boxShadow: "none !important",
                                                 border: "1px solid #989898",
                                             }} _selected={{color: 'white', bg: 'black'}} borderRadius={5}
                                             borderWidth={"2px"}>
                                            Status
                                        </Tab>
                                        <Tab fontWeight={"semibold"} fontSize='md' textColor={"#505050"} py={1} me={3}
                                             _focus={{
                                                 outline: "none !important",
                                                 boxShadow: "none !important",
                                                 border: "1px solid #989898",
                                             }} _selected={{color: 'white', bg: 'black'}} borderRadius={5}
                                             borderWidth={"2px"}>
                                            Chat
                                        </Tab>
                                    </TabList>
                                </Stack>

                                <TabPanels mt={4}>
                                    <TabPanel p={0}>
                                        <Box borderRadius={5} boxShadow={'lg'} p={4} bg={'white'} width={'100%'}>
                                            {/*<Stack direction={{base: 'column', sm: 'row'}}>*/}
                                            {/*    <Image src={view?.url[0]} alt='image'*/}
                                            {/*           w={{base: "100%", md: 400}}*/}
                                            {/*           h={200}*/}
                                            {/*           borderColor={"#E4E4E4"} borderWidth={"1px"} borderRadius={"5px"}*/}
                                            {/*           objectFit={'cover'}/>*/}
                                                <VStack alignItems={'start'} width={'100%'} alignSelf={'start'} ps={2}>
                                                    <Flex width={'100%'}>
                                                        <SimpleGrid columns={2} width={'100%'}>
                                                            <Box>
                                                                <Text fontWeight={500} textTransform={'uppercase'}
                                                                      color={'#8C8C8C'}>Project ID</Text>
                                                                <Text fontWeight={500}
                                                                      textStyle={'uppercase'}>{view?.name}</Text>
                                                            </Box>
                                                            <Box>
                                                                <Text fontWeight={500} textTransform={'uppercase'}
                                                                      color={'#8C8C8C'}>Submitted</Text>
                                                                <Badge backgroundColor={"#B3F1FF"}>{view?.approved}</Badge>
                                                            </Box>
                                                        </SimpleGrid>
                                                    </Flex>
                                                    <Stack>
                                                        <Text fontWeight={500} textTransform={'uppercase'}
                                                              color={'#8C8C8C'}>Currently
                                                            in</Text>
                                                        <Badge backgroundColor={"#B3F1FF"}>Department of xyz</Badge>
                                                    </Stack>
                                                    <Text fontWeight={500} textStyle={'uppercase'}
                                                          color={'#8C8C8C'}>NOTES</Text>
                                                    <Flex w={'100%'} justifyContent={'center'}>
                                                        <Wrap>
                                                            {
                                                                view?.url.map((item: any, index: number) => (
                                                                    <Image src={item} alt='image'
                                                                           w={{base: "100%", md: 200}}
                                                                           m={2}
                                                                           h={150}
                                                                           borderColor={"#E4E4E4"} borderWidth={"1px"} borderRadius={"5px"}
                                                                           objectFit={'cover'}/>
                                                                ))
                                                            }
                                                        </Wrap>
                                                    </Flex>
                                                </VStack>
                                            {/*</Stack>*/}
                                        </Box>
                                    </TabPanel>

                                    <TabPanel p={0}>
                                        <Box bg={'white'} borderRadius={5} py={5} ps={2} pr={2}>
                                            <GridItem w='100%'
                                                      overflowY={'auto'}>
                                                <Grid templateColumns='repeat(12, 1fr)'>
                                                    <GridItem colSpan={1} ms={1}>
                                                        <Avatar size='sm' name='Kent Dodds'
                                                                src='https://bit.ly/kent-c-dodds'/>
                                                    </GridItem>
                                                    <GridItem colSpan={11} pr={4}>
                                                        <Textarea placeholder='' h={9}/>
                                                    </GridItem>
                                                </Grid>
                                                <ChatItemComponent/>
                                                <Grid templateColumns='repeat(12, 1fr)'>
                                                    <GridItem colSpan={1}>

                                                    </GridItem>
                                                    <GridItem colSpan={11}>
                                                        <ChatItemComponent/>
                                                    </GridItem>
                                                </Grid>
                                                <ChatItemComponent/>
                                                <ChatItemComponent/>
                                                <ChatItemComponent/>
                                            </GridItem>
                                        </Box>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Container>
                    </Flex>
                </Box>
            </div>
        </>
    )
}

export default AccidentViewPage