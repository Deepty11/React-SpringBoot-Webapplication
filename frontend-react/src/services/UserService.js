import axios from 'axios'

const USERS_RESTAPI_URL="http://localhost:8080/api/users";

class UserService{
    
    getUsers(){
       return axios.get(USERS_RESTAPI_URL);
    }

}
//export object of UserService
export default new UserService()