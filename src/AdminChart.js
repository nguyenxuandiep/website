// AdminChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
// Register the plugin
import { Chart } from 'chart.js';
Chart.register(ChartDataLabels);

const AdminChart = ({ data }) => {
    const total = Object.values(data).reduce((sum, value) => sum + value, 0);
    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: 'Tỷ lệ chọn (%)',
                data: Object.values(data).map((value) => (value / total) * 100),
                backgroundColor: [
                    'rgba(123, 104, 238, 0.2)', // New color
                    'rgba(50, 205, 50, 0.2)', // New color
                    'rgba(255, 140, 0, 0.2)', // New color
                    'rgba(255, 69, 0, 0.2)', // New color
                    'rgba(138, 43, 226, 0.2)', // New color
                    'rgba(60, 179, 113, 0.2)', // New color
                ],
                borderColor: [
                    'rgba(123, 104, 238, 1)', // New color
                    'rgba(50, 205, 50, 1)', // New color
                    'rgba(255, 140, 0, 1)', // New color
                    'rgba(255, 69, 0, 1)', // New color
                    'rgba(138, 43, 226, 1)', // New color
                    'rgba(60, 179, 113, 1)', // New color
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            datalabels: {
                formatter: (value) => value.toFixed(1) + '%',
                color: '#000',
                anchor: 'end',
                align: 'start',
                offset: -10,
                font: {
                    weight: 'bold',
                    size: 12,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return value + '%'; // Add % to y-axis labels
                    },
                },
            },
        },
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div style={{ width: '60%' }}>
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
};

export default AdminChart;
