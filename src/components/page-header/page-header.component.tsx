import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
    Spacer,
    Stack,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import {DragHandleIcon} from "@chakra-ui/icons";

const PageHeader = (props: any) => {
    return (
        <>
            <Breadcrumb color={useColorModeValue('gray.500', 'gray.700')} fontWeight='small' fontSize='sm'>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>About</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Current</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Flex justifyItems={'center'}>
                <Text fontSize='2xl' fontWeight={'semibold'}>{props.title}</Text>
                <Spacer/>
                <Stack direction={'row'} spacing={2}>
                    <Button variant='primary' size='sm' onClick={props.primaryAction}>
                        {props.primaryActionName ? props.primaryActionName : 'Primary Action'}
                    </Button>
                    <Button variant="solid" size='sm'>
                        Default
                    </Button>

                    <Box>
                        <Menu>
                            <MenuButton>
                                <IconButton size="sm" aria-label='Search database' icon={<DragHandleIcon/>}/>
                            </MenuButton>
                            <MenuList>
                                <MenuGroup title='Actions'>
                                    <MenuItem>Configure</MenuItem>
                                    <MenuItem>Settings </MenuItem>
                                </MenuGroup>
                                <MenuDivider/>
                                <MenuGroup title='Help'>
                                    <MenuItem>Docs</MenuItem>
                                    <MenuItem>FAQ</MenuItem>
                                </MenuGroup>
                            </MenuList>
                        </Menu>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
}

export default PageHeader