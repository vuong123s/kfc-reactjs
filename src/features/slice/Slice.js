import Img1 from "./image/1.png"
import Img2 from "./image/2.png"
import Img3 from "./image/3.png"
import Img4 from "./image/4.png"
import Img5 from "./image/5.png"
import Img6 from "./image/6.png"
import Img7 from "./image/7.png"
import Img8 from "./image/8.png"
import React, { useState } from 'react';
import './slice.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames';

const Slice = (props) => {
    let sliceImg = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8]
    let counter = 2

    const getData = (e) => {
        e.target.control.checked = true
        counter = Number(e.target.control.id[5])
        console.log(e.target.control.id[5])
    }

    setInterval(() => {
        document.getElementById('radio' + String(counter)).checked = true
        counter++
        if(counter > 8){
            counter = 1
        }
    }, 8000);



    return (
        <div>
            <div>
                <div className="style-slice">
                    <input type='radio' name='radio-btn' id='radio1' checked />
                    <input type='radio' name='radio-btn' id='radio2' />
                    <input type='radio' name='radio-btn' id='radio3' />
                    <input type='radio' name='radio-btn' id='radio4' />
                    <input type='radio' name='radio-btn' id='radio5' />
                    <input type='radio' name='radio-btn' id='radio6' />
                    <input type='radio' name='radio-btn' id='radio7' />
                    <input type='radio' name='radio-btn' id='radio8' />

                    <div className='background'></div>
                    <div className="style-img" >    
                        {sliceImg.map((x) => {
                            return <div className='slice'>
                                    <img src={x} />
                                </div>
                            })
                        }
                    </div>

                    <div className="button-slice">
                        <label onClick={getData} for='radio1' className='manual-btn check1' ></label>
                        <label onClick={getData} for='radio2' className='manual-btn check2' ></label>
                        <label onClick={getData} for='radio3' className='manual-btn check3' ></label>
                        <label onClick={getData} for='radio4' className='manual-btn check4' ></label>
                        <label onClick={getData} for='radio5' className='manual-btn check5' ></label>
                        <label onClick={getData} for='radio6' className='manual-btn check6' ></label>
                        <label onClick={getData} for='radio7' className='manual-btn check7' ></label>
                        <label onClick={getData} for='radio8' className='manual-btn check8' ></label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slice;