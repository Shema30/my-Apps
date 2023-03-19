import React, { Component } from 'react';
import myMtnApp from '../images/myMtnApp.png'
import ayobaApp from '../images/ayobaApp.png'
import yelloTv from '../images/yelloTv.png'
import momoApp from '../images/momoApp.png'

class Apps extends Component {
    render() {
        return (
            <div className='App'>
                <div className='apps-head'>
                    <h1>App</h1>
                </div>
                <div className='apps-app row'>

                    <div className='box col-lg-3 col-md-6 col-sm-12'>
                        <a href="https://www.mtn.co.rw/mtn-my-app/"><img className='app-img' src={myMtnApp} alt="myMtnApp" /></a>
                        <p>My Mtn App</p>
                    </div>
                    <div className='box col-lg-3 col-md-6 col-sm-12'>
                        <a href="https://www.mtn.co.rw/ayoba/"><img className='app-img' src={ayobaApp} alt="myMtnApp" /></a>
                        <p>Ayoba App</p>
                    </div>
                    <div className='box col-lg-3 col-md-6 col-sm-12'>
                        <a href="https://www.mtn.co.rw/yello-tv/"><img className='app-img' src={yelloTv} alt="myMtnApp" /></a>
                        <p>YelloTv</p>
                    </div>
                    <div className='box col-lg-3 col-md-6 col-sm-12'>
                        <a href="https://www.mtn.co.rw/momo/"><img className='app-img' src={momoApp} alt="myMtnApp" /></a>
                        <p>momoApp</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Apps;