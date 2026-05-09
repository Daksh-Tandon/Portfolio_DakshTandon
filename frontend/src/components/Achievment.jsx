import React from 'react'
import jeemain from "../assets/jeemain.avif"
import msit from "../assets/msit.jpg"
import nptel from "../assets/nptel.png"
import part from "../assets/part.jpg"
import gdg from "../assets/gdg.png"
import "./Achievment.css"
const Achievment = () => {
  return (

    <div className='achieve-text'>
        <div className="card">
            <img src={jeemain} alt="Jee-Main"></img>
            <h3>Jee Main</h3>

            <p>I have scored 95 percentile in my Jee main without any coaching
                and get admission in one of the top renowned college of IPU MSIT
                I also got qualified for Jee advanced
            </p>
        </div>
        <div className="card">
            <img src={msit} alt="Msit"></img>
            <h3>Top Scorer</h3>

            <p> I am a topper of my college in my first year I got rank 3 in cse department

            </p>
        </div>
        <div className="card">
            <img src={nptel} alt="NPTEL"></img>
            <h3>NPTEL</h3>

            <p> I have scored 95/100 in Data analytics in python NPTEL course and I was in top 1%
               The course help me to understand the statistics involved behind data science
            </p>
        </div>
        <div className="card">
            <img src={part} alt="Participations"></img>
            <h3>Always Ready for Participation</h3>

            <p> I am a person who is always ready for participation in tech events 
                Recently I have participated in DSA contest AlgoQuest organized by GDG Society in AVENSIS26
               and have end up at 4th position.
               I have also participated in CTR+ ALT +VIBE hackathon in our college
               This participation helps me to understand how I can improve my skills in order to win a particular event
            </p>
        </div>
         <div className="card">
            <img src={gdg} alt="Society"></img>
            <h3>GDG MEMEBER</h3>

            <p> There were times where I could get selected for a single society but  with harsh practice and revision of my skills
                I got enrolled in GDG both as  a DSA and WEB DEVELOPMENT Member
            </p>
        </div>
        
    </div>
   
  )
}

export default Achievment