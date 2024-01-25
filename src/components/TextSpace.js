import React from 'react'
import "../components/HomePage.css"

const TextSpace = (props) => {
    const line1 = props.line1;
    const line2 = props.line2;
    const line3_1 = props.line3_1;
    const line3_2 = props.line3_2;
    const line3_3 = props.line3_3;

    return (
        <>
            <div className="textSpace-cont">
                <h6>{line1}</h6>
                <h3>{line2}</h3>
                <p className='textSpace-text'>{line3_1} <br /> {line3_2} <br /> {line3_3}</p>
            </div>
        </>
    )
}

export default TextSpace