import React from 'react'
import './css/Iplteampoint.css'

import {Link} from 'react-router-dom'

const IplTableteam = ({team}) => {
  return (
  <div key={team._id}>
 
  <table style={{width:'100%'}}>
   <thead>
  <tr>
    <th>team</th>
    <th>Team Match</th>
    <th>winings</th>
    <th>lose</th>
    <th>totalpoints</th>
    <th>runrate</th>
    
    <th>team detaills</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td >{team.team}</td>
    <td >{team.match}</td>
    <td >{team.winings}</td>
    <td >{team.lose}</td>
    <td >{team.totalpoints}</td>
    <td >{Math.round(team.runrate * 10000) / 10000}</td>
    <td><Link  to={`/ipltable/${team._id}`}>team details</Link></td>
  </tr>
  </tbody>
</table>
  </div>

  )
}

export default IplTableteam