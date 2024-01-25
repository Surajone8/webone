import React from 'react'
// import TotalData from './Data/Totaldata'
import "./HomePage.css"
import Carousel from './Carousel'
import TextSpace from './TextSpace'
import DineDisplay from './DineDisplay'
import CoverLetter from './CoverLetter'
import CommentSec from './CommentSec'
import ReservationForm from './ReservationForm'

const HomePage = () => {
    // console.log(TotalData[0].bbqs)
    return (
        <>
            {/* <img src={TotalData[1].best_foods[0].img} alt="" /> */}
            <Carousel />
            <TextSpace line1={"TASTY AND CRUNCHY"} line2={"Our Starters"} line3_1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto "} line3_2={"doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo"} line3_3={"condorico consectetur adipiscing elitut aliquip."} />
            <DineDisplay indexNum={7} FoodName="fried_chicken" />
            <CoverLetter />
            <TextSpace line1={"TASTY AND CRUNCHY"} line2={"Our Main Meals"} line3_1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto "} line3_2={"doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo"} line3_3={"condorico consectetur adipiscing elitut aliquip."} />
            {/* <DineDisplay /> */}
            <DineDisplay indexNum={1} FoodName="best_foods" />
            <CommentSec />
            <TextSpace line1={"TASTY AND CRUNCHY"} line2={"Our Desserts"} line3_1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto "} line3_2={"doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo"} line3_3={"condorico consectetur adipiscing elitut aliquip."} />
            {/* <DineDisplay /> */}
            <DineDisplay indexNum={5} FoodName="desserts" />
            <ReservationForm />
        </>
    )
}

export default HomePage