// RegistrationChart.js

import React from 'react';
import { Bar } from 'react-chartjs-2';

const RegistrationChart = ({ filteredData }) => {
    const getChartData = () => {
        const types = {};
        filteredData.forEach((row) => {
            const type = row[3]; // Assuming type is in the 4th column (index 3)
            if (types[type]) {
                types[type]++;
            } else {
                types[type] = 1;
            }
        });

        const labels = Object.keys(types);
        const data = Object.values(types);

        return {
            labels: labels,
            datasets: [
                {
                    label: 'Registrations by Type',
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
                    hoverBorderColor: 'rgba(54, 162, 235, 1)',
                    data: data,
                },
            ],
        };
    };

    return (
        <div className="mt-4">
            <Bar
                data={getChartData()}
                options={{
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                }}
            />
        </div>
    );
};

export default RegistrationChart;
