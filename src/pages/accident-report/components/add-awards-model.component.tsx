import {useDispatch} from "react-redux";
import {
    Box, Button,
    FormControl,
    FormLabel,
    Stack, Input,
    Modal,
    ModalBody,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Text, useToast
} from "@chakra-ui/react";
import React, {useState} from "react";
import * as yup from "yup";
import useInput from "../../../hooks/use-input.hook";


const AddAwardsModel = ({attachment, setAttachment, modelMethods}: any) => {
    const {
        form: childForm,
        handleOnChange: handleChildOnChange,
        handleOnChangeForValue: handleChildOnChangeForValue,
        setFormData: setChildFormData,
        clearAllFields: clearChildForm
    } = useInput()
    const toast = useToast()
    const toastIdRef = React.useRef<any>()
    const [errorMessage, setErrorMessage] = useState<any>({});
    const [showSpinner, setShowSpinner] = useState<any>(false);
    const dispatch = useDispatch()
    let fileName = ''

    function onFileSelected(event: any) {
        // formData = new FormData()
        // const file = event.currentTarget.files[0]
        // formData.append("docname", "new-project-application-1");
        // formData.append("doctype", "Project Application");
        // formData.append("folder", "Home");
        // formData.append("file", file, file.name);
        // formData.append("fieldname", "file");
        // return file.name
    }

    const handleOnChangeValueForChild = (data: any) => {
        setAttachment([...attachment, data])
    };

    function onUpload() {
        // setErrorMessage({})
        // setShowSpinner(true)
        // FormValidateObject.validate(childForm, {abortEarly: false}).then(async () => {
        //         let res = await dispatch(uploadFileAction(formData, '', handleOnChangeValueForChild, childForm))
        //         clearChildForm()
        //         setShowSpinner(false)
        //         modelMethods.onClose()
        //         if (res) {
        //             toastIdRef.current = toast({
        //                 title: 'Saved',
        //                 description: 'Your file has been successfully attached',
        //                 status: 'success',
        //                 duration: 5000,
        //                 isClosable: true,
        //             })
        //         } else {
        //             toastIdRef.current = toast({
        //                 title: 'error',
        //                 description: 'Failed to attach',
        //                 status: 'error',
        //                 duration: 5000,
        //                 isClosable: true,
        //             })
        //         }
        //     }
        // ).catch(function (err) {
        //     setShowSpinner(false)
        //     setErrorMessage({})
        //     err?.inner?.forEach((e: any) => {
        //         console.log({[e.path]: e.message}, 'err')
        //         setErrorMessage((state: any) => ({...state, ...{[e.path]: e.message}}))
        //     });
        //     toastIdRef.current = toast({
        //         title: ' Error',
        //         description: "Fill form correctly",
        //         status: 'error',
        //         duration: 5000,
        //         isClosable: true,
        //     })
        // });
    }

    return (
        <>
            <Modal size="xl" isOpen={modelMethods.isOpen} onClose={modelMethods.onClose} isCentered>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Add Attachment</ModalHeader>
                    <ModalBody>
                        <Stack direction={{base: 'column', md: 'row'}} spacing={"30px"}>
                            <FormControl>
                                <FormLabel color={"gray.500"} fontSize={'sm'}>Award</FormLabel>
                                <Input name='title' onChange={handleChildOnChange} size="sm"
                                       color={"gray.700"}/>
                                {errorMessage.title ?
                                    <span><Text color='red' fontSize='sm'>{errorMessage.title}</Text></span> : null}
                            </FormControl>

                            <FormControl>
                                <FormLabel color={"gray.500"} fontSize={'sm'}>Year</FormLabel>
                                <Input size="sm" name='description' onChange={handleChildOnChange} type='number'
                                       color={"gray.700"}/>
                                {errorMessage.description ?
                                    <span><Text color='red'
                                                fontSize='sm'>{errorMessage.description}</Text></span> : null}
                            </FormControl>
                        </Stack>
                        <Box width={"100%"} mt={"10px"}>
                            <FormLabel color={"gray.500"} fontSize={'sm'}>Attachments</FormLabel>
                            <input type="file" id="myfile" name="myfile" accept="application/pdf,image/jpeg"
                                   onChange={(event) => {
                                       // fileName = onFileSelected(event)
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
const FormValidateObject = yup.object().shape({
    title: yup.string().required('Award name is required'),
    description: yup.number().required('Year is required').typeError('Invalid Year. Please enter a valid "year" '),
});

export default AddAwardsModel