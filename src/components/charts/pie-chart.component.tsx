import React, {PureComponent} from 'react';
import {PieChart, Pie, Sector, Cell, ResponsiveContainer} from 'recharts';

const data = [
    {name: 'Projects', value: 400},
    {name: 'Publications', value: 300},
    {name: 'Patents', value: 300},
    {name: 'IP Certificates', value: 200},
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {/*{`${(percent * 100).toFixed(0)}%`}*/}
            {`${data[index].name} ${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default class RichPieChart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={600} height={600}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="40%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell lang={entry.name} key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        );
    }
}
