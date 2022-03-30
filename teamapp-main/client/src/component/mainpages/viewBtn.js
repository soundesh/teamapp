import React,{useState,useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom'
import {GlobalState} from '../../GlobalState'

const ViewBtn = () => {
    const params=useParams()
  const State = useContext(GlobalState)
  const teams=State.IplDataState.Iplteam[0]
  const[team,setTeam]=useState([])

  useEffect(()=>{
      if(params.id){
            teams.forEach(item => {
                if(item._id === params.id){ return setTeam(item)}
            })
      }

  },[params,teams])


  if(teams.length === 0) return null;
    
  return (
    <div className='detail'>
    <h1>{team.team}</h1>
    <img src={team.image} alt="jkjj"/>
    <p> the number of matches played in this season {team.match}</p>
    <p>{team.description}</p>
    <p>total number of wining matches     {team.winings}</p>
    <p>total number of lose {team.lose}</p>
    <p>total number of totalpoints{team.totalpoints}</p>
    <p>total number of runrate{team.runrate}</p>
</div>
  )
}

export default ViewBtn