import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import img1 from '../assets/images/bia.png';
import img2 from '../assets/images/18-NAM.jpg';
import Program from '../components/Program';
import Number from '../components/Number';
import Teacher from '../components/Teacher';
import Carousel from './DangKyNgay/Carousel/Carousel';

const studentData = [
    {
        id: 1,
        image: require('../assets/images/DQ-1.png'),
        title: 'Hơn 300 CLB',
        subtitle:
            'Cơ hội tham gia hoạt động ngoại khóa, rèn kỹ năng mềm với hơn 300 CLB tại Làng Đại học Quốc gia TP.HCM',
    },
    {
        id: 2,
        image: require('../assets/images/DQ-2.jpg'),
        title: 'Môi trường đẳng cấp',
        subtitle:
            'Cao đẳng duy nhất có trung tâm SOC (Security Operation Center). Sinh viên thực hành với dự án thực tế.',
    },
    {
        id: 3,
        image: require('../assets/images/DQ-3.jpg'),
        title: 'Việc làm có sẵn',
        subtitle:
            'Mô hình giảng dạy theo đặt hàng từ doanh nghiệp, đầu ra hơn 100 doanh nghiệp, cam kết giới thiệu đến khi có việc làm.',
    },
    {
        id: 4,
        image: require('../assets/images/DQ-4.png'),
        title: 'Liên thông đại học công TOP đầu',
        subtitle: 'Cơ hội liên thông với đại học công top đầu (ĐH CNTT, ĐH SPKT, ĐH Bách Khoa, ĐH Công nghiệp…)',
    },
];

const businessData = [
    {
        id: 1,
        image: require('../assets/images/DN-1.jpg'),
    },
    {
        id: 2,
        image: require('../assets/images/DN-2.jpg'),
    },
    {
        id: 3,
        image: require('../assets/images/DN-3.jpg'),
    },
    {
        id: 4,
        image: require('../assets/images/DN-4.jpg'),
    },
    {
        id: 5,
        image: require('../assets/images/DN-5.jpg'),
    },
    {
        id: 6,
        image: require('../assets/images/DN-6.jpg'),
    },
    {
        id: 7,
        image: require('../assets/images/DN-7.jpg'),
    },
    {
        id: 8,
        image: require('../assets/images/DN-8.jpg'),
    },
    {
        id: 9,
        image: require('../assets/images/DN-9.jpg'),
    },
    {
        id: 10,
        image: require('../assets/images/DN-10.jpg'),
    },
    {
        id: 11,
        image: require('../assets/images/DN-11.jpg'),
    },
    {
        id: 12,
        image: require('../assets/images/DN-12.jpg'),
    },

    {
        id: 14,
        image: require('../assets/images/DN-14.jpg'),
    },
    {
        id: 15,
        image: require('../assets/images/DN-15.jpg'),
    },
    {
        id: 16,
        image: require('../assets/images/DN-16.jpg'),
    },
];

