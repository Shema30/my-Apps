import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Ayoba from '../images/ayoba.jpeg';
// import Ndakagendana from '../images/ndakagendana.jpeg';
// import myMtn from '../images/mymtn.jpg';
// import Izihirwe from '../images/izihirwe.jpeg'
import Fiber from '../images/fiber.png'


class Coursels extends Component {
    render() {
        return (
            <div className='Coursel'>
                <Carousel>

                    <Carousel.Item className='carousel-item'>
                        <img
                            className="d-block w-100"
                            src={Fiber}
                            alt="Fiber"
                        />
                    </Carousel.Item>

                    <Carousel.Item className='carousel-item'>
                        <img
                            className="d-block w-100"
                            src="https://pbs.twimg.com/profile_banners/284967776/1674816790/1500x500"
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item className='carousel-item'>
                        <img
                            className="d-block w-100"
                            src="https://www.mtn.co.ug/wp-content/uploads/2019/10/default-report-image.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item className='carousel-item'>
                        <img
                            className="d-block w-100"
                            src="https://pbs.twimg.com/media/FXjGbiCXoAQhQIt?format=jpg&name=4096x4096"
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item className='carousel-item'>
                        <img
                            className="d-block w-100"
                            src={Ayoba}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>

            </div>
        );
    }
}

export default Coursels;