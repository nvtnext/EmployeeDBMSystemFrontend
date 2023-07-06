import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ss from "./hm.module.css"

const Verifybyemail = () => {
    let [d, setD] = useState("")
    const[id, setId] = useState("")
    const[name, setName] = useState("");
  const[phone, setPhone] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const handleSubmit = (event)=>{
    event.preventDefault();
    
    axios.post(`http://localhost:8080/users/verify-email?email=${email}&password=${password}`)
    .then((resp)=>{
      event.preventDefault();
      console.log(resp)
        console.log("Data Found")
        setD("user found")
        console.log(resp.data.body.name)
        setName(resp.data.body.name)
        setPhone(resp.data.body.phone)
        setEmail(resp.data.body.email)
        setPassword(resp.data.body.password)
        setId(resp.data.body.id)
    })
    .catch(()=>{
      setD("User not found")
        console.log("data not found")
        setName(" ")
        setPhone(" ")
        setPassword(" ")
        setEmail(" ")
        setId(" ")
    })
    
    
  }
  return (
    <div id={ss.crr}>
      <h1>Verify User by eMail, Password</h1>
    <form>
  <label >
Enter your Email:
<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
</label> <br /> <br />
<label >
Enter your Password:
<input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
</label> <br /> <br />
  <input type="submit" onClick={handleSubmit} />
  
   
 </form>
 <div>
 <table>
              <th colSpan={"2"}><h4>{d} </h4></th>
              <tr>
                <td> Id </td>
                <td>: {id}</td>
              </tr>
              <tr>
                <td> Name </td>
                <td>: {name}</td>
              </tr>
              <tr>
                <td> Phone </td>
                <td>: {phone}</td>
              </tr>
              <tr>
                <td> Email </td>
                <td>: {email}</td>
              </tr>
              <tr>
                <td> Password </td>
                <td>: {password}</td>
              </tr>
             
            </table>
 </div>
  </div>
 
  )
}

export default Verifybyemail