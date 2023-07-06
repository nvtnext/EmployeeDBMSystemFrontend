import axios from 'axios'
import React, { useState } from 'react'
import ss from "./hm.module.css"
const Updateuser = () => {
    const[id, setId] = useState("")
    const[name, setName] = useState("");
  const[phone, setPhone] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const handleSubmit = (event)=>{
    const user={id, name, phone, password, email}
    axios.put("http://localhost:8080/users", user).then(()=>{console.log("Data has been Updated")})
    event.preventDefault();
  }
  return (
    
    <div id={ss.crr}>
      <h1>Update User Details</h1>
       <form>
         <label >
      Enter your Id:
      <input type="number" value={id} onChange={(e)=>setId(e.target.value)} />
    </label> <br /> <br />
    <label ></label>
    <label >
      Enter your name:
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    </label> <br /> <br />
    <label >
      Enter your Phone:
      <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} />
    </label> <br /> <br />
    <label >
      Enter your Email:
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    </label> <br /> <br />
    <label >
      Enter your password:
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
    </label> <br /> <br />
    <input type="submit" onClick={handleSubmit} />
    
   </form>
    </div>
   
  )
}

export default Updateuser