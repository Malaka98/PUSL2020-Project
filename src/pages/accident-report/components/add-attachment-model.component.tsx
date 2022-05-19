import {useDispatch} from "react-redux";
import {
    Box,
    Button,
    FormLabel,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useToast
} from "@chakra-ui/react";
import React, {useState} from "react";

let file: any
const AddAwardsModel = ({attachment, setAttachment, modelMethods}: any) => {
    const toast = useToast()
    const toastIdRef = React.useRef<any>()
    // const [errorMessage, setErrorMessage] = useState<any>({});
    const [showSpinner, setShowSpinner] = useState<any>(false);
    const dispatch = useDispatch()
    let fileName = ''

    function onFileSelected(event: any) {
        file = event.currentTarget.files[0]
        return file.name
    }

    function onUpload() {
        // setErrorMessage({})
        setShowSpinner(true)
        setAttachment([...attachment, file])
        let res = true
        setShowSpinner(false)
        modelMethods.onClose()
        if (res) {
            // setAttachment([])
            toastIdRef.current = toast({
                title: 'Saved',
                description: 'Your file has been successfully attached',
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        } else {
            toastIdRef.current = toast({
                title: 'error',
                description: 'Failed to attach',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
    }

    return (
        <>
            <Modal size="xl" isOpen={modelMethods.isOpen} onClose={modelMethods.onClose} isCentered>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Add Attachment</ModalHeader>
                    <ModalBody>
                        <Box width={"100%"} mt={"10px"}>
                            <FormLabel color={"gray.500"} fontSize={'sm'}>Attachments</FormLabel>
                            <input type="file" id="myfile" name="myfile" accept="application/pdf,image/jpeg"
                                   onChange={(event) => {
                                       fileName = onFileSelected(event)
                                   }}/>
                        </Box>
                        <Box width={"100%"} mt={"10px"}>
                            <Text> {fileName} </Text>
                        </Box>

                    </ModalBody>
                    <ModalFooter>
                        <Button size="sm" variant="solid" mr={3} onClick={modelMethods.onClose}>
                            Cancel
                        </Button>
                        <Button size="sm" colorScheme="blue" onClick={onUpload}
                                isLoading={showSpinner}
                                spinnerPlacement='start'
                                loadingText='Saving'
                        >
                            Confirm
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default React.memo(AddAwardsModel)