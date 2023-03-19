import { Component } from 'react';
import mtnLogo from '../images/mtn-logo-yellow.png'

// font awesome icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faLinkedinIn, faTwitterSquare, faWhatsappSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    render() {
        return (

            <div className='Footer'>
                <div className='footer-all'>

                    <div className='footer-contact-us'>

                        <div className='footer-need-help'>
                            <div><h1><FontAwesomeIcon className='footer-icon' icon={faComment} />  Need some help?</h1></div>
                            <div><img className='mtn-footer-logo' src={mtnLogo} alt="mtnLogo" /></div>
                            <div><h1><FontAwesomeIcon className='footer-icon' icon={faPhoneAlt} />  Call us on 100</h1></div>
                        </div>
                        <div className='footer-social-logo'>
                            <a href="https://www.facebook.com/MTNRW"><FontAwesomeIcon className='footer-icon' icon={faFacebookSquare} /></a>
                            <a href="https://www.linkedin.com/company/mtn-rwanda"><FontAwesomeIcon className='footer-icon' icon={faLinkedinIn} /></a>
                            <a href="https://twitter.com/MTNRwanda"><FontAwesomeIcon className='footer-icon' icon={faTwitterSquare} /></a>
                            <a href="https://wa.me/+250788312011"><FontAwesomeIcon className='footer-icon' icon={faWhatsappSquare} /></a>
                            <a href="https://www.instagram.com/mtnrwanda/"><FontAwesomeIcon className='footer-icon' icon={faInstagramSquare} /></a>
                            <a href="https://www.youtube.com/user/MTNRwandaBrand"><FontAwesomeIcon className='footer-icon' icon={faYoutubeSquare} /></a>
                        </div>

                    </div>

                    <hr />

                    <div className='footer-links'>

                        <div className='useful-links'>
                            <div>
                                <h3>Personal</h3>
                            </div>
                            <div>
                                <li>
                                    <a href="https://www.mtn.co.rw/voice-packs/"><p>Voice Packs</p></a>
                                    <a href="https://www.mtn.co.rw/data-bundle/"><p>Data Bundles</p></a>
                                    <a href="https://www.mtn.co.rw/yolo/"><p>Yolo</p></a>
                                    <a href="https://www.mtn.co.rw/mtn-prestige/"><p>MTN Prestige</p></a>
                                    <a href="https://www.mtn.co.rw/customer-service-forms/"><p>Customer Service forms</p></a>
                                    <a href="https://www.mtn.co.rw/sim-registration/"><p>SIM Card Registration</p></a>
                                </li>
                            </div>
                        </div>

                        <div className='useful-links'>
                            <div>
                                <h3>Business</h3>
                            </div>
                            <div>
                                <li>
                                    <a href="https://www.mtn.co.rw/category/business-solutions-category/cloud/"><p>Cloud</p></a>
                                    <a href="https://www.mtn.co.rw/communications/"><p>Communication</p></a>
                                    <a href="https://www.mtn.co.rw/category/business-solutions-category/networks/"><p>Connectivity</p></a>
                                    <a href="https://www.mtn.co.rw/category/business-solutions-category/mobility/"><p>Mobility</p></a>
                                </li>
                            </div>
                        </div>

                        <div className='useful-links'>
                            <div>
                                <h3>MoMo</h3>
                            </div>
                            <div>
                                <li>
                                    <a href="https://www.mtn.co.rw/remittance-tariffs/"><p>Remittance Tariffs</p></a>
                                    <a href="https://www.mtn.co.rw/momo-tariff/"><p>MOMO Tariff</p></a>
                                    <a href="https://www.mtn.co.rw/report-momo-fraud/"><p>Report MoMo Fraud</p></a>
                                    <a href="https://www.mtn.co.rw/momo-terms/"><p>MoMo Terms and Conditions</p></a>
                                    <a href="https://www.mtn.co.rw/mokash-terms-conditions/"><p>Mokash Terms & Conditions</p></a>
                                </li>
                            </div>
                        </div>

                        <div className='useful-links'>
                            <div>
                                <h3>Company</h3>
                            </div>
                            <div>
                                <li>
                                    <a href="https://www.mtn.co.rw/leadership/"><p>Leadership</p></a>
                                    <a href="https://www.mtn.co.rw/foundations/"><p>Foundation</p></a>
                                    <a href="https://www.mtn.co.rw/careers/"><p>Careers</p></a>
                                    <a href="https://www.mtn.co.rw/tenders/"><p>Tenders</p></a>
                                    <a href="https://www.mtn.co.rw/newsroom/"><p>Newsroom</p></a>
                                    <a href="https://www.mtn.co.rw/contact-us/"><p>Contact Us</p></a>
                                </li>
                            </div>
                        </div>

                        <div className='useful-links'>
                            <div>
                                <h3>Info Center</h3>
                            </div>
                            <div>
                                <li>
                                    <a href="https://www.mtn.co.rw/sim-registration/"><p>SIM card Registration</p></a>
                                    <a href="https://www.mtn.co.rw/book-appointment/"><p>Book Appointment</p></a>
                                    <a href="https://www.mtn.co.rw/home-internet-form/"><p>Home Internet form</p></a>
                                    <a href="https://www.mtn.co.rw/report-momo-fraud/"><p>Report MoMo Fraud</p></a>
                                    <a href="https://www.mtn.co.rw/faqs/"><p>FAQs</p></a>
                                </li>
                            </div>
                        </div>

                    </div>

                    <hr />

                    <div className='copyright-container'>
                        <strong><p>© 2022 MTN Rwanda, All rights reserved</p></strong>
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;