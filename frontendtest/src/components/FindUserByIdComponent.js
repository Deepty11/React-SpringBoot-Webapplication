import UserService from "../services/UserService";
import UserComponent from "./UserComponent";

class FindUserByIdComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user:{}
         }
    }

    componentDidMount(){
        UserService.getUserById().then((res)=>{
            this.setState({user:res.data});

        });
    }
    
    render() { 
        return (<div></div>  );
    }
}
 
export default FindUserByIdComponent ;