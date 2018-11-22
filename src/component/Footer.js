import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <p>Our Social Media</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/profile.php?id=100004721355270" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://twitter.com/GbiTamanMahkota" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/gbitamanmahkota/?hl=el" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                            <br/>
                            <p className="copyright">Copyright &copy; GBI Taman Mahkota 2018</p>
                        </div>
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;
