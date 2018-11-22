import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div class="container text-white">
                    <div class="row">
                        <div className="col-lg-4 mx-auto">
                            <h2>Contact us</h2>
                            <p id="emailHelp" class="form-text">Feel free to contact us for any inquiries on: </p>
                            <span>
                                <i class="fas fa-map-marker-alt"></i>
                                <span class="lead inl"> &ensp; Address</span>
                            </span>
                            <p class="lnhei">Perumahan Taman Mahkota blok. C2 no. 7-8, Jln. Husein Sastranegara, Rawa Bokor, Benda, Tangerang </p>
                            
                            <span>
                                <i class="fas fa-phone"></i>
                                <span class="lead inl">&ensp; Phone</span>
                            </span>
                            <p>(+62) 812-1344-7582</p>
                            <span>
                                <i class="far fa-envelope"></i>
                                <span class="lead inl">&ensp; Email</span>
                            </span>
                            <p>gbitamanmahkota@gmail.com</p>
                        </div>

                        <div className="col-lg-4 col-sm-12 mx-auto">
                        <iframe id="gmaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.096091506521!2d106.68536611534067!3d-6.117765995570253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02f29b1b57bb%3A0x9c96334b4b7e8cd6!2sGBI+TAMAN+MAHKOTA!5e0!3m2!1sid!2sid!4v1542871953165" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                        </div>
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
