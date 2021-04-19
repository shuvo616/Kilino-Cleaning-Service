import React from 'react';
import './Footer.css';
import logo from '../../image/logo.png'

const Footer = () => {
    return (
       <footer className="footer mt-5 ">
           <div className="container">
               <div className="row">
                   <div className="col-md-4 col-sm-12">
                       <img src={logo} alt=""/>
                       <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   </div>
                   <div className="col-md-4 col-sm-12">
                       <h2>Service</h2>
                       <li>Office Cleaning</li>
                       <li>House Cleaning</li>
                       <li>Hotel Cleaning</li>
                       <li>Cloth Cleaning</li>
                       <li>Furniture Cleaning</li>
                   </div>
                   <div className="col-md-4 col-sm-12">
                       <h2>Contact</h2>
                       <p>2289  Oak Street, Old Forge, NY 13420</p>
                       <p>Phone : +125 658 987</p>
                       <p>Email: Clear@gmail.com</p>
                   </div>
                   <div>
                        <p className="text-center text-white mt-5">Copyright © 2021 Kilino All Rights Reserved</p>
                   </div>
               </div>
              
           </div>
        
       </footer>
    );
};

export default Footer;