import React,{useContext} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'

import Typography from '@material-ui/core/Typography';

import IplTableteam from '../IplTableteam'

import { useForm } from "react-hook-form";

import { Box, Divider } from '@mui/material';

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

<Box  sx={{ display: 'flex', m:30,flexWrap:'wrap' }}>
    <Box sx={{bgcolor:'#f9fbe7', width:'300px', height:'500px',my:10,ml:10,boxShadow: 10}}>
    <form id='exit' key={1} onSubmit={handleSubmit4(UpdateSubmit)}>
            <Typography  variant="h4" gutterBottom>
                Score Update
            </Typography>

            <Divider/>
        <div>
          <label htmlFor=''>TEAM NAME </label>
           <input type='text' placeholder='enter your team' {...register4("team", { required: true })} />
          {errors4.team && <span>This field is required</span>}
        </div>
        <Divider/>
        <div>
          <label htmlFor='match'>TEAM matchs </label>
           <input type='text' placeholder='enter your total matchs' {...register4("match", { required: true })} />
          {errors4.match && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor='winings'>TEAM winings matchs</label>
           <input type='text' placeholder='enter your winings' {...register4("winings", { required: true })} />
          {errors4.winings && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor='lose'>TEAM lose matches </label>
           <input type='text' placeholder='enter your ' {...register4("lose", { required: true })} />
          {errors4.lose && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor='score'>TEAM score</label>
           <input type='text' placeholder='enter your scores in match ' {...register4("score", { required: true })} />
          {errors4.score && <span>This field is required</span>}
        </div>

        <div>
          <label htmlFor='overs'>total overs in this match</label>
          <input type='text' placeholder='enter your team name' {...register4("overs", { required: true })} />
          {errors4.overs && <span>This field is required</span>}
        </div>

        <input type="submit" />
    </form>
    </Box>


    <Box sx={{bgcolor:'#f9fbe7', width:'300px', height:'500px',m:10,boxShadow: 10}}>
    <form id='exit' key={2} onSubmit={handleSubmit3(CreateSubmit)}>
        <Typography  variant="h4" gutterBottom>
                create a new team
        </Typography>
        <div>
          <label htmlFor=''>TEAM NAME </label>
           <input type='text' placeholder='enter your team' {...register3("team", { required: true })} />
          {errors3.team && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor='match'>TEAM matchs </label>
           <input type='text' placeholder='enter your total matchs' {...register3("match", { required: true })} />
          {errors3.match && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor='winings'>TEAM winings matchs</label>
           <input type='text' placeholder='enter your winings' {...register3("winings", { required: true })} />
          {errors3.winings && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor='lose'>TEAM lose matches </label>
           <input type='text' placeholder='enter your ' {...register3("lose", { required: true })} />
          {errors3.lose && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor='score'>TEAM score</label>
           <input type='text' placeholder='enter your scores in match ' {...register3("score", { required: true })} />
          {errors3.score && <span>This field is required</span>}
        </div>

        <div>
          <label htmlFor='overs'>total overs in this match</label>
          <input type='text' placeholder='enter your team name' {...register3("overs", { required: true })} />
          {errors3.overs && <span>This field is required</span>}
        </div>

        <input type="submit" />
    </form>
    </Box>

    <Box sx={{bgcolor:'#f9fbe7', width:'300px', height:'500px',my:10 ,boxShadow: 10}}>
    <Typography  variant="h4" gutterBottom>
                Delete team
    </Typography>
    <form id='exit' key={3}  onSubmit={handleSubmit2(teamDeleteSubmit)}>

      <div>
          <label>team delete</label>
          <input type='text' placeholder='enter your ' {...register2("deleteteam", { required: true })} />
          {errors2.deleteteam && <span>This field is required</span>}
      </div>
      <input type="submit" />
    </form>
    <Typography  variant="h4" gutterBottom>
           team profile update
     </Typography>
      <form id='exit' key={4} onSubmit={handleSubmit(IMguploadSubmit)}>
       <div>
      <label>image file upload</label>
                <input type="file"   {...register("image")}  />
      </div>
      <div>
          <label>description</label>
           <input type='text' placeholder='enter your description' {...register("description", { required: true })} />
          {errors.email&& <span>This field is required</span>}
          </div>
        <div>
          <label>teamer</label>
          <input type='text' placeholder='enter your team name' {...register("teamer", { required: true })} />
          {errors.email&& <span>This field is required</span>}
            <input type="submit" />
        </div>
    </form>
        </Box>
    </Box>

  </div>
  )
}

export default TeamScoreupdate