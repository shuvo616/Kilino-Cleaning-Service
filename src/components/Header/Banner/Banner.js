import React from 'react';
import banner from '../../../image/banner-bg.png'
import man from '../../../image/banner-man.png'
import './Banner.css'

const Banner = () => {
    const style = {
        backgroundImage: ` url(${banner})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        paddingBottom:'100px'
    }
   
    return (
        <section style={style} className="bannerMain pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-4">
                        <img className="img-fluid" src={man} alt=""/>
                    </div>
                    <div className="col-md-6 col-sm-4 d-flex justify-content-center align-items-center ">
                        <div className="bannerCaption">
                            <h1 className="text-white Caption">Best Cleaning <br/> Services</h1>
                            <p className="captionDetails">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus dictum eros odio bibendum ac pharetra</p>
                            <button className="main-btn main-btn-2 ml-4"> Learn More </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;