import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line';
import './LineChart.css'
const LineChart = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // État pour contrôler l'ouverture/fermeture du side bar

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // Inverser l'état du side bar
    };

    const data = [
        {
            id: 'Sales',
            data: [
                { x: 'January', y: 0 },
                { x: 'February', y: 0 },
                { x: 'March', y: 0 },
                { x: 'April', y: 81 },
                { x: 'May', y: 56 },
                { x: 'June', y: 55 },
                { x: 'July', y: 40 },
            ],
        },
    ];

    return (
        <div className='lin' style={{ height: '80vh', backgroundColor: '#f0f0f0', padding: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>My line chart</h2>
            <div style={{ height: 'calc(100% - 40px)', width: '165vh' }} onClick={toggleSidebar}>
                <ResponsiveLine
                    data={data}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Month',
                        legendOffset: 36,
                        legendPosition: 'middle',
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Sales',
                        legendOffset: -40,
                        legendPosition: 'middle',
                    }}
                    colors={['green']} // Changer la couleur de la ligne en vert
                    lineWidth={4} // Rendre la ligne plus large
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1,
                                    },
                                },
                            ],
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default LineChart;
