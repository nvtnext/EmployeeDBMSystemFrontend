import axios from 'axios'
import React, { useState} from 'react'
import ss from "./hm.module.css"
import { useNavigate } from 'react-router-dom'

const Saveuser = () => {
    const[name, setName] = useState("");
  const[phone, setPhone] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  let navigate = useNavigate()
  

  let handleSubmit = (event)=>{
    const user={name, phone, password, email}
    axios.post("http://localhost:8080/users", user).then(()=>{console.log("Data has been added")})
    navigate("/fetchall")
     event.preventDefault();
    
  }
  return (
    <div id={ss.crr}>
      <h1>Save User / enter User details</h1>
      <form>
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

export default Saveuser