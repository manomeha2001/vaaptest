import {useHistory, useParams} from 'react-router-dom';
// import {useState} from 'react';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ReactFontLoader from 'react-font-loader';
import Commentbg from '../assets/Message.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({

    rootdiv:{
        display:'flex',
        alignItems: 'flex-start',
        justifyContent:'center',
        justifyItems:'center',
        overflowX:'hidden'

    },
    rootdivphone:{
        display:'flex',
        flexDirection:'column',
        alignItems: 'flex-start',
        justifyContent:'center',
        justifyItems:'center',
        overflowX:'hidden'
    },

    adminIcon:{
        marginLeft: '5vh',
        // background:'#09417c',
        // padding:'0.8vh',
        marginTop:'3vh',
        marginBottom:'3vh'
    },
    adminiconmobile:{
        marginLeft: '2vh',
        // background:'#09417c',
        // padding:'0.8vh',
        marginTop:'3vh',
        marginBottom:'0vh'
    },
    blogbody:{
        width:'100%',
    },
    bodypaper:{
        width:'90%',
        marginLeft:'1vh',
        marginRight:'5vh',
        marginTop:'3vh',
        marginBottom:'3vh',
        paddingBottom:'1vh',
        overflowX:'hidden'
    },

    commentdiv:{
        display:'flex',
        alignItems: 'flex-start',
        justifyContent:'flex-start',
        justifyItems:'flex-start',
        marginTop: '5vh',
        marginBottom:'5vh',
        marginLeft:'1vh',
        overflowX:'hidden'

    },
    commentdivmob:{
        display:'flex',
        alignItems: 'flex-start',
        flexDirection:'column',
        justifyContent:'flex-start',
        justifyItems:'flex-start',
        marginTop: '5vh',
        marginBottom:'5vh',
        marginLeft:'1vh',
        overflowX:'hidden'

    },
    commenticon:{
        fontSize:'11vh',marginLeft:'1vh',maxWidth:'10vw',marginTop:'4vh'
    },
    commenticonmob:{
        fontSize:'7vh',marginLeft:'1vh',marginTop:'1vh'
    },
    msgbox:{
        background: '#75b0e9',
        width:'65%',
        // minWidth:'50vw',
        // overflowY:'scroll',
        minHeight:'20vh',
        marginLeft:'2.5vh',
        padding:'1vh',
        overflowX:'hidden'
    
    },
    msgboxmob:{
        background: '#75b0e9',
        width:'100%',
        // minWidth:'50vw',
        // overflowY:'scroll',
        minHeight:'20vh',
        // marginLeft:'-2.3vh',
        padding:'1vh',
        overflowX:'hidden'
    
    },
    form:{
        display:'flex',
        flexDirection:'column'
       
    },
    formtext:{
        width:'100%',marginTop:'3vh',marginBottom:'3vh'
    },
    formtextmob:{
        width:'100%',marginTop:'3vh',marginBottom:'3vh'
    }


}))


function Comments({comment,key}) {

    const match=useMediaQuery('(min-width:550px)')

    const classes=useStyles();

    return(
            <div className={match?classes.commentdiv:classes.commentdivmob}>
                <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap' />
                {match&&<AccountCircleIcon className={classes.commenticon}/>}

                <div className={match?classes.msgbox:classes.msgboxmob}>
                    {!match&&<AccountCircleIcon className={classes.commenticonmob} />}
                    <div style={{marginLeft:'1vw',marginTop:'1vh',marginRight:'1vw',marginBottom:'1vh'}}>
                    <Typography style={{fontFamily:'Rubik'}} variant='h6' >
                        {comment.name}
                    </Typography>
                    <Typography variant='body2' style={{color:'rgb(60,60,60)',fontFamily:'Rubik'}} >
                        {comment.email}
                    </Typography>
                    <Typography variant='subtitle2' style={{marginBottom:'2vh',fontFamily:'Rubik'}} >
                        {comment.date} 
                    </Typography>
                    <Typography variant='body1' style={{marginRight:'1vw',fontFamily:'Rubik'}} >
                        {comment.body}
                    </Typography>
                    </div>
                </div>
            </div>
    );
}



const Blogdetails = ({blogdetails}) => {

    const {id}=useParams();
    const blog=blogdetails.filter((blogs)=>blogs.Id===id)

    const [comment, setComment] = useState('')
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [comments,setComments]=useState(blog[0].comments)

    const handleCommentChange=(e)=>{
        setComment(e.target.value)
    }
    
    const handleNameChange=(e)=>{
        setName(e.target.value)
    }

    const handleMailChange=(e)=>{
        setMail(e.target.value)
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name!==''&&comment!==''&&mail!==''){
            const newcomment={'name':name,'body':comment,'email':mail,'date':'1/2/20'}
            const newArray =comments.slice();
            newArray.push(newcomment)
            // setComments(...comments,newcomment)
            console.log(newArray)
            setComments(newArray)
        }
        
        
    }

    const match=useMediaQuery('(min-width:550px)')
    

    const classes=useStyles();
    
    
    

    return ( 
        <Container style={{overflowX:'hidden',paddingTop:'3vh',paddingBottom:'3vh'}}>
            <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap' />
            <div className={match?classes.rootdiv:classes.rootdivphone}>
            
            {/* {console.log(blog)} */}
            <div className={match?classes.adminIcon:classes.adminiconmobile}>
                <div style={{background:'#09417c',
                    padding:'0.8vh'}}>
                <AccountBoxIcon style={{fontSize:'8vh',color:'white'}}/>
                    <Typography variant='body1' style={{color:'white',fontFamily:'Rubik',marginLeft:'0.5vw',marginTop:'-1vh'}}>
                        Admin
                    </Typography>
                    </div>
                    <Typography style={{fontFamily:'Rubik'}} variant='subtitle2' >
                    {blog[0].date}
                    </Typography>
            </div>

            <div className={classes.blogbody}>
            <Paper className={classes.bodypaper} >
                    <Typography variant='h5' style={{color:'black',fontFamily:'Rubik',marginLeft:'1vw',fontWeight:'600'}}>
                        {blog[0].title}
                    </Typography>
                    <div style={{marginLeft:'1vw',marginTop:'1vh',marginRight:'1vw'}}>
                    <Typography variant='h6' style={{color:'black',fontFamily:'Rubik',textAllign:'center',fontWeight:'500'}}>
                        {blog[0].summary}
                    </Typography></div>
                    <div style={{marginLeft:'1vw',marginTop:'1vh',marginRight:'1vw'}}>
                    <Typography variant='body1' style={{color:'black',fontFamily:'Rubik',textAllign:'center'}}>
                        {blog[0].body}
                    </Typography></div>

            </Paper>
            </div>
            </div>
            <Container>
            {/* style={{color:'black',fontFamily:'Rubik',textAllign:'center',fontWeight:'500'}} */}
            <Typography variant='h5' style={{marginTop:'2vh',fontFamily:'Rubik',fontWeight:'500'}} >
                        <u>Comments({comments.length})</u>
                    </Typography>


                {comments.map((comment,key)=><Comments comment={comment} key={key} />)}
                {/* <Comments/>
                <Comments/> */}
            <Typography variant='h5' style={{marginTop:'3vh',fontFamily:'Rubik',fontWeight:'500'}} >
                        <u>Leave Your Reply</u>
                    </Typography>
            </Container>
            
            <Container className={classes.form}>

                <form onSubmit={handleSubmit} >
                    <div>
                        <TextField
                        className={match?classes.formtext:classes.formtextmob}
                        required
                        id="comment-body"
                        label="Comment"
                        value={comment}
                        multiline
                        rows={5}
                        variant="outlined"
                        onChange={handleCommentChange}
                        />
                    </div>
                    <div>
                        <TextField
                        className={match?classes.formtext:classes.formtextmob}
                        required
                        id="comment-name"
                        value={name}
                        label="Name"
                        variant="outlined"
                        onChange={handleNameChange}
                        />
                    </div>
                    <div>
                        <TextField
                        className={match?classes.formtext:classes.formtextmob}
                        required
                        value={mail}
                        id="comment-mail"
                        type='email'
                        label="Email-ID"
                        variant="outlined"
                        onChange={handleMailChange}
                        />
                    </div>
                    <Button type='submit' style={{background:'#09417c',color:'white',marginBottom:'4vh'}}>
                        Post
                    </Button>
                </form>
            </Container>

        </Container>

        
     );
}
 
export default Blogdetails;