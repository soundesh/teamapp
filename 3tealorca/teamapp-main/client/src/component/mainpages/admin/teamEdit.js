
import React,{useContext,useState} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
const TeamEdit = () => {
  const State = useContext(GlobalState)
  const token=State.token[0]
  const[Points,setPoints]=useState({
      team:'',match:'',winings:'',lose:'',score:'',overs:''
  })

  const onChangeCreate = e =>{
    const {name, value} = e.target;
    setPoints({...Points, [name]:value})
}
const CreateSubmit = async e =>{
    e.preventDefault()
try {
  await axios.post('/app/iplteam',{...Points},{
    headers: {Authorization: token}
  })

    } catch (err) {
        alert(err.response.data.msg)
    }
}

  console.log(Points)
  return (
    <div>
      <h1>create team</h1>
      <form onSubmit={CreateSubmit} >
    <label htmlFor="content">team</label>
    <input type="text" name="team" required
    placeholder="team" value={Points.team} onChange={onChangeCreate} />

    
    <label htmlFor="content">totalmatchs</label>
     <input type="text" name="match" required
    placeholder="match" value={Points.match} onChange={onChangeCreate} />

    
    <label htmlFor="content">winings</label>
     <input type="text" name="winings" required
    placeholder="winings" value={Points.winings} onChange={onChangeCreate} />
    <br></br>
    
    
    <label htmlFor="content">lose</label>
    <input type="text" name="lose" required
    placeholder="lose" value={Points.lose} onChange={onChangeCreate} />
    

    <label htmlFor="content">score</label>
    <input type="text" name="score" required
    placeholder="score" value={Points.score} onChange={onChangeCreate} />
    
    <label htmlFor="content">overs</label>
    <input type="text" name="overs" required
    placeholder="totalovers appxmate" value={Points.overs} onChange={onChangeCreate} />
    
    <button type="submit">create</button>
    </form>  

    </div>
  )
}

export default TeamEdit