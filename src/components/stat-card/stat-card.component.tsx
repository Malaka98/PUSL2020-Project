import {
    HStack,
    Stack,
    Stat,
    StatArrow,
    StatGroup,
    StatHelpText,
    StatLabel,
    StatNumber,
    useColorModeValue as mode
} from '@chakra-ui/react'
import * as React from 'react'
import {useNavigate} from "react-router-dom";
import {FcComboChart} from "react-icons/fc"

export interface StatCardProps {
    data: {
        label: string
        value: string | number
        path: any
        percentage: string | number
    }
}

export const StatCard = (props: StatCardProps) => {
    const {label, value, path, percentage} = props.data
    const navigate = useNavigate()

    function clickHandler() {
        navigate(path)
    }

    return (
        <Stack cursor={'pointer'}
               px="6"
               py="4"
               bg={mode('white', 'gray.700')}
               borderRadius="8px"
               boxShadow="md"
               color={mode('gray.800', 'white')} onClick={clickHandler}
        >
            <HStack spacing="4" mt="2" justifyContent={"space-between"}>
                <StatGroup>
                    <Stat>
                        <StatLabel>{label}</StatLabel>
                        <StatNumber>{value}</StatNumber>
                        <StatHelpText>
                            <StatArrow type='increase'/>
                            {percentage}
                        </StatHelpText>
                    </Stat>
                </StatGroup>
                <FcComboChart size={50}/>
            </HStack>
        </Stack>
    )
}

// const StatCard = () => {
//     return <></>
// }
//
// export default StatCard