import {useToast} from '@chakra-ui/react'

const ShowToast = (data: any) => {
    const toast = useToast()

    toast({
        title: data.title,
        description: data.description,
        status: data.status,
        duration: 9000,
        isClosable: true,
    })
}

export default ShowToast