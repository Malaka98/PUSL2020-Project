import React, {PureComponent} from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {useGetQuery} from "../../service/resource-api.service";
import {Center, Spinner} from "@chakra-ui/react";

const data = [
    {
        name: 'Bike',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Car',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    }
];

const BarChartNoPaddingComponent = () => {

    const {isLoading, data} = useGetQuery({doc: "accident_type_count_report"});

    const spinnerMarkup = (
        <Center>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </Center>

    );

    return (

        <>
            {isLoading ? spinnerMarkup :
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 0,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={20}
                    >
                        <XAxis dataKey="name" scale="point" padding={{left: 15, right: 15}}/>
                        <YAxis domain={[0, 50]}/>
                        <Tooltip/>
                        <Legend/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Bar dataKey="total_number_of_accident" fill="#8884d8" background={{fill: '#eee'}}/>
                    </BarChart>
                </ResponsiveContainer>
            }
        </>

    )
}

export default BarChartNoPaddingComponent