import React from "react";

export default function Thongtin() {
  return (
    <div style={{width:'80%', margin:'0 auto'}} className="pt-10 pb-10">
      <section className="flex md:flex-row flex-col items-center">
        <div className="w-full md:w-1/2 p-4">
        <h1 className="text-2xl font-bold pb-4 " style={{ color: '#f57e25' }}>ĐỐI TƯỢNG HỌC VIÊN</h1>
          <ul className="list-disc text-lg">
            <li className="text-justify">
              Sinh viên muốn học thêm về điện toán đám mây để nâng cao kiến thức
              và lấy chứng chỉ.
            </li>
            <li className="text-justify">
              Những người yêu thích và muốn tìm hiểu về Cloud (AWS)
            </li>
            <li className="text-justify">
              Người muốn học để nâng cao kiến thức.
            </li>
            <li className="text-justify">
              Những người làm về dịch vụ Cloud (Sale, tư vấn viên, marketing,
              chủ doanh nghiệp…)
            </li>
            <li className="text-justify">
              Người muốn lấy chứng chỉ để nâng cao cơ hội việc làm, tăng lương.
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-4">
        <h1 className="text-2xl font-bold pb-4 " style={{ color: '#f57e25' }}>VÌ SAO NÊN HỌC AWS</h1>
          <ul className="list-disc text-lg">
            <li className="text-justify">
              Là một trong những dịch vụ cloud computing lớn nhất thế giới hiện
              nay.
            </li>
            <li className="text-justify">
              Cung cấp cái nhìn tổng quan về các dịch vụ, những điều nên làm (và
              không nên làm) để xây dựng một hệ thống tốt trên cloud
            </li>
            <li className="text-justify">
              Các doanh nghiệp dịch chuyển dần lên Cloud với tốc độ chóng mặt.
            </li>
            <li style={{opacity:0}}></li>
            <li style={{opacity:0}}></li>

          </ul>
        </div>
      </section>
    </div>
  );
}
