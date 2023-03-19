import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import myMTNavatar from '../images/myApp-Carousel-Avatar.png'

class Deals extends Component {
    render() {
        return (
            <div className='deal'>
                <div className='deals-container'>

                    <div className='deal-head'>
                        <div>
                            <h1>Deals</h1>
                        </div>
                        <div>
                            <button className='deal-btn'><a href="https://www.mtn.co.rw/deals/">All Deals</a></button>
                        </div>
                    </div>

                    <div className='deal-carousel'>

                        <Carousel className='carousel'>

                            <Carousel.Item className='carousel-item'>
                                <div className='row'>

                                    <div className='col-md-4 mb-3'>
                                        <div className='card'>
                                            <img src="https://scontent.fkgl3-1.fna.fbcdn.net/v/t39.30808-6/302132433_5343665112337509_7848160140647136323_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=2c4854&_nc_ohc=30PAWLoXpbAAX-EIvP6&_nc_ht=scontent.fkgl3-1.fna&oh=00_AfAUpG18lOg5kMbxzkvLhBVauBo1PKp08uQ0uzSKzi1o1g&oe=6418C686" alt="Mtn-Avatar" />
                                        </div>
                                    </div>
                                    <div className='col-md-4 mb-3'>
                                        <div className='card'>
                                            <img src={myMTNavatar} alt="myMtnApp-Avatar" />
                                        </div>
                                    </div>
                                    <div className='col-md-4 mb-3'>
                                        <div className='card'>
                                            <img src="https://scontent.fkgl3-1.fna.fbcdn.net/v/t1.6435-9/99142325_10151475290139987_1056959441154342912_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=973b4a&_nc_ohc=bTHrDtfyhHIAX9a5Yma&_nc_ht=scontent.fkgl3-1.fna&oh=00_AfBWGGhjiuYLDKJ8DTZnvOvSO0UQZWtS6iFfqUCzIwj5Yg&oe=643B7497" alt="Ayoba App Avatar" />
                                        </div>
                                    </div>

                                </div>

                            </Carousel.Item>
                            <Carousel.Item className='carousel-item'>
                                <div className='row'>

                                    <div className='col-md-4 mb-3'>
                                        <div className='card'>
                                            <img src="https://pbs.twimg.com/media/Fo7peMvaIAMWnbZ?format=jpg&name=medium" alt="Mtn-Avatar" />
                                        </div>
                                    </div>
                                    <div className='col-md-4 mb-3'>
                                        <div className='card'>
                                            <img src={myMTNavatar} alt="myMtnApp-Avatar" />
                                        </div>
                                    </div>
                                    <div className='col-md-4 mb-3'>
                                        <div className='card'>
                                            <img src="https://pbs.twimg.com/media/FWeN6EnWYAc0BjQ?format=jpg&name=medium" alt="Ayoba App Avatar" />
                                        </div>
                                    </div>

                                </div>

                            </Carousel.Item>

                        </Carousel>

                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Deals;