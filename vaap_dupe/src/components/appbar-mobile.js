import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import WorkIcon from '@material-ui/icons/Work';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Logo from '../assets/vaap-logo.png';



const useStyles = makeStyles({
    list: {
        width: 250,
        background: '#0354a5'
    },
    fullList: {
        width: 'auto',
    },
    listitemtext:{
        color: 'white',
        fontWeight: 'bold'
    }
});

export default function MobileNavBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
            <div
                className={clsx(classes.list, {
                    [classes.fullList]: anchor === 'top' || anchor === 'bottom',
                })}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
             
            <List>
            
                
                <ListItem button onClick={()=>{window.location='/'}} >
                    <ListItemIcon><HomeIcon style={{color: 'white'}}/></ListItemIcon>
                    <ListItemText className={classes.listitemtext} style={{fontFamily:'Rubik'}}  primary={'Home'} />
                </ListItem>
                <Divider />
                <ListItem button onClick={()=>{window.location='/about'}}>
                    <ListItemIcon><InfoIcon style={{color: 'white'}}/></ListItemIcon>
                    <ListItemText className={classes.listitemtext} style={{fontFamily:'Rubik'}}  primary={'About Us'} />
                </ListItem>
                <Divider />
                <ListItem button onClick={()=>{window.location='/projects'}}>
                    <ListItemIcon><WorkIcon style={{color: 'white'}}/></ListItemIcon>
                    <ListItemText className={classes.listitemtext} style={{fontFamily:'Rubik'}}  primary={'Projects'} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon><AssignmentTurnedInIcon style={{color: 'white'}}/></ListItemIcon>
                    <ListItemText className={classes.listitemtext} style={{fontFamily:'Rubik'}}  primary={'Clientelle'} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon><SentimentVerySatisfiedIcon style={{color: 'white'}}/></ListItemIcon>
                    <ListItemText className={classes.listitemtext} style={{fontFamily:'Rubik'}}  primary={'Services'} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon><ContactSupportIcon style={{color: 'white'}}/></ListItemIcon>
                    <ListItemText className={classes.listitemtext} style={{fontFamily:'Rubik'}}  primary={'Contact'} />
                </ListItem>
            </List>

        </div>
    );

    return (
        <div style={{display: 'flex', paddingTop:'2vh'}}>
            
            <img src={Logo} alt='Vaap' width='50vw' height='48vh' style={{border:'3px solid white',marginLeft:'3vw'}} /> 
            <div style={{marginTop: '1vh',width:'100%',textAlign:'right'}}>
            {<React.Fragment key={'top'}>
                <Button style={{color:'white'}} onClick={toggleDrawer('top', true)}>{<MenuIcon />}</Button>
                <Drawer anchor={'top'} open={state['top']} onClose={toggleDrawer('top', false)}>
                    {list('top')}
                </Drawer>
            </React.Fragment>
            }</div>
        </div>
    );
}
