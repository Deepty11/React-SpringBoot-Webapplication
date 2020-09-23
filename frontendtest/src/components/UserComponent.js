import React,{Component} from 'react'
import UserService from '../services/UserService'

class UserComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            users:[]

        }
        this.addUser=this.addUser.bind(this);
    }
    addUser(){
        this.props.history.push("/addUser");
    }
    componentDidMount(){
        UserService.getUser().then((response)=>{
            this.setState({users:response.data});
        });
    }
    render(){
        return(
            <div>
                <h1 className="title-centered">Users Information</h1>
                <button className="btn btn-primary" onClick={this.addUser}>Add User</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>UserID</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Username</td>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            this.state.users.map(
                                user=>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.username}</td>
                                    </tr>

                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        )
    }
}
export default UserComponent;