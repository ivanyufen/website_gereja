import React, { Component } from "react";

class servicesGrid extends Component {
    render() {
        return (
            < section className = "bg-light" id = "services" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Our Services</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 services-item">
                            <a className="services-link" data-toggle="modal" href="#servicesModal1">
                                <div className="services-hover">
                                    <div className="services-hover-content">
                                        <i>Click for more info</i>
                                    </div>
                                </div>
                                <img className="img-fluid" src="img/services/sunday.jpg" alt="" />
                            </a>
                            <div className="services-caption">
                                <h4>Ibadah Umum</h4>
                                <p className="text-muted">Setiap Minggu</p>
                                <p className="text-muted">10.00 WIB & 17.00 WIB</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 services-item">
                            <a className="services-link" data-toggle="modal" href="#servicesModal2">
                                <div className="services-hover">
                                    <div className="services-hover-content">
                                        <i>Click for more info</i>
                                    </div>
                                </div>
                                <img className="img-fluid" src="img/services/youth.jpg" alt="" />
                            </a>
                            <div className="services-caption">
                                <h4>Ibadah Youth</h4>
                                <p className="text-muted">Setiap Sabtu</p>
                                <p className="text-muted">19.00 WIB</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 services-item">
                            <a className="services-link" data-toggle="modal" href="#servicesModal3">
                                <div className="services-hover">
                                    <div className="services-hover-content">
                                        <i>Click for more info</i>
                                    </div>
                                </div>
                                <img className="img-fluid" src="img/services/kids.jpg" alt="" />
                            </a>
                            <div className="services-caption">
                                <h4>Sekolah Minggu</h4>
                                <p className="text-muted">Setiap Minggu</p>
                                <p className="text-muted">07.30 WIB</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 services-item">
                            <a className="services-link" data-toggle="modal" href="#servicesModal4">
                                <div className="services-hover">
                                    <div className="services-hover-content">
                                        <i>Click for more info</i>
                                    </div>
                                </div>
                                <img className="img-fluid" src="img/services/04-thumbnail.jpg" alt="" />
                            </a>
                            <div className="services-caption">
                                <h4>KPS</h4>
                                <p className="text-muted">Minggu ke 1 & 3</p>
                                <p className="text-muted">19.00 WIB</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 services-item">
                            <a className="services-link" data-toggle="modal" href="#servicesModal5">
                                <div className="services-hover">
                                    <div className="services-hover-content">
                                        <i>Click for more info</i>
                                    </div>
                                </div>
                                <img className="img-fluid" src="img/services/05-thumbnail.jpg" alt="" />
                            </a>
                            <div className="services-caption">
                                <h4>WBI</h4>
                                <p className="text-muted">Minggu ke 2 & 4</p>
                                <p className="text-muted">19.00 WIB</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 services-item">
                            <a className="services-link" data-toggle="modal" href="#servicesModal6">
                                <div className="services-hover">
                                    <div className="services-hover-content">
                                        <i>Click for more info</i>
                                    </div>
                                </div>
                                <img className="img-fluid" src="img/services/06-thumbnail.jpg" alt="" />
                            </a>
                            <div className="services-caption">
                                <h4>Komsel</h4>
                                <p className="text-muted">Setiap Rabu</p>
                                <p className="text-muted">19.00 WIB*</p>
                            </div>
                        </div>
                    </div>
                </div>
      </section >
        );
    }
}

export default servicesGrid;
