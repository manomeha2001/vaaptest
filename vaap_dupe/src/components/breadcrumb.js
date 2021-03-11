import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ReactFontLoader from 'react-font-loader';
const useStyles = makeStyles((theme) => ({
  root:{
    paddingTop:'3vh',
    paddingBottom:'3vh',
    // backgroundColor  :'#e9ecef',
    fontFamily:'Rubik',
    paddingLeft:'3vw',
    paddingRight:'2vh',
    background:'#0555a4'
  },
  link: {
    display: 'flex',
    textDecoration:'none',
    color:'red'
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
 about:{
     fontWeight:'800',
     color:'#A9A9A9'

 }
}));



export default function IconBreadcrumbs({page}) {
  const classes = useStyles();

  return (
      
    <div className={classes.root}>
    <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik&display=swap%27' />
    <Typography variant="h4" className={classes.about} style={{fontFamily:'Rubik',color:'white'}} >{page}</Typography>
    <Breadcrumbs style={{paddingBottom:'1vh'}} aria-label="breadcrumb">
      <Link to='/' color="secondary" className={classes.link}>
        {/* <HomeIcon className={classes.icon} /> */}
        Home
      </Link>
      <Typography color="textPrimary" >
        {/* <InfoOutlinedIcon/> */}
        {page}
      </Typography>
    </Breadcrumbs>
    {/* <Typography variant="h4" className={classes.about} style={{fontFamily:'Rubik',marginBottom:'1vh'}} >About Us</Typography> */}
    </div>
  );
}