const blogData = [
    {
        id: 1,
        image: require('../assets/images/bl1.jpg'),
        time: 'JUNE 7, 2024',
        title: 'Lễ ký kết hợp tác',
        description:
            'Sáng ngày 07/06/2024, lễ ký kết hợp tác giữa Trường Cao đẳng An ninh mạng iSPACE và Tập đoàn Giáo dục Pearson diễn ra thành công trong không khí trang trọng tại Hilton Saigon Hotel.Ông Phạm Hoàng Cường – Chủ tịch Hội đồng quản trị Trường Cao đẳng An ninh mạng iSPACE cùng ông Lê Tuấn Dũng – Giám đốc khu vực Tập đoàn Giáo dục Pearson ',
    },
    {
        id: 2,
        image: require('../assets/images/tin-5.jpg'),
        time: 'JUNE 6, 2024',
        title: ' Thiết kế thương hiệu',
        description:
            ' Trong môn Nhận diện thương hiệu do giảng viên Lê Kim Ngân hướng dẫn, nhóm sinh viên gồm 3 bạn: Đức Thân, Duy Khang và Tuấn Khang đã thiết kế bộ nhận diện thương hiệu Trà sen SENXANH TEA hết sức ấn tượng và được giảng viên đánh giá cao. Hãy cùng iSPACE khám phá xem có gì trong bộ nhận diện thương hiệu này nhé. ',
    },
    {
        id: 3,
        image: require('../assets/images/tin-1.png'),
        time: 'MAY 26, 2024',
        title: 'iCONNECTSPACE',
        description:
            'Chiều ngày 25/05/2024, iCONNECTSPACE #5: E-commerce bán hàng trên sàn hay quảng cáo trên mạng đã diễn ra thành công tốt đẹp với sự chia sẻ từ Ths. Văn Đức Sơn Hà – Giảng viên E-commerce, CEO/Founder Top Founder/Management Topnet và Ths. Văn Minh Đại – Giảng viên E-Commerce, Trưởng phòng Tuyển sinh & Marketing tại iSPACE.',
    },

    {
        id: 4,
        image: require('../assets/images/tin-3.jpg'),
        time: 'MAY 22, 2024',
        title: 'Giảng viên iSPACE ',
        description:
            'Sáng ngày 22/05/2024, đài HTV đã có buổi ghi hình tại iSPACE với sự chia sẻ của Ths. Lê Hoàng Bình Nguyên – Phó Trưởng khoa Công nghệ thông tin về chuyên đề “Cảnh báo chiêu trò gian lận qua mail.”',
    },
];
function Home() {
    return (
        <div>
            <section id="about" className="block about-block">
                <Container fluid>
                    <div className="title-holder">
                        <h2>TỔNG QUAN TRƯỜNG CAO ĐẲNG AN NINH MẠNG ISPACE</h2>
                        <div className="subtitle">iSPACE là đơn vị thuộc NGS Group</div>
                    </div>
                    <Row>
                        <Col sm={6}>
                            <Image src={img1} />
                        </Col>
                        <Col sm={6}>
                            <p>
                                Trường Cao Đẳng An ninh mạng iSPACE là đơn vị thuộc NGS Group. iSPACE tiên phong trong
                                đào tạo thực hành từ năm 2008 theo tiêu chí tuyển sinh đi liền tuyển dụng.
                            </p>

                            <p>
                                Từ năm 2015, Trường iSPACE thực hiện chương trình tuyển sinh và đào tạo đặc biệt “CNTT-
                                Học để làm việc ngay”. Chương trình mang đến cho các bạn trẻ đam mê CNTT ba giá trị vượt
                                trội: 70% học thực hành, 100% làm việc ngay, 100% thêm nghề phụ.
                            </p>

                            <p>
                                Năm học 2021- 2022, Trường Cao đẳng An ninh mạng iSPACE mở rộng và nâng cấp cơ sở vật
                                chất với quy mô hiện đại và sáng tạo theo xu hướng trường học quốc tế.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Program />

            <section id="about" className="block about-block">
                <Container fluid>
                    <div className="title-holder">
                        <h2>18 NĂM HÌNH THÀNH VÀ PHÁT TRIỂN</h2>
                    </div>
                    <Row>
                        <Col sm>
                            <div className="d-flex justify-content-center">
                                <Image src={img2} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <CardGroup>
                    {studentData.map((student) => {
                        return (
                            <Card style={{ border: 'none', width: '150px', height: '250px' }}>
                                <Card.Img variant="top" src={student.image} />
                                <Card.Body>
                                    <Card.Title>{student.title}</Card.Title>
                                    <Card.Text>{student.subtitle}</Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </CardGroup>
            </section>
            <Number />
            <Teacher />
            <Carousel />
            {/* business */}
            <section id="business" className="block business-block">
                <Container fluid>
                    <div className="title-holder">
                        <h2>Doanh nghiệp</h2>
                    </div>
                    <Row className="portfolioList">
                        {businessData.map((bus) => {
                            return (
                                <Col sm={4} key={bus.id}>
                                    <div className="portfolioList-wrapper">
                                        <a href="#">
                                            <Image src={bus.image} />
                                        </a>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </section>
            <section id="blog" className="block blog-block">
                <Container fluid>
                    <div className="title-holder">
                        <h2>TIN NỔI BẬT</h2>
                        <div className="subtitle">Learning by Doing</div>
                    </div>
                    <Row>
                        {blogData.map((blog) => {
                            return (
                                <Col sm={3} key={blog.id}>
                                    <div className="holder">
                                        <Card>
                                            <Card.Img variant="top" src={blog.image} />
                                            <Card.Body>
                                                <time>{blog.time}</time>
                                                <Card.Title>{blog.title}</Card.Title>
                                                <Card.Text>{blog.description}</Card.Text>
                                                <a href="#" className="btn btn-primary">
                                                    Read More
                                                </a>
                                            </Card.Body>
                                        </Card>
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

export default Home;
