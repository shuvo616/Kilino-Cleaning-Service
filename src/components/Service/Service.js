import React, { useEffect, useState } from 'react';
import './Service.css'

import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Service = () => {
    const [service, setService] = useState([])
    useEffect( () => {
        fetch('https://blooming-springs-70688.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

    return (
        <section className="service pt-5 pb-5">
            <div className="container">
            <h1 className="titleText">Services</h1>
                <div className="row mt-5">                   
                    {
                        service.map(serviceInfo => <ServiceDetails  key={service._id} serviceInfo={serviceInfo} ></ServiceDetails> )
                    }    
                </div>
            </div>
        </section>
    );
};

export default Service;