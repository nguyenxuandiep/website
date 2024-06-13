import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
function Footer() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    function goTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div>
            <section id="contact" className="block contact-block">
                <Container fluid>
                    <div className="title-holder">
                        <h2>CONTACT US</h2>
                        <div className="subtitle"> -get connected with us-</div>
                    </div>
                </Container>
                <div className="google-map">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d808.9748646944566!2d106.76734225396847!3d10.849569938501347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527a035bda30f%3A0x83d67ab8cd529d85!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEFuIG5pbmggbeG6oW5nIGlTUEFDRQ!5e0!3m2!1svi!2s!4v1718108438698!5m2!1svi!2s"
                        allowFullscreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <Container fluid>
                    <div className="contact-info">
                        <ul>
                            <li>
                                <i class="fas fa-envelope"></i>quangcao@ispace.edu.vn
                            </li>
                            <li>
                                <i class="fas fa-phone"></i>0938 205 966{' '}
                            </li>
                            <li>
                                <i class="fas fa-map-marker-alt"></i>240 Võ Văn Ngân, Phường Bình Thọ TP. Thủ Đức, TP.
                                Hồ Chí Minh
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>
            <section id="footer">
                <Container fluid>
                    <div>
                        <div className="copyright">Website iSPACE by 2024 Powered by Dev Me.</div>
                        <div className="socials">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
            {showTopBtn && <div className="go-top" onClick={goTop}></div>}
        </div>
    );
}

export default Footer;
