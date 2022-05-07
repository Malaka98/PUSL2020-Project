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
import {useGetQuery} from "../../service/resource-api.service";

const DashboardPage = () => {

    const {isLoading, data} = useGetQuery({doc: "get_card_details"})

    // const [receivedApps, setReceivedApp] = useState(0)
    // const [approvedApps, setApprovedApp] = useState(0)
    // const [pendingApps, setPendingApp] = useState(0)
    // const [rejectedApps, setRejectedApp] = useState(0)


    const cardData: any = [
        {
            label: 'Registered User',
            value: data?.registeredUser,
            percentage: data?.registeredUserPercentage,
            path: '/app/application/received'
        },
        {
            label: 'Approved Accident Report',
            value: data?.approvedAccident,
            percentage: data?.approvedPercentage,
            path: '/app/application/approved'
        },
        {
            label: 'Pending Accident Report',
            value: data?.pendingAccident,
            percentage: data?.pendingPercentage,
            path: '/app/application/pending'
        },
        {
            label: 'Rejected Accident Report',
            value: data?.rejectedAccident,
            percentage: data?.rejectedPercentage,
            path: '/app/application/rejected'
        }
    ]

    return (
        <Box>
            <Stack w={'100%'}>
                <SimpleGrid columns={{base: 1, md: 2, xl: 4}} spacing="6">
                    {cardData.map((stat: any, idx: any) => (
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