import React from 'react'
import "./Intro.css"
import icon from "../assets/icon.png"
const Intro = () => {
  return (
    <div className="main">
        <h3>Educational Journey</h3>
        <div className="NCJPS">
            <p>10+2 from Nc Jindal Public school</p>

        </div>
        <div className="icon">
            <img src={icon} className='imgicon' ></img>
        </div>
        <div className="Msit">
            <p>Currently in My second year of Btech Journey at MSIT</p>
        </div>

    </div>
  )
}

export default Intro