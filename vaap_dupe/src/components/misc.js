import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import DescriptionIcon from '@material-ui/icons/Description';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReactFontLoader from 'react-font-loader';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import PersonIcon from '@material-ui/icons/Person';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';





const useStyles = makeStyles((theme) => ({

    divroot:{
        
       paddingTop:'3vh',
       overflowX:'hidden',
       overflowY:'hidden'

    },
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    newsdiv:{
        width: '100%',
        height: '500px',
        overflowY: 'scroll',
        background:'#f8f8f8',
        scrollbarWidth:'thin',
        scrollbarColor:'#006ad0 rgb(60,60,60)'
    },
    newsgrid:{
        
        

    },
    newsitem:{
        display:'flex',
        justifyContent: 'flex-start',
        // flexDirection: 'column',
        textAlign:'left',
        marginBottom:'3vh',
        marginLeft:'2vw',
        marginRight:'2vw',
        marginTop:'3vh'
        
        
    },
    newstitle:{
        marginLeft:'2vh',
                // width:
        
    },
    blogdiv:{
        width: '100%',
        height: '500px',
        overflowY: 'scroll',
        scrollbarWidth:'thin',
        scrollbarColor:'#006ad0 rgb(60,60,60)'
    },
    blogitem:{
        display:'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        textAlign:'left',
        marginBottom:'3vh',
        // marginLeft:'2vw',
        marginRight:'2vw',
        marginTop:'3vh'
    },

    card:{
        width:'100%',
        paddingBottom:'2vh',
        paddingRight:'0'
        
        
    },
    cardcontent:{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'space-between',
        alignContent: 'space-between',
        marginTop:'2vh',
        marginLeft:'2vw',
        marginRight:'2vw',
        
    },
    blogtitle:{
        marginBottom:'1vh',
        
    },
    cardfooter:{
        // display:'flex',flexDirention:'row',justifyContent:'space-between'
        marginRight:'2vh',
        marginLeft:'1vh'
    }
  
}))

function NewsItem(arg) {
    
    const classes=useStyles();
    return(
        <div className={classes.newsitem}>
            <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik&display=swap%27' />
            {/* <div className={classes.newsitemitem}> */}
            <AnnouncementIcon style={{margin:'auto',color:'#006ad0'}}/>
            <div className={classes.newstitle}>
            <Typography style={{fontFamily:'Rubik'}} variant="body1">
            {arg.news.newstitle}
            </Typography>
            <div style={{display:'flex',flexDirention:'row',justifyContent:'space-between'}}>
            <Typography style={{color:'#006ad0',fontFamily:'Rubik'}} variant="caption">
            {arg.news.date}
            </Typography>
            {arg.news.link!=='None'&&
            (<a href='' style={{marginRight:'1vw', textDecoration:'none'}}>
                <DescriptionIcon style={{color:'#006ad0',fontSize:'2.5vh'}}/>
                <Typography style={{color:'#006ad0',fontFamily:'Rubik'}} variant="caption">
                    Download Document
                </Typography>
            </a>)}
            </div>
            
            </div>
           
            {/* </div> */}
            {/* <Typography variant="body2">
                
            </Typography> */}
        </div>
    );
    
}


function BlogItem(arg) {
    const classes=useStyles();

    const readmoreHandler=()=>{
        console.log(arg.blog.id)
        window.location=`/blogs/${(arg.blog.Id)}`     
    }

    // const history = useHistory();

    const matches = useMediaQuery('(min-width:600px)');
    return(
        <div className={classes.blogitem}>
            <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik&display=swap%27' />
            <Card className={classes.card}>
                <div className={classes.cardcontent}>
                <Typography className={classes.blogtitle} style={{fontFamily:'Rubik',fontWeight:'600'}} variant="h6">
                    {arg.blog.title}
                </Typography>
                <Typography style={{fontFamily:'Rubik', marginTop:'1vh'}} variant="body1">
                    {arg.blog.summary}
                </Typography>
                <Divider variant='middle' style={{marginTop:'2vh'}} />
                <div className={classes.cardfooter}>
                <Grid style={{marginTop:'1.5vh'}} container spacing={3}>
        <Grid  item xs={3}>
          <div><PersonIcon style={{margin:'auto auto'}}/></div> 
          <div><Typography style={{color:'#006ad0',fontFamily:'Rubik'}} variant="caption">
                    Admin
                </Typography></div>
          
        </Grid>
        <Grid item xs={3}>
        <div><AccessTimeIcon style={{margin:'auto auto'}}/></div> 
          <div><Typography style={{color:'#006ad0',fontFamily:'Rubik'}} variant="caption">
                    {arg.blog.date}
                </Typography></div>
        </Grid>
        <Grid item xs={3}>
        <div><Badge badgeContent={arg.blog.comments.length} color="secondary"><ChatBubbleIcon style={{margin:'auto auto'}}/></Badge></div> 
          <div><Typography style={{color:'#006ad0',fontFamily:'Rubik'}} variant="caption">
                    Comments  
                </Typography></div>
        </Grid>
        <Grid item xs={3}>
        {/* <Link to={`/blogs/${arg.blog.id}`}> */}
        <Button onClick={readmoreHandler} style={{background:'#006ad0',color:'white'}}>
            {matches&&<AddIcon style={{fontSize:'2vh'}}/>}
        <Typography variant="body2">
                    Read More
                </Typography>
        </Button>
        </Grid>
      </Grid>
                </div>
                </div>
            </Card>
        </div>
    );
}



const Misc = ({blogdetails,newsarray}) => {

    const matches = useMediaQuery('(min-width:990px)');
    const classes=useStyles();

    return ( 
        <div className={classes.divroot}>
            <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik&display=swap%27' />
            <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap' />
            <div className={classes.root}>
    {matches&&(
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Container className={`${classes.paper} ${classes.newsgrid}`}>
              <Typography variant='h5' style={{fontFamily:'Rubik',color:'#006ad0',fontWeight:'600',letterSpacing:'0.2vw'}}><u>NEWS & UPDATES!</u></Typography>
            <Box className={classes.newsdiv} component="div" m={1}>
               {newsarray.map((news,i)=><NewsItem news={news} key={i}/>)} 
            </Box>
          </Container>
        </Grid>
        <Grid item xs={6}>
          <Container className={`${classes.paper}`}>
          <Typography variant='h5' style={{fontFamily:'Rubik',color:'#006ad0',fontWeight:'600',letterSpacing:'0.2vw'}}><u>BLOG</u></Typography>
            <Box className={classes.blogdiv} component="div" m={1}>
                {blogdetails.map((blog,i)=><BlogItem blog={blog} key={i}/>)}
            </Box>
          </Container>
        </Grid>
      </Grid>)}


      {/* ---------------------------------Mobile----------------------------------------------- */}

      {!matches&&(
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Container className={`${classes.paper} ${classes.newsgrid}`}>
          <Typography variant='h5' style={{fontFamily:'Rubik',color:'#006ad0'}}><u>NEWS & UPDATES!</u></Typography>
            <Box className={classes.newsdiv} component="div" m={1}>
               {newsarray.map((news,i)=><NewsItem news={news} key={i}/>)} 
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12}>
        <Container className={`${classes.paper}`}>
          <Typography variant='h5' style={{fontFamily:'Rubik',color:'#006ad0',fontWeight:'600',letterSpacing:'0.2vw'}}><u>BLOG</u></Typography>
            <Box className={classes.blogdiv} component="div" m={1}>
                {blogdetails.map((blog,i)=><BlogItem blog={blog} key={i}/>)}
            </Box>
          </Container>
        </Grid>
      </Grid>)}
    </div>
        </div>
     );
}
 
export default Misc;