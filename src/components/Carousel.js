import React, { useEffect, useState } from 'react'
import Carouseldata from "../components/Data/CarouselData"
import "./HomePage.css"
import SrjLog from "../components/images/surajone8.png";

const Carousel = () => {

    const [num, SetNum] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            SetNum(num ? 0 : num + 1);
        }, 4000);
    });

    return (
        <>
            <div className="carousel-cont">
                <div className="carousel-item" style={{ backgroundImage: `url(${Carouseldata[num].imgurl})` }}>
                    <button className='decriment CarouselControl' onClick={() => SetNum(num ? 0 : num + 1)}>Prev</button>
                    <div className="carousel-text">
                        <img className='logo' src={SrjLog} alt="" />
                        <h2>{Carouseldata[num].line1}</h2>
                        <p>{Carouseldata[num].line2}</p>
                        <p>{Carouseldata[num].line3}</p>
                        {/* <button className='Carousel-text-btn'>View Our Menu</button> */}
                        <button className='Carousel-text-btn register-btn'>View Our Menu</button>
                    </div>
                    <button className='incriment CarouselControl' onClick={() => SetNum(num ? 0 : num + 1)}>Next</button>
                </div>
            </div>
        </>
    )
}

export default Carousel