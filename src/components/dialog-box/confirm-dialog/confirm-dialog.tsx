import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay, Button
} from "@chakra-ui/react";
import * as React from "react";

export const ConfirmDialog = ({isOpen, onCancel, onConfirm, ...rest}: any) => {

    // const [isOpen, setIsOpen] = React.useState(false)
    // const onClose = () => setIsOpen(false)
    const cancelRef: any = React.useRef()

    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onCancel}
        >
            <AlertDialogOverlay>
                <AlertDialogContent mx={"21px"}>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        {rest.title}
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        {rest.description}
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button size={'sm'} onClick={onCancel}>
                            Cancel
                        </Button>
                        <Button size={'sm'} colorScheme='red' onClick={onConfirm} ml={3}>
                            Confirm
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}
