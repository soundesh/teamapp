import React,{useContext}from 'react'
import {Route,Routes}from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import IplTable from './IplTable'
import IplTeam from './IplTeam'
import Home from './Home'
import {GlobalState}from '../../GlobalState'
import NotFound from './NotFound'

import Viewbtn from './viewBtn'
import TeamScoreupdate from './admin/teamScoreupdate'


const MainPages = () => {
  
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin
  return (
      <Routes>
          <Route path="/" element={isLogged ? <Home/>:<Login/>}/>
          <Route path="/iplteam" element={isLogged ?<IplTeam/>:<Login/>}/>
          <Route path="/ipltable" element={isLogged ? <IplTable/>:<Login/>}/>
          <Route path="/login" element={isLogged ? <NotFound/>:<Login/>}/>
          <Route  path="/Register" element={isLogged ? <NotFound/>:<Register/>}/>
          
          <Route path="/update" element={isAdmin ? < TeamScoreupdate/>:<Login/>}/>
 
          
          <Route path="/ipltable/:id" element={<Viewbtn/>} />
          <Route path="*" element={<NotFound/>} />
      </Routes>     
  )
}

export default MainPages