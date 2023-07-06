import axios from 'axios'
import React, { useState } from 'react'
import Homepage from './Components/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Updateuser from './Components/Updateuser'
import Saveuser from './Components/Saveuser'
import Fetchbyid from './Components/Fetchbyid'
import Fetchall from './Components/Fetchall'
import Deleteuser from './Components/Deleteuser'
import Verifybyphone from './Components/Verifybyphone'
import Verifybyemail from './Components/Verifybyemail'
import Edituser from './Components/Edituser'


const App = () => {
  
  return (
   <div>
    <BrowserRouter>
    <Homepage/>
    <Routes>
      <Route path='/save' element={ <Saveuser/>}/>
      {/* <Route path='/edit' element={ <Edituser/>}/> */}
      <Route path='/update' element={ <Updateuser/>}/>
      <Route path='/fetchbyid' element={<Fetchbyid/>}/>
      <Route path='/fetchall' element={<Fetchall/>}/>
      <Route path='/delete' element={ <Deleteuser/>}/>
      <Route path='/verifyphone' element={  <Verifybyphone/>}/>
      <Route path='/verifyemail' element={ <Verifybyemail/>}/>
      
    </Routes>


    </BrowserRouter>
    
    

   </div>
  )
}

export default App