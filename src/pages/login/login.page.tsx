import {
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Image,
    Input,
    LightMode,
    Stack,
    Text,
    useColorModeValue as mode,
    useToast
} from '@chakra-ui/react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "./actions/login-page.actions";
import useInput from "../../hooks/use-input.hook";
import * as React from "react";
import {useEffect} from "react";
import {AppDispatch} from "../../store/store";

const LoginPage = () => {

    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const {form, handleOnChange, handleOnChangeForValue} = useInput()
    const showSpinner = useSelector((state: any) => state.common.isLoading)
    const showAlert = useSelector((state: any) => state.alert.showAlert)
    const toastIdRef = React.useRef<any>()
    const toast = useToast()

    useEffect(() => {

    }, [showAlert])


    //-------- yup error handle example START----

    // let schema = yup.object().shape({
    //     name: yup.number().required({type: 'sdf', err: 'dfdfd'}),
    //     age: yup.number().required("age dsfsdfsdf").positive().integer()
    // });
    //
    // schema.validate({name: 'jimmy', age: 1}, {abortEarly: false}).then(function (value) {
    //     console.log("value", value) // => { name: 'jimmy',age: 24 }
    // }).catch(function (err) {
    //     console.log("errors", err.errors)
    //     console.log("inner", err.inner)
    // });

    //-------- yup error handle example END----

    async function loginActionHandler() {
        // console.log(form?.username)
        const response: any = await dispatch(loginAction({...form}, navigate))
        if (response.status == 'error') {
            toastIdRef.current = toast({
                title: 'Failed!',
                description: "Invalid username or password",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
    }

    const handleKeypress = (event: any) => {
        if (event.keyCode === 13) {
            loginActionHandler();
        }
    }

    return (
        <>
            <Flex h="100vh" direction={{base: 'column', md: 'row',}}>
                <Box display={{base: 'none', md: 'block',}} flex="1" bg="blue.600"
                     color="white" px="10">
                    <Flex direction="column" align="center" justify="center" h="full" textAlign="center">
                        <Box>
                            <Center>
                                <Image w={150} h={150}
                                       src={"https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"}/>
                            </Center>
                            <Text maxW="md" mx="auto" fontWeight="extrabold" fontSize={{base: '4xl', lg: '5xl'}}
                                  letterSpacing="tight" lineHeight="normal">Welcome to Lorem</Text>
                            <Text mt="5" maxW="sm" mx="auto">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem.</Text>

                        </Box>
                    </Flex>
                </Box>
                <Box flex="1" d={"flex"} justifyContent={"center"} alignItems={"center"}
                     px={{base: '6', md: '10', lg: '16', xl: '28'}} py={{base: '10', md: '24'}}
                     bg={{
                         md: mode('gray.50', 'gray.800'),
                     }}>
                    <Box maxW="xl">
                        <Box>
                            <Center>
                                <Text mt="3" fontSize={{base: 'xl', md: '3xl'}} fontWeight="bold"
                                      color={mode('blue.600', 'blue.400')}> Sign in to continue</Text>
                            </Center>
                        </Box>

                        <Box w={{md: '450px'}} mt="5" rounded="xl" bg={{md: mode('white', 'gray.700')}}
                             shadow={{md: 'lg'}} px={{md: '10'}} pt={{base: '8', md: '12'}} pb="8">

                            <form>
                                <Stack spacing="8">
                                    <FormControl position="relative">
                                        <FormLabel>Email</FormLabel>
                                        <Input name={'username'} onChange={handleOnChange} onKeyDown={handleKeypress}
                                               type="email" size="md" fontSize="md" placeholder="Username"/>
                                    </FormControl>

                                    <Box>
                                        <FormControl position="relative">
                                            <FormLabel>Password</FormLabel>
                                            <Input name={'password'} onChange={handleOnChange}
                                                   onKeyDown={handleKeypress}
                                                   type="password"
                                                   placeholder="Password" size="md" fontSize="md"/>
                                        </FormControl>
                                        <Box
                                            display="inline-block"
                                            as="a"
                                            href="#"
                                            color={mode('blue.600', 'blue.300')}
                                            fontWeight="semibold"
                                            fontSize="sm"
                                            mt="3"
                                        >
                                            Forgot password?
                                        </Box>
                                    </Box>
                                </Stack>
                                <Flex
                                    direction={{
                                        base: 'column-reverse',
                                        md: 'row',
                                    }}
                                    mt="6" justifyContent={'end'}
                                >
                                    <LightMode>
                                        <Button
                                            mb={{
                                                base: '4',
                                                md: '0',
                                            }}
                                            w={{
                                                base: 'full',
                                                md: 'auto',
                                            }}
                                            type="submit"
                                            colorScheme="blue"
                                            size="md"
                                            fontSize="md"
                                            fontWeight="bold"
                                            onClick={loginActionHandler}
                                            isLoading={showSpinner}
                                            loadingText='Authenticating'
                                            spinnerPlacement='start'
                                        >
                                            Sign in
                                        </Button>
                                    </LightMode>
                                </Flex>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}

export default LoginPage