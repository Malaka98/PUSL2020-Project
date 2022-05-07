import {Box, Heading, HStack, SimpleGrid, Stack} from '@chakra-ui/react'
import {StatCard} from "../../components/stat-card/stat-card.component";
// import {getReceivedApplications} from "../received-applications/actions/received-application-page.action";
import React, {useState} from "react";
// import getPendingApplicationsAction from "../pending-applications/actions/pending-applications-page.actions";
// import getApprovedApplicationsAction from "../approved-applications/actions/approved-applications-page.actions";
// import getRejectedApplicationsAction from "../rejected-applications/actions/reject-applications-page.action";
import SimpleLineChart from "../../components/charts/simple-line-chart.component";
import RichPieChart from "../../components/charts/pie-chart.component";
import BarChartNoPadding from "../../components/charts/bar-chart-no-padding.component";

const DashboardPage = () => {
    // const dispatch = useDispatch()
    const [receivedApps, setReceivedApp] = useState(0)
    const [approvedApps, setApprovedApp] = useState(0)
    const [pendingApps, setPendingApp] = useState(0)
    const [rejectedApps, setRejectedApp] = useState(0)
    // useEffect(() => {
    //     getValues()
    // }, [])

    // async function getValues() {
    //     const receivedApp = await dispatch(getReceivedApplications())
    //     setReceivedApp(receivedApp.length)
    //     const approvedApp = await dispatch(getApprovedApplicationsAction())
    //     setApprovedApp(approvedApp.length)
    //     const pendingApp = await dispatch(getPendingApplicationsAction())
    //     setPendingApp(pendingApp.length)
    //     const rejectedApp = await dispatch(getRejectedApplicationsAction())
    //     setRejectedApp(rejectedApp.length)
    // }

    const data: any = [
        {
            label: 'Received User Registration Applications',
            value: receivedApps,
            path: '/app/application/received'
        },
        {
            label: 'Approved User Registration Applications',
            value: approvedApps,
            path: '/app/application/approved'
        },
        {
            label: 'Pending User Registration Applications',
            value: pendingApps,
            path: '/app/application/pending'
        },
        {
            label: 'Rejected User Registration Applications',
            value: rejectedApps,
            path: '/app/application/rejected'
        }
    ]

    return (
        <Box>
            <Stack w={'100%'}>
                <SimpleGrid columns={{base: 1, md: 2, xl: 4}} spacing="6">
                    {data.map((stat: any, idx: any) => (
                        <StatCard key={idx} data={stat}/>
                    ))}
                </SimpleGrid>
            </Stack>

            <SimpleGrid columns={3} gap={7} mt={7}>

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
            </SimpleGrid>
        </Box>
    )
}

export default DashboardPage