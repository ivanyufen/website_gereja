import React, { Component } from "react";

class Services extends Component {
    render() {
        return (
            <section id="belief">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Our Belief</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <span className="fa-stack fa-4x mb-5">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-cross fa-stack-1x fa-inverse"></i>
                            </span>
                            <h3 className="text-muted section-subheading belief-para">Kami percaya Yesus adalah Anak Allah yang, dalam kasih-Nya yang besar, datang ke
                            bumi untuk menghapus dosa-dosa kita dengan mati di kayu salib, dan bangkit kembali pada hari ketiga untuk
                            pembenaran kita. Karena kita telah dibenarkan dan dijadikan orang benar, kita memiliki hidup yang kekal dan
                            hubungan dengan Bapa Surgawi kita, dan kita dapat menjalani kehidupan kita dengan bimbingan Roh Kudus,
                            membantu kita memenuhi tujuan hidup kita dan membawa kemuliaan kepada-Nya. Amin.</h3>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Services;
