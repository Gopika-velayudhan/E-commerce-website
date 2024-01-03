import React from "react";
import { Carousel } from "react-bootstrap";
import './Home.css';
import Banner from "./Banner";
import Navbar1 from "../Components/Navbar/Navbar2";


const Home = ()=>{
    return(
        <>
        <Navbar1/>
        <div className="home">
        
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img className="d-block w-100" style={{maxHeight:"100 vh"}} src="https://dearpet.in/cdn/shop/files/Desktop_website_banner_Jackets.png?v=1700053077" alt="first slide"/>
                    <Carousel.Caption>
                        <h5></h5>
                        <p></p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                     <img className="d-block w-100" style={{maxHeight:"100 vh"}} src="https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame_106721434_7d34cf7a-47c8-438d-9edf-d7677026a57f.png?v=1702649653" alt="second slide"></img> 
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" style={{maxHeight:"100 vh"}} src="https://dearpet.in/cdn/shop/files/Website_Desktop_New_Banner.png?v=1703668374" alt="third slide"/>
                </Carousel.Item>
            </Carousel>
            <Banner/>
        </div>
        </>
    )
}
export default Home;