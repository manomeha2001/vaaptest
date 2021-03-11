import Paper from '@material-ui/core/Paper';
import { animated, useSpring, useTrail } from "react-spring";
import { useScroll } from "react-use-gesture";
import ABBImage from "../assets/ABB.png";
import ALAsabImage from "../assets/AlAsab.jpg";
import MottImage from "../assets/Mott.png";
import RambollImage from "../assets/Ramboll.png";
import SiemensImage from "../assets/Siemens.png";
import { makeStyles } from '@material-ui/core/styles';
import Background from "../assets/backgroundsea.png";
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ReactFontLoader from 'react-font-loader';
import {RemoveScrollBar} from 'react-remove-scroll-bar';


const clamp = (value, clampAt) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

const useStyles = makeStyles((theme) => ({

  maindiv: {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${Background})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    overflowX: 'hidden',
    paddingTop:'6vw',
    paddingRight: '3vw',
    paddingBottom:'6vw'

  },
  root: {
    // background: '#f8f8f8',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    overflowX: 'hidden',
    width: '95%',

  },
  h: {
    fontWeight: '1000',
    color: 'white',
    letterSpacing:'0.7vw'
  },
  
  mainsubdiv: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '-1.5vw',
    marginLeft: '-2.5vw'
  },
  card: {
    height: '100%',
    width: '280px',
    // maxWidth: '25vw',
    // paddigLeft: '0px', paddingRight:'0px' ,
    display: 'flex', flexDirection: 'column',
    justifyContent: 'center', textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center', justifyItems: 'center',
    // paddingTop:'3vh',
    background: '#006ad0',
    
  },
  clientname: {
    color: 'white',
    fontVariant: 'subtitle1'
  },
  clienttext: {
    color: 'white',
    fontVariant: 'subtitle2',
  },
  image: {
    position: 'relative',
    
  },
  animediv: {
    position: 'absolute', top: '0', left: '1', width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
    justifyContent: 'center', textAlign: 'center',
    alignContent: 'center',
    // marginBottom:'7.5vh', marginTop:'4.5vh',
    alignItems: 'center', justifyItems: 'center', opacity: 0, background: '#0555a4',
    color: 'white'

  }
  
}))

// const movies = [
//   {
//     key: 1,
//     client: 'ABB',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore veniam magnam repellat explicabo voluptatem facere. Incidunt ex voluptatum esse amet.',
//     imag: ABBImage

//   },
//   {
//     key: 2,
//     client: 'Mott Macdonald',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore veniam magnam repellat explicabo voluptatem facere. Incidunt ex voluptatum esse amet.',
//     imag: MottImage

//   },
//   {
//     key: 3,
//     client: 'AL Asab',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore veniam magnam repellat explicabo voluptatem facere. Incidunt ex voluptatum esse amet.',
//     imag: ALAsabImage

//   },
//   {
//     key: 4,
//     client: 'Siemens',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore veniam magnam repellat explicabo voluptatem facere. Incidunt ex voluptatum esse amet.',
//     imag: SiemensImage

//   },
//   {
//     key: 5,
//     client: 'Ramball',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore veniam magnam repellat explicabo voluptatem facere. Incidunt ex voluptatum esse amet.',
//     imag: RambollImage

//   }
// ]


function App({clientlist}) {

  

  const classes = useStyles();
  const AnimatedPaper = animated(Paper);
  const [style, set] = useSpring(() => ({
    transform: "perspective(300px) rotateY(0deg)"
  }));
  const bind = useScroll(event => {
    set({
      transform: `perspective(300px) rotateY(${event.scrolling ? clamp(event.delta[0], 30) : 0
        }deg)`
    });
  });

  

  const trail = useTrail(clientlist.length, {
    delay: 1000,
    from: {
      opacity: 0,
      transform: "translateX(50px)"
    },
    opacity: 1,
    transform: "translateX(0px)"
  });
  return (
    
    <div className={classes.maindiv}>
      <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik&display=swap%27' />
      <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap' />
      <Typography className={classes.h} variant="h4" component="h2">
        <u style={{ fontFamily: 'Rubik' }} className={classes.underline}>OUR CLIENTS</u>
      </Typography>
      <div className={classes.root}>
      
        <div className={`${classes.mainsubdiv} subdiv`}>
          <ArrowBackIosIcon style={{ fontSize: '5vw', color: '#213063' }} />
          <ArrowBackIosIcon style={{ fontSize: '6vw', marginLeft: '-3.5vw', color: '#213063' }} /></div>
        <div style={{ width: '85%', marginRight: '20px' }}>
          <div className={`${classes.containerr} container`} {...bind()}>
            {trail.map((props, i) => (
              <AnimatedPaper elevation={13}
                key={i}
                className={`${classes.card} card`}
                style={{
                  ...props,
                  ...style,


                }}
              >

                <img className={classes.image} src={clientlist[i].image} height="150vh" width="280px" alt="" />
                <div className={`${classes.animediv} anidiv`}>
                  <Typography style={{fontFamily: 'Rubik'}} className={classes.clienttext} >
                    {clientlist[i].description}
                  </Typography></div>
                <Typography style={{fontFamily: 'Rubik'}} className={classes.clientname} >
                  {clientlist[i].name}
                </Typography>
              </AnimatedPaper>

            ))}
          </div>

        </div></div></div>
  );
}

export default App;
