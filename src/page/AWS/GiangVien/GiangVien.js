import React from "react";

export default function GiangVien() {
  return (
    <div className="pb-10">
      <h6
        className="text-3xl xl:text-3xl  md:leading-none xl:leading-tight text-center mb-5 mt-10"
        style={{ color: "#ffb606", fontWeight: "bold" }}
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
            src="https://ispace.edu.vn/wp-content/uploads/2023/08/Group-66-768x1491.jpg"
            class="attachment-medium_large size-medium_large wp-image-12996"
            alt="giang-vien-AWS"
            srcset="https://ispace.edu.vn/wp-content/uploads/2023/08/Group-66-768x1491.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2023/08/Group-66-155x300.jpg 155w, https://ispace.edu.vn/wp-content/uploads/2023/08/Group-66-528x1024.jpg 528w, https://ispace.edu.vn/wp-content/uploads/2023/08/Group-66-791x1536.jpg 791w, https://ispace.edu.vn/wp-content/uploads/2023/08/Group-66-1055x2048.jpg 1055w, https://ispace.edu.vn/wp-content/uploads/2023/08/Group-66-scaled.jpg 1319w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2">
          <ul
            className="list-disc"
            style={{ width: "80%", margin: "0 auto", lineHeight: "40px" }}
          >
            <li>
              Thầy <strong>Ths Lê Hoàng Bình Nguyên</strong>
            </li>
            <li>Phó trưởng khoa Công nghệ thông tin</li>
            <li>
              Có hơn 5 năm giảng dạy tại nhiều trường Đại học danh tiếng ở Việt
              Nam.
            </li>
            <li>
              Là huấn luyện viên của nhiều cuộc thi chuyên môn uy tín dành cho
              sinh viên.
            </li>
            <li>
              Sở hữu chứng chỉ AWS Certified Solutions Architect và AWS
              Certified Developer – Associate về điện toán đám mây.
            </li>
            <li>
              Từng chiến thắng các cuộc thi chuyên môn uy tín như từ khi còn là
              sinh viên: Olympic Tin học sinh viên Việt Nam, Lập trình sinh viên
              quốc tế ICPC,…
            </li>
            <li>
              Giảng dạy điện toán đám mây AWS cho gần một ngàn sinh viên, giảng
              viên các trường đại học, cao đẳng của Việt Nam và hiện là giảng
              viên chính thức của chương trình AWS/ReStart Việt Nam.
            </li>
          </ul>
        </div>
      </section>
     
    </div>
  );
}
