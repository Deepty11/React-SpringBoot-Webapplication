import React, {Component} from 'react';
import UserService from "../services/UserService";

class DeleteUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.match.params.id,
            firstName: '',
            lastName:'',
            username:'',
            password:''
          }
        this.deleteUser=this.deleteUser.bind(this);
    }
    deleteUser(){
        UserService.deleteUser(this.state.id).then((res)=>{
            this.props.history.push("/users");

        });
    }
    render() { 
        return (
            
            // <!-- Modal -->
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Are you sure you want to delete it? 
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button className="btn btn-primary" onClick={this.deleteUser}>Delete</button>
                  </div>
                </div>
              </div>
            </div>  );
    }
}
 
export default DeleteUserComponent;