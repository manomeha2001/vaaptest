import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles'
import Carousel from 'react-material-ui-carousel'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import BackgroundHeader1 from '../assets/Carouselimage1.jpg';
import BackgroundHeader2 from '../assets/Carouselimage2.jpg';
import BackgroundHeader3 from '../assets/Carouselimage3.jpg';
import ReactFontLoader from 'react-font-loader';





const useStyles = makeStyles((theme) => ({
  maindiv:{
      width:'100%',
      dispay: 'flex',
      textAlign: 'center',
      overflowX:'hidden'
  },
  navarrow:{
    background:'transparent'
  },
  paperdiv:{
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    height: '60vh',
    flexDirection: 'column',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover',
    marginTop: '-3.3vh',
    textAlign:'center'
  },
  paperheader:{
    width: '80vw',
    height: 'wrap-content',
    background: 'rgb(20,20,20,0.8)',
    boxShadow: '-3px 3px 5px rgb(20,20,20)',
    color: 'white',
    borderRadius:'0',
    fontWeight: '700'
  },
  papersubheader:{
    width: '80vw',
    height: 'wrap-content',
    background: '#006ad0',
    // opacity: 0.8,
    boxShadow: '-3px 3px 5px rgb(20,20,20)',
    color: 'white',
    borderRadius:'0'
  }
}));



function Item(props)
{
  

  const classes = useStyles();
    return (

        <Paper elevation={7} style={{ backgroundImage:`url(${props.item.back})`, }} className={classes.paperdiv}>
          <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik&display=swap%27' />
            <Paper  className={classes.paperheader} elevation={3} >
            <h1 style={{fontFamily: 'Rubik'}}>{props.item.name}</h1>
            </Paper>
            <Paper className={classes.papersubheader} elevation={3} >
            <p style={{fontFamily: 'Rubik'}}>{props.item.description}</p>
            </Paper>

            <div className="wrapper" style={{textAlign:'center'}}>
            <a className='a'><span><Button style={{fontFamily: 'Rubik'}}>Read More</Button></span></a>
            </div>
        </Paper>
    )
}



  const Carousell = () => {



     var items = [
      {
          name: "MISSION",
          description: "To serve clients across the Globe to meet their objectives within the budget and time.",
          back: BackgroundHeader2
      },
      {
          name: "VISION",
          description: "To provide high quality, superior technology, excellent service and exemplary support to customers.",
          back: BackgroundHeader1
      },
      {
        name: "SERVICES",
        description: "Concept, FEED, Detailed Engineering Services, System Studies,Energy Audits, Procurement Support, Lighting Design, Drafting Services, As Built Engineering, Testing & Commissioning Services.",
        back: BackgroundHeader3
    }
  ]

 
     

      return (
        
        <Carousel  navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
              background:'transparent',
              borderRadius: 0,
              color: '#006fd9',
              opacity: 0.8,
              margin: 0
          }
      }} NextIcon={<ArrowForwardIosIcon style={{fontSize:'4vh', fontWeight:'bolder'}}/>} PrevIcon={<ArrowBackIosIcon style={{fontSize:'4vh',fontWeight:'bolder'}}/>}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        
          );

        
  }
   
  export default Carousell;

