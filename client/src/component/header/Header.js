import React,{useContext} from 'react'

import LOGO from "./icons/ipl.png"
import {Link} from 'react-router-dom'
import {GlobalState} from '../../GlobalState'
import axios from 'axios'

import {
 AppBar,Toolbar,makeStyles,Box,Grid
} from "@material-ui/core";





const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  img:{
    width:"30 px",
    height:"30px",
    borderRadius: '50%' 
  },
 logo: {
    display:"flex",
    cursor: "pointer",
    alignItems:"center",
  },
  linkend:{
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
  },
  links: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));





const Header = () => {
  
  const classes = useStyles();
  
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin


  const logoutUser = async () =>{
    await axios.get('/user/logout')
    
    localStorage.removeItem('firstLogin')
    
    window.location.href = "/";
}



const loggedRouter = () =>{
  return(
      <>
      <Link to='/register'className={classes.links}>Register</Link>
      <Link to='/login'className={classes.links}>Login</Link>
      </>
  )
}

  return (
    <Box  sx={{
      display: 'grid',
      gridAutoFlow: 'row',
      gap: 1,
    }}>
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={24}>
          <Grid item xs={4}>
          <div className={classes.logo}>
            <img className={classes.img} src={LOGO} alt='ff'/>
          <Link to='/'  className={classes.linkend} >{isAdmin ? 'admin':'Indian Premier League Official Website'}</Link>
          </div>
          </Grid>

          <Grid item xs={8}>
          <div className="listed">
            
            <Link to='/iplteam' className={classes.links}>IPLteam</Link>
            <Link to='/ipltable' className={classes.links} >IPLtable</Link>

            {isAdmin ?  <Link to='/update'  className={classes.links}>team update</Link>:''}
            {
              isLogged ? 
              <Link to="/" onClick={logoutUser} className={classes.links}>Logout</Link>:loggedRouter()
            }
           </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    </Box>
  )
}






export default Header