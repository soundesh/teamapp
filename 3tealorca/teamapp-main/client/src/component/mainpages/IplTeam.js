import React,{useContext}from 'react'

import {GlobalState} from '../../GlobalState'
const IplTeam = () => {
  const State = useContext(GlobalState)
  const teams=State.IplDataState.Iplteam[0]
  return (
    <div className='details'>
    <div>
              {
                teams.map(team =>{
                  return <Details Key={team._id} team={team}/>
                })
              }
    </div>
</div>
  )
}


const Details= ({team}) => {
  return (
    <div className='detailed'>
            <h1>{team.team}</h1>
            <img src={team.image} alt="jkjj"/>
            <p> the number of matches played in this season {team.match}</p>
            <p>{team.description}</p>
            <p>total number of wining matches     {team.winings}</p>
            <p>total number of lose   <space>{team.lose}</space></p>
            <p>total number of totalpoints{team.totalpoints}</p>
            <p>total number of runrate{team.runrate}</p>
    </div>
  )
}


export default IplTeam