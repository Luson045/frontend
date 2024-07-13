import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../css/Footer.css'; // Assuming you have a CSS file for styling the footer

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="/stocks">Stock Graphs</a></li>
                                <li><a href="/portfolio">Portfolio Management</a></li>
                                <li><a href="/resources">Learning Resources</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="/about">Company</a></li>
                                <li><a href="/about">Team</a></li>
                                <li><a href="/pricing">Pricing</a></li>
                                <li><a href="/terms">Terms</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>DISCLAIMER</h3>
                            <p>"This platform is designed for educational purposes only. It provides tools and resources to learn about stock trading using virtual money[which cannot be used for anything else]. No real money is involved in the transactions on this platform, and users cannot make any real financial gains or losses. Please consult a professional financial advisor before making any real investments."</p>
                            <br />
                        </div>
                        <div className="col item social">
                            <h3>Follow us on</h3>
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedin /></a>
                            <a href="#"><FaInstagram /></a>
                        </div>
                    </div>
                    <p className="copyright">Hello World © {currentYear}</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
