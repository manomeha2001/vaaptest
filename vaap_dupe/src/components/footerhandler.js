
import Footer from './Footer'
import Footer1 from './Footer1'
import useMediaQuery from '@material-ui/core/useMediaQuery'



function FooterHandler() {
  const match=useMediaQuery('(min-width:600px)')

  return (
    

      <div style={{overflowX:'hidden'}} className="content">
      
       
            {match?<Footer/>:<Footer1/>}
            

        
              
      </div>
   
    
  );
}

export default FooterHandler;