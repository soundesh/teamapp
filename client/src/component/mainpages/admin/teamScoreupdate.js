import React,{useContext} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'

import Typography from '@material-ui/core/Typography';

import IplTableteam from '../IplTableteam'




import { useForm } from "react-hook-form";

import { Box, Button, Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';


const TeamScoreupdate = () => {
const { register, handleSubmit,formState: { errors } } = useForm();
const {register: register2,formState: { errors: errors2 },handleSubmit: handleSubmit2,} = useForm({mode: "onBlur"});
const {register: register3,formState: { errors: errors3 },handleSubmit: handleSubmit3,} = useForm({mode: "onBlur"});
const {register: register4,formState: { errors: errors4 },handleSubmit: handleSubmit4,} = useForm({mode: "onBlur"});

const State = useContext(GlobalState)
const token=State.token[0]




const CreateSubmit = async (data)=>{
    
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
  console.log(data)
    try {
        axios.delete('/app/iplteam/get', {
            headers: {
              Authorization: token,
            },
          data:{
            ...data
          },
          });
        // await axios.delete('/app/iplteam/get',{
        //   headers: {Authorization: token},{...del})
          } catch (err) {
              alert(err.response.data.msg)
          }
}
const UpdateSubmit = async (data) =>{
    console.log(data)
try {
  await axios.put('/app/iplteam/get',{...data},{
    headers: {Authorization: token}
  })

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

<Box  sx={{ display: 'flex',flexWrap:'wrap' }}>
    <Box sx={{ display: 'flex',flexWrap:'wrap',alignItems:'center',px:15,  
    bgcolor:'#f9fbe7', width:'200px', height:'600px',m:10,boxShadow: 10}}>
    <form id='exit' key={2} onSubmit={handleSubmit4(UpdateSubmit)}>
        <Typography  variant="h4" gutterBottom>
                 team website
        </Typography>
        
      <Stack>
        <TextField
        type='text'
         {...register4("team", { required: true })}
        label={"team name"} //optional
      />
       {errors4.team && <span>This field is required</span>}
      </Stack>
      <Stack>
        <TextField
        type='text'
         {...register4("match", { required: true })}
        label={"match"} //optional
      />
       {errors4.match && <span>This field is required</span>}
      </Stack>
      <Stack>
        <TextField
        type='text'
         {...register4("winings", { required: true })}
        label={"TEAM winings matchs"} //optional
      />
       {errors4.winings && <span>This field is required</span>}
      </Stack>
      <Stack>
        <TextField
        type='text'
         {...register4("lose", { required: true })}
        label={"lose"} //optional
      />
       {errors4.lose && <span>This field is required</span>}
      </Stack>
      <Stack>
        <TextField
        type='text'
         {...register4("score", { required: true })}
        label={"score"} //optional
      />
       {errors4.score && <span>This field is required</span>}
      </Stack>
      <Stack>
        <TextField
        type='text'
         {...register4("overs", { required: true })}
        label={"overs"} //optional
      />
       {errors4.overs && <span>This field is required</span>}
      </Stack>
      <Button type='submit'>update</Button>
    </form>
    </Box>


    <Box sx={{ display: 'flex',flexWrap:'wrap',alignItems:'center',px:15,  
    bgcolor:'#f9fbe7', width:'200px', height:'600px',m:10,boxShadow: 10}}>
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

    <Box sx={{ display: 'flex',flexWrap:'wrap',alignItems:'center',px:15,  
    bgcolor:'#f9fbe7', width:'200px', height:'600px',m:10,boxShadow: 10}}>
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
      <Button type='submit'>update</Button>
    </form>
        </Box>
    </Box>

  </div>
  )
}

export default TeamScoreupdate