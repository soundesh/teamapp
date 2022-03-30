import React,{useContext} from 'react'
import './header.css'
import LOGO from "./icons/ipl.png"
import {Link} from 'react-router-dom'
import {GlobalState} from '../../GlobalState'
import axios from 'axios'
const Header = () => {
  
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin


  const logoutUser = async () =>{
    await axios.get('/user/logout')
    
    localStorage.removeItem('firstLogin')
    
    window.location.href = "/";
}

const loggedRouter = () =>{
  return(
      <>
      <li><Link to='/register'>Register</Link></li>
      <li><Link to='/login'>Login</Link></li>
      </>
  )
}

  return (
    <div className="topnav">
        <div className='logo'>
            <img src={LOGO} alt='122'/>
           <Link to='/'><p>Indian Premier League Official Website</p></Link>
        </div>
        <div className="listed">
            <ul>
            <li><Link to='/iplteam'>IPLteam</Link></li>
            <li><Link to='/ipltable'>IPLtable</Link></li>
            {
              isLogged ? 
              <li><Link to="/" onClick={logoutUser}>Logout</Link></li>:loggedRouter()
            }
            </ul>
        </div>
    </div>
  )
}

export default Header