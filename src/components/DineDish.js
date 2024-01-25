import React from 'react'
import "../components/HomePage.css"

const DineDish = (props) => {
    const { DineData, ind, DineName } = props;
    // const DineData = props.DineData;
    // const ind = props.ind;
    // console.log(DineData);
    // console.log(DineData.fried_chicken[0]);
    // let currDish = DineData.fried_chicken[ind];
    let currDishData = DineData[DineName];
    let currDish = currDishData[ind];
    return (
        <>
            <div className="DineDish-cont">
                <img className='DineDish-img' src={currDish.img} alt="" />
                <div className="DineDish-description">
                    <div className="DineDish-text">
                        <h6>{currDish.name}</h6>
                        {/* <hr /> */}
                        <h5>Rs. {currDish.price}</h5>
                    </div>
                    <div className="DineDish-desc">
                        <p className='DineDish-text-para'>{currDish.dsc}</p>
                    </div>
                </div>

            </div>


        </>
    )
}

export default DineDish