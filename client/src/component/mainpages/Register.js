import React from 'react'
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom'
import axios from 'axios'
import Stack from '@mui/material/Stack';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button,ButtonGroup, Divider } from '@mui/material';

function Register() {

  const { register, handleSubmit,formState: { errors } } = useForm();
const registerSubmit = async ( data) =>{
    
         try {
             await axios.post('/user/register',{...data})

             localStorage.setItem('firstLogin', true)


             window.location.href = "/";
              } catch (err) {
                  alert(err.response.data.msg)
             }
          }

    return (
      <Stack  sx={{borderRadius:10,backgroundColor:'#04AA6D',width:250,height:300, p:10,marginLeft:'40%',
      boxShadow: 10,marginTop:'10%',fontWeight:'600',alignItem:'center'}}>
  
      <div className="login-page">
          <form onSubmit={handleSubmit(registerSubmit)}>
         <Stack  sx={{
            bgcolor: '#04AA6D',
            borderBlockColor:"violet",
            boxShadow:10,
            borderRadius:5,
            textAlign: 'center',
            fontFamily:'monospace',
            fontWeight:'900',
            m:2
          }}>
               <Typography  variant="h4" gutterBottom>
                Register
               </Typography>
          </Stack>
  
          <label>Name</label>
  
       <Stack sx={{marginBottom:2,width:"100%",outline:'none'}}>
        <input type='text' placeholder='enter your name' {...register("name", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.email&& <span>This field is required</span>}
        </Stack>

        
              <label>Email</label>
  
        <Stack sx={{marginBottom:2,width:"100%",outline:'none'}}>
              <input type='email' placeholder='enter your email id' {...register("email", { required: true })} />
              {/* errors will return when field validation fails  */}
              {errors.email&& <span>This field is required</span>}
        </Stack>
  
  
        <label>password</label>
  
        <Stack  sx={{marginBottom:2,width:"100%",outline:'none'}}>
        <input type='password'  placeholder='enter your password' {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}
        </Stack>
        <Stack sx={{width:'50%',mx:10}} >
  
           <Button variant="contained" color='secondary'  type='submit' >Register</Button>
        </Stack>
          </form>
          </div>
          </Stack>
    )
}

export default Register