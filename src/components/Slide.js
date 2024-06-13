import Carousel from 'react-bootstrap/Carousel';

var slideData = [
    {
        id: 1,
        image: require('../assets/images/Banner.jpg'),
    },
    {
        id: 2,
        image: require('../assets/images/banner_2.jpg'),
    },
    {
        id: 3,
        image: require('../assets/images/banner-01.jpeg'),
    },
];

function Slide() {
    return (
        <section id="Home" className="Slide-block">
            <Carousel>
                {slideData.map((slide) => {
                    return (
                        <Carousel.Item key={slide.id}>
                            <img className="d-block w-100" src={slide.image} alt={'Slide' + slide.id} />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </section>
    );
}

export default Slide;
