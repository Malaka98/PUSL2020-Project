import {
    Avatar,
    Box,
    Collapse,
    Flex,
    HStack,
    Icon,
    IconButton, Image,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Link,
    Menu,
    MenuButton,
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';

import {FiHome, FiSearch} from 'react-icons/fi';
import {BellIcon, ChevronDownIcon, SettingsIcon, WarningIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
// import {logoutAction} from "../../pages/login/actions/login-page.actions";
import {useEffect} from "react";
// import {NavItemsActions, SideNavItemsAction} from "../../layouts/main-layout/actions/nav-items.actions";
import HeaderFactory from "./header-factory";
import {useConfirmation} from "../dialog-box/alert-provider";
import {getSideNavItems, showSpinner} from "../../store/common/sideNavItemSlice";
import {AppDispatch} from "../../store/store";

const Header = () => {
    const {isOpen, onToggle} = useDisclosure();
    const navigate = useNavigate();

    return (
        <Box pos={'sticky'} zIndex={100} top={0}>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{base: 2}}
                px={{base: 4}}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{base: 1, md: 'auto'}}
                    ml={{base: -2}}
                    display={{base: 'flex', md: 'none'}}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <FiHome/> : <FiHome/>
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{base: 1}} justify={{base: 'center', md: 'start'}}>
                    <Text cursor={"pointer"} onClick={() => {
                        navigate("/app")
                    }}
                          textAlign={useBreakpointValue({base: 'center', md: 'left'})}
                          fontFamily={'heading'}
                          fontWeight={700}
                          color={useColorModeValue('gray.800', 'white')}>
                        Lorem
                    </Text>

                    <Flex display={{base: 'none', md: 'flex'}} ml={10}>
                        <DesktopNav/>
                    </Flex>
                </Flex>

                <Stack
                    flex={{base: 1, md: 0}}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <InputGroup size={'sm'}>
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            children={<FiSearch/>}
                        />
                        <Input width={200} placeholder='Search'/>
                        <InputRightElement children={null}/>
                    </InputGroup>

                    <HeaderActions/>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                {/*<MobileNav/>*/}
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    const dispatch: AppDispatch = useDispatch()

    const topNavItemList = useSelector((state: any) => state.topNav.children)
    const NAV_ITEMS = HeaderFactory(topNavItemList)

    useEffect(() => {
        getNavBarItems()
    }, []);

    function getNavBarItems() {
        // dispatch(NavItemsActions())
    }

    async function topNavClickHandler(label: any) {
        // await dispatch(SideNavItemsAction(label))
    }

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem: any) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }} onClick={() => {
                                topNavClickHandler(navItem.label)
                            }}>
                                {navItem.label}
                                <ChevronDownIcon ml="1"/>
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child: any) => (
                                        <DesktopSubNav topNav={navItem.label} key={child.label}
                                                       href={child.path} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({label, href, subLabel, img, topNav}: NavItem) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function getSideNav(label: any) {
        // dispatch(SideNavItemsAction(label))
        navigate(href)
    }

    return (
        <Link onClick={() => {
            getSideNav(topNav)
        }}
            // href={href}
              role={'group'}
              display={'block'}
              p={2}
              rounded={'md'}
              _hover={{bg: useColorModeValue('gray.50', 'gray.900')}}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{color: 'blue.400'}}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{opacity: '100%', transform: 'translateX(0)'}}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    {img ? <Image boxSize={6} src={img}/> : <Icon color={'blue.400'} w={5} h={5} as={FiHome}/>}
                </Flex>
            </Stack>
        </Link>
    );
};
// const MobileNav = () => {
//     return (
//         <Stack
//             bg={useColorModeValue('white', 'gray.800')}
//             p={4}
//             display={{md: 'none'}}>
//             {NAV_ITEMS.map((navItem) => (
//                 <MobileNavItem key={navItem.label} {...navItem} />
//             ))}
//         </Stack>
//     );
// };

const MobileNavItem = ({label, children, href}: NavItem) => {
    const {isOpen, onToggle} = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={FiHome}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{marginTop: '0!important'}}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                    children.map((child) => (
                        <Link key={child.label} py={2} href={child.href}>
                            {child.label}
                        </Link>
                    ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

const HeaderActions = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const confirm = useConfirmation();

    const logout = async () => {
        // confirm({
        //     variant: "danger",
        //     catchOnCancel: true,
        //     title: "Are you sure you want to logout?",
        //     description: "You will be redirected to the login screen"
        // }).then(async () => {
        //     await dispatch(logoutAction(navigate))
        // })
    }
    return (<>
        <HStack spacing={5}>
            <BellIcon fontSize={20}/>
            <WarningIcon fontSize={20}/>
            <SettingsIcon fontSize={20}/>
            <Menu>
                <MenuButton>
                    <Avatar size={"sm"} src='https://bit.ly/dan-abramov'/>
                </MenuButton>
                <MenuList>
                    <MenuGroup title='Profile'>
                        <MenuItem>My Account</MenuItem>
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </MenuGroup>
                    <MenuDivider/>
                    <MenuGroup title='Help'>
                        <MenuItem>Docs</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
        </HStack>
    </>)
}

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: any;
    img?: string;
    topNav?: string;
}

// const NAV_ITEMS: Array<NavItem> = [
//     {
//         label: 'Documents',
//         children: [
//             {
//                 label: 'New applicant registration',
//                 subLabel: 'Lorem Ipsum',
//                 href: '#',
//                 img:logo
//             },
//             {
//                 label: 'Applications',
//                 subLabel: 'Lorem Ipsum',
//                 href: 'all',
//                 img:logo
//             },
//         ],
//     },
//     {
//         label: 'Tasks',
//         children: [
//             {
//                 label: 'Todo Tasks',
//                 subLabel: '',
//                 href: '/app/task/all',
//             },
//             {
//                 label: 'History',
//                 subLabel: 'An exclusive list for contract work',
//                 href: '/app/task/history',
//             },
//         ],
//     },
//     {
//         label: 'Dashboards',
//         children: [
//             {
//                 label: 'Project Summery',
//                 subLabel: 'Summery for ongoing projects',
//                 href: '/app/application/summary',
//             },
//             {
//                 label: 'Work flow',
//                 subLabel: 'Work flow of projects',
//                 href: '/app/application/workflow',
//             },
//         ],
//     },
// ];

export default Header
