import React from 'react'
import TextSpace from './TextSpace'
import "../components/HomePage.css"
// import CoverLetterImg from "https://savory.qodeinteractive.com/wp-content/uploads/2016/10/passepartout-parallax1.jpg"

const CoverLetter = () => {
    return (
        <>
            <div className="coverLetter-cont">
                <div className="CoverLetter" style={{ backgroundImage: `url(https://savory.qodeinteractive.com/wp-content/uploads/2016/10/passepartout-parallax1.jpg)` }}>
                    <TextSpace line1={"TASTY AND CRUNCHY"} line2={"Book a Table"} line3_1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto"} line3_2={"doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo"} line3_3={"condorico consectetur adipiscing elitut aliquip."} />
                    {/* <button className='CoverLetterBtn'>Book Now</button> */}
                    <button className='CoverLetterBtn register-btn'>Book Now</button>
                </div>
            </div>
        </>
    )
}

export default CoverLetter