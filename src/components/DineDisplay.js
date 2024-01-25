import React from 'react'
import TotalData from './Data/Totaldata'
import DineDish from './DineDish'
import "../components/HomePage.css"
import { useState } from 'react'
import Overlay from './Overlay'

const DineDisplay = (props) => {
    const { indexNum, FoodName } = props;
    // console.log(TotalData[7])
    // const indVal = props.indxval;
    // console.log(indVal)
    const [check, setCheck] = useState(false);
    const [overind, setOverind] = useState(0);

    // const [overlayData, setOverlayData] = useState(null);

    // const handleButtonClick = (DineData, ind, DineName) => {
    //     setOverlayData({ DineData, ind, DineName });
    // };

    // const handleOverlayClose = () => {
    //     setOverlayData(null);
    // };


    // const numStrat = Math.floor(Math.random() * 3)

    // const randomNum1 = 0;
    // const randomNum2 = randomNum1 + 1;
    // const randomNum3 = randomNum2 + 1;
    // const randomNum4 = randomNum3 + 1;
    // const randomNum5 = randomNum4 + 1;
    // const randomNum6 = randomNum5 + 1;
    // const randomNum7 = randomNum6 + 1;
    // const randomNum8 = randomNum7 + 1;

    const handleButtonClick = () => {
        setCheck(!check);
    }

    // const ExData = props.CousineData;
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td onClick={() => { handleButtonClick(); setOverind(0); }}>
                            <DineDish DineData={TotalData[indexNum]} ind={0} DineName={FoodName} />
                        </td>
                        <td onClick={() => { handleButtonClick(); setOverind(10); }}>
                            <DineDish DineData={TotalData[indexNum]} ind={10} DineName={FoodName} />
                        </td>
                    </tr>
                    <tr>
                        <td onClick={() => { handleButtonClick(); setOverind(2); }}>
                            <DineDish DineData={TotalData[indexNum]} ind={2} DineName={FoodName} />
                        </td>
                        <td onClick={() => { handleButtonClick(); setOverind(3); }}>
                            <DineDish DineData={TotalData[indexNum]} ind={3} DineName={FoodName} />
                        </td>
                    </tr>
                    <tr>
                        <td onClick={() => { handleButtonClick(); setOverind(5); }}>
                            <DineDish DineData={TotalData[indexNum]} ind={5} DineName={FoodName} />
                        </td>
                        <td onClick={() => { handleButtonClick(); setOverind(7); }}>
                            <DineDish DineData={TotalData[indexNum]} ind={7} DineName={FoodName} />
                        </td>
                    </tr>
                    <tr>
                        <td onClick={() => { handleButtonClick(); setOverind(8); }}>
                            <DineDish DineData={TotalData[indexNum]} ind={8} DineName={FoodName} />
                        </td>
                        <td onClick={() => { handleButtonClick(); setOverind(11); }}>
                            <DineDish DineData={TotalData[indexNum]} ind={11} DineName={FoodName} />
                        </td>
                    </tr>


                </tbody>






            </table>
            <div className="exCont" style={{ display: check ? 'block' : 'none' }}>
                <button className='overlay-btn' onClick={handleButtonClick}>&#10006;</button>
                <Overlay DineData={TotalData[indexNum]} DineName={FoodName} ind={overind} />
            </div>
        </>
    )
}

export default DineDisplay