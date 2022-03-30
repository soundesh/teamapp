import React,{useContext,useState} from 'react'
import axios from 'axios'
import TeamEdit from './teamEdit'
import {GlobalState} from '../../../GlobalState'
import IplTable from '../IplTable'
import './teamScore.css'

const TeamScoreupdate = () => {
  const State = useContext(GlobalState)
  const token=State.token[0]
  const[Points,setPoints]=useState({
      team:'',match:'',winings:'',lose:'',score:'',overs:''
  })
const [del,setDel]=useState({
    deleteteam:''
})
  console.log(del)

  const onChangeInput = e =>{
    const {name, value} = e.target;
    setPoints({...Points, [name]:value})
}

const  onChangeDelete=e=>{
    const {name,value}=e.target
    setDel({...del,[name]:value})
}
const teamDelete =async e =>{
    e.preventDefault()
    
console.log(token)
    try {

        axios.delete('/app/iplteam/get', {
            headers: {
              Authorization: token,
            },
            data: {
              ...del,
            },
          });
        // await axios.delete('/app/iplteam/get',{
        //   headers: {Authorization: token},{...del})
      
          } catch (err) {
              alert(err.response.data.msg)
          }
}
const UpdateSubmit = async e =>{
    e.preventDefault()
try {
  await axios.put('/app/iplteam/get',{...Points},{
    headers: {Authorization: token}
  })

    } catch (err) {
        alert(err.response.data.msg)
    }
}

  return (
    <div className='teamUpdate'>

    <div>
    <h1>table points</h1>
        <IplTable/>

    <h1>update team</h1>
    <form id='exit' onSubmit={UpdateSubmit} >
    <label htmlFor="team">team</label>
    <input type="text" name="team" required
    placeholder="team" value={Points.team} onChange={onChangeInput} />

    
<label htmlFor="match">totalmatchs</label>
     <input type="text" name="match" required
    placeholder="match" value={Points.match} onChange={onChangeInput} />

    
    <label htmlFor="winings">winings</label>
     <input type="number" name="winings" required
    placeholder="winings" value={Points.winings} onChange={onChangeInput} />
    <br></br>
    
    
    <label htmlFor="lose">lose</label>
    <input type="number" name="lose" required
    placeholder="lose" value={Points.lose} onChange={onChangeInput} />
    

    <label htmlFor="score">score</label>
    <input type="text" name="score" required
    placeholder="score" value={Points.score} onChange={onChangeInput} />
    
    <label htmlFor="overs">overs</label>
    <input type="text" name="overs" required
    placeholder="totalovers appxmate" value={Points.overs} onChange={onChangeInput} />
    
    <button type="submit" name="action" value="save">update</button>
    </form>
    </div>
    <TeamEdit />

    <h1>delete team</h1>
    <form id='exit' onSubmit={teamDelete}>
        <label htmlFor="delete">team name</label>
        <input type="text" name="deleteteam" required
        placeholder="team name enter" value={del.deleteteam} onChange={onChangeDelete} />
        <button type="submit" name="action" value="exit">delete</button>
    </form>
        <h1>image upload for team description</h1>
        <form id='exit' onSubmit={IMgupload}>
            <label htmlFor="delete">team name</label>
            <input type="file" name="img" required
            placeholder="team name enter" value={image} onChange={onChangeImg} />
            <button type="submit" name="action" value="exit">delete</button>
        </form>
        </div>
  )
}

export default TeamScoreupdate