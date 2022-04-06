import React,{useState,useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom'
import {GlobalState} from '../../GlobalState'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

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
   
<Card sx={{border: 1 , borderColor: 'text.primary',  maxWidth:900, m:10 ,padding:2}}>

<Typography variant="h3" color="text.secondary">
        {team.team}
        </Typography>
      <CardMedia
      sx={{ maxWidth:700,height:400,borderRadius:20, m:10}}
        component="img"
        image={team.image}
        alt= {team.team}images
      />

     <CardContent>
     <Typography variant="body2" color="text.secondary">
        {team.description}
        </Typography>

        <Typography variant="subtitle2" color="text.secondary">
           <Divider />
            <p>total number of wining matches     {team.winings}</p>
            <Divider />

            <p>total number of lose   {team.lose}</p>
            <Divider />

            <p>total number of totalpoints{team.totalpoints}</p>
            <Divider />

            <p>total number of runrate{team.runrate}</p>
        </Typography>
         </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default ViewBtn