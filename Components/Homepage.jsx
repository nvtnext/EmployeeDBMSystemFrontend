import React from 'react'
import { Link } from 'react-router-dom'
import ss from "./hm.module.css"

const Homepage = () => {
  return (
   <section id={ss.nav}>
    <Link to="/save">Save User</Link>
    {/* <Link to="/edit">Edit User</Link> */}
    <Link to="/update">Update User</Link>
    <Link to="/fetchbyid">Fetch User By Id</Link>
    <Link to="/fetchall">Fetch All User</Link>
    <Link to="/delete">Delete User By Id</Link>
    <Link to="/verifyphone">verify User By Phone and Password</Link>
    <Link to="/verifyemail">verify User By Email and Password</Link>
   </section>
  )
}

export default Homepage