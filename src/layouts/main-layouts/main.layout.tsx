import React, {ReactText, useEffect} from 'react';
import {Box, BoxProps, Flex, FlexProps, Icon, Link, Spinner, useColorModeValue, useDisclosure,} from '@chakra-ui/react';
import {IconType} from 'react-icons';
import Header from "../../components/header/header.component";
import {Link as ReachLink, Navigate, Outlet} from 'react-router-dom';
import {COLORS, SIZES} from "../../assets/theme/theme";
import {useDispatch, useSelector} from "react-redux";
import {useCreateMutation} from "../../service/resource-api.service";
import {AppDispatch} from "../../store/store";
import {MainLayoutAction} from "./actions/main-layout.action";

interface LinkItemProps {
    name: string;
    icon: IconType;
    path: string;
}

const MainLayout = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [validate, {isLoading, isSuccess, isError}] = useCreateMutation()
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        validate({"doc": "validate"})
        getSideNavItem()
    }, [])

    function getSideNavItem() {
        dispatch(MainLayoutAction())
    }

    return (
        <>
            {isLoading ? <h1>Loading...</h1> : isSuccess ? <>
                <Header/>
                <Box minH={SIZES.mainLayoutHeight} bg={'gray.100'}>
                    <SidebarContent
                        onClose={() => onClose}
                        display={{base: 'none', md: 'block'}}
                        overflowX={'hidden'}
                        overflowY={"auto"}
                        h='calc(100vh - 63px)'
                    />
                    <Box minH={SIZES.mainLayoutHeight} bg={'white'} ml={{base: 0, md: 60}}
                         p="4">
                        <Outlet/>
                    </Box>
                </Box>
            </> : null}
            {isError ? <Navigate to={"/"}/> : null}
        </>
    );
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({onClose, ...rest}: SidebarProps) => {
    const dispatch = useDispatch()
    const showSpinner = useSelector((state: any) => state.sideNav.showSpinner)
    const sideLinks = useSelector((state: any) => state.sideNav.sideNavItems)


    return (
        <Box
            borderRight="1px"
            borderRightColor={useColorModeValue("gray.200", 'gray.700')}
            bg={useColorModeValue(COLORS.gray10, 'grey.700')}
            w={{base: 'full', md: 60}}
            py={'2'}
            pos="fixed"
            h="full"
            {...rest}>

            {showSpinner && <Box w={'100%'} h={'auto'} position={'relative'} textAlign={'center'}>
                <Spinner position={'absolute'} ml={'auto'} mr={'auto'} size='xl'/>
            </Box>}

            {sideLinks.map((link: any) => (
                <NavItem p={'2'} key={link.name} icon={link.icon} path={link.path}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
    path: string
}

const NavItem = ({icon, children, path, ...rest}: NavItemProps) => {

    return (
        <Link as={ReachLink} to={path} style={{textDecoration: 'none'}} _focus={{boxShadow: 'none'}}>
            <Flex
                align="center"
                p="4"
                mx="2"
                bg={COLORS.gray10}
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: COLORS.gray30,
                    color: COLORS.primaryBlue,
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: COLORS.primaryBlue,
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

export default MainLayout