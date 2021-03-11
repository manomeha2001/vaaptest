import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ReactFontLoader from 'react-font-loader'
import Logo from '../assets/vaap-logo.png';
import {Link} from 'react-router-dom';



const NavBar_PC = () => {

  



    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            background:'transparent',
            overflowX:'hidden'
            
        },
        title: {
            flex: 1,
            // marginLeft:'auto'
        },
        appbar: {
            background:'transparent',
            color:'#FFFF',
            align: 'right',
            paddingTop: '2vh',
        },
        button:{
           color: 'white',
           fontFamily: 'Rubik', 
           fontWeight:'bolder',
           width:'wrap-content',
            
        //    border:'3px solid white',
        //    boxSizng:'border-box',
           marginRight:'0.5%',
        //    backgroundColor:'rgb(30,30,30,0.5)',
           "&:hover": {
            //you want this to be the same as the backgroundColor above
            color: "#31A3DD",
            background:'white',
            textDecoration: 'underline',
           
        },
        // logo:{
        //     border: 
        // }
           
        }
    }));

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik&display=swap%27' />
            <AppBar  className={classes.appbar} background="transparent" elevation={0} position="static">
                <Toolbar>
                    <img className={classes.logo} src={Logo} alt='Vaap' width='50vw' height='48vh' border='4px solid white' />
                    <Typography variant="h6"  className={classes.title}> 
                       
                     </Typography >
                    <Button onClick={()=>{window.location='/'}} className={classes.button}  ><Typography style={{fontFamily:'Rubik', fontWeight:'bolder'}} variant="subtitle1" className={classes.title}>
                       Home
                    </Typography></Button>
                    <Button onClick={()=>{window.location='/about'}} className={classes.button} color="inherit"><Typography style={{fontFamily:'Rubik', fontWeight:'bolder'}} variant="subtitle1"  className={classes.title}>
                        About Us
                    </Typography></Button>
                   <Button onClick={()=>{window.location='/projects'}} className={classes.button} color="inherit"><Typography style={{fontFamily:'Rubik', fontWeight:'bolder'}} variant="subtitle1"  className={classes.title}>
                        Projects
                    </Typography></Button>
                    <Button onClick={()=>{window.location='/clientele'}} className={classes.button} color="inherit"><Typography style={{fontFamily:'Rubik', fontWeight:'bolder'}} variant="subtitle1"  className={classes.title}>
                        Clientele
                    </Typography></Button>
                    <Button className={classes.button} color="inherit"><Typography style={{fontFamily:'Rubik', fontWeight:'bolder'}} variant="subtitle1"  className={classes.title}>
                        Services
                    </Typography></Button>
                    <Button className={classes.button} color="inherit"><Typography style={{fontFamily:'Rubik', fontWeight:'bolder'}} variant="subtitle1"  className={classes.title}>
                        Contact
                    </Typography></Button>

                    
                </Toolbar>
            </AppBar>



        </div>
    );
}

export default NavBar_PC;