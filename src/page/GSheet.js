import React, { useEffect, useState, useRef } from 'react';
import { gapi } from 'gapi-script';
import { GoogleSheetInfo } from '../google-sheet-info';
import Chart from 'chart.js/auto';

export default function GSheet() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [departmentCounts, setDepartmentCounts] = useState({});
    const chartRef = useRef(null);
    const pieChartRef = useRef(null);

    useEffect(() => {
        const initClient = () => {
            gapi.load('client:auth2', () => {
                gapi.client
                    .init({
                        apiKey: GoogleSheetInfo.apiKey,
                        clientId: GoogleSheetInfo.clientId,
                        scope: GoogleSheetInfo.scope,
                        discoveryDocs: GoogleSheetInfo.discoveryDocs,
                    })
                    .then(() => {
                        fetchData();
                    });
            });
        };

        initClient();
    }, []);

    const fetchData = async () => {
        try {
            const response = await gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: GoogleSheetInfo.spreadsheetId,
                range: 'Data1!A:F',
            });
            const data = response.result.values || [];
            setData(data);
            setFilteredData(data);

            // Calculate department counts
            const counts = {};
            data.forEach((row) => {
                const department = row[4]; // Assuming department is in the 5th column
                if (department) {
                    counts[department] = counts[department] ? counts[department] + 1 : 1;
                }
            });
            setDepartmentCounts(counts);
        } catch (error) {
            console.error('Error fetching data from spreadsheet:', error);
        }
    };

    useEffect(() => {
        const lowercasedSearch = search.toLowerCase();
        const filtered = data.filter((row) => {
            const [name, email, phone, type, department] = row;
            return (
                (name && name.toLowerCase().includes(lowercasedSearch)) ||
                (email && email.toLowerCase().includes(lowercasedSearch)) ||
                (phone && phone.toLowerCase().includes(lowercasedSearch)) ||
                (type && type.toLowerCase().includes(lowercasedSearch)) ||
                (department && department.toLowerCase().includes(lowercasedSearch))
            );
        });
        setFilteredData(filtered);
    }, [search, data]);

    const handleDelete = async (index) => {
        try {
            // Get the ID of the data row to delete
            const rowIdToDelete = filteredData[index][3]; // Assuming the ID is stored in column 7 (index 6)

            // If no ID found, handle error or data might not update correctly
            if (!rowIdToDelete) {
                console.error('Unable to determine ID of data row');
                return;
            }

            // Delete data row from Google Sheets using ID
            await gapi.client.sheets.spreadsheets.batchUpdate({
                spreadsheetId: GoogleSheetInfo.spreadsheetId,
                resource: {
                    requests: [
                        {
                            deleteDimension: {
                                range: {
                                    sheetId: GoogleSheetInfo.sheetId, // Sheet ID containing data
                                    dimension: 'ROWS',
                                    startIndex: index, // Starting from index row
                                    endIndex: index + 1, // Ending at next row
                                },
                            },
                        },
                    ],
                },
            });

            // Delete data row from app's state data
            const updatedData = [...filteredData];
            updatedData.splice(index, 1);
            setFilteredData(updatedData);
        } catch (error) {
            console.error('Error deleting data from spreadsheet:', error);
        }
    };

    useEffect(() => {
        // Ensure bar chart canvas element exists
        const ctx = document.getElementById('departmentChart');
        if (ctx) {
            // Destroy existing bar chart if it exists
            if (chartRef.current) {
                chartRef.current.destroy();
            }

            // Initialize new bar chart instance
            chartRef.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Object.keys(departmentCounts),
                    datasets: [
                        {
                            label: 'Number of Registrations',
                            data: Object.values(departmentCounts),
                            backgroundColor: 'rgba(54, 162, 235, 0.5)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            precision: 0,
                        },
                    },
                },
            });
        }
    }, [departmentCounts]);

    useEffect(() => {
        // Ensure pie chart canvas element exists
        const ctxPie = document.getElementById('departmentPieChart');
        if (ctxPie) {
            // Destroy existing pie chart if it exists
            if (pieChartRef.current) {
                pieChartRef.current.destroy();
            }

            // Initialize new pie chart instance
            pieChartRef.current = new Chart(ctxPie, {
                type: 'pie',
                data: {
                    labels: Object.keys(departmentCounts),
                    datasets: [
                        {
                            label: 'Number of Registrations',
                            data: Object.values(departmentCounts),
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)',
                                'rgba(153, 102, 255, 0.5)',
                                'rgba(255, 159, 64, 0.5)',
                                'rgba(255, 99, 132, 0.5)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(255, 99, 132, 1)',
                            ],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}%`;
                                },
                            },
                        },
                    },
                },
            });
        }
    }, [departmentCounts]);

    return (
        <div>
            <div style={{ height: '100px' }}></div>
            <div className="container py-5">
                <div className="row justify-content-center mb-4">
                    <div className="col-md-8">
                        <input
                            type="text"
                            placeholder="Search by Name, Email, Phone, Type, or Department"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="form-control"
                            style={{ height: '50px' }}
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h1 className="text-center mb-4 text-uppercase">Registration List</h1>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Department</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row[0]}</td>
                                            <td>{row[1]}</td>
                                            <td>{row[2]}</td>
                                            <td>{row[3]}</td>
                                            <td>{row[4]}</td>
                                            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                                <button className="btn btn-primary" onClick={() => handleDelete(index)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="row justify-content-center mt-4">
                            <div className="col-md-6">
                                <canvas id="departmentPieChart"></canvas>
                            </div>
                            <div className="col-md-6">
                                <canvas id="departmentChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
