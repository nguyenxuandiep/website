import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Carousel from './DangKyNgay/Carousel/Carousel';

ChartJS.register(ArcElement, Tooltip, Legend);

function GSheet() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://sheet.best/api/sheets/e8196369-c6a9-4775-bcd0-d93d1ca5d86a';

            try {
                const response = await axios.get(url);
                const rows = response.data || [];
                console.log('Fetched data:', rows); // Log fetched data
                if (rows.length > 0) {
                    console.log('Keys of the first row:', Object.keys(rows[0])); // Log keys of the first row
                }
                setData(rows);
            } catch (error) {
                setError(`Error fetching data: ${error.message}`);
                console.error('Error fetching data: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Process the data to count the number of each specialization
    const countSpecializations = () => {
        const counts = {};
        data.forEach((row) => {
            const specialization = row['Ngành học'] || 'Unknown';
            if (specialization) {
                counts[specialization] = (counts[specialization] || 0) + 1;
            }
        });
        console.log('Specialization counts:', counts); // Log counts
        return counts;
    };

    // Prepare the data for the pie chart
    const prepareChartData = () => {
        const counts = countSpecializations();
        if (Object.keys(counts).length === 0) {
            return { labels: [], datasets: [] };
        }
        const chartData = {
            labels: Object.keys(counts),
            datasets: [
                {
                    data: Object.values(counts),
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
                },
            ],
        };
        console.log('Chart Data:', chartData); // Log chart data
        return chartData;
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const chartData = prepareChartData();
    if (chartData.labels.length === 0) {
        return <div>No data available to display the chart.</div>;
    }

    return (
        <div>
            <h2>Biểu đồ tròn từ Google Sheets</h2>
            <div className="flex justify-center">
                <div className="w-1/2">
                    <Pie data={chartData} />
                </div>
            </div>
            <Carousel />
        </div>
    );
}

export default GSheet;
