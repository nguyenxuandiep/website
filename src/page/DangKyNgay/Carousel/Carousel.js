import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { gapi } from 'gapi-script'; // npm i gapi-script
const CLIENT_ID = '438374906107-k02j251kvged55nop8ulc7gma8iunq5u.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCLe_wsWh98b2tctLhuN-SazvgDA1ki758';
const SPREADSHEET_ID = '1nTSt3TOOeiznkPC_kfwpEDywmJy6dir3Ito5VREQCT8';
export default function Carousel() {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Phone: '',
        Target: '',
        Program: '',
    });

    const scriptUrl =
        'https://script.google.com/macros/s/AKfycby1kPe-aoysg5Kj9HZ6J7o9maO_Y18VSNt1vxwYOZL3FbkrlrMZb_JJF59V7ovpEw9DVg/exec';

    useEffect(() => {
        function start() {
            gapi.client
                .init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
                    scope: 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets',
                })
                .then(
                    () => {
                        console.log('GAPI client loaded for API');
                    },
                    (error) => {
                        console.error('Error loading GAPI client for API', error);
                    },
                );
        }

        gapi.load('client:auth2', start);
    }, []);
    const handleChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await authenticate();
    };

    const authenticate = async () => {
        gapi.auth2
            .getAuthInstance()
            .signIn()
            .then(
                () => {
                    console.log('Sign-in successful');
                    execute();
                },
                (error) => {
                    console.error('Error signing in', error);
                },
            );
    };

    const execute = () => {
        const spreedData = Object.values(formData);
        console.log(spreedData);
        gapi.client.sheets.spreadsheets.values
            .append({
                spreadsheetId: SPREADSHEET_ID,
                range: 'A1',
                insertDataOption: 'INSERT_ROWS',
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: [spreedData],
                },
            })
            .then(
                (response) => {
                    console.log('Response', response);
                    alert('Gửi thông tin thành công!');
                    setFormData({
                        Name: '',
                        Email: '',
                        Phone: '',
                        Target: '',
                        Program: '',
                    });
                },
                (error) => {
                    console.error('Execute error', error);
                },
            );
    };
    return (
        <div className="mt-5">
            <Container fluid>
                <div className="title-holder">
                    <h2>ĐĂNG KÍ NGAY</h2>
                </div>
            </Container>
            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6"
                style={{
                    width: `${window.innerWidth > 1024 ? '80%' : '100%'}`,
                    margin: '0 auto',
                }}
            >
                <div className="p-8 rounded-lg md:col-span-4/6 md:border md:border-gray-300">
                    <h1 className="text-3xl font-bold pb-4" style={{ color: '#f64b4b' }}>
                        LIÊN HỆ VỚI CHÚNG TÔI
                    </h1>
                    <ul className="list-disc ml-6 text-xl" style={{ listStyle: 'none' }}>
                        <li>
                            <img
                                fetchpriority="high"
                                decoding="async"
                                width="640"
                                height="152"
                                src="https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-1024x243.png"
                                class="attachment-large size-large wp-image-8936"
                                alt=""
                                srcset="https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-1024x243.png 1024w, https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-600x143.png 600w, https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-e1661395790159.png 300w, https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-768x183.png 768w, https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-1536x365.png 1536w, https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-2048x487.png 2048w"
                                sizes="(max-width: 640px) 100vw, 640px"
                            />
                        </li>
                        <li>
                            <section className="flex flex-col md:flex-row px-1 ">
                                <div className="w-full md:w-1/2 p-3">
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 mr-3">
                                            <i className="fa fa-phone text-yellow-500 text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold">Điện thoại</h3>
                                            <div className="text-base">0938 205 966 (Ms. Chinh)</div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </li>
                        <li>
                            <div className="w-full md:w-full p-3">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 mr-3">
                                        <i className="fa fa-envelope text-yellow-500 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Email</h3>
                                        <div className="text-base">quangcao@ispace.edu.vn</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="w-full md:w-full p-3">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 mr-3">
                                        <i className="fa fa-map text-yellow-500 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Địa chỉ</h3>
                                        <div className="text-base">
                                            240 Võ Văn Ngân, Phường Bình TP. Thủ Đức, TP. Hồ Chí Minh
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="p-8 rounded-lg md:col-span-2/6 md:border md:border-gray-300">
                    <div className="w-full md:w-full px-4 pt-6">
                        <div className="bg-red-400 p-8 rounded-md shadow-md">
                            <h3 className="text-white text-2xl font-bold mb-4">Điền thông tin bên dưới</h3>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="Name"
                                    value={formData.Name}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md bg-gray-700  placeholder-gray-400"
                                    placeholder="Họ Tên Bạn *"
                                    required
                                />
                                <input
                                    type="email"
                                    name="Email"
                                    value={formData.Email}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md bg-gray-700  placeholder-gray-400 mt-4"
                                    placeholder="Email *"
                                    required
                                />
                                <input
                                    type="text"
                                    name="Phone"
                                    value={formData.Phone}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md bg-gray-700  placeholder-gray-400 mt-4"
                                    placeholder="Số điện thoại *"
                                    required
                                />
                                <select
                                    name="Target"
                                    value={formData.Target}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md bg-gray-500 text-white mt-4"
                                    required
                                >
                                    <option value="">--- Đối tượng ---</option>
                                    <option value="HS đang học lớp 12 (đăng ký giữ chỗ)">
                                        HS đang học lớp 12 (đăng ký giữ chỗ)
                                    </option>
                                    <option value="HS tốt nghiệp THPT/hoàn thành chương trình lớp 12">
                                        HS tốt nghiệp THPT/hoàn thành chương trình lớp 12
                                    </option>
                                    <option value="Sinh Viên">Sinh Viên</option>
                                    <option value="Người đi làm">Người đi làm</option>
                                </select>
                                <select
                                    name="Program"
                                    value={formData.Program}
                                    className="w-full p-3 rounded-md bg-gray-500 text-white mt-4"
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">--- Chương trình học ---</option>
                                    <option value="An ninh mạng">An ninh mạng</option>
                                    <option value="Phát triển phần mềm">Phát triển phần mềm</option>
                                    <option value="Thiết kế đồ họa">Thiết kế đồ họa</option>
                                    <option value="Quản trị mạng">Quản trị mạng</option>
                                    <option value="Thương mại điện tử">Thương mại điện tử</option>
                                </select>
                                <button
                                    type="submit"
                                    className="w-full p-3 rounded-md bg-red-600 text-white font-bold hover:bg-orange-600 mt-3"
                                >
                                    Gửi ngay
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
