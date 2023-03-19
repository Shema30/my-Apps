import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import niDilu from '../images/niDilu.png'

// Nokia
import NokiaCover from '../images/Nokia-cover.png'
import NokiaScreen from '../images/Nokia-screen-protector.png'
import Nokia from '../images/NOKIA-63101.png'
import NokiaTab from '../images/Nokia_Tab_T201.png'
import NokiaZ from '../images/Nokia-X20-41.png'

// Samsung 

import SamsungSCover from '../images/Samsung-S-and-Note-series-cover.png'
import sdCard16 from '../images/sd-card-16GB.png'
import sdCard8 from '../images/sd-card-8GB.png'
import SamsungAProtector from '../images/Samsung-A-Series-Screen-protector.png'
import SamsungSProtector from '../images/Samsung-S-and-Note-series-Screen-protector.png'

// Tecno 

import tecnoCover from '../images/Tecno-Cover.png'
import iphoneCover from '../images/iPhone-covers.png'
import tecnoProtector from '../images/Tecno-Screen-protector.png'
import iphoneProtector from '../images/iPhone-screen-protector.png'
import samsungAcover from '../images/Samsung-A-cover-series-cover.png'

class NiDilu extends Component {
    render() {
        return (
            <div>

                <div className='ni-dilu NiDilu-head'>
                    <div>
                        <h1>Ni Dilu</h1>
                    </div>
                    <div>
                        <button className='NiDilu-btn'><a href="https://www.mtn.co.rw/products-2/">All Product</a></button>
                    </div>
                </div>

                <div className='dilu-poster'>
                    <img src={niDilu} alt="Ni dilu" />
                </div>

                <div className='ni-dilu'>

                    <div className='NiDilu-carousel'>

                        <Carousel className='carousel'>
                            <Carousel.Item className='carousel-item'>
                                <div className='row'>

                                    <div className='NiDilu-sides col-md-4 mb-3'>
                                        <div className='card'>
                                            <img src={NokiaScreen} alt="NokiaScreen" />
                                        </div>
                                        <div className='card'>
                                            <img src={Nokia} alt="Nokia" />
                                        </div>
                                    </div>

                                    <div className='NiDilu-middle col-md-4 mb-3'>
                                        <div className='card'>
                                            <img src={NokiaCover} alt="NokiaCover" />
                                        </div>
                                    </div>

                                    <div className='NiDilu-sides col-md-4 mb-3'>
                                        <div className='card'>
                                            <img src={NokiaTab} alt="NokiaTab" />
                                        </div>
                                        <div className='card'>
                                            <img src={NokiaZ} alt="NokiaZ" />
                                        </div>
                                    </div>

                                </div>

                            </Carousel.Item>

                            <Carousel.Item className='carousel-item'>
                                <div className='row'>

                                    <div className='NiDilu-sides col-md-4 mb-3'>
                                        <div className='card'>
                                            <img src={SamsungSCover} alt="SamsungSCover" />
                                        </div>
                                        <div className='card'>
                                            <img src={sdCard16} alt="sdCard16" />
                                        </div>
                                    </div>

                                    <div className='NiDilu-middle col-md-4 mb-3'>
                                        <div className='card'>
                                            <img src={SamsungAProtector} alt="SamsungAProtector" />
                                        </div>
                                    </div>

                                    <div className='NiDilu-sides col-md-4 mb-3'>
                                        <div className='card'>
                                            <img src={SamsungSProtector} alt="SamsungSProtector" />
                                        </div>
                                        <div className='card'>
                                            <img src={sdCard8} alt="sdCard8" />
                                        </div>
                                    </div>

                                </div>

                            </Carousel.Item>

                            <Carousel.Item className='carousel-item'>
                                <div className='row'>

                                    <div className='NiDilu-sides col-md-4 mb-3'>
                                        <div className='card'>
                                            <img src={tecnoCover} alt="tecnoCover" />
                                        </div>
                                        <div className='card'>
                                            <img src={iphoneCover} alt="iphoneCover" />
                                        </div>
                                    </div>

                                    <div className='NiDilu-middle col-md-4 mb-3'>
                                        <div className='card'>
                                            <img src={tecnoProtector} alt="tecnoProtector" />
                                        </div>
                                    </div>

                                    <div className='NiDilu-sides col-md-4 mb-3'>
                                        <div className='card'>
                                            <img src={iphoneProtector} alt="iphoneProtector" />
                                        </div>
                                        <div className='card'>
                                            <img src={samsungAcover} alt="samsungAcover" />
                                        </div>
                                    </div>

                                </div>

                            </Carousel.Item>

                            {/* <Carousel.Item className='carousel-item'>
                                    <div className='row'>

                                        <div className='col-md-4 mb-3'>
                                            <div className='card'>
                                            <img src={NokiaScreen} alt="NokiaScreen" />
                                            <img src={Nokia} alt="Nokia" />
                                            </div>
                                        </div>
                                        <div className='col-md-4 mb-3'>
                                            <div className='card'>
                                                <img src="" alt="" />
                                            </div>
                                        </div>
                                        <div className='col-md-4 mb-3'>
                                            <div className='card'>
                                                <img src="" alt="" />
                                            </div>
                                        </div>

                                    </div>

                                </Carousel.Item> */}
                        </Carousel>

                    </div>

                </div>

            </div>
        );
    }
}

export default NiDilu;