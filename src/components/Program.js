import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const programData = [
    { id: 1, image: require('../assets/images/ANM_3.png'), title: 'AN NINH MẠNG', lable: 'ĐĂNG KÍ' },
    { id: 2, image: require('../assets/images/PTPM_3.png'), title: 'PHÁT TRIỂN PHẦN MỀM', lable: 'ĐĂNG KÍ' },
    { id: 3, image: require('../assets/images/TKDH_3.png'), title: 'THIẾT KẾ ĐỒ HỌA', lable: 'ĐĂNG KÍ' },
    { id: 4, image: require('../assets/images/TMDT.png'), title: 'THƯƠNG MẠI ĐIỆN TỬ', lable: 'ĐĂNG KÍ' },
];
export default function Program() {
    return (
        <section id="program" className="block program-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>CHƯƠNG TRÌNH ĐÀO TẠO CHỈ 2 NĂM 3 THÁNG</h2>
                    <div className="subtitle">Học để làm việc ngay</div>
                </div>
                <Row>
                    {programData.map((program) => {
                        return (
                            <Col sm={3} className="holder">
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img variant="top" src={program.image} />
                                    <Card.Body>
                                        <Card.Title>{program.title}</Card.Title>

                                        <Button variant="primary">{program.lable}</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}
