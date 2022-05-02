import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Textarea, useToast
} from "@chakra-ui/react";
import React, {useState} from "react";
import useInput from "../../hooks/use-input.hook";
import RegistrationSchema from "./schema/registration.schema";
import {AppDispatch} from "../../store/store";
import {useDispatch} from "react-redux";
import {UserRegistrationAction} from "./action/user-registration.action";

export const RegisterPage = () => {
    const [errorMessage, setErrorMessage] = useState<any>({})
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {form, handleOnChange} = useInput()
    const toast = useToast()
    const dispatch: AppDispatch = useDispatch();

    const RegisterActionHandler = async () => {

        RegistrationSchema.validate(form, {abortEarly: false}).then(
            async (result) => {
                setErrorMessage({})
                setIsLoading(true)
                await dispatch(UserRegistrationAction("user", result))
                setIsLoading(false)
                toast({
                    title: 'Successful',
                    description: "Registration successfully",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
            }
        ).catch((error: any) => {
            setErrorMessage({})
            error?.inner?.forEach((error: any) => {
                setErrorMessage((state: any) => ({...state, ...{[error.path]: error.message}}))
            });
            toast({
                title: 'Error',
                description: "Fill the form correctly ⚠",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        })
    }

    return (
        <>
            <Box bg={'gray.100'} h={'100vh'}>
                <Box mx="auto" py={{base: '10', md: '20'}} px={{base: '2', md: '10'}}>
                    <Box w="full" maxW={'2xl'} mx="auto" mt={'20'}>
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
                                    <FormLabel>Name</FormLabel>
                                    <Input
                                        onChange={handleOnChange}
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="given-name"
                                    />
                                    {errorMessage.name ?
                                        <span><Text color='red' fontSize='sm'>{errorMessage.name}</Text></span> : null}
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Username</FormLabel>
                                    <Input
                                        onChange={handleOnChange}
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="given-name"
                                    />
                                    {errorMessage.username ?
                                        <span><Text color='red' fontSize='sm'>{errorMessage.username}</Text></span> : null}
                                </FormControl>
                            </SimpleGrid>

                            <SimpleGrid columns={{base: 1, sm: 2}} spacingX={4} spacingY={2} mt={1}>
                                <FormControl>
                                    <FormLabel>Password</FormLabel>
                                    <Input onChange={handleOnChange} type="password" name="password" id="password"/>
                                    {errorMessage.password ? <span><Text color='red'
                                                                                    fontSize='sm'>{errorMessage.password}</Text></span> : null}
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Email</FormLabel>
                                    <Input onChange={handleOnChange} type="text" name="email" id="email"
                                           autoComplete="given-name"/>
                                    {errorMessage.email ? <span><Text color='red'
                                                                                    fontSize='sm'>{errorMessage.email}</Text></span> : null}
                                </FormControl>
                            </SimpleGrid>

                                <FormControl>
                                    <FormLabel>Address</FormLabel>
                                    <Textarea onChange={handleOnChange} name="address" id="address"
                                              autoComplete="given-name" />
                                    {errorMessage.address ? <span><Text color='red'
                                                                                    fontSize='sm'>{errorMessage.address}</Text></span> : null}
                                </FormControl>
                            <Stack direction={"row"} mt={5} justifyContent={"flex-end"}>
                                <Button colorScheme={"blue"}>Cancel</Button>
                                <Button colorScheme={"blue"} isLoading={isLoading} loadingText="Processing"
                                       onClick={RegisterActionHandler} spinnerPlacement="start">Register</Button>
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
