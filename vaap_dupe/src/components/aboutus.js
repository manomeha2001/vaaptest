import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import ListItemText from '@material-ui/core/ListItemText';
import ReactFontLoader from 'react-font-loader';
const useStyles = makeStyles((theme) => ({
  root:{
    paddingTop:'1vh',
    paddingBottom:'1vh',
    fontFamily:'Rubik',
    paddingLeft:'2vh',
    paddingRight:'2vh'
  },
  head:{
      fontWeight:'800',
      fontFamily:'Rubik',
      color:'#0d2d59',
      paddingTop:'2vh',
      paddingBottom:'1vh',
  },
  lis:{
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    fontFamily:'Rubik',
    paddingTop:'1vh',
    color:'#777777'
  },
  bdy:{
      paddingLeft:'1vh'
  }
 
}));



export default function Aboutus() {
  const classes = useStyles();

  return (
      
    <div className={classes.root}> 
        <div>
        <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik&display=swap%27' />
        <Typography variant="h5" className={classes.head} >Vaap Energy</Typography>
        <div className={classes.bdy} >
        <Typography variant="body1" style={{color:'#777777'}}>VAAP ENERGY was established by a core team of experienced engineers. VAAP ENERGY has size and strength to undertake Design & Engineering work for large T&D projects up to 400kV, Electrical Engineering services for Oil & Gas, Petrochemical and other Industrial sectors.</Typography>    
        <List className={classes.lis} aria-label="contacts">
            <ListItem >
                
                <Typography  varriant="body1"> <span style={{fontSize:'800',fontWeight:'bolder',paddingRight:'0.5vh'}}>.</span>Fully equipped office with all <span style={{fontWeight:'bolder'}}>required software packages</span> for design and engineering services for Substation.</Typography>
            </ListItem>
            <ListItem >
            
            <Typography  varriant="body1"><span style={{fontSize:'900',fontWeight:'bolder',paddingRight:'0.5vh'}}>.</span> Our key personnel have worked in <span style={{fontWeight:'bolder'}}>India,GCC</span> and are conversant with the codes of practice of <span style={{fontWeight:'bolder'}}>West Asian countries </span>as well.</Typography>

            </ListItem>
            <ListItem >
            
            <Typography  varriant="body1"> <span style={{fontSize:'800',fontWeight:'bolder',paddingRight:'0.5vh'}}>.</span>VAAP ENERGY have a <span style={{fontWeight:'bolder'}}>power system study team </span> to handle load flow, short circuit, motor starting study, transient stability, protection co-ordination study and harmonic analysis.</Typography>
            </ListItem>
            <ListItem >
            
            <Typography  varriant="body1"><span style={{fontSize:'800',fontWeight:'bolder',paddingRight:'0.5vh'}}>.</span> VAAP ENERGY have  <span style={{fontWeight:'bolder'}}>Oil and Gas</span> team to carry out Concept study, FEED and Detail Engineering design for Electrical substation and distribution networks.</Typography>
            </ListItem>
            <ListItem >
            
            <Typography  varriant="body1"><span style={{fontSize:'800',fontWeight:'bolder',paddingRight:'0.5vh'}}>.</span>VAAP ENERGY is Well versed in  <span style={{fontWeight:'bolder'}}>Building and Industrial Electrification</span> services including Lighting, small power , Earthing, Lightning Protection -Design, Procurement, Installation and Commissionin</Typography>
            </ListItem>
            <ListItem >
            
            <Typography  varriant="body1"><span style={{fontSize:'800',fontWeight:'bolder',paddingRight:'0.5vh'}}>.</span>We have an exclusive team of engineering professionals to carry out Installation,  <span style={{fontWeight:'bolder'}}>Testing and Commissioning</span> of T&D networks and substations up to 400kV</Typography>
            </ListItem>
        </List>
        </div>
        </div>
        <div>
        <Typography variant="h5" className={classes.head} >MISSION</Typography>
        <div className={classes.bdy}>
        <Typography variant="body1" style={{color:'#777777'}}>To serve clients across the Globe to meet their objectives within the <span style={{fontWeight:'bolder'}}> budget and time</span>.</Typography>    
        </div>
        </div>
        <div>
        <Typography variant="h5" className={classes.head} >VISION</Typography>
        <div className={classes.bdy} style={{paddingBottom:'2vh'}}>
        <Typography variant="body1" style={{color:'#777777'}}>To provide  <span style={{fontWeight:'bolder'}}>high quality</span>, superior  <span style={{fontWeight:'bolder'}}>technology</span>, excellent service and exemplary  <span style={{fontWeight:'bolder'}}>support </span>to customers.</Typography>    
        </div>
        </div>
        </div>
  );
}
