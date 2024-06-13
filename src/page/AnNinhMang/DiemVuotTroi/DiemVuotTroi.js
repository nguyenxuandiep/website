import React from "react";

const DiemVuotTroi = () => {
  return (
    <div>
      <div
        className="text-center p-8"
        style={{ width: "80%", margin: "0 auto" }}
      >
        <h6>
          <span className="text-orange-500 text-xl font-semibold">
            Điểm vượt trội của iSPACE là luôn chắt lọc và cập nhật kiến thức,
            nền tảng mới kết hợp với thực hành thao luyện trên THAO TRƯỜNG MẠNG
            – Cyber Range. Học viên được trực tiếp trải nghiệm các tình huống
            tấn công mạng thực tế, giúp học viên thành thạo và có kinh nghiệm
            thực tiễn ngay khi còn ngồi trên ghế nhà trường.
          </span>
        </h6>
        <h6 className="mt-4">
          <span className="text-orange-500 text-xl font-semibold">
            Chương trình đào tạo “Vệ sĩ mạng” của iSPACE sẽ giúp sinh viên học
            được cách rà soát và khắc phục tất cả các lỗ hổng/nguy cơ tiềm ẩn
            gây mất ATTT trong hạ tầng CNTT của các doanh nghiệp/ tổ chức.
          </span>
        </h6>
      </div>
      <section className="w-full h-full">
        <div className="container mx-auto">
          <div className="text-center">
            <img
              src="https://ispace.edu.vn/wp-content/uploads/2020/09/AN-NINH-MANG.jpg"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiemVuotTroi;
