import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ss from "./hm.module.css"

const Fetchall = () => {
  let [d, setD] = useState("")
  
    const[id, setId] = useState("")
    const[name, setName] = useState("");
  const[phone, setPhone] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  let [data, setData] = useState([])
useEffect(()=>{
  axios.get(`http://localhost:8080/users`)
  .then((response)=>{
    setData(response.data.body)
  })
  .catch(()=>{
    console.log("No DATA");
  })
},[])

  
    const handleSubmit = (event)=>{
        event.preventDefault();
        
        axios.get(`http://localhost:8080/users`)
        .then((resp)=>{
          event.preventDefault();
            console.log("Data Found")
            setD("user found")
            console.log(resp.data.body.name)
           setData(resp.data)
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
      <h1>All User Details / Fetch All</h1>
    
 <div id={ss.crr}>

  {data.map((x)=>{
    return(
      <div>
        
         <table>
              <th colSpan={"2"}><h4>User{x.id}</h4></th>
              <tr>
                <td> Name </td>
                <td>: {x.name}</td>
              </tr>
              <tr>
                <td> Phone </td>
                <td>: {x.phone}</td>
              </tr>
              <tr>
                <td> Email </td>
                <td>: {x.email}</td>
              </tr>
              <tr>
                <td> Password </td>
                <td>: {x.password}</td>
              </tr>
             
            </table>

      </div>
    )
  })}
 </div>
  </div>
  )
}

export default Fetchall