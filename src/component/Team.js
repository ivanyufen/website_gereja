import React, { Component } from "react";

class Team extends Component {
    render() {
        return (
            <section id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Our Pastor</h2>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="img/team/pdtrinson.jpg" alt="" />
                                <h4>Pdt. Rinson Butar-Butar</h4>
                                <p className="text-muted">Senior Pastor</p>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/pdt.Rinson.butarbutar" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 text-center my-auto text-muted">
                        <p>Pdt. Rinson is one of the founder of GBI Taman Mahkota. His vision to teach and turn ordinary church member into Christ's army has bla bla bla.
                        Pdt. Rinson is one of the founder of GBI Taman Mahkota. His vision to teach and turn ordinary church member into Christ's army has bla bla bla.
                        Pdt. Rinson is one of the founder of GBI Taman Mahkota. His vision to teach and turn ordinary church member into Christ's army has bla bla bla.
                        Pdt. Rinson is one of the founder of GBI Taman Mahkota. His vision to teach and turn ordinary church member into Christ's army has bla bla bla.
                        </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;
