import {Avatar, Badge, Box, Grid, GridItem, HStack, Link, Stack, Text, Textarea, VStack} from "@chakra-ui/react";

const ChatItemComponent = (props: any) => {
    return (
        <>
            <HStack p={2} alignItems={"flex-start"} bgColor={props.backgroundColor ? props.backgroundColor : null}
                    borderRadius={5} mt={2}>
                <Box pt={1}>
                    <Avatar size='xs' name='Kent Dodds' src='https://bit.ly/prosper-baba'/>
                </Box>
                <Box>
                    <Stack>
                        <HStack>
                            <Box pe={1}>
                                <Text color={'#172B4D'} fontSize={'sm'}>{props.name ? props.name : 'Anonymous'}</Text>
                            </Box>
                            <Box px={1}>
                                <Badge colorScheme={'yellow'}
                                       fontSize={'xs'}>{props.userType ? props.userType : 'Applicant'}</Badge>
                            </Box>
                            <Box px={1}>
                                <Text isTruncated color={'#172B4D'}
                                      fontSize={'sm'}>{props.date ? props.date : '01, December 2022'}</Text>
                            </Box>
                        </HStack>
                    </Stack>
                    <Stack pt={1}>
                        <Text fontSize={'sm'}>It is a long established fact that a reader will be distracted by the
                            readable content of
                            a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using Content here, content
                            here, making it look like readable English.
                        </Text>
                    </Stack>
                    <Stack pt={1}>
                        <HStack>
                            <Box pe={1}>
                                <Link color={'midnightblue'} fontSize={'sm'}>Reply</Link>
                            </Box>
                            <Box pe={1}>
                                <Link color={'midnightblue'} fontSize={'sm'}>Edit</Link>
                            </Box>
                            <Box pe={1}>
                                <Link color={'midnightblue'} fontSize={'sm'}>Delete</Link>
                            </Box>
                            <Box>
                                <Link color={'midnightblue'} fontSize={'sm'}>Like</Link>
                            </Box>
                        </HStack>
                    </Stack>
                </Box>
            </HStack>
        </>
    )
}

export default ChatItemComponent