import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import ReactFontLoader from 'react-font-loader';
import bg1 from '../assets/AboutBg1.png'
import bg2 from '../assets/AboutBg2.png'
import bg3 from '../assets/AboutBg3.png'
import IconBreadcrumbs from './breadcrumb';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const About = () => {

    const useStyles = makeStyles((theme) => ({
        root1:{
          paddingTop:'1vh',
          paddingBottom:'1vh',
          fontFamily:'Rubik',
          paddingLeft:'2vh',
          paddingRight:'2vh',
          overflowY:'hidden',
          overflowX:'hidden'
        },
        root: {
            flexGrow: 1,
            overflowY:'hidden',
            overflowX:'hidden'
        },
        head:{
            fontWeight:'600',
            fontFamily:'Rubik',
            color:'white',
            paddingTop:'2vh',
            paddingBottom:'1vh',
            marginLeft:'1vw',
            letterSpacing:'0.4vw'
        },
        lis:{
          width: '100%',
          
          fontFamily:'Rubik',
          paddingTop:'1vh',
          color:'#FFFFF1'
        },
        bdy:{
            paddingLeft:'1vh',
            color:'#FFFFF1',
            paddingTop:'1vh',
            paddingBottom:'1vh'
        },
        bdy2:{
            paddingRight:'1vh',
            color:'#FFFFF1',
            paddingTop:'1vh',
            paddingBottom:'1vh'
        },
        container1:{
            width: '100%',
            margin: '0',
            backgroundImage: `url(${bg1})`,
            backgroundColor: '31A3DD', 
            backgroundPosition: 'center',
            backgroundAttachment:'fixed', 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover',
            overflowY:'hidden',
            overflowX:'hidden'
        },
        textbody:{
            background:'rgb(12,35,67,0.4)',
            marginRight:'1.5vw',
            marginLeft:'1.5vw',
            marginTop:'2vw',
            marginBottom:'2vw',
            borderRadius:'1.5vh'
        },
       
       
        textbody2:{
            background:'rgb(12,35,67,0.4)',
            marginLeft:'2vw',
            marginRight:'2vw',
            marginTop:'2vw',

            marginBottom:'2vw',
            borderRadius:'1.5vh'
        },
        container2:{
            width: '100%',
            margin: '0',
            backgroundImage: `url(${bg2})`,
            backgroundColor: '31A3DD', 
            backgroundPosition: 'center',
            backgroundAttachment:'fixed', 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover',
            minHeight:'60vh',
            overflowY:'hidden',
            overflowX:'hidden'
        },
        container2mob:{
            width: '100%',
            margin: '0',
            backgroundImage: `url(${bg2})`,
            backgroundColor: '31A3DD', 
            backgroundPosition: 'center',
            backgroundAttachment:'fixed', 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover',
            minHeight:'60vw',
            overflowY:'hidden',
            overflowX:'hidden',
            paddingBottom:'17vw'
        },
        container3:{
            width: '100%',
            margin: '0',
            backgroundImage: `url(${bg3})`,
            backgroundColor: '31A3DD', 
            backgroundPosition: 'center',
            backgroundAttachment:'fixed', 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover',
            minHeight:'60vh',
            overflowY:'hidden',
            overflowX:'hidden'
        },
      }));

      const classes = useStyles();
      const matches = useMediaQuery('(min-width:700px)');
      const match = useMediaQuery('(min-width:775px)');

    return (
        <div>
            <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap' />
            <IconBreadcrumbs page={'About Us'}/> 
        {matches&&<div>
        <div className={classes.container1}>
                <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid style={{display: 'flex',justifyContent: 'center',alignItems:'center'}} item xs={6}>
            <div >
            {match&&<Typography variant="h3"  className={classes.head}><u>VAAP ENERGY</u></Typography>}
            {!match&&<Typography variant="h3"  className={classes.head}><u>VAAP<br/>ENERGY</u></Typography>}
            </div>
        </Grid>
        <Grid item style={{display: 'flex',justifyContent: 'center',alignItems:'center'}} xs={6}>
            <div className={classes.textbody}>
            {/* <Typography variant="h5" className={classes.head} >Vaap Energy</Typography> */}
        <div className={classes.bdy} >
        <Typography variant="body1" style={{color:'#FFFFF1',fontFamily:'Rubik',marginLeft:'1vw',marginTop:'3vh',fontWeight:'500'}}>VAAP ENERGY was established by a core team of experienced engineers. VAAP ENERGY has size and strength to undertake Design & Engineering work for large T&D projects up to 400kV, Electrical Engineering services for Oil & Gas, Petrochemical and other Industrial sectors.</Typography>    
        <List className={classes.lis} aria-label="contacts">
            <ListItem >
                
                <Typography  variant="body2"> <span style={{fontSize:'800',fontWeight:'bolder',paddingRight:'0.5vh',fontFamily:'Rubik'}}>.</span>Fully equipped office with all <span style={{fontWeight:'bolder'}}>required software packages</span> for design and engineering services for Substation.</Typography>
            </ListItem>
            <ListItem >
            
            <Typography  variant="body2"><span style={{fontSize:'900',fontWeight:'bolder',paddingRight:'0.5vh',fontFamily:'Rubik'}}>.</span> Our key personnel have worked in <span style={{fontWeight:'bolder'}}>India,GCC</span> and are conversant with the codes of practice of <span style={{fontWeight:'bolder'}}>West Asian countries </span>as well.</Typography>

            </ListItem>
            <ListItem >
            
            <Typography  variant="body2"> <span style={{fontSize:'800',fontWeight:'bolder',paddingRight:'0.5vh',fontFamily:'Rubik'}}>.</span>VAAP ENERGY have a <span style={{fontWeight:'bolder'}}>power system study team </span> to handle load flow, short circuit, motor starting study, transient stability, protection co-ordination study and harmonic analysis.</Typography>
            </ListItem>
            <ListItem >
            
            <Typography  variant="body2"><span style={{fontSize:'800',fontWeight:'bolder',paddingRight:'0.5vh',fontFamily:'Rubik'}}>.</span> VAAP ENERGY have  <span style={{fontWeight:'bolder'}}>Oil and Gas</span> team to carry out Concept study, FEED and Detail Engineering design for Electrical substation and distribution networks.</Typography>
            </ListItem>
            <ListItem >
            
            <Typography  variant="body2"><span style={{fontSize:'800',fontWeight:'bolder',paddingRight:'0.5vh',fontFamily:'Rubik'}}>.</span>VAAP ENERGY is Well versed in  <span style={{fontWeight:'bolder'}}>Building and Industrial Electrification</span> services including Lighting, small power , Earthing, Lightning Protection -Design, Procurement, Installation and Commissionin</Typography>
            </ListItem>
            <ListItem >
            
            <Typography  variant="body2"><span style={{fontSize:'800',fontWeight:'bolder',paddingRight:'0.5vh',fontFamily:'Rubik'}}>.</span>We have an exclusive team of engineering professionals to carry out Installation,  <span style={{fontWeight:'bolder'}}>Testing and Commissioning</span> of T&D networks and substations up to 400kV</Typography>
            </ListItem>
        </List>
        </div>
            </div>
        </Grid>
      </Grid>
    </div>
        </div>
        <div className={classes.container2}>
                <div className={classes.root}>
      <Grid style={{height:'100%'}} container spacing={3}>
        <Grid style={{display: 'flex',justifyContent: 'center',alignItems:'center',height:'55vh'}} item xs={6}>
        <div className={classes.textbody2}>
            {/* <Typography variant="h5" className={classes.head} >Vaap Energy</Typography> */}
        <div className={classes.bdy2} >
        <Typography variant="body1" style={{color:'#FFFFF1',marginLeft:'1vw',marginTop:'3vh',fontFamily:'Rubik',fontWeight:'500'}}>VAAP ENERGY was established by a core team of experienced engineers. VAAP ENERGY has size and strength to undertake Design & Engineering work for large T&D projects up to 400kV, Electrical Engineering services for Oil & Gas, Petrochemical and other Industrial sectors.</Typography>    
        </div>
            </div>
        </Grid>
        <Grid item style={{display: 'flex',justifyContent: 'center',alignItems:'center'}} xs={6}>
        <div >
            <Typography variant="h3" className={classes.head}><u>MISSION</u></Typography>
            </div>
        </Grid>
      </Grid>
    </div>
        </div>

        <div className={classes.container3}>
                <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid style={{display: 'flex',justifyContent: 'center',alignItems:'center',height:'55vh'}} item xs={6}>
            <div >
            <Typography variant="h3" className={classes.head}><u>VISION</u></Typography>
            </div>
        </Grid>
        <Grid item style={{display: 'flex',justifyContent: 'center',alignItems:'center',height:'55vh'}} xs={6}>
            <div className={classes.textbody}>
            {/* <Typography variant="h5" className={classes.head} >Vaap Energy</Typography> */}
        <div className={classes.bdy} >
        <Typography variant="body1" style={{color:'#FFFFF1',fontFamily:'Rubik',marginLeft:'1vw',marginTop:'3vh',fontWeight:'500'}}>To provide  <span style={{fontWeight:'bolder'}}>high quality</span>, superior  <span style={{fontWeight:'bolder'}}>technology</span>, excellent service and exemplary  <span style={{fontWeight:'bolder'}}>support </span>to customers.
        Provide 
        </Typography>    
        
        </div>
            </div>
        </Grid>
      </Grid>
    </div>
        </div>

        </div>}

        {/* ----------------------------mobile---------------------------------------------------- */}

        {!matches&&<div>
        <div className={classes.container1}>
                <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid style={{display: 'flex',justifyContent: 'center',alignItems:'center'}} item xs={12}>
            <div >
            {match&&<Typography variant="h3"  className={classes.head}><u>VAAP ENERGY</u></Typography>}
            {!match&&<Typography variant="h3"  className={classes.head}><u>VAAP<br/>ENERGY</u></Typography>}
            </div>
        </Grid>
        <Grid item style={{display: 'flex',justifyContent: 'center',alignItems:'flex-start'}} xs={12}>
            <div className={classes.textbody}>
            {/* <Typography variant="h5" className={classes.head} >Vaap Energy</Typography> */}
        <div className={classes.bdy} >
        <Typography variant="body1" style={{color:'#FFFFF1',fontFamily:'Rubik',marginLeft:'1vw',marginTop:'3vh',fontWeight:'500'}}>VAAP ENERGY was established by a core team of experienced engineers. VAAP ENERGY has size and strength to undertake Design & Engineering work for large T&D projects up to 400kV, Electrical Engineering services for Oil & Gas, Petrochemical and other Industrial sectors.</Typography>    
        <List className={classes.lis} aria-label="contacts">
            <ListItem >
                
                <Typography  variant="body2"> <span style={{fontSize:'800',fontWeight:'bolder',paddingRight:'0.5vh',fontFamily:'Rubik'}}>.</span>Fully equipped office with all <span style={{fontWeight:'bolder'}}>required software packages</span> for design and engineering services for Substation.</Typography>
            </ListItem>
            <ListItem >
            
            <Typography  variant="body2"><span style={{fontSize:'900',fontWeight:'bolder',paddingRight:'0.5vh',fontFamily:'Rubik'}}>.</span> Our key personnel have worked in <span style={{fontWeight:'bolder'}}>India,GCC</span> and are conversant with the codes of practice of <span style={{fontWeight:'bolder'}}>West Asian countries </span>as well.</Typography>

            </ListItem>
            <ListItem >
            
            <Typography  variant="body2"> <span style={{fontSize:'800',fontWeight:'bolder',paddingRight:'0.5vh',fontFamily:'Rubik'}}>.</span>VAAP ENERGY have a <span style={{fontWeight:'bolder'}}>power system study team </span> to handle load flow, short circuit, motor starting study, transient stability, protection co-ordination study and harmonic analysis.</Typography>
            </ListItem>
            <ListItem >
            
            <Typography  variant="body2"><span style={{fontSize:'800',fontWeight:'bolder',paddingRight:'0.5vh',fontFamily:'Rubik'}}>.</span> VAAP ENERGY have  <span style={{fontWeight:'bolder'}}>Oil and Gas</span> team to carry out Concept study, FEED and Detail Engineering design for Electrical substation and distribution networks.</Typography>
            </ListItem>
            <ListItem >
            
            <Typography  variant="body2"><span style={{fontSize:'800',fontWeight:'bolder',paddingRight:'0.5vh',fontFamily:'Rubik'}}>.</span>VAAP ENERGY is Well versed in  <span style={{fontWeight:'bolder'}}>Building and Industrial Electrification</span> services including Lighting, small power , Earthing, Lightning Protection -Design, Procurement, Installation and Commissionin</Typography>
            </ListItem>
            <ListItem >
            
            <Typography  variant="body2"><span style={{fontSize:'800',fontWeight:'bolder',paddingRight:'0.5vh',fontFamily:'Rubik'}}>.</span>We have an exclusive team of engineering professionals to carry out Installation,  <span style={{fontWeight:'bolder'}}>Testing and Commissioning</span> of T&D networks and substations up to 400kV</Typography>
            </ListItem>
        </List>
        </div>
            </div>
        </Grid>
      </Grid>
    </div>
        </div>
        <div className={classes.container2mob}>
                <div className={classes.root}>
      <Grid style={{height:'100%'}} container spacing={3}>
        <Grid style={{display: 'flex',justifyContent: 'center',alignItems:'center',height:'55vw',}} item xs={12}>
        <div >
            <Typography variant="h3" className={classes.head}><u>MISSION</u></Typography>
            </div>
        </Grid>
        <Grid item style={{display: 'flex',justifyContent: 'center',alignItems:'flex-start'}} xs={12}>
        <div className={classes.textbody}>
            {/* <Typography variant="h5" className={classes.head} >Vaap Energy</Typography> */}
        <div className={classes.bdy} >
        <Typography variant="body1" style={{color:'#FFFFF1',marginLeft:'1vw',marginTop:'3vh',fontFamily:'Rubik',fontWeight:'500'}}>VAAP ENERGY was established by a core team of experienced engineers. VAAP ENERGY has size and strength to undertake Design & Engineering work for large T&D projects up to 400kV, Electrical Engineering services for Oil & Gas, Petrochemical and other Industrial sectors.</Typography>    
        </div>
            </div>
        </Grid>
      </Grid>
    </div>
        </div>

        <div className={classes.container3}>
                <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid style={{display: 'flex',justifyContent: 'center',alignItems:'center',height:'55vw'}} item xs={12}>
            <div >
            <Typography variant="h3" className={classes.head}><u>VISION</u></Typography>
            </div>
        </Grid>
        <Grid item style={{display: 'flex',justifyContent: 'center',alignItems:'flex-start',height:'55vw'}} xs={12}>
            <div className={classes.textbody}>
            {/* <Typography variant="h5" className={classes.head} >Vaap Energy</Typography> */}
        <div className={classes.bdy} >
        <Typography variant="body1" style={{color:'#FFFFF1',fontFamily:'Rubik',marginLeft:'1vw',marginTop:'3vh',fontWeight:'500'}}>To provide  <span style={{fontWeight:'bolder'}}>high quality</span>, superior  <span style={{fontWeight:'bolder'}}>technology</span>, excellent service and exemplary  <span style={{fontWeight:'bolder'}}>support </span>to customers.
        Provide 
        </Typography>    
        
        </div>
            </div>
        </Grid>
      </Grid>
    </div>
        </div>

        </div>}
        </div>

    
     );
}
 
export default About;


