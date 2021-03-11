import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DesignImage from '../assets/des.png';
import SystemStudyImage from '../assets/SystemStudy.png'
import BuildingImage from '../assets/Build.png'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import EnergyImage from '../assets/Ener.png'
import ReactFontLoader from 'react-font-loader';
import Zoom from 'react-reveal/Zoom';




const OurServices = () => {

  const matches = useMediaQuery('(min-width:960px)');

    const useStyles = makeStyles((theme) => ({
        container:{
          marginTop:'5vh',
          textAlign:'center',
          marginBottom: '7vh',
          overflowX:'hidden',
          overflowY:'hidden',
          paddingBottom: '4vh'
          
        },
        h:{
         fontWeight: '1000',
         color: '#006ad0', 
         letterSpacing:'0.7vw'
        },
        root: {
          flexGrow: 1,
          marginLeft: '2vw',
          marginRight: '2vw'
        },
        griditem:{
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
          
        },
        papermobile: {
          display: 'flex',
          flexDirection: 'column',
          padding: theme.spacing(2),
          textAlign: 'center',
          height: "100%",
          width: '90vw',
          overflowY: 'auto',
          scrollbarWidth: 'thin',         
          
        },
        paperpc:{
          display: 'flex',
          flexDirection: 'column',
          padding: theme.spacing(2),
          textAlign: 'center',
          height: "100%",
          minWidth: '20.5vw',
          overflowY: 'auto',
          scrollbarWidth: 'thin',         
        },
        list:{
          textAlign:'left',
        },
        heading:{
          background:'#006ad0', 
          color:'white',
          padding: '1vh'
        },
        underline:{
          marginTop: '100vh'
        }
        
      }));

      const classes = useStyles();

    return ( 
      <div className={classes.container}>
        <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik&display=swap%27' />
        <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap' />
        <Typography className={classes.h} variant="h4" component="h2">
            <u style={{fontFamily:'Rubik'}} className={classes.underline}>OUR SERVICES</u> 
          </Typography>
        <div style={{marginTop:'7vh'}} className={classes.root}>
      {matches&&
      <Zoom>
      <Grid layout={'row'} container spacing={3}>
        <Grid item className={`${classes.griditem} image`} md={3}>
         
        <img   src={DesignImage} alt='Design' width='200vw' height='200vh' />
        <Paper className={classes.paperpc}>
          <Typography style={{fontFamily:'Rubik'}} className={classes.heading} gutterBottom variant="h5" component="h2">
            Design & Primary Engineering 
          </Typography>
          <Divider/>
            <ul style={{textAlign:'left', fontFamily:'Rubik'}}>
                <li>Load Schedule</li>
                <li>Single Line Diagrams</li>
                <li>Equipment Sizing</li>
                <li>Equiment Layouts</li>
                <li>Earthing & Lightning Protection</li>
                <li>Lighting System Design</li>
                <li>Cable routing Layouts</li>
                <li>Conduit Layouts</li>
                <li>Interconnection Schedule</li>
                <li>As Built Drawings</li>
            </ul>
        </Paper>
        </Grid>
        

        <Grid  className={`${classes.griditem} image`} item md={3}>
        
        <img src={SystemStudyImage} alt='Design' width='200vw' height='200vh' />
        <Paper  className={classes.paperpc}>
          <Typography style={{fontFamily:'Rubik'}} className={classes.heading} gutterBottom variant="h5" component="h2">
            System Studies
          </Typography>
          <Divider/>
            <ul style={{textAlign:'left', fontFamily:'Rubik'}}>
            <li>Load Flow Studies</li>
                <li>Short Circuit Studies</li>
                <li>Transient Stability</li>
                <li>Relay Co-ordination</li>
                <li>Dynamic Stability</li>
                <li>Motor Starting Analysis</li>
                <li>Harmonic Analysis</li>
                <li>Arc Flash Analysis</li>
            </ul>
        </Paper>
        </Grid>
        <Grid className={`${classes.griditem} image`} item md={3}>
        <img src={BuildingImage} alt='Design' width='200vw' height='200vh' />
        <Paper className={classes.paperpc}>
          <Typography style={{fontFamily:'Rubik', background:'#006ad0', color:'white'}} className={classes.heading} gutterBottom variant="h5" component="h2">
          Building Services
          </Typography>
          <Divider/>          
            <ul style={{textAlign:'left', fontFamily:'Rubik'}}>
                <li>Lighting Calculation</li>
                <li>Lighting Layout</li>
                <li>DB Schedule & SLD</li>
                <li>Conduit Layout</li>
                <li>Procurement & Installation of Switchgear, DG, MCC, Lighting,Small Power, etc.</li>
            </ul>
        </Paper>
        </Grid>
        <Grid className={`${classes.griditem} image`} item md={3}>
        <img src={EnergyImage} alt='Design' width='200vw' height='200vh' />
        <Paper className={classes.paperpc}>
          <Typography style={{fontFamily:'Rubik'}} className={classes.heading} gutterBottom variant="h5" component="h2">
          Energy Audit 
          </Typography>
          <Divider/>
            <ul style={{textAlign:'left', fontFamily:'Rubik'}}>
                <li>Energy Survey & Analysis</li>
                <li>Energy Conservation Measures</li>
            </ul>
        </Paper>
        </Grid>
      </Grid></Zoom>}

        {!matches&&
      <Grid layout={'row'} container spacing={3}>
        <Grid item className={classes.griditem} md={3}>
        <img src={DesignImage} alt='Design' width='200vw' height='200vh' />
        <Paper className={classes.papermobile}>
          <Typography style={{fontFamily:'Rubik'}} className={classes.heading} gutterBottom variant="h5" component="h2">
            Concept, FEED, Detail, Design & Primary Engineering 
          </Typography>
          <Divider/>
            <ul style={{textAlign:'left', fontFamily:'Rubik'}}>
                <li>Load Schedule</li>
                <li>Single Line Diagrams</li>
                <li>Equipment Sizing</li>
                <li>Equiment Layouts</li>
                <li>Earthing & Lightning Protection</li>
                <li>Lighting System Design</li>
                <li>Cable routing Layouts</li>
                <li>Conduit Layouts</li>
                <li>Interconnection Schedule</li>
                <li>As Built Drawings</li>
            </ul>
        </Paper>
        
        </Grid>
        <Grid  className={classes.griditem} item md={3}>
        
        <img src={SystemStudyImage} alt='Design' width='200vw' height='200vh' />
        <Paper  className={classes.papermobile}>
          <Typography style={{fontFamily:'Rubik'}} className={classes.heading} gutterBottom variant="h5" component="h2">
            System Studies
          </Typography>
          <Divider/>
            <ul style={{textAlign:'left', fontFamily:'Rubik'}}>
            <li>Load Flow Studies</li>
                <li>Short Circuit Studies</li>
                <li>Transient Stability</li>
                <li>Relay Co-ordination</li>
                <li>Dynamic Stability</li>
                <li>Motor Starting Analysis</li>
                <li>Harmonic Analysis</li>
                <li>Arc Flash Analysis</li>
            </ul>
        </Paper>
        </Grid>
        <Grid className={classes.griditem} item md={3}>
        <img src={BuildingImage} alt='Design' width='200vw' height='200vh' />
        <Paper className={classes.papermobile}>
          <Typography style={{fontFamily:'Rubik',background:'#0c2a50', color:'white'}} className={classes.heading} gutterBottom variant="h5" component="h2">
          Building Services
          </Typography>
          <Divider/>          
            <ul style={{textAlign:'left', fontFamily:'Rubik'}}>
                <li>Lighting Calculation</li>
                <li>Lighting Layout</li>
                <li>DB Schedule & SLD</li>
                <li>Conduit Layout</li>
                <li>Procurement & Installation of Switchgear, DG, MCC, Lighting,Small Power, etc.</li>
            </ul>
        </Paper>
        </Grid>
        <Grid className={classes.griditem} item md={3}>
        <img src={EnergyImage} alt='Design' width='200vw' height='200vh' />
        <Paper className={classes.papermobile}>
          <Typography style={{fontFamily:'Rubik'}} className={classes.heading} gutterBottom variant="h5" component="h2">
          Energy Audit 
          </Typography>
          <Divider/>
            <ul style={{textAlign:'left', fontFamily:'Rubik'}}>
                <li>Energy Survey & Analysis</li>
                <li>Energy Conservation Measures</li>
            </ul>
        </Paper>
        </Grid>
      </Grid>}
    </div>
    </div>
     );
}
 
export default OurServices;