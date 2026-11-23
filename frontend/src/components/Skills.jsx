import React, { useEffect } from 'react'

 const Skills = () => {
  // useEffect(() => {
    
    
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  
  return (
    <div className="skills">
      <div className="card">
        <h3>Programming Languages</h3>
        <ul className='card-ul'>
          <li>C</li>
          <li>C++</li>
          <li>JAVA</li>
        </ul>
      </div>
      <div className="card">
        <h3>Frontend Skills</h3>
        <ul className='card-ul'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>REACT JS</li>
        </ul>
      </div>
      <div className="card">
        <h3>Backend Skills</h3>
        <ul className='card-ul'>
          <li>NODE-JS</li>
          <li>EXPRESS-JS</li>
          <li>MONGO-DB</li>
        </ul>
      </div>
       <div className="card">
        <h3>AI-ML</h3>
        <ul className='card-ul'>
          <li>NUMPY</li>
          <li>PANDAS</li>
          <li>Machine Learning</li>
         <li>Langchain</li>
         
         
        </ul>
      </div>
      
    </div>
  )
}
export default Skills;
