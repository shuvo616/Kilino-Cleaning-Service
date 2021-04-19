import React from 'react';
import pic1 from "../../image/team-01.jpg";
import pic2 from "../../image/team-02.jpg";
import pic3 from "../../image/team-03.jpg";

const ExpertInfo = () => {
    return (
        <section className="service pt-5 pb-5">
            <h1 className="titleText">Expert Team</h1>
            <div className="container">
                <div className="row mt-5">

                    <div className="col-md-4 col-sm-4">
                        <div className="serviceContent text-center">
                            <img src={ pic1} alt="" />
                            <h4>Samuel Wilton</h4>
                            <p>Office Cleaning Expert</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                        <div className="serviceContent text-center">
                            <img src={ pic2} alt="" />
                            <h4>Ophelia Bradtke</h4>
                            <p>Home Cleaning Expert</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                        <div className="serviceContent text-center">
                            <img src={ pic3} alt="" />
                            <h4>Cristian Nicolas</h4>
                            <p>Furniture Cleaning Expert</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExpertInfo;