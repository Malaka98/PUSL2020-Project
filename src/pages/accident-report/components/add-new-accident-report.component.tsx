import React, {useCallback, useState} from "react";
import useInput from "../../../hooks/use-input.hook";
import {AppDispatch} from "../../../store/store";
import {useDispatch} from "react-redux";
import {
    Button,
    FormControl, FormLabel,
    Grid,
    GridItem, Input,
    Modal,
    ModalBody,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Select, Text,
    useToast
} from "@chakra-ui/react";
import {useConfirmation} from "../../../components/dialog-box/alert-provider";
import {AddAccidentReportSchema} from "../schema/add-accident-report.schema";
import {AddAccidentReportAction} from "../actions/add-accident-report.action";
import ShowAttachments from "./show-attachment.component";
import AddNewAttachment from "./add-new-attachment.component";

const AddNewAccidentReportComponent = ({attachment, setAttachment, modelMethods}: any) => {

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
                modelMethods.onClose()
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
        <Modal closeOnOverlayClick={false} size="lg" isOpen={modelMethods.isOpen} onClose={modelMethods.onClose} isCentered>
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
                                <option value="van">Van</option>
                                <option value="bus">Bus</option>
                                <option value="lorry">Lorry</option>
                            </Select>
                            {errorMessage.vehicleType ?
                                <span><Text color='red'
                                            fontSize='sm'>{errorMessage.vehicleType}</Text></span> : null}
                        </GridItem>
                    </Grid>
                    {attachment.length > 0 ?
                        <ShowAttachments title={'Attachments'} lineCloseButtonFunction={lineCloseButtonFunction}
                                         onOpenModel={modelMethods.onAwardOpen}
                                         state={attachment}/> :
                        <AddNewAttachment title={'Attachments'} onOpenModel={modelMethods.onAwardOpen}/>}
                </ModalBody>
                <ModalFooter>
                    <Button variant="solid" mr={3} onClick={modelMethods.onClose} size="sm">
                        Cancel
                    </Button>
                    <Button onClick={saveActionHandler} isLoading={isLoading} colorScheme="blue" mr={3} size="sm">
                        Confirm
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>)

}

export default AddNewAccidentReportComponent