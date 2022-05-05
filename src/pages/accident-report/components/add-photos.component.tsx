import React, {useCallback, useState} from "react";
import useInput from "../../../hooks/use-input.hook";
import {AppDispatch} from "../../../store/store";
import {useDispatch} from "react-redux";
import {
    Button,
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
import AddAwardsModel from "./add-attachment-model.component";

const AddPhotosComponent = ({disclosure}: any) => {
    const [errorMessage, setErrorMessage] = useState<any>({})
    const {form, handleOnChange} = useInput()
    const dispatch: AppDispatch = useDispatch()
    const {isOpen: isAwardOpen, onOpen: onAwardOpen, onClose: onAwardClose} = useDisclosure();
    const [isLoading, setIsLoading] = useState(false) as any
    const [attachment, setAttachment] = useState<any>([])
    const toast = useToast()
    const confirm = useConfirmation();
    // const saveActionHandler = async () => {

    //     AddAccidentReportSchema.validate(form, {abortEarly: false}).then(
    //         async (result) => {
    //             setErrorMessage({})
    //             setIsLoading(true)
    //             // await dispatch(ResourceApiService.util.invalidateTags(['Get']))
    //             const response = await dispatch(AddAccidentReportAction("accident", result))
    //             console.log(response)
    //             setIsLoading(false)
    //             toast({
    //                 title: 'Successful',
    //                 description: "Add new accident report successful",
    //                 status: 'success',
    //                 duration: 5000,
    //                 isClosable: true,
    //             })
    //             disclosure.onClose()
    //         }
    //     ).catch((error: any) => {
    //         setErrorMessage({})
    //         error?.inner?.forEach((error: any) => {
    //             setErrorMessage((state: any) => ({...state, ...{[error.path]: error.message}}))
    //         });
    //         toast({
    //             title: 'Error',
    //             description: "Fill the form correctly ⚠",
    //             status: 'error',
    //             duration: 5000,
    //             isClosable: true,
    //         })
    //     })
    // }

    const lineCloseButtonFunction = useCallback((index: number) => {
        confirm({
            variant: "danger",
            catchOnCancel: true,
            title: "Are you sure you want to remove this attachment?",
        }).then(() => {
            const filteredList = attachment.filter((item: any) => {
                return attachment.indexOf(item) != index
            })
            setAttachment([...filteredList])
        })
    }, [attachment])

    return (
        <>
            <Modal closeOnOverlayClick={false} size="lg" isOpen={disclosure.isOpen} onClose={disclosure.onClose}
                   isCentered>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Add Accident Report</ModalHeader>
                    <ModalBody>
                        {attachment.length > 0 ?
                            <ShowAttachments title={'Attachments'} lineCloseButtonFunction={lineCloseButtonFunction}
                                             onOpenModel={onAwardOpen}
                                             state={attachment}/> :
                            <AddNewAttachment title={'Attachments'} onOpenModel={onAwardOpen}/>}
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="solid" mr={3} onClick={disclosure.onClose} size="sm">
                            Cancel
                        </Button>
                        <Button isLoading={isLoading} colorScheme="blue" mr={3} size="sm">
                            Confirm
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <AddAwardsModel attachment={attachment} setAttachment={setAttachment}
                            modelMethods={{
                                isOpen: isAwardOpen,
                                onOpen: onAwardOpen,
                                onClose: onAwardClose
                            }}/>
        </>
    )

}

export default React.memo(AddPhotosComponent)