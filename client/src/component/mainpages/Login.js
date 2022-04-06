import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios'
import Stack from '@mui/material/Stack';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button,ButtonGroup, Divider } from '@mui/material';


function Login() {


  const { register, handleSubmit, formState: { errors } } = useForm();

    const loginSubmit = async (data)=>{
       
        try {
            await axios.post('/user/login', {...data})

            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
    <Stack  sx={{borderRadius:10,backgroundColor:'#f9fbe7',width:250,height:300, p:10,marginLeft:'40%',
    boxShadow: 10,marginTop:'10%',fontWeight:'600',alignItem:'center'}}>

    <div className="login-page">
        <form onSubmit={handleSubmit(loginSubmit)}>
      
             <Typography  variant="h4" gutterBottom>
                User
             </Typography>

        <label>Email</label>
      <Stack sx={{marginBottom:2,width:"100%",outline:'none'}}>
        <TextField
        type='text'
         {...register("email", { required: true })}
        label={"email id"} //optional
      />
       {errors.email && <span>This field is required</span>}
      </Stack>


      <label>password</label>
      <Stack sx={{marginBottom:2,width:"100%",outline:'none'}}>
        <TextField
        type='text'
         {...register("password", { required: true })}
        label={"password"} //optional
      />
       {errors.password && <span>This field is required</span>}
      </Stack>
         <Button  type='submit' >login</Button>
        </form>
        </div>
        </Stack>
    )
}

export default Login
