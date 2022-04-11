import React,{useContext} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import Typography from '@material-ui/core/Typography';
import IplTableteam from '../IplTableteam'
import { useForm } from "react-hook-form";
import { Box, Button, Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


const TeamScoreupdate = () => {
const { register, handleSubmit,formState: { errors } } = useForm();
const {register: register2,formState: { errors: errors2 },handleSubmit: handleSubmit2,} = useForm({mode: "onBlur"});
const {register: register3,formState: { errors: errors3 },handleSubmit: handleSubmit3,} = useForm({mode: "onBlur"});
const {register: register5,formState: { errors: errors5 },handleSubmit: handleSubmit5,} = useForm({mode: "onBlur"});

const State = useContext(GlobalState)
const token=State.token[0]



const CreateSubmit = async (data)=>{
  console.log(data)
try {
  
  await axios.post('/app/iplteam',{...data},{
    headers: {Authorization: token}
  })
    } catch (err) {
        alert(err.response.data.msg)
    }
}
const IMguploadSubmit = async (data) =>{
  const formData=new FormData()
  formData.append('image',data.image[0])
  formData.append('teamer',data.teamer)
  formData.append('description',data.description)
try {
await axios.post('/app/iplteam/image',formData,{
  headers: {Authorization: token,"Content-Type": "multipart/form-data"}
})

  } catch (err) {
      alert(err.response.data.msg)
  }

}

const teamDeleteSubmit =async (data)=>{
 
    try {
        axios.delete('/app/iplteam/get', {
            headers: {
              Authorization: token,
            },
          data:{
            ...data
          },
          });
          } catch (err) {
              alert(err.response.data.msg)
          }
}



const runrateSubmit = async (data)=>{
  
  try {
    if(data.team1 !== data.team2){
      
      const runrate1=data.score1/(data.overs1*6+parseInt(data.ball))
      const runrate2=data.score2/(data.overs2*6+parseInt(data.ball2))
      if(data.score1===data.score2){
        await axios.put('/app/iplteam/get',{...data,runrate1:0,runrate2:0},{
          headers: {Authorization: token}
        })
      }
      if(data.score1 > data.score2){
        const teamer1=runrate1-runrate2
        const teamer2=runrate2-runrate1
        await axios.put('/app/iplteam/get',{...data,runrate1:teamer1,runrate2:teamer2},{
          headers: {Authorization: token}
        })
      }
      
      if(data.score1 < data.score2){
        const teamer1=runrate1-runrate2
        const teamer2=runrate2-runrate1
        await axios.put('/app/iplteam/get',{...data,runrate1:teamer1,runrate2:teamer2},{
          headers: {Authorization: token}
        })
      }
    }else{
      alert("team is same change it ")
  }
      } catch (err) {
          alert(err.response.data.msg)
      }
  }
  return (
    <div className='teamUpdate'>

       <Typography  variant="h4" gutterBottom>
          IPL Points table
        </Typography>
        <Divider/>
      <IplTableteam/>
<Box  sx={{ display: 'flex',flexWrap:'wrap'}}> 
<Box >
    <form id='exit' key={7} onSubmit={handleSubmit5(runrateSubmit)}>

    <Box  sx={{ display: 'flex',flexWrap:'wrap'}}>
    <Box sx={{ display: 'flex',flexWrap:'wrap',alignItems:'center',px:15,  
    bgcolor:'gray', width:'200px', height:'800px',m:10,boxShadow: 10}}>

        <Typography  variant="h4" gutterBottom>
               1st  team runrate
        </Typography>

        <Stack>
        <TextField
        type='text'
         {...register5("team1", { required: true })}
        label={"1st team name"} //optional
      />
       {errors5.team1 && <span>This field is required</span>}
      </Stack>
      <Stack>
        <TextField
        type='text'
         {...register5("matchs1", { required: true })}
        label={"match1"} //optional
      />
       {errors5.match1 && <span>This field is required</span>}
      </Stack>

      <Stack>
        <TextField
        type='text'
         {...register5("winings1", { required: true })}
        label={"winings1"} //optional
      />
       {errors5.winings1 && <span>This field is required</span>}
      </Stack>

      <Stack>
        <TextField
        type='text'
         {...register5("lose1", { required: true })}
        label={"lose1"} //optional
      />
       {errors5.lose2 && <span>This field is required</span>}
      </Stack>

      <Stack>
        <TextField
        type='text'
         {...register5("draw1", { required: true })}
        label={"draw1"} //optional
      />
       {errors5.draw1 && <span>This field is required</span>}
      </Stack>

      <Stack>
        <TextField
        type='text'
         {...register5("score1", { required: true })}
        label={"score1"} //optional
      />
       {errors5.score1 && <span>This field is required</span>}
      </Stack>

      <Stack>
        <TextField
        type='text'
         {...register5("overs1", { required: true })}
        label={"overs1"} //optional
      />
       {errors5.overs1 && <span>This field is required</span>}
      </Stack>
      <Stack>
        <TextField
        type='text'
         {...register5("ball", { required: true })}
        label={"ball"} //optional
      />
       {errors5.ball && <span>This field is required</span>}
      </Stack>
      </Box>

      <Box sx={{ display: 'flex',flexWrap:'wrap',alignItems:'center',px:10,  
    bgcolor:'gray', width:'200px', height:'800px',m:10,boxShadow: 10}}>

        <Typography  variant="h4" gutterBottom>
                2nd  team runrate
        </Typography>
        <Stack>
        <TextField
        type='text'
         {...register5("team2", { required: true })}
        label={" 2nd team name"} //optional
      />
       {errors5.team2 && <span>This field is required</span>}
      </Stack>



      <Stack>
        <TextField
        type='text'
         {...register5("matchs2", { required: true })}
        label={"match2"} //optional
      />
       {errors5.match2 && <span>This field is required</span>}
      </Stack>

      <Stack>
        <TextField
        type='text'
         {...register5("winings2", { required: true })}
        label={"winings2"} //optional
      />
       {errors5.winings2 && <span>This field is required</span>}
      </Stack>

      <Stack>
        <TextField
        type='text'
         {...register5("lose2", { required: true })}
        label={"lose2"} //optional
      />
       {errors5.lose2 && <span>This field is required</span>}
      </Stack>

      <Stack>
        <TextField
        type='text'
         {...register5("draw2", { required: true })}
        label={"draw2"} //optional
      />
       {errors5.draw2 && <span>This field is required</span>}
      </Stack>

    <Stack>
        <TextField
        type='text'
         {...register5("score2", { required: true })}
        label={"score2"} //optional
      />
       {errors5.score2 && <span>This field is required</span>}
      </Stack>
      <Stack>
        <TextField
        type='text'
         {...register5("overs2", { required: true })}
        label={"overs2"} //optional
      />
       {errors5.overs2 && <span>This field is required</span>}
      </Stack>
      <Stack>
        <TextField
        type='text'
         {...register5("ball2", { required: true })}
        label={"ball"} //optional
      />
       {errors5.ball2 && <span>This field is required</span>}
      </Stack>
      <Button type='submit'>update</Button>
   </Box> 
   </Box>
    </form>
  
</Box>
    <Box sx={{ display: 'flex',flexWrap:'wrap',  bgcolor:'gray',alignItems:'center',px:15, width:'200px', height:'600px',m:10,boxShadow: 10}}>
    <form id='exit' key={2} onSubmit={handleSubmit3(CreateSubmit)}>
        <Typography  variant="h4" gutterBottom>
                create a new team
        </Typography>
        
      <Stack>
        <TextField
        type='text'
         {...register3("team", { required: true })}
        label={"team name"} //optional
      />
       {errors3.team && <span>This field is required</span>}
      </Stack>
      <Stack>
        <TextField
        type='text'
         {...register3("match", { required: true })}
        label={"match"} //optional
      />
       {errors3.match && <span>This field is required</span>}
      </Stack>
      <Stack>
        <TextField
        type='text'
         {...register3("winings", { required: true })}
        label={"TEAM winings matchs"} //optional
      />
       {errors3.winings && <span>This field is required</span>}
      </Stack>

      <Stack>
        <TextField
        type='text'
         {...register3("draw", { required: true })}
        label={"draw"} //optional
      />
       {errors3.draw && <span>This field is required</span>}
      </Stack>

      <Stack>
        <TextField
        type='text'
         {...register3("lose", { required: true })}
        label={"lose"} //optional
      />
       {errors3.lose && <span>This field is required</span>}
      </Stack>
      <Stack>
        <TextField
        type='text'
         {...register3("score", { required: true })}
        label={"score"} //optional
      />
       {errors3.score && <span>This field is required</span>}
      </Stack>
      <Stack>
        <TextField
        type='text'
         {...register3("overs", { required: true })}
        label={"overs"} //optional
      />
       {errors3.overs && <span>This field is required</span>}
      </Stack>
  
      <Button type='submit'>create </Button>
    </form>
    </Box>

    <Box sx={{ display: 'flex',flexWrap:'wrap' ,bgcolor:'gray',alignItems:'center',px:15,py:2,  
   width:'200px', height:'600px',m:10,boxShadow: 10}}>
    <Typography  variant="h4" gutterBottom>
                Delete team
    </Typography>
    <form id='exit' key={3}  onSubmit={handleSubmit2(teamDeleteSubmit)}>

    <Stack>
        <TextField
        type='text'
         {...register2("deleteteam", { required: true })}
        label={"enter name of team"} //optional
      />
       {errors2.deleteteam && <span>This field is required</span>}
      </Stack>

      <Button type='submit'>delete</Button>
    </form>
    
      <form id='exit' key={4} onSubmit={handleSubmit(IMguploadSubmit)}>

      <Typography  variant="h4" gutterBottom>
           team profile update
     </Typography>

      <Stack>
        <TextField
        type='file'
         {...register("image", { required: true })}
      //optional
      />
       {errors2.image && <span>This field is required</span>}
      </Stack>

      <Stack>
        <TextField
        type='text'
         {...register("description", { required: true })}
        label={"enter description"} //optional
      />
       {errors.description && <span>This field is required</span>}
      </Stack>
        <Stack>
        <TextField
        type='text'
         {...register("teamer", { required: true })}
        label={"enter team name"} //optional
      />
       {errors.teamer && <span>This field is required</span>}
      </Stack>
      <Button  type='submit'>update</Button>
    </form>
        </Box>
    </Box>

  </div>
  )
}

export default TeamScoreupdate