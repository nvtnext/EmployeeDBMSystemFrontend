import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ss from "./hm.module.css"

import { useState } from 'react'
const Edituser = () => {
    let [id, setId] = useState("")
    let [name,  setName] = useState("")
    let [phone, setPhone] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let {index} = useParams()
    let navigate = useNavigate()
    console.log(index)
    useEffect(()=>{
        axios.get(`http://localhost:3000/content/${id}`)
        .then((resp)=>{
            console.log(resp.data)
            setId(1)
            setName(resp.data.body.name)
            setPhone(resp.data.body.phone)
            setEmail(resp.data.body.email)
            setPassword(resp.data.body.password)
        })
    },[])
    let idData=(e)=>{
        e.preventDefault()
        setId(e.target.value)
    }
    let nameData=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    let phoneData=(e)=>{
        e.preventDefault()
        setPhone(e.target.value)
    }
    let emailData=(e)=>{
        e.preventDefault()
        setEmail(e.target.value)
    }
    let passwordData=(e)=>{
        e.preventDefault()
        setPassword(e.target.value)
    }
    let formHandle=()=>{
        let payload ={name, phone, email, password}
        axios.put(`http://localhost:3000/users/${index}`,payload )
        .then(()=>{
          console.log("data UPDATED")
        })
        navigate("/fetchall")
       
      }
  
    


  return (
    <div id={ss.crr}>
    <table>
        <tr><th colSpan="2"><h4>User Details</h4></th></tr>
        <tr>
        <td><label > Id  </label></td>
        <td>:<input type="number" value={id} onChange={idData}/></td> 
       
      </tr>
      <tr>
        <td><label > Name  </label></td>
        <td>:<input type="text" value={name} onChange={nameData}/></td> 
       
      </tr>
      <tr>
      <td><label > Phone  </label></td>
        <td>:<input type="number" value={phone} onChange={phoneData}/></td>
        
      </tr>
      <tr>
      <td><label > Email  </label></td>
        <td>:<input type="text"  value={email} onChange={emailData}/></td>
      </tr>
      <tr>
      <td><label > Password  </label></td>
        <td>:<input type="text"  value={password} onChange={passwordData}/></td>
      </tr>
      <tr>
        <th colSpan="2"><button onClick={formHandle} ><h4>Update</h4></button></th>
      </tr>
    </table>
   </div>

  )
}

export default Edituser