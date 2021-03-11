import IconBreadcrumbs from './breadcrumb';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import ReactFontLoader from 'react-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const Projects = () => {

    const useStyles = makeStyles((theme) => ({
        
        container1:{
            width: '100%',
            margin: '0',
            backgroundColor: '#093c73', 
            backgroundPosition: 'center',
            // backgroundAttachment:'fixed', 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover',
            overflowY:'hidden',
            overflowX:'hidden',
            paddingBottom:'5vh',
            
        },
        root: {
            flexGrow: 1,
          },
          paper: {
            // display:'flex',
            // flexDirection:'column',
            padding: theme.spacing(2),
            // textAlign: 'center',
            color: theme.palette.text.secondary,
            // AlignItems:'center',
          },
        container2:{
            width: '100%',
            margin: '0',
            backgroundColor: '#ffffe1', 
            backgroundPosition: 'center',
            // backgroundAttachment:'fixed', 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover',
            overflowY:'hidden',
            overflowX:'hidden',
            paddingBottom:'5vh',
            
        },

        textbody1:{
            marginTop:'5vh',
            marginLeft:'2.5vw',
            marginRight:'2.5vw',
            
        }
        
      }));

      const classes=useStyles();

      const matches = useMediaQuery('(min-width:550px)');


    return ( 
        <div>
            <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap' />
            <IconBreadcrumbs page={'Projects'}/> 

            <div className={classes.container1}>

                <div className={classes.textbody1}>

                    <Typography variant='h5' style={{paddingBottom:'2vh', fontWeight:'500',fontFamily:'Rubik',color:'white' }}>
                        Experience in Gcc
                    </Typography>

                   
                        <div > <Typography variant='body1' style={{fontFamily:'Rubik',color:'white'}}>VAAP ENERGY offers Quality Oriented Engineering Services in various sectors like Power, Petrochemicals, Oil & Gas, WTP, STP, Steel, Cement, Fertilizers, Paper, Sugar and Infrastructure in different system levels up to 400kV.<br/></Typography></div>
                        <div style={{marginTop:'1vh'}}> <Typography variant='body1' style={{fontFamily:'Rubik',color:'white'}}>VAAP ENERGY also support the End Clients & Consultants by offering services like Design Office Co-ordination, Witnessing Factory Acceptance Test (FAT),Owner Engineering services, Energy Audits, Supervision of Erection, Testing and Commissioning.<br/></Typography></div>
                        <div style={{marginTop:'1vh'}}> <Typography variant='body1' style={{fontFamily:'Rubik',color:'white'}}>VAAP ENERGY Engineers have working experience in with various clients like Dubai Electricity and Water Authority, Sharjah Electricity and Water Authority, Abu Dhabi Electricity and Water Authority, TRANSCO, ADDC, AADC, ADNOC, QP, and KAHRAMAA.<br/></Typography></div>
                        <div style={{marginTop:'1vh'}}> <Typography variant='body1' style={{fontFamily:'Rubik',color:'white'}}>VAAP ENERGY has carried out various <span style={{fontWeight:'600',fontVariantCaps:'small-caps'}}>engineering activities</span> including-  </Typography>
                        <ul style={{color:'white'}}>
                            <li>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'white'}}>FEED</Typography>
                            </li>
                        
                        
                            <li>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'white'}}>Detailed Engineering</Typography>
                            </li>
                        
                        
                            <li>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'white'}}>Detailed Engineering</Typography>
                            </li>
                        
                    
                            <li>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'white'}}>Adequacy Checks</Typography>
                            </li>
                        
                    
                            <li>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'white'}}>Power system studies</Typography>
                            </li>
                        
                    
                            <li>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'white'}}>Protection Co-ordination Studies</Typography>
                            </li>
                        
                    
                            <li>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'white'}}>Schematic Drawings Preparation</Typography>
                            </li>
                        
                    
                            <li>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'white'}}>As Built Drawings Preparation</Typography>
                            </li>
                        </ul></div>
                    

                    <Typography variant='h5' style={{paddingBottom:'2vh',paddingTop:'4vh', fontWeight:'500',fontFamily:'Rubik',color:'white' }}>
                        Engineering
                    </Typography>

                    
                        <div ><Typography variant='body1' style={{fontFamily:'Rubik',color:'white'}}>All design drawings undergo VAAP ENERGY ’s stringent quality review process to ensure technical accuracy and full compliance with project requirements.<br/></Typography></div>
                        <div style={{marginTop:'1vh'}}><Typography variant='body1' style={{fontFamily:'Rubik',color:'white'}}>VAAP ENERGY ’s expertise in protection and control design ensures that the equipment on the system is properly protected and coordinated.<br/></Typography></div>
                        <div style={{marginTop:'1vh'}}><Typography variant='body1' style={{fontFamily:'Rubik',color:'white'}}>VAAP ENERGY is uniquely qualified to provide protection and control designs for the projects ranging upto 400kV. We provide our engineering services to various clients in India and abroad   <br/></Typography></div>
                    


                </div>

            
            </div>

            <div className={classes.container2}>

            <div className={classes.textbody1}>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid style={{display:'flex',flexDirection:'column',alignItems:'center',}} item xs={matches?6:12}>
                    <div className={classes.paper}>
                    <Typography variant='h5' style={{fontFamily:'Rubik',color:'#093c73',fontWeight:'500'}}>
                        Abroad clients
                    </Typography>
                    <ul >
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                            ABB
                            </Typography>
                        </li>
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                MOTT MacDonald
                            </Typography>
                        </li>
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                Hitachi
                            </Typography>
                        </li>
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                            Penspen
                            </Typography>
                        </li>
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                WSP
                            </Typography>
                        </li>
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                Ramboll-Qatar
                            </Typography>
                        </li>
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                Al-Asab
                            </Typography>
                        </li>
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                Cegelec
                            </Typography>
                        </li>
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                EHV
                            </Typography>
                        </li>
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                Tasneem General Contracting
                            </Typography>
                        </li>
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                Acume
                            </Typography>
                        </li>
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                Petroflow
                            </Typography>
                        </li>
                    </ul>
                    </div>
                    </Grid>
                    <Grid style={{display:'flex',flexDirection:'column',alignItems:'center',}} item xs={matches?6:12}>
                    <div className={classes.paper}>
                    <Typography variant='h5' style={{fontFamily:'Rubik',color:'#093c73',fontWeight:'500'}}>
                        Indian clients
                    </Typography>
                    <ul>
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                SIEMENS
                            </Typography>
                        </li>
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                VATECH Wabag
                            </Typography>
                        </li>
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                Jove Multisystems
                            </Typography>
                        </li>
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                Testpro
                            </Typography>
                        </li>
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                Madras Fertilizers Ltd.
                            </Typography>
                        </li>
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                JK Engineers
                            </Typography>
                        </li>
                        <li style={{color:'#093c8b'}}>
                            <Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                Sun Cranes & Hoists (P) Ltd
                            </Typography>
                        </li>
                        <li style={{color:'#093c8b'}}>
                            {matches&&<Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                Sub Zero Mobile Refrigeration Solution
                            </Typography>}
                            {!matches&&<Typography variant='body1' style={{fontFamily:'Rubik',color:'black'}}>
                                Sub Zero Mobile<br/> Refrigeration Solution
                            </Typography>}
                        </li>
                    </ul> 
                    </div>
                    </Grid>
                </Grid>

                </div>

                <Typography variant='body1' style={{fontFamily:'Rubik',color:'white'}}>

                </Typography>                

            </div>

            </div>
            
        </div>
     );
}
 
export default Projects;
