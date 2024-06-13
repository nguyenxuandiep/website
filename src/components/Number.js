function Number() {
    return (
        <div>
            <h6
                className="text-2xl xl:text-3xl text-center pt-7 md:leading-none xl:leading-tight"
                style={{ fontWeight: 'bold' }}
            >
                iSPACE VÀ NHỮNG CON SỐ BIẾT NÓI
            </h6>
            <section className={`flex justify-center py-8 `}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl">
                    <div className="flex flex-col items-center">
                        <img
                            src="https://ispace.edu.vn/wp-content/uploads/2020/09/course2-icon2.png"
                            alt=""
                            className="w-12 h-12 mb-4"
                        />
                        <div className="text-center">
                            <div className="text-lg font-bold">SINH VIÊN CÓ VIỆC LÀM NGAY</div>
                            <div className="text-4xl font-bold">100%</div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            src="https://ispace.edu.vn/wp-content/uploads/2020/09/course2-icon1.png"
                            alt=""
                            className="w-12 h-12 mb-4"
                        />
                        <div className="text-center">
                            <div className="text-lg font-bold">SINH VIÊN ĐƯỢC ĐÀO TẠO</div>
                            <div className="text-4xl font-bold">15,000</div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            src="https://ispace.edu.vn/wp-content/uploads/2020/09/course2-icon4.png"
                            alt=""
                            className="w-12 h-12 mb-4"
                        />
                        <div className="text-center">
                            <div className="text-lg font-bold">THỰC HÀNH</div>
                            <div className="text-4xl font-bold">70%</div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            src="https://ispace.edu.vn/wp-content/uploads/2020/09/course2-icon3.png"
                            alt=""
                            className="w-12 h-12 mb-4"
                        />
                        <div className="text-center">
                            <div className="text-lg font-bold">KINH NGHIỆM ĐÀO TẠO</div>
                            <div className="text-4xl font-bold">18 Năm</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Number;
