import React,{useContext}from 'react'
import {GlobalState} from '../../GlobalState'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';




const IplTeam = () => {
  const State = useContext(GlobalState)
  const teams=State.IplDataState.Iplteam[0]
  
  return (
    <Box sx={{display:'flex',flexWrap:'wrap'
  }}>
    
              {
                teams.map(team =>{
                  return <Details key={team.id} team={team}/>
                })
              }
    </Box>
    
  
  )
}


const Details= ({team}) => {
  return (
    <Box Key={team.id}>

<Card   sx={{border: 1 , borderColor: 'text.primary',maxWidth:700, m:10 ,padding:2}}>

<Typography variant="h3" color="text.secondary">
        {team.team}
        </Typography>
      <CardMedia
      sx={{ maxWidth:700,height:400,borderRadius:20}}
    
        component="img"
        image={team.image}
        alt= {team.team}
      />

     <CardContent>
     <Typography variant="body2" color="text.secondary">
        {team.description}
        </Typography>

        <Typography variant="subtitle2" color="text.secondary">
            <p>total number of wining matches     {team.winings}</p>
            <Divider />

            <p>total number of lose   {team.lose}</p>
            <Divider />

            <p>total number of totalpoints{team.totalpoints}</p>
            <Divider />

            <p>total number of runrate{team.runrate}</p>
        </Typography>
         </CardContent>
    </Card>
    </Box>
)}


export default IplTeam



