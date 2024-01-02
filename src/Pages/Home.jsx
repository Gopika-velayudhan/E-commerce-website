import React from "react";
import { Carousel } from "react-bootstrap";
import './Home.css';
import Banner from "./Banner";
import Navbar1 from "../Components/Navbar/Navbar1";


const Home = ()=>{
    return(
        <>
        <Navbar1/>
        <div className="home">
        
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img className="d-block w-100" style={{maxHeight:"100 vh"}} src={require('../Components/Assests/fifth slide.jpg')} alt="first slide"/>
                    <Carousel.Caption>
                        <h5></h5>
                        <p></p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                     <img className="d-block w-100" style={{maxHeight:"100 vh"}} src={require('../Components/Assests/home8.jpg')} alt="second slide"></img> 
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" style={{maxHeight:"100 vh"}} src={require("../Components/Assests/home4.webp")} alt="third slide"/>
                </Carousel.Item>
            </Carousel>
            <Banner/>
        </div>
        </>
    )
}
export default Home;