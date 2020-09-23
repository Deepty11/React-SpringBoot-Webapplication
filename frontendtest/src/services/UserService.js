import axios from 'axios';

const USER_LIST_URL="http://localhost:8080/api/users";
const CREATE_USER_LIST_URL="http://localhost:8080/api/save-user";

class UserService{
    getUser(){
        return axios.get(USER_LIST_URL);
    }
    createUser(user){
        return axios.post(CREATE_USER_LIST_URL,user);
    }
}
export default new UserService();