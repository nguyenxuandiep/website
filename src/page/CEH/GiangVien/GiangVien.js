import React from 'react';
import { NavLink } from 'react-router-dom';

export default function GiangVien() {
    return (
        <div className="pb-10">
            <h6
                className="text-3xl xl:text-3xl  md:leading-none xl:leading-tight text-center mb-5 mt-10"
                style={{ color: '#ffb606', fontWeight: 'bold' }}
            >
                THÔNG TIN GIẢNG VIÊN
            </h6>

            <section className="flex flex-wrap items-center justify-center">
                <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-center">
                    <img
                        loading="lazy"
                        decoding="async"
                        width="300" // Đặt kích thước mong muốn cho hình ảnh nhỏ
                        height="566"
                        src="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-96-543x1024.jpg"
                        alt="giang-vien-khoa-CEH"
                        srcSet="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-96-543x1024.jpg 543w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-96-159x300.jpg 159w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-96-768x1449.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-96-814x1536.jpg 814w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-96-1086x2048.jpg 1086w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-96-scaled.jpg 1357w"
                        sizes="(max-width: 543px) 100vw, 543px"
                    />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2">
                    <ul className="list-disc" style={{ width: '80%', margin: '0 auto', lineHeight: '40px' }}>
                        <li>
                            Thầy <strong>Trương Phạm Hoài Thương</strong> – giảng viên tại khoa An ninh mạng ở trường
                            iSPACE, đảm nhận việc giảng dạy các môn học chuyên ngành về an toàn thông tin, chia sẻ kiến
                            thức và kinh nghiệm thực tiễn cho sinh viên…
                        </li>
                        <li>
                            05 năm kinh nghiệm trong lĩnh vực an ninh mạng và có các chứng chỉ bảo mật từ EC-council và
                            CompTIA.
                        </li>
                        <li>
                            Thầy Trường Phạm Hoài Thương đã tham gia vào nhiều dự án đánh giá an toàn thông tin, triển
                            khai các giải pháp bảo mật hiệu quả và thực hiện ứng cứu sự cố bảo mật.
                        </li>
                        <li>
                            Từ lúc còn là sinh viên, thầy Hoài Thương đã tham gia xây dựng và phát triển cộng đồng
                            AdminVietNam – một blog chuyên về chia sẻ kiến thức an ninh mạng và quản trị mạng.
                        </li>
                        <li>
                            Đạt loại giỏi trong cuộc thi tay nghề thành phố Hồ Chí Minh – WorldSkills Viet Nam 2018.
                        </li>
                    </ul>
                </div>
            </section>
            <div className="flex justify-center">
                <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
                    <h6
                        className="text-3xl xl:text-3xl  md:leading-none xl:leading-tight text-center mb-5 mt-10"
                        style={{ color: '#ffb606', fontWeight: 'bold' }}
                    >
                        HỌC PHÍ KHÓA HỌC
                    </h6>
                    <p className="text-center text-xl">
                        Học phí trọn khóa: <strong>6.500.000 VND</strong> (chưa bao gồm lệ phí thi)
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <NavLink
                    to="/dang-ky-ngay"
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Đăng ký ngay
                </NavLink>
            </div>
        </div>
    );
}
