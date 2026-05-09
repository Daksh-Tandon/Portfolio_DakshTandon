import React, { useState } from 'react'
import leftarrow from "../assets/leftarrow.svg"
import right from "../assets/rightarrow.svg"
import "./Story.css"
const StoryCard = ({data}) => {
    const [count, setcount] = useState(0)
    function handleleft(){
        if(count===0) return;
        setcount(count-1);

    }
    function handleright(){
        if(count===4){
            setcount(0);
            return;
        }
        setcount(count+1);

    }
  return (
    <div className='sc'>
 
            <button onClick={handleleft} id="left">
                <img src={leftarrow}></img>
            </button>
            <div className="cardsection">
                <h3>{data[count].title}</h3>
                <p className="datepara">{data[count].date}</p>
                <p>{data[count].description}</p>
                <p>I have learned {data[count].technologies.map(val=>(
                    <li>{val}</li>
                ))}</p>
                <p>{data[count].highlights.map((val)=>(
                    <li>{val}</li>
                    
                ))}</p>
                <p>My level is {data[count].level}</p>
            </div>
            
            <button onClick={handleright} id="right">
                <img src={right}></img>
            </button>
        
    </div>
  )
}

export default StoryCard