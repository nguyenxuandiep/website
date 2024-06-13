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
            Tại iSPACE, ngành phát triển phần mềm được thiết kế tối thiểu 500
            giờ trải nghiệm thực tế dưới sự hướng dẫn của doanh nghiệp. Sinh
            viên sẽ được rèn luyện kĩ năng chuyên môn, tích lũy kinh nghiệm
            thông qua quá trình học tập tại doanh nghiệp cùng các sản phẩm có
            khả năng được ứng dụng trong thực tế.
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
