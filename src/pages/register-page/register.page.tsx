import {Box, Button, FormControl, FormLabel, Heading, Input, Link, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import React from "react";
import useInput from "../../hooks/use-input.hook";

export const RegisterPage = () => {

    const {form, handleOnChange} = useInput()

    return (
        <>
            <Box bg={'gray.100'}>
                <Box mx="auto" py={{base: '10', md: '20'}} px={{base: '2', md: '10'}}>
                    <Box w="full" maxW={'2xl'} mx="auto">
                        <Box
                            bg={'white'}
                            rounded={{base: "md", md: '2xl'}}
                            p={{base: '8', md: '12'}}
                            borderWidth={{md: '1px'}}
                            borderColor={'gray.200'}
                            shadow={{md: 'lg'}}
                        >
                            <Box mb="8" textAlign={{base: 'center', md: 'start'}}>
                                <Heading size="lg" mb="2" fontWeight="extrabold">
                                    Registration
                                </Heading>
                                <Text fontSize="lg" color={'gray.600'} fontWeight="medium">
                                    Enter your details to get started
                                </Text>
                            </Box>
                            <SimpleGrid columns={{base: 1, sm: 2}} spacingX={4} spacingY={2} mt={1}>
                                <FormControl>
                                    <FormLabel>Area of Interest</FormLabel>
                                    <Input
                                        onChange={handleOnChange}
                                        type="text"
                                        name="area_of_interest"
                                        id="area_of_interest"
                                        autoComplete="given-name"
                                    />
                                    {/*{errorMessage.area_of_interest ?*/}
                                    {/*    <span><Text color='red' fontSize='sm'>{errorMessage.area_of_interest}</Text></span> : null}*/}
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Area of Interest</FormLabel>
                                    <Input
                                        onChange={handleOnChange}
                                        type="text"
                                        name="area_of_interest"
                                        id="area_of_interest"
                                        autoComplete="given-name"
                                    />
                                    {/*{errorMessage.area_of_interest ?*/}
                                    {/*    <span><Text color='red' fontSize='sm'>{errorMessage.area_of_interest}</Text></span> : null}*/}
                                </FormControl>
                            </SimpleGrid>

                            <SimpleGrid columns={{base: 1, sm: 2}} spacingX={4} spacingY={2} mt={1}>
                                <FormControl>
                                    <FormLabel>Workplace</FormLabel>
                                    <Input onChange={handleOnChange} type="text" name="workplace" id="workplace"
                                           autoComplete="given-name"/>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Workplace</FormLabel>
                                    <Input onChange={handleOnChange} type="text" name="workplace" id="workplace"
                                           autoComplete="given-name"/>
                                </FormControl>
                            </SimpleGrid>

                            <SimpleGrid columns={{base: 1, sm: 2}} spacingX={4} spacingY={2} mt={1}>
                                <FormControl>
                                    <FormLabel>Google scholar URL</FormLabel>
                                    <Input onChange={handleOnChange} type="text" name="google_scholar_url"
                                           id="google_scholar_url"
                                           autoComplete="given-name"/>
                                </FormControl>
                            </SimpleGrid>
                            <Stack direction={"row"} mt={5} justifyContent={"flex-end"}>
                                <Button colorScheme={"blue"}>Cancel</Button>
                                <Button colorScheme={"blue"} loadingText="Processing"
                                        spinnerPlacement="start">Register</Button>
                            </Stack>
                        </Box>

                        <Text mt="8" align="center" fontWeight="medium">
                            Already registered?{' '}
                            <Box
                                as="a"
                                href="#"
                                color={'blue.600'}
                                display={{base: 'block', md: 'inline-block'}}
                            >
                                <Link href={`/login`}>Log in</Link>
                            </Box>
                        </Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
