import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import ReactFontLoader from 'react-font-loader';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#09417c',
    paddingTop:'0',
    overflowX:'hidden'
   },
  paper: {
    height:'100%',
    paddingLeft:'1vw',
    paddingRight:'1vw',
  
  },
  t1:{
    fontWeight:'bold',
    color:'white',
    fontSize:'150%',
  },
  t2:{
    color:'white',
    fontWeight:'bold',
    

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
  }
  
 
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <div position="static"  className={classes.root}>
          <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik&display=swap%27' />
          <Grid container spacing={3}>
        <Grid item xs={4}>
          <div style={{fontFamily:'Rubik'}} className={classes.paper} color='white'>
            <h3 className={classes.t1}>Contact us</h3>
            <p>
              <span className={classes.t2}>Phone : </span><span className={classes.t3}> +91-7358460244, +91-7358449563</span>
            </p>
            <div></div>
            <p>
              <span className={classes.t2}>Email : </span><span className={classes.t3}> marketing@vaapenergy.com, cmk@vaapenergy.com</span>
            </p>
            
            
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{fontFamily:'Rubik'}} className={classes.paper}>
          <h3 className={classes.t1}>Locate Us</h3>
          <Typography style={{fontFamily:'Rubik'}} className={classes.t3}>
          CHENNAI, INDIA<br></br>
          VAAP ENERGY Pvt. Ltd.<br></br>
          Reg. Office: A5, Marigold Enclave, 64 Reddipalayam 1st Main road, Mogappair West, Chennai – 600037, India.
          </Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
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
      <div style={{fontFamily:'Rubik'}} className={classes.copy}>
         Copyright &copy; 2021 vaapenergy.com | Designed by - <span ><FacebookIcon className={classes.rightIcon}/><LinkedInIcon className={classes.rightIcon}/><TwitterIcon className={classes.rightIcon}/> </span>
      </div>
        </div>
    )
}