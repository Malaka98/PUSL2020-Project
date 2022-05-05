import React, {useCallback, useState} from "react";
import {
    Box,
    Button, FormControl, FormLabel, Grid, GridItem,
    Input,
    InputGroup,
    Menu,
    MenuButton,
    MenuItem,
    MenuList, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select,
    Stack, Text,
    useDisclosure, useToast
} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import PageHeader from "../../components/page-header/page-header.component";
import TableComponent from "../../components/table/table.component";
import {useDispatch} from "react-redux";
import useInput from "../../hooks/use-input.hook";
import {AddAccidentReportSchema} from "./schema/add-accident-report.schema";
import {AddAccidentReportAction} from "./actions/add-accident-report.action";
import {AppDispatch} from "../../store/store";
import {useGetAccidentListQuery} from "../../service/accident-api.service";
import {useConfirmation} from "../../components/dialog-box/alert-provider";
import ShowAttachments from "./components/show-attachment.component";
import AddNewAttachment from "./components/add-new-attachment.component";
import AddAwardsModel from "./components/add-attachment-model.component";

const AccidentReportPage = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const {isOpen: isAwardOpen, onOpen: onAwardOpen, onClose: onAwardClose} = useDisclosure();
    const [attachment, setAttachment] = useState<Array<any>>([])
    // const dispatch: AppDispatch = useDispatch()
    // const [accidentData, setAccidentData] = useState<Array<any>>([])

    const {isLoading, data} = useGetAccidentListQuery({"doc": "accident"})

    // useEffect(() => {
    //     getData()
    // }, [accidentData])
    // console.log("**********************" + JSON.stringify(accidentData))
    // async function getData() {
    //     let depData: any = await (dispatch(GetAccidentReportList("accident")))
    //     setAccidentData(depData.data)
    // }
    // if(data) {
    //     setAccidentData(data)
    // }

    const COLUMN = [
        {
            header: "Location",
            accessor: "location",
        },
        {
            header: "Description",
            accessor: "description",
        },
        {
            header: "Vehicle Number",
            accessor: "vehicleNumber"
        },
        {
            header: "Vehicle",
            accessor: "vehicleType"
        },
        {
            header: "Status",
            accessor: "approved",
            condition: {
                Approved: "green",
                Pending: "yellow",
                Reject: "red"
            }
        },
        {
            header: "Actions",
            options: [
                {
                    label: "Add Photos",
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

    // const rowData = [
    //     {
    //         location: "Lorem",
    //         description: "Lorem",
    //         vehicleNumber: "Lorem",
    //         vehicleType: "Lorem",
    //         approved: "Approved"
    //     },
    //     {
    //         location: "Lorem",
    //         description: "Lorem",
    //         vehicleNumber: "Lorem",
    //         vehicleType: "Lorem",
    //         approved: "Pending"
    //     }
    // ]

    const AddNewAccidentReport = () => {

        const [errorMessage, setErrorMessage] = useState<any>({})
        const {form, handleOnChange} = useInput()
        const dispatch: AppDispatch = useDispatch()
        const [isLoading, setIsLoading] = useState<boolean>(false)
        const toast = useToast()
        const confirm = useConfirmation();

        const saveActionHandler = async () => {

            AddAccidentReportSchema.validate(form, {abortEarly: false}).then(
                async (result) => {
                    const formData = new FormData()
                    setErrorMessage({})
                    setIsLoading(true)

                    formData.append("location", result.location)
                    formData.append("description", result.description)
                    formData.append("vehicleNumber", result.vehicleNumber)
                    formData.append("vehicleType", result.vehicleType)
                    attachment.forEach((item: any) => {
                        formData.append("files", item)
                    })
                    const response = await dispatch(AddAccidentReportAction("accident", formData))
                    console.log(response)
                    setIsLoading(false)
                    toast({
                        title: 'Successful',
                        description: "Add new accident report successful",
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    })
                    onClose()
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

        const lineCloseButtonFunction = useCallback((index: number) => {
            confirm({
                variant: "danger",
                catchOnCancel: true,
                title: "Are you sure you want to remove this attachment?",
            }).then(() => {
                const filteredList = attachment.filter((item: any) => {
                    return attachment.indexOf(item) !== index
                })
                setAttachment([...filteredList])
            })
        }, [attachment])
        // useEffect(() => {
        //     getData()
        // }, [isOpen])

        // async function getData() {
        //     let departments: any = await (dispatch(getOrganizationList()))
        //     setOrganizationState(departments.data)
        // }

        return (
            <Modal closeOnOverlayClick={false} size="lg" isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Add Accident Report</ModalHeader>
                    <ModalBody>
                        <Grid
                            templateRows="repeat(2, 1fr)"
                            templateColumns="repeat(2, 1fr)"
                            gap={4}
                        >
                            <GridItem>
                                <FormControl>
                                    <FormLabel color={"gray.500"} fontSize={'sm'}>Location</FormLabel>
                                    <Input onChange={handleOnChange}
                                           size="sm"
                                           name={'location'}
                                           placeholder="Enter Location"
                                           color={"gray.700"}
                                    />
                                    {errorMessage.location ?
                                        <span><Text color='red'
                                                    fontSize='sm'>{errorMessage.location}</Text></span> : null}
                                </FormControl>
                            </GridItem>
                            <GridItem>
                                <FormControl>
                                    <FormLabel color={"gray.500"} fontSize={'sm'}>Description</FormLabel>
                                    <Input onChange={handleOnChange}
                                           size="sm"
                                           name={'description'}
                                           placeholder="Enter Description"
                                           color={"gray.700"}
                                    />
                                    {errorMessage.description ?
                                        <span><Text color='red'
                                                    fontSize='sm'>{errorMessage.description}</Text></span> : null}
                                </FormControl>
                            </GridItem>
                            <GridItem>
                                <FormControl>
                                    <FormLabel color={"gray.500"} fontSize={'sm'}>Vehicle Number</FormLabel>
                                    <Input onChange={handleOnChange}
                                           size="sm"
                                           name={'vehicleNumber'}
                                           placeholder="Enter Vehicle Number"
                                           color={"gray.700"}
                                    />
                                    {errorMessage.vehicleNumber ?
                                        <span><Text color='red'
                                                    fontSize='sm'>{errorMessage.vehicleNumber}</Text></span> : null}
                                </FormControl>
                            </GridItem>
                            <GridItem>
                                <FormLabel color={"gray.500"} fontSize={'sm'}>Select Vehicle Type</FormLabel>
                                <Select size={'sm'} name={'vehicleType'} onChange={handleOnChange}
                                        placeholder='Select Vehicle Type'>
                                    <option value="bike">Bike</option>
                                    <option value="car">Car</option>
                                    <option value="Van">Van</option>
                                    <option value="bus">Bus</option>
                                    <option value="Lorry">Lorry</option>
                                </Select>
                                {errorMessage.vehicleType ?
                                    <span><Text color='red'
                                                fontSize='sm'>{errorMessage.vehicleType}</Text></span> : null}
                            </GridItem>
                        </Grid>
                        {attachment.length > 0 ?
                            <ShowAttachments title={'Attachments'} lineCloseButtonFunction={lineCloseButtonFunction}
                                             onOpenModel={onAwardOpen}
                                             state={attachment}/> :
                            <AddNewAttachment title={'Attachments'} onOpenModel={onAwardOpen}/>}
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="solid" mr={3} onClick={onClose} size="sm">
                            Cancel
                        </Button>
                        <Button onClick={saveActionHandler} isLoading={isLoading} colorScheme="blue" mr={3} size="sm">
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

            <AddNewAccidentReport/>
            <AddAwardsModel attachment={attachment} setAttachment={setAttachment}
                            modelMethods={{
                                isOpen: isAwardOpen,
                                onOpen: onAwardOpen,
                                onClose: onAwardClose
                            }}/>

        </>
    )
}

export default AccidentReportPage