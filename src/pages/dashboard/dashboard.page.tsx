import {Box, Flex, Text, Heading, HStack, Progress, SimpleGrid, Stack} from '@chakra-ui/react'
import {StatCard} from "../../components/stat-card/stat-card.component";
import {useDispatch} from "react-redux";
// import {getReceivedApplications} from "../received-applications/actions/received-application-page.action";
import React, {useEffect, useState} from "react";
// import getPendingApplicationsAction from "../pending-applications/actions/pending-applications-page.actions";
// import getApprovedApplicationsAction from "../approved-applications/actions/approved-applications-page.actions";
// import getRejectedApplicationsAction from "../rejected-applications/actions/reject-applications-page.action";
import SimpleLineChart from "../../components/charts/simple-line-chart.component";
import RichPieChart from "../../components/charts/pie-chart.component";
import RichRadarChart from "../../components/charts/radar-chart.component";
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

    const chartData = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

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
                        <Heading size={"sm"}>Patent Applications</Heading>
                    </HStack>
                    <BarChartNoPadding/>
                </Stack>

                <Stack borderRadius={8} shadow={"md"} bg={"white"} p={2} pe={6} h={400}>
                    <HStack m={3}>
                        <Heading size={"sm"}>Application Summery</Heading>
                    </HStack>
                    <RichPieChart/>
                </Stack>
            </SimpleGrid>

            {/*<Flex direction="column" w="100%">*/}
            {/*    <Flex*/}
            {/*        direction="column"*/}
            {/*        mt="24px"*/}
            {/*        mb="10px"*/}
            {/*        alignSelf="flex-start"*/}
            {/*    >*/}
            {/*        <Text*/}
            {/*            fontSize="lg"*/}
            {/*            color={"black"}*/}
            {/*            fontWeight="bold"*/}
            {/*            mb="6px"*/}
            {/*        >*/}
            {/*            Running Activities*/}
            {/*        </Text>*/}
            {/*        <Text fontSize="md" fontWeight="medium" color="gray.400">*/}
            {/*            <Text as="span" color="green.400" fontWeight="bold">*/}
            {/*                (+23%)*/}
            {/*            </Text>{" "}*/}
            {/*            than last week*/}
            {/*        </Text>*/}
            {/*    </Flex>*/}
            {/*    <SimpleGrid gap={{sm: "12px"}} columns={4}>*/}
            {/*        <Flex direction="column" bg={"white"} p={5} borderRadius={8} shadow={"md"}>*/}
            {/*            <Flex alignItems="center">*/}
            {/*                <Text fontSize="sm" color="gray.400" fontWeight="semibold">*/}
            {/*                    Users*/}
            {/*                </Text>*/}
            {/*            </Flex>*/}
            {/*            <Text*/}
            {/*                fontSize="lg"*/}
            {/*                color={"black"}*/}
            {/*                fontWeight="bold"*/}
            {/*                mb="6px"*/}
            {/*                my="6px"*/}
            {/*            >*/}
            {/*                14582*/}
            {/*            </Text>*/}
            {/*            <Progress*/}
            {/*                colorScheme="teal"*/}
            {/*                borderRadius="12px"*/}
            {/*                h="5px"*/}
            {/*                value={92}*/}
            {/*            />*/}
            {/*        </Flex>*/}
            {/*        <Flex direction="column" bg={"white"} p={5} borderRadius={8} shadow={"md"}>*/}
            {/*            <Flex alignItems="center">*/}
            {/*                <Text fontSize="sm" color="gray.400" fontWeight="semibold">*/}
            {/*                    Collaboration*/}
            {/*                </Text>*/}
            {/*            </Flex>*/}
            {/*            <Text*/}
            {/*                fontSize="lg"*/}
            {/*                color={"black"}*/}
            {/*                fontWeight="bold"*/}
            {/*                mb="6px"*/}
            {/*                my="6px"*/}
            {/*            >*/}
            {/*                75*/}
            {/*            </Text>*/}
            {/*            <Progress*/}
            {/*                colorScheme="teal"*/}
            {/*                borderRadius="12px"*/}
            {/*                h="5px"*/}
            {/*                value={80}*/}
            {/*            />*/}
            {/*        </Flex>*/}
            {/*        <Flex direction="column" bg={"white"} p={5} borderRadius={8} shadow={"md"}>*/}
            {/*            <Flex alignItems="center">*/}
            {/*                <Text fontSize="sm" color="gray.400" fontWeight="semibold">*/}
            {/*                    Running Tasks*/}
            {/*                </Text>*/}
            {/*            </Flex>*/}
            {/*            <Text*/}
            {/*                fontSize="lg"*/}
            {/*                color={"black"}*/}
            {/*                fontWeight="bold"*/}
            {/*                mb="6px"*/}
            {/*                my="6px"*/}
            {/*            >*/}
            {/*                5004*/}
            {/*            </Text>*/}
            {/*            <Progress*/}
            {/*                colorScheme="teal"*/}
            {/*                borderRadius="12px"*/}
            {/*                h="5px"*/}
            {/*                value={65}*/}
            {/*            />*/}
            {/*        </Flex>*/}
            {/*        <Flex direction="column" bg={"white"} p={5} borderRadius={8} shadow={"md"}>*/}
            {/*            <Flex alignItems="center">*/}
            {/*                <Text fontSize="sm" color="gray.400" fontWeight="semibold">*/}
            {/*                    Funded Projects*/}
            {/*                </Text>*/}
            {/*            </Flex>*/}
            {/*            <Text*/}
            {/*                fontSize="lg"*/}
            {/*                color={"black"}*/}
            {/*                fontWeight="bold"*/}
            {/*                mb="6px"*/}
            {/*                my="6px"*/}
            {/*            >*/}
            {/*                100*/}
            {/*            </Text>*/}
            {/*            <Progress*/}
            {/*                colorScheme="teal"*/}
            {/*                borderRadius="12px"*/}
            {/*                h="5px"*/}
            {/*                value={20}*/}
            {/*            />*/}
            {/*        </Flex>*/}
            {/*    </SimpleGrid>*/}
            {/* </Flex>*/}
        </Box>
    )
}

export default DashboardPage