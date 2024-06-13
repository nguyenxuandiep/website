import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import { GoogleSheetInfo } from '../google-sheet-info';
import AdminChart from '../AdminChart';
export default function GSheet() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

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
            setData(response.result.values || []);
            setFilteredData(response.result.values || []);
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
            // Lấy ra ID của hàng dữ liệu cần xoá
            const rowIdToDelete = filteredData[index][3]; // Giả sử ID hàng dữ liệu được lưu ở cột thứ 7 (index 6)

            // Nếu không có ID, có thể xảy ra lỗi hoặc dữ liệu không được cập nhật đúng cách
            if (!rowIdToDelete) {
                console.error('Không thể xác định ID của hàng dữ liệu');
                return;
            }

            // Xoá hàng dữ liệu từ Google Sheets bằng cách sử dụng ID
            await gapi.client.sheets.spreadsheets.batchUpdate({
                spreadsheetId: GoogleSheetInfo.spreadsheetId,
                resource: {
                    requests: [
                        {
                            deleteDimension: {
                                range: {
                                    sheetId: GoogleSheetInfo.sheetId, // ID của sheet chứa dữ liệu
                                    dimension: 'ROWS',
                                    startIndex: index, // Bắt đầu từ hàng thứ index
                                    endIndex: index + 1, // Kết thúc ở hàng sau đó
                                },
                            },
                        },
                    ],
                },
            });

            // Xoá hàng dữ liệu trong dữ liệu state của ứng dụng
            const updatedData = [...filteredData];
            updatedData.splice(index, 1);
            setFilteredData(updatedData);
        } catch (error) {
            console.error('Error deleting data from spreadsheet:', error);
        }
    };

    const courseCounts = filteredData.reduce((acc, row) => {
        const course = row[4];
        if (course) {
            if (!acc[course]) {
                acc[course] = 0;
            }
            acc[course]++;
        }
        return acc;
    }, {});

    return (
        <div>
            <div style={{ height: '100px' }}></div>
            <div className="container py-5">
                <div className="row justify-content-center mb-4">
                    <div className="col-md-8">
                        <input
                            type="text"
                            placeholder="Search by Tên, Email, SĐT và Loại"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="form-control"
                            style={{ height: '50px' }}
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h1 className="text-center mb-4 text-uppercase">Danh sách đăng ký học</h1>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Tên</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Điện thoại</th>
                                        <th scope="col">Loại</th>
                                        <th scope="col">Ngành</th>
                                        <th scope="col">Hành động</th>
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
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <AdminChart data={courseCounts} />
                </div>
            </div>
        </div>
    );
}
