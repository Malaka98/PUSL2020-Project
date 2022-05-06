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
import AddNewAccidentReportComponent from "./components/add-new-accident-report.component";

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

            <AddNewAccidentReportComponent attachment={attachment} setAttachment={setAttachment}
                                           modelMethods={{
                                               isOpen: isOpen,
                                               onOpen: onOpen,
                                               onClose: onClose,
                                               onAwardOpen: onAwardOpen
                                           }}/>
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