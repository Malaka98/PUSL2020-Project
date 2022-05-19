import {useRef} from "react";
import TableComponent from "../../components/table/table.component";
import PageHeader from "../../components/page-header/page-header.component";
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
    useDisclosure, useToast
} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";
import {AppDispatch} from "../../store/store";
import {useDispatch} from "react-redux";
import {useGetAllAccidentListQuery} from "../../service/accident-api.service";
import {AccidentListAction} from "./actions/accident-list.action";


const AccidentListPage = () => {

    const dispatch: AppDispatch = useDispatch()
    const {isOpen, onOpen, onClose} = useDisclosure();
    const navigate = useNavigate()
    const toastIdRef = useRef<any>()
    const toast = useToast()

    const {isLoading, data} = useGetAllAccidentListQuery({"doc": "get_all_accident"})

    async function statusChangeActionHandler(id: number, status: string) {
        const response: any = await dispatch(AccidentListAction("change_status", {
            "id": id,
            "status": status
        }))
        if (response.status === 'error') {
            toastIdRef.current = toast({
                title: 'Failed!',
                description: "Something went wrong",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        } else {
            toastIdRef.current = toast({
                title: 'Status!',
                description: "Status Changed successfully",
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
            accessor: "status",
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
                    label: "Approved",
                    action: function (rowItem: any) {
                        statusChangeActionHandler(rowItem.id, "Approved")
                    }
                },
                {
                    label: "Reject",
                    action: function (rowItem: any) {
                        statusChangeActionHandler(rowItem.id, "Reject")
                    }
                }
            ]
        }
    ]

    return (
        <>

            <PageHeader   title={'Departments'}/>
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

            <TableComponent columns={COLUMN} data={data} />
        </>
    )
}

export default AccidentListPage

// const rowData = [
//     {
//         location: "Lorem",
//         description: "Lorem",
//         vehicleNumber: "Lorem",
//         vehicleType: "Lorem",
//         approved: "Approved"
//     },
// ]