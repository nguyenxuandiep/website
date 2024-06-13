import React from "react";

export default function Noidung() {
  return (
    <div className="pb-10 pt-10">
      <h1
        className="text-4xl font-bold pb-4 text-center"
        style={{ color: "#f57e25" }}
      >
        NỘI DUNG CHƯƠNG TRÌNH HỌC{" "}
        <div style={{width:'80%',margin:'0 auto'}}>
          <img
            loading="lazy"
            decoding="async"
            width="300" // Đặt kích thước mong muốn cho hình ảnh nhỏ
            height="566"
            src="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-67-scaled.jpg"
            class="attachment-full size-full wp-image-13010"
            alt="noi-dung-khoa-hoc-CEH"
            srcset="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-67-scaled.jpg 947w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-67-111x300.jpg 111w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-67-379x1024.jpg 379w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-67-768x2075.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-67-568x1536.jpg 568w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-67-758x2048.jpg 758w"
            sizes="(max-width: 547px) 100vw, 947px"
          />
        </div>
      </h1>
    </div>
  );
}
