import React from "react";
import {AiFillInstagram} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {BiLogoGmail} from 'react-icons/bi';
import {FaXTwitter} from 'react-icons/fa6';

export const Footer = ()=>{
    return(
        <>
        <div>
        <footer className="pt-5 pb-4 bg-dark  ">
          <hr />
          <div className="container text-center text-md-left">
            <div className="row text-center text-md-left">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold  text-white">
                  Company
                </h5>
                <p className="text-white">
                  Happy Tails is a leading pet nutrition company dedicated to
                  providing high-quality pet food products. We focus on offering
                  tailored nutritional solutions for dogs and cats based on
                  their specific needs.
                </p>
              </div>
              <div className="col-md-2 col-lg-2col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-white">
                  Products
                </h5>
                <p>
                  <span style={{ textDecoration: "none",color:'white' }}>PetFood</span>
                </p>
                <p>
                  <span style={{ textDecoration: "none",color:'white' }}>Dog Food</span>
                </p>
                <p>
                  <span style={{ textDecoration: "none",color:'white' }}>Cat Food</span>
                </p>
              
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-white">
                  Services
                </h5>
                <p>
                  <span style={{ textDecoration: "none",color:'white' }}>Privacy Policy</span>
                </p>
                <p>
                  <span style={{ textDecoration: "none",color:'white' }}>
                    Return&Refund Policy
                  </span>
                </p>
                <p>
                  <span style={{ textDecoration: "none" ,color:'white'}}>Free Shipping</span>
                </p>
                <p>
                  <span style={{ textDecoration: "none",color:'white' }}>Security</span>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold  text-white">
                  Contact
                </h5>
                <p className="text-white">
                  <AiFillInstagram />  <BsFacebook /> <BsFacebook /> <FaXTwitter />
                </p>
                {/* <p className="text-white">
                  <BsFacebook />
                </p>
                <p className="text-white">
                  <BsFacebook />
                </p>
                <p className="text-white">
                  <FaXTwitter />
                </p> */}
              </div>
            </div>
            <hr className="mb-4"></hr>
            <div className="row align-items-center">
              <div>
                <p>Copyright @2023 All rights reserved by</p>
              </div>
            </div>
          </div>
          </footer>
        </div>
        
        
        
        
        
        </>
    )
}


