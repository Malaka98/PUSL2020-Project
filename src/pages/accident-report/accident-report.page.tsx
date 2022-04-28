import React, {useState} from "react";
import {
    Box,
    Button, FormControl, FormLabel, Grid, GridItem,
    Input,
    InputGroup,
    Menu,
    MenuButton,
    MenuItem,
    MenuList, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select,
    Stack,
    useDisclosure, useToast
} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import PageHeader from "../../components/page-header/page-header.component";
import TableComponent from "../../components/table/table.component";
import {useDispatch} from "react-redux";
import useInput from "../../hooks/use-input.hook";

const AccidentReportPage = () => {

    const initialRef = React.useRef<any>(null);
    const {isOpen, onOpen, onClose} = useDisclosure();
    const dispatch = useDispatch()
    // const [departmentData, setDepartmentData] = useState([]) as any

    // useEffect(() => {
    //     getData()
    // }, [])

    async function getData() {
        // let depData: any = await (dispatch(getDepartmentList()))
        // setDepartmentData(depData.data)
    }

    const COLUMN = [
        {
            header: "Department Name",
            accessor: "department_name",
        },
        {
            header: "Organization Name",
            accessor: "ref_organization_name",
        },
        {
            header: "Creation",
            accessor: "creation"
        },
        {
            header: "Contact Name",
            accessor: "contact_name"
        },
        {
            header: "Points",
            accessor: "points",
            condition: {
                Approved: "green",
                Pending: "red",
                100: "green"
            }
        },
        {
            header: "Actions",
            options: [
                {
                    label: "Profile",
                    action: function (rowItem: any) {
                        console.log(rowItem)
                    }
                },
                {
                    label: "Payments",
                    action: function (rowItem: any) {
                        console.log(rowItem)
                    }
                },
                {
                    label: "Block",
                    action: function (rowItem: any) {
                        console.log(rowItem)
                    }
                },
            ]
        }
    ]

    const data = [
        {
            department_name: "Lorem",
            ref_organization_name: "Liam",
            creation: "Liam",
            contact_name: "Olivia",
            points: "Approved"
        },
        {
            department_name: "Lorem",
            ref_organization_name: "Elijah",
            creation: "Liam",
            contact_name: "Emma",
            points: "Pending"
        },
        {
            department_name: "Lorem",
            ref_organization_name: "Noah",
            creation: "Liam",
            contact_name: "Ava",
            points: "Approved"
        },
        {
            department_name: "Lorem",
            ref_organization_name: "Oliver",
            creation: "Liam",
            contact_name: "Charlotte",
            points: "Approved"
        },
    ]

    const AddNewDepartmentModel = () => {

        const {form, handleOnChange} = useInput()
        const [organizationState, setOrganizationState] = useState<any>([])
        const dispatch = useDispatch()
        const [isLoading, setIsLoading] = useState(false) as any
        const toast = useToast()
        const toastIdRef = React.useRef<any>()

        const saveActionHandler = async () => {
            // setIsLoading(true)
            // let organizationList: any = organizationState.filter((item: any) => (item.name === form.ref_organization_name))
            // let model = {...form, ref_organization: organizationList[0]?.organization}
            // let result: any = await dispatch(createDepartment(model))
            // setIsLoading(false)
            //
            // if (result?.status == 'success') {
            //     toastIdRef.current = toast({
            //         title: 'Success!',
            //         description: "Updated Successful",
            //         status: 'success',
            //         duration: 5000,
            //         isClosable: true,
            //     })
            //     onClose()
            //
            // } else {
            //     toastIdRef.current = toast({
            //         title: 'error!',
            //         description: "Updated failed",
            //         status: 'error',
            //         duration: 5000,
            //         isClosable: true,
            //     })
            //     onClose()
            // }
        }

        // useEffect(() => {
        //     getData()
        // }, [isOpen])

        // async function getData() {
        //     let departments: any = await (dispatch(getOrganizationList()))
        //     setOrganizationState(departments.data)
        // }

        return (<Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Add New Department</ModalHeader>
                <ModalBody>
                    <Grid
                        templateRows="repeat(2, 1fr)"
                        templateColumns="repeat(2, 1fr)"
                        gap={4}
                    >
                        <GridItem>
                            <FormControl>
                                <FormLabel color={"gray.500"} fontSize={'sm'}>Department Name</FormLabel>
                                <Input onChange={handleOnChange}
                                       size="sm"
                                       name={'department_name'}
                                       placeholder="Enter Department Name"
                                       color={"gray.700"}
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormLabel color={"gray.500"} fontSize={'sm'}>Select organization</FormLabel>
                            <Select size={'sm'} name={'ref_organization_name'} onChange={handleOnChange}
                                    placeholder='Select organization'>
                                {organizationState?.map((item: any, index: any) => (
                                    <option key={index} value={item.name}>{item.organization}</option>))}
                            </Select>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <FormLabel color={"gray.500"} fontSize={'sm'}>Remark</FormLabel>
                                <Input name={'remark'} onChange={handleOnChange} size="sm" placeholder="Enter Remark"
                                       color={"gray.700"}/>
                            </FormControl>
                        </GridItem>
                    </Grid>
                </ModalBody>
                <ModalFooter>
                    <Button variant="solid" mr={3} onClick={onClose} size="sm">
                        Cancel
                    </Button>
                    <Button onClick={saveActionHandler} colorScheme="blue" mr={3} size="sm">
                        Confirm
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>)
    }

    return (
        <>
            <PageHeader primaryActionName="Add New Department" primaryAction={() => {
                onOpen()
            }} title={'Departments'}/>
            <Box py={4}>
                <Stack
                    direction={'row'}
                    spacing={4}>
                    <InputGroup width={200} size={'sm'}>
                        <Input placeholder='Search'/>
                    </InputGroup>
                    <Menu>
                        <MenuButton size={'sm'} as={Button} rightIcon={<ChevronDownIcon/>}>
                            Categories
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Category 1</MenuItem>
                            <MenuItem>Category 2</MenuItem>
                            <MenuItem>Category 3</MenuItem>
                            <MenuItem>Category 4</MenuItem>
                            <MenuItem>Category 5</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu size={'sm'}>
                        <MenuButton size={'sm'} as={Button} rightIcon={<ChevronDownIcon/>}>
                            Choices
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Choice 1</MenuItem>
                            <MenuItem>Choice 2</MenuItem>
                            <MenuItem>Choice 3</MenuItem>
                            <MenuItem>Choice 4</MenuItem>
                            <MenuItem>Choice 5</MenuItem>
                        </MenuList>
                    </Menu>
                </Stack>
            </Box>

            <TableComponent columns={COLUMN} data={data}/>

            <AddNewDepartmentModel/>

        </>
    )
}

export default AccidentReportPage