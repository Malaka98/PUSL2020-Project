import {Box, Heading, HStack, SimpleGrid, Stack, useToast} from '@chakra-ui/react'
import {StatCard} from "../../components/stat-card/stat-card.component";
// import {getReceivedApplications} from "../received-applications/actions/received-application-page.action";
import React, {useEffect, useState} from "react";
// import getPendingApplicationsAction from "../pending-applications/actions/pending-applications-page.actions";
// import getApprovedApplicationsAction from "../approved-applications/actions/approved-applications-page.actions";
// import getRejectedApplicationsAction from "../rejected-applications/actions/reject-applications-page.action";
import SimpleLineChart from "../../components/charts/simple-line-chart.component";
import RichPieChart from "../../components/charts/pie-chart.component";
import BarChartNoPadding from "../../components/charts/bar-chart-no-padding.component";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";
import {getDashboardItem} from "./actions/dashboard.action";
import {useNavigate} from "react-router-dom";

const DashboardPage = () => {

    // const {isLoading, data} = useGetQuery({doc: "get_card_details"})

    // const [receivedApps, setReceivedApp] = useState(0)
    // const [approvedApps, setApprovedApp] = useState(0)
    // const [pendingApps, setPendingApp] = useState(0)
    // const [rejectedApps, setRejectedApp] = useState(0)
    const toast = useToast()
    const toastIdRef = React.useRef<any>()
    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch()
    const cardData = useSelector<RootState, any>(
        state => state.cards.cardItem
    )
    const [loading, setLoading] = useState<boolean>(false)

    const getCardDetails = async () => {
        setLoading(true)
        const response: any = await dispatch(getDashboardItem())
        console.log(response)
        if (response.status == 'error') {
            toastIdRef.current = toast({
                title: 'Failed!',
                description: "you don't have permission to access this resource",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
            navigate("/")
        }
        setLoading(false)
    }

    console.log(cardData)
    useEffect(() => {
        getCardDetails()
    }, [])


    return (
        <Box>
            {
                loading ? <h1>Loading...</h1> :
                    <><Stack w={'100%'}>
                        <SimpleGrid columns={{base: 1, md: 2, xl: 4}} spacing="6">
                            {cardData.map((stat: any, idx: any) => (
                                <StatCard key={idx} data={stat}/>
                            ))}
                        </SimpleGrid>
                    </Stack><SimpleGrid columns={3} gap={7} mt={7}>

                        <Stack borderRadius={8} shadow={"md"} bg={"white"} p={2} pe={6} h={400}>
                            <HStack m={3}>
                                <Heading size={"sm"}>Project Applications</Heading>
                            </HStack>
                            <SimpleLineChart/>
                        </Stack>

                        <Stack borderRadius={8} shadow={"md"} bg={"white"} p={2} pe={6} h={400}>
                            <HStack m={3}>
                                <Heading size={"sm"}>Vehicle Accident</Heading>
                            </HStack>
                            <BarChartNoPadding/>
                        </Stack>

                        <Stack borderRadius={8} shadow={"md"} bg={"white"} p={2} pe={6} h={400}>
                            <HStack m={3}>
                                <Heading size={"sm"}>Total Accident Percentage Summery</Heading>
                            </HStack>
                            <RichPieChart/>
                        </Stack>
                    </SimpleGrid></>
            }
        </Box>
    )
}

export default DashboardPage