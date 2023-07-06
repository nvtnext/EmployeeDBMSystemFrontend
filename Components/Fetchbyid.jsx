import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ss from "./hm.module.css"

const Fetchbyid = () => {
  let [d, setD] = useState("")
    const[id, setId] = useState("")
    const[name, setName] = useState("");
  const[phone, setPhone] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  
    const handleSubmit = (event)=>{
        event.preventDefault();
        
        axios.get(`http://localhost:8080/users/${id}`)
        .then((resp)=>{
          event.preventDefault();
            console.log("Data Found")
            setD("user found")
            console.log(resp.data.body.name)
            setName(resp.data.body.name)
            setPhone(resp.data.body.phone)
            setEmail(resp.data.body.email)
            setPassword(resp.data.body.password)
        })
        .catch(()=>{
          setD("User not found")
            console.log("data not found")
            setName(" ")
            setPhone(" ")
            setPassword(" ")
            setEmail(" ")
        })
        
        
      }
  return (
    <div id={ss.crr}>
      <h1>fetch User By Id</h1>
      <form>
    <label >
 Enter your Id:
 <input type="number" value={id} onChange={(e)=>setId(e.target.value)} />
</label> <br /> <br />
    <input type="submit" onClick={handleSubmit} />
    
     
   </form>
   <div >
   

    <table>
              <th colSpan={"2"}><h4>{d} for Id :  {id}</h4></th>
              
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

export default Fetchbyid