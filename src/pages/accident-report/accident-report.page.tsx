import React, {useRef, useState} from "react";
import {
    Box,
    Button,
    Input,
    InputGroup,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    useDisclosure,
    useToast
} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import PageHeader from "../../components/page-header/page-header.component";
import TableComponent from "../../components/table/table.component";
import {useGetAccidentListQuery} from "../../service/accident-api.service";
import AddAwardsModel from "./components/add-attachment-model.component";
import AddNewAccidentReportComponent from "./components/add-new-accident-report.component";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store";
import {getAccidentViewItems} from "../../store/common/viewAccidentSlice";
import {useNavigate} from "react-router-dom";
import {DeleteAccident} from "./actions/add-accident-report.action";

const AccidentReportPage = () => {

    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const {isOpen, onOpen, onClose} = useDisclosure();
    const toast = useToast()
    const toastIdRef = useRef<any>()
    const {isOpen: isAwardOpen, onOpen: onAwardOpen, onClose: onAwardClose} = useDisclosure();
    const [attachment, setAttachment] = useState<Array<any>>([])

    const {isLoading, data} = useGetAccidentListQuery({"doc": "accident"})

    const onSelected = (data: any) => {
        dispatch(getAccidentViewItems(data))
        navigate("/app/view_accident")
    }

    const onDeleteActionHandler = async (id: number) => {
        const response: any = dispatch(DeleteAccident("accident", id))
        if (response.status === 'error') {
            toastIdRef.current = toast({
                title: 'Success!',
                description: "Accident deleted successfully",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        }
    }

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
                    label: "Delete Accident",
                    action: function (rowItem: any) {
                        console.log(rowItem)
                        onDeleteActionHandler(rowItem?.id)
                    }
                },
            ]
        }
    ]

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

            <TableComponent columns={COLUMN} data={data} onSelected={onSelected}/>

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