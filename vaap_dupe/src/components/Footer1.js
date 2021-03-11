import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:'#0d2d59',
      overflowX:'hidden'
     },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height:'100%',
    },
    t1:{
    
      color:'white'

    },
    t2:{
        color:'white'
    },
    t3:{
       
        color:'white',


    },
    copy:{
      
      backgroundColor:'#0d2d59',
      color:'wheat',
      marginTop:'1vw',
      paddingLeft:'1vw',
      paddingRight:'1vw',
      paddingTop:'0.5vw',
      paddingBottom:'0.5vw'
    },
    rightIcon:{
      float:'right',
      "&:hover":{
        float:'right',
        color:'white'
      }
    },
    centerIcon:{
      width:'100%',
      paddingBottom:'2vw',
      textAlign:'center',
      "&:hover":{
        margin:'auto auto',
        color:'white'
      }
    }
    

  }));
export default function Footer1() {
    
    const classes = useStyles();
    const match=useMediaQuery('(min-width:550px)')
    return (

        <div position="static"  className={classes.root}>
          <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.paper} color='white'>
            <h3 className={classes.t1}>Contact us</h3>
            <h4 className={classes.t2}>Phone no:</h4>
            <Typography style={{fontFamily:'Rubik'}} variant="subtitle2" className={classes.t3}>+91-7358460244</Typography>
            <p style={{fontFamily:'Rubik'}} className={classes.t3}>+91-7358449563</p>
            <h4 style={{fontFamily:'Rubik'}} className={classes.t2}>Email:</h4>
            <p style={{fontFamily:'Rubik'}} className={classes.t3}>marketing@vaapenergy.com</p>
            <p style={{fontFamily:'Rubik'}} className={classes.t3}>cmk@vaapenergy.com</p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.paper}>
          <h3 className={classes.t1}>Locate Us</h3>
          <Typography style={{fontFamily:'Rubik'}} className={classes.t3}>
          CHENNAI, INDIA<br></br>
          VAAP ENERGY Pvt. Ltd.<br></br>
          Reg. Office: A5, Marigold Enclave, 64 Reddipalayam 1st Main road, Mogappair West, Chennai – 600037, India.
          </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.paper}>
          <h3 className={classes.t1}>Locate Us</h3>
          <Typography style={{fontFamily:'Rubik'}} className={classes.t3}>
          UAE<br></br>
          VAAP ENERGY Engineers & Consultant FZE LLC.<br></br>
          PO Box : 45290, Ajman, UAE.<br></br>
          Phone : +971 50 5743500
          </Typography>
          </div>
        </Grid>
        
      </Grid>
      {match?<div style={{fontFamily:'Rubik'}} className={classes.copy}>
         <Typography variant='body1'>Copyright &copy; 2021 vaapenergy.com | Designed by - </Typography><span ><FacebookIcon className={classes.rightIcon}/><LinkedInIcon className={classes.rightIcon}/><TwitterIcon className={classes.rightIcon}/> </span>
      </div>:<div className={`${classes.copy}`}>
      <div className={classes.centerIcon}><FacebookIcon /><LinkedInIcon /><TwitterIcon /> </div><div style={{fontFamily:'Rubik'}} className={`${classes.centerIcon}`}>Copyright &copy; 2021 vaapenergy.com </div><div style={{fontFamily:'Rubik'}} className={classes.centerIcon}> Designed by - </div>
      </div>}
      
        </div>
    )
}