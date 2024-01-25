import React from 'react'
import { useEffect, useState } from 'react';
import TextSpace from './TextSpace'
import CommentCard from './CommentCard';
import CommentData from "./CommentData";

const CommentSec = () => {

    const [num, SetNum] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (num === 3) {
                SetNum(0);
            } else {
                SetNum(num + 1);
            }
        }, 9000);
    });



    return (
        <>
            <div className="CommentSec-cont">
                <div className="CommentSection" style={{ backgroundImage: `url(https://savory.qodeinteractive.com/wp-content/uploads/2016/10/passepartout-parallax2.jpg)` }}>
                    <TextSpace line1={"TASTY AND CRUNCHY"} line2={"Our Starters"} line3_1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto "} line3_2={"doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo"} line3_3={"condorico consectetur adipiscing elitut aliquip."} />
                    <div className="Card-holder">
                        <button className='decriment CarouselControl' onClick={() => SetNum(num ? 0 : num + 1)}>Prev</button>

                        <CommentCard CommentData={CommentData[num]} />
                        <CommentCard CommentData={CommentData[num + 1]} />

                        <button className='incriment CarouselControl' onClick={() => SetNum(num ? 0 : num + 1)}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentSec