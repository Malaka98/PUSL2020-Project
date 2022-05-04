import React, {useState} from "react";
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
    ModalOverlay, Text, useDisclosure,
    useToast
} from "@chakra-ui/react";
import {AddAccidentReportSchema} from "../schema/add-accident-report.schema";
import {AddAccidentReportAction} from "../actions/add-accident-report.action";
import ShowAttachments from "./show-attachment.component";
import AddNewAttachment from "./add-new-attachment.component";
import {useConfirmation} from "../../../components/dialog-box/alert-provider";
import AddAwardsModel from "./add-awards-model.component";

const AddPhotosComponent = ({disclosure}: any) => {

    const [errorMessage, setErrorMessage] = useState<any>({})
    const {form, handleOnChange} = useInput()
    const dispatch: AppDispatch = useDispatch()
    const {isOpen: isAwardOpen, onOpen: onAwardOpen, onClose: onAwardClose} = useDisclosure();
    const [isLoading, setIsLoading] = useState(false) as any
    const [attachment, setAttachment] = useState<any>([])
    const toast = useToast()
    const {onOpen} = useDisclosure()
    const confirm = useConfirmation();
    const [award, setAward] = useState<any>([])

    const saveActionHandler = async () => {

        AddAccidentReportSchema.validate(form, {abortEarly: false}).then(
            async (result) => {
                setErrorMessage({})
                setIsLoading(true)
                // await dispatch(ResourceApiService.util.invalidateTags(['Get']))
                const response = await dispatch(AddAccidentReportAction("accident", result))
                console.log(response)
                setIsLoading(false)
                toast({
                    title: 'Successful',
                    description: "Add new accident report successful",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
                disclosure.onClose()
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

    const lineCloseButtonFunction = (indexx: any, lineType: string) => {

        if (lineType == 'award') {

            confirm({
                variant: "danger",
                catchOnCancel: true,
                title: "Are you sure you want to remove this attachment?",
                //description: "You will be redirected to the login screen"
            }).then(async () => {
                const filteredList = attachment.filter((item: any) => {
                    return attachment.indexOf(item) != indexx
                })
                setAttachment([...filteredList])
            })

        }
    }

    return (
        <>
            <Modal closeOnOverlayClick={false} size="lg" isOpen={disclosure.isOpen} onClose={disclosure.onClose} isCentered>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Add Accident Report</ModalHeader>
                    <ModalBody>
                        {attachment.length > 0 ?
                            <ShowAttachments page={'add_new_project'} lineType={'award'} title={'Attachments'}
                                             lineCloseButtonFunction={lineCloseButtonFunction}
                                             onOpenModel={onAwardOpen}
                                             state={attachment}/> :
                            <AddNewAttachment title={'Attachments'} onOpenModel={onAwardOpen}/>}
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="solid" mr={3} onClick={disclosure.onClose} size="sm">
                            Cancel
                        </Button>
                        <Button onClick={saveActionHandler} isLoading={isLoading} colorScheme="blue" mr={3} size="sm">
                            Confirm
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <AddAwardsModel attachment={award} setAttachment={setAward}
                            modelMethods={{
                                isOpen: isAwardOpen,
                                onOpen: onAwardOpen,
                                onClose: onAwardClose
                            }}/>
        </>
    )

}

export default AddPhotosComponent