import Carousel from "./carousel";
import OurServices from "./our-services";
import Divider from '@material-ui/core/Divider';
import NewClients from "./recentclients";
import Misc from "./misc";

const HomePage = ({blogdetails,newsarray,clientlist}) => {
    return ( 
        <div>
            <Carousel/>
            <Divider style={{marginTop:'5vh'}}/>
            <OurServices/>
            <NewClients clientlist={clientlist}/>
            <Misc blogdetails={blogdetails} newsarray={newsarray}/>
        </div>
     );
}
 
export default HomePage;