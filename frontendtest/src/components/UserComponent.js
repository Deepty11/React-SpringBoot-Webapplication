import React,{Component} from 'react'
import UserService from '../services/UserService'

class UserComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            users:[]

        }
        this.addUser=this.addUser.bind(this);
        this.editUser=this.editUser.bind(this);
        this.deleteUser=this.deleteUser.bind(this);
    }
    editUser(id){
        this.props.history.push(`/updateUser/${id}`);

    }
    deleteUser(id){
        UserService.deleteUser(id).then((res)=>{
            this.props.history.push("/users");
        });

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
                            <td>Update</td>
                            <td>Delete</td>
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
                                        <td>
                                            <button onClick={()=>{this.editUser(user.id)}} 
                                                    className="btn btn-info">Update</button>
                                        </td>
                                        <td><button onClick={()=>{this.deleteUser(user.id)}} 
                                                    className="btn btn-info">Delete</button>
                                        </td>
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