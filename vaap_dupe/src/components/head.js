import Typography from '@material-ui/core/Typography';
import ReactFontLoader from 'react-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from "./navbar-pc";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MobileNavBar from './appbar-mobile';


const Head = () => {
    const useStyles = makeStyles((theme) => ({
       textHead:{
           color: 'white',
           marginLeft: '3%',
           fontWeight:'bold',
           paddingTop: '2vh'
           
       },
       text:{
        color: 'white',
        marginLeft: '3.5%',
        fontWeight:'bold',
        paddingBottom: '2vh'
        
    },
    }));

    const classes = useStyles();
    const matches = useMediaQuery('(min-width:700px)');


    return ( 
        <div className="header-nav">
            <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik&display=swap%27' />
            {matches&&<NavBar/>}
            {!(matches)&&<MobileNavBar style={{fontFamily:'Rubik'}}/>}
            <Typography className={classes.textHead} style={{ fontFamily: 'Rubik'  }} variant="h3">
                 VAAP ENERGY PVT. LTD.       
            </Typography>
            <Typography className={classes.text} style={{ fontFamily: 'Rubik'  }} variant="subtitle1">
                 VAAP ENERGY ENGINEERS & CONSULTANTS FZE. LLC.       
            </Typography>
            
        </div>
     );
}
 
export default Head;