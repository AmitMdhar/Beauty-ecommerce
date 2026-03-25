import React from 'react'

import Hero from './component/Hero'
import Navbar from './component/NavBar'
import Featured from './component/Featured'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

//up to hooks
// import IdCard from './component/IdCard'
// import Robot from'@/assets/robot.png'
// import Page1 from './component/Page1'
// import Button from './component/Button'


function App() {
  return (
    // rfce
    // rafce
    // rfc
    // rafc
    
    <div className='mx-20'>
      <Navbar/>
      <Hero />
    <Featured/>
    {/* day-8 props passing */}
    {/* <IdCard img={Robot} name='Amit' roll='12' add='bharatpur'/>
    <IdCard/>
    <IdCard/> */}
    {/* <Page1 text='this text is for props testing' img={Robot} css= {`flex p-2 gap-10 mt-20`}/>
    <Page1 text='this text is for props testing' img={Robot} css= {`flex p-2 gap-10 flex-row-reverse `}/>
     <Button /> */}

     {/* for routing */}
     {/* <Routes>
      <Route path="/" element ={<Home />}/>
      <Route path="/contact" element ={<Contact />}/>

     </Routes> */}
     
    </div>
   
  )
}

export default App