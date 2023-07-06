import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ss from "./hm.module.css"

const Deleteuser = () => {
    let [d, setD] = useState("")
    const[id, setId] = useState("")
    const[name, setName] = useState("");
  const[phone, setPhone] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  
    const handleSubmit = (event)=>{
        event.preventDefault();
       
        axios.delete(`http://localhost:8080/users/${id}`)
       
        .then((resp)=>{
          event.preventDefault();
            console.log("Data Found and deleted")
            setD("user deleted ")
            
        })
        .catch(()=>{
          setD("User not found")
            console.log("data not found not deleted")
            
        })
    }
  return (
    <div id={ss.crr}>
      <h1>Delete User by Id</h1>
      <form>
    <label >
 Enter your Id:
 <input type="number" value={id} onChange={(e)=>setId(e.target.value)} />
</label> <br /> <br />
    <input type="submit" onClick={handleSubmit} />
    
     
   </form>
   <div>{d}</div>
   </div>
  )
}

export default Deleteuser