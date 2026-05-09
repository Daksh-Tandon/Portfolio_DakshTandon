import React from 'react'
import { Routes ,Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import  Skills  from './components/Skills';
import Projects from './components/Projects';
import Achievment from './components/Achievment';
import Story from './components/Story';

const App = () => {
  return (
    <>
   
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/skills" element={<Skills/>}></Route>
      <Route path="/achievments" element={<Achievment/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path="/mystory" element={<Story/>}></Route>


    </Routes>
    </>


  )
}

export default App;