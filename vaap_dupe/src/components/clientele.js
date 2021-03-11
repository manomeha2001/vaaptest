import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import ReactFontLoader from 'react-font-loader';
import Popover from '@material-ui/core/Popover';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      marginTop:'4vh',
      marginBottom:'3vh',
      
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '120vh'   ,
      height: '70vh',
      
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));
  

const Clientele = ({clientlist}) => {

    const classes = useStyles();

    const matches = useMediaQuery('(min-width:650px)');


    return ( 
        <Container >
            <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap' />
            <Typography variant='h4' style={{fontFamily:'Rubik',marginTop:'4vh',marginLeft:'4vw',fontWeight:'500',color:'#0a3668'}}>Our Clients</Typography>
        <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={matches?3:2}>
        {clientlist.map((tile,i) => (
          <GridListTile key={i} cols={1}>
            <img width='100%' height='100%' src={tile.image} alt={tile.name} />
            <GridListTileBar style={{background:'rgba(13,38,69,0.9)',fontFamily:'Rubik'}}
              title={tile.name}
              
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </Container>
     );
}
 
export default Clientele;