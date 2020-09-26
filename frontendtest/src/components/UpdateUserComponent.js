import React ,{Component} from 'react';
import UserService from "../services/UserService";

class UpdateUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.match.params.id,
            firstName:'',
            lastName:'',
            username:'',
            password:''

          }
          this.changeFirstNamehandler=this.changeFirstNamehandler.bind(this);
          this.changelastNamehandler=this.changelastNamehandler.bind(this);
          this.changeUserNamehandler=this.changeUserNamehandler.bind(this);
          this.changePasswordhandler=this.changePasswordhandler.bind(this);
          this.updateUser=this.updateUser.bind(this);
          this.cancel=this.cancel.bind(this);
    }
    componentDidMount(){
        UserService.getUserById(this.state.id).then((response)=>{
            let user=response.data;
            this.setState({
                firstName:user.firstName,
                lastName:user.lastName,
                username:user.username,
                password:user.password

            });
        })
    }
    changeFirstNamehandler=(event)=>{
        this.setState({firstName: event.target.value});
    }
    changelastNamehandler=(event)=>{
        this.setState({lastName: event.target.value});
    }
    changeUserNamehandler=(event)=>{
        this.setState({username: event.target.value});
    }
    changePasswordhandler=(event)=>{
        this.setState({password: event.target.value});
    }
    updateUser=(e)=>{
        e.preventDefault();
        let user={firstName:this.state.firstName,
                lastName:this.state.lastName,
                username:this.state.username,
                password:this.state.password};

        console.log("emoployee:"+JSON.stringify(user));
        UserService.updateUser(user,this.state.id).then((res)=>{
            this.props.history.push("/users");
        })
       
                

    }
    cancel(){
        this.props.history.push("/users")
    }
    render() { 
        return (<div className="Container">
                   <div className="row">
                        <div className="card col md-6 offset-md-3 offset-md-3"> 
                            <h1>Update User Information</h1>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>FirstName</label>
                                        <input type="text" 
                                        placeholder="Firstname" 
                                        name="firstName"
                                        className="form-control"
                                        value={this.state.firstName}
                                        onChange={this.changeFirstNamehandler}/>

                                    </div>
                                    <div className="form-group">
                                        <label>lastName</label>
                                        <input type="text" 
                                        placeholder="lastName" 
                                        name="lastName"
                                        className="form-control"
                                        value={this.state.lastName}
                                        onChange={this.changelastNamehandler}/>

                                    </div>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" 
                                        placeholder="Username" 
                                        name="username"
                                        className="form-control"
                                        value={this.state.username}
                                        onChange={this.changeUserNamehandler}/>

                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" 
                                        placeholder="password" 
                                        name="password"
                                        className="form-control"
                                        value={this.state.password}
                                        onChange={this.changePasswordhandler}/>

                                    </div>
                                    
                                    <button className="btn btn-success" 
                                            onClick={this.updateUser}>Save</button>
                                    <button className="btn btn-danger" 
                                            onClick={this.cancel}
                                            style={{marginLeft:"10px"}}>Cancel</button>

                                </form>
                            </div>

                        </div>
                        
                    </div>
                </div>  );
    }
    
}
 
export default UpdateUserComponent;