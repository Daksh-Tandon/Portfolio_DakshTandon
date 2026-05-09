import React from 'react'
import daksh from "../assets/daksh.jpg"
import "./Home.css"
import Location from './Location'
import { useState,useEffect } from 'react'
import Intro from './Intro'
import NavBar from './NavBar'
import Footer from './Footer'
const Home = () => {
  const [anim, setanim] = useState(false)
  useEffect(() => {
    setanim(true);
  }, [])
  
  return (
    <div className='home'>
      <div className={`head ${anim ? "fade-in" : ""}`}>
        <h1>Welcome To My Portfolio</h1>
      </div>
       
          <NavBar/>

        
        <div className={`imgcont ${anim ? "fade-in": ""}`}>
            <img src={daksh} alt="Daksh-Tandon"></img>
        </div>
        <Intro/>
        <div className="journey">
              <p>
            Hello! My name is Daksh Tandon. My journey began with a curiosity for web development. 
            I started learning HTML, CSS, and JavaScript, and quickly discovered a passion for building interactive applications.
          </p>
          <p>
            As I progressed, I explored React.js to create dynamic user interfaces and then ventured into Node.js and MongoDB 
            to develop full-stack applications. Participating in hackathons became my playground to experiment, learn, and showcase my skills.
          </p>
          <p>
            Every project, every challenge, and every line of code has taught me something new. 
            I believe that learning is a journey, not a destination, and I’m excited for the opportunities and growth that lie ahead.
          </p>

        </div>
        <Location/>
        <div className="hobbies">
          <h3>My Hobbies</h3>
          <div className="hob">
            <ul className='List'>
              <li>Playing badminton in free time to stay active and refreshed</li>
              <li>Solving mathematics problems, especially for logic building</li>
              <li>Practicing DSA nowadays to improve problem-solving skills</li>
              <li>Watching Bollywood movies for entertainment and relaxation</li>
            </ul>
          </div>
        </div>
        <Footer/>


    </div>
  )
}

export default Home