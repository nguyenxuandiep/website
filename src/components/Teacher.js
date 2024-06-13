import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const teachData = [
    {
        id: 1,
        image: require('../assets/images/HT.png'),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',

        description:
            'PGS.TS Nguyễn Duy Hàm có hơn 23 năm kinh nghiệm giảng dạy tại các trường đại học top đầu như Đại học An ninh nhân dân, Đại học Sài Gòn, Đại học Sư phạm, Đại học Hutech…',
    },
    {
        id: 2,
        image: require('../assets/images/GV1.png'),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',

        description:
            'THS. NCS Lê Hoàng Bình Nguyên có 10 năm kinh nghiệm đào tạo tại các trường Đại học danh tiếng ở Việt Nam như: Đại học An ninh Nhân dân, Đại học Sài Gòn, Đại học Sư phạm TPHCM,… Thầy có kinh nghiệm dày dặn trong việc huấn luyện sinh viên tham gia các cuộc thi chuyên môn như: Olympic Tin học sinh viên Việt Nam, Lập trình sinh viên quốc tế ICPC.',
    },
    {
        id: 3,
        image: require('../assets/images/GV2.png'),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        description:
            'Kỹ sư Nguyễn Thế Phương có thâm niên hơn 13 năm kinh nghiệm đào tạo và tham gia dự án thực tế, triển khai xây dựng bảo mật hệ thống mạng, thực hiện ứng cứu sự cố bảo mật, đào tạo điện toán cho doanh nghiệp, sở ban ngành và các tỉnh như Đắk Lắk, Bình Dương, Đồng Nai, Bà Rịa Vũng Tàu,…',
    },
    {
        id: 4,
        image: require('../assets/images/GV3.png'),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',

        description:
            'Thầy Trương Phạm Hoài Thương hiện đang là giảng viên tại khoa An ninh mạng tại trường iSPACE, đảm nhận việc giảng dạy các môn học chuyên ngành về an toàn thông tin, chia sẻ kiến thức và kinh nghiệm thực tiễn cho sinh viên.Thầy có hơn 06 năm kinh nghiệm trong lĩnh vực an ninh mạng và có các chứng chỉ bảo mật từ EC-council và CompTIA.',
    },
    {
        id: 5,
        image: require('../assets/images/GV4.jpg'),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',

        description:
            'Cô Lê Kim Ngân có hơn 4 năm kinh nghiệm giảng dạy tại các trường hàng đầu và thực chiến các lĩnh vực tại doanh nghiệp như dựng phim, 3D, After Effect, Maya, Adobe Photoshop, Adobe Illustrator,… ',
    },
    {
        id: 6,
        image: require('../assets/images/GV5.jpg'),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',

        description:
            'Ths. Văn Minh Đại có hơn 10 năm công tác trong lĩnh vực Truyền thông Marketing với nhiều năm kinh nghiệm quý giá về tiếp thị Digital Marketing, sáng tạo chiến dịch Digital Marketing cho các ngành hàng lớn (Toshiba Việt Nam, Midea Việt Nam, Levis’s, Tiger Spot, Kido Group, Đường Quãng Ngãi JSC, Cao đẳng Cộng đồng Houston, Cao đẳng Sài Gòn, ĐHQT Hồng Bàng, Cao đẳng Việt Mỹ, Arena Multimedia,…)',
    },
];

function Teacher() {
    return (
        <div className="mb-0">
            <section id="testimonials" className="testimonials-block">
                <Container fluid>
                    <div className="title-holder">
                        <h3>
                            “Ở iSPACE các em sẽ có những câu trả lời thỏa đáng cho câu hỏi ‘Học để làm gì?’ trong mỗi
                            người.”
                        </h3>
                        <div className="subtitle">PGS. TS. Nguyễn Duy Hàm, Hiệu trưởng</div>
                    </div>
                </Container>
            </section>
            <section id="teams" className="block teams-block">
                <Container fluid>
                    <div className="title-holder">
                        <h2>BAN CỐ VẤN - GIẢNG VIÊN</h2>
                        <div className="subtitle">Trường Cao đẳng An ning mạng iSPACE</div>
                    </div>
                    <Row>
                        {teachData.map((teach) => {
                            return (
                                <Col sm={4} key={teach.id}>
                                    <div className="image mb-0">
                                        <Image src={teach.image} alt="Image" />
                                        <div className="overlay">
                                            <div className="socials">
                                                <ul>
                                                    <li>
                                                        <a href={teach.fbLink}>
                                                            <i class="fab fa-facebook-f"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={teach.twitterLink}>
                                                            <i class="fab fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={teach.linkedinLink}>
                                                            <i class="fab fa-linkedin-in"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="connent">
                                        <h3>{teach.name}</h3>
                                        <span className="designation"> {teach.designation}</span>
                                        <p>{teach.description}</p>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Teacher;
